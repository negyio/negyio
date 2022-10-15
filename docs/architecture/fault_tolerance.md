---
sidebar_position: 2
---

# Fault Tolerance

Fault-tolerance is one of the most important elements of any infrastructure network, and Negy ensures a specific level of fault-tolerance by clearly separating the responsibilities of each component. This section describes how each component behaves when it goes down.

## Gateway is down

If a Gateway goes down, only the users who have configured the Gateway as a proxy are affected, as best practice dictates that the Gateway should be prepared by each user, and therefore only the user who manages the Gateway is affected. However, if you are using a Public Gateway and it goes down, many users will be affected. From this perspective, the Gateway is a component that should be managed by each user.

## Node is down

If a Node is down, it is the requests through that Node that are affected. This means that the larger the number of Nodes, the less affected they will be. Furthermore, as Nodes are regularly health-checked by the Node Pool, a down Node will be removed from the Node List; as soon as the Gateway fetches a new Node List, the Node will be removed as a routing option.

## Node Pool is down

If the Node Pool is down, the Gateway will not be able to fetch the latest node list. This means that the newly started Gateway cannot operate. On the other hand, a Gateway that is already up and running will be able to operate, just that it will no longer be able to refresh the node list. However, as the node list can no longer be refreshed, downed nodes are likely to remain in the node list and stable routing will be difficult in the long term. Therefore, of all the components that make up Negy, the Node Pool is the component we want to avoid going down the most.
