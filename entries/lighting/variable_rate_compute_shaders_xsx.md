---
title: Variable Rate Compute Shaders - Halving Deferred Lighting Time
authors:
- Martin Fuller
url: https://www.youtube.com/watch?v=Sswuj7BFjGo
year: 2022
conference: GDC
tags:
- VRS
- Variable Rate Shading
- Deferred Lighting
- Compute
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Sswuj7BFjGo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Prior to this talk, the primary application of VRS was a forward lit pipeline, since VRS reduces the PS invocation rate. The main idea here is to apply VRS to a deferred lighting pipeline, lighting fewer pixels than there are in the raster, and "hole-filling" the results to each 1x2, 2x1, or 2x2 block (it's mentioned that block sizes larger than 2x2 impacted quality too much).

One important topic covered in this talk is handling coverage during the hole-filling phase. The abbreviated pipeline described in the talk:

1. Determine which pixel values are duplicated from the VRS buffer (and respect coverage)
2. Sparsely light the pixels (e.g. 1x2 and 2x1 blocks are lit at half-rate, 2x2 block at quarter-rate)
3. Fill holes
4. (Optionally) Each frame, rotate which pixel is lit and leverage TAA to approximate full-rate signal
