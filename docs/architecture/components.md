---
sidebar_position: 1
---

# Components

## Gateway

The Gateway is the entry point component of the request. All requests go through the Gateway, which acts as a proxy and can be configured with the -x option of the curl command or a windows proxy configuration. The Gateway receives a list of Nodes from the Node Pool at start-up. It also refreshes the list periodically during execution. Upon receiving a request, it randomly selects a few Nodes from the list of Nodes and decides on the routing. The number of the nodes called "hops". It then encrypts the payload in the reverse order of the routing as in the Tor protocol and passes the request to the first Node. The results are received in the reverse order.

## Node

Nodes are components of the Negy network; their role is to deliver received requests to the next component or arrival point, the server, and also to send the results in the reverse order The large number of Nodes directly contributes to network stability and security. Nodes are operated by Negy officially, but external contributions are most effective. Users with spare resources are encouraged to join the Negy network.

## Node Pool

Node Pool is the component that manages Nodes. Every Node joins the network by connecting to a specific NodePool, which has three main roles: first, as described earlier, it acts as an endpoint for Nodes to join the network. The second role is to ensure that the Node is running normally; it performs periodic health checks and updates its list. Finally, there is the role of passing the list of Nodes to the Gateway.
