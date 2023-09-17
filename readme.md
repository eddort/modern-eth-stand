# modern-eth-stand

modern-eth-stand - a template for using modern technologies to write test scenarios for the Ethereum network

This repository utilizes technology:
- **Anvild** simple Anvil wrapper for Nodejs
- **Viem** is a fantastic library for interaction with the ETH network
- **ts-node** for running ts files directly

# How to use

1. Install deps using your favorite package manager. For example `yarn`

```bash
yarn
```

2. Make sure you have Docker

3. Create Env file and add your eth json rpc endpoint **(optional)**

```bash
MAINNET_URL="URL"
```

4. Run command using cmd script

```bash
yarn cmd my-some-scenario
```
