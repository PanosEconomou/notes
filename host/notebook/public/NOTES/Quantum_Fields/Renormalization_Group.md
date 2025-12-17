# Renormalization\_Group

## Renormalization Group

Time to understand wtf the renormalization group is. This follows Peskin and Gross’ chapter in Quantum Fields and Strings. We will start with understanding the Renormalization group in the Wilsonian prescription and then move on to define $\beta$ functions.

\[TOC]

## Wilsonian Scheme

Let’s bootstrap of off a scalar field in 4D and then move on to generalize a bit more. We can start by defining an interaction of degree $k$ like so.

**Definition:** Given a vector space $V$, the set of Scwartz functions $\mathcal J (V)$ on $V$ and a Poincare invariant tempered distribution $K\_J \in (\mathcal J(V)^k)^{\vee}$ a **homogeneous** $k$ **interaction** $J$ is given by the map

$$
\begin{align*} J: \mathcal J(V) &\to \mathbb{C}\\ \phi &\mapsto J(\phi) = K_J(\phi,\phi,\cdots,\phi) = \int_{V^k} K_J(x_1,x_2,\cdots,x_k) \phi(x_1)\phi(x_2)\cdots \phi(x_k)\, dx_1dx_2\cdots dx_k \end{align*}
$$

where with some slight abuse of notation we called both the distribution and its associated function $K\_J$. A homogeneous $k$ interaction is called **local** if $K\_J$ is supported in the diagonal. It is called **quasilocal** if its fourier transform is given by

$$
\hat{K}_J = \delta \cdot \hat F,
$$

for some smooth function $F$​.

Almost all vertex interactions are quasilocal. For example we have calculated some propagators to be

$$
\langle \phi(p_1) \phi(p_2) \phi(p_3) \phi (p_4)\rangle = \delta(p_1 +p_2+p_3+p_4) \hat f(p_1,p_2,p_3,p_4)
$$

So this is not an unusual object, but it is in a slightly unusual notation. Let’s look at a nice proposition that can help us express every interactoin perturbatively.

**Proposition:** Let $J$ be a quasilocal interaction of degree $k\geq 1$. Then for any $j>0$ there exists a unique homogeneous differential operator with constant coefficients $D\_j : \mathcal J(V^{k-1})^\vee\to \mathcal J(V^{k-1})^\vee$ of order $j$ such that for any $\phi \in \mathcal J(V)$ and any $s \geq 0$ we can write

$$
J(\phi) = \sum_{j=0}^{s-1} \int_V D_j(\phi,\phi,\cdots, \phi)(x) \phi(x) dx + J^s(\phi)
$$

where $J^s$ is a quasilocal interaction of degree $s$.

This is essentially a Taylor expansion for $J$. Which is a nice tool to have!
