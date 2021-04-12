import CordIcon from "../assets/cord.png";
import covalIcon from "../assets/coval-logo.png";
import sslIcon from "../assets/ssl_logo.png";

import {
  Pool,
  Token,
  PoolStatus,
  PoolType,
  PoolCategory,
  BoostLevel,
  PoolIconType,
} from "../types";

const boostLevels: { [key: string]: BoostLevel[] } = {
  normal: [
    { level: 1, percentage: "10%" },
    { level: 2, percentage: "20%" },
    { level: 3, percentage: "40%" },
  ],
  extended: [
    { level: 1, percentage: "10%" },
    { level: 2, percentage: "20%" },
    { level: 3, percentage: "30%" },
    { level: 4, percentage: "50%" },
    { level: 5, percentage: "75%" },
    { level: 6, percentage: "100%" },
  ],
  new: [
    { level: 1, percentage: "5%" },
    { level: 2, percentage: "10%" },
    { level: 3, percentage: "15%" },
    { level: 4, percentage: "25%" },
    { level: 5, percentage: "30%" },
    { level: 6, percentage: "40%" },
  ],
};

// Mainnet tokens
export const tokens: { [tokenName: string]: Token } = {
  ZZZ: {
    name: "ZZZ",
    address: "0xc75F15AdA581219c95485c578E124df3985e4CE0",
    abi: require("./abi/erc20_abi.json"),
    decimals: 18,
  },
  BPT: {
    name: "BPT",
    address: "0x4f9dde745bf54f207dfc1fe34896d6752c63ad07",
    abi: require("./abi/erc20_abi.json"),
    decimals: 18,
  },
  ZZZETH: {
    name: "ZZZETHLP",
    address: "0x7d829fcc84f9dca5a3e6d9fb73545bacf350146a",
    abi: require("./abi/erc20_abi.json"),
    isLPToken: true,

    decimals: 18,
  },
  ZZZNAP: {
    name: "ZZZNAPLP",
    // Change this
    address: "0x0DE0322D3ac0d5002e2bc9c3a188728728D90799",
    abi: require("./abi/erc20_abi.json"),
    decimals: 18,
    isLPToken: true,
  },
  DREAMETH: {
    name: "DREAMETHLP",
    address: "0x19b3de48392778f8e6ef332fee002aa5e15fe41a",
    abi: require("./abi/erc20_abi.json"),
    decimals: 18,
    isLPToken: true,
  },
  DREAM: {
    name: "DREAM",
    address: "0xa93D5Cfaa41193b13321c035b4bDD2B534172762",
    abi: require("./abi/erc20_abi.json"),
    decimals: 18,
  },
  WETH: {
    name: "WETH",
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    abi: require("./abi/erc20_abi.json"),
    decimals: 18,
  },
  DAI: {
    name: "DAI",
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    abi: require("./abi/erc20_abi.json"),
    decimals: 18,
  },
  NAP: {
    name: "NAP",
    address: "0x66b3037aa8dd64c3ef1aee13a4d1f2509f672d1c",
    abi: require("./abi/erc20_abi.json"),
    decimals: 18,
  },
  COVAL: {
    name: "COVAL",
    address: "0x3d658390460295fb963f54dc0899cfb1c30776df",
    abi: require("./abi/erc20_abi.json"),
    decimals: 8,
  },
  COVALETH: {
    name: "COVALETHLP",
    address: "0x3bf1b837ccc1f62114a3e74ced4fcfb121d7e52a",
    abi: require("./abi/erc20_abi.json"),
    decimals: 18,
    isLPToken: true,
  },
  CORD: {
    name: "CORD",
    address: "0x74Fb9DA15d4f9a34D8C825798DA0Fa5c400DadE1",
    abi: require("./abi/erc20_abi.json"),
    decimals: 18,
  },
  CORDETH: {
    name: "CORDETH",
    address: "0xf5ae4b8017fdd81d5ee25132d6bbcd75442be90a",
    abi: require("./abi/erc20_abi.json"),
    decimals: 18,
    isLPToken: true,
  },
  AHFETH: {
    name: "AHFETHLP",
    address: "0x0b1d5a651c16e4218613ca4a261cc9ef71f2ac9d",
    abi: require("./abi/erc20_abi.json"),
    decimals: 18,
    isLPToken: true,
  },
  AHF: {
    name: "AHF",
    address: "0xd6d3608f2d770d0a8d0da62d7afe21ea1da86d9c",
    abi: require("./abi/erc20_abi.json"),
    decimals: 18,
  },
  SSL: {
    name: "SSL",
    address: "0x0d9227f9c4ab3972f994fccc6eeba3213c0305c4",
    abi: require("./abi/erc20_abi.json"),
    decimals: 18,
  },
  SSLETH: {
    name: "SSLETHLP",
    address: "0x287856d10418e01ef1e93df9962b04d9a3a521c9",
    abi: require("./abi/erc20_abi.json"),
    decimals: 18,
    isLPToken: true,
  },
};

