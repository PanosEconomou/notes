# Categories

We introduce the basic constructions of Category Theory as well as some cool theorems that can help us work with them.

[toc]

# Constructions

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

**<u>Example:</u>** *(Metacategory of Sets)* The simplest example of such a structure is the **metacategory of sets** where the objects are all sets, and tehe arrows are all functions with the usual identity functions for the identtiy operation and usual composition rules. 

To be more specific, a function $f$ consists of a set $X = \text{dom\,}f$, a set $Y=\text{cod\,}f$, and a rule $x \in X \mapsto fx \in Y$. The identity function for some set $X$ is $1_X : X \to X$ with the rule $x \mapsto x$, and composition of $f:X\to Y$ and $g:Y\to Z$ is defined by the corresponding rule $x \mapsto g(fx)$.

**<u>Example:</u>** *(Arrows-Only Metacategories)* Since the identity arrows are unique and there is a 1-1 and onto relationship with the objects of a metacategory, it is possible to forget about the objects all together, and keep only the arrows. To do this let’s reinterpret some of the properties of the arrows. In an **arrows-only metacategory** there exist certain ordered pairs $\langle f,g\rangle $ of arrows that are called composable, and an operation assigning to each composable pair of arrows an arrow $f\circ g$ called their composite. Therefore we can define an identity of the metacategory to be an arrow $u$ such that $f\circ u = f$ whenever $\langle f,u\rangle$ is composable and $u\circ g = g$ whenever $\langle u,g\rangle$ is composible. So now that we have identity we can convert the axios. 



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














