---
title: Pre-Integrated Skin Shading
url: https://advances.realtimerendering.com/s2011/Penner%20-%20Pre-Integrated%20Skin%20Rendering%20(Siggraph%202011%20Advances%20in%20Real-Time%20Rendering%20Course).pptx
authors:
- Eric Penner
year: 2011
conference: SIGGRAPH
tags:
  - subsurface scattering
  - skin
---

![](https://advances.realtimerendering.com/s2011/index_files/image022.png)

This presentation shows a technique for rendering skin with subsurface scattering that's compatible with a forward renderer.

Key takeaways:

* The technique can approximate scattering from punctual light source directly in a pixel/fragment shader with a combination of loopup textures, normal map mip biasing, and mesh curvature
* Does not rely on [texture-space rendering](https://developer.nvidia.com/gpugems/gpugems3/part-iii-rendering/chapter-14-advanced-techniques-realistic-real-time-skin), [screen-space scattering](http://advances.realtimerendering.com/s2018/Efficient%20screen%20space%20subsurface%20scattering%20Siggraph%202018.pdf), or ray tracing
* The scattering effect utilizes a pre-computed 3D lookup texture to approximate scattering for a single skin type, as well as an additional 2D lookup texture for approximating scattering across a shadow penumbra
* The technique relies on pixel shader derivatives to compute the local surface curvature, which automatically adapts to mesh deformation but can result in visible discontinuities at triangle edges.
* Like most real-time techniques for subsurface scattering, it does not handle translucency from light that enters a surface and then exits on the other side (such as light scattering through the ears)

This technique was also presented as an article in GPU Pro 2.

Related articles:

* [https://blog.selfshadow.com/publications/s2013-shading-course/rad/s2013_pbs_rad_notes.pdf](https://blog.selfshadow.com/publications/s2013-shading-course/rad/s2013_pbs_rad_notes.pdf)
* [http://c0de517e.blogspot.com/2011/09/mathematica-and-skin-rendering.html](http://c0de517e.blogspot.com/2011/09/mathematica-and-skin-rendering.html)
* [http://simonstechblog.blogspot.com/2015/02/pre-integrated-skin-shading.html](http://simonstechblog.blogspot.com/2015/02/pre-integrated-skin-shading.html)
* [https://therealmjp.github.io/posts/sss-intro/](https://therealmjp.github.io/posts/sss-intro/)
* [https://therealmjp.github.io/posts/sss-sg/](https://therealmjp.github.io/posts/sss-sg/)