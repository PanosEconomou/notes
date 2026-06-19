# Homotopy Theory in QFT

Some basics on how to do homotopy things in QFT. 

[toc]

## Spectra

Spectra are the fundamental objects of homotopy theory. A good inviting example to understand the picard groupoid $\text{pic}(C)$ of a (symmetric) monoidal category $C$.

**<u>Definition:</u>** A **picard groupoid** is a symmetric monoidal category where every object and every morphism is invertible with respect to $\otimes$. 

This means for for any $c \in \text{pic}(C)$ we can find $c^{-1}$ such that $c^{-1}\otimes c = 1$ and the same thing for the map. Given a symmetric monoidal category $C$ we can construct a picard groupoid $\text{pic}(C)$ by taking the isomorphism classes of objects of $C$ where for each class $[x]$ there exists an object $y\in C$ such that $1 \in y\otimes [x]$, i.e. $y\otimes [x] = [1]$.

Other useful things are 

**<u>Defintion:</u>** Given a picard groupoid $P$ we can define $\pi_0(P)$ as the isomorphism classes of objects of $P$, and $\pi_1(P)$ as the group of automorphisms of the identity in $P$.

Some of these stuff are found [here](https://arxiv.org/pdf/1409.7702) and [here](https://math.uchicago.edu/~may/PEOPLE/PATEL/PatelPicard.pdf).



## 2-Categories 

One could obtain a category by making objects to be categories, morphisms are functors. This is a lame category because a set of categories doesn't have a useful notion of equality. This is where the 2 comes in. We will have a morphism and a secondary type of morphism called a $2$-morphism between two objects that helps us classify "how equal" the morphisms are. But in some sense the $1$-morphisms in a regular category can tell us how equal two objects are but they include much more than that! The point is $2$ morphisms are to $1$ morphisms what $1$ morphisms are to objects. Why? Because now the $Hom$ of two objects has much richer structure that can be studied using its own maps.

Point is that one can keep going up and up and up but at some point we might want to study the step construction itself in a more workale way. One way we could do that is to go directly to $\infty$ categories.

## $\infty$-Categories

The idea for what we want this thing to be is something modelled on an $\infty$ groupoid. In particular an $\infty$ groupoid is going to be a thing that has invertible morphisms between its elements, and their morphisms have inverible morphisms, and so on. So where can we find one?

Consider $M$ some kind of topological space. Maybe a manifold. Then we can pick 1-morphisms to be paths between points, 2-morphisms to be homotopies between paths (i.e. paths of disks), and so on. So we should be able to create a construction called $\Pi_{\infty}$ that takes spaces and maps them to infinity groupoids. So in some sense an infinity groupoid is capturing the homotopical structure of a space! This is called the **Homotopy Hypothesis** i.e. that $\infty$-categories are space up to homotopy.

The thing that a category would break here is invertibilty of paths. In some abstract sense we can think of an infinity category as a generalization of a space in which paths are not invertible.

Now take a group $G$. That group is a category with one object and a hom with invertible elements. But as a 1-category it is also an $\infty$ groupoid, which means that we can think of it (up to homotopy) as some kind of "space" we call that algebraic structure $BG$, the **classifying space**.

Some interesting examples are for $G=\mathbb{Z}_2$ this ends up being the space $\mathbb{R}P^\infty$, that is the infinite projective space. Another interesting fact is that $B\mathbb{Z} = S^1$. These are just facts so it would be cool to understand them more precisely. 

We can build $\infty$-categories simply by allowing up to $n$-morphisms to (potentially) be noninvertible. In particular we call that an $(\infty,n)$ category. So for example an infinity groupoid would be an $(\infty,0)$ category.

Notice that if we fix two objects we can build a category using the morphisms between the objects. In some sesne in an $(\infty,1)$ category the morphisms of any two objects form a $(\infty,0)$ category. In fact an $(\infty,n)$ category has an $\infty$ groupoid attached to every pair of $n$ morphisms. 

In particular an $(\infty,1)$ catetgory is effectively a collection of $\infty$ groupoids each attached to a pair of objects. 

One question that we might ask would be what does it mean to have a functor between two $\infty$-categories. Well, a functor has to commute with composition nad assign maps to maps and objects to objects and so on. The problem is that we don't know how to say that "it commutes with composition" because that would lead to a statement like
$$
F(f) \circ F(g) = F(f\circ g),
$$
but since the morphisms are not just a set, they are a category we need some relevant notion of equality that doesn't necessarily exist! So we have to be careful. The idea is that we want some version of homotopy.



## Symmetries $\leftrightarrow$ Deformations

One notion of symmetry that we are generalizing constantly is the idea that it is a **group action**. In the language of categories this is a functor $R:G\to \text{C}$, where $C$ is some category of stuff we are interested in. For example if we are looking for a representation we could pick $C = \text{Vec}$.

But since we talked about how categorically the information of the group can be included in its classifying space we would then see that having a symmetry action would be effectively having a functor $BG\to C$. We would still need to define what a "functor from a space" is, but the idea is important.



## What about Tensors?

A big part of what we want to do in physics is to have the ability to do a tensor product. In particualr we would like to sum over finite sets! So whatever an $\infty$ symmetric monoidal category is we should be able to define maps from finite sets and some version of commutative sums. Here is how we can study this. 

If $A$ is a commutative monoid and $X,Y$ are two finite sets we want to be able to take $f : X\to Y$ and define 
$$
\begin{align*}
f_+ :A^X &\to A^Y\\
\{a_x\}_{x\in X} &\mapsto \{\sum_{f(x) = y} a_x\}_{y \in Y}.
\end{align*} 
$$
We can also define a pullback.
$$
\begin{align*}
f^\ast : A^Y &\to A^X\\
\{a_y\}_{y \in Y} &\mapsto \{a_{f(x)}\}_{x \in X}.
\end{align*} 
$$
These look and are functorial 







