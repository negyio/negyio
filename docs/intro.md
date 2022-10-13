---
sidebar_position: 1
---

# What's Negy?

Negy is a proxy following the Tor protocol; Tor technology allows the source of access to be concealed. In other words, the website has no way of knowing that you have accessed it. As it works as a proxy, no dedicated browser or software is required; it can be activated by simply configuring Negy's proxy in your operating system or application.

Negy has three main components: gateways, nodes and node pools. Of these, only the gateway knows about routing. Therefore, for more secure access, it is best practice to use a gateway that you manage yourself. Don't worry, if you have used docker before, you can run it one-line. For a detailed description of each component, please refer to [this](https://tbd.com) document.

Negy only hides routing. This means that if you are already logged in or have cookies enabled, the website will know that you are accessing it.

Note that Negy follows the Tor protocol outline in its implementation and is therefore not compatible.
