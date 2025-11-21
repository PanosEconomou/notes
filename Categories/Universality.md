# Universals and Representability

A mathematical object is often useful because of how it relates to objects with a similar structure and often not because of its underlying construction. Category theory allows us to explore that! The idea is that we can define objects using relations in an abstract setting, derive their properties and then see them in different settings porting our intuition and expectations from one field to an "unrelated" one. This is the idea behind Universality, so it would be fun to explore this more.

Some resources for this are

1. [Tensor Categories](https://math.mit.edu/~etingof/egnobookfinal.pdf)
2. [Categories for the working mathematician](https://math.mit.edu/~etingof/egnobookfinal.pdf)
3. [Category Theory in Context](https://math.jhu.edu/~eriehl/161/context.pdf)

[toc]

# Functor Representations

Often we can use objects to describe how functors act in a category, we call that representing a functor.

**<u>Definition:</u>** If $F:C \to \text{Set}$ is a functor from a locally small category $C$ such that for some object $c\in C$ there exists a natural isomorphism  $ u: \text{Hom}_C(c,\cdot) \implies F$ then the pair **(c,u)** is a **representation** of $F$. Any functor that admits a representation is called **representable**. We also say that a representable functor encodes a **universal property** of its representing object.

In words that hopefully make more sense, a universal property of an object is a description of the set of arrows it can have! For example, calling an object terminal or initial is a giving it a universal property. 

There is a class of example of representations of functors of the style "take structure X and map it into the set of its given substructures." For example, map a group to its underlying set, or map the Topological space to its set of open subsets, etc. The representative objects are in effect the elements that "pick out" the substructure of interest. 

**<u>Example:</u>** *(Forgetful Functor of Groups)* In the case of the forgetful functor $U:\text{Grp}\to \text{Set}$ we notice that if we had an object $c$ whose arrows "pick out" an element of a group $G$, then that collection of arrows would be isomorphic to $UG$. In this case it happens to be $\mathbb{Z}$ because every group homomorphism of $\mathbb{Z}$ is completely specified by where to map the identity element, so the forgetful functor is represented by $\mathbb{Z}$. 

**<u>Example:</u>** *(Topological Spaces to topology)* Consider the contravariant functor $\mathcal{T}:\text{Top}^{\text{op}} \to \text{Set}$ that maps each topological space into its set of open subsets, i.e. its topology. We can find out that this functor is representable by the Sierpinski space $S$, i.e. the topological space $\mathbb{Z}_2$ with the open sets $\mathcal{T}\mathbb{Z}_2 = \{\empty, \{0\}, \mathbb{Z}_2\}$. A continuous map from some topological space $X \to S$ is completely defined by the preimage of $\{0\} \subset S$, so these continuous maps define all the elements of the topology of $X$. By the way, the space $S$ also represents the contravariant functor that sends $X$ to its closed subsets too since defining the preimage of $\{1\} \subset S$ "picks out" a closed set. This means that there is a natural isomorphism between the functors that define the set of open sets, and the set of closed sets, which means that we can define the topology using either of them.

Finally it is time for the most powerful result of Category theory.

**<u>Theorem:</u>** *(Yoneda Lemma)* Let $F:C\to \text{Set}$ be a functor from a locally small category $C$. For any object $c \in C$ there is an isomorphism
$$
Fc \cong \text{Hom}(\text{Hom}_C(c,\cdot), F)
$$
that assigns a natural transformation $\alpha : \text{Hom}_C(c,\cdot) \implies F$ to the element $\alpha_c(1_c) \in Fc$ and vice versa, and this isomorphism is natural in both $c$ and $F$. 

Here by $\text{Hom}(F,G)$ is the set of natural transformations between two functors $F,G$. What this means is that if we know how the object interacts with other objects, then we can find its underlying set. This is a pretty cool and powerful result. 

With this we are ready to define universals.

**<u>Definition:</u>** A **universal property** of $c \in C$ is a representable functor $F$ together with a natural isomorphism $\alpha:\text{Hom}(C,\cdot) \cong F$. A **universal element** $x \in Fc$ is the element $\alpha_c(1_c) \in Fc$.

 

## Small Aside on Cohomology

We have been playing with functors for a while, it would be nice to play a bit with homology in the context of category theory in order to generalize some pictures. This will appear all the time when studying groups and their representations so it feels appropriate.

**<u>Definition:</u>** For $n\geq 0$  the standard **$n$-simplex** $\Delta^n$ is the convex hull of the standard basis of $\mathbb{R}^{n+1}$ the the subspace topology of $\mathbb{R}^n$. 

It's a point for $n=0$, a line segment for $n=1$, a triangle for $n=2$, and so on. They are all homeomorphic to disks. We can use standard simplices to "tile" topological spaces. Here is this in some more detail.

**<u>Definition:</u>** A **singular** $n$-**simplex** is in a topological space $X$ is a continuous map $\sigma: \Delta^n \to X$. 

The word singular is there because the embeddings of the $\Delta^n$ can have "kinks" aka singular points. What is interesting is that the free abelian group of singular $n$ simplices has a nice intuitive representation where the sum can be thought as concatenation and the inverses can be thought of as orientation reversals.

**<u>Definition:</u>** The **boundary** $\partial_n \sigma$ of a singular $n$-complex $\sigma$ is the sum (in the free abelian group of all simplices) of the simplices defined by the restriction of $\sigma$ onto the edges of $\Delta^n$. The free abelian group generated by the singular $n$-simplices in $X$ is usually denoted by $C_n(X)$ and its elements are called **singular** $n$**-chains**. 

**<u>Proposition:</u>** The boundary $\partial_n : C_n(X) \to C_{n-1}(X)$ defines a group homomorphism and $\partial_n \circ \partial_{n+1} = 0$.

**<u>Definition:</u>** Given a topological space $X$, the sequence $\cdots C_n \xrightarrow{\partial_n} C_{n-1} \cdots$ is known as a **singular chain complex**. The subgroup $Z_n(X) \coloneqq \text{ker\,} \partial_n \subset C_{n}(X)$ is known as the **singular n-cycle group** while the image $B_n(X) \coloneqq \text{im\,}\partial_{n+1} \subset C_{n}(X)$ is known as the **singular n-boundary group**, finally the $n^{\text{th}}$ **homology group** is defined as the quotient
$$
H_n(X) \coloneqq Z_n(X)/B_n(X),
$$
and the elements are called **homology classes**. 

In other words the $n^{\text{th}}$ homology group is the group of n-cycles up to boundaries. So two n-chains are the same as elements of the homology if they only differ by a boundary.  So in some sense the homology is sensitive to cycles that are not the boundary of anything, because if they were we could subtract it. That's why homology is measuring the "holes" a topological space has.

**<u>Theorem:</u>** Let $X,Y$ be homotopy equivalent topological spaces, then $H_n(X) = H_n(Y)$.

In other words homology classes are a collection of homotopy invariants. Bringing back some category theory we can define a functor $H_n : \text{Top} \to \text{Ab}$ that takes a topological space to its $n^{\text{th}}$  homotopy group. But we can do way more than that!

Consider the functor $C_n : \text{Top}\to \text{Ab}$ that takes a topological space to the corresponding abelian group of singular $n$-chains. What we can notice is that we constructed the abelian group by taking the free abelian group. But we didn't have to. 

**<u>Definition:</u>** Let $R$ be a ring (rings have units come on), then a **left** $R$**-module** is an abelian group $(M,+)$ with a scalar multiplication operation $\cdot : R\times M \to M$. A left $R$-module is **free** if it has a basis, i.e. a subset $E$ such that every element of $M$ is a finite $R$-linear combination of elements in $E$ and for every finite subset of $e \subset E$ there is a unique and trivial $R$-linear combination to obtain the identity of $M$.

Now, instead of a free group, we can build a free $R$ module using the singular simplices for any random ring $R$. So we can define $C_{n}^{R}(X)$ for the $n$**-cochains** valued in $R$. Using the identical definition we can define $H_n^R(X) \coloneqq Z_n^R(X)/B_n^R(X)$. This is pretty cool, in particular we notice that
$$
H_n(X) = H_{n}^{\mathbb{Z}}(X).
$$
So we have a similar functor into the abelian groups via $H_n^R : \text{Top} \to \text{Ab}$. However, there is another way to understand homology "with values in $R$" by looking at the dual picture

Take any $A \in \text{Ab}$, then consider the functor $\text{Hom}(\cdot, A): \text{Ab}^{\text{op}} \to \text{Ab}$, then we define the dual group $C^n(X) = \text{Hom}(C_n(X),A)$, in addition we define the dual arrow $d_{n-1}:C^{n-1} \to C^n$, which is the image of the boundary arrow $d_{n-1} = \text{Hom}(\cdot,A)\partial_n$. Then we have a different sequence
$$
\cdots \leftarrow C^{n+1} \xleftarrow{d_{n}} C^{n} \xleftarrow{d_{n-1}} C^{n-1} \leftarrow \cdots
$$
which also satisfies $d_n \circ d_{n-1} = 0$. This sequence is known as a cochain complex which then defines the cohomology groups as $H^n(X,A) \coloneqq \text{ker\,}d_n /\text{im\,}d_{n-1}$, by the way we could have done this with homology groups values in $R$ too.

**<u>Example:</u>** Now the cohomology valued in $A$ is a contravariant functor $H^n(\cdot, A) : \text{Top}^{\text{op}} \to \text{Ab}$, since homology and by extension cohomology classes are homotopy invariant, this functor factors through the quotient $\text{Top}\to \text{Htpy}$, i.e. the category of homotopy equivalent topological spaces.











