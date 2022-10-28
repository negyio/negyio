---
sidebar_position: 1
---

# Join your node to our network

The easiest and most important way to contribute to Negy is to join a node to Negy's network, helping to improve the stability and security of Negy's network. This section describes how to get your surplus resources to join the Negy network.

## Pre-requirements

- You must have a global IP. If you are behind a NAT you will not be able to connect properly and will get an error on start-up. Make sure you have an IP address that is directly accessible from the Internet.
- It is recommended to have a Docker environment, which makes it easy to ensure that the Negy nodes are always up-to-date. On the other hand, you can also participate by compiling and running binaries of the Rust programme. However, in that case you always have to compile the latest binaries yourself.

## Launch your public node

Negy's official node pool endpoint is https://pool.negy.io. Specify it with the `--node-pool-endpoint` option. Also, make sure that port 3000 is accessible externally, as it listens on port 3000 by default. If necessary, you can change the port to listen on with the `--port` option.

Execute the command below to launch your node.

```bash
docker run -it -d tbrand/negy-node:latest --node-pool-endpoint https://pool.negy.io
```

When this command is executed, a connection test is performed from the node pool and, if completed successfully, it is registered with the network.
