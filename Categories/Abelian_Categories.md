# Abelian Categories

To introduce tensor categories we will recall some facts about Abelian categories first. These are more important to introduce structures that will pop up all the time later, rather than some more in-depth exploration. Here is also some [introduction to category theory](../Categories/Categories.md) that contains useful terminology. Most of these notes follow [EGNO - Tensor Categories](https://math.mit.edu/~etingof/egnobookfinal.pdf).



[toc]



# Definitions

Let's start with a bunch of definitions, as it is often obligatory in category theory.

## Additive Categories

**<u>Definition:</u>** An **additive category** $\mathcal{C}$ is a category such that 

1. Every hom-set is an Abelian group such that composition of arrows respect the additive structure
2. There exists a zero object $0\in\mathcal{C}$ such that $\text{Hom\,}_C(0,0) = 0$, the additive identity of the group, or in this case $\text{Id}_0$.
3. *(Existence of direct sums)* For any objects $X,Y\in \mathcal{C}$ there exists an object $X\oplus Y \in \mathcal{C}$, unique up to isomorphism, and arrows $\pi_X: X\oplus Y \to X$, $\pi_Y:X\oplus Y \to Y$, $\iota_X : X \to X\oplus Y$, $\iota_Y:Y\to X\oplus Y$ such that $\pi_X \iota_X = \text{Id}_X$ and $\pi_Y\iota_Y = \text{Id}_Y$. 

**<u>Corollary:</u>** Every additive category $\mathcal{C}$ is equipped with a functor $\oplus : \mathcal{C}\times \mathcal{C} \to \mathcal{C}$, that we defined as the **direct product**.

Also, since we will be using it a lot, from now whenever we refer to a field, we mean an **algebraically closed field**, namely a field $\mathbb{K}$ such that there exists solutions to all polynomial equations in it. For example, $\mathbb{C}$ is such a field but not $\mathbb{R}$ since $x^2 + 1 = 0$ does not have a solution in $\mathbb{R}$. By the way finite fields are not algebraically closed also. 

**<u>Definition:</u>** An additive category $\mathcal{C}$ is **$\mathbb{K}$-linear** for some field $\mathbb{K}$ iff for any two objects $X,Y \in \mathcal{C}$, $\text{Hom}_{\mathcal{C}}(X,Y)$ is a vector space over $\mathbb{K}$ and composition of arrows is $\mathbb{K}$-linear. 

In addition a functor $F:\mathcal{A} \to \mathcal{B}$ between two additive categories is **additive** iff the maps
$$
\text{Hom}_{\mathcal{A}}(X,Y) \to \text{Hom}_{\mathcal{B}}(F(X),F(Y)),\ \forall X,Y\in \mathcal{C}
$$
are group homomorphisms. The functor is called $\mathbb{K}$**-linear** if these maps are also $\mathbb{K}$**-linear**. For any additive functor $F:\mathcal{A} \to \mathcal{B}$ there exists a natural isomorphism $F(X)\oplus F(Y) \xrightarrow \sim F(X\oplus Y)$ . 



With additive stuff it makes sense to define kernels and co-kernels.

**<u>Definition:</u>** Let $\mathcal{C}$ be an additive category, and $f:X\to Y \in \mathcal{C}$ be  an arrow. Then the **kernel** of $f$ denoted by $\text{ker\,}f$ is an object $K \in \mathcal{C}$ together with an arrow $k:K\to X$ such that $fk = 0$. The **cokernel** (the categorical dual of the kernel) is an object $C\in \mathcal{C}$ together with an arrow $c:C\to Y$ such that $cf=0$.

**<u>Proposition:</u>** If the kernel exists then for any $k':K'\to K$ such that $fk' = 0$ then there exists a unique isomorphism $l:K'\to K$ such that $kl=k'$ and dually for the cokernel. 



## Abelian Categories

With that we can define an Abelian category, which is an abstraction or *categorification* of an Abelian group. 

**<u>Definition:</u>** An additive category $\mathcal{C}$ is **Abelian** iff for every arrow $\phi:X\to Y$ there exists a sequence
$$
K\xrightarrow k X\xrightarrow i I \xrightarrow j Y \xrightarrow c C
$$
with the properties:

1. $ji = \phi$
2. $(K,k) = \text{ker\,} \phi$, $(C,c) = \text{coker\,}\phi$
3. $(I,i) = \text{coker\,}k$, $(I,j) = \text{ker\,}c$.

Such a sequence is called the **canonical decomposition of** $\phi$. The object $I\in \mathcal{C}$ is called the **image** of $\phi$.

Here we can take a break to unpack such definitions because we have presented no motivating examples. The purpose of these constructions was to introduce a categorical setting where addition makes sense. 

**<u>Example:</u>** *(Finite dimensional vector spaces)* Consider the category $\text{Vec}(\mathbb{K})$ of finite dimensional vector spaces over the algebraically closed field $\mathbb{K}$, and arrows their linear maps. This is an example of an Abelian category. Let's unpack it as first an additive one, and then as an Abelian one. 

To make it an additive category we need to find an Abelian group over the Hom-sets. Consider $V,W \in \text{Vec}(\mathbb{K})$ and then $\text{Hom}_{\text{Vec}(\mathbb{K})}(V,W)$. Then for any two such arrows $f,g : V\to W$ we can define the arrow $f+g:V\to W$ via the pointwise addition in vector space $W$. This also shows closure. We need to show the existence of a zero element. The arrow $0 : V\to W$ such that $0(v) = 0 \in W$ for any $v \in V$ can serve as our additive zero. By taking inverses pointwise we have transformed the hom-sets to Abelian groups! 

Now we need to show that composition respects the group structure of all hom-sets. To do this, we proceed by considering an element $U \in \text{Vec}({\mathbb{K}})$ and composing morphisms. In particular consider $h: W\to U$ and then the composed arrow
$$
h(f+g) = hf + hg,
$$
since we can do the expansion pointwise! Therefore, we have shown that composition is respected. Now we need to find an overall zero element in the category, which can be the trivial vector space (i.e. the vector space whose only element is the additive identity). There is only one map in its hom-set, so we are good! 

Finally, what we want is a direct sum structure. The direct sum of vector spaces is such a structure because for any $V\oplus W$ there exist projections to each, and injections from each. The slightly interesting case is the direct sum with the zero object. We can see that there is an isomorphism between $W\oplus 0$ and $W$ for all $W \in \text{Vec}(\mathbb{K})$. That isomorphism is realized by the fact that the projection arrow to $W$ inverts the injection arrow of $W$. Therefore in an additive category, the $0$ object seems to be a form of additive identity for the direct sum. 

Now we can show that this category is $\mathbb{K}$-linear. We only really need to define scalar multiplication on the hom sets, which we can do pointwise. So this is done too!

Finally, to show that it is an Abelian category we can use it as a motivating example to understand the canonical decomposition. In particular given any arrow $f:V\to W$ we have that its kernel is defined as it's zero set together with its inclusion map as a vector subspace.   It is clear that this is unique up to isomorphism, however, it is less clear that the cokernel is unique up to isomorphism. 

We can think of the cokernel as the subspace of $W$ that remains "untouched" by $f$. In linear algebra language this would be the quotient of the co-domain by the image. In fact we can see how the canonical decomposition of $f$ is a restatement of this relationship in a slightly more abstract language. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
***Note:*** What we see by the defining relationship of an Abelian category the mathematical realization of something that we already knew and wanted to play with in linear algebra. It seemed that each linear map can be thought of as a map that squishes the domain into the image, and then places the image into the co-domain. What's left on the squishing is the kernel, and what's unused in the co-domain is the cokernel. In fact this is the characteristic property of Abelian categories. 

**<u>Example:</u>** A vector space is also a $\mathbb{K}$-linear Abelian category in an almost contrived way. There is only one Hom-set, and that is a vector space. The addition structure is compatible with composition because it is the composition. So it works in an almost by definition way. However, what is nice to realize is that topics we will soon talk about, such as decomposability in direct sums, are going to be obvious in the example of a categorical vector space, but will still hold on the level of the category of vector spaces too.  

Here are some more rapid fire definitions because we will use them later.

**<u>Definition:</u>** Let $\mathcal{C}$ be an Abelian category, then a **subobject** of an object $V \in \mathcal{C}$ is an object $U \in \mathcal{C}$ with a monic arrow (monomorphism)  $\iota: U\to V$ (i.e. $\text{ker\,} \iota = 0$). A **quotient object** of $V$ is an object $W \in \mathcal{C}$ with an epi arrow (epimorphism) $q:V\to W$ (i.e. $\text{coker\,}q = 0$). Finally, a subquotient object of $Y$ is a quotient object of a subobject of $Y$. 

Using this notation we can define quotient object given subobjects. In particular given a subobject $W$ of $V$ with monomorphism $f$, we define the **quotient object** $V/W$ as the cokernel of $f:W\to V$. 



# Decompositions and Sequences

Honestly with all these definitions out of the way it would be nice to introduce some basic properties. For example, we can take direct sums of categories. 

**<u>Definition:</u>** Let $\mathscr{C}$ be a family of additive categories, then **their direct sum**
$$
\mathcal {C} = \bigoplus_{C\in \mathscr{C}} C,
$$
is the additive category whose objects are direct sums from each category, i.e. 
$$
X = \bigoplus_{C \in \mathscr{C}} X_C, \ \ X_C \in C,
$$
such that all $X_C \neq 0$, with the homsets similarly defined. An Abelian category is **indecomposable** if it is not equivalent to a direct sum of two nonzero categories. 

Additionally, we have sequences!

**<u>Definition:</u>** A sequence of arrows $\{f_i\}_{i\in I}$ 
$$
\cdots X_{i-1} \xrightarrow {f_{i-1}} X_{i} \xrightarrow {f_i} X_{i+1} \cdots 
$$
in an Abelian category is called **exact** in degree $i$ if $\text{Im\,}f_{i-1} = \text{Ker\,} f_i$, and **exact** if it is exact in all degrees. Additionally an exact sequence of the form
$$
0 \to X \to Y \to Z \to 0
$$
is called a **short exact sequence**.

**<u>Proposition:</u>** In a short exact sequence, $X$ is a subobject of $Y$ and $Z \cong Y/X$ is the corresponding quotient. 

***Proof:*** The arrow $X \to Y$ is monic since its kernel is the image of the zero arrow, therefore $X$ is a subobject. The quotient $Y/X$ is the cokernel of the monic arrow of $X$, however, we know that the image of $Y\to Z$ is the kernel of the zero arrow, therefore it is also zero, which implies $Y\to Z$ is epi and $Z$ is a quotient object. To show that it is the corresponding one we use the canonical decomposition. We notice that the image of $X$ will fall to $0$ under composition in $Z$. Therefore the arrow $Z$ is the cokernel of $X\to Y$. 
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$

# Jordan Holder Theorem

There is an interesting concept of 'length' we can assign to objects in Abelian categories. This is what we end up working with when we talk about simple and semisimple objects. 

## Semisimple Objects and Filtration

**<u>Definition:</u>** A nonzero object $X \in \mathcal{C}$ of an Abelian category $\mathcal{C}$ is called **simple** iff $0$ and $X$ are its only subobjects (I mean we could call it prime hehe). An object $X \in \mathcal{C}$ is called **semisimple** if it is a direct sum of simple objects. The category $\mathcal{C}$ is called **semisimple** if every object is semisimple. 

**<u>Lemma:</u>** *(Schur's Lemma)* Let $X,Y$ be two simple objects in $\mathcal{C}$. Then any nonzero arrow $f:X\to Y$ is an isomorphism. If $X,Y$ are nor isomorphic then $\text{Hom}_{\mathcal{C}}(X,Y) = 0$ and $\text{Hom}_{\mathcal{C}}(X,X)$ is a division algebra. 

**<u>Example:</u>** 1 dimensional vector spaces are simple objects in the Abelian category of finite dimensional vector spaces. And as we know already they’re all isomorphic. In fact, by the isomorphism theorem of finite dimensional vector spaces, all elements of the $\text{Vect}(\mathbb{K})$ category are simple or semisimple.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
Let’s see how this cool property generalizes. 

**<u>Definition:</u>** Given an object $X$ in a category $\mathcal{C}$, a **filtration** of $X$ is a sequence of monomorphisms
$$
\cdots \to X_{k-1}\to X_k\to X_{k+1} \to \cdots \to X.
$$
Such an object $X$ in an additive category $\mathcal{C}$ has **finite-length** if there exists a filtration
$$
0 = X_0 \to X_1 \to \cdots \to X_{n-1} \to X_n = X,
$$
such that $X_i/X_{i-1}$ is simple for any $1\leq i \leq n$. The filtration of a finite length object is called its **Jordan-Holder Series**. We also say that a Jordan-Holder series contains an object $Y \in \mathcal{C}$ with multiplicity $m$ if it is isomorphic to $X_i/X_{i-1}$ for $m$ values of $i$. The **length** of a finite-length object is the length of its Jordan-Holder Series. 

Notice that intuitively speaking, the Jordan-Holder decomposition is some kind of generalization for the decomposition of a vector space into subspaces. For an $n$-dimensional vector space, its Jordan holder decomposition is a sequence of vector spaces of dimension $k\leq n$ increasing by 1.

**<u>Theorem:</u>** *(Jordan-Holder Theorem)* If $X$ is an object of finite length, then any filtration of $X$ can be extended to a Jordan Holder series. In addition, any two Jordan-Holder series of $X$ cantain any simple object with the same multiplicity, so they have the same length. 

In the particular case of Abelian categories, we have the following corollary.

**<u>Corollary:</u>** *(Krull-Schmidt Theorem)* Any finite length object in an additive Category admits a nontrivial decomposition into a direct sum of indecomposable subobjects. This decomposition is unique up to isomorphism. 



## Grothendieck Groups

Here is a cool fact. Since we can assign a multiplicty to simple objects in a Jordan-Holder decomposition we can extract some interesting results. 

**<u>Definition:</u>** Consider an Abelian $\mathbb{K}$-linear category $\mathcal{C}$ where objects have finite length. If $X,Y\in \mathcal{C}$ and $Y$ is simple, then we denote $[X:Y]$ the **multiplicity** of $Y$ in any Jordan Holder Series of $X$.  

With that we are ready to define the Grothendieck Group. 

**<u>Definition:</u>** Let $\mathcal{C}$ be an Abelian $\mathbb{K}$-linear category with finite length objects. Then its **Grothendieck Group**, denoted by $\text{Gr}(\mathcal{C})$, is the free Abelian group generated by the isomorphism classes of simple objects in $\mathcal{C}$. 

Before we intuitively present the motivation behind Grothendieck groups we can understand the ismorphism classes of general objects. In particular, since the group is free an abelian, and every object has a Jordan Holder decomposition we can find their “equivalence classes” in there! 

For example, consider a $k$ dimensional vector space $V$ over $\mathbb{C}$. In any of its Jordan Holder decompositions, the vector space $\mathbb{C}$ has multiplicty $k$. Therefore we can identify 
$$
[V] = k[\mathbb{C}].
$$
More general this creates an equivelence relation for any object $X$ that decomposes to the following
$$
[X] = \sum_{Y \in \mathcal{Y}} [X:X_i]Y,
$$
where $\mathcal{Y}$ is the collection of simple objects. 









