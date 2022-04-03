---
title: The rendering equation
url: http://www.cse.chalmers.se/edu/year/2011/course/TDA361/2007/rend_eq.pdf
authors:
  - Kajiya, James T.
year: 1986
conference: SIGGRAPH
tags:
  - general
---

$$L_o(\mathbf{x}, \omega_o, \lambda, t) = L_e(\mathbf{x}, \omega_o, \lambda, t) + \int_\Omega f_r(\mathbf{x}, \omega_i, \omega_o, \lambda, t)L_i(\mathbf{x}, \omega_i, \lambda, t)(\omega_i \cdot \mathbf{n})d\omega_i$$

The integral above (with notation from wikipedia instead of as presented in the original paper) encapsulates effectively all of rendering as the transport of light scattered from a surface as seen in the image below.

![Rendering equation](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Rendering_eq.png/300px-Rendering_eq.png)
