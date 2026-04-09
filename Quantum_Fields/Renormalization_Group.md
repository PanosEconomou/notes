# Renormalization Group

Time to understand wtf the renormalization group is. This follows Peskin and Gross’ chapter in Quantum Fields and Strings as well as Cardy's scaling and renormalization in Statistical systems. We begin with some seemingly irrelevant mathematical exploration of functions with fixed points, and then connect it to statistical systems. Once that is done, we will explore results in general quantum field theory.

[TOC]



# Core idea

The renormalization group flow is what happens when physicists hear people laugh at them for "cows being spheres," or "ignoring air resistance," and think "maybe I can find a universal framework for doing this!"

Starting with some description of nature, it can always be simplified (i.e. become courser) or more complicated (i.e. finer). The renormalization group, or renormalization group flow, is the (bad) name physicists have given to the set of techniques that allow them to systematically jump from a fine to a course description of a physical phenomenon.

Probably the simplest universal way of removing complexity for a system, is to zoom out. You go and try to predict how fast a ball is going to fall when dropped by calculating all the possible quantum interactions between the quadjillions of atoms that comprise it. This is a maddening exercise probably best reserved for the highest forms of psychotherapy or torture. Instead what we do is we realize that the more we zoom out, the more local interactions between systems become irrelevant. So in a way their impact can be "averaged out" to obtain a theory that gives roughly the same predictions at larger scales but not so much in the original scale. 

That averaging transformation that takes us to a courser theory is called the renormalization group transformation. Start with the quantum mechanical theory that describes all the electrons and protons and whatnot of the entire universe, applying the transformation once we will get the classical mechanics of a ball with maybe a rough surface that feels air resistance and whatnot. Apply it again, and then you get the classical mechanics of a point. Apply it a couple more times and you get to see the dynamics of the ball are averaged out with the dynamics of the rest of the objects in the earth, and instead you are starting to see aspects of Newtonian gravity. After more applications you will see general relativity (or at least so we think).

This sounds abstract as hell, and the particular example is a physicist's wet dream. We don't actually have the starting theory for all the possible things in the universe. Yet, for theories that we do know, we can define such averaging transformations that will help us move on. Let's first examine them at their own merit, and then study them more precisely.



## Thinking about Fixed Points 

Though *renormalization group flow* is a misnomer, there is sense in which renormalization flow in physics is classified using groups. The idea of a flow though still remains. Let's understand how to think of flow using a much more general mechanism that related vector fields to Lie groups.

