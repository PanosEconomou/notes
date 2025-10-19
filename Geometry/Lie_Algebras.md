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

**<u>Theorem:</u>** Let $\mathfrak{g}$ be a simple Lie algebra. Then any Lie algebra automorphism invariant symmetric bilinear form $K : \mathfrak{g}\times \mathfrak{g} \to \mathbb{C}$ is given by
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

**<u>Proposition:</u>** Given a representation $\rho : \mathfrak{g}\to \text{End}(V)$ of a Lie algebra $\mathfrak{g}$, let $\psi \in V$ be an eigenvector with weight $\lambda \in \mathfrak{h}^\ast$, $H$ an element of the Cartan basis, and $E$ a Cartan-Weyl basis element with root $\alpha \in \mathfrak{h}^\ast$. Then $\rho(E) \psi$ is an eigenvector of $\rho(H)$ with weight $\alpha + \lambda$.

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

**<u>Corollary:</u>** let $\alpha$ be a root of $\mathfrak{g}$ and $\lambda$ be a weight in a finite dimensional unitary representation of $\mathfrak{g}$. Then for any $H$ in the basis of the Cartan subalgebra of $\mathfrak{g}$ then
$$
\frac{2 (\lambda,\alpha)}{(\alpha, \alpha)} \in \mathbb{Z},
$$
where $(\cdot,\cdot): \mathfrak{h}^\ast \times \mathfrak{h}^\ast \to \mathbb{C}$ is the inner product in the dual space induced by the killing form on $\mathfrak{g}$.

***Proof:*** The proof relies on the fact that in any finite dimensional unitary representation $V$ of $\mathfrak{g}$ given any generator $E \notin \mathfrak{h}$ with root  $\alpha \in \mathfrak{h}^\ast$ and $H \coloneqq \frac{1}{2}[E,E^\dagger]$, the set $\{H,E,E^\dagger\}$ forms a representation of $\mathfrak{su}(2)$ by taking any vector $\psi \in V$ with weight $\lambda \in \mathfrak{h}^\ast$.  

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

**<u>Lemma:</u>** If $\alpha, \beta$ are roots, then 
$$
s_{\alpha}(\beta) = \beta - \frac{2(\beta, \alpha)}{(\alpha,\alpha)} \alpha,
$$
 is a also a root. 

***Proof:*** Consider the adjoint representation of the Lie algebra, and construct a subrepresentation of $\mathfrak{su}(2)$ as we did above using a generator with root $\beta$ as the highest weight vector. Then, we know that since $\beta(H) - q \alpha(H)$ is a weight, then so is
$$
\beta(H) - (q-p) \alpha(H) = \beta(H) - \frac{2(\beta,\alpha)}{(\alpha,\alpha)} \alpha(H).
$$
 However, this is true for enough $H$ to form a basis for $\mathfrak{h}^\ast$. Therefore we have shown the claim. 
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
Here is a super interesting application.

**<u>Corollary</u>**: Let $\alpha\neq \pm\beta$ be weights of a simple Lie algebra. Then they are not parallel.

***Proof:*** By the previous corollary if they were parallel they could only be parallel by a half integer since 
$$
2 \frac{(\beta,\alpha)}{(\alpha,\alpha)} \in \mathbb{Z}.
$$
Let $\beta = \lambda \alpha$ therefore we have that both $\frac{2}{\lambda}$ and $2\lambda$ must be integers. This implies that $\lambda \in\{\pm \frac{1}{2},\pm 1,\pm 2\}$. We have assumed that $\lambda \neq \pm 1$ so without loss of generality we can pick $\lambda = \pm 2$.  Now let $E_\alpha,E_\beta$ be the corresponding generators. We have that
$$
[E_{\pm \alpha},E_{\pm \alpha}] \propto E_\beta,
$$
since $\alpha + \alpha = \mp \beta$. However we know that $[E_{\pm \alpha},E_{\pm \alpha}] = 0$ because of antisymmetry. Therefore there is no such generator $E_\beta$ which implies that $\beta$ is not a root.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$



