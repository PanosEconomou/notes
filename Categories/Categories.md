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

1. **Identity:** Which assigns to each object $a$ an arrow $Id_a= 1_a : a\to a$.
2. **Composition:** Which for any two arrows $f,g$ such that $\text{cod\,}f = \text{dom\,}g$ it assigns assigns an arrow $f\circ g$ 















