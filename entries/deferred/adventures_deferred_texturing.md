---
title: Adventures with Deferred Texturing in 'Horizon Forbidden West'
url: https://www.gdcvault.com/play/1027553/Adventures-with-Deferred-Texturing-in
authors:
  - James McLaren
year: 2022
tags:
  - Optimization
  - Foliage
  - Deferred
  - Visibility Buffer
  - Variable Rate Shading
  - VRS
conference: SIGGRAPH
---

![](https://pbs.twimg.com/media/FOiwlP-VgAQQ3Sh?format=png)

Describes how the rendering of alpha-tested foliage was optimized by using a deferred texturing renderer combined with a software VRS system.

* Dense alpha-tested foliage suffered from low pixel shader quad occupancy, and the depth prepass requires transforming vertices twice
* A visibility buffer approach outputs primitive IDs to a render target that can be used to shader during a compute shader pass, avoid quad occupancy issues
* Pixels within 128x128 tiles are binned by shader program and launched as complete waves using multiple indirect dispatches
* A pipelined system for filling a ring buffer with transformed vertices is used as a cache for the shading passes
* Shading rate is also encoded in the visibility buffer, which feeds into a compute-based VRS system for scheduling and broadcasting shading results

A video recording is available on the GDC Vault with paid membersip.