## Weyl Group

Playing with the reflections $s_\alpha : \mathfrak{h}^\ast \to \mathfrak{h}^\ast$ associated with a root $\alpha \in \Delta$ we have stumbled upon a group! That is the group of reflections associated with roots where the generators are $s_\alpha$ and the group operation composition. This is called the Weyl group. Its generators are defined for any simple root $\alpha \in S$ by
$$
s_{\alpha}(\beta)  = \beta - (\alpha^\vee,\beta).
$$
**<u>Proposition:</u>** Let $W$ be the Weyl group associated with a root system $\Delta$ with simple roots $S \subset \Delta$. Then $\Delta = WS$ under the defining group action of $W$ on $\mathfrak{h}^\ast$.

The Weyl group has a lot of other interesting properties, that we will use later, but the idea that we can obtain everything by Weyl transformations is a powerful one. In fact we can quotient $\mathfrak{h}^\ast$ by $W$. The equivalent regions under the action of $W$ are called **Weyl chambers** and will be useful soon. Also given a set of simple roots $S$ we can associate a generator of $W$ to each of the roots, so $S$ can be our set of Weyl generators. Therefore we can define the length of each element $l:W \to \mathbb{N}$ and the index $(-1)^l \eqqcolon \epsilon : W\to \mathbb{Z}_2$. 




## Simple Roots

Let's dive in more into the characterization of roots and their properties by using them to construct a basis for the dual space of the Cartan subalgebra $\mathfrak{h}$ of a Lie algebra $\mathfrak{g}$.

**<u>Lemma:</u>** Given a set $\Delta \subset \mathfrak{h}^\ast$ of roots of a simple Lie algebra $\mathfrak{g}$ there always exists a subset $\Delta_+ \subset \Delta$ such as $\Delta = \Delta_+ \cup -\Delta_+$.

***Proof:*** We know that $0$ can't be a root, because if it was the associated basis element would be in the Cartan subalgebra. We also know that for each root $\alpha \in \Delta$ we have that $-\alpha \in \Delta$. Therefore we form $\Delta_+$ such that for any $\alpha \in \Delta_+$ the element $-\alpha$ is not there.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
While this doesn't seem that cool, here is a cool thing.

**<u>Proposition:</u>** A Euclidean inner product on $\mathfrak{h}^\ast$ defines such a subset $\Delta_+$ for a set of roots $\Delta$. 

***Proof:*** To construct it pick any $\alpha \in \mathfrak{h}^\ast$ such that $\langle \alpha,\beta \rangle \neq 0$ for any root $\beta \in \Delta$. Then take
$$
\Delta_+ = \{ \beta \in \Delta \mid \langle \alpha,\beta \rangle > 0\}.
$$

$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

***Note:*** We always have such a Euclidean inner product since $\mathfrak{h}^\ast$ is a finite dimensional complex vector space.

We call such a set $\Delta_+$ a set of **positive roots**. An interesting thing to notice is that while we will always be able to have positive roots, we have multiple choices for them. All of the choices will contain precisely half the available roots and as we will see, we consider them equivalent since each set will either contain either $-\alpha$ or $\alpha$ for any root. So from now on, without loss of generality we will assume that we have fixed a set of positive roots. Also we call $\Delta_- \coloneqq - \Delta_+$. Oh! Also, we call their sum (divided by 2) the **Weyl vector**.

**<u>Definition:</u>** Given a set of positive roots, the **Weyl vector** or **principal vector** $\rho \in \mathfrak{h}^\ast$ is given by
$$
\rho \coloneqq \frac{1}{2}\sum_{\alpha \in \Delta_{+}} \alpha.
$$
This vector will appear all the time, so I want to get ahead of things here. 

The reason why we introduced them is the following.

