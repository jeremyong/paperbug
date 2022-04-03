---
title: The Shader Permutation Problem
authors:
- MJP
urls:
- https://therealmjp.github.io/posts/shader-permutations-part1/
- https://therealmjp.github.io/posts/shader-permutations-part2/
year: 2021
tags:
- Shaders
- Permutations
- Variants
- Materials
---

This is a two part series describing the problem statement and possible solutions for shader permutations.

The problem statement is described in pretty gory detail. Shaders permeate the alpha and omega of graphics programming, affecting iteration time, performance, load times, memory and more. The discussion of "what variants to even compile" is a multi-faceted problem (shader size, compile times, register pressure, ILP, feature requirements, and more).

The solution described at Ready At Dawn is to rely on uber-shaders with dynamic branching for all available options and swap in specialized shaders as they become ready. Specialization constants as provided in Vulkan and Metal are discussed as a possible avenue for compiling static branches at runtime, with the caveat that it's unclear whether CSE and CF actually will occur (common sub-expression elimination + constant folding). A nice table of practical options is provided also (with discussion):

- Compile what you need
- Specialize at runtime
- Cache material evaluation
- Just branch/loop at runtime (especially for uniform branches)
- Split the pipeline (e.g. deferred rendering)
- Link offline
- Dynamic function calls (only works with RT)
