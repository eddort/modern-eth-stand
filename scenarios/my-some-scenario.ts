import { scenario } from "../scenario/index.js";

scenario("test", async ({ publicClient, contracts }) => {
  const block = await publicClient.getBlock();
  console.log("block number:", block.number);
  const stat = await contracts.nodeOperator.read.getActiveNodeOperatorsCount();
  console.log("operators stat", stat);
});