**<u>Lemma:</u>** The number of positive roots in a simple Lie algebra is always greater than the dimension of the Cartan subalgebra. 

***Proof:*** Assume the converse. Assume that the Cartan-Weyl generator with root $\alpha$ is $E_\alpha$ and the set of positive roots is $\Delta_+$. Then consider a subset $\mathcal{L}$ of the Cartan-Weyl basis $\mathcal{J}$ that contains all $E_\alpha$ for every $\alpha \in \Delta$ and every element of the Cartan subalgebra given by
$$
[E_{\alpha},E_{-\alpha}]  = \frac{2 \alpha \cdot H}{\langle \alpha, \alpha\rangle} \in \mathfrak{h}.
$$
That is a subset of the Cartan Weyl basis such that $[\mathcal{L},\mathcal{J}] \subset \text{span\,}\mathcal{L}$. Which implies that the algebra is not simple. Therefore $|\Delta_+|$ must always be greater or equal to $\text{dim\,}\mathfrak{h}$.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
This means that there might be a chance that we would be able to find a basis for $\mathfrak{h}^\ast$ made out of positive roots! As we will see, we will always be able to do that. Let's try to show this.

**<u>Definition:</u>** A positive root $\alpha \in \Delta^+$is **simple** if there exist no two positive roots $\beta,\gamma \in \Delta^+$ such that $\alpha = \beta + \gamma$.

**<u>Corollary:</u>** Any positive root is a sum of simple roots.

***Proof:*** If it is simple we are done, if it is not, it is a sum of two positive roots. And so on until we reach a sum of simple roots.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
**<u>Lemma:</u>** If for any two positive roots $(\alpha,\beta) > 0 $ then $\alpha - \beta$ is a root. 

***Proof:*** We notice that by trigonometry in the case where $(\alpha,\beta) > 0$ it must hold that 
$$
\alpha - 2\frac{(\alpha,\beta)}{(\beta,\beta)} \beta = - \beta + 2 \frac{(\alpha,\beta)}{(\alpha,\alpha)} \alpha.
$$
This implies that
$$
2\frac{(\alpha,\beta)}{(\beta,\beta)} = 2 \frac{(\alpha,\beta)}{(\alpha,\alpha)} = 1.
$$
Therefore $\alpha - \beta $ is a root.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
I'm cooking lemme prove another lemma and then we will work.

**<u>Lemma:</u>** Any two distinct simple roots have $(\alpha,\beta) \leq 0$.

***Proof:*** If the roots are positive, then $\alpha - \beta$ or $\beta - \alpha$ would be a positive root. However, all positive roots are given by positive sums of simple roots, therefore $\pm(\alpha - \beta)$ are not positive which is a contradiction since one of them has to be. 
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
 Finally we are ready for the super amazingly cool theorem about simple roots.

**<u>Theorem:</u>** The simple roots are a basis for $\mathfrak{h}^\ast$ for any simple Lie algebra.

***Proof:***  We first show that they span $\mathfrak{h}^\ast$. They do so because they span all positive roots, and all positive roots span $\mathfrak{h}^\ast$. Then we need to show that they are linearly independent. If they were linearly dependent then we could find coefficients $a_i \in \mathbb{R}$ such that
$$
a_is^i =0,
$$
where $s^i$ are the simple roots. Now let's split the coefficients into positive and negative ones to obtain two vectors $\alpha = b_i s^i$, where $b_i$ are the positive coefficients, and $\beta = -c_is^i$ which are the negative coefficients. We know that $\alpha - \beta = 0 \implies (\alpha,\beta) > 0$.

However we have that 
$$
(\alpha,\beta) = -b_i c_j (s^i,s^j) \leq 0,
$$
since each coefficient is positive and $(s^i,s^j)$ has to be non-positive. So the simple roots are a linearly independent spanning set.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
This is an incredibly powerful result in the classification of simple Lie algebras! We can now use simple roots as a basis for our Cartan Algebra, along with the fact that there are as many simple roots as there are Cartan generators. 



