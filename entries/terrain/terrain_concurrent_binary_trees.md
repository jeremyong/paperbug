---
title: Experimenting With Concurrent Binary Trees for Large-scale Terrain Rendering
url: https://advances.realtimerendering.com/s2021/Siggraph21%20Terrain%20Tessellation.pdf
authors:
  - Thomas Deliot
  - Jonathan Dupuy
  - Kees Rijnen
  - Xiaoling Ya
year: 2021
conference: SIGGRAPH
tags:
  - terrain
  - tessellation
  - subdivision
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/0TzgFwDmbGg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Presents ongoing research to develop a large-scale terrain renderer for tje Unity game engine

* Presents a novel adaptive tessellation scheme that's run entirely on the GPU
* Utilizes a recursive subdivision scheme known as "Longest Edge Bisection" that divides a triangle along its longest edge and effectively forms a binary tree
* Does not utilize tessellation shader stages, only uses compute and vertex shaders
* Discusses the integration into Unity