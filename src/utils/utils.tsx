import { useCallback, useEffect, useMemo, useState } from 'react';
import { PublicKey } from '@solana/web3.js';
import BN from 'bn.js';

export async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const percentFormat = new Intl.NumberFormat(undefined, {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function floorToDecimal(
  value: number,
  decimals: number | undefined | null,
) {
  return decimals
    ? Math.floor(value * 10 ** decimals) / 10 ** decimals
    : Math.floor(value);
}

export function divideBnToNumber(numerator: BN, denominator: BN): number {
  const quotient = numerator.div(denominator).toNumber();
  const rem = numerator.umod(denominator);
  const gcd = rem.gcd(denominator);
  return quotient + rem.div(gcd).toNumber() / denominator.div(gcd).toNumber();
}

export function getTokenMultiplierFromDecimals(decimals: number): BN {
  return new BN(10).pow(new BN(decimals));
}

const localStorageListeners = {};

export function useLocalStorageStringState(
  key: string,
  defaultState: string | null = null,
): [string | null, (newState: string | null) => void] {
  const state = localStorage.getItem(key) || defaultState;

  const [, notify] = useState(key + '\n' + state);

  useEffect(() => {
    if (!localStorageListeners[key]) {
      localStorageListeners[key] = [];
    }
    localStorageListeners[key].push(notify);
    return () => {
      localStorageListeners[key] = localStorageListeners[key].filter(
        (listener) => listener !== notify,
      );
      if (localStorageListeners[key].length === 0) {
        delete localStorageListeners[key];
      }
    };
  }, [key]);

  const setState = useCallback<(newState: string | null) => void>(
    (newState) => {
      const changed = state !== newState;
      if (!changed) {
        return;
      }

      if (newState === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, newState);
      }
      localStorageListeners[key].forEach((listener) =>
        listener(key + '\n' + newState),
      );
    },
    [state, key],
  );

  return [state, setState];
}

export function useLocalStorageState<T = any>(
  key: string,
  defaultState: T | null = null,
): [T, (newState: T) => void] {
  let [stringState, setStringState] = useLocalStorageStringState(
    key,
    JSON.stringify(defaultState),
  );
  return [
    useMemo(() => stringState && JSON.parse(stringState), [stringState]),
    (newState) => setStringState(JSON.stringify(newState)),
  ];
}

export function useEffectAfterTimeout(effect, timeout) {
  useEffect(() => {
    const handle = setTimeout(effect, timeout);
    return () => clearTimeout(handle);
  });
}

export function useListener(emitter, eventName) {
  const [, forceUpdate] = useState(0);
  useEffect(() => {
    const listener = () => forceUpdate((i) => i + 1);
    emitter.on(eventName, listener);
    return () => emitter.removeListener(eventName, listener);
  }, [emitter, eventName]);
}

export function abbreviateAddress(address: PublicKey, size = 4) {
  const base58 = address.toBase58();
  return base58.slice(0, size) + '…' + base58.slice(-size);
}