### Cartan Matrix and Coroots

Another really useful construction are the coroots, which are essentially the dual description of the roots. There is a very pretty lattice picture that comes with this, but we won't introduce it until we talk about the Weyl group.

**<u>Definition:</u>** Given a root $\alpha \in \Delta$ for some simple Lie algebra $\mathfrak{g}$ the **dual root** or **coroot** $\alpha^\vee \in \mathfrak{h}^\ast$ is given by 
$$
\alpha^\vee \coloneqq \frac{2 \alpha}{(\alpha,\alpha)}.
$$
Using this we can define the Cartan matrix which will be a very useful tool.

**<u>Definition:</u>** The **Cartan Matrix** of a simple Lie algebra with simple roots $\{a_i\}_{i=0}^{\text{dim\,}\mathfrak{h}^\ast}$ is the change of basis transformation between the roots and the dual roots. In other words it is the matrix with coefficients
$$
A_{ij} = (a_i,a_j^\vee).
$$
Let's discover some of its properties.

**<u>Proposition:</u>** The Cartan matrix is an integer matrix with diagonal elements equal to $2$ and nondiagonal elements in $\{0,-1\}$.

***Proof:***  I mean we have shown a million times why that inner product must be integers. For the diagonal we literally plug it in. For the rest, we need to use our previous lemmas. First of all by the triangle inequality
$$
A_{ij}A_{ji} < 4.
$$
We also know that $(a_i,a_j) \leq 0$. Therefore if $A_{ij} \leq -2$ then $A_{ij}A_{ji} \geq 4$. As a result, $-1 \leq A_{ij} \leq 0$.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
Now we will show even fancier ways to describe the roots.

**<u>Theorem:</u>** Let $\alpha, \beta \in \mathfrak{h}^\ast$ be roots of a simple Lie algebra. Then if $(\alpha,\beta)\neq 0$ the ratio of their lengths satisfies
$$
\frac{(\alpha,\alpha)}{(\beta,\beta)} \in \{1,2,3\},
$$
 where without loss of generality $\alpha$ is longer than $\beta$.

***Proof:*** We know that by the triangle inequality
$$
(\alpha,\beta)^2 < (\alpha,\alpha)(\beta,\beta).
$$
We can rearrange this to obtain that for some integers $k,m \in \mathbb{Z}^\ast$ (recall that the expressions must be integers from our previous lemma)
$$
\begin{align*}
k &= \frac{2|(\alpha,\beta)|}{(\alpha,\alpha)} < \frac{2 (\beta,\beta)}{|(\alpha,\beta)|}\\
m &= \frac{2|(\alpha,\beta)|}{(\beta,\beta)} < \frac{2 (\alpha,\alpha)}{|(\alpha,\beta)|}
\end{align*}
$$
Therefore we conclude that $mk<4$. 
$$
\frac{(\alpha,\alpha)}{(\beta,\beta)} = \frac{m}{k},
$$
assuming that $\alpha$ is larger than beta the only solutions are $(m,k) \in \{(1,1),(2,1),(3,1)\}$, which proves the claim.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
This is amazing! In fact this restricts the structure of the roots of the Lie algebra so much. We can do even better. We will show that for a given simple Lie algebra there can be, at most, two different length ratios.

**<u>Corollary:</u>** Given a simple Lie algebra the ratio of the lengths of any two roots can have, at most, 2 different values. 

***Proof:*** Assume that there are two roots $\alpha,\beta \in \mathfrak{h}^\ast$ with length ratio $2$ and two roots $\beta,\gamma$ with length ratio $3$. Then we have that
$$
\frac{(\alpha,\alpha)}{(\gamma,\gamma)}=\dfrac{\frac{(\alpha,\alpha)}{(\beta,\beta)}}{\frac{(\beta,\beta)}{(\gamma,\gamma)}} = \frac{2}{3},
$$
which is not a valid length ratio according to the previous theorem. 
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
This is amazing because it will lead us directly to an elegant classification of simple Lie algebras using their roots that extends far beyond Lie algebras. They are called Dynkin Diagrams but no spoilers yet. 



