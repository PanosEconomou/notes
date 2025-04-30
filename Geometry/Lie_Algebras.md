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

**<u>Example:</u>** Given a vector space $V$, which is also a Lie group, its Lie algebra is the vector space itself with the bracket $[X,Y] = 0$ for any $X,Y \in V$. However, there is a much more interesting Lie algebra we can assign to $V$ which is its Endomorphism algebra $\text{End}(V)$ that contains all the linear endomorphisms (all the matrices in the finite dimensional case) with Lie bracket the matrix commutator.



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
X&\mapsto \text{ad}_X = [X,\cdot].
\end{align*}
$$
**<u>Proposition:</u>** The nonzero eigenvalues of $\text{ad}_H$ for any $H$ in the commuting part of the Cartan-Weyl basis of $\mathfrak{h}$ are given by $\alpha_{\bull}(H)$.

***Proof:*** The Cartan-Weyl basis is, by construction, an eigenbasis for any $H$ since for any $E$
$$
\text{ad}_HE = [H,E] = \alpha_E(H) E.
$$
Therefore $\alpha_E(H)$ is an eigenvalue of $H$.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
 Notice how we can completely define each $E$ using a set of roots $\alpha_E$. In other words there is a one-one and onto map between the roots and the remaining generators $E$ of the algebra. So in some sense, that we will make precise later, fixing the roots and the Cartan subalgebra defines our simple Lie algebra!

So we can perhaps refer to the generator with corresponding root $\alpha$ as $E^\alpha$ or even just $\alpha$ instead. These are also common notations. 



### Commutation Relations

One last thing that is worth highlighting for calculation purposes is the following commutation relations of the Cartan-Weyl basis

**<u>Proposition:</u>** Let $\mathfrak{g}$ be a simple Lie algebra and consider the Cartan-Weyl basis, $H,H' \in \mathfrak{h}$ be generators of the Cartan subalgebra and  $E,E' \in \mathfrak{g} \setminus \mathfrak{h}$ be generators of the remaining algebra with $\alpha,\alpha' \in \mathfrak{h}^\ast$ the corresponding roots. Then the following identities are true.

1. $[H,H'] = 0$
2. $[H,E] = \alpha(H) E$,
3. If $\alpha +\alpha' = 0$ then $[E,E'] = \frac{2 \alpha \cdot H}{\langle \alpha,\alpha \rangle}$, where $\alpha \cdot H = \sum_{i=0}^{\text{dim\,}\mathfrak{h}} \alpha^i H ^i$.
4. If $\alpha + \alpha'$ is also a root corresponding to generator $\bar E$ then there exists a $\lambda \in \mathbb{C}$ such that $[E,E'] = \lambda \bar E$.
5. If $\alpha + \alpha'$ is none of the above, then $[E,E'] = 0$.



## Killing Form

Since we have a representation of the algebra onto itself, it would be nice to find an "inner product" on the Lie algebra that is invariant under the action of itself. Just like we have orthogonal transformations and we find the Euclidean inner product that is invariant under them. 

Notice that since the Lie algebras we are considering are all complex they carry a Hermitian inner product. So talking about lengths and stuff is always possible. However finding an $\text{ad}$ invariant inner product isn't. So we have to relax something. 

Turns out that if we want something to be linear symmetric and invariant under Lie algebra automorphisms in a simple Lie algebra we don't really have many choices. 

**<u>Theorem:</u>** Let $\mathfrak{g}$ be a simple Lie algebra. Then any invariant symmetric bilinear form $K : \mathfrak{g}\times \mathfrak{g} \to \mathbb{C}$ is given by
$$
K = \lambda \text{tr} (\text{ad}_X \circ \text{ad}_Y)
$$
where $\lambda \in \mathbb{C}$ is any number.

By the way, invariance of a bilinear form means that for any Lie algebra automorphism $f:\mathfrak{g}\to \mathfrak{g}$
$$
K(f(X),f(Y)) = K(X,Y),
$$
 for any $X,Y \in \mathfrak{g}$.

