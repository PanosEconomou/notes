# Tube Algebras

The problem of classifying the operator content of a QFT is hard. A particularly useful construction that appears in the context of a TQFT and a 2D CFT is a tube algebra. We will motivate and run through the construction, as well as give some intuitive results for how it should behave and what we can do with it. 

These notes include stuff from:

1. [Generalized Tube Algebras](https://arxiv.org/pdf/2409.02159)
2. [Asymptotic Density of States in 2D CFTs with non-invertible symmetries](https://arxiv.org/pdf/2208.05495)
3. [Categories for the working mathematician](https://math.mit.edu/~etingof/egnobookfinal.pdf)
4. [Category Theory in Context](https://math.jhu.edu/~eriehl/161/context.pdf)

[toc]

# Preliminaries

The operators we are studying, unless we do something super fringe and weird, will most generally act on a Banach space, which is a normed vector space that is complete under the topology induced by the norm. In layman's terms it is a vector space that if I follow a sequence of vectors that approach something, that something is inside the space. In layman's$^2$ terms it is a vector space without any "gaps." 

This is the setting of QFT, that Banach space is some form of the Hilbert space of our theory. We want to study operators on it. Operators combine together with certain properties to form *Algebras.* Here is a general one that we can get our bearings around.

**<u>Definition:</u>** A **Banach algebra** is an associative algebra over an algebraically closed field which is also a Banach space. If a Banach algebra $A$ is over the complex numbers and it has a linear involution $\ast: A \to A$ such that for any $x,y \in A$ as well as $\lambda \in \mathbb{C}$ 

1. $(xy)^\ast = y^\ast x^{\ast}$
2. $(\lambda x)^{\ast} = \bar \lambda x^{\ast}$
3. $||xx^{\ast}|| = ||x|| || x^{\ast}||$

 then it is called a $C^{\ast}$**-algebra**. Finally, a bounded linear homomorphism $f:A \to B$ between such algebras is called a **\*-homomorphism** if $f(x^{\ast}) = f(x)^{\ast}$.

Intuitively, a $C^{\ast}$-algebra has an "adjoint" operation that respects the norm. But more importantly for us, this leads to the remarkable result, that in such an algebra we can extract the norm from the algebraic structure like so.

**<u>Lemma:</u>** Let $A$ be a $C^{\ast}$-algebra. Then for any $x \in A$ we have that
$$
||x||^2 = ||x^{\ast}x|| = \text{sup} \{ |\lambda| \mid (x^{\ast}x - \lambda) \text{ is not invertible}\}.
$$
This is a pretty cool structure. It shouldn't be surprising that we are looking for such algebras when trying to classify the operator content of a quantum field theory. (btw. historically the $C$ stands for closed)

Turns out that given a Hilbert space, the bounded linear operators contain many such $C^\ast$-algebras as subalgebras. So it would be nice to learn to pick them apart. 

In [modular tensor categories](../Categories/Modular_Tensor_Categories.md) we explored algebras and co-algebras from a categorical point of view, so it would be nice to do identify a particularly useful structure that makes an algebra really ripe for describing quantum systems. This property is called Hopf. An algebra is Hopf when it is basically an algebra and a coalgebra with some extra niceness sprinkled on top.

**<u>Definition:</u>** Let $A$ be an algebra object with multiplication $\nabla:A\otimes A \to A$ and unit $\eta:1\to A$ and also a coalgebra with comultiplication $\Delta: A\to A\otimes A$ and counit $\epsilon: A\to 1$ such that the following diagram commutes
$$
\xymatrix{
A\otimes A \ar[r]^{\nabla} & A \ar[r]^{\Delta} & A\otimes A\\
A\otimes A\otimes A\otimes A \ar[u]^{\Delta\otimes \Delta}\ar[rr]^{\text{Id}_A\otimes \sigma \otimes \text{Id}_A} & & A\otimes A\otimes A\otimes A \ar[u]_{\nabla \otimes \nabla}
}
$$
  where $\sigma:A\otimes A \to A\otimes A$ is the "exchange" map $x\otimes y \mapsto y\otimes x$ and
$$
\begin{align*}
(\Delta \otimes \text{Id}_A) \circ \Delta = (\text{Id}_A \otimes \Delta) \circ \Delta && (\epsilon \otimes \text{Id}_A) \circ \Delta = \text{Id}_A = (\text{Id}_A \otimes \epsilon) \circ \Delta\\
(\nabla \otimes \text{Id}_A) \circ \nabla = (\text{Id}_A \otimes \nabla) \circ \nabla && (\eta \otimes \text{Id}_A) \circ \nabla = \text{Id}_A = (\text{Id}_A \otimes \eta) \circ \nabla
\end{align*}
$$
which are known as coassociativity and associativity, and
$$
\begin{align*}
\epsilon \circ \eta = \text{Id}_1
\end{align*}
$$
with a final **antipode map** $S:A\to A$ such that the following diagram commutes
$$
\xymatrix{
& A\otimes A\ar[rr]^{S\otimes \text{Id}_A} & & A\otimes A\ar[dr]^{\nabla} &\\
A\ar[ur]^{\Delta} \ar[rr]^{\epsilon} \ar[dr]_{\Delta} & & 1\ar[rr]^{\eta} & & A\\
& A\otimes A \ar[rr]_{\text{Id}_A \otimes S} & & A\otimes A \ar[ur]^{\nabla}&
}
$$
While this is long and esoteric, we don't have to panic. All the diagrams except the last define a **bialgebra** which is an algebra which is simultaneously a coalgebra. These diagrams express the natural compatibility conditions that they should follow. The last diagram introduces the antipode. Intuitively $S$ is a generalization of the inverse which is why we can use the product coproduct thing to obtain something close to the identity for all elements. 

With all this mess out of the way, let's reintroduce it in the context of physics.



# Tube Algebra Definitions

The main definition of a tube algebra is done with just a fusion category. 

**<u>Proposition:</u>** Let $C$ be some fusion category. Then the vector space
$$
\text{Tube}(C) \coloneqq \bigoplus_{a,b,c \in \text{Irr}(C)} \text{Hom}_C(a\otimes c, c\otimes b),
$$
has an algebra structure with multiplication defined for $f \in \text{Hom}_C(x\otimes a,a\otimes y)$, $g\in \text{Hom}_C(z\otimes b, b\otimes t)$ by
$$
f\cdot g \coloneqq \delta_{yz} \sum_{r \in \text{Irr}(C)} \sum_{s \in \text{Hom}(a\otimes b, r)} (s \otimes \text{Id}_t) \circ (\text{Id}_a \otimes g)\circ (f\otimes \text{Id}_b)\circ (\text{Id}_x \otimes s^\ast).
$$
A good exercise is to draw the picture that corresponds to this construction. The name tube becomes apparent once we realize that the sum over the irreducible defects can be thought of as putting part of the defect configuration over the compact direction on a tube.







