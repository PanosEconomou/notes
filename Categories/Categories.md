# Category Theory

We introduce the basic constructions of Category Theory as well as some cool theorems that can help us work with them.

[toc]

Most of this discussion is based on

1. [Lane, Categories for the Working Mathematician](https://link.springer.com/book/10.1007/978-1-4757-4721-8)

# Basic Constructions

Funnily enough the object we will construct first is not a category, but rather a metagraph, zwhich we will use to define a metacategory, and finally, we will use those to define a graph and a category. The idea is that we should be able to define these concepts independently of any set theoretic constructions, but in practice we want to use set theory to be able to practically use them. The meta- objects are the abstract ones, and their set theoretic implementations lose that title.

## Metacategories

Let's start with the implementation of categorical constructions that involves no set theory.

**<u>Definition:</u>** A **metagraph** consists of *objects* $a,b,c,\cdots$ and *arrows* $f,g,h,\cdots$, as well as two *operations* called

1. **Domain:** Which assigns to each arrow an object $\text{dom\,} f = a$.
2. **Codomain:** Which assigns to each arrow an object $\text{cod\,} f =b$.



**<u>Notation:</u>** We often depict arrows between their domain and codomain like so
$$
\begin{align*}
f: a \to b && \text{or} && a\xrightarrow{f} b.
\end{align*}
$$
**<u>Definition:</u>** A **metacategory** is a metagraph that has the additional operations

1. **Identity:** Which assigns to each object $a$ an arrow $\text{Id}_a= 1_a : a\to a$
2. **Composition:** Which for any two arrows $f,g$ such that $\text{cod\,}f = \text{dom\,}g$ it assigns assigns an arrow $f\circ g$,

that satisfy the following axioms

1. **Associativity:** For 4 objects $a,b,c,d$ and 3 arrows $f,g,h$ such that
   $$
   a\xrightarrow{f} b \xrightarrow{g} c \xrightarrow{h} d
   $$
   then the following equality holds
   $$
   h\circ(g\circ f) = (h\circ g) \circ f.
   $$

2. **Unital Identity:** For arrows $f:a\to b$ and $g:b\to c$ the identity arrow $1_b$ satisfies
   $$
   \begin{align*}
   1_b \circ f = f && g\circ 1_b = g.
   \end{align*} 
   $$

**<u>Notation:</u>** We often call the arrows of a metacategory **morphisms**. 

One of the first interesting consequences of the arrows in a metacategory is that the identity arrows are unique.

**<u>Proposition:</u>** The identity arrow is unique. 

***Proof:*** Let $f,g$ be identity arrows for object $a$. Then we know that
$$
f \circ g = f =g.
$$

$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$

**<u>ofExample:</u>** *(Metacategory of Sets)* The simplest example of such a structure is the **metacategory of sets** where the objects are all sets, and tehe arrows are all functions with the usual identity functions for the identity operation and usual composition rules. 

To be more specific, a function $f$ consists of a set $X = \text{dom\,}f$, a set $Y=\text{cod\,}f$, and a rule $x \in X \mapsto fx \in Y$. The identity function for some set $X$ is $1_X : X \to X$ with the rule $x \mapsto x$, and composition of $f:X\to Y$ and $g:Y\to Z$ is defined by the corresponding rule $x \mapsto g(fx)$.

**<u>Example:</u>** *(Arrows-Only Metacategories)* Since the identity arrows are unique and there is a 1-1 and onto relationship with the objects of a metacategory, it is possible to forget about the objects all together, and keep only the arrows. To do this let’s reinterpret some of the properties of the arrows. In an **arrows-only metacategory** there exist certain ordered pairs $\langle f,g\rangle $ of arrows that are called composable, and an operation assigning to each composable pair of arrows an arrow $f\circ g$ called their composite. Therefore we can define an identity of the metacategory to be an arrow $u$ such that $f\circ u = f$ whenever $\langle f,u\rangle$ is composable and $u\circ g = g$ whenever $\langle u,g\rangle$ is composable. So now that we have identity we can convert the axioms. 



## Categories

We are now ready to leave the super abstract land of meta objects, and use set theory to play with a further implementation of metacategories. With start with metagraphs. 

**<u>Definition:</u>** A **directed graph** is a set $O$ of objects and a set $A$ of arrows with two functions
$$
\begin{align*}
A \xrightarrow{\text{dom}} O && A \xrightarrow{\text{cod}} O.
\end{align*}
$$
That’s it! We don’t need more axioms like before because they are encapsulated in the definitions of functions and sets. 

**<u>Definition:</u>** In a directed graph $(O,A)$ a **product over** $O$ is the set
$$
A\times_O A \coloneqq \{\langle f,g\rangle \mid f,g \in A \text{ such that } \text{dom\,} f = \text{cod\,}g\}
$$

we call these pairs composable. 

We are now ready to define a category.

**<u>Definition:</u>** A **category** is a directed graph $(O,A)$ with a product over $O$ and two functions
$$
\begin{align*}
\text{id}: O &\to A &  \circ : A\times_OA &\to A\\
a &\mapsto \text{id}_a = 1_a & \langle f,g\rangle &\mapsto f\circ g = fg
\end{align*}
$$
such that
$$
\begin{align*}
\text{dom}(\text{id\,} a) = a = \text{cod}(\text{id\,}a) && \text{dom}(f \circ g) = \text{dom\,}g && \text{cod}(f\circ g) = \text{cod\,} f.
\end{align*}
$$
Additionally, given two objects $a,b \in O$ we call the set of arrows from $a$ to $b$ 
$$
\text{hom}(a,b) \coloneqq \{f \in A \mid \text{dom\,}f = a \text{ and } \text{cod\,}f=b\}
$$
the **hom-set of** $a$ **and** $b$.

**<u>Notation:</u>** Usually, instead of specifying $O$, and $A$ we pick a name for the Category, say $C$ and we abuse notation saying that arrows $f$ and objects $o$ are such that $f\in C$ and $o\in C$.

 

## The Category Zoo

It is time to mention a bunch of examples! This is going to be fun. 

**<u>Example:</u>** *(Discrete Categories)* A category is **discrete** if every arrow is an identity. This may be boring, but it has the interesting consequences that there is a 1-1 and onto relationship between discrete categories and sets! So Discrete categories are sets.

**<u>Example:</u>** *(Monoids)* Perhaps one of the most fundamental type of category. A category is a **monoid** if it only has one object. Such categories are entirely determined by their sets of arrows, the identity, and composition rules. Therefore, a monoid is a set $M$ with an associative unital operation $M\times M \to M$. 

**<u>Example:</u>** *(Groups)* A **group** $G$ is a Monoid such that every arrow $f \in G$ has a two sided inverse. In other words there exists an arrow $f^{-1} \in G$ such that $f\circ f^{-1} = 1 = f^{-1}\circ f$.

**<u>Example:</u>** *(Matrices)* Given a commutative ring $R$, the set $\text{Mat}_R$ of all matrices with entries in $R$ is a category where the objects are the positive integers $\mathbb{N}^\ast$ and for any $n,m \in \mathbb{N}^\ast$ an arrow $A : n\to m$ is an $n\times m$ matrix with entries in $R$, where the composition rule is given by the matrix product.

**<u>Example:</u>** *(Ensembles)* If $C$ is any collection of sets we an **ensemble** $\text{Ens}_C$ is the category where the objects are the sets in $C$ and the arrows are all functions between them with the usual composition of functions.

**<u>Example:</u>** *(Preorders)* A category $P$ where for any objects $p,q \in P$ there exists at most a unique arrow $p\to q$ is a **preorder**. The arrows define a reflexive and transitive binary relation between the objects that we often denote as $\leq$. A preorder is a **partial order** if for any objects $p,q \in P$ such that $p\leq q$  and $q\leq p$ then $p=q$, and it is a **linear order** if either $p\leq q$ or $q\leq p$.

There is a lot more of these but let's stop here for now. If we need a particular category then we will pick one. 

**<u>Notation:</u>** One might often require the phrase *"the set of objects is any small __"*  a *small* structure often implies the existence of a larger set $U$ called the universe, and any element of it is called small. So a category where the objects are small whatever, is the category where the set of objects is U, even if that is not directly specified. This is done to avoid the self referencing paradox.

 

## Functors

Let's start getting crazy. We had arrows (or morphisms) inside a category, what if someone wants to describe an "arrow" between categories? That is a functor.

**<u>Definition:</u>** Given categories $A,B$, a **functor** $F:A\to B$ consists of two functions 

1. **Object function:** Often denoted as $F$ and it assigns to each object $a \in A$ an object $Ta \in B$.

2. **Arrow function:** Also denoted as $F$ :> which assigns to each arrow $f:a\to a'$ of $A$ an arrow $Tf:Ta\to Ta'$ of $B$ such that
   $$
   \begin{align*}
   T(1_a) = 1_{Ta} && T(f\circ g) = Tf \circ Tg,
   \end{align*}
   $$
   i.e. it commutes with the identity map and the composition map.

   

Here is a cool example

**<u>Example:</u>** *(Powerset)* The powerset of any set $P(X)$ is defined as the collection of all subsets. It is also a functor $P:\text{Set} \to \text{Set}$ where $\text{Set}$ is the category of small sets which assigns to each object $X\in \text{Set}$ its powerset $P(X)$ and to any morphism $f:X\to Y$ of $\text{Set}$ a morphism $Pf : P(X) \to P(Y)$ such that for every $S \in P(X)$ then $PfS = f(S) \in P(Y)$. 

 **<u>Example:</u>** *(Fundamental Group)* Consider the category of pointed topological spaces $\text{Top}_\ast$ where the objects are pairs of topological spaces with a chosen point, and the arrows are base point preserving continuous maps. Then for each pointed space $(X,x)$, we can construct the fundamental  group $\pi_1(X,x)$ where the elements are all homotopy classes of loops based on $x\in X$ under concatenation of loops. Then the fundamental group is a functor 
$$
\pi_1 : \text{Top}_\ast \to \text{Grp},
$$
where $\text{Grp}$ is the category of groups where the objects are all small groups and the arrows are group homomorphisms. To show that it is indeed a functor we already know the object map, but we also know that every base point preserving continuous map $f:X\to Y$ between pointed topological spaces $(X,x),(Y,y) \in \text{Top}_\ast$ can be lifted to a group homomorphism $f_\ast : \pi_1(X,x) \to \pi_1(Y,y)$ by its action on homotopy inequivalent loops. It is easy to see that such an induced homomorphism commutes with composition and identity, therefore $\pi_1$ is a functor. 
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
**<u>Example:</u>** *(Metacategory of all Categories)* For every category there is an identity functor that assigns the objects and maps to themselves. Using this we may define a metacategory where its objects are all categories (they don't have to form a set) and the arrows are all functors, with composition of functors descending to the usual composition of the object and arrow maps respectively. 

Using functors notions we can define more special objects that we are already familiar with in a less abstract context.

**<u>Definition:</u>** Let $A$ and $B$ be categories and $F:A\to B$ be a functor. 

1. If $F$ is bijective then it is an **isomorphism of categories**. 
2. If for any two objects $a,a' \in A$ and any arrow $f: Fa \to Fa' \in B$ there exists an arrow $g:a\to a' \in A$ such that $f = Fg$ the functor is called **full** (in other words the arrow map is surjective on the arrows of the image of $A$). 
3. If for any pair of objects $a,a' \in A$ and any pair of arrows $f,f' : a\to a' \in A$ then $Tf = Tf' \implies f=f'$ the functor is called **faithful**, or sometimes an **embedding**. 

We will use such characterizations of functors a lot, so it is nice to have some definitions. However we can characterize these in terms of their actions on hom-sets. 

**<u>Proposition:</u>** Let $A,B$ be categories, $F:A\to B$ be a functor between them, and $a,a' \in A$ be objects in category $A$. Then the action of the arrow map of $F$ defines a map $F_{a,a'}$ between the hom-sets
$$
\begin{align*}
F_{a,a'} : \hom(a,a') &\to \hom(Fa,Fa')\\
f&\mapsto Ff.
\end{align*}
$$




 