### An Inner Product in $\mathfrak{h}^\ast$ 

This time we have been using the Hermitian inner product in $\mathfrak{h}^\ast$ but we only said that it is "induced by the Killing form." Let's close that loophole so that I can sleep at night. 

We have derived before that in a simple Lie algebra the Killing form is nondegenerate. Therefore, as a map from Lie algebra to its dual it is a Lie algebra isomorphism.

**<u>Definition:</u>** The dual Cartan algebra $\mathfrak{h}^\ast$ of a simple Lie algebra $\mathfrak{g}$ is a complex Lie algebra. The **real subalgebra** $\mathfrak{h}^\ast_\mathbb{R}$ is a real Lie algebra such that
$$
\mathfrak{h}^\ast \cong \mathbb{C}\otimes \mathfrak{h}^\ast_\mathbb{R}.
$$
This is a bit pedantic, but a lot of our proofs were based on the fact that $(\cdot,\cdot)$ is a Euclidean inner product. However, it is not. Since the Killing form is, in general, not definite then there is no reason to expect that the induced inner product would be positive definite. However, we are in luck, because its restriction on $\mathfrak{h}^\ast_\mathbb{R}$ is! And not only that, but also we can always find an $\mathfrak{h}^\ast_\mathbb{R}$ such that our roots live there. 

**<u>Lemma:</u>** The roots of a simple Lie algebra live in $\mathfrak{h}^\ast_\mathbb{R}$.

***Proof:*** We can construct $\mathfrak{h}_\mathbb{R}^\ast$ by taking the real span of a basis for the complex vector space, and then complexifying it. But wouldn't you know it? Not only the simple roots are a basis for the complex vector space, but the rest of the roots are in its real span! So we can define $\mathfrak{h}_\mathbb{R}^\ast = \text{span}_\mathbb{R}\, \Delta$. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
Now we are ready to play a bit more and construct things even further. 

**<u>Proposition:</u>** The Killing form defines a symmetric nondegenerate definite bilinear form on $\mathfrak{h}^\ast_\mathbb{R}$ that is Lie algebra automorphism invariant.

***Proof Sketch:*** We first define the symmetric nondegenerate bilinear form  $(\cdot,\cdot):\mathfrak{h}^\ast\times \mathfrak{h}^\ast \to \mathbb{C}$ for any $\alpha,\beta \in \mathfrak{h}^\ast$ by
$$
(\alpha,\beta) = K(K^{-1}(\alpha),K^{-1}(\beta)),
$$
where $K^{-1}:\mathfrak{h}^\ast \to \mathfrak{h}$ is he inverse map between the Cartan subalgebra to its dual. As a result this is already symmetric, nondegenerate, bilinear, and Lie algebra automorphism invariant by the properties of $K$. However, we also crave definiteness. We restrict to the real subalgebra as of the Cartan algebra defined above, and multiply by $i$ if the output is a complex number. Then the new bilinear form is definite.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
Now the last thing we are missing is a normalization. And here is where the famous Coxeter numbers come in. 

**<u>Definition:</u>** Given a simple Lie algebra, any root $\theta \in \mathfrak{h}^\ast$ can be written as integer sums of the simple roots 
$$
\theta = m_i\alpha^i,
$$
 where $m_i \in \mathbb{Z}$. Then $\theta$ is the **highest root** if $\sum_{i} m_i$ is maximum. Namely we call $m_i$ **marks** and the coefficients in the dual basis (coroot basis) 
