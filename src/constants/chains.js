export const networks = [1, 11155111, 3,4,5,42,123, 1337, 65110000, 65010000]

export const ChainId = {
  MAINNET: 1,
  SEPOLIA: 11155111,
  ROPSTEN: 3,
  RINKEBY: 4,
  GÖRLI: 5,
  KOVAN: 42,
  DEVNET: 65110000,
  AUTONITY: 65010000,
  PARASTATE: 123,
  GANCHE: 1337
};

export const routerAddress = new Map();
routerAddress.set(ChainId.MAINNET, "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");
// routerAddress.set(ChainId.SEPOLIA, "0x8350d49A712936C8cCd33bE51812aE661C65ad96");
routerAddress.set(ChainId.SEPOLIA, "0x6590704d94b4f9fc11a3189bbab768522f7f71d4");
routerAddress.set(ChainId.ROPSTEN, "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");
routerAddress.set(ChainId.RINKEBY, "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");
routerAddress.set(ChainId.GÖRLI, "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");
routerAddress.set(ChainId.KOVAN, "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");
routerAddress.set(ChainId.DEVNET, "0x04e555283D37aE85F6eB311fe2578F3B3f3dFc52");
routerAddress.set(ChainId.AUTONITY, "0x04e555283D37aE85F6eB311fe2578F3B3f3dFc52");
routerAddress.set(ChainId.PARASTATE, "0x07a1905D44feeA439ceFAabd11a63bEf684abE11");
routerAddress.set(ChainId.GANCHE, "0x0F44AC51198D8F99847db6C431448dBC673428f1");

