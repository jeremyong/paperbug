---
# these are required
title: Rendering the Hellscape of Doom Eternal
urls:
    - https://advances.realtimerendering.com/s2020/RenderingDoomEternal_compressed.pptx
    - https://advances.realtimerendering.com/s2020/RenderingDoomEternal.pdf
    - https://advances.realtimerendering.com/s2020/index.html
authors:
  - Jean Geffroy
  - Yixin Wang
  - Axel Gneiting
year: 2020
tags:
  - Optimization
  - Decals
  - Water
  - Clustered Rendering
  - Culling
conference: SIGGRAPH
---

![](https://advances.realtimerendering.com/s2020/index_files/image011.gif)

This presentation covers several rendering techniques used to optimize performance and implement new features for the idTech 7 engine used for Doom: Eternal

* A compute-based software rasterizer was written to improve cluster culling granularity for lights and decals
* A new technique called "geometry decals" was used to allow for many tiny decals to be added to meshes
* Geometry caches were generated from Alembic caches to handle complex vertex animations
* A new system was implemented to blend up to 4 material stacks within a shader using vertex weights and height maps
* A compute-based geometry processing pipeline was used to perform frustum and occlusion culling of triangles, and also batch together small models into a single draw
* Finally, a water rendering system was developed that included displacement, screen-space reflections, dynamic hit effects, caustics, and flowing surfaces
