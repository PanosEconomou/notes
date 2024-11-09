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

**<u>Example:</u>** (Abelian Categories) A category $A$ is an **Ab-category** or **preaditive** category if every hom set is an additive abelian group, for which the composition map is bilinear. We are going to explore Abelian categories in a lot more detail later.   

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

Using functors notions we can define more special objects that we are already familiar with in a less abstract context.

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

**<u>Definition:</u>** Let $A$,  $B$ be categories and $F,G : A\to B$ be functors. A **natural transformation** or **functor morphism** often denoted as $\tau: F\to^{\ast} T$ is a map that assigns to each object $a \in A$ an arrow $\tau_a = \tau c : Fc\to Gc$ such that for every arrow $f:a\to a' \in A$, where $a' \in A$  is some other object of $A$, the following diagram commutes
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
3. An arrow $f:a\to b$ is **monic** in $A$ if for any two parallel arrows $g,h:a\to b$ we have that $f\circ g = f\circ h \implies g=h$. 
4. An arrow $f:a\to b$ is **epi** in $A$ if for any two parallel arrows $g,h:a\to b$ we have that $ g\circ f = h\circ f \implies g=h$. 
5. A **left inverse** of $h:b\to a$ of an arrow $f:a\to b$ is such that $h\circ f = 1_a$. A **right inverse** or **section** of an arrow $f:a\to b$ is an arrow $h:b\to a$ such that $f\circ h = 1_b$. 
6. An arrow $f:a\to a$ is **idempotent** when $f^2 \coloneqq f\circ f = f$.
7. An object $a \in A$ is **terminal** in $A$ if for every object $b\in A$ there is exactly one arrow $b\to a$. Any two terminal objects are isomorphic in $A$. 
8. An object $a\in A$ is **initial** in $A$ if for every object $b\in A$ there is exactly one arrow $a\to b$.
9. A **null object** $z\in A$ is an object that is both initial and terminal. All null objects are isomorphic in $A$. The unique arrow such that $a\to z \to b$ is called a **null arrow**. Composites of null arrows are also null arrows. 
10. A **groupoid** is a category where every arrow is invertible. A groupoid is **connected** if for any two objects there is an arrow connecting them.

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

**<u>Theorem:</u>** *(Universal property of product categories)* Given a category $C$ and two functors $A \xleftarrow f C\xrightarrow g B$ then there exist a unique functor $F:C\to A\times B$ such that the following diagram commutes
$$
\xymatrix {
& C\ar[dl]_f\ar[dr]^g\ar@{.>}[d]^F &\\
A & A\times B\ar[l]^{\pi_A} \ar[r]_{\pi_B} & B
}
$$





























