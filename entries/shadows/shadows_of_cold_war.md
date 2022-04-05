---
title: "Shadows of Cold War: A Scalable Approach to Shadowing"
url: https://www.activision.com/cdn/research/CWS.pptx
authors:
- Kevin Myers
year: 2021
conference: GDC
tags:
- Bindless
- Shadows
- Raytracing
- Denoising
---

Historically, shadows are often spoken about with respect to a "shadow atlas," meaning that a number of shadow maps for lights in the scene are packed together in a larger atlas. This talk points out quite correctly that with bindless texture arrays, you can free yourself of the difficulties associated with addressing textures within atlases. This flexible addressing scheme means you can allocate maps with arbitrary resolution based on the detail needed.

Other main takeaways addressed in this talk include:

- Some iteration was done to the static shadow cache solution employed in previous activision titles ([link](https://www.activision.com/cdn/research/2017_DD_Rendering_of_COD_IW.pdf)) with extensions made when bindless is available
- Compared to previous titles, offline baking is only done for the 3rd split
- Shadow map compression and decompression
- Depth-aware filtering (dilated PCF) to provide contact hardening
- Usage of ray-tracing/denoising to render shadows (transparencies use SM fallback, spatial-temporal denoiser from NVIDIA)
