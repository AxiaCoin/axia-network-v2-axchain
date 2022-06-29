![AXIA](./public/AXIA-blue-logo.png)
# AXChain Block Explorer

<!-- about the project -->
## About The Project

[AXChain Block Explorer] is a minimal block explorer for AXIA Network. It does not use a database, and can be configured to point at any remote RPC node for any EVM-based network. The goal of the Explorer is to provide a resource for network information and block exploration with only an Ethereum EPC endpoint.

Explorer Features:
- Display chain id
- Syncing status
- Runtime configuration for endpoints
- Search by Block, Transaction, Address
- Charts for hash, transaction count, gas used, uncles
- Preview latest blocks with pagination
- Multi-language support

<!-- getting started with the project -->
## Getting Started
### Prerequisites

- node v16.13.0
- npm v8.1.0

### For Installing npm v8.1.0 and node v16.13.0
```bash
sudo apt install curl

curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash

source ~/.profile

nvm install 16.13.0

nvm use 16.13.0
```

### Check npm and node versions

- npm -v
- node -v


### Installation
Clone/ download the project, and install dependencies.
```bash
git clone git@github.com:AXIA-DEV/AXIA-Block-Explorer.git

cd AXIA-Block-Explorer

npm install

```

## Usage

### Start the explorer
```bash
npm start
```
*The explorer will run at http://localhost:3000/.*

## License
Apache License 2.0
