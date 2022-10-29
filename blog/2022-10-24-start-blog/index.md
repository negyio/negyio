---
title: Negy's blog started!
description: Negy's blog started!
slug: start-blog
authors:
    - tbrand
---

# Negy's blog started!

Thanks for following Negy! Today I decided to start Negy's blog!
In this blog, I'll share progress, tips, and milestone.

<!-- truncate -->

Since Negy was launched, it got
- 16 stars on [GitHub](https://github.com/negyio/negy)
- 42 upvotes and 56 followers on [ProductHunt](https://www.producthunt.com/posts/negy)
- 4.2k views on [reddit r/onions](https://www.reddit.com/r/onions/comments/y9o0ic/negy_im_building_a_proxy_that_conceals_your/)

Thanks for the all supports!

## Updates
- [Node returning version](https://github.com/negyio/negy/pull/7) and [node pool lookup the ip provider's name](https://github.com/negyio/negy/pull/8) so that gateway could filtering the nodes
  - For example, if some website blocks access from AWS, you can filter the nodes like `--block-providers=aws`
- [Setting up CI/CD](https://github.com/negyio/negy/pull/10) for more stable and fast development.
  - Now you can use `dev` tag docker image. It's the latest one but unstable.
- Added [Configure on Windows](/docs/configuration/windows) docs on negy.io especially for non-developers.
- Started this blog!

## What's Next?
- [Implement filtering](https://github.com/negyio/negy/issues/5) on gateway
- [Think about http request (not https)](https://github.com/negyio/negy/issues/12)
- Release v0.1.1
