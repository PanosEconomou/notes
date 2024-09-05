# Symmetry Braking

Consider a symmetric function $f:\mathbb R\to \mathbb R$. Then we know that it must follow
$$
f(x) = f(-x).
$$
If we do a perturbative expansion around $x=0$ then we can take advantage of that fact and use the symmetry. For example there will be no odd terms in the expansion. Now consider an automorphism $\sigma : \mathbb R \to \mathbb R$ given for all $x\in \mathbb R$ by
$$
\sigma(x) = x + c,
$$
where $c\in \mathbb R$. Then the transformed function
$$
\tilde f = \sigma^\ast f = f\circ \sigma,
$$
is no longer symmetric a priori for $c\neq 0$. Now, if we take the same expansion then the mirror symmetry we had before might no longer be there! We broke it. This is symmetry braking. By following such procedures we can get very interesting physical results in classical and quantum field theory. 

The discussion here is primarily drawn from these references

1. [Gauge Theory and Variational Principles](https://archive.org/details/gaugetheoryvaria00blee_0)
2. [An Introduction to Quantum Field Theory](https://www.google.com/books/edition/An_Introduction_To_Quantum_Field_Theory/GjGy0AEACAAJ?hl=en)
3. [Mathematical Gauge Theory](https://link.springer.com/book/10.1007/978-3-319-68439-0)
4. [Field Theory: A Modern Primer](https://www.routledge.com/Field-Theory-A-Modern-Primer/Ramond/p/book/9780367154912?srsltid=AfmBOopi099PMiNiuMJ-ooHBpLH1gKU0uX7NO0OZmMspkfr45njrTzo8)



[toc]



# In Classical Field Theory

Let's start with a formal description of Symmetry Braking in Classical Field theory. 

## Vacuum in a Field Theory

We will define vacuums and chop up our symmetry accordingly. But first let's introduce a useful tool

**<u>Definition:</u>** Let $f:X\to \mathbb K$ be a function from some manifold $X$ to a field $\mathbb K$. A **bundle lift** of $f$ via a bundle $\pi:E\to M$ with fiber $X$ over some manifold $M$ is a map $F:E\to \mathbb R$ such that, given a global trivialization $(\phi=(\phi_1,\phi_2),M)$ of $E$, the function is given by
$$
F= \phi^{-1} \circ (\text{Id}_M \times f) \circ \phi
$$
**<u>Note:</u>** the bundle lift depends on the trivialization. 

**<u>Definition:</u>** Let $F$ be a bundle lift on the bundle $\pi:E\to M$ with connection $\nabla$ on its fibers. We say that $\sigma \in \Gamma^\infty(E)$ is a **local minimum** of $F$  if for all $p\in M$ the Hessian $\nabla \nabla \left.F\right|_{\pi^{-1}(p)}$  is positive semidefinite at $\sigma(p)$ and $(\nabla \left.F\right|_{\pi^{-1}(p)})(\sigma(p)) = 0$.

This is a disgustingly complicated way to say what we all think when we think of a minimum. Gradient zero, and Hessian bowl. 



**<u>Definition:</u>** Consider a Lagrangian $\mathcal L : \Gamma^\infty(E) \to \Omega^n(M)$, where $(M,g)$ is an $n$-dimensional connected and simply connected Riemannian manifold and $\pi:E \to M$ is an associated vector bundle over $M$ to a principal $G$-bundle $\bar\pi : P\to M$ where $G$ is a compact Lie group. Let the Lagrangian be given for any $\phi \in \Gamma^\infty(E)$ by
$$
\mathcal L(\phi) = \ast \langle \nabla  \phi,\nabla \phi \rangle + \ast V(\phi),
$$
where $\nabla:\mathfrak{X}(M)\times \Gamma^\infty(E)\to  \Gamma^\infty(E)$ is a connection induced by $P$, $\langle \cdot, \cdot \rangle $ is a $G$-invariant bundle metric, and  $V:\Gamma^\infty(E) \to C^\infty(M)$ is a smooth, $G$-invariant map called the **potential** which is a bundle lift of some smooth function on the fiber of $E$. If $\phi_0 \in \Gamma^\infty(E)$ is a local minimum of $V$ and it is covariantly constant, i.e. $\nabla \phi_0 = 0$, then it is called a **vacuum**. It's orbit under $G$ given by the subbundle
$$
O_{\phi_0} = G \cdot \phi_0 = \{g\cdot \phi_0(p) \in E \mid g\in G,\ p\in M \}
$$
is called the **vacuum orbit**. We usually denote the fibers as $O_{\phi_0(p)}$ for some $p\in M$. The vacuum's stabilizer
$$
G_{\phi_0} = \{g\in G \mid g\cdot \phi_0 = \phi_0\},
$$
is called the **unbroken subgroup** of $G$ relative to $\phi_0$.



Ooof. This was a lot of setup. And while the elements, such as Principal and Associated Vector bundles are explained [here](../Geometry/Bundles.md), they are only there to provide the natural calculus structure that we usually take for granted in physics. In essence, a **vacuum** is a field configuration that minimizes the potential of our theory. 

The interesting theorem that will lead to the creation of Goldstone Bosons is the following.

**<u>Theorem:</u>** Let $\phi_0 \in \Gamma^\infty(E)$ be a vacuum for some Lagrangian on a vector bundle $E$ of rank $k$ with fiber $F$, and $d = \dim O_{\phi_0(p)}$ the dimension of the vacuum orbit. Then for every $p\in M$ there exist $d$ basis vector fields $\{X_i\}_{i=1}^d \subset \mathfrak X(E_p)$ for $TO_{\phi_0 (p)} \subset TE_p$ such that
$$
\nabla_{X_i} \nabla_{X_i} V_p = 0,
$$
where $V_p$ is the potential restricted at the fiber above $p$, i.e. $V_p = \left. V\right|_{\pi^{-1}(p)} : E_p \to \mathbb R$. 

***Proof:*** The proof of this theorem is based on the fact that $V$ is $G$-invariant. In particular, we know that $G$ acts transitively on $O_{\phi_0(p)}$ since it is an orbit.  Therefore, for any element of the Lie algebra $X \in \mathfrak g$, there exists a related vector field $\tilde X$ such that
$$
\nabla_{\tilde X} V_p = 0.
$$
This is because any $q \in O_{\phi_0(p)}$ is given by some $q = e^{X}\cdot  \phi_0(p)$, but since $V_p$ is $G$-invariant, $V_p(q) = V_p(\phi_0(p))$. Therefore, $V_p$ is constant on $O_{\phi_0(p)}$. As a result,
$$
\nabla_{\tilde X} V_p = \mathcal L_{\tilde X} V_p = \lim_{\epsilon \to 0}\frac{V(e^{\epsilon X}\cdot ) - V(\cdot )}{\epsilon} = 0.
$$
The only question is to show that we can form a basis for $TO_{\phi_0(p)}$ using such related vector fields from the Lie algebra. The answer is yes! Since $G$ acts transitively on the orbit, we know that the orbit is isomorphic to the quotient by the vacuum stabilizer
$$
O_{\phi_0(p)} \cong G/G_{\phi_0},
$$
Therefore, this isomorphism of Lie groups, induces an isomorphism of the Lie algebras. So we are done! 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$




## Goldstone Bosons

A vacuum is the fundamental ingredient of symmetry braking. Now that we have it, we would like to create a field theory around deflections from this vacuum. Here is how we do it.

**<u>Definition:</u>** Let $\phi \in \Gamma^\infty(E)$ be a field and $\phi_0 \in \Gamma^\infty(E)$ a vacuum for some Lagrangian. Then the **shifted field** is 
$$
\phi' \coloneqq \phi - \phi_0.
$$
 











