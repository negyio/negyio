---
title: Version 0.1.1
description: Announce version 0.1.1
slug: version-0-1-1
authors:
    - tbrand
---

# Version 0.1.1 released!

Today I'm excited to announce Negy's new version 0.1.1!

<!-- truncate -->

## New features

### Add filtering of versions

Now gateway able to filter the node's versions by `--min-version=x.x.x`. It really useful for compatibility consideration and not choosing nodes which vulnerabilities are left unchecked. I would also like to congratulate the first external contributor for being merged. (Thanks [Darth-Ness](https://github.com/Darth-Ness)!)
- https://github.com/negyio/negy/pull/18
- https://github.com/negyio/negy/pull/22

### Gateway authentication

Now gateway able to authenticate the access. This is useful for operating private gateways located in public places. This ensures that even if the url is known, others cannot use the gateway with the authenticate token.

If you want to activate the authentication, execute the gateway by the command below. (Replace the `MY_AUTH_TOKEN` to whatever you want.)

```bash
docker run -it tbrand:negy-gateway --auth-token=MY_AUTH_TOKEN
```

After the launch, access to the gateway via

```bash
curl https://example.com -x http://MY_AUTH_TOKEN@localhost:3000
```

It uses basic authentication feature, so if you want to configure it on you GUI, put the token in the username and leave the password blank.

## Document Improvement

There are several document improvement.
- [Added "How to configure Negy on Windows"](https://github.com/negyio/negyio.github.io/pull/3)
- [Other improvement (including fixing typos)](https://github.com/negyio/negyio.github.io/pull/4)

## Others

- I started Negy's official [Twitter account](https://twitter.com/negyio)! Please follow it and catch up the latest news of Negy and let's discuss the internet future!
- Started this blog!

## Conclusion

I really appreciate the followers supports! And I think the one of the most greatest highlist is the outside contribution by Darth-Ness.
Please continue to support us as we continue to improve Negy.

Best Regards
