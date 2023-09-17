import { createAnvil, cleanAll } from "anvild";
import { parseAbi } from "abitype";
import { createPublicClient, createTestClient, getContract, http } from "viem";
import { mainnet } from "viem/chains";

import "dotenv/config";

export const createDI = async () => {
  await cleanAll();

  const node = await createAnvil({
    anvil: { forkUrl: process.env.MAINNET_URL || "https://cloudflare-eth.com" },
  });

  const providerUrl = `${node.host}:${node.port}`;

  const publicClient = createPublicClient({
    chain: mainnet,
    transport: http(providerUrl),
  });

  const testClient = createTestClient({
    chain: mainnet,
    transport: http(providerUrl),
    mode: "hardhat",
  });

  const contracts = {
    nodeOperator: getContract({
      abi: parseAbi([
        "function getNodeOperator(uint256,bool) view returns(bool,string,address,uint64,uint64,uint64,uint64)",
        "function getNodeOperatorsCount() view returns (uint256)",
        "function getActiveNodeOperatorsCount() view returns (uint256)",
        "function getNodeOperatorSummary(uint256) view returns (bool,uint64,uint64,uint64,uint64,uint64,uint64,uint64)",
      ]),
      publicClient,
      address: "0x55032650b14df07b85bF18A3a3eC8E0Af2e028d5",
    }),
  };

  return { publicClient, testClient, contracts, node };
};

type DI = Awaited<ReturnType<typeof createDI>>;

export const scenario = async (name: string, cb: (di: DI) => Promise<any>) => {
  const di = await createDI();
  console.log(`Running "${name}" scenario`);
  await cb(di);
  console.log(`Scenario "${name}" finished`);
  await di.node.stop();
  process.exit(0);
};
