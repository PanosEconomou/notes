# Representation Theory

Some definitions to build enough structure to talk about symmetries in physics by thinking of symmetry groups like shapes that partition space and time.

\*\*Suggested Reading Order: [Geometry](Geometry.md) > [Forms](Forms.md) > [Lie Crap](Lie_Crap.md) > \*\* _You are Here_

***

## Representation Definitions

Representations are maps that take you from a Lie Group, or a Lie algebra, to a place that contains transformations of a vector space. In other words it is a way to interpret the elements of a Lie group as the actual actions that would turn adn reshape the vector space.

**Defintion:** Let $G$ be a Lie group and $V$ a vector space over the field $\mathbb{K} \in {\mathbb{R},\mathbb{C\}}$. Then a **representation** of $G$ on $V$ is a group homomorphism $\rho$ given by

$$
ho: G\to GL(V)\\ g\in G \mapsto \rho(g) \in GL(V)
$$

We denote by $GL(V)$ the **linear automorphism group** of the vector space $V$. In other words the group, under composition, of maps from $V\to V$ that are linear isomorphisms. Note that $GL(V)$ is a Lie Group. One can prove this by viewing $GL(V)$ as a matrix group and then realizing that matrix groups are isomorphic to $\mathbb{R}^{n^2}$. More to the point we can say that

$$
GL(V)\cong GL(\dim V,\mathbb{K})
$$

Where this is the general linear goup over the equivalent field.

_**Notation:**_ When the representation $\rho$ is clear from context we often write for $g \in G$ and $v\in V$

$$
ho(g)v=g\cdot v = gv
$$

**Defintion:** A representation $\rho$ is **faithful** iff it is injective.

_**Remark:**_ Notice that since a Lie Group representation $\rho$ is a homomorphism we have that for any $g,h\in G$

1. $\rho(gh) = \rho(g)\circ\rho(h)$
2. $\rho(g^{-1}) = \rho(g)^{-1}$

**Definition:** Given two representations $\rho\_V$ and $\rho\_W$ of Liw group $G$ to the vector spaces $V$ and $W$ respectively, a **morphism** $f$ is a linear map such that

$$
f:V\to W\\ f(\rho_V(g)v) = \rho_W(g)f(v),\ \forall v\in V,\ \forall g \in G
$$

in simpler notation

$$
f(gv)=gf(v)
$$

If the map is also an isomorphism of vector spaces it is called an isomorphism or an equivalence of representations for some reason.

_Now we copy paste for a Lie Algebra._ Because we also want to do this for the algebras.

**Definition:** Let $\mathfrak{g}$ be the Lie Algebra of Lie Group $G$ and $V$ some vector space over field $\mathbb{K}$. A **representation** of the Lie Algebra $\phi$ is a Lie algebra homomorphism

$$
\phi:\mathfrak{g}\to\mathfrak{gl}(V)\cong \text{End}(V)
$$

Where $\text{End}(V)$ denotes the set of linear **endomorphisms** of $V$, these are linear maps from $V\to V$. Notice that they don’t have to be invertible (i.e. isomorphisms). With the representation of the group we are mapping to the set of _Automorphisms_ $GL(V) \sub \text{End}(V)$. Notice that the automorphisms are also a subgroup under composition.

**Defintion:** A lie algebra representation $\phi$ is **faithful** iff it is injective.

_**Remark:**_ Since the representation $\phi$ is a lie algebra homomorphism we have that

$$
[\phi(X),\phi(Y)]=\phi(X)\circ\phi(Y) - \phi(Y)\circ\phi(X)
$$

**Definition:** Given two representations $\phi\_V$ and $\phi\_W$ of Lie Algebra $\mathfrak{g}$ to the vector spaces $V$ and $W$ respectively, a **morphism** $f$ is a linear map such that

$$
f:V\to W\\ f(\phi_V(X)v) = \phi_W(X)f(v),\ \forall v\in V,\ \forall X\in \mathfrak{g}
$$

in simpler notation

$$
f(Xv)=Xf(v)
$$

If the map is also an isomorphism of vector spaces it is called an isomorphism or an equivalence of Lie Algebra representations.

**Proposition:** Let $\rho:G\to GL(V)$ be a Lie Group representation then the pushforward of $\rho$ is a Lie Algebra representation $\rho\_\*:\mathfrak{g}\to \mathfrak{gl}(V) \cong \text{End}(V)$.

In particular take a look at this diagram and now we can move around it.

![image-20230205194857301](<../../../../../.gitbook/assets/image-20230205194857301 (1).png>)

This implies that for any vector field $X \in \mathfrak{g}$ we can write its representation as

$$
ho(\exp X) = e^{\rho_*X} \in GL(V)
$$

