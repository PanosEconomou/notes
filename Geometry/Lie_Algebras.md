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

## Cartan Basis

One useful way to classify simple Lie algebras is by classifying how "commuting" they are. Here is what we mean more precisely.

**<u>Definition:</u>** Given a simple Lie algebra $\mathfrak{g}$, its **Cartan subalgebra** $\mathfrak{h}$ is the maximal subalgebra of $\mathfrak{g}$ such that 
$$
[\mathfrak{h},\mathfrak{h}] = \{0\}.
$$
Essentially the Cartan subalgebra is the algebra formed using the maximum number of commuting generators. The question remains for what we can do with the rest of the generators.

**<u>Proposition:</u>** Let $\mathfrak{g}$ be a Lie algebra over a closed field (from now on we will use $\mathbb{C}$) and $\mathfrak{h}$ be its Cartan subalgebra with a basis $\mathcal{H}= \{H^i\}_{i=0}^{\text{dim\,}\mathfrak{h}}$. Then there exists a basis $\mathcal{E}$ of $\mathfrak{g}$ such that $\mathcal{H} \subset \mathcal{E}$ where given $H \in \mathcal{H}$ 
$$
[H,E] = \alpha_E(H) E,
$$
for all $E \in \mathcal{E} \setminus \mathcal{H}$, where $\alpha_E \in \mathfrak{h}^\ast$, the dual space of $\mathfrak{h}$. This is known as the **Cartan-Weyl basis**.

***Proof:***  This looks similar to the construction of ladder operators. The way to show this is the following. Pick any basis $\mathcal{J}$ such that $\mathcal{H} \subset J$ then we know that for any $H\in \mathcal{H}$ and $J \in \mathcal{J} \setminus \mathcal{H}$
$$
[H,J] = \sum_{K \in \mathcal{J}} f_{H,J}^K K = \sum_{K \in \mathcal{J}\setminus \mathcal{H}} f_{H,J}^K K + \sum_{K \in \mathcal{H}} f_{H,J}^K K.
$$
Then we can pick $E$ to be
$$
E_J = J - \sum_{H,K \in \mathcal{H}} f_{H,J}^K K.
$$
 What we did is that we subtracted the part of $J$ that was in $\mathfrak{h}$. Therefore the new basis formed by $\mathcal{H} \cup \{E_J\}_{J \in \mathcal{J}\setminus \mathcal{H}}$ is still a basis. Using a similar reasoning we can then diagonalize to obtain 
$$
[H,E] = \alpha_{H,E} E,
$$
where $\alpha_{H,E} \in \mathbb{C}$. Since this gives a complex number for each $H$ in a linear way we can define $\alpha_E \in \mathfrak{h^\ast}$ as 
$$
\alpha_E(H) = \alpha_{H,E},
$$
for any $H \in \mathcal{H}$.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
We call $\alpha_E \in \mathfrak{h}^\ast$ a **root** of $\mathcal{g}$.



### Adjoint Representation 

There is a particularly nice way to understand these roots in the adjoint representation. 

**<u>Definition:</u>** Given a Lie algebra $\mathfrak{g}$ its **adjoint representation** is the representation of the Lie algebra onto itself defined by
$$
\begin{align*}
\text{ad}:\mathfrak{g} &\to \text{Aut}(\mathfrak{g})\\
X&\mapsto \text{ad}(X) = [X,\cdot].
\end{align*}
$$
**<u>Proposition:</u>** The nonzero eigenvalues of $\text{ad}(H)$ for any $H$ in the commuting part of the Cartan-Weyl basis of $\mathfrak{h}$ are given by $\alpha_{\bull}(H)$.

***Proof:*** The Cartan-Weyl basis is, by construction, an eigenbasis for any $H$ since for any $E$
$$
\text{ad}(H)E = [H,E] = \alpha_E(H) E.
$$
Therefore $\alpha_E(H)$ is an eigenvalue of $H$.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
 



 