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

Consider a smooth manifold $M$ and a function $R: M \to M$. We will say that there exists a point $K_\ast \in M$ such that $R(K_\ast) = K_\ast$, aka a fixed point of $R$. We also assume that $R^\ast$ is smooth at $K_\ast$. Let's fix some tools that can help us do calculations around $K_\ast$, namely we can fix a chart $(U,\phi)$ in which $R$ is smooth and invertible in, we will see the non-invertible case soon. 

**<u>Definition:</u>** A **dual $R$ basis** $\epsilon \in \Omega(U)^{\dim M}$ is defined for any $b\in \mathbb{R}$ by
$$
R^\ast_b \epsilon^j = \lambda^j(b)\epsilon^j.
$$
where $\lambda^j \in \mathbb{C}$ is an eigenvalue of $R_\ast$. Using them we can define a bilinear form $g = \delta_{ij} \epsilon^i\otimes \epsilon^j$. Namely, these are a basis of **left eigenvectors** of $R$. Given a vector $X \in T_{K_\ast} M$ its corresponding **scaling vector** $u_X \in T_{K_\ast}^\ast M$ is the covector defined by the musical isomorphism of $g$, i.e. 
$$
u_X = \iota_X g = \delta_{ij}\epsilon^i(X) \epsilon^j.
$$

Using dual vectors we will examine simplifications of the transformation, but for now, what we really care about is the intuition. Roughly $X$ defines a direction and speed away from the critical point, and $u_X$ retains all this information. The difference is that unlike the components of $X$, the components of $u_X$ simply scale by an eigenvalue.

**<u>Proposition:</u>** Given such a map $R : M\to M$ a vector $X \in T_{K_\ast}M$ then
$$
R^\ast u_X = \delta_{ij}\lambda^j\epsilon^i(X) \epsilon^j.
$$


The renormalization group transformation $R$, however, it is not just any function. It depends on some external scaling parameter $b \in \mathbb{R}$. This is known as the **rescaling factor**. The idea is that it quantifies how large our zoom out + averaging  steps are. So in some sense we need to define a series of $R:M\to M$ maps that depend on $b$ and have certain properties. 

**<u>Definition:</u>** A **renormalization group transformation** is a continuous path $R:\mathbb{R}^+ \to C^0(M,M)$ in $C^0(M,M)$ such that $R_0 = \text{Id}_M$, there exists a fixed point $K_\ast \in M$ where $R_b(K_\ast) = K_\ast$ and where $R_b$ is smooth at $K_\ast$ for all $b \in \mathbb{R}^+$, and the function $R_{-}(K)$ is smooth around $0 \in \mathbb{R}^+$ for any $K \in M$.

This is basically a collection of transformations that starts with the identity, and has a fixed point that doesn't depend on the value of scaling. With that we can make some pretty cool assumptions. 

**<u>Proposition:</u>** Given a renormalization group transformation $R$ an eigenvalue $\lambda$ of $R^\ast_b$ satisfies 
$$
\log \frac{\lambda(b)}{b} = y + \mathcal{O}(b),
$$
for some $y \in \mathbb{R}$.

***Proof:*** We know that $R_0^\ast = 0$ since  $R_0 = \text{Id}_M$. We also know that $R_{b}^\ast$ must be smooth as a function of $b$ at $b=0$ for any point on the manifold. Since the matrix $R^\ast _b$ can be written in terms of (possibly complex) eigenvectors and associated eigenvalues as
$$
R^\ast_b =\lambda^i(b) \epsilon^i(b) \otimes \epsilon_i(b) = \lambda^i(b) \left[\epsilon^i(0)\otimes \epsilon_i(0) + \mathcal{O}(b)\right]
$$