We will see that this will later correspond to moving along our symmetries with a some operator.

**Definition:** Under any representation $\rho$ of a Lie Group $G$ (or its Lie algebra) on a vector space $V$ over $\mathbb{K}$, an **invariant subspace** $W\sub V$ is a subspace of $V$ such that $G\cdot W \sub W$ ($\mathfrak{g} \cdot W \sub W$).

**Definition:** A representation $\rho$ of a Lie Group $G$ (or its Lie algebra) on a vector space $V$ over $\mathbb{K}$ is **irreducible** iff threre is no proper invariant subspace $W \sub V$. Otherwise it is **reducible**

This is **really important.** In particle physics we define a particle as an irreducible representation of the symmetry group of the theory. Later we will define another way of finding irreducible representations, but for now this should be ok. What it says is that you can take a vector in V where there is some element in $G$ that can map it out of whatever subspace you choose.

## Representation Flavours

A quick list of ways to describe representations using your favourite set and space operations.

**Definition:** Let $V,W$ be vector spaces with representations

$$
ho_V: G\to GL(V)\\ \rho_W: G\to GL(W)
$$

of some Lie group $G$. Then we can define the follwoing representations of $G$ $\forall g,h \in G,\ \forall v \in V,\ \forall w \in W$.

1.  Direct Sum: $\rho\_{V \oplus W}$ on $V\oplus W$ given by

    $$
    g(v,w)=(gv,gw)
    $$
2.  Tensor Product: $\rho\_{V\otimes W}$ on $V\otimes W$ Given by

    $$
    g(v\otimes w)= (gv)\otimes (gw)
    $$
3.  Dual: $\rho\_{V^\and}$ on $V^\and$ given by

    $$
    (gu)(v)=u(g^{-1}v)\, \forall u\in V^\and
    $$
4.  Exterior Power: $\rho\_{\bigwedge^kV}$ on $\bigwedge^kV$ given by

    $$
    g(v_1\wedge v_2\wedge \cdots \wedge v_n)=gv_1\wedge gv_2\wedge \cdots \wedge gv_n
    $$
5.
6.  Complex Conjugate: $\rho\_{V^_}$ on $V^_$ given by

    $$
    ho_{V^*}(g) = (\rho_V(g)v)^*
    $$
7.  Homomorphism Space: $\rho\_{\text{Hom}(V,W)}$ on $\text{Hom}(V,W)$ given by

    $$
    (gf)(v) = gf(g^{-1}v),\ \forall f\in \text{Hom}(V,W)
    $$
8.  Outer Product: $\rho\_V \otimes \tau\_W$ on $V\otimes W$ for some reprentation $\tau\_{W}$ of Lie Group $H$ given $\forall h \in G$ by

    $$
    (g,h)(v\otimes w)=gv\otimes gw
    $$

You can define the same representations for ones that are from Lie Algebras, but I am not going to write them down. In any case, they all act as one would expect, so we just want to use them as tools.

## Representing in Inner Product spaces

A vector space $V$ over $\mathbb{K}$ with an inner product $\lang\cdot,\cdot\rang:V\times V \to \mathbb{K}$ is a very useful tool in physics as such spaces can help us extract scalar quantities, such as angles or distances, out of the vector space.

**Definition:** An inner product $\lang\cdot,\cdot\rang:V\times V \to \mathbb{K}$ over $V$ can be of many categories, two of which are:

1. Euclidean: Bilinear, symmetric, and positive definite.
2. Hermitian: Complex linear in the second argument while complex antilinear on the first, conjucate symmetric, and postive definite.

The second is the notion of distance that lets us construct unitary operators in the Hilbert spaces encountered in Quantum Mechanics.

**Definition:** A representation $\rho:G\to GL(V)$ of a Lie group $G$ to a vector space $V$ with a Euclidean (Hermitian) inner product is called **orthogonal** (**unitary**) iff

$$
\lang gv,gw\rang = \lang \rho(g)v,\rho(g)w\rang = \lang v,w\rang
$$

for all $g \in G$ and $v,w \in V$. This means that the image of $\rho$ stays within the orthogonal subgroup $O(V) < GL(V)$ (unitary subgroup $U(V) < GL(V)$) as determined by the inner product $\lang\cdot,\cdot\rang$. This inner product is called G-invariant.

Similarly we copy paste for representations of Lie algebras

**Definition:** A representation $\phi:\mathfrak{g}\to \text{End}(V)$ of a the Lie algebra of $G$ to a vector space $V$ with a Euclidean (Hermitian) inner product is called **skew-symmetric** (**skew-hermitian**) iff

$$
\lang Xv,w\rang +\lang v,Xw\rang = \lang \phi(X)v,w\rang +\lang v,\phi(X)w\rang = 0
$$

