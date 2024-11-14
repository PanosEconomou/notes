# Variational Calculus

Calculus of variations is used very often in physics, but often it is vibes based in order to derive a formula in a lecture. The purpose of these notes is to introduce the formalism of variational calculus in order to help when we encounter a completely unfamiliar action or path integral and we want to use variational techniques in a consistent way.

[TOC]



# Function Spaces

Variational calculus is an attempt to generalize calculus constructions such as integration and differentiation on maps where the points the map from are functions and not numbers. Here we start by exploring basic properties of the structure of these function spaces.

## Banach Spaces

We begin by introducing an algebraic structure that contains all the properties of real vector spaces we need while being general enough that it can be applied to other spaces like the space of spinors, orperators, etc.

**<u>Definition:</u>** A **Banach space** is a complete normed vector space. In other words it is a pair $(B,||\cdot||)$ that consists of a vector space $B$ and a positive definite, subadditive, absolutely homogeneous map $||\cdot || : B\to \mathbb R$, such that every Cauchy sequence in $B$ has a converging subsequence in $B$ under the topology induced by the norm. 

In less fancy words this is a vector space with a distance such that if you follow any converging sequence you won't accidentally fall out of the vector space. These spaces are the setting of so much of calculus. In fact most of the times in physics we work wigivrn th functions that map a manifold to a Banach space. 

**<u>Example:</u>** *(Physics Fields interpreted as maps to Banach Spaces)* A complex scalar field is, formally, a section of the complex line bundle $L$ over some Lorentzian manifold $M$. By picking a global section of $L$ we can identify every complex scalar field with a map of the form $M\to \mathbb C$. Since $\mathbb C$ is vector isomorphic to $\mathbb R^2$, then $\mathbb C$ with the Eucledian norm is a Banach space. Therefore all complex scalar fields are functions to a Banach space.

This is also true for spinor fields for example. Using a similar argument, we can see that sections of the spin structure of a Lorentzian manifold, correspond to maps between the manifold and the vector space corresponding to a representation of some Clifford algebra. That vector space along with the attached spin invariant inner product forms a Banach space.



Banach spaces have some cool properties already. For example the existence of a norm can help us define differentiation without a rigid smooth structure on them. Here is how to do it.

**<u>Definition:</u>** Let $V,W$ be Banach spaces, and $U\subset V$ be an open subset. Then a function $f : U \to W$ is **Frechet differentiable** at $x \in U$ if there exists a bounded linear operator $A: V\to W$ such that
$$
\lim_{||h||_V \to 0} \frac{\left|\left|f(x+h)-f(x) - Ah\right|\right|_W}{||h||_V} = 0.
$$

 Then $A$ is the **Frechet derivative** of $f$ at $x \in U$. We often write $D_xf = Df(x) \coloneqq A$. 

There are other nice properties here such as uniqueness or equivalence to the linear approximation in finite dimensional vector spaces. However, it is important to note that this is a very strong requirement, and as we will see we aim to relax this when talking about functional differentiation.

## Function Spaces

Since Banach spaces appear in all the nice maps we want when studying physics it makes sense to understand them more abstractly. However, the real reason why we do so is the following super cool fact, which we introduce after this short definition.

**<u>Definition:</u>** Given two sets $X,Y$ we define the **set of all functions** from $X \to Y$ as

$$
Y^X \coloneqq \{f:X\to Y\}.
$$

Here is the cool fact.

**<u>Theorem:</u>** Let $X$ be a set and $B$ a Banach space. Then the set of all functions $B^X$ is a Banach space under point-wise addition and scalar multiplication, and the supremum norm.

I love this! Not only did we bundle together all the spaces that we map to in physics, but also all the useful functions in physics belong to the same category of spaces. Therefore we only need to care about defining variational constructions in Banach spaces and we are done!

Before we move on we can introduce some nice properties of function spaces.

**<u>Proposition:</u>** Let $X$ be a set and $B$ a Banach space. If $|X| \in \mathbb N$ then $B^X \cong B^{|X|}$.



# Functionals

A functional is a term that we use when the word function is a ambiguous. Similarly to the words set, family, and collection in set theory. They are all sets, but depending on context we might have sets of sets, and sets of sets of sets, which might end up being cumbersome after some times.

**<u>Definition:</u>** Let $X,Y$ be sets of functions, then a **functional** is a function $f:X\to Y$. The **set of all functionals** form $X$ to $Y$ is $Y^X$.

There is no special property of functionals that makes them distinct from functions, but using function for both the map and its input   could be confusing. Notice that [distributions](./Distributions.md) are functionals, and in fact we will use them a lot in our attempt at calculus.



## Functional Differential 

The well defined concept on functional derivatives is the functional differential, more so than the functional derivative itself. Here is how we define it. 

**<u>Definition:</u>** let $A,B$ be a Banach spaces, and $F:A\to B$ be a function. The **functional differential** of $F$ at $a\in A$ is the linear map $\delta F[a] : A\to B$ such that for any $\phi \in A$
$$
\delta F[a](\phi) = \lim_{\epsilon \to 0} \frac{F(a + \epsilon \phi) - F(a)}{\epsilon} = \frac{d}{d\epsilon}F(a + \epsilon \phi).
$$

