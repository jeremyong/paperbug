---
title: Large-Scale Global Illumination at Activision
url: https://advances.realtimerendering.com/s2021/Silvennoinen%20-%20SIGGRAPH%202021%20Advances_slim.pptx
authors:
  - Ari Silvennoinen
year: 2021
conference: SIGGRAPH
tags:
  - Global Illumination
  - GI
  - Probes
  - Spherical Harmonics
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/snXTGrjfOvQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This talk presents work to implement precomputed GI large-scale maps used for Call of Duty: Warzone

* Discusses the probe-based approach used for storing GI data throughout the map, including an warped distribution for adaptive placement of probes along the terrain
* Presents a novel compression scheme called "Moving Basis Decomposition" for reducing the storage space for GI by a ratio of 44:1
* Uses a simple technique to prevent leaking between probes in the exterior and interior of buildings
* Discusses approaches to contraining spherical harmonics light probe data to avoid ringing artifacts