***Proof:*** First we need to clarify how the trace $\text{tr}$ of a linear endomorphism $f$ is defined. What we do is pick a basis $\mathcal{J}$ and then we note that for any $J \in \mathcal{J}$ 
$$
f(J) = \sum_{k\in \mathcal{J}}f_{JK} K,
$$
for some $f_{JK} \in \mathbb{C}$. Then
$$
\text{tr\,} f= \sum_{j\in \mathcal{J}} f_{JJ}.
$$
This is known as the Euclidean trace, which implies that, as we will soon see, there are other type of traces with respect to different isomorphisms between the vector space and its dual. Now for the actual proof consider $B: \mathfrak{g}\times \mathfrak{g} \to \mathbb{C}$ be a symmetric invariant bilinear form. Then consider a linear map $B: \mathfrak{g} \to \mathfrak{g}^\ast$ defined by for any $X\in \mathfrak{g}$ by $B(X) = B(X,\cdot)$. 

Since for any $X \in \mathfrak{g}$ the representation $\text{ad}_X$  is a Lie algebra automorphism we have that
$$
B\circ \text{ad}_X = \text{ad}^\ast_X \circ B,
$$
where $\text{ad}^\ast: \mathfrak{g} \to \text{Aut}(\mathfrak{g}^\ast)$ is the dual representation given for any $X \in \mathfrak{g}$ and $\omega \in \mathfrak{g}^\ast$ by
$$
\text{ad}^\ast_X(\omega) = - \omega \circ \text{ad}_X.
$$
Notice that for matrix representations this is simply the statement
$$
\text{ad}^\ast_X(\omega) = -\text{ad}_X^\dagger.
$$
As a result, $B$ is an intertwiner between the adjoint representation and its dual. However, by Schur's lemma since $\mathfrak{g}$ is simple, then $\text{hom}(\mathfrak{g},\mathfrak{g}) = \mathbb{C}$. So for any two such maps $B,C$ there exists $\lambda \in \mathbb{C}$ such that $B = \lambda C$.

So now all we need to show is that $\text{tr} (\text{ad}_X \circ \text{ad}_Y)$ is invariant under automorphisms. Consider an automorphism $f \in \text{Aut(g)}$ and any map $h : \mathfrak{g} \to \mathfrak{g}$ then we have that $\text{tr}(f\circ h \circ f^{-1}) = \text{tr}(h)$ by the properties of trace. Additionally for any $X,Y \in \mathfrak{g}$
$$
\text{ad}_{f(X)} Y = [f(X),Y] = f([X,f^{-1}(Y)]) = f (\text{ad}_X f^{-1}Y ),
$$
or in other words $\text{ad}_{f(X)} = f \circ \text{ad}_{X} \circ f^{-1}$, which kind of justifies the relation between the adjoint representation and conjugation. Anyway, plugging this to the trace we see that it is invariant.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
 This is fantastic! The best we can do is this form $\text{tr} (\text{ad}_X \circ \text{ad}_Y)$. So might as well give it a name. 

**<u>Definition:</u>** The **Killing form** is a symmetric bilinear form $K$ on $\mathfrak{g}$ given for each $X,Y \in \mathfrak{g}$ by
$$
K(X,Y) = \text{tr} (\text{ad}_X \circ \text{ad}_Y).
$$
 Later we will introduce the Killing form normalized with a different factor so for now we will keep the notation abstract as $K$.

**<u>Lemma:</u>** The Killing form is nondegenerate on a simple Lie algebra.

***Proof:*** Notice that $\text{ker\,}K$ is an ideal of $\mathfrak{g}$. That is because if there exists some $X \in \text{ker\,}K$ then for all $Y \in \mathfrak{g}$ we have that $[X,Y]$ is in the ideal because for any $Z \in \mathfrak{g}$
$$
K([X,Y],Z) = K(X,[Y,Z]) = 0,
$$
since $X$ is in the kernel. However we know that $\mathfrak{g}$ is simple so the kernel is either $0$ or $\mathfrak{g}$. Since the kernel is commuting it can't be $\mathfrak{g}$ in general.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
Since the Killing form is nondegenerate we can finally define an orthonormal basis for the Lie algebra which is fantastic! We can also use it to define an isomorphism between $\mathfrak{g}$ and $\mathfrak{g}^\ast$ just like we do using any nondegenerate bilinear form of a vector space.

