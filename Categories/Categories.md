# Category Theory

We introduce the basic constructions of Category Theory as well as some cool theorems that can help us work with them.

[toc]

Most of this discussion is based on

1. [Lane, Categories for the Working Mathematician](https://link.springer.com/book/10.1007/978-1-4757-4721-8)
1. [nlab](https://ncatlab.org/nlab/show/HomePage)

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
   
3. 

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

**<u>Example:</u>** *(Metacategory of Sets)* The simplest example of such a structure is the **metacategory of sets** where the objects are all sets, and the arrows are all functions with the usual identity functions for the identity operation and usual composition rules. 

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

if we call these pairs composable. 

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

One more notion that is useful to define is a subcategory.

**<u>Definition:</u>** Given a category $A$, a **subcategory** $S$ of $A$ is a category where the sets of objects and arrows is a subsets of the objects and arrows of $A$ such that for every arrow of $S$ its domain and codomain are in $S$, the identity arrow of every object in $S$ is also in $S$, as well as the composite of every two composable arrows. These last characterizations are equivalent to $S$ being a category by itself, so they aren't strictly needed in this definition.  

 

## The Category Zoo

It is time to mention a bunch of examples! This is going to be fun. 

**<u>Example:</u>** *(Discrete Categories)* A category is **discrete** if every arrow is an identity. This may be boring, but it has the interesting consequences that there is a 1-1 and onto relationship between discrete categories and sets! So Discrete categories are sets.

**<u>Example:</u>** *(Monoids)* Perhaps one of the most fundamental type of category. A category is a **monoid** if it only has one object. Such categories are entirely determined by their sets of arrows, the identity, and composition rules. Therefore, a monoid is a set $M$ with an associative unital operation $M\times M \to M$. 

**<u>Example:</u>** *(Groups)* A **group** $G$ is a Monoid such that every arrow $f \in G$ has a two sided inverse. In other words there exists an arrow $f^{-1} \in G$ such that $f\circ f^{-1} = 1 = f^{-1}\circ f$.

**<u>Example:</u>** *(Matrices)* Given a commutative ring $R$, the set $\text{Mat}_R$ of all matrices with entries in $R$ is a category where the objects are the positive integers $\mathbb{N}^\ast$ and for any $n,m \in \mathbb{N}^\ast$ an arrow $A : n\to m$ is an $n\times m$ matrix with entries in $R$, where the composition rule is given by the matrix product.

**<u>Example:</u>** *(Ensembles)* If $C$ is any collection of sets we an **ensemble** $\text{Ens}_C$ is the category where the objects are the sets in $C$ and the arrows are all functions between them with the usual composition of functions.

**<u>Example:</u>** *(Preorders)* A category $P$ where for any objects $p,q \in P$ there exists at most a unique arrow $p\to q$ is a **preorder**. The arrows define a reflexive and transitive binary relation between the objects that we often denote as $\leq$. A preorder is a **partial order** if for any objects $p,q \in P$ such that $p\leq q$  and $q\leq p$ then $p=q$, and it is a **linear order** if either $p\leq q$ or $q\leq p$.

**<u>Example:</u>** *(Abelian Categories)* A category $A$ is an **Ab-category** or **preaditive** category if every hom set is an additive abelian group, for which the composition map is bilinear. We are going to explore Abelian categories in a lot more detail later.   

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

 **<u>Example:</u>** *(Fundamental Group)* Consider the category of pointed topological spThese These aces $\text{Top}_\ast$ where the objects are pairs of topological spaces with a chosen point, and the arrows are base point preserving continuous maps. Then for each pointed space $(X,x)$, we can construct the fundamental  group $\pi_1(X,x)$ where the elements are all homotopy classes of loops based on $x\in X$ under concatenation of loops. Then the fundamental group is a functor 
$$
\pi_1 : \text{Top}_\ast \to \text{Grp},
$$
where $\text{Grp}$ is the category of groups where the objects are all small groups and the arrows are group homomorphisms. To show that it is indeed a functor we already know the object map, but we also know that every base point preserving continuous map $f:X\to Y$ between pointed topological spaces $(X,x),(Y,y) \in \text{Top}_\ast$ can be lifted to a group homomorphism $f_\ast : \pi_1(X,x) \to \pi_1(Y,y)$ by its action on homotopy inequivalent loops. It is easy to see that such an induced homomorphism commutes with composition and identity, therefore $\pi_1$ is a functor. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
**<u>Example:</u>** *(Metacategory of all Categories)* For every category there is an identity functor that assigns the objects and maps to themselves. Using this we may define a metacategory where its objects are all categories (they don't have to form a set) and the arrows are all functors, with composition of functors descending to the usual composition of the object and arrow maps respectively. 

F\times G : A\times A' \to B\times B'Using functors notions we can define more special objects that we are already familiar with in a less abstract context.

**<u>Definition:</u>** Let $A$ and $B$ be categories and $F:A\to B$ be a functor. 

1. If $F$ is bijective then it is an **isomorphism of categories**. 
2. If for any two objects $a,a' \in A$ and any arrow $f: Fa \to Fa' \in B$ there exists an arrow $g:a\to a' \in A$ such that $f = Fg$ the functor is called **full** (in other words the arrow map is surjective on the arrows of the image of $A$). 
3. If for any pair of objects $a,a' \in A$ and any pair of arrows $f,f' : a\to a' \in A$ then $Tf = Tf' \implies f=f'$ the functor is called **faithful**, or sometimes an **embedding**. 

We will use such characterizations of functors a lot, so it is nice to have some definitions. However we can characterize these in terms of their actions on hom-sets. 

**<u>Proposition:</u>** Let $A,B$ be categories, $F:A\to B$ be a functor between them, and $a,a' \in A$ be objects in category $A$. Then the action of the arrow map of $F$ defines a function $F_{a,a'}$ between the hom-sets
$$
\begin{align*}
F_{a,a'} : \hom(a,a') &\to \hom(Fa,Fa')\\
f&\mapsto Ff.
\end{align*}
$$
Additionally, the following are true

1. If every such function is surjective then $F$ is full.
2. If every such function is injective then $F$ is faithful.
3. If $F$ is both full and faithful the every such function is also a bijection. 

Finally, there are some cool results using subcategories.

**<u>Definition:</u>** Given a category $C$ and a subcategory $S$, the injective functor $f:C\to S$ is known as an **inclusion functor**. Additionally, if the inclusion functor is full, the we call the $S$ a **full subcategory**.

**<u>Proposition:</u>** Any inclusion functor is faithful.



## Natural Transformations 

Now that we know enough about functors it is time to use them! In here we will use it to describe "natural objects." It is often in math that we say that some map "naturally extends" to some other map, or some construction induces some other. We are now ready to make this precise in terms of categories.

**<u>Definition:</u>** Let $A$,  $B$ be categories and $F,G : A\to B$ be functors. A **natural transformation** or **functor morphism** often denoted as $\tau: F\to^{\ast} G$ is a map that assigns to each object $a \in A$ an arrow $\tau_a = \tau a : Fa\to Ga$ such that for every arrow $f:a\to a' \in A$, where $a' \in A$  is some other object of $A$, the following diagram commutes
$$
\begin{CD}
a  @.     Fa  @>\tau a>> Ga\\
   @VfVV      @VFfVV     @VVGfV \\
a' @.     Fa' @>>\tau {a'}> Ga'
\end{CD}
$$
We call all the maps $\tau a$ for any object $a \in A$ the **components** of the natural transformation $\tau$. If every component is invertible in $B$ then the natural transformation is called a **natural equivalence** or **natural isormorphism** denoted by $\tau: F\cong G$. 

**<u>Example:</u>** *(Determinant)* Consider the category of commutative rings $\text{CRng}$ that has as objects all small commutative rings and arrows are their morphisms the category $\text{Grp}$ that has as elements all small groups and arrows homomorphisms. Then we can write the functor
$$
\begin{align*}
\text{GL}_n : \text{CRng} &\to \text{Grp}\\
R &\mapsto \text{GL}_nR\\
f:R\to K &\mapsto f_\ast : \text{GL}_n R\to \text{GL}_n K,
\end{align*}
$$
which maps any commutative ring to the group of $n\times n$ matrices of that ring, and the arrow map simply swaps the coefficients of each matrix by the action of $f$. Additionally, we can write the functor
$$
\begin{align*}
\ast : \text{CRng} &\to \text{Grp}\\
R &\mapsto R^\ast\\
f:R\to K &\mapsto f^\ast : R^\ast \to K^\ast 
\end{align*}
$$
where $R^\ast$ is the group of invertible elements of $R$. Since we know that for any matrix $M \in \text{GL}_nR$ the following identity must hold
$$
\det_R M^{-1} = (\det_R M)^{-1} \implies \det M \in R^\ast.
$$
As a result, we can define a natural transformation $\det : \text{GL}_n \to^\ast \ast$ that acts on every ring $R \in \text{CRng}$ by assigning the map $\det_R : \text{GL}_nR \to R^\ast$. Then we can show that the following diagram
$$
\begin{CD}
\text{GL}_nR @>\det_R>> R^\ast \\
@Vf_\ast VV @VVf^\ast V\\
\text{GL}_nK @>\det_K>> K^\ast
\end{CD}
$$
 commutes. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
**<u>Example:</u>** *(Double Dual Isomorphism)* Consider the category of finite dimensional vector spaces $\text{Vect}_{\mathbb{F}}$ over a field $\mathbb{F}$, where the arrows are $\mathbb{F}$-linear maps. Then consider the functor $\ast : \text{Vect}_\mathbb{F} \to \text{Vect}_\mathbb{F}$ that assigns to each vector space its dual $V\mapsto V^\ast$ and consider its self composition functor $\ast^2 = \ast \circ \ast$ also known as the double dual. Now consider the isomorphism between the dual and double dual $F_V : V\to (V^\ast)^\ast$. Then the transformation $F: I \to^\ast \ast^2$ where $I$ is the identity functor on $\text{Vect}_\mathbb{F}$ is a natural isomorphism.

In general we can use natural transformations to find an equivalence between categories.

**<u>Definition:</u>** Given two categories $A,B$ an **equivalence** between them is a pair of functors $F : A\to B$ and $G:B\to A$ with a pair of natural isomorphisms $\tau_A : I_A\to^\ast G\circ F$ and $\tau_B : I_B \to^\ast F\circ G$ where $I_A,I_B$ are the identity functors on $A$ and $B$ respectively.  



## Classification of Arrows

There are multiple ways that we can think of arrows and we often encounter them in working with different categories. Let's identify some.

**<u>Definition:</u>** Let $A$ be a category and $a,b \in A$ be objects, then the we have the following definitions.

1. An arrow $f:a\to b$ is **invertible** if there exists an arrow $f^{-1}:b\to a$ such that $f\circ f^{-1} =1_a$ and $f^{-1}\circ f = 1_b$, then $f^{-1}$ is called an **inverse of** $f$. 
2. The objects $a,b$ are **isomorphic** in the category $A$ if there is an invertible arrow between them. Then we write $a\cong b$. This relation is reflexive, symmetric, and transitive.
3. An arrow $f:a\to b$ is **endo** in $A$ iff $a=b$.
4. An arrow $f:a\to b$ is **monic** in $A$ if for any two parallel arrows $g,h:c\to a$ we have that $f\circ g = f\circ h \implies g=h$. 
5. An arrow $f:a\to b$ is **epi** in $A$ if for any two parallel arrows $g,h:a\to b$ we have that $ g\circ f = h\circ f \implies g=h$. 
6. A **left inverse** of $h:b\to a$ of an arrow $f:a\to b$ is such that $h\circ f = 1_a$. A **right inverse** or **section** of an arrow $f:a\to b$ is an arrow $h:b\to a$ such that $f\circ h = 1_b$. 
7. An arrow $f:a\to a$ is **idempotent** when $f^2 \coloneqq f\circ f = f$.
8. An object $a \in A$ is **terminal** in $A$ if for every object $b\in A$ there is exactly one arrow $b\to a$. Any two terminal objects are isomorphic in $A$. 
9. An object $a\in A$ is **initial** in $A$ if for every object $b\in A$ there is exactly one arrow $a\to b$.
10. A **null object** $z\in A$ is an object that is both initial and terminal. All null objects are isomorphic in $A$. The unique arrow such that $a\to z \to b$ is called a **null arrow**. Composites of null arrows are also null arrows. 
11. A **groupoid** is a category where every arrow is invertible. A groupoid is **connected** if for any two objects there is an arrow connecting them.

There are interesting facts for all of these, but for now we just need these definitions to work with category theory.

 

# Categorical Constructions

Now that we have defined what a category even is, it is time to lay down some common constructions that appear in so many places in math. These are ways that we can construct new categories from others. Here we will mostly explore constructions that appear in physics. 

## Duality

Duality essentially amounts to taking any axioms that form a category and swapping their domain and codomain (as well as the order of compositions). For example here is a list of statements and their dual.

|     Statement     |   Dual Statement    |
| :---------------: | :-----------------: |
|    $f:a\to b$     |     $f:b\to a$      |
| $a=\text{dom\,}f$ | $a = \text{cod\,}f$ |
|      $i=1_a$      |       $i=1_a$       |
|   $h=f\circ g$    |    $h=g\circ f$     |
|   $f$ is monic    |     $f$ is epi      |

The idea of a dual category is that it is formed by the dual axioms. Thankfully, we don't have to be as abstract, because dualizing the axioms simply amounts to finding a way to reverse the arrows of a category. This leads to the following definition.

**<u>Definition:</u>** Let $C$ be a category. Its **dual category** $C^\ast$ is a category that contains the same objects as $C$ but the arrows are in one to one correspondence with the arrows of $C$ such that for every arrow $f:a\to b \in C$ there is an arrow $f^\ast : b\to a \in C^\ast$ and the composition satisfies $f^\ast \circ g^\ast = (g\circ f)^\ast$.

Surprisingly this is enough! Let's see some examples.

**<u>Example:</u>** *(Dual Vector Space)* A vector space $V$ over a field $\mathbb{F}$ is a monoid $V$ with object set $\{\circ\}$ and composition of morphisms defined by vector addition. In particular for any arrow $v\in V$, there is a map
$$
\begin{align*}
\mathbb{F}\times V &\to V\\
(a,v) &\mapsto a\cdot v = av,
\end{align*}
$$
such that $1\cdot v = v$ and $0\cdot v = 0$ for any arrow $v \in V$ and where the identity arrow $0 = \text{id}_\circ$ satisfies $a\cdot 0 = 0$ for any $a \in \mathbb{F}$. Then, the composition of arrows $v,u \in V$ denoted by $v\circ u = v+u$ has the following additional properties:

1. **Commutativity:** $u+v = v+u$
2. **Linearity:** Given any $a,b \in \mathbb{F}$ then $av + aw = a(v+w)$ and $(a+b)v = av+bv$. 

So now we have a definition of a vector space as a category. Therefore we can define the **dual vector space** $V^\ast$ as the category where all the arrows are reversed. In fact we can find a categorical isomorphism between the vector space and its dual. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
However, there is a more interesting association we can make between the dual space and the vector space and this comes directly when we think about functors from a vector space to its dual.

**<u>Definition:</u>** Let $A,B$ be categories and $F:A\to B$ be a functor between the two then we can induce a functor $F^\ast : A^\ast \to B^\ast$ where the object map is the same and the arrow map is defined for any arrow $f^\ast \in A^\ast$ by $F^\ast f^\ast = (Ff)^\ast$. Such a functor is called a **covariant functor**. Additionally consider a functor $F:A^\ast \to B$, the one can induce a functor $\bar F : A\to B$ such that the arrow function is defined for any arrow $f \in A$ by $\bar Ff = F f^\ast$ and the object function is such that for any objects $a,b,c \in A$ and arrows $f:a\to b$,  $g: b\to c$ then
$$
\begin{align*}
\bar F1_a = 1_{\bar Fa} && \bar F(f\circ g) = (\bar F g) \circ (\bar F f).
\end{align*}
$$
With these definitions we are ready to uncover the familiar notion of the dual vector space. We will soon see how to define categories using functors and then we will prove that the dual space to a vector space is some category of contravariant linear functors. 

**<u>Example:</u>** *(More dual vector spaces)* Consider the category of small vector spaces $\text{Vect}_\mathbb{F}$ over a field $\mathbb{F}$. Then we can define functor $\bar F:\text{Vect}_\mathbb{F} \to \text{Vect}_\mathbb{F}$ where the object map, maps any vector space $V\in \text{Vect}_\mathbb{F}$ to it's dual $V^\ast \in \text{Vect}$ and any linear map $f:V\to W \in \text{Vect}_\mathbb{F}$ to it's dual map $f^\ast :W^\ast \to V^\ast \in \text{Vect}_\mathbb{F}$. Then $F$ is a contravariant functor. That is because it is a functor $F:\text{Vect}_\mathbb{F} \to \text{Vect}_\mathbb{F}^\ast$. From now on we will only deal with covariant functors. 



## Products

Natural and well defined in terms of sets, so we can extend it to categories.

**<u>Definition:</u>** Given any two categories $A,B$, their **product** is a category $A\times B$ such that the objects are the ordered pairs of objects $\langle a,b \rangle$, where $a\in A$ and $b \in B$, and the arrows are ordered pairs of arrows $\langle f,g\rangle : \langle \text{dom\,}f, \text{dom\,}g \rangle \to \langle \text{cod\,}f,\text{cod\,}g \rangle$. An arrow is composible iff both elements are and the composition is given by 
$$
\langle f,g \rangle \circ \langle f',g' \rangle = \langle f\circ f',g\circ g' \rangle.
$$

**<u>Proposition:</u>** Given two categories $A,B$ and their product $A\times B$ there ate two canonical functors $\pi_A : A\times B \to A$ and $\pi_B : A\times B \to B$ called the **projection functors**. Such that for any object $\langle a,b \rangle \in A\times B$ and any arrow $\langle f,g \rangle \in A\times B$ they act by
$$
\begin{align*}
\pi_A \langle a,b \rangle &= a & \pi_B\langle a,b \rangle &= b\\
\pi_A \langle f,g \rangle &= f & \pi_B\langle f,g \rangle &= g.
\end{align*}
$$
So far this is all natural, so it is time to define the natural defining property of the product construction.

**<u>Theorem:</u>** *(Universal property of product categories)* Given a category $C$ and two functors $A \xleftarrow L C\xrightarrow R B$ then there exist a unique functor $F:C\to A\times B$ such that the following diagram commutes
$$
\xymatrix {
& C\ar[dl]_L\ar[dr]^R\ar@{.>}[d]^F &\\
A & A\times B\ar[l]^{\pi_A} \ar[r]_{\pi_B} & B
}
$$

***Proof:*** Consider $F:C\to A\times V$ that satisfies the commutation diagram above. Then it must be such that for any $c \in C$ (either arrow or object) $Fc = \langle Lc,Rc \rangle$ using the projection functors. This shows existence and uniqueness. 
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
Using the universal property we can define other product-esque objects, like product functors. Here is how to do this. 

**<u>Definition:</u>** Let $F:A\to A'$ and $G : B\to B'$ be two functors between the corresponding categories. Then their **product functor** is the unique functor $F\times G : A\times B \to A'\times B'$ that makes the diagram below commutative.
$$
\xymatrix{
A \ar[d]_F & A \times B \ar[l]_{\pi_A} \ar[r]^{\pi_B} \ar@{.>}[d]^{F\times G} & B\ar[d]^G\\
A'&A'\times B'\ar[l]^{\pi_{A'}}\ar[r]_{\pi_{B'}} & B'
}
$$
  With all these definitions, there is a pretty cool result we can show.

**<u>Proposition:</u>** The product operation $\times : \text{Cat}\times \text{Cat} \to \text{Cat}$ is a functor from the product category of small categories, to the category of small categories. 



## Functor Categories 

Now it is time to play a better game that will be useful in certain constructions in linear categories. Let's construct categories out of functors.

**<u>Proposition:</u>** Let $A,B$ be categories, and consider all the functors $R,S,T,\cdots : A\to B$. If $\sigma :R\to^\ast S$ and $\tau:S\to^\ast T$, consider the following commutative diagram for any objects $a,b\in A$ and any $f:a\to b$.
$$
\xymatrix{
Ra\ar[d]_{\sigma a}\ar[r]^{Rf}\ar@/_2.5pc/[dd]_{(\tau\cdot \sigma)a} & Rb\ar[d]^{\sigma b} \ar@/^2.5pc/[dd]^{(\tau\cdot \sigma)b}\\
Sa\ar[d]_{\tau a}  \ar[r]^{Sf} & Sb\ar[d]^{\tau b}\\
Ta\ar[r]^{Tf} & Tb
}
$$
where $\tau \cdot \sigma$ is the composition of natural transformations defined for any $a\in A$ by
$$
(\tau \cdot \sigma) a = \tau a \circ \sigma a.
$$
That diagram commutes, and the composite is a natural transformation. 

***Proof:*** The inner boxes of the diagram commute by definition because $\tau$ and $\sigma$ are natural, therefore the semicircles commute. As a result, the composite of two natural transformations is also natural. 
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
**<u>Definition:</u>** Given categories $A,B$ the **functor category** $B^A = \text{Funct}(A,B)$ is the category with objects all the functors $T:A\to B$ and morphisms all the natural transformations between the functors. The homset for any two objects $S,T \in B^A$ of the functor category are denoted by
$$
\text{Nat}(S,T) = B^A(S,T) = \{\tau : S\to^\ast T \text{ natural}\}.
$$
This might look like an overcomplicated way to do stuff, but it has a practical purpose. Let's see some examples first.

**<u>Example:</u>** *(Function set)* If $X,Y$ are sets the category $Y^X$ is also a set, and it contains all the functions  from $X$ to $Y$. 

The interesting and useful example is the following. 

**<u>Example:</u>** *(Representations of Groups)* If $G$ is a group and $K$ is a commutative ring, then $\text{Mod}^G_K$ is the category of $K$-linear representations of elements of $G$. To show this, consider the functor $T:G\to \text{Mod}_K$. Let $g\in G$ be some group element (i.e. an arrow in the monoidal category $G$), and $Tg$ be the associated arrow on modules. Since $g$ is endo so is $Tg$. Even more, we can find the specific $K$-module that $Tg$ is acting on. This is the module $T\ast$ where $\ast \in G$ is the single element. Naturally, every functor respects composition, therefore the binary operation of the group elements is respected in the elements' images making $T$ a representation. Notice that the interesting thing, is that the representation carries with it the vector space it maps to which is kinda cute. 

The even cuter part is that the natural transformations, or arrows, of this category are the equivariant maps! In particular consider two representations $T,S:G\to \text{Mod}_K$ and consider an arrow $s : T\ast \to S\ast$ such that the following diagram commutes
$$
\xymatrix{
T\ast \ar[d]_{Tg} \ar[r]^{s} & S\ast \ar[d]^{Sg}\\
T\ast \ar[r]_s & S\ast
}
$$
for all $g \in G$. Then $s:T\ast \to S\ast$ defines a natural transformation $\sigma : T\to^\ast S$ where $s = \sigma\ast$ which fully defines the natural transformation. This map $s$ (or $\sigma$) is equivariant because for any $v \in T\ast$
$$
Sg(s(v)) = s(Tg(v)),
$$
or in more familiar notation
$$
g\cdot s(v) = s(g\cdot v).
$$

$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$



## Comma Categories

Honestly, I really wanted to skip this one, but after looking at limits and colimits, it becomes super useful. So, unfortunately we can't skip it. *I will fill out the idea later once I fully understand it,* but here is the general definition and some very common *examples*.

**<u>Definition:</u>** Consider the following categories and functors
$$
B\xrightarrow T A \xleftarrow S C 
$$
then the **comma category** $(T\downarrow S) = (T,S)$ is the category with objects all triplets $\langle b,c,f \rangle$ where $b \in B$, $c\in C$ are objects and $f: Tb \to Sc$ is an arrow in $A$. The arrows are pairs $\langle k,h \rangle$ where $k:b\to b' \in B$ and $h:c\to c' \in C$ and take $\langle b,c,f \rangle \to \langle b',c',f'\rangle$ such that $f'\circ Tk = Sh \circ f$, or in other words
$$
\begin{align*}
\langle b,c,f \rangle = \vcenter{\xymatrix{
Tb\ar[d]_f\\
Sc
}}
&&
\langle b,c,f \rangle \to \langle b',c',f'\rangle = \vcenter{\xymatrix{
Tb\ar[r]^{Tk}\ar[d]_{f} & Tb'\ar[d]^{f'}\\
Sc\ar[r]_{Sh} & Sc'
}}.
\end{align*}
$$


the left diagram are the objects, and the right diagram shows the action of the arrows. 

Aside from this not being very illuminating we can see specific examples. One cool thing to see is that any functor $a: \boldsymbol{1} \to A$ from the trivial category to any category $A$ is in bijective correspondence with the elements of $A$. In particular it is fully defined by the object $a\ast \in A$. So in principle it makes sense to talk about the following comma categories.

**<u>Definition:</u>** Let $A$ be a category and $a\in A$ an object, then the category of **objects under $a$**  is the category $(a\downarrow A)$ which is the comma category $(S\downarrow T)$ where $S:\boldsymbol 1 \to A$ is the functor such that $S\ast = a$ and $T$ is the identity functor of $A$.

**<u>Corollary:</u>** An alternative way to describe the category of all objects under $a$ $(a\downarrow A)$ is via the objects being pairs $\langle f,b \rangle$ where $f:a\to b$ is an arrow in $A$  and the arrows $h:\langle f,b \rangle \to \langle g,c \rangle$ defined by arrows $h:b\to c$ in $A$ in the following way
$$
\begin{align*}
\langle f,b \rangle = \vcenter{\xymatrix{
a\ar[d]_f \\
b 
}} 
&&
h:\langle f,b \rangle \to \langle g,c \rangle = \vcenter{\xymatrix{
 & a\ar[dl]_f \ar[dr]^{g} &\\
 b\ar[rr]_h & & c
}}.
\end{align*}
$$
These are much easier to think intuitively about. Let's see some examples

**<u>Example:</u>** *(Pointed Sets)* Let $\ast \in \text{Set}$ be the singleton and consider the category of sets below $\ast$. Any map $f:\ast \to s$ where $s \in \text{Set}$ is some set effectively picks an element $f\ast \in s$, so the elements are fully defined by a pointed sets, aka $ \langle p,S \rangle$ where $p\in S$ and $S\in \text{Set}$. The arrows are base point preserving maps. In other words, any arrow $f:\langle p,X \rangle \to \langle q,Y \rangle$ has the property that $f(p\ast) = q\ast$ by the diagram above, or in the usual notation where $p = p\ast$ we get $f(p) = q$.

**<u>Example:</u>** *(Abelian pointed groups)* In a similar way we can consider $(\mathbb{Z} \downarrow \text{Ab})$ where any map $f:\mathbb{Z} \to G$ where $G \in \text{Ab}$ is some other Abelian group defines an element of the Abelian groups under $\mathbb{Z}$. This homomorphism is completely defined by some $g\in G$ such that $f(1) = g$. So each element of the comma category is defined by $\langle g,G \rangle$ where $g\in G \in \text{Ab}$. So $(\mathbb{Z}\downarrow \text{Ab})$ contains pointed Abelian groups. The morphisms are going to be base point preserving maps. 



Here is another common example of a comma category.

**<u>Definition:</u>** Let $A$ be a category and $a\in A$ an object, then the category of **objects over $a$**  is the category $(A\downarrow a)$ which is the comma category $(S\downarrow T)$ where $T:\boldsymbol 1 \to A$ is the functor such that $T\ast = a$ and $S$ is the identity functor of $A$.

**<u>Corollary:</u>** An alternative way to describe $(A\downarrow a)$ is as the category with objects $\langle b,f \rangle$ where $f:b\to a$ is an arrow in $A$ and arrows $h:\langle b,f \rangle \to \langle c,g \rangle$ defined by arrows $h:b\to c$ in $A$ according the following commutation diagram
$$
\begin{align*}
\langle f,b \rangle = \vcenter{\xymatrix{
a\ar[d]_f \\
b 
}} 
&&
h:\langle f,b \rangle \to \langle g,c \rangle = \vcenter{\xymatrix{
 b\ar[rr]^h\ar[dr]_f & & c\ar[dl]^{g}\\
 & a &
}}.
\end{align*}
$$
We could play with similar examples, but let's take a break before that. To talk about universals, limits, and colimits.





# Universals

Universals is the formal description of constructions that appear all the time in mathematics and seem connected, and yet are often too different to apply in different categories. This is too abstract to be a useful description we will make it precise by introducing the formal definition and getting the intuition from there. 

## Definition and Examples

**<u>Definition:</u>** Let $F:D\to C$ be a functor and $c \in C$ be an object. A **universal arrow from** $c$ **to** $F$ is a pair $\langle r,u \rangle$ that consists of an object $r\in D$ and an arrow $u:c\to Fr$ such that for every pair $\langle d,f \rangle$ where $d\in D$ is an object and $f:c\to Fd$ is an arrow of $C$ there is a unique arrow $f’:r\to d$ of $D$ such that $Ff' \circ u = f$.

Less confusingly, a universal arrow $u$ is such that for every arrow $f$ to $F$ factors uniquely via the univeral arrow such that the following diagram commutes
$$
\vcenter{\xymatrix{
c\ar@{=}[d]\ar[r]^u & Fr\ar@{.>}[d]^{Ff'} & r\ar@{.>}[d]^{f'}\\
c\ar[r]^f & Fd & d
}}.
$$
Yeah no, this was more confusing. Let’s list some examples. 

**<u>Example:</u>** *(Bases of Vector Spaces)* Consider the category of all vector spaces over a field $\mathbb{K}$, denoted by $\text{Vec}(\mathbb{K})$ with arrows the linear transformations. Now consider the forgetful functor $U:\text{Vec}(\mathbb{K}) \to \text{Set}$ that takes the vector space to its corresponding set. Now for any set $X \in \text{Set}$ we can find a vector space $V_X$ that has the elements of $X$ as a basis. 

Now consider the function that takes an $x \in X$ to its corresponding vector in $V_X$. This is the arrow $j:X \to UV_X$. Now each arrow $X\to UW$ for any other vector space $W\in \text{Vec}(\mathbb{K})$ can be written via a linear transformation of the form $f':V_X \to W$, where the basis vectors of $V_X$ are mapped in $W$ to the corresponding elements of $X$ in $UW$. In other words we have that
$$
Uf'\circ j = f,
$$
or that $j$ is a universal arrow from $X$ to $U$. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
This is the more rigorous version of the linear algebra claim that linear maps are determined by the image of the basis. In categorical language, this is phrased as: the arrow that assigns the basis is universal. Here is another example. 

**<u>Example:</u>** *(Complete Metric Spaces)* Consider the category $\text{Met}$ of all metric spaces with arrows the metric preserving functions. It is worth noting that the complete metric spaces form a subcategory. Now consider the completion of a metric space $X \in \text{Met}$ which is an arrow $X \to \bar X$, that assigns the completion to $X$. That arrow is a universal for the forgetful functor from complete metric spaces to metric spaces. 

Ok I guess this was slightly contrived.  We can view universality from an object point of view to get more intuition. 

**<u>Definition:</u>** Let $D$ a category and $F:D\to \text{Set}$ be a functor. A **universal element** of the functor $F$ is a pair $\langle r,e \rangle$ consisting of an object $r \in D$ and an element $e \in Fr$ such that for every pair $\langle d,x \rangle$ where $d \in D$ and $x \in Fd$ there exists a unique arrow $f:r\to d$ such that $(Ff)(e) =x$.

**<u>Example:</u>** *(Equivalence relations)* Consider an equivalence relation $\sim$ on a set $S \in \text{Set}$, the corresponding quotient $S/{\sim}$, and the projection $p:S\to S/{\sim}$ that sends the elements to their equivalence classes. We know that if a function $F:S\to Y$ respects the equivalence relation, it descends to the quotient like so
$$
\vcenter{
\xymatrix{
S\ar[d]_p\ar[dr]^f \\
S/{\sim}\ar@{.>}[r]_{\bar f} & Y
}
}.
$$
Notice that we drew almost the same diagram as the one in (20)! The only thing missing is the chunk on the side because we haven’t defined our equivalence relation for all sets. However, using universal elements, we can define $\langle S/{\sim},p \rangle$ as a universal element of the functor $F:\text{Set} \to \text{Set}$ that takes a set $Y$ and assigns a set that is comprised of all the functions $f:S\to Y$ that respect the equivalence (i.e. $x\sim y \implies f(x) = f(y)$).

**<u>Example:</u>** *(Tensor Products)* Let $V,W$ be two finite dimensional vector spaces over a field $\mathbb{K}$ and consider the function $F$ that assigns to each vector space $U$ the set of all bilinear functions $V\times W \to U$. This is the object function of a functor $F: \text{Vec}(\mathbb{K})\to \text{Set}$. Notice that the tensor product $V\otimes W$ along with the map $\otimes : V\times W \to V\otimes W$ is a universal element for the functor $F$. 

In other words, if we are able to define the functor $F$ we are able to define the tensor product as the universal element of it.

***Note:*** Every time we see things as the “universal property of blank” these are examples of uinversal arrows in the corresponding category. 

 

## Coproducts

Coproducts are very common constructions that we have seen before. Here are some examples:

**<u>Example:</u>** *(Common Coproducts)* Here is a list of categories and their corresponding coproduct. 

| Category                 |                            | Coproduct                |
| ------------------------ | -------------------------- | ------------------------ |
| $\text{Set}$             | Sets                       | Disjoint Union of Sets   |
| $\text{Top}$             | Topological spaces         | Disjoint Union of Spaces |
| $\text{Top}_\ast$        | Pointed Topological Spaces | Wedge Sum                |
| $\text{Mod}(\mathbb{K})$ | $\mathbb{K}$ Modules       | Direct Sum               |
| $\text{Grp}$             | Groups                     | Free Product             |



The coproduct is, intuitively, a construction that allows for some kind of preservation of both structures “as is.” Another interesting example is one of a preorder. Given a preorder $P$ and two objects $a,b \in P$ the least upper bound $a\smallsmile b$  of both, if it exists, is a coproduct of $a,b$. As we can see it separately preserves the order structure of both $a$ and $b$. Let’s see the formal definition. 

**<u>Definition:</u>** Given any category $C$, the **diagonal functor** $\Delta : C \to C\times C$ has the object function $c\mapsto \langle c,c \rangle$ and the arrow function $f \mapsto \langle f,f \rangle$. 

Why? Because we will need it right now. 

**<u>Definition:</u>** Given a category $C$, a universal arrow from an object $\langle a,b \rangle \in C\times C$ of the diagonal functor is called a **coproduct diagram.** It consists of an object $c \in C$ and an arrow $\langle a,b \rangle\to \Delta c = \langle c,c \rangle$  or equivalently a pair of arrows $i:a\to c$ and $j:b\to c$. . Then $c = a \coprod b$ is called the **coproduct object** and the coproduct diagram is
$$
a \xrightarrow i a\coprod b \xleftarrow j b.
$$


The secret to the coproduct structure comes when considering the universal property. Since  the coproduct diagram is universal, for any object $d \in C$ and any arrow $\langle f,g \rangle : \langle a,b \rangle \to \Delta d = \langle d,d \rangle $ there exists a unique arrow $h$ such that the following diagram commutes
$$
\vcenter{\xymatrix{
a\ar[r]^i\ar[dr]_f & a\coprod b\ar@{.>}[d]^h & b\ar[l]_j\ar[dl]^g\\
& d
}}.
$$
The universality property is that maps “descend” to the coproduct through the corresponding injections of the objects in their coproduct. As a result, we have that the coproduct necessarily preserves the structure of the two objects, which is neat. 



## Colimits

The construction of the coproduct generalizes further! A coproduct is only an example of a colimit. Here we will briefly introduce more just for fun before we provide the big definition.

**<u>Definition:</u>** Let $C$ be a category that contains a null object $0 \in C$ such that for any two objects $b,c \in C$ there is a zero arrow $0:b\to 0 \to c$. Then the **cokernel** of $f:a\to b$ is an arrow $u:b\to e$ such that $u\circ f = 0:a\to c$ and for any $h:b\to d$ such that $h\circ f = 0$ then $h = h' \circ u$ for a unique arrow $h':c\to d$. In picture words
$$
\xymatrix{
a\ar[r]^f & b\ar[r]^u\ar[dr]_h & c\ar@{.>}[d]^{h'} & u\circ f =0\\
	& 	& d & h\circ f = 0.
}
$$
This is smelling very universal already, by the descending property of $h$ through the cokernel $c$. 

**<u>Example:</u>** *(Abelian Cokernels)* In the category of Abelian groups $\text{Ab}$ with arrows the group homomorphisms the cokernel of $f:A \to B \in \text{Ab}$ is the projection $B\to B/\text{Im\,}f$, the quotient group formed by the image of $f$. 

Intuitively, the cokernel is *the rest of the structure* of the codomain, just as the kernel is *the rest of the structure* of the domain. But we will see it soon when we dualize. 

Another example of a colimit (that we introduce before the formal definition of colimits) are copowers and infinite coproducts. 

**<u>Definition:</u>** Consider a set $X$ as a descrete category and a category $C$. The corresponding diagonal functor $\Delta:C\to C^X$, between $C$ and the functor category $C^X$ with objects all $X$-indexed families $a = \{a_x \in C\mid x\in X\}$,  sends any $c\in C$ to the constant family $c = \{c_x = c\mid x\in X\}$. A universal arrow from $a \in C^X$ to $\Delta$ is an $X$**-fold coproduct diagram** that consists of an object $\coprod_{x\in X}a_x \in C$ and arrows called **coproduct injections**.

I will not draw this diagram, because the infinite, or $X$-fold coproduct is exactly the same as before. Similarly we can define copowers.

**<u>Definition:</u>** if $a = \{a_x = a \in C \mid x\in X\} \in C^X$ is an object comprised with the same factors $a_x$, then we call the coproduct of $a$, the **copower** of $a$. This is usually denoted as $X\cdot a$. 

Now we are ready to explore the colimit in its full generality. 

**<u>Definition:</u>** Given categories $C,J$, the **diagonal functor**.
$$
\Delta: C\to C^J
$$
sends each object $c \in C$ to the constant functor $\Delta c : J \to C$ that assigns $c\in C$ to each $i\in J$ and $1_c : c\to c$ to each arrow in $J$. Additionally, for any arrow $f:c\to c'$ in $C$, $\Delta f$ is the natural transformation $\Delta f : \Delta c \to^\ast \Delta c'$ which assigns $f$ at each object $i \in J$.

With the diagonal functor we can finally express colimits.

**<u>Definition:</u>** A **colimit diagram** or **direct limit diagram** is a universal arrow $\langle r,u \rangle$ from $F:J\to C \in C^J$ to $\Delta$. This consists of an object $r \in C$ written as $r = \varinjlim F$ called the **colimit** and a natural transformation $u:F\to^\ast \Delta r$. The natural transformation $u$ is a universal among natural transformations $\tau:F \to^\ast \Delta c$. 



This is more confusing than helpful, so let’s see an example of the colimit being a kind of limit.

**<u>Example:</u>** *(Limits of subsets)* Let $\omega=\{0\to 1\to 2 \to \cdots\}$ be the cardinals, and consider the functor $F:\omega \to \text{Set}$ which maps every arrow in $\omega$ to an inclusion, i.e. a monic arrow in $\text{Set}$. That means that $F$ is a nested sequence of sets! The union of all these sets is $\varinjlim F$ and their coproduct diagram is the inclusions of the subsets to their union. 















