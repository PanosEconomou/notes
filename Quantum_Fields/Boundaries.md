# Conformal Boundaries

What happens when we try to do a 2D CFT on a manifold that has a Boundary? In these notes we describe what are boundary states, as well as conformal and topological defects that our theory can have.

[toc]

# Modular Invariance

Before we talk about boundaries let's try to explore some relevant properties of Conformal Field Theories that should not be broken when we add a boundary. To study modular invariance we will talk about intertwiners. These are objects that map between representations of CFTs. 

## Complex Quotient Maps of Tori

To explain modular invariance, let’s try to understand modular transformations. To do this, we need to understand how we can obtain a torus from the complex plane.

**<u>Lemma:</u>** Any complex number $\tau \in \mathbb H\subset \mathbb C $ in the upper half plane defines the **torus equivalence** relation on $\mathbb C$ such that
$$
z \sim z + n + m\tau,
$$
where $n,m\in \mathbb Z$. 

This is pretty clear to verify, but the picture is looks like this. 



![modular-plane](_Boundaries.assets/modular-plane.svg)



Essentially, each parallelogram is equivalent to each other. If we take the quotient we get a torus like so.

**<u>Theorem:</u>** The quotient $\mathbb C/{\sim}$ under the torus equivalence is homeomorphic to a torus iff $\Im \tau \neq 0$ otherwise it is homeomorphic to a Cylinder.

***Proof:*** Consider the surjective map $\mathbb C \to I^2$ such that $z + m + n\tau \mapsto $ that preserves the identifications of the torus equivalence. Then we see that the quotient map $I^2 \to T^2$ also preserves the identifications of the torus equivalence. In the case of $\Im \tau = 0$ we have that the above is no longer true. However, we can map every horizontal line into a segment like so $\mathbb C \to \mathbb R\times I$, and then notice that a quotient map to the cylinder $\mathbb R\times I \to \mathbb R\times S^1$ respects the identifications made. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
**<u>Corollary:</u>** The quotient under the torus equivalence is diffeomorphic to the flat torus, i.e. the Riemannian manifold $(T^2 \coloneqq S^1\times S^1,g)$ where the metric is given by the canonical product metric of Euclidean circles.

***Proof:*** We can think of the quotient $\mathbb C/{\sim}$ under the torus equivalence as the quotient by the group $\mathbb Z^2$ under the smooth action defined by $\tau \in \mathbb C$ on $\mathbb C$. Also, the action is free (the stabilizer of any point in $\mathbb C$ is trivial), proper (under the map $\mathbb Z^2\times \mathbb C \to \mathbb C \times \mathbb C$, given by $(g,x) \mapsto (gx,x)$ the preimage of any compact set is compact, we just translate it), and isometric (For any $g\in \mathbb Z^2$ the orbit map is an isometry since in this case it is a translation).

Then by the quotient manifold theorem, the quotient is a smooth manifold of dimension 2, and the quotient map $q : \mathbb C \to \mathbb C/\mathbb Z^2$ is a submersion. As a result the map $q^\ast$ is injective and linear, therefore by dimension counting it is an isomorphism of the cotangent tangent spaces pointwise. Therefore, we can define a metric on the quotient as $g'= (q^{\ast})^{-1}g$.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$


## Conformal Equivalence

Conformal equivalence is the property we want the modular transformations to preserve. So let's think about it first before we think of the rest. The idea is very simple. 

**<u>Definition:</u>** Two Riemannian manifolds $(M,g)$ ans $(N,h)$ are **conformally equivalent** iff there exists a diffeomorphism $f:M\to N$ such that
$$
f^\ast h = \Omega^2 g,
$$
for some $\Omega \in C^\infty(M)$. 

**<u>Corollary:</u>** Conformal equivalence is an equivalence relation.

The intuition behind conformal equivalence is that two manifolds are conformally equivalent if I can take one and stretch it into the other without changing the orientation or any of the angles in the process. 

**<u>Example:</u>** The flat tori obtained by the torus equivalence for some $\tau \in \mathbb H$ and $-\frac{1}{\tau}$ are conformally equivalent. 

***Proof:*** The transformation $R : \mathbb C\to \mathbb C$ given by $z\mapsto -e^{-i\arg \tau}z$ is a conformal transformation as a rotation of the complex plane. The same thing is true for scalings $D :\mathbb C\to \mathbb C $ where $z\mapsto \frac{1}{||\tau||} z$. We note that the transformation $z\mapsto -\frac{1}{z}$ is the composition of the two so it is conformal. 
$$
\xymatrix{
A \ar[d]^b \ar[r]^a &B\ar[d]^c\\
C \ar[r]^d &D}
$$














