---
sidebar_position: 2
---

# Development contribution

Contributions to Negy in the form of bug fixes and feature additions are also welcome. Here are the basic steps to follow.

## Create full Negy network on your local pc

With docker-compose, you can configure a Negy network for testing with a single command. Run the following command.

```bash
docker-compose up --build
```

The `--build` option ensures that the container is built up to date each time. The `--build` option is not necessary if the purpose is simply to bring up the network.

## Create a pull request

Add or modify the code and, if there are no network problems, create a pull request. The branch should be directed to the `dev` branch, not the `main` branch. The operation is to consolidate all changes once in the `dev` branch, change the version and merge it into the `main` branch.