for all $g \in G$ and $v,w \in V$. This means that the image of $\rho$ stays within the orthogonal lie subalgebra $\mathfrak{o}(V) < \mathfrak{gl}(V)$ (unitary Lie subalgebra $\mathfrak{u}(V) < \mathfrak{gl}(V)$) as determined by the inner product $\lang\cdot,\cdot\rang$.

And as one might expect, we state this with proof as an exercise.

_**Proposition:**_ Let $\rho:G\to GL(V)$ be a representation of Lie group $G$ and $\lang\cdot,\cdot\rang$ a $G$-invariant Euclidean (Hermitian) inner product on $V$, i.e. $\rho$ is orthogonal (unitary) on $V$. Then the induced Lie algebra representation $\rho\_\*$ is skew-symmetric (skew-hermitian).

Now for some physics terms (finally).

**Definition:** Let $\phi:\mathfrak{g}\to \text{End}(V)$ be a skew-hermitian (we also sometimes refer to it as unitary for some reason making the definitions aobove infinitely more confusing) representation of a real Lie algebra $\mathfrak{g}$ on some complex vector space $V$. Then $\forall X\in \mathfrak{g}$ $\phi(X)$ is a skew hermitian endomorphism, implying that $i\phi(X)$ is a hermitian endomorphism (notice that this endomorphism is actually invertible since $\phi$ is skew hermitian). We call the eigenvalues of $-i\phi(X)$ the **charges** of $X$ in the representation $\phi$.

The negative sign is obviously a convention originating form the fact that positive charge is positive.

**Definition:** A

## Decomposition of Representations

Wwe have finally heard the word charge! We will apply this to the context of physics in the future, but for now we need to describe particles. As a result, we need to have a mechanism of describing irriducible representations.

**Theorem:** Given a representation $\rho:G\to GL(V)$ of a compact Lie group G to a vector space $V$ over the field $\mathbb{K}$ with a $G$-invariant inner product $\lang \cdot, \cdot\rang$, $\rho$ can be decomposed to the following direct sum representation

$$
ho_V = \rho_{V_1} \oplus \rho_{V_2} \oplus \cdots \oplus \rho_{V_k}
$$

where $\rho\_{V\_i}$ is an the restriction of representation of $G$ on the subspace $V\_i$ of $V$. We also have that

$$
V = V_1 \oplus V_2\oplus \cdots \oplus V_k.
$$

**Proof:** If $\rho$ is reducible $\exists W \sub V$ such that $G\cdot W\sub W$. Consider the orthogonal complement $W^\perp \coloneqq{v\in V |\lang v,u\rang = 0, \forall u\in W}$ (which is also a subgroup with the property that $V = W\oplus W^\perp$) . We will show that $G\cdot W^\perp \sub W^\perp$.

Let $g\in G$ and $w \in W^\perp$ such that $gw \in W$. We know that $\exists v = gu\in W$ for some $u\in W$. Then we have that

$$
\lang gv,gw \rang = \lang v, w \rang = 0
$$

since $w \in W^\perp$. Since $W \cap W^\perp = \empty$ we have a contradiction.

As a result, it is possible to write the representation as

$$
ho = \rho_W \otimes \rho_{W^\perp}
$$

where $\rho\_W$ is irreducible, and $V = W \otimes W^\perp$. Therefore, we can repeat this process until we have reached the direct product of irriducible representations. $\Box$

## Adjoints (ew but important)

In groups we have multiple fundamental operations. Multiplying from the left, multiplying from the right, and conjugation which is given by the following map

$$
c_g:G\to G\\ x \mapsto gxg^{-1}
$$

Even though it looks stupid, there is some merit to this map as it creates an automorphism of the lie algebra by taking its pushforward $c\_{g\*}$.

So this map will take a vector at some tangent space $T\_xG$ and it will give you a vector on the same tangent space! so it can also do this for the Lie algebras (the tangent space at the identity).

**Theorem:** The map

$$
\text{Ad}:G\to GL(\mathfrak{g})\\ g\mapsto\text{Ad}(g) = \text{Ad}_g=c_{g*}
$$

is a Lie group homomorphism, i.e. a representation of the Lie group $G$ on the vector space $\mathfrak{g}$ called the **adjoint representation** or **adjoint action of the Lie Group** G.

The proof is just calculation from the axioms of a representation.

The reason why we calll this the adjoint representation is because it has the properites that one would expect when reversing the composition. Basically:

**Proposition:** Given a Lie group representation $\rho$ on a vector space $V$ and some $g\in G$ we have that

$$
ho(g)\circ \rho_*(X) = \rho_*(\text{Ad}_gX)\circ\rho(g),\ \forall X \in \mathfrak{g}
$$

