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



# Abelian Categories

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

Finally, to show that it is an Abelian category we can use it as a motivating example to understand the canonical decomposition. 

