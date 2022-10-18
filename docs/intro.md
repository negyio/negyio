---
sidebar_position: 1
---

# What's Negy?

There is no doubt that security on the Internet will become more important in the future. Tracking by cookies is the most popular method of tracking at the moment, but Negy believes that routing will also need to be concealed in the near future. Negy is a proxy that transparently hides routing.

:::tip

Negy only conceals routing. This means that if you are already logged in or have cookies enabled, the website will know that you are accessing it.

:::

Negy uses a very popular method called proxy to completely hide routing. Simply put in the settings and the server you are accessing has no way of knowing who is accessing it at network level. It is based on the Tor protocol, the most well-known method of routing cloaking, and further improves ease of use and portability. Portability is the ease with which the execution environment can be moved from one to another, in other words, the ease of execution. In Negy, all components are containerised, so basically one command is all to launch all components. For example, it is even possible to reproduce Negy's full network in your local pc using the command docker-compose. Portability is very important in the long term, as it contributes to the ease of joining the network and ease of development. In addition, Negy is written in Rust, a memory-safe programming language, so unexpected runtime errors and memory vulnerabilities are essentially non-existent.

:::tip

Note that Negy follows the Tor protocol outline in its implementation and is therefore not compatible.

:::
