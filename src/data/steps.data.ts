import { Step } from 'react-joyride'

export interface TourSteps {
  [id: string]: Step[]
}

export interface TourProgress {
  [stepKey: string]: TourItem
}

export interface TourItem {
  progress: number
  maxSteps: number
}

export const initialTourProgress = {
  "0": 0,
  "1": 0,
  "2": 0,
  "3": 0,
  "4": 0,
  "5": 0
}

// export interface Step {
//   target: string
//   content: string
//   style?: any
// }

//   id: "1",
//   lessonTitle: "Getting Started",
//   numberOfLessons: 4

//   id: "2",
//   lessonTitle: "Adding an NFT",
//   numberOfLessons: 6

//   id: "3",
//   lessonTitle: "Trading NFTs",
//   numberOfLessons: 5

//   id: "4",
//   lessonTitle: "Importing an NFT from Ethereum",
//   numberOfLessons: 4

// Selling an NFT

// Viewing your NFTs

// Getting Help

// Connecting Your Wallet / Connection Details (Advanced)

export const steps: TourSteps = {
  "0": [ // getting-started
    // {
    //   target: "#tour-1-question",
    //   content: "answer the question",
    // },
    {
      target: "#tour-1-wallet",
      content: "connect your wallet",
    },
    {
      target: "#tour-1-mainnet",
      content: "make sure you are on mainnet if you want the transaction to be real",
    },
    {
      target: "#tour-1-learn",
      content: "you can always go to the 'Learn' tab to get more help! FAQ is also helpful",
    }
  ],
  "1": [ // adding-an-nft
    {
      target: "#tour-1-wallet",
      content: "make sure your wallet is created and connected before continuing"
    },
    {
      target: "#tour-2-add-nft",
      content: "click on the 'Add Nft' tab to add your nft"
    },
    {
      target: "#tour-2-title",
      content: "make sure to give your nft a title!"
    },
    {
      target: "#add-nft-price",
      content: "make sure you set a price for your nft, and specify the currency this price should be viewed in next to it."
    },
    {
      target: "#tour-2-upload-image",
      content: "then upload the image of the nft you want to create!"
    },
    {
      target: "#add-nft-submit-button",
      content: "then submit the nft form to initiate the transaction to mint your NFT"
    }
  ],
  "2": [ // viewing-your-nfts
    {
      target: "#tour-1-wallet",
      content: "make sure your wallet is connected before viewing your NFTs",
    },
    {
      target: "#tour-3-gallery",
      content: "click the 'Gallery' tab to go to your gallery",
    },
    {
      target: "#tour-3-nft-gallery-list",
      content: "these are all of your nft's. you can sell the ones that aren't already listed, and view the status of nft's you own that are already on sale in the marketplace!",
    },
  ],
  "3": [ // selling-your-nfts
    {
      target: "#tour-4-nft-gallery-list",
      content: "make sure that you first own nfts so that you are able to sell one",
    },
    {
      target: ".tour-4-nft-sell-button",
      content: "click the 'sell' button below the nft to get started selling it",
    },
    {
      target: "#sell-nft-price",
      content: "set the price you would like to sell your nft for. you can choose 'SOL' or 'USDC'",
    },
    {
      target: "",
      content: "",
    },
    {
      target: "",
      content: "",
    },
  ],
  "4": [
    {
      target: "",
      content: ""
    }
  ]
}
