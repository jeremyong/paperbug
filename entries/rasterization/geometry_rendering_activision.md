---
title: Geometry Rendering Pipeline Architecture at Activision
url: http://enginearchitecture.realtimerendering.com/downloads/reac2021_geometry_pipeline_rendering_architecture.pptx
authors:
- Michal Drobot
year: 2021
conference: SIGGRAPH
tags:
- rendering
- meshlets
- culling
- forward+
- deferred
- visibility buffer
- vrs
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/NoTUzzmxPo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

When deciding how to rasterize meshes, there are quite a number of degrees of freedom. This talk summarizes a few options available, from a full forward-plus style renderer, to a fully deferred renderer, to the usage of an "intermediate" approach using a visibility buffer.

The talk covers an opinionated approach to meshlet clustering, index packing, culling, and other details for laying down the visibility buffer with an eye toward variable rate shading done in software.