**Theorem:** The map

$$
\text{ad}:\mathfrak{g}\to \text{End}(\mathfrak{g})\\ ad = Ad_*
$$

is a Lie algebra homomorphism, i.e. a repersentation of the Lie Algebra $\mathfrak{g}$ on itself as a vector space. This is called the **Adjoint representation of the Lie algebra** $\mathfrak{g}$.

**Corollary:** For any Lie algebra $\mathfrak{g}$ the adjoint of the Lie algebra $\text{ad}$ is given by

$$
ad:\mathfrak{g} \to \text{End}(\mathfrak{g})\\ \text{ad}_X Y = [X,Y]
$$

This leads us to talk about metrics on Lie groups that are invariant under certain representations.

**Definition:** Let $s$ be a metric on the Lie Group $G$. Then it is called:

1. Left Invariant: if $L\_g^\* s = s, \forall g \in G$
2. Right Invariant: if $R\_g^\* s = s, \forall g \in G$
3. Bivariant: if it is both left and right invariant. : )

_**Note:**_ Given any metric $s$ on $G$ we can always define an inner product on $\mathfrak{g}$ using the metric like so

$$
\lang \cdot,\cdot \rang : \mathfrak{g}\times \mathfrak{g}\to \mathbb{K}\\ \lang X,Y\rang = s(X,Y)
$$

We could make thi matric left invariant by taking the left translation map, or right invariant by using the right translation map. However, in general, to get a bivariant metric $G$ hsd to be abelian.

**Theorem:** Let $s$ be a left invariant metric on Lie group $G$. Then $s$ is bi-invariant iff the inner product on $\mathfrak{g}$ defined by the metric $s$ is $\text{Ad}$-invariant, i.e.

$$
\lang \text{Ad}_g X, \text{Ad}_g Y \rang = \lang X,Y\rang,\ \forall g \in G \text{ and } \forall X,Y \in \mathfrak{g}
$$

**Theorem:** Let $G$ be a compact Lie group. Then there exists aEuclidean scalar product on the Lie algebra $\mathfrak{g}$ which is $\text{Ad}$-invariant. The adjoint representation is orthogonal with respect to this scalar product.

_**Corollary:**_ Every compact Lie group can have a bi-invariant Riemannian metric.

## The Killing Form

Not all $\text{Ad}$-invariant inner products are created equal. There is a special one that we use all the time to characterize symmetries. We call that the Killing form.

**Theorem:** Let $\mathfrak{g}$ be a Lie Algebra over the field $\mathbb{K}$. The **Killing form** $B$ on $\mathfrak{g}$ is defined by

$$
B_g:\mathfrak{g}\times \mathfrak{g}\to \mathbb{K}\\ (X,Y) \mapsto tr(\text{ad}_X \circ \text{ad}_Y).
$$

This is a bilinear, symmetric form on $\mathfrak{g}$.

**Proof:** Consider $Z \in \mathfrak{g}$, then

$$
\text{ad}_X\circ \text{ad}_Y(Z)=[X,[Y,Z]]
$$

This shows that the killing form is bilinear. To show that it is symmetric we have to prove some properties of the trance.

For an arbitrary linear endomorphism $f \in \text{End}(\mathfrak{g})$ and a basis $v\_i$ for $\mathfrak{g}$ we have that

$$
f(v_j)=f^i_j v_i
$$

and that

$$
\text{tr}(f) = f^i_i
$$

Now consider a linear isomorphism $\phi \in \text{End}(\mathfrak{g})$ we can change the basis of $\mathfrak{g}$ simply by performing $\phi \circ f \circ \phi^{-1}$. We can show that the trace is invariant to this as:

$$
\begin{align*} \text{tr}(\phi \circ f \circ \phi^{-1}) &= (\phi \circ f)^i_j (\phi^{-1})^j_i\\ &= (\phi^{-1})^i_j (\phi \circ f)^j_i\\ &= \text{tr}(\phi \circ \phi^{-1} \circ f)\\ &= \tr(f) \end{align*}
$$

Therfore, we know that the trace is symmetric.

_**Note:**_ The Killing form for Complex Lie Algebras is not Hermitian.

**Theorem:** Let $\sigma:\mathfrak{g}\to \mathfrak{g}$ be a Lie algebra automorphism of $\mathfrak{g}$. Then the Killing form $B$ satisfies the following

$$
B(\sigma X, \sigma Y) = B(X,Y)
$$

A nice application of this theorem is the fact that the Killing form is invariant under the Lie algebra automorphism $\text{Ad}\_g\ \forall g\in G$.

_**Corollary:**_ The killing form $B$ defines a bi-invariant symmetric form on any Lie group $G$.
