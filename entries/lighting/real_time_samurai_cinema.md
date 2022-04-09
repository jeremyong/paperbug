---
title: "Real-Time Samurai Cinema: Lighting, Atmosphere, and Tonemapping in Ghost of Tsushima"
authors:
  - Jasmin Patry
url: https://advances.realtimerendering.com/s2021/jpatry_advances2021/index.html
year: 2021
conference: SIGGRAPH
tags:
  - Tone Mapping
  - Atmospheric Scattering
  - Lighting
  - GI
  - Dynamic Time Of Day
  - Skies
  - Volumetrics
  - Probes
  - Spherical Harmonics
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/GOee6lcEbWg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Presents a selection of graphics techniques from the PlayStation 4 exclusive "Ghost of Tsushima", focusing on indirect lighting, atmospheric effects, and tone mapping.

* Discusses how the game used a mixture of low-density regular grids of spherical harmonics probes combined with dense tetrahedral meshes for areas with more complex geometry (such as villages and castles)
* Used a combination of precomputed and runtime probe information combined with runtime updates to handle dynamic time-of-day
* Applied an interior/exterior mask as an additional probe interpolation weight to reduce leaking between probes
* Computed indirect specular by dynamically re-lighting sparse cubemap probes containing G-Buffer informations, combined with shadow trace through captured cube map depth
* Used precomputed LUT textures to apply atmospheric lighting and scattering, with calculations performed in a custom Rayleigh color space
* Described how the Bilateral Grid algorithm was used to apply localized tone mapping, along with a custom color space for achieving desired roll-off behavior.
