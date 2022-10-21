---
sidebar_position: 2
---

# Fault Tolerance

Fault-tolerance is one of the most important elements of any infrastructure network, and Negy ensures a specific level of fault-tolerance by clearly separating the responsibilities of each component. This section describes how each component behaves when it goes down.

## Gateway is down

If a gateway goes down, only the users who have configured the gateway as a proxy are affected, as best practice dictates that the gateway should be prepared by each user, and therefore only the user who manages the gateway is affected. However, if you are using a public gateway and it goes down, many users will be affected. From this perspective, the gateway is a component that should be managed by each user.

## Node is down

If a node is down, requests through that node are affected. This means that the larger the number of nodes, the less affected they will be. Furthermore, as nodes are regularly health-checked by the node pool, a down node will be removed from the node list. As soon as the gateway fetches a new node list, the node will be removed as a routing option.

## Node pool is down

If the node pool is down, the gateway will not be able to fetch the latest node list. This means that the newly started gateway cannot operate. On the other hand, a gateway that is already up and running will be able to operate, just that it will no longer be able to refresh the node list. However, as the node list can no longer be refreshed, downed nodes are likely to remain in the node list and stable routing will be difficult in the long term. Therefore, of all the components that make up Negy, the Node pool is the component we want to avoid going down the most.
