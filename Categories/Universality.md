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

**<u>Example:</u>** *(Topological Spaces to topology)* Consider the contravariant functor $\mathcal{T}:\text{Top}^{\text{op}} \to \text{Set}$ that maps each topological space into its set of open subsets, i.e. its topology. We can find out that this functor is representable by the Sierpinski space $S$, i.e. the topological space $\mathbb{Z}_2$ with the open sets $\mathcal{T}\mathbb{Z}_2 = \{\empty, \{0\}, \mathbb{Z}_2\}$. A continuous map from some topological space $X \to S$ is completely defined by the preimage of $\{0\} \subset S$, so these continuous maps define all the elements of the topology of $X$.