A couple of interesting uses of the Killing form are here.

**<u>Lemma:</u>** The Cartan subalgebra is orthogonal to the rest with respect to the Killing form.

***Proof:*** We can pick a generator $E$ in the rest of the algebra and show that for all $H,H'$ generators of the Cartan subalgebra 
$$
0 = K(\text{ad}_{H'} H, E) = -\alpha_E(H') K(H,E).
$$
Which implies $K(H,E) = 0$.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
**<u>Proposition:</u>** Given a simple Lie algebra $\mathfrak{g}$ over $\mathbb{C}$ and a root $\alpha \in \mathfrak{h}^\ast$, then $-\alpha \in \mathfrak{h}^\ast$ is also a root.

***Proof:*** Let $E, E'$ be Cartan-Weyl generators with associated roots $\alpha, \alpha'$. Then consider any element of the basis of the Cartan subalgebra $H$. Therefore we have
$$
\alpha(H)K(E,E') = K(\text{ad}_H E, E') = -K(E,\text{ad}_HE') = -\alpha'(H)K(E,E') \implies (\alpha + \alpha') K(E,E') = 0.
$$
This means that either $\alpha = - \alpha'$ or $K(E,E') = 0$. If we assume that $-\alpha$ is not a root then $K(E,\cdot) = 0$  for all elements in the Cartan-Weyl basis (we used the previous lemma where E is perpendicular to the Cartan subalgebra). Therefore $K$ is degenerate. Since we know it is nondegenerate we have that $-\alpha$ must be a root.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$

## Weights

Now it is time to play with the representations of the simple Lie algebras. In our attempt to classify them we will generalize the idea we introduced as roots. But let's start simple.

**<u>Definition:</u>** Given a Lie algebra $\mathfrak{g}$ a **Lie algebra representation** of $\mathfrak{g}$ on a vector space $V$ is a Lie algebra homomorphism $\rho: \mathfrak{g} \to \text{End}(V)$. In other words for any $X,Y \in \mathfrak{g}$ 
$$
[\rho(X),\rho(Y)] = \rho([X,Y]).
$$
We often abuse notation and call the representation $V$, in which case we refer to the $\mathfrak{g}$ module defined by the representation $\rho$. Sometimes we even use the notation $V_\rho$. The representation is **unitary** if $V$ is a complex vector space with a positive semidefinite Hermitian form where representations of generators with opposite roots are Hermitian conjugates of each other. 

**<u>Example:</u>** The adjoint representation of the Lie algebra to itself is (or can always be made) unitary.

**<u>Lemma:</u>** Let $\mathfrak{g}$ be a simple Lie algebra and $\mathfrak{h}$ be its Cartan subalgebra. Then for every representation $V$ of $\mathfrak{g}$ there exists a basis that simultaneously diagonalizes the Cartan basis. 

***Proof:*** Since elements in the Cartan subalgebra commute so do their representations. Therefore they are simultaneously diagonalizable.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
**<u>Definition:</u>** Given a representation $\rho : \mathfrak{g}\to \text{End}(V)$ of a Lie algebra $\mathfrak{g}$ and $\psi \in V$ be a simultaneous eigenvector of the representation of the generators of the Cartan subalgebra $\mathfrak{h}$. Then a **weight** is an element $\lambda \in \mathfrak{h}^\ast$ such that for any generator $H \in \mathfrak{h}$ 
$$
\rho(H) \psi = \lambda(H) \psi.
$$


Notice that the roots are the weights of the Adjoint representation. This basis is quite nice because it has the following property.

**<u>Proposition:</u>** Given a representation $\rho : \mathfrak{g}\to \text{End}(V)$ of a Lie algebra $\mathfrak{g}$, let $\psi \in V$ be an eigenvector with weight $\lambda \in \mathfrak{h}^\ast$, $H$ an element of the Cartan basis, and $E$ a Cartan-Weyl basis element with root $\alpha \in \mathfrak{h}^\ast$. Then $\rho(E) \psi$ is an eigenvector of $\rho(H)$ with root $\alpha + \lambda$.

***Proof:*** This follows from the commutation relation between $H$ and $E$.
$$
\rho(H)\rho(E) \psi = \rho(E) \rho(H) \psi  + \rho([H,E]) \psi  = (\lambda + \alpha) \rho(E)\psi.
$$

$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$

So we have found a expression for Ladder operators! This is super fun. This leads us to generalize a lot of our intuition from the angular momentum representations. Also to keep notation clear, we will now work in terms of modules where essentially given a representation $\rho: \mathfrak{g} \to \text{End}(V)$ we have defined a product $\mathfrak{g} \times V \to V$ using the representation. So we will no longer write $\rho$ explicitly.

**<u>Theorem:</u>** Let $V$ be a finite dimensional unitary representation of a simple Lie algebra $\mathfrak{g}$, $E \in \mathfrak{g}$ a generator with root $\alpha$, and $\psi \in V$ a basis element with weight $\lambda$. Then there exist integers $m,n \in \mathbb{N}$ such that $E^{m}\psi = (E^{\dagger})^n\psi = 0$.

***Proof:*** We first notice that the vectors $E^p\psi$ and $E^q\psi$ for integers $p\neq q$ are orthogonal by considering any $H \in \mathfrak{h}$
$$
(p\alpha(H) + \lambda(H)) \langle E^p\psi,E^q\psi \rangle= \langle HE^p\psi,E^q\psi \rangle = \langle E^a\psi,HE^b\psi \rangle= (q\alpha(H) +  \lambda(H)) \langle E^a\psi,E^b\psi \rangle.
$$
Therefore we have that
$$
(p-q)\alpha(H) \langle E^a\psi,E^b\psi \rangle = 0.
$$
Since $\alpha(H)$ cannot be zero for all Cartan generators and $p\neq q$ we have the the two vectors are orthogonal. As a result, we can create a sequence of orthogonal vectors of the form $\{E^k \psi\}_{k=1}^m$. However since $V$ is finite dimensional such a sequence must have at most $\dim V$ elements. Therefore it must be that there exists an $m \in \mathbb{N}$ such that $E^m \psi = 0$. The proof for the conjugate is identical.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
One more interesting thing is that the above theorem imposes a cool result for the weights.

**<u>Corollary:</u>** let $\alpha$ be a root of $\mathfrak{g}$ and $\lambda$ be a weight in a finite dimensional unitary representation of $\mathfrak{g}$. Then for any $H$ in the basis of the Cartan subalgebra of $\mathfrak{g}$ there exists an integer $k \in \mathbb{Z}$ such that
$$
\lambda(H) = \frac{k}{2} \alpha(H).
$$
Or in other words
$$
\frac{2 (\lambda,\alpha)}{(\alpha, \alpha)} \in \mathbb{Z},
$$
where $(\cdot,\cdot): \mathfrak{h}^\ast \times \mathfrak{h}^\ast \to \mathbb{C}$ is the inner product in the dual space induced by the killing form on $\mathfrak{g}$.

***Proof:*** The proof relies on the fact that in any finite dimensional unitary representation $V$ of $\mathfrak{g}$ given any Cartan generator $H$ and any other generator $E$ with root $\alpha \in \mathfrak{h}^\ast$ the set $\{H,E,E^\dagger\}$ forms a representation of $\mathfrak{su}(2)$ by taking any vector $\psi \in V$ with weight $\lambda \in \mathfrak{h}^\ast$.  



That representation will contain a state with maximum and minimum z-component of angular momentum. So there exist a $p\in \mathbb{N}$ such that $E^p\psi$ is (without loss of generality) the maximum vector with eigenvalue $j$ and and integer $q \in \mathbb{N}$ such that $(E^\dagger)^q \psi$ has the minimum eigenvalue $-j$ where $j$ is half integer. So we can write
$$
\begin{align*}
j = \lambda(H) + p\alpha(H) && -j=\lambda(H) - q\alpha(H).
\end{align*}
$$
Summing the two proves the theorem.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$


Notice that this corollary applies to the adjoint representation as well! So we can constrain the relations between the roots of a Lie algebra.