---
sidebar_position: 2
---

# Development contribution💻

Contributions to Negy in the form of bug fixes and feature additions are also welcome. Here are the basic steps to follow.

## Create full Negy network on your local pc

### By using `docker-compose`

With docker-compose, you can configure a Negy network for testing with a single command. Run the following command.

```bash
docker-compose up --build
```

The `--build` option ensures that the container is built up to date each time. The `--build` option is not necessary if the purpose is simply to bring up the network.

### By building source code

To setup a full Negy network by building the source code, at least 5 terminal sessions are required. For short, you need to open 5 terminal windows or 5 sessions by tmux or any other tools.

In session 1, execute command below to launch the node pool.

```bash
cargo run -p negy-node-pool -- --port=3030
```

In session 2, execute command below to launch the first node.

```bash
cargo run -p negy-node -- --port=3001
```

In session 3, execute command below to launch the second node.

```bash
cargo run -p negy-node -- --port=3002
```

In session 4, execute command below to launch the gateway.

```bash
cargo run -p negy-gateway -- --port=3000 --hops=2
```

After confirming `INFO  negy_gateway > fetched 2 nodes` log in gateway's session, you can try the network by the last session.

In session 5, try the network by the command below.

```bash
curl https://example.com -x http://localhost:3000
```

:::note

The commands above will use port 3000 (gateway), 3001 (node), 3002 (node), and 3030 (node pool). Note that those ports are not already in use.

:::

## Create a pull request

Add or modify the code and, if there are no network problems, create a pull request. The branch should be directed to the `dev` branch, not the `main` branch. The operation is to consolidate all changes once in the `dev` branch, change the version and merge it into the `main` branch.
