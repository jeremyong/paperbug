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

Presents the software implementation of variable rate shading (VRS) used by Activision in Call of Duty: Modern Warfare, which does not leverage or require the hardware functionality for VRS that's available through D3D12 and Vulkan.

* Provides an overview of hardware VRS available in recent GPUs, which can set pixel shading rate for 8x8 tiles in screen space as well as per-primitive or per-draw
* Describes how hardware VRS can suffer from quad overshading (poor quad occupancy) due to effectively decreasing triangle size in screen space
* Presents an alternative approach that stores swizzled/intereaved samples in MSAA buffers, where shading rate can be varied at a fine granularity by using the stencil buffer to cull MSAA subsamples. This approach also does not suffer from the same issues with quad occupancy.
* Describes a full implementation of the alternative software approach, including a screen-space analysis pass that dynamically determines the appropriate shading rate based a reprojection of the previous frame
