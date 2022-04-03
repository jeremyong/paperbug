---
title: Efficient Use of GPU Memory in Modern Games
url: https://gpuopen.com/wp-content/uploads/2022/01/Efficient-Use-of-GPU-Memory-Digital-Dragons-2021.pdf
authors:
- Adam Sawicki
year: 2022
conference: Digital Dragons
tags:
- VRAM
- GPU memory
- Smart Access Memory
- ReBAR
- BAR
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/ML0YC77bSOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Major takeaways:

- Explores different memory heaps available
- In particular, covers "aperture memory" and SAM (smart access memory) as device-local memory that is also host-visible (exposed in Vulkan)
- Covers some common pitfalls, such as reading back write-combined (WC) memory