> To be rigorous without using unapproachably abstract terminology we will stick to studying everything on a manifold. However, these things can be extended by relaxing assumptions in various ways that we will encounter over time. Ideally, I would like to write these notes in the language of [smooth sets](https://ncatlab.org/nlab/show/geometry+of+physics+--+smooth+sets) one day, because this is the actual rigorous way of thinking that physicists use.

We want to capture the intuition of a scaling transformation on some manifold $M$. That will be comprized of a series of endomorphisms of $M$ controlled by some scaling parameter $b$ which is known as the **rescaling factor** such as they compose in a natural way and so on. Here is the natural setting where we can study this.

**<u>Definition:</u>** A **monoid** is a set $G$ together with a binary associative map $\cdot : G\times G \to G$ as well as an identity element $1 \in G$ such as $1\cdot a = a\cdot 1 = a$ for any $a\in G$ . A **monoid homomorphism** is a map compatible with the binary operation that preserves the identity.

This is what will parameterize our flows. For example $\mathbb{R}^+$ with the multiplication is a monoid, and so is $\text{End}(M)$ with composition. 

**<u>Definition:</u>** A **renormalization group transformation** is a monoid homomorphism $R_{\bullet}: \mathbb{R}^+ \to \text{End}(M)$. We say that $K_\ast \in M$ is a **fixed point** if $R_b(K_\ast) = K_\ast$ for any $b\in \mathbb{R}^+$.

This implies that $R_1 = 1$ and that scaling compounds like $R_{b}\circ R_c = R_{bc}$ which gives the intuition of scaling. If around a fixed point the function $R_b$ is smooth we can study its stability by looking at its pushforward aka its differential. 

**<u>Proposition:</u>** Assuming $R_b$ is smooth for all $b$ around a fixed point $K_\ast \in M$ then $D_{K_\ast} R_{\bullet} : \mathbb{R}^+ \to \text{End}(T_{K_\ast} M)$ is a monoid homomorphism.

The reason why this is nice is that what that is is a linear representation of the multiplicative group $\mathbb{R}^+$ to the tangent space which is completely classified. All such representations are of the form $b^y$ for some $y\in \mathbb{R}$. Isn't that awesome? So we can always pick a basis of eigenvectors in the tangent space $u_i \in T_{K_\ast}M$ with eigenvalues $b^{y_i}$.

**<u>Definition:</u>** Assume that $R_b$ is smooth for all $b$ around a fixed point $K_\ast$, and consider an eigenvalue $b^{y}$ of $D_{K_\ast}R_b$ . Then the corresponding eigenvector is called:

1. **relevant** if $y>0$, i.e. the rescaling pushes you away from the fixed point in that direction,
2. **marginal** if $y=0$, i.e. we don't know if the rescaling pushes us closer or away from the fixed point,
3. **irrelevant** if $y<0$, i.e. the rescaling pushes us towards the fixed point.

We will discuss the reasoning behind this classification in the context of RG flows later.

One more tool that we will need soon is the $\beta$**-function**, which appears so often when we study RG flows around critical points. 

**<u>Definition:</u>** If $R_\bullet$ is smooth near $b=1$ then the vector field $\beta \coloneqq R_\ast \left.\frac{d}{db}\right|_{1} \in \mathfrak{X}(M)$ is called the **beta function**. 

This vector field has components in some coordinate system $K^i$ of $M$ 
$$
\beta^i(K) = \left.\frac{d}{db}\right|_{b=1} K^i\circ R_b(K),
$$
and zeros exactly at the fixed points. Finding zeros of a vector field is often much easier than finding fixed points so a lot of the computation tools of RG flow in physics center around calculating and using $\beta$ functions.

## The Partition Function

Let's do some physics. As always the case with complicated abstract things let's find a couple of simple systems we can study. A class of them is called the $O(n)$ model. We will present it in its abstract generality first and then specialize in commonly found cases.

Consider a lattice $\Lambda$ where at each point we have attached a sphere $S^{n-1}$. We can do this by considering a map $s:\Lambda \to S^{n-1}$. This has the picture of a bunch of spins each located at a lattice point in $\Lambda$. We will now consider two functions $J:\Lambda\times \Lambda \to \mathbb{R}$ such that it falls off sufficiently fast with distance between lattice points and $h \in \R^3$ which we will call the applied field. We often call $\Gamma$, the space of maps $s \in (S^{n-1})^{\Lambda}$, the configuration space. We then consider the Hamiltonian $H: \Gamma \to \mathbb{R}$  to be
$$
H(s) = -\frac{1}{2} \sum_{r,r' \in \Lambda} J(r,r') s(r)\cdot s(r') - \sum_{r\in \Lambda} h \cdot s(r).
$$
The reason why this is called the $O(n)$ model is that in the absence of external field (i.e. $h=0$) it has a global $O(n)$ symmetry because we can rotate all spins around the sphere by the same amount. For $n=1$ we have the familiar Ising model, while for $n=2$ we have the $XY$-model also known as the planar model. 

Given a Hamiltonian we can calculate its partition function defined by
$$
Z(\beta) = \text{Tr}_\Gamma e^{-\beta H} = \sum_{s\in \Gamma} e^{-\beta H(s)}.
$$
The partition function will serve as the basis by which we decide what "rescaling" our system really means, so it is worth taking a little time to figure it out.