// Mainnet pools
export const pools: Pool[] = [
  {
    id: "24",
    name: "Lucid Dream",
    address: "0x0e15f2d62dad62ceeec44a61c93d7909747f7bdc",
    token: tokens.ZZZETH,
    reward: tokens.NAP,
    rewardTokenPair: tokens.ZZZ,
    boostToken: tokens.NAP,
    uniPairToken: tokens.WETH,
    uniPairToken2: tokens.ZZZ,
    uniToken: tokens.ZZZETH,
    poolIcon: "🔮",
    abi: require("./abi/v3_multiplier_pool_abi.json"),
    info: "Stake ZZZETHLP for NAP.",
    purchaseFrom:
      "https://app.uniswap.org/#/add/ETH/0xc75f15ada581219c95485c578e124df3985e4ce0",
    usesNewAbi: true,
    boostLevels: boostLevels.new,
    poolStatus: PoolStatus.Ongoing,
    poolType: PoolType.LP,
    category: PoolCategory.ZZZ,
  },
  {
    id: "28",
    name: "Snoozer V4",
    address: "0x3e93ee1645974078fb6a4f4b9dc8f34ba60a920b",
    token: tokens.ZZZNAP,
    reward: tokens.NAP,
    rewardTokenPair: tokens.ZZ,
    boostToken: tokens.NAP,
    uniPairToken: tokens.ZZZ,
    uniPairToken2: tokens.NAP,
    uniToken: tokens.ZZZNAP,
    poolIcon: "💤",
    abi: require("./abi/v3_multiplier_pool_abi.json"),
    info: "Stake ZZZNAPLP for NAP.",
    purchaseFrom:
      "https://app.uniswap.org/#/add/0x66b3037aa8dd64c3ef1aee13a4d1f2509f672d1c/0xc75f15ada581219c95485c578e124df3985e4ce0",
    usesNewAbi: true,
    boostLevels: boostLevels.new,
    poolStatus: PoolStatus.Ongoing,
    poolType: PoolType.LP,
    category: PoolCategory.ZZZ,
  },
  {
    id: "1",
    name: "Sheep Counting",
    address: "0x3D46A6F8059DDA0cBcF923e8658AF6613DAbCdfE",
    token: tokens.ZZZ,
    reward: tokens.DREAM,
    rewardTokenPair: tokens.WETH,
    boostToken: tokens.NAP,
    uniPairToken: tokens.WETH,
    uniToken: tokens.ZZZETH,
    poolIcon: "🐏",
    abi: require("./abi/multiplier_pool_abi.json"),
    info: "Stake ZZZ for DREAM.",
    purchaseFrom:
      "https://uniswap.info/pair/0x7d829fcc84f9dca5a3e6d9fb73545bacf350146a",
    poolStatus: PoolStatus.Closed,
    poolType: PoolType.SingleToken,
    category: PoolCategory.ZZZ,
    boostLevels: boostLevels.extended,
  },
  {
    id: "2",
    name: "Napper v2",
    address: "0x4d16545f92F76a519b476F058A144a5e6dc543bc",
    token: tokens.ZZZ,
    reward: tokens.NAP,
    rewardTokenPair: tokens.ZZZ,
    boostToken: tokens.NAP,
    uniPairToken: tokens.ZZZ,
    uniToken: tokens.ZZZNAP,
    poolIcon: "😴",
    abi: require("./abi/multiplier_pool_abi.json"),
    info: "Stake ZZZ for NAP.",
    purchaseFrom:
      "https://uniswap.info/pair/0x7d829fcc84f9dca5a3e6d9fb73545bacf350146a",
    poolStatus: PoolStatus.Closed,
    poolType: PoolType.SingleToken,
    category: PoolCategory.ZZZ,
    boostLevels: boostLevels.normal,
  },
  {
    id: "3",
    name: "Dream",
    address: "0xe1fb77d1bb84d364c141591d3a8d6e7827846d27",
    token: tokens.NAP,
    boostToken: tokens.NAP,
    reward: tokens.DREAM,
    rewardTokenPair: tokens.WETH,
    uniPairToken: tokens.ZZZ,
    uniToken: tokens.ZZZNAP,
    poolIcon: "🔮",
    abi: require("./abi/multiplier_pool_abi.json"),
    info: "Stake NAP for DREAM.",
    purchaseFrom:
      "https://uniswap.info/pair/0x0de0322d3ac0d5002e2bc9c3a188728728d90799",
    poolStatus: PoolStatus.Closed,
    poolType: PoolType.SingleToken,
    category: PoolCategory.ZZZ,
    boostLevels: boostLevels.extended,
  },
  {
    id: "4",
    name: "Deep Sleep",
    address: "0xfeefac18962d8d5e16701ec0efa57af71279671d",
    token: tokens.ZZZNAP,
    boostToken: tokens.NAP,
    reward: tokens.DREAM,
    rewardTokenPair: tokens.WETH,
    uniPairToken: tokens.ZZZ,
    uniPairToken2: tokens.NAP,
    uniToken: tokens.ZZZNAP,
    poolIcon: "🛌",
    abi: require("./abi/multiplier_pool_abi.json"),
    info: "Stake ZZZNAPLP for DREAM.",
    purchaseFrom:
      "https://app.uniswap.org/#/add/0x66b3037aa8dd64c3ef1aee13a4d1f2509f672d1c/0xc75f15ada581219c95485c578e124df3985e4ce0",
    poolStatus: PoolStatus.Closed,
    poolType: PoolType.LP,
    category: PoolCategory.ZZZ,
    boostLevels: boostLevels.extended,
  },
  {
    id: "5",
    name: "Yawn",
    address: "0x6aA4478C45c7818A9b5c1C513D894cF74b596bd6",
    token: tokens.ZZZETH,
    reward: tokens.NAP,
    boostToken: tokens.NAP,
    rewardTokenPair: tokens.ZZZ,
    uniPairToken: tokens.WETH,
    uniPairToken2: tokens.ZZZ,
    uniToken: tokens.ZZZETH,
    poolIcon: "🥱",
    abi: require("./abi/multiplier_pool_abi.json"),
    info: "Stake ZZZETHLP for NAP.",
    purchaseFrom:
      "https://app.uniswap.org/#/add/ETH/0xc75f15ada581219c95485c578e124df3985e4ce0",
    poolStatus: PoolStatus.Retired,
    poolType: PoolType.LP,
    category: PoolCategory.ZZZ,
    boostLevels: boostLevels.normal,
    statusText: "Pools is running low, please withdraw or exit!",
  },
  {
    id: "6",
    name: "Snore",
    address: "0x02B8F9372958bD36BB1B6aB6eefeA36D2b0F4C14",
    token: tokens.ZZZ,
    reward: tokens.ZZZNAP,
    boostToken: tokens.NAP,
    rewardTokenPair: tokens.ZZZ,
    uniPairToken: tokens.ZZZ,
    uniPairToken2: tokens.NAP,
    uniToken: tokens.ZZZNAP,
    poolIcon: "😪",
    abi: require("./abi/multiplier_pool_abi.json"),
    info: "Stake ZZZ for ZZZNAPLP.",
    purchaseFrom:
      "https://uniswap.info/pair/0x7d829fcc84f9dca5a3e6d9fb73545bacf350146a",
    poolStatus: PoolStatus.Retired,
    poolType: PoolType.SingleTokenLPOutput,
    category: PoolCategory.ZZZ,
    statusText: "Pools is running low, please withdraw or exit!",
  },
  {
    id: "7",
    name: "Snoozer v2",
    address: "0xd264865B9B70e95E274480EF61501e8E9D54220D",
    token: tokens.ZZZNAP,
    reward: tokens.NAP,
    boostToken: tokens.NAP,
    rewardTokenPair: tokens.ZZZ,
    uniPairToken: tokens.ZZZ,
    uniPairToken2: tokens.NAP,
    uniToken: tokens.ZZZNAP,
    poolIcon: "💤",
    abi: require("./abi/multiplier_pool_abi.json"),
    info: "Stake ZZZNAPLP for NAP.",
    purchaseFrom:
      "https://app.uniswap.org/#/add/0x66b3037aa8dd64c3ef1aee13a4d1f2509f672d1c/0xc75f15ada581219c95485c578e124df3985e4ce0",
    poolStatus: PoolStatus.Retired,
    poolType: PoolType.LP,
    category: PoolCategory.ZZZ,
    boostLevels: boostLevels.normal,
  },
  {
    id: "8",
    name: "Hidden Gem",
    address: "0x4265c97020E1Cdead329BeDEa590F8a350f2B2f6",
    poolIconType: PoolIconType.Image,
    token: tokens.COVALETH,
    reward: tokens.NAP,
    rewardTokenPair: tokens.ZZZ,
    boostToken: tokens.NAP,
    uniPairToken: tokens.COVAL,
    uniPairToken2: tokens.WETH,
    uniToken: tokens.COVALETH,
    poolIcon: covalIcon,
    abi: require("./abi/multiplier_pool_abi.json"),
    info: "Stake COVALETHLP for NAP.",
    purchaseFrom:
      "https://app.uniswap.org/#/add/0x3d658390460295fb963f54dc0899cfb1c30776df/ETH",
    poolStatus: PoolStatus.Retired,
    poolType: PoolType.LP,
    category: PoolCategory.Partners,
    boostLevels: boostLevels.normal,
    partnerName: "COVAL",
  },
  {
    id: "9",
    name: "Sleeper",
    address: "0x2d0b69300c4637625681a19d840e8e9c1ebe4126",
    token: tokens.BPT,
    reward: tokens.ZZZ,
    rewardTokenPair: tokens.WETH,
    uniPairToken: tokens.WETH,
    uniToken: tokens.ZZZETH,
    poolIcon: "🛌",
    abi: require("./abi/zzz_bpt_pool_abi.json"),
    info: "Stake BPT for ZZZ.",
    purchaseFrom:
      "https://pools.balancer.exchange/#/pool/0x4f9dde745bf54f207dfc1fe34896d6752c63ad07/",
    poolStatus: PoolStatus.Closed,
    poolType: PoolType.SingleToken,
    category: PoolCategory.ZZZ,
  },
  {
    id: "10",
    name: "Dreamer",
    address: "0xeEE0B2ED62615441CE31c3166a4179a4B8FcE615",
    token: tokens.ZZZ,
    reward: tokens.ZZZETH,
    rewardTokenPair: tokens.WETH,
    uniPairToken: tokens.WETH,
    uniPairToken2: tokens.ZZZ,
    uniToken: tokens.ZZZETH,
    poolIcon: "🔮",
    abi: require("./abi/zzz_uni_pool_abi.json"),
    info: "Stake ZZZ for ZZZETHLP.",
    purchaseFrom:
      "https://beta.uniswap.info/pair/0x7d829fcc84f9dca5a3e6d9fb73545bacf350146a",
    poolStatus: PoolStatus.Closed,
    poolType: PoolType.SingleTokenLPOutput,
    category: PoolCategory.ZZZ,
  },
  {
    id: "11",
    name: "Napper",
    address: "0x05d0c213386e25BFB3f3872FCE6c7c7998A3E54C",
    token: tokens.ZZZ,
    reward: tokens.NAP,
    boostToken: tokens.NAP,
    rewardTokenPair: tokens.ZZZ,
    uniPairToken: tokens.WETH,
    uniToken: tokens.ZZZNAP,
    poolIcon: "😴",
    abi: require("./abi/multiplier_pool_abi.json"),
    info: "Stake ZZZ for NAP.",
    purchaseFrom:
      "https://uniswap.info/pair/0x7d829fcc84f9dca5a3e6d9fb73545bacf350146a",
    poolStatus: PoolStatus.Closed,
    poolType: PoolType.SingleToken,
    category: PoolCategory.ZZZ,
  },
  {
    id: "17",
    name: "Sergey's Dream",
    address: "0xdD676eb1a386EdE9896A8E99464A09D146677D3e",
    token: tokens.SSLETH,
    reward: tokens.SSL,
    boostToken: tokens.NAP,
    rewardTokenPair: tokens.WETH,
    uniPairToken: tokens.WETH,
    uniPairToken2: tokens.SSL,
    uniToken: tokens.SSLETH,
    poolIcon: sslIcon,
    poolIconType: PoolIconType.Image,
    abi: require("./abi/v3_multiplier_pool_abi.json"),
    info: "Stake SSLETHLP for SSL.",
    purchaseFrom:
      "https://uniswap.info/pair/0x287856d10418e01ef1e93df9962b04d9a3a521c9",
    usesNewAbi: true,
    poolStatus: PoolStatus.Retired,
    poolType: PoolType.SingleToken,
    category: PoolCategory.Partners,
    boostLevels: boostLevels.normal,
    partnerName: "SSL",
  },
  {
    id: "18",
    name: "Sergey's Nap",
    address: "0x3b9b119ce819425cfca04d362ac6273f290b4e05",
    token: tokens.NAP,
    reward: tokens.SSL,
    boostToken: tokens.NAP,
    rewardTokenPair: tokens.WETH,
    uniPairToken: tokens.ZZZ,
    uniToken: tokens.ZZZNAP,
    poolIcon: sslIcon,
    poolIconType: PoolIconType.Image,
    abi: require("./abi/v3_multiplier_pool_abi.json"),
    info: "Stake NAP for SSL.",
    purchaseFrom:
      "https://uniswap.info/pair/0x0de0322d3ac0d5002e2bc9c3a188728728d90799",
    usesNewAbi: true,
    poolStatus: PoolStatus.Retired,
    poolType: PoolType.SingleToken,
    category: PoolCategory.Partners,
    boostLevels: boostLevels.normal,
    partnerName: "SSL",
  },
  {
    id: "12",
    name: "Do good",
    address: "0x0525CCB9B7Df582dB9913b4d4cff5EeF4B3F2379",
    token: tokens.NAP,
    reward: tokens.CORD,
    rewardTokenPair: tokens.WETH,
    boostToken: tokens.NAP,
    uniPairToken: tokens.ZZZ,
    uniToken: tokens.ZZZNAP,
    poolIcon: CordIcon,
    poolIconType: PoolIconType.Image,
    abi: require("./abi/multiplier_pool_abi.json"),
    info: "Stake NAP for CORD.",
    purchaseFrom:
      "https://uniswap.info/pair/0x0de0322d3ac0d5002e2bc9c3a188728728d90799",
    poolStatus: PoolStatus.Ongoing,
    poolType: PoolType.SingleToken,
    category: PoolCategory.Partners,
    partnerName: "CORD",
  },
  {
    id: "13",
    name: "Be good",
    address: "0xf19Aeea493912398c7C6262bBB1652dBbBc84e87",
    token: tokens.CORD,
    reward: tokens.NAP,
    rewardTokenPair: tokens.ZZZ,
    boostToken: tokens.NAP,
    uniPairToken: tokens.WETH,
    uniToken: tokens.CORDETH,
    poolIcon: CordIcon,
    poolIconType: PoolIconType.Image,
    abi: require("./abi/multiplier_pool_abi.json"),
    info: "Stake CORD for NAP.",
    purchaseFrom:
      "https://uniswap.info/pair/0xf5ae4b8017fdd81d5ee25132d6bbcd75442be90a",
    poolStatus: PoolStatus.Ongoing,
    poolType: PoolType.SingleToken,
    category: PoolCategory.Partners,
    boostLevels: boostLevels.normal,
    partnerName: "CORD",
  },
  {
    id: "14",
    name: "Nightmare",
    address: "0x99f76eef412713164be0378bfb7332e561cc63a0",
    token: tokens.ZZZ,
    reward: tokens.AHF,
    rewardTokenPair: tokens.WETH,
    boostToken: tokens.NAP,
    uniPairToken: tokens.WETH,
    uniToken: tokens.ZZZETH,
    poolIcon: "😱",
    abi: require("./abi/v3_multiplier_pool_abi.json"),
    info: "Stake ZZZ for AHF.",
    purchaseFrom:
      "https://uniswap.info/pair/0x7d829fcc84f9dca5a3e6d9fb73545bacf350146a",
    usesNewAbi: true,
    poolStatus: PoolStatus.Retired,
    poolType: PoolType.SingleToken,
    category: PoolCategory.Partners,
    boostLevels: boostLevels.normal,
    partnerName: "AHF",
  },
  {
    id: "15",
    name: "Power Nap",
    address: "0xd38ce7463e89511b8056d78963487e6f14318172",
    token: tokens.ZZZETH,
    reward: tokens.NAP,
    rewardTokenPair: tokens.ZZZ,
    boostToken: tokens.NAP,
    uniPairToken: tokens.WETH,
    uniPairToken2: tokens.ZZZ,
    uniToken: tokens.ZZZETH,
    poolIcon: "🤫",
    abi: require("./abi/v3_multiplier_pool_abi.json"),
    info: "Stake ZZZETHLP for NAP.",
    purchaseFrom:
      "https://app.uniswap.org/#/add/ETH/0xc75f15ada581219c95485c578e124df3985e4ce0",
    usesNewAbi: true,
    poolStatus: PoolStatus.Retired,
    poolType: PoolType.LP,
    category: PoolCategory.ZZZ,
    boostLevels: boostLevels.normal,
  },
  {
    id: "16",
    name: "Snoozer v3",
    address: "0xbaeb03803f19d3aaa9d365ee51c9587bfcdc7c55",
    token: tokens.ZZZNAP,
    reward: tokens.NAP,
    rewardTokenPair: tokens.ZZZ,
    boostToken: tokens.NAP,
    uniPairToken: tokens.ZZZ,
    uniPairToken2: tokens.NAP,
    uniToken: tokens.ZZZNAP,
    poolIcon: "💤",
    abi: require("./abi/v3_multiplier_pool_abi.json"),
    info: "Stake ZZZNAPLP for NAP.",
    purchaseFrom:
      "https://app.uniswap.org/#/add/0x66b3037aa8dd64c3ef1aee13a4d1f2509f672d1c/0xc75f15ada581219c95485c578e124df3985e4ce0",
    usesNewAbi: true,
    poolStatus: PoolStatus.Retired,
    poolType: PoolType.LP,
    category: PoolCategory.ZZZ,
    boostLevels: boostLevels.normal,
  },
];

