---
title: Version 0.1.2
description: Announce version 0.1.2
slug: version-0-1-2
authors:
    - tbrand
---

# Version 0.1.2 released!

Today I'm excited to announce Negy's new version 0.1.2!

<!-- truncate -->

## New features

### Negy doesn't support http anymore!

Actually there is no modification for this dicision but Negy was not support `http` at the beginning. I considered how Negy support the `http` as proxy, but instead, support `https` only. That's because the real world web pages basically support `https` and Negy should focus on it.
- https://github.com/negyio/negy/issues/27

### Filtering nodes by network name!

This is a first step of the long journey. Currently Negy support the filtering by "original" network name. In the near future, this will be more abstract. (Thanks [Darth-Ness](https://github.com/Darth-Ness)!)
- https://github.com/negyio/negy/pull/26

### Display removing reason on node pool

For the debugging reason, node pool now shows removing reason. This does not weaken security.
- https://github.com/negyio/negy/pull/30

### Node sends context at once

Previously, node send its context twice. First, send its public key, and then, send its version. But this makes unstable behaviour. The bug was reported by [Trac3D1y](https://github.com/I2rys).
- https://github.com/negyio/negy/issues/31
- https://github.com/negyio/negy/pull/32

## Document Improvement

There are several document improvement
- [Create Negy's full network by building source code](https://negy.io/docs/contribution/development_contribution/#by-building-source-code)

## Others
- Negy got new icon!
- 31 stars on [GitHub](https://github.com/negyio/negy)
- 46 upvotes and 63 followers on [ProductHunt](https://www.producthunt.com/posts/negy)
- 5.3k views on [reddit r/onions](https://www.reddit.com/r/onions/comments/y9o0ic/negy_im_building_a_proxy_that_conceals_your/)
- 3.8k views on [reddit r/rust](https://www.reddit.com/r/rust/comments/yccpoi/negy_next_generation_anonymous_internet/)
- 16 followers on [Twitter](https://twitter.com/negyio)


