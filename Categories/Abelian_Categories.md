# Abelian Categories

To introduce tensor categories we will recall some facts about Abelian categories first. These are more important to introduce structures that will pop up all the time later, rather than some more in-depth exploration. Here is also some [introduction to category theory](../Categories/Categories.md) that contains useful terminology. Most of these notes follow [EGNO - Tensor Categories](https://math.mit.edu/~etingof/egnobookfinal.pdf).



[toc]



# Definitions

Let's start with a bunch of definitions, as it is often obligatory in category theory.

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