// Kovan test network tokens
export const kovanTokens: { [tokenName: string]: Token } = {
  ZZZ: {
    name: "ZZZ",
    address: process.env.REACT_APP_KOVAN_ZZZ || "",
    abi: require("./abi/erc20_abi.json"),
    decimals: 18,
  },
  NAP: {
    name: "NAP",
    address: process.env.REACT_APP_KOVAN_NAP || "",
    abi: require("./abi/erc20_abi.json"),
    decimals: 18,
  },
  DREAM: {
    name: "DREAM",
    address: process.env.REACT_APP_KOVAN_DREAM || "",
    abi: require("./abi/erc20_abi.json"),
    decimals: 18,
  },
};

export const kovanPools = [
  {
    id: 100,
    name: "KOVAN-ZZZ",
    address: process.env.REACT_APP_KOVAN_POOL || "",
    token: kovanTokens.ZZZ,
    reward: kovanTokens.NAP,
    boostToken: kovanTokens.NAP,
    poolIcon: "🔮",
    abi: require("./abi/multiplier_pool_abi.json"),
    info: "Stake ZZZ for NAP.",
    purchaseFrom:
      "https://beta.uniswap.info/pair/0x7d829fcc84f9dca5a3e6d9fb73545bacf350146a",
    poolStatus: PoolStatus.Ongoing,
    poolType: PoolType.SingleToken,
  },
  {
    id: 101,
    name: "KOVAN-ZZZ-2",
    address: process.env.REACT_APP_KOVAN_POOL_2 || "",
    token: kovanTokens.ZZZ,
    reward: kovanTokens.NAP,
    boostToken: kovanTokens.NAP,
    poolIcon: "🧨",
    abi: require("./abi/multiplier_pool_abi.json"),
    info: "Stake ZZZ for NAP.",
    purchaseFrom:
      "https://beta.uniswap.info/pair/0x7d829fcc84f9dca5a3e6d9fb73545bacf350146a",
    poolStatus: PoolStatus.Ongoing,
    poolType: PoolType.SingleToken,
  },
  {
    id: 102,
    name: "NAPDREAM",
    address: process.env.REACT_APP_KOVAN_POOL_3 || "",
    token: kovanTokens.NAP,
    reward: kovanTokens.DREAM,
    boostToken: kovanTokens.NAP,
    poolIcon: "🧨",
    abi: require("./abi/multiplier_pool_abi.json"),
    info: "Stake NAP for DREAM.",
    purchaseFrom:
      "https://beta.uniswap.info/pair/0x7d829fcc84f9dca5a3e6d9fb73545bacf350146a",
    poolStatus: PoolStatus.Ongoing,
    poolType: PoolType.SingleToken,
  },
];

export const otherPools = [
  {
    name: "Balancer Pool",
    skipRender: false,
    address: "0x4f9dde745bf54f207dfc1fe34896d6752c63ad07",
    abi: require("./abi/balancer_pool_abi.json"),
  },
];