---
title: FidelityFX Super Resolution 2.0
url: https://www.youtube.com/watch?v=97JIldpUGE4&list=PLx15eYqzJifdT1M-vOTz74fwdqHIlMrVc&index=6&t=1829s
authors:
- Colin Riley
- Thomas Arcila
year: 2022
conference: GDC
tags:
- upscaling
- temporal antialiasing
- image processing
- motion vectors
- TAA
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/97JIldpUGE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This presentation describes a number of improvements over FSR 2.0's predecessor. It contains a useful overview of heuristics needed to achieve a high quality TAA image, and describes solutions for a number of problems typical in this space:

- Preserving thin features
- Estimating the contribution of a sample in a frame
- Blending the contributions of multiple samples
- Resampling contributions during upscale
- Motion vector dilation based on MV with nearest depth to the current sample
- Avoiding ghosting (best effort) due to disocclusion or shading changes
