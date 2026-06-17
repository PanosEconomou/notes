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

## Symmetries $\leftrightarrow$ Deformations