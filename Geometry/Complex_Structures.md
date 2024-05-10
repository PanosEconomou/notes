# Complex Structures

Time to understand complex manifolds! Really the main point is to use definitions from [Differential Geometry][./Geometry.md] and extend them so that we can effectively do calculus on complex manifolds with holomorphic and anti-holomorphic maps.

[TOC]



## Basic Definitions

We will start with definitions that are useful in the context of complex analysis in order to fully define what we mean by complex maps in $\mathbb{C}^n$. 

**<u>Definition:</u>** A map $f : \mathbb{C}^n \to \mathbb{C}$ is called **holomorphic** if it satisfies the Cauchy-Riemann criterion, i.e. if $f = f_1 + if_2$ where $f_1,f_2:\mathbb{R}^{2n} \to \mathbb{R}$ are smooth functions

$$
\begin{align*}
\frac{\partial f_1}{\partial x^i} = \frac{\partial f_2}{\partial y^i} && \frac{\partial f_1}{\partial y^i} = - \frac{\partial f_2}{\partial x^i}
\end{align*}
$$

The complex conjugate $\bar f : \mathbb{C}^n \to \mathbb{C}$ given by $\bar f = f_1 - if_2$ is often called an **anti-holomoprhic** function. A function $F: \mathbb C^n \to \mathbb C^m$ given by $F(z) = (f^1(z),f^2(z),\cdots, f^m(z))$ is called **(anti) holomorphic** if each $f^i:\mathbb C^n \to \mathbb C$ are (anti) holomorphic. 

Now we have a definition that is smoothness$^+$ specifically crafted for dealing with smoothness in a complex setting. Notice that the set of holomorphic functions is much smaller than the set of smooth functions, but that’s ok! We have everything we need to define a complex manifold. 

**<u>Definition:</u>** An **m-dimensional complex manifold** $M$ is a second countable, Housdorff topological space with a complex maximal atlas, i.e. a family $\mathcal{A} = \{(U_i,\phi_i)\}_{i\in I}$ such that $\{U_i\}_{i\in I}$ is an open cover of $M$, $\phi_i:U_i \to \mathbb{C}^m$ is a homeomorphism and for any two charts $(U,\phi),\ (V,\psi)$ we have that the map

$$
\phi \circ \left.\psi\right|_{\psi(V)}^{-1} : \psi(U\cap V) \to \psi(U\cap V)
$$

is a holomorphic function. We call the last condition the compatibility of charts, and $m\in \mathbb{N}$ the **complex dimension** of the manifold.



With this we can copy paste the useful definitions for maps. In particular

**<u>Defintion:</u>** Given two complex manifolds $M,N$ a **holomorphic map** $f:M\to N$ is such that for any chart $(U,\phi)$ of $M$ and $(V,\psi)$ of N the map

$$
\psi \circ f \circ \phi^{-1}: \phi(U) \to \psi(V)
$$

is a holomorphic function. If the holomorphic map is bijective we call $M$ **biholomorphic** to $N$, and $f$ a **biholomorphism.** A **holomorphic function** is a holomorphic map $f:M\to \mathbb C$, and the set of all holomorphic functions on an open subset $U\subset M$ of $M$ is denoted by $\mathcal{O}(U)$.

This is basically a complex diffeomorphism. Now check this theorem out that is a direct consequence of the Heine Borel theorem and the Maximum modulus Principle. 

**<u>Theorem:</u>** Any holomorphic function $f:M\to \mathbb C$ is constant if $M$ is compact. 

Ok I’m done with definitions, let’s play!



# Complexifications

Honestly the reason to even develop this formalism is to be able to take preexisting manifolds and convert them somehow into complex ones. We will do this A LOT with tangent bundles and tangent spaces because it is super useful in physics and not only. Let’s see how to do this. 

## Complexification of Vector Spaces

We do it in steps. We first *complexify* the set of functions and then we slowly move up towards the tangent and cotangent spaces.

**<u>Definition:</u>** Given a real $n$ dimensional manifold $M$ the set $C^\infty(M)^{\mathbb{C}}$ is the set of all functions $f:M\to \mathbb C$ such that $f = g + ih$ for $g,h \in C^\infty(M)$. This is called the **complecification of the set of smooth functions** of $M$. 

**<u>Note:</u>** The complexification of the set of smooth functions does not only contain (anti) holomorphic functions! It contains a lot more.

Now let’s move on 

**<u>Definition:</u>** Let $V$ be a real vector space of dimension $m$. Its **complexification** $V^{\mathbb{C}}$ is a complex vector space given by

$$
V^{\mathbb{C}} = V\otimes \mathbb{C}
$$

where the tensor product is taken by treating $\mathbb{C}$​ as a real vector space and it defines a scalar product with the complex field. 

Let’s examine it a bit closer in the following proposition. 

**<u>Proposition:</u>** For any $v\in V^{\mathbb{C}}$​ is given by 









