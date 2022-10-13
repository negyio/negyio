---
sidebar_position: 1
---

# First try with public gateway!

The gateway is the only component that knows the exact route. This means that for complete routing concealment, you should use a gateway that you control. However, here we will use a public gateway to see how Negy works. You only need to use the `curl` command, the rest is not necessary.

Run the following command: did you receive the html from example.com?

```bash
curl https://example.com -x http://gateway.negy.io
```

It's not quite clear what the difference is between this and a normal curl, is it? The `-x` option specifies a proxy. This means that your HTTP request was delivered to example.com via the Negy network. In the process, the routing has been cloaked by the Tor protocol. This means that example.com has no way of knowing who accessed it via curl. Even if someone was snooping on Negy's network, they would not know.
