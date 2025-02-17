# Fusion 

A generalization of the product structure in rings is called *fusion*. It finds useful applications in physics in generalizing symmetries to non-invertible stuff. Here we will explore fusion rings and their categorification, fusion categories, following [Mac Lane](https://link.springer.com/book/10.1007/978-1-4757-4721-8) and [EGNO](https://math.mit.edu/~etingof/egnobookfinal.pdf).

[toc]



# Fusion Rings

Before we categorify this concept, let's first introduce what a fusion ring is. Here are some useful concepts.

## Modules

Modules are generalizations of vector spaces. Namely, we can define them over rings like so.

**<u>Definition:</u>** Given a ring $A$ with unit $1 \in A$, a **left** **$A$-module** is an Abelian group $(M,+)$ together with an operation $\cdot : R\times M \to M$ such that for any $p,q \in R$ and $x,y \in M$ the following are true:

1. **Distributivity:** $p\cdot (x+y) = p\cdot x + p\cdot y$
2. **Ring Additive Distributivity:** $(p+q)\cdot x = p\cdot x + q\cdot x$
3. **Multiplicative Associativity:** $(p\cdot q)\cdot x = p\cdot (q\cdot x)$
4. **Unitarity:** $1 \cdot x = x$.

Similarly one can define a **right** **$A$-module** by flipping the direction of the multiplication map. 

Here are some examples. 

**<u>Examples:</u>** *(Module Zoo)* Let $K$ be a field.

1. $K$-modules are $K$-vector spaces
2. If $K[x]$ is the $K$ polynomial ring, then a $K[x]$-module is a $K$-vector space $M$ with a linear map $M\to M$ given by the map $x:M\to M$.
3. A group is Abelian iff it is a $\mathbb{Z}$-module. In particular, the map $n\cdot x = \underbrace{x+x+\cdots +x}_{n\text{ times}}$ defines a multiplication for the module. Notice that this module does not admit a basis. 

A further refinement of the concept of a module is a *free module*. Since not all of them have a basis, we give a special names to those who do.

**<u>Definition:</u>** An $A$-module $M$ is **free** if there exists a set $B\subset M$ such that it is 

1. **Generating:** Namely, every element of $M$ is a finite sum of elements in $B$ multiplied by coefficients in $A$.

2. **Linearly Independent:** For every finite subset $C\subset B$ if 
   $$
   \sum_{c \in C} r_c c = 0,
   $$
   where $r_c = A$, then $r_c = 0\ \forall c \in C$.

Then such a subset is called a **basis**. Additionally if the cardinality of all possible bases is the same, then it is called the **rank** of the module.

Here are some cool properties.

**<u>Proposition:</u>** The following statements are true

1. Direct sums of free modules are free, while infinite Cartesian products are not free in general.
2.  Given a ring $A$, it is a free module of rank $1$ over itself.
3. For a commutative ring $A$, the polynomial ring $A[x]$ is a free module with basis $1,x,x^2,\cdots$.



## $\mathbb{Z}_+$-Rings 

The next tool that we really need to understand fusion rings is $\mathbb{Z}_+$-rings.

**<u>Definition:</u>** A **semiring** is a set $A$ with two binary operations $+,\cdot : A \times A \to A$ such that $(A,+)$ is a commutative monoid with identity $0$, and $(R,\cdot)$ is a monoid with identity $1$ such that $0\cdot a= a\cdot 0 = 0$ for any $a\in A$, and multiplication is left and right distributive over addition. 

In non-pretentious speak, a semiring is almost a ring but without additive inverses. If instead $(R,+)$ was a commutative group then it would be a ring. Why is this useful? Because $\mathbb{Z}_+$, i.e. the set of non-negative integers, is a semiring. 

Now we are ready to define $\mathbb{Z}_+$-rings. 

**<u>Definition:</u>** Let $A$ be a ring which is also a free $\mathbb{Z}$-module. Then a **$\mathbb{Z}_+$-basis** of $A$ is a basis $B=\{b_i\}_{i\in I} \subset A$ for some index set $I$ such that
$$
b_ib_j = \sum_{i\in I} N^k_{ij} b_k,
$$
where $N_{ij}^k \in \mathbb{Z}_+$. A ring with a $\mathbb{Z}_+$-basis and an identity $1$ which is a nonnegative linear combination of the basis elements is a **$\mathbb{Z}_+$-ring**. A $\mathbb{Z}_+$-ring is **unital** if $1$ is in the basis. 

**<u>Proposition:</u>** A $\mathbb{Z}_+$-ring $A$ with a basis $B$ admits an involution $\bar \cdot : B\to B$ such that if $b \in B$ is in the decomposition of the identity of $A$ then $\bar b = b$ and the involution can be extended to an anti-involution on $A$ (i.e. $\overline {ab} = \bar b \bar a$) like so
$$
a = a^i b_i \implies \bar a = a^i \bar b_i.
$$
Such a ring is called a **based ring**.

Holding our breath we will define fusion rings and then play with examples.

**<u>Definition:</u>** A **fusion ring** is a unitary based ring of finite rank, (i.e. a unitary $\mathbb{Z}_+$-ring with a chosen involution in its basis). Also a **multi-fusion ring** is simply a based sing of finite rank, (i.e. a fusion ring where the identity is not part of the basis).

## Examples

Let's now dive in to examples of such rings. One of the most useful examples is the ring of representations of groups. 

**<u>Example:</u>** *(Complex Representation Ring)* Let $G$ be a group. Then the set of complex representations $R_G$ with elements $\rho : G \to \text{Aut\,} \mathbb{C}^k$ for $k\in \mathbb{N}$ is a semiring under direct sums and tensor products of representations. We can symbolically extend the direct sum to include additive inverses to form a ring known as a Grothendiek ring. That thing, together with the basis formed by irreducible representations and the involution of taking the dual representation forms a based ring. If $G$ is finite, then $R_G$ has finite rank as a $\mathbb{Z}$-module. Therefore in this case $R_G$ is a fusion ring.

We can study such groups more by introducing characters.

**<u>Definition:</u>** Let $G$ be an abelian group and $\rho:G\to \mathbb{C}^k$ a complex representation of $G$. Then a **character** of that representation is a map $\chi : G\to \mathbb{C}$ such that 
$$
\chi(g) = \text{Tr\,} \rho (g).
$$
A character is called **irreducible** or **simple** if $\rho$ is an irreducible representation. Additionally, the **degree** of the character is the dimension of the representation.

Here is an interesting consequence and why it is nice to study characters.

**<u>Proposition:</u>**  A character $\chi$ is invariant under conjugation. In other words, for any $g,h\in G$
$$
\chi(hgh^{-1}) = \chi (g).
$$
We will use this property so much when describing representations. 

**<u>Example:</u>** *(Clebsch Gordan Decomposition)* Let $G$ be a compact lie group. Then the ring of complex representations $R_G$ is a unital based ring. If $G$ is finite, then it is a fusion ring. In particular for $G=SU(2)$ and as a basis the irreducible representations we have that
$$
V_{i}V_{j} = \bigoplus_{l=0}^{\text{min}(i,j)} V_{i+j-2l}.
$$
This formula is called the Clebsch Gordan rule. 



**<u>Example</u>** *(Ising Fusion Ring)* The Ising fusion ring is given by a basis with three elements $1,\sigma, \eta$ such that
$$
\begin{align*}
\sigma^2 = 1 && \sigma\eta = \eta \sigma = \eta && \eta ^2 = 1 + \sigma.
\end{align*} 
$$
It arises when studying the defects or the operator algebra of the 2D Ising CFT.