We notice that if the Frechet derivative is defined for $F \in B^A$ then, $\delta F[a]$ is the Frechet derivative at $a$!

Technically this is all we need in order to define functional derivatives, but lets first see some examples.

**<u>Example:</u>** Let $M$ be a Lorentzian manifold and consider the Banach space $B \coloneqq C^\infty_0(M)$ of compactly supported functionas on $M$. Then we can consider real functionals on $B$, ie. $F: B\to \mathbb R$. We know that if $F$ is continuous then it is a distribution (see [distributions](./Distributions.md)). Let $F$ be of the form such that for any $f \in B$
$$
F(f) = \int_M \ast L\cdot f = \int_M L(x) f(x) dx,
$$

where $L\in B$ is some fixed function (One can recognize $F$ as a *regular distribution*). Then its functional derivative at any point $f \in B$ is given by the map $\delta F[f]$ such that for any $g \in B$ the following holds

$$
\delta F[f](g) = \int_M \ast L\cdot  g = F(g) \implies \delta F[f] = F\ \ \forall f\in B.
$$

**<u>Notation and Physics:</u>** In physics we often want something of the form $\frac{\delta F}{\delta f}$ that satisfies chain and product rule in order to call it a derivative. We can identify such an object in the following way. The functional derivative of $F$ by $f$ of a regular distribution $F$ is the function $\frac{\delta F}{\delta f}$ such that
$$
\delta F[f](g) = \int_M \ast \frac{\delta F}{\delta f} \cdot  g,
$$

for any $g \in B$. Now we are almost done and we can show some cool properties that are very reminiscent of derivatives in this notation. Before we do so however, it would be nice to generalize this non regular distributions. But thankfully we have already developed a machinery that does that almost automatically. 



## Examples in Physics

Most of the applications of variation calculus appear in physics. Let's see how to define some of the most common objects.

**<u>Definition:</u>** Let $(M,\Sigma,\mu)$ be some measure space with Lebesgue measure $\mu$, $B$ a Banach space and $\mathcal{L}:B\to \mathbb{R}$. Then an **action functional** is a function $S:B^M \to \mathbb{R}$ given for any $\gamma : M\to B$ by
$$
S(\gamma) = \int_M \mathcal{L \circ \gamma}\,  d\mu,
$$
 where we have used the Lebesgue integral. Additionally, $\mathcal{L}$ is called the **Lagrangian**. 

Here is some setup for using this formalism.

**<u>Proposition:</u>** Given a smooth manifold $M$ the set of sections $\Gamma^\infty(T^\ast M\otimes T^\ast M)$ is a Banach space.

***Proof:*** The set of such sections is the set where all the metrics live, so to effectively turn it into a Banach space, we need to find a norm on the following bundle $T^\ast M \otimes T^\ast M$. We define a norm on there in the form of a bundle metric, simply by taking a section of that bundle (such that it is symmetric, nondegenerate, and so on). 
$$
\begin{equation}\tag*{$\Box$}\end{equation}	
$$
Now we can define an action functional on that manifold as such.

**<u>Proposition:</u>** Given a smooth Manifold $M$ and a Lagrangian $\mathcal{L}:T^\ast M\otimes T^\ast M \to \mathbb{R}$ one can define the following action $S: \Gamma^\infty_\text{Sym}\left(T^\ast M \otimes T^\ast M  \right) \to \mathbb{R}$ for every $g \in \Gamma^\infty_\text{Sym}\left(T^\ast M \otimes T^\ast M  \right)$ 
$$
S(g) = \int_M \ast_g L\circ g.
$$
***Proof:*** We have shown that $S$ is a map of Banach spaces, and we know that smooth integration on a manifold defines a Lebesgue measure. 
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
 Now we are finally ready to define the stress energy tensor. 

**<u>Theorem:</u>** *(The definition of the stress energy tensor)* The functional differential of the action $S: \Gamma^\infty_\text{Sym}\left(T^\ast M \otimes T^\ast M  \right) \to \mathbb{R}$ above at $g\in \Gamma^\infty_\text{Sym}\left(T^\ast M \otimes T^\ast M  \right)$ can be expressed for all $\delta g \in \Gamma^\infty_\text{Sym}\left(T^\ast M \otimes T^\ast M  \right)$ as
$$
\delta S[g](\delta g) = \int_M \ast_g \iota_T \delta g,
$$
 where $T \in \Gamma^\infty_\text{Sym}\left(T M \otimes T M  \right)$ is a **stress energy tensor** (defined [here](../Projects/CFT/Free_Fields.md#Lagrangian-formalism)), and $\iota_T\delta g$ is the contraction of $\delta g$ by $T$ in components given by
$$
\iota_T\delta g = T_{\mu\nu}\delta g^{\mu\nu}.
$$
 

















