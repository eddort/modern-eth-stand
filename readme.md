# modern-eth-stand

modern-eth-stand - an template of using modern technologies to write test scenarios for the Ethereum network

This repository is used in this repository:
- Anvild — simple Anvil wrapper for Nodejs
— Viem — awesome library for interaction with eth network
- ts-node — for running ts files directly

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
