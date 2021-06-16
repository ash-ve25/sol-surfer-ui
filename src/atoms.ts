import { atom } from 'recoil'
import { nftItems } from './data/marketplace.data'
import { steps, initialTourProgress } from './data/steps.data'

/**
 * General UI State
 */
export const darkModeState = atom({
  key: 'isDarkMode',
  default: true
})

/**
 * NFT Items Feature
 */
export const nftItemsState = atom({
  key: 'nftItems',
  default: nftItems
})

export const nftGalleryItemsState = atom({
  key: 'nftGalleryItems',
  // gets the even nft items
  default: nftItems.filter((nftItem, index) => index % 2 === 0)
})

/**
 * Joyride / Tutorials Feature
 */

export const joyrideState = atom({
  key: 'joyride',
  default: {
    steps: steps,
    progress: initialTourProgress,
    isJoyrideActive: false,
    activeLessonId: ""
  }
})


/**
 * Onboarding Feature
 */

export const onboardingState = atom({
  key: 'onboarding',
  default: []
})

// TODO: Can Combine to the one state above when ready
export const activeIndexState = atom({
  key: 'activeIndex',
  default: 0
})

export const showOnboardingState = atom({
  key: 'showOnboarding',
  default: true
})
