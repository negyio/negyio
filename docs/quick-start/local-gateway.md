---
sidebar_position: 2
---

# Launch your own gateway!

For more secure routing, you should set up your own gateway. This is also one-line executable, assuming you have a docker runtime environment - if you are not familiar with docker, please refer to [this](https://docs.docker.com/get-started/) document. Now, execute the following command. Note that this is an interactive execution for testing purposes, but if you want to run it as a daemon, add the `-d` option.

:::tip

If all users use the same public gateway, the load may be concentrated and unstable. In this respect, managing your own gateway has an advantage.

:::

```bash
docker run -it -p 3000:3000 tbrand/negy-gateway:latest --node-pool-endpoint https://pool.negy.io
```

## Execute http request

If it starts up successfully, run the following command: have you received the html from example.com?

```bash
curl https://example.com -x http://localhost:3000
```

The request passes through nodes randomly selected by the gateway. Each node carries the encrypted payload without knowing the routing. In other words, nobody knows the origin of the access except the gateway. If a malicious public gateway exists, there is a non-zero chance that your access is recorded. Therefore, for more secure routing, you should either use local container proxies like this or launch your own public gateway. The latter has the advantage that you can use Negy on any device.
