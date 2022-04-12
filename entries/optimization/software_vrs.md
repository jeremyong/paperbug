---
title: "Software-Based Variable Rate Shading in Call of Duty: Modern Warfare"
url: https://advances.realtimerendering.com/s2020/Drobot-SIGGRAPH_2020_VRS_Final.pptx
authors:
  - Michal Drobot
year: 2020
conference: SIGGRAPH
tags:
  - Variable Rate Shading
  - VRS
  - Optimization
---

![](https://advances.realtimerendering.com/s2020/index_files/image010.jpg)

Presents the approach to variable rate shading used by Activision in Call of Duty: Modern Warfare, which does not leverage hardware functionality for VRS

* Provides an overview of hardware VRS available in recent GPUs, which can set pixel shading rate for 8x8 tiles in screen space as well as per-primitive or per-draw
* Describes how hardware VRS can suffer from quad overshading due to effectively decreasing triangle sze in screen space
* Presents an alternative approach that stores swizzled/intereaved samples in MSAA buffers, where shading rate can be varied at a fine granularity by using the stencil buffer to cull MSAA subsamples
* Describes a full implementation of the alternative software approach, including temporal feedback for determing shading rate and final full-resolution reconstruction
