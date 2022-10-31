---
sidebar_position: 2
---

# Gateway Options

You can configure your gateway by serveral ways by the command line args.

## `--hops`

One of the strongest feature of the Negy is flexible hops. You can configure the number of hops by `--hops=<Number>`. For example, If you need 4 hops for the request through the gateway, specify by `--hops=4`. The default value if 3. Negy strongly recommends the hops value greater than 3. If the number of hops is greater than the nodes in the node pool, your request will be failed.
