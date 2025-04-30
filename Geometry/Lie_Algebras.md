# Lie Algebras

Lie algebras are encountered all the time in physics as a way to formalize the intuition of infinitesimal transformations. Here we explore them on their own merit, developing tools for the classification and calculation of representations with hints and connections to physical applications.

[toc]



## Basic Definitions

In an effort to study Lie algebras by themselves here is an isolated definition.

**<u>Definition:</u>** A **Lie algebra** is a vector space $\mathfrak{g}$ over a Field $\mathbb{F}$ with a map $[\cdot, \cdot]: \mathfrak{g}\times \mathfrak{g} \to \mathfrak{g}$ called the **Lie bracket** that satisfies the following axioms for any $X,Y,Z \in \mathfrak{g}$

1. **Bilinearity:** For any $a,b \in \mathbb{F}$ we have that
   $$
   \begin{align*}
   [aX+bY, Z] &= a[X,Z] + b[Y,Z]\\
   [X,aY+ bZ] &= a[X,Y] + b[X,Z]
   \end{align*}
   $$

2. **Antisymmetry:** $[X,Y] = - [Y,X]$

3. **Jacobi identity:** $[X,[Y,Z]]+[Z,[X,Y]]+[Y,[Z,X]]=0$

While this is a correct definition, it is stilted because it is devoid of the context in which we encounter Lie Algebras. Here is a Lemma that can help us make the connection clearer.

**<u>Lemma:</u>** Let $M$ be a manifold and $U$ a chart. Then the Lie derivative of vector fields $\mathcal{L}_{\cdot} \cdot: \mathfrak{X}(U) \times \mathfrak{X}(U) \to \mathfrak{X}(U)$ satisfies the properties of the Lie bracket.

***Proof:*** The Lie derivative is defined for any two vector fields $X,Y \in \mathfrak{X}(U)$ and any function $f\in C^\infty(U)$ as
$$
\mathcal{L}_{X}Y f= X(Yf) - Y(Xf).
$$
Treating $X,Y$ as derivations we can prove the statement directly using properties of partial derivatives.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
The point of playing with this lemma is that vector fields seem to be the natural origin of the abstract definition of Lie algebras. A vector field on a manifold, is used to describe flows on it using infinitesimal generators for the direction and speed of each point on the manifold. The Lie algebra axioms are modeled to emulate the properties of these vector fields. 

**<u>Example:</u>** Given a manifold $M$ and a chart $U \subset M$ the set of vector fields $\mathfrak{X}(U)$ form a Lie algebra.

Yet, the origin of Lie algebras actually goes back to Lie groups. 



## Origin from Lie groups 

A Lie group is essentially a smooth group. More info about Lie groups is here [here](../Geometry/Lie_Crap.md). The idea of a Lie group though is that it is both a group and a manifold. Therefore it has a very nice smooth structure attached to it. For example, the multiplication map is smooth. 

Let's find some special vector fields in a Lie group.

**<u>Definition:</u>** Let $X \in \mathfrak{X}(G)$ be a vector field in $G$. Then $X$ is **Left invariant** if under the left multiplication map $L_g : G \to G$ which takes $h \mapsto gh$, the pushforward satisfies
$$
L_{g\ast} X = X
$$
 for all $g$.

In other words left invariant vector fields are ones that are obtained by left translating a single vector around the group. 

**<u>Theorem:</u>** The set of all left invariant vector fields of a Lie group $G$ is a Lie algebra with the Lie derivative as Lie bracket. We usually call it the **Lie algebra of the group** $G$ and it is denoted by $\mathfrak{g}$.

So in the most fundamental sense. Lie algebras originate from describing the flow of multiplication of a Lie group. This is how they find so many applications in physics. 



# Simple Lie Algebras

What we are aiming to do here is to describe how to calculate stuff with Lie algebras, not necessarily how they are motivated from Lie groups. For example, things like infinite dimensional Lie algebras appear all the time in places like QM and QFT. Being able to classify their representations is super interesting.

We start by studying simple Lie algebras. The word *simple* here is a category theory word which roughly means an object with no non-trivial quotient object. Now if one is interested in a more rigorous version of this, it can be found [here](../Categories/Abelian_Categories.md). That said, we can escape category Language by defining a simple Lie algebra using bases.

**<u>Definition:</u>** Let $\mathfrak{g}$ be a lie algebra and $\mathcal{J} \subset \mathfrak{g}$ be a basis for $\mathfrak{g}$. If for any such basis there exists no subset $\mathcal{L} \subset \mathcal{J}$ where $[\mathcal{L},\mathcal{J}] \subset \text{span\,}\mathcal{L}$ then $\mathfrak{g}$ is **simple**.

Notice that this means that there is no proper ideal (which is a quotient object in the category of Lie algebras).







 