$$
m_i^\vee = \frac{(\alpha_i,\alpha_i)}{2} m_i,
$$
are called **comarks**. Then the **Coxeter number** and **dual Coxeter number** are defined by
$$
\begin{align*}
g = 1 + \sum_{i}m_i && g^\vee = 1 + \sum_{i}m_i^\vee.
\end{align*} 
$$
We will from now on normalize the Killing form like so
$$
K(X,Y) = \frac{1}{2g^\vee} \text{tr}(\text{ad}_X \circ \text{ad}_Y).
$$
This normalizes our induced inner product nicely without changing anything. 



## Reconstructing the Simple Lie Algebra from its Roots 

Now we are finally ready to show the next amazing result, which is what we have all been waiting for in order to start the classification. Let's create a basis for our Simple Lie algebra given its roots. For a simple root $\alpha \in \mathfrak{h}^\ast$ we define the following element of the Cartan subalgebra $\mathfrak{h}$
$$
h^\alpha = K^{-1}(\alpha^\vee).
$$
Then we define $e^\alpha,f^\alpha$ as the generators with roots $\pm \alpha$ respectively. These follow the corresponding commutation relations
$$
\begin{align*}
[h^{\alpha},h^{\beta}] &= 0\\
[h^\alpha,e^\beta] &= A_{\alpha\beta} e^\beta\\
[h^\alpha,f^\beta] &= -A_{\alpha\beta} e^\beta\\
[e^\alpha,f^\beta] &= \delta_{\alpha\beta} h^\beta.
\end{align*}
$$
where $A$ is the Cartan matrix. But you will say: "Wait! There must be more ladder operators!" You would be right. We obtain the remaining ones from **Serre Relations** that end up being very useful in proving stuff
$$
\begin{align*}
(ad_{e^\alpha})^{1-A_{\alpha\beta}}e^\beta = 0 && (ad_{f^\alpha})^{1-A_{\alpha\beta}}f^\beta = 0.
\end{align*}
$$

This basis is known as the **Chevalley basis**. And it is extremely helpful because it looks like ladder operators. 



## Dynkin Diagrams

Finally the next step in our classification journey. What we have shown so far is that knowing the simple roots and the Cartan Matrix we can reconstruct the simple Lie algebra. We can put all this information in diagrams that can help us quickly codify them. 

> **<u>The rule:</u>** Given the simple roots of a Lie algebra, as well as the Cartan matrix we obtain a graph by assigning a simple root to each node where nodes with the same length are the same color (we only need two types of nodes). Then we connect nodes $\alpha,\beta$ with $A_{\alpha \beta}A_{\beta\alpha}$ lines. 

That's it! From that we can obtain the algebra! For example the Dynkin diagram for $\mathfrak{su}(2)$ is a single dot.

There are four families of diagrams associated to simple Lie algebras, as well as 5 exceptional cases (lol). Here is a table

|   **Dynkin Label**    |  Matrix Group Label   |
| :-------------------: | :-------------------: |
|         $A_n$         | $\mathfrak{su}(n+1)$  |
|         $B_n$         | $\mathfrak{so}(2n+1)$ |
|         $C_n$         |  $\mathfrak{sp}(2n)$  |
|         $D_n$         |  $\mathfrak{so}(2n)$  |
| $E_6,E_7,E_8,F_4,G_2$ |          --           |



## Fundamental Weights

A fundamental weight is convenient basis for expressing the weights of a representation (as well as the roots of a simple Lie algebra) for $\mathfrak{h}^\ast$. They are defined by
$$
(\omega_\alpha, \beta^\vee) = \delta_{\alpha\beta},
$$
where $\alpha,\beta$ are simple roots. They are therefore the dual basis to the simple coroots. This identity implies something cool.

