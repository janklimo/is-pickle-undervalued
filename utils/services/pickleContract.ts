import { ethers, BigNumber } from "ethers";
import { Contract as MulticallContract, Provider } from "ethers-multicall";

import { Erc20__factory } from "../../contracts/factories/Erc20__factory";

const pickleAddress = "0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5";

const pickleContract = new MulticallContract(pickleAddress, Erc20__factory.abi);

const infuraProvider = new ethers.providers.InfuraProvider(
  "mainnet",
  process.env.INFURA_KEY
);
const multicallProvider = new Provider(infuraProvider, 1);

export const getTotalSupply = async (): Promise<number> => {
  const [pickleTotalSupply] = await multicallProvider.all<BigNumber[]>([
    pickleContract.totalSupply(),
  ]);

  return parseFloat(ethers.utils.formatEther(pickleTotalSupply));
};
