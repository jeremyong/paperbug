---
title: Spatiotemporal reservoir resampling for real-time ray tracing with dynamic direct lighting
url: https://research.nvidia.com/publication/2020-07_Spatiotemporal-reservoir-resampling
authors:
  - Benedict Bitterli
  - Chris Wyman
  - Matt Pharr
  - Peter Shirley
  - Aaron Lefohn
  - Wojciech Jarosz
year: 2020
conference: SIGGRAPH
tags:
  - Raytracing
  - ReSTIR
  - Monte Carlo
  - Lighting
---

Demonstrates the use of the ReSTIR reservoir sampling technique to interactively sample direct lighting from thousands to millions of dynamic emissive triangles.

Leverages a biased estimator to further improve the results as shown below with a 35-65x speedup (albeit with some energy loss).

![teaser](https://research.nvidia.com/sites/default/files/publications/piratesTeaser_nvrSite_scaled.png)