**<u>Proposition:</u>** Let $S$ be a set of simple roots, and $A$ the associated Cartan matrix. We then have that for any $\alpha \in S$
$$
\alpha = \sum_{\beta \in S} (\alpha,\beta^\vee) \omega_{\beta}.
$$
***Proof:*** Let's call the sum above $\gamma$, then we have that for any $\beta \in S$ taking the inner product gives $(\gamma,\beta^\vee) = (\alpha,\beta^\vee)$. The coroots are a basis.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
We can also express weights in this basis. We call a weight with positive integer coefficients in the fundamental Weyl chamber is called **dominant.** The fundamental Weyl chamber is the quotient of $\mathfrak{h}^\ast$ by the action of the Weyl group. 

## Highest Weight Representations

Let's study some properties of irreducible finite dimensional unitary representations of some simple Lie algebra. The idea is to talk about a construction called the highest weight which will help us classify them. Here is a proposition.

**<u>Proposition:</u>** Let $\rho:\mathfrak{g} \to \text{End\,}V$ a finite dimensional irreducible unitary representation of a simple Lie algebra $\mathfrak{g}$. Then there exists a unique vector $v \in V$ with weight $\lambda \in \mathfrak{h}^\ast$ such that $\lambda + \alpha$ is not a weight for any simple root $\alpha$. Then $\lambda$ is called the **highest weight** and $v$ the **highest weight vector**.

An additional nice theorem is the following.

**<u>Theorem:</u>** For any dominant weight $\lambda$ there exists a unique finite dimensional irreducible representation that has it as its highest weight.

### Character Detour

Knowing the highest weight vector we can obtain the rest simply by acting with lowering operators. What is more interesting is the character expressions in these representations. But let's understand what we mean by characters in group theory.

**<u>Definition:</u>** Let $G$ be a group and $\rho:G\to \text{Aut\,}V$ be a complex representation. Then the character $\chi_\rho: G\to  \mathbb{C}$ of $g \in G$ is given by 
$$
\chi_{\rho}(g) = \text{Tr\,}\rho(g).
$$
We are not dealing with groups, but algebras. However, we know that the entirety of the information of a group is contained within the Cartan subalgebra on the roots. We already know that we can exponentiate a commuting Lie algebra into a group using the standard exponential construction we introduced in the beginning. With these two elements we can extend our idea of a **character** for a simple Lie algebra, like so. Therefore we can say that the character for a Lie algebra representation is given by 
$$
\chi_{\rho} (h) = \text{Tr\,}e^{\rho(h)},
$$
but we can do better and write a more explicit formula in terms of the weights. By noticing the the eigenvalues of $e^{\rho(h)}$ are $e^{\lambda(h)}$ for all the possible weights $\lambda$. Therefore the expression simplifies to
$$
\chi_\rho(h) = \sum_{\lambda \in \Omega_\rho} \text{mult}_\rho(\lambda) e^{\lambda(h)},
$$
where $\Omega_\rho$ is the set of (distinct) weights appearing in the $\rho$ representation and $\text{mult}_{\rho}$ gives the multiplicity for each weight. This leads to a definition.

**<u>Definition:</u>** The character $\chi : \mathfrak{g}\to \mathbb{C}$ of a highest weight unitary representation of a Lie algebra with weights $\Omega$ is given by
$$
\chi \coloneqq \sum_{\lambda \in \Omega} \text{mult}(\lambda ) e^{\lambda}.
$$
**<u>Theorem:</u>** *(Weyl Character Formula)* The character for a unitary Lie algebra representation with highest weight $\lambda$, associated Weyl group $W$, and Weyl vector $\rho$, satisfies for all $\alpha \in \mathfrak{h}^\ast$ 
$$
\chi(\alpha) = \frac{D_{\lambda + \rho}(\alpha)}{D_{\rho}(\alpha)},
$$
where $D_\mu : \mathfrak{h}^\ast \to \mathbb{C}$ is given by
$$
D_{\mu}(\alpha) \coloneqq \sum_{w \in W} \epsilon(w) e^{w\mu},
$$
where $\epsilon$ is the sign of the element $w \in W$.

This is a foundational result that we will use multiple times in calculating representations.









