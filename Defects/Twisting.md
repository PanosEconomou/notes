# Twisting Adventure

*Twisted Hilbert space.* “Oh just calculate the twisted Hilbert space by this defect.” “It’s just boundary conditions.” “You forgot to account for the twist fields.” “The operator at the endpoint of a TDL is a twisted field.” I swear to god after the first 10 minutes of learning defects you are bombarded with phrases like these as if talking about twisting Hilbert spaces is something you learned in Quantum 1. 

Unlike most of the notes here, this chunk is meant to motivate the existence of twisted Hilbert spaces and use a constructive approach to obtain intuition and familiarity. The calculations here are rigorous (i.e. not handwavy except in the first section) but kept simple at the expense of generality. The point is to go through some constructive examples, and not to present a rigorous general framework, because there is no point chasing generality without a working understanding.

[toc]



# Creating States

We will start by exploring aspects of quantization of Conformal Field Theories. For us *quantization* will mean a way to obtain a the Hilbert space of a CFT using classical fields. Such a quantization could be the path integral formalism. Another could be canonical quantization. However, it is not necessarily the case that the Hilbert space of any CFT should be given by some quantization procedure, nor that different quantization procedures must give different Hilbert spaces. We will simply use it as a tool to build intuition and some basic examples from scratch.

## Space is a Circle

One of the things we so often encounter in CFT is that the fields live on a circle. Yet, the space we are used to working in, almost without questioning it, is always something like an infinite line, so what gives? The answer presented in the big yellow book and others is 

>  “To eliminate any infrared divergences, we compactify the space coordinate.”

To that I say “wtf?” Even if one doesn’t know about infrared divergences this sounds like “we do it on a circle because a line is harder.” This is honestly not far from what is actually happening, however the truth is backwards.

***Sidenote:*** An infrared divergence in QFT is encountering an expression that diverges for low energies. Classically the energy of a field is proportional to its momentum (squared) so we often call an IR divergence a quantity that diverges at small Fourier modes, i.e. low momenta. For example the lowest momentum you can have on a line is $0$ which corresponds to a field that is flat. If that field is nonzero, its integral diverges, which is an IR divergence. 

It is true that there are no IR divergences if we compactify space. Roughly the reason is that the Hamiltonian operator will always converge for small modes since be integrating them over a compact manifold. The power of this is that any efect in $\mathbb{R}$ (that doesn’t account for IR divergences which we wanted to get rid of anyway) can be obtained by studying the equivalent theory in $S^1$.

That last sentence is where the conformal part comes in. Notice that inside a circle there is a hidden line! One can extract it using conformal invariance. The map is the stereographic projection, which is a (kind of) conformal transformation! *pedantic sidenote: The true conformal transformation here is making the diameter of the circle larger while fixing one point as shown below.*

So in essence some of the correlation functions of the line are already in the set of correlation functions of the circle and can be extracted using some minimal manipulation. But more to the point, one can show that the ones that aren’t there are correlation functions that contain evidence of IR divergences.

All this is to say that the spacelike slices we will be using for quantization are all going to be circles. How we connect them is going to be non trivial, but for now, they all have to be circles. 



## What is the ground state?

This is an incredibly confusing question in Quantum Field Theory, but luckily it is more tractable in a Conformal one. One way to think of a ground state is some kind of “empty” state.

In principle the emptiest state you have the more symmetric it is as a configuration. So we would intuitively expect that the conformal vacuum is the maximally symmetric state of the theory. This can be made precise later by saying that it is a state of vanishing conformal weight. That is, it transforms trivially under conformal transformations. But since we haven’t developed this formalism yet, there is another definition we can pursue.



### Interlude: States from Euclidean Path Integrals

At its core a QFT is a machine that takes in a proxy of an experimental setup (that usually contains a kind of spacetime, some probes for the fields, data about how the fields are configured, etc.) and spits out a number which we interpret to be the correlation between the probes we have inserted. Schematically 
$$
\text{QFT}: \text{Spacetimes} \times  \text{Probes} \to \mathbb{C}.
$$
We usuallt assume that any spacetime has no boundary. But often the main idea is to split the spacetime at some spacelike slice, define a Hilbert space there, and then write the correlation functions as inner products of the states in the Hilbert space. In fact there is a general theorem (the aptly named Hilbert space reconstruction theorem) that says that if you have correlation functions satisfying things like “locality”, etc. then there is a separable Hilbert space that gives rise to them as inner products. 

Under this splitting though, we can rethink our $QFT$ map. We can define the map $Z$ that roughly takes in a manifold $\Sigma$, a set of probes/data $\Psi$ on that manifold, and then it spits out a state on the Hilbert space that lives on the boundary of the manifold $\mathbb{H}(\partial \Sigma)$
$$
Z(\Sigma, \Psi) \in \mathbb{H}(\partial \Sigma).
$$
All this is nice and fun in theory, but what happens in practice?

Wick (I think) observed that correlation functions can be analytically continued as functions that have a complex time coordinate. Not only that, but the analytic continuation is to literally plug in a complex time coordinate for in the path integral. This is not really relevant to show here, and to even make this statement in its full generality would be too involved. For our purposes though, this observation is enough to use the Path integral to define quantum states, aka the map $Z$. Here is how.

As we said our spacelike slice is $S^1$ so we want to define a Hilbert space on $S^1$. To do this, consider a 2 Dimensional manifold $\Sigma$ such that its boundary $\partial \Sigma = S^1$. Then if I give you an action, we better be able to find the largest set of manifolds that can accept it. In the case of the free boson this is relatively simple.

**<u>Definition:</u>** Let $(\Sigma,g)$ be a 2-dimensional Riemannian manifold and $\phi \in C^\infty(\Sigma)$ be a smooth function, then the **free scalar field Lagrangian** $\mathcal{L} : C^\infty(\Sigma) \to \Omega^2(\Sigma)$ is given by
$$
\mathcal{L}(\phi) = d\phi \wedge \ast d\phi.
$$
This is pretty general and it is defined on all orientable 2D manifolds. Not only that, check this out. 

**<u>Proposition:</u>** The free scalar field Lagrangian is Weyl invariant. 

***Proof:*** To show that we simply plug in a different metric $g' = e^f g$, where $f\in C^\infty(\Sigma)$. We notice that
$$
d\phi \wedge \ast' d\phi = \ast' g'^{-1}(d\phi,d\phi) = \ast  e^f e^{-f} g^{-1}(d\phi,d\phi) = d\phi \wedge\ast d\phi.
$$

$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$

So not only do we have a Lagrangian defined in a crap ton of manifolds, it is also conformally invariant! This is awesome. Now what we can do is defined an action. 

**<u>Definition:</u>** Let $(\Sigma,g)$ be a 2-dimensional Riemannian manifold and $\phi \in C^\infty(\Sigma)$ be a smooth function, then the **free scalar field action** $S(\Sigma, \phi)$ is given by 
$$
S(\Sigma, \phi) \coloneqq \int_{\Sigma} \mathcal{L}(\phi) = \int_\Sigma d\phi \wedge \ast d\phi.
$$
Now the question is what is a large enough set of manifolds and functions where this $S$ is well defined? The answer is roughly any manifold $\Sigma$ with boundary conditions where $d\phi$ vanishes sufficiently fast. Yet, we can be more precise. Clearly when it comes to the set of Riemann surfaces, then $S$ is defined there for any smooth $\phi$. But what happens once we move away from compactness? We need the dreaded physicist term “boundary conditions.” In other words, if I give you something like a cylinder you can still define an action on it as long as the field $\phi$ is such that it converges. Let’s call
$$
\Omega \coloneqq \{(\Sigma, \phi) \mid  S(\Sigma,\phi) \in \mathbb{R}\}.
$$
Also given a $\Sigma$ we can define the set of **fields** on that $\Sigma$ by $\Omega(\Sigma) \coloneqq \{\phi \mid (\Sigma,\phi) \in \Omega\}$. Now we have all we need to talk about the path integral. Given a field $\Sigma$ such that $\partial \Sigma = S^1$ as well as a measure $\mathcal{D}\phi$ in $\Omega(\Sigma)$ we define a vector in $\mathbb{H}(S^1)$ as a linear map of the form $\Phi :C^\infty(\partial \Sigma) \to \mathbb{C}$ such that for any $\psi \in C^\infty(S^1)$
$$
\Phi(\psi)\coloneqq Z(\Sigma, \mathcal{D\phi})(\psi) = \int_{\Omega(\Sigma,\psi)} \mathcal{D}\phi\, e^{-S(\Sigma,\phi)},
$$
where $\Omega(\Sigma, \psi) \coloneqq \{\phi \in \Omega(\phi) \mid \left.\phi\right|_{\partial \Sigma} = \psi\}$. So heuristically, a state is a way to measure the number of field configurations that end in a specific configuration on the boundary. Different states might correspond to different measures. One subtle point is that it is not necessary that all the states are given by some path integral, but as we will see, when that prescription is available, we construct it such that at least a dense set of them is given by that. 



### Vacuum Using Path Integrals

After this large digression we can finally start thinking about our vacuum state. We have said that the intuition we want for our vacuum state is an “empty state.” We also said that this should correspond to some version of maximally symmetric. Now we can start being less handwavy. 

We have seen before that this would corredpond to a finding a measure $\mathcal{D}\phi$ that must be conformally invariant (since the state must be super-duper-symmetric). Unfortunately this is where our luck ends. It is **hard** to define such a measure. In a perfect world one would like to give enough conditions such as “locality, conformal invariance, convergence, etc.” and then have some version of measure theory spit out a unique $\mathcal{D}\phi$. Unfortunately, in almost all cases we can’t even have conformal invariance! We need to start using regulators, cutoffs, discretizations, or other regularization schemes that are not guaranteed to fix a unique measure. So bummer. 

> That said, there are theories where the measure does in fact become so crazily constrained that we get the closest thing to a “unique vacuum measure.” We will see the example of the free fermion in the next section where we will work everything out in detail. So, for now, assume that we have a mechanism for choosing it, and in the next section we will actually write it down. 

Yet, picking a measure is only part of the story. We will assume that this measure is local, conformally covariant in the sense that it is invariant only up to terms that depend on the conformal anomaly (which we have explored [here](../Quantum_Fields/Virasoro_Algebra.md)), and well defined on the manifolds we will consider. If we impose that the vacuum is $\mathfrak{sl}(2,\mathbb{C})$ invariant, which is the Witt algebra, the one generated by rigid conformal transformations, we will see that we can create a measure where there is exactly one such state. In that case we will define that state to be
$$
\omega \coloneqq Z(D^2) = \int_{\Omega(D^2,\cdot)} \mathcal{D}\phi \, e^{-S(D^2,\phi)} \in \mathbb{H}(S^1).
$$
In other words, we will intuitively use as the vacuum the state corresponding to the “empty” unit disk. We will see this in the example of the free Fermion, but there will also be a more rigorous follow up as to why we should always be able to do this. 



## State Operator Correspondence

Now let's assume that we have a unique vacuum $\omega$. We will use conformalness to show one of the most fantastic results which is known as the operator state correspondence. First of all, in any QFT if we know the set of operators we pick an operator $\hat \chi$ and create corresponding states by
$$
\chi = Z(D^2, \hat \chi) = \int_{\Omega(D^2,\chi)} \mathcal{D}\phi\, \hat \chi \cdot e^{-S(D^2,\phi)}.
$$
Effectively we are modifying the integration measure of the CFT by "inserting" the operator to it. In physics we call such a measure modification an operator insertion.

The nontrivial result of conformal magic is that while every operator corresponds to a state, this works the other way around. Here is how we can use states to construct local operators. Let's first consider if we have a state $\chi \in \mathbb{H}(S^1)$ constructed the way we did above, how can we find the operator $\hat \chi$ we used to generate it. 

One idea would be to find the operator $\hat \chi(0)$ which would be the operator that we need to multiply the vacuum state with in order to obtain the state $\chi$. In principle, one can define vacuum states for an arbitrary disk $D^2_\epsilon \subset D^2$ of radius $0<\epsilon < 1$. Because of conformal invariance we can see something cool. Since $D$ and $D_\epsilon$ are isomorphic, so are the sets of fields we can add define on top of them i.e. $\Omega(D) \cong \Omega(D_\epsilon)$. There is an isomorphism which is a conformal map $f: D_\epsilon \to D$ such that any $\phi \in \Omega(D)$ can be be mapped bijectively to $f^\ast \phi \in \Omega(D_\epsilon)$. However, notice that the action $S(D,\phi) = S(D_\epsilon, f^\ast \phi)$ is conformally invariant. So effectively the vacuum state at any radius remains unchanged on how it acts on fields of the circle.

This means that we can always define a vacuum state on any disk. Now we can see the following identity form the properties of $Z$. Namely
$$
Z(D^2,\chi) = Z(D^2\setminus D_\epsilon^2,\chi)\, Z(D_\epsilon^2) = Z(D^2\setminus D_\epsilon^2,\chi)\, \omega.
$$
In this case $Z(D^2\setminus D_\epsilon^2,\chi) : \mathbb{H}(\partial D_\epsilon^2) \to \mathbb{H}(\partial D_\epsilon)$ is an operator of Hilbert spaces. What we can do, is define symbolically by taking $\hat \chi(0)$ by taking $\epsilon \to 0$. 
$$
\hat \chi(0) = \lim_{\epsilon \to 0} \int_{\Omega(D_\epsilon,\cdot)} \mathcal{D}\phi\, \hat \chi \cdot e^{-S(D_\epsilon,\phi)},
$$
so we obtain the defining identity
$$
\chi = \hat \chi (0)\, \omega.
$$
By the way, we often write this as
$$
\chi = \lim_{z\to 0} \hat \chi(z) \, \omega
$$


Using a translation operator $U(x)$ for some $x \in \mathbb{C}$ we can define the operator $\chi$ at any point like so
$$
\hat \chi (x) = U(x)\, \chi(0)\, U^\dagger (x).
$$
This exercise was almost tautological. What is fantastic in a CFT is that it is possible to play this game for a dense number of states! In other words, if we know the operators we know the states, and if we know the states we know the operators. The main ingredient we need to show this is this.

**<u>Theorem:</u>** Consider the set of primary fields and descendants $\mathcal{O}$. If their asymptotic states, namely states of the form
$$
\psi = \lim_{z\to 0} \hat \psi(z)\, \omega,
$$
 where $\hat \psi \in \mathcal{O}$, generate a dense subspace $V$ in $\mathbb{H}(S^1)$, then for every state $\alpha \in V$ there exists a local operator $\hat \alpha \in \mathcal{O}$ such that
$$
\alpha = \lim_{z\to 0} \hat \alpha(z)\, \omega.
$$
This might seem tautological at first, but it is quite subtle. The subtlety lies in the fact that a random state in that dense subspace is a (possibly infinite) linear combination of descendant asymptotic states. The fact that we can take the limit out is the significant result. This is a statement about how well behaved the fields in a conformal field theory are. 



# Untwisted Free Fermion

Ok enough with wishy washy stuff. Time to do a detailed, rigorous example of a nice CFT. The one for a free fermion. As we have motivated above, we want to consider a free fermion living on a circle. This introduces the first subtlety. While on a line, there is only one way to write down a fermion (principal bundles on $\mathbb{R}^n$ are all trivial) on the circle there are more! So before we even start with a quantization procedure let's first examine the classical physics of a fermion on a circle.

> **Note:** This section (except the last subsection) is not strictly needed in order to understand how to obtain a Hilbert space from a path integral in general. Its purpose is to define the simplest path integral that we know of so it dives into the nuances of fermionic path integrals and spin structures. With a working knowledge of the Majorana path integral quantization in 2D this section can be skipped. It is still fun and satisfying to work out a full description of a QFT. We don't often have the luxury of working with one. 

## Spinors in 2D

What we want to build up to is a path integral prescription that we are able to define on any $2$ dimensional Riemannian manifold. One subtlety that we have to consider is that there might be multiple inequivalent ways to define a spinor (and by extension a fermion) on different manifolds. We need to find a way to take them into account. 

Let's start by asking what is a spinor a bit more carefully. In physics a **Dirac spinor** is a vector in the defining representation of $\mathbb{C}\text{l}(n)$ where $n$ is the dimension of spacetime. This is useless, so let's be more careful. For $n=2$ we have that the complex Clifford algebra is $\mathbb{C}\text{l}(2) \cong  \text{End}(\mathbb{C}^2) = \text{GL}(2,\mathbb{C})$. So in a very basic sense a Dirac spinor is a vector in $\mathbb{C}^2$ where a vector in $(\mathbb{R}^2,\delta)$ can act on it through the gamma  matrices. 

Let's be a bit more concrete.

**<u>Definition:</u>** A 2-dimensional **complex Dirac spinor** is an element in $\Delta = \mathbb{C}^2$ which carries the following action of $\mathbb{R}^2$ called the **Clifford multiplication**
$$
\begin{align*}
\gamma : \mathbb{R}^2 \times \Delta &\to \Delta \\
(v,\psi)&\mapsto \gamma(v) \psi,
\end{align*}
$$
where $\{\gamma(v),\gamma(w)\} = 2v\cdot w\, \mathbb{1}$, and $\gamma$ is a linear map to $\text{GL}(\mathbb{C}^2)$. We can pick the Clifford representation to be
$$
\begin{align*}
\gamma(e_0) = \begin{pmatrix} 0 & 1 \\ 1 & 0\end{pmatrix} && \gamma(e_1) = \begin{pmatrix} 0 & -i \\ i & 0\end{pmatrix}.
\end{align*}
$$
Now we can write the chirality element as element as
$$
\gamma^2 = -i\gamma(e_0) \gamma(e_1) = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}.
$$
The next thing we need to work out is the orthochronous spin group.  The orthochronous spin group is the set of invertible elements of the Clifford generated by even combinations of elements of each sector. Here a cool result.

**<u>Lemma:</u>** The spin group $\text{spin}(2)$ is isomorphic to $\text{U}(1)$.

***Proof:*** The definition of $\text{spin}(2)$ group is that each element is a product of even number of Clifford matrices associated to vectors $v \in \mathbb{R}^2$ such that $v\cdot v= 1$. Now since the vectors only have two components we notice that if two vectors on the circle $v,w$ are an angle $\theta$ apart, then 
$$
\begin{align*}
[\gamma(v),\gamma(w)] = 2i v \times w \, \gamma^2 = 2i \sin \theta \, \gamma^2.
\end{align*}
$$
In addition we know that by definition
$$
\{\gamma(v),\gamma(w)\} = 2 \cos\theta.
$$
Therefore we can solve that
$$
\gamma(v) \gamma(w) = \cos\theta + i \sin \theta\,  \gamma^2 = e^{i \theta \gamma^2},
$$
where $i\gamma^2$ squares to negative 1. 
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
This simplifies our life so much because it simplifies what our spin structure can be. But for now let's check something about double covers. We know that the spin group must be the double cover of the group of rotations $SO(2)$ let's make sure.

**<u>Theorem:</u>** There exists a double covering map $\lambda: \text{spin}(2) \to \text{SO}(2)$.

***Proof:*** The squaring map $f(z) = z^2$ is a double cover of the form $f: U(1) \to U(1)$, since both groups are isomorphic to $U(1)$ we are done. 
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
However we can do better! We can explicitly find the map. In fact let's do it now. We know that there is a canonical action of the $\text{spin}(2)$ group on $\mathbb{R}^2$ such that for any vector $v \in \mathbb{R}^2$ and any $u = e^{i\theta \gamma^2}$ 
$$
u\cdot v = (v_1 \cos 2\theta + v_2 \sin 2\theta)e_1 - (v_1 \sin 2\theta - v_2 \cos 2\theta)e_2.
$$
This may look unmotivated, but here are a couple of other ways to see this. We can write this as
$$
u \cdot v = (\cos 2\theta  - i\sin 2\theta\ \gamma_1 ) \, v.
$$
Yet this still looks unmotivated. Here is the true place from where this came from. We can first define the left inverse of $\gamma$ which is the map that satisfies $\bar \gamma (\gamma(e_i)) = e_i$, essentially takes the gamma matrices to the original vector they correspond to. Then we have that
$$
u\cdot v = \bar \gamma \left( u \gamma(v) u^{-1} \right).
$$
This form will be useful in what we want to prove later. But the point is, we can now use this group action to define the map  $\lambda: \text{spin}(2) \to \text{SO}(2)$ such that for any vector $v \in \mathbb{R}^2$
$$
\lambda(u) v = u \cdot v = \bar \gamma \left( u \gamma(v) u^{-1} \right).
$$
Let's show that The fact that this is a double cover comes directly from $(\cos 2\theta  - i\sin 2\theta\ \gamma_1 ) \, v$. Notice that since $-i\gamma_1 = R(\frac{\pi}{2})$ is the $90^\circ$ rotation and we already know that every rotation in $\mathbb{R}^2$ can be written as
$$
\cos\alpha + \sin \alpha \, R\left( \frac{\pi}{2} \right), 
$$
we are done!

**<u>Corollary:</u>** Consider the following group isomorphisms $\alpha : \text{spin}(2) \to U(1)$ and $\beta : \text{SO}(2) \to U(1)$ where $\alpha(\gamma^2) = i$ and $\beta(R(\frac{\pi}{2})) = i$. Then $\bar \lambda(z) \coloneqq \beta \circ \lambda \circ \alpha^{-1} (z) = z^2$. In other words, the following diagram commutes.
$$
\xymatrix{
\text{spin}(2) \ar[d]^\alpha \ar[r]^\lambda & \text{SO}(2)\ar[d]^\beta \\
\text{U}(1)\ar[r]^{z^2} & \text{U}(1)
}
$$
In other other words, $\lambda$ is the trivial double cover of $U(1)$! 



## Spin Structures in 2D

We are not just interested in isolated spinors! We are interested in spinor fields over 2D manifolds. The whole point of doing this is noticing since the tangent space of any 2D manifold is $\mathbb{R}^2$ there is a natural action of the vector fields on the manifold to the kind of spinors we can add them. We want to create our spinor bundle such that it respects this. The way to do this is by picking a spin structure. Let's recall an abstract definition first and then we will make it progressively more tangible.

### Definitions

**<u>Definition:</u>** Let $\Sigma$ be a 2 dimensional Riemannian manifold. Then a **spin structure** on $\Sigma$ is a a principal $\text{spin}(2) \cong U(1)$ bundle $\pi: \text{spin}(\Sigma) \to \Sigma$ with a double cover of principal bundles $\Lambda : \text{spin}(\Sigma) \to \text{SO}(\Sigma)$, where $\bar \pi : \text{SO}(\Sigma) \to \Sigma$ is the $\text{SO}(2)$ reduction of the frame bundle of $\Sigma$ such that the following diagram commutes.
$$
\xymatrix{
\text{spin}(\Sigma) \times \text{spin}(2) \ar@{.>}[r]\ar[dd]^{\Lambda \times \lambda} & \text{spin}(\Sigma) \ar[dd]^\Lambda \ar[dr]^\pi \\
& & \Sigma\\
\text{SO}(\Sigma) \times \text{SO}(2)  \ar@{.>}[r]  & \text{SO}(\Sigma)\ar[ur]_{\bar \pi}
}
$$
where the dotted arrows are the principal actions of the structure groups to their bundles.

This certainly needs unpacking. However, what it is saying is that the spin structure is a double cover of the $\text{SO}(2)$ bundle of our space such that the action of the $\text{spin}$ group is compatible with the double cover. 

The first level of simplification here is that all of these objects are all $U(1)$ bundles since $\text{SO}(2) \cong \text{spin}(2) \cong \text{U}(1)$. So in some loose sense defining a spin structure is related to the question of writing down a theory of electromagnetism on $\Sigma$. However, what we are interested as of now is asking, how many different (i.e. not bundle isomorphic) bundles we can have with structure group $U(1)$ on $\Sigma$.



### Counting the Spin Structures

Well, if $\Sigma \subset \mathbb{R}^2$ then we know already that there is only one principal bundle we can have, because all $\mathbb{R}^n$ principal bundles are trivial. But what happens in more complicated spaces?

We are in luck again, check out the following lemma.

**<u>Lemma:</u>** Any two Riemann surfaces are conformally related iff they have the same genus. 

This means that if two Riemann surfaces have the same genus, then there exists a conformal diffeomorphism between them! This is fantastic news as long as the spin structure is invariant under conformal transformations. 

**<u>Lemma:</u>** A diffeomorphism of manifolds induces a $\text{spin}(2)$-equivariant bundle isomorphism of spin structures.

This says that if we have two manifolds that are diffeomorphic and one has a spin structure, then we can define a spin structure on the diffeomorphic manifold and vice versa. So diffeomorphic manifolds admit the same spin structures. If there was a structure on one that wasn't on the other, then their diffeomorphism would induce it. 

**<u>Corollary:</u>** The number of admissible spin structures on a Riemann surface only depends on the genus.

WOW! AMAZING! Now let's do better than that and try to solve it. There is this theorem that I will not prove because it uses some super specific characteristic classes of smooth manifolds, but it will be useful for this.

**<u>Theorem:</u>** All orientable Riemannian manifolds $M$ admit a spin structure. There is a bijection between the set of isomorphism classes of spin structures and $H^1(M;\mathbb{Z}_2)$.

***Proof(esque):*** The first part of the theorem is originally stated as: A manifold admits a spin structure of its second Stiefel-Whitney class vanishes, and all orientable Riemannian manifolds have that property. The second part, which is the most interesting for our purposes says that that cohomology group numbers the spin structures. The way to start showing this is to realize that the spin group (being a double cover) is a central extension of $SO$ like so
$$
\xymatrix{
\mathbb{Z}_2\ar[r] & \text{spin}(n)\ar[r]^\lambda & \text{SO}(n)
}
$$
where the left arrow in our case maps $\mathbb{Z}_2$ to the poles of $U(1)$. This means that any two principal bundles must "differ" by a $\mathbb{Z}_2$ bundle which boils down to calculating (up to principal bundle isomorphism) what are the kind of principal $\mathbb{Z}_2$ bundles we can add on $M$, but they are classified by the number of nontrivial singular $\mathbb{Z}_2$ cycles on $M$ which is given by $H^1(M;\mathbb{Z}_2)$.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
As a brief aside to $\mathbb{Z}_2$ valued cohomology groups since there is no such thing as a $\mathbb{Z}_2$ valued form, we can't use de Rham cohomology directly. For our purposes here it suffices to say that
$$
H^1(M,\mathbb{Z}_2) \cong \text{Hom}(\pi_1(M),\mathbb{Z}_2).
$$
With this as our definition we can see something cool. 

**<u>Lemma:</u>** Let $M$ be a genus $g$ compact Riemann surface. Then $H^1(M,\mathbb{Z}_2) = (\mathbb{Z}_2)^{2g}$.

***Proof:*** It is well known that for such surfaces
$$
\pi_1(M) = \langle a_1,b_1,a_2,b_2,\cdots, a_g,b_g\mid [a_1,b_1][a_2,b_2]\cdots[a_g,b_g]\rangle.
$$
This is proved using the Seifert-Van Kampen theorem on the polygonal representation of $M$. Then we need to find the homomorphisms between that and $Z_2$. There trick here is to realize that
$$
\text{Hom}(G,\mathbb{Z}_2) = \text{Hom}(G^{\text{ab}},\mathbb{Z}_2),
$$
where $G^\text{ab}$ is the abelianization of the group $G$. This is true because the preimage of any homomorphism of $G\to \mathbb{Z}_2$ belongs to the Abelian part of $G$. However, the abelianization of $\pi_1(M)$ is simply $\mathbb{Z}^{2g}$ since we impose commutation relations for all pairs of $[a_i,b_i]$. Therefore we conclude that
$$
H^1(M,\mathbb{Z}_2) = \text{Hom}(\mathbb{Z}^{2g},\mathbb{Z}_2) = (\mathbb{Z}_2)^{2g},
$$
 since for every such homomorphism we need to make the choice of putting the generator to $0$ or $1$.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
This is nice! But we are not done, because the cylinder is not a **compact** Riemann surface! So let's try to work this out.

**<u>Lemma:</u>** The disk with $g$ holes $D^2_g$ has $H^1(D_g^2,\mathbb{Z}_2) = (\mathbb{Z}_2)^g$.

***Proof:*** The disk with $g$ holes is homotopic to a wedge sum of $g$ circles, therefore its fundamental group is the free group of $g$ elements, and its abelianization is $\mathbb{Z}^g$. Using the logic of the previous proof the cohomology group is then $(\mathbb{Z}_2)^g$.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$


### Spin Structures for a Cylinder

So while we are expecting that a disk has trivial cohomology group, therefore only 1 available spin structure, the cylinder has 2 available spin structures! In physics we call the two **Ramond** and **Nuveu-Scwartz** boundary conditions. Let's derive them now, and see where the name boundary conditions comes from.

Assume that we have a spin structure on our surface $\Sigma$. Then, we still haven't defined spinor fields. These are formally sections of associated vector bundles to the spin structure under the Dirac spinor representation. Before we even do this, here a super nice property of spin bundles.

**<u>Lemma:</u>** Let $\text{spin}(\Sigma)$ be a spin structure on a Riemann surface $\Sigma$ with covering map $\Lambda: \text{spin}(\Sigma) \to \text{SO}(\Sigma)$. Then given any contractible char $U \subset \Sigma$ and an associated vielbein $e \in \Gamma(\text{SO}(\Sigma)_U)$. Then there are precisely two local sections $\epsilon_{\pm} \in \Gamma(\text{spin}(\Sigma)_U)$ such that $\Lambda \circ \epsilon_\pm = e$.

***Proof:*** We can think of the vielbein $e$ as placing $U$ into $\text{SO}(\Sigma)$. Then we knoe that $\text{spin}(\Sigma)$ is the double cover, so we should be able to find $e(U)$ precisely twice in there under the covering map $\Lambda$. Each possible disconnected sheet defines a section of $\text{spin}(\Sigma)$ over $\Sigma$.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
This means, that if we have chosen a vielbein (a set of orthogonal local coordinate vector fields on $\Sigma$) there is precisely two gauges that we can use to describe our spinor fields that are compatible with our vielbein. Another way to read the previous lemma is that given a choice of gauge in our spin structure no only we can associate a unique vielbein to it, but also we can find it's "opposite" gauge. Let's be more specific.

**<u>Definition:</u>** Given a spin structure $\text{spin}(\Sigma)$ over a Riemann surface $\Sigma$ and the dirac spinor representation $\rho: \text{spin}(2) \to \mathbb{C}^2$ a **spinor bundle** $S(\Sigma)$ is given by the associated complex vector bundle (or $\rho$-twisted bundle)
$$
\text{S}(\Sigma) \coloneqq \text{spin}(\Sigma) \times_{\rho} \mathbb{C}^2.
$$
Sections of $\text{S}(\Sigma)$ are called **spinor fields**.

Notice though that in the setting that we are all these bundles are $U(1)$ bundles! So things are not as dire as we would have expected. Also remember that $\gamma$ matrices are defined with respect to a vielbein $e \in \Gamma(\text{SO}(\Sigma))$ which is equal to $\Lambda \circ \epsilon$ for some gauge $\epsilon \in \Gamma(\text{spin}(\Sigma))$. 

To be more precise, let $\psi \in \Gamma(S(\Sigma))$ be a spinor field, $U\subset \Sigma$ be convex chart, and $\epsilon_{\pm}$ be gauges associated to a vielbein $e$ on $U$. Then we can write a local section in the trivialization as
$$
\psi = [\epsilon_{\pm},\psi_{\pm}],
$$
for some maps $\psi_{\pm} : U \to \mathbb{C}^2$ (which btw is what we call spinors in physics, but here we will call local spinor fields). Now let's see the Clifford multiplication. Let $v \in \text{SO}(\Sigma)$, then locally we can write it as
$$
v  = [e, v_e] = [\Lambda(\epsilon_{\pm}),v_e ],
$$
 where $v_e \in \mathbb{R}^2$. Therefore we can write the Clifford multiplication as
$$
v\cdot \psi = [\Lambda(\epsilon_{\pm}),v_e] \cdot [\epsilon_{\pm},\psi_{\pm}] = [\epsilon_{\pm},\gamma(v_e) \cdot \psi_{\pm}].
$$
It follows that $e_i \cdot \psi = [\epsilon_{\pm}, \gamma(e_i) \cdot \psi_{\pm}]$.

**<u>Proposition:</u>** These maps satisfy $\psi_+ = - \psi_-$.

***Proof:*** We know that $\psi_\pm$ must satisfy that for any two points $p_{\pm} \in \text{spin}(\Sigma)$ given by $\epsilon_{\pm}(x)$ for some $x \in \Sigma$ then 
$$
\psi(x)= [\epsilon_{\pm}(x),\psi_{\pm}(x)].
$$
We also know that there must be a map between $\epsilon_+(x)$ and $\epsilon_-(x)$. This can be given by an element of $g \in \text{spin}(2)$ such that $g \cdot \epsilon_{+}(x) = \epsilon_{-}(x)$. Therefore we can write 
$$
\psi(x) = [\epsilon_+(x),\psi_{+}(x)] = [g^{-1}\cdot \epsilon_-(x),\psi_{+}] = [\epsilon_{-}(x),g \cdot \psi_{+}(x)].
$$
However we know that $[\epsilon_{-}(x), \psi_-(x)] = \psi(x)$. Therefore we have that
$$
g\cdot \psi_+(x) = \psi_{-}(x).
$$
Now let's find $g$. We know that $\lambda(g) = 1$ since $\lambda$ is a homomorphism and $\Lambda\circ \epsilon_{+} = \Lambda \circ \epsilon_{-}$. So what should the preimage be? We can now use the map directly and find that $2\theta = 2\pi k$ for some $k\in \mathbb{\mathbb{Z}}$ so without loss of generality we find that $g \in \{1,-1 = e^{i \pi \gamma^2}\}$. However, since $\Lambda$ is forced to be a double cover, $\epsilon_+(x) \neq \epsilon_-(x)$ so the only possible answer is $g = -1 \in \text{spin}(2)$. Notice that this would be true for any dimension. 
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
Ok, so what now? Our goal is to try and find a way to systematically obtain the possible spin structures we can add on a Riemann surface. To motivate this, let's study the possible spin structures on $S^1 \times \mathbb{R}$. From our classification we are expecting two, one of which is trivial.

**<u>Theorem:</u>** The two inequivalent (up to spin structure isomorphism) spin structures on $S^1 \times \mathbb{R}$ are given by $(\Lambda_{\pm}, U(1) \times(S^1 \times \mathbb{R}))$ where
$$
\begin{align*}
\Lambda_{\pm} : U(1) \times(S^1 \times \mathbb{R}) &\to U(1) \times(S^1 \times \mathbb{R})\\
\end{align*}
$$
are defined for any $(z,w,x) \in U(1)\times(S^1 \times \mathbb{R})$ as
$$
\begin{align*}
\Lambda_+(z,w,x) = (z^2,w,x) && \Lambda_-(z,w,x) = (z^2 w,w,x).
\end{align*}
$$
***Proof:*** First of all lets notice that these two are indeed spin structures. One way to prove this is to guess them and then show that under spin structure isomorphism they are inequivalent. So since we have two inequivalent ones we have found them all. Below is a more constructive proof that avoids using that fact (since we didn't actually prove it before). 

**Step 1:** *(There is a unique oriented frame bundle)* We know that the spin structure is a double cover of the oriented frame bundle of the cylinder. But since we can find a global vielbein the cylinder is parallelizable which means that there frame bundle is unique. Now we know that for each such vielbein.

**Step 2:** *(Any $U(1)$ principal bundle on $S^1 \times \mathbb{R}$ is trivial)* 

Notice that there is a global trivialization of $\text{SO}(S^1 \times \mathbb{R})$, and since $SO(2) \cong U(1)$ this means that $\text{SO}(S^1 \times \mathbb{R}) \cong U(1) \times S^1 \times \mathbb{R}$. Since also $\text{spin}(2) \cong U(1)$ we can find a bundle isomorphism between $\text{spin}(S^1 \times \mathbb{R})$ and $\text{SO}(S^1 \times \mathbb{R})$, which means that the spin structure is trivial as a principal $U(1)$ bundle.

**Step 3:** *(Spin structure map is a map from the base space to the fiber up to diffeomorphism)* 

Using the axioms of the spin structure we must be able to find a map $\Lambda$ such that the following commutes
$$
\xymatrix{
(U(1) \times S^1 \times \mathbb{R}) \times U(1)\ar[r]^-{1\times \alpha}\ar[d]^{\bar \Lambda \times z^2} & (U(1) \times S^1 \times \mathbb{R}) \times \text{spin}(2)\ar@{.>}[r]\ar[d]^{\bar \Lambda \times \lambda} & U(1) \times S^1 \times \mathbb{R}\ar[d]^{\bar \Lambda}\\
(U(1)\times S^1 \times \mathbb{R}) \times U(1)\ar[r]^-{1\times \beta} & (U(1) \times S^1 \times \mathbb{R}) \times \text{SO}(2)\ar@{.>}[r] & U(1) \times S^1 \times \mathbb{R} \\
}
$$
I fully acknowledge that this is overcomplicated, in 2 steps it will simplify a lot. In other words, what this diagram implies is that we the bundle double cover $\Lambda : U(1) \times S^1 \times \mathbb{R} \to U(1) \times S^1 \times \mathbb{R}$ must obey the property that for any $(z,w,x) \in U(1) \times S^1 \times \mathbb{R}$
$$
\Lambda(z,w,x) = z^2 \cdot \Lambda(1,w,x).
$$
What is nice is that the map $\Lambda$ is completely defined by its restriction on $\{1\}\times S^1 \times \mathbb{R}$. By the definition of a bundle automorphism,  there must exist a diffeomorphism $f: S^1 \times \mathbb{R} \to S^1 \times \mathbb{R}$ such that
$$
f\circ \text{pr}_{S^1 \times \mathbb{R}} = \text{pr}_{S^1 \times \mathbb{R}} \circ \Lambda.
$$
So up to diffeomorphism of the base space all we are really interested in classifying are the smooth functions $g \coloneqq \text{pr}_{U(1)} \circ \bar \Lambda : S^1 \times \mathbb{R}\to U(1) $. 

**Step 4:** *(Constraining using Homotopy)*

Now notice that if two such maps are equivalent up to homeomorphism, then they must be equivalent up to homotopy. In other words given a diffeomorphism of the base space $f$, the maps $g\circ f$ and $g$ are homotopic. Therefore we can first classify the maps $g$ up to homotopy. But since $S^1 \times \mathbb{R}\sim S^1$ is homotopy equivalent to the circle, we have restricted the kind of maps to the maps from $S^1 \to S^1$ which we know are classified by $\mathbb{Z}$ as $\phi_k(z) = z^k$ for some $k \in \mathbb{Z}$. Now we need to restrict more to find the diffeomorphism classes. As a result any inequivalent spin structure is of the form $\Lambda_k : U(1) \times S^1 \times \mathbb{R} \to U(1) \times S^1 \times \mathbb{R}$
$$
\Lambda_k(z,w,x) = (z^2w^k,w,x).
$$
**Step 5:** *(Constraining using Dehn twists)*

It might seem that we have completely constrained our spin structures, but we haven't considered all possible spin structure isomorphisms. We use a similar argument to the one above to consider bundle automorphisms. This time we find that up to diffeomorphism we only need to consider the maps
$$
f^n(z,w,x) = (zw^n,w,x).
$$
The logic is identical but now we restrict ourselves to maps of the form $S^1 \times S^1 \to S^1$ such that under composition of $\text{pr}_2$ they are identity. Notice two spin structures $\Lambda,\Lambda'$ are isomorphic if there is a principal bundle isomorphism $\phi$ such that   $\Lambda' = \Lambda \circ \phi$. Therefore since $f^n$ for some $n \in \mathbb{Z}$ is a bundle isomorphism we can use repeated Dehn twists to find equivalences between $\Lambda_k$. In other words $\Lambda_k \cong \Lambda_l$ iff $\Lambda_k = \Lambda_l \circ f^n$ for some $n\in \mathbb{Z}$. Now we can calculate
$$
\Lambda_l \circ f^n (z,w,x) = ((zw^n)^{2}w^l,w,x) = (z^2 w^{l + 2n},w,x).
$$
We have finally found our $\mathbb{Z}_2$ grading! We have that $\Lambda_{k} \cong \Lambda_{l \text{ mod } 2}$, which finally fully classifies our spin structures. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$


**<u>Definition:</u>** The spin structure $\Lambda_+$ is known as the **Ramond boundary condition** while the spin structure $\Lambda_-$ is known as the **Nuveu-Scwartz boundary condition**.

The previous theorem simply filled in the details of physics textbooks. We can restate the above result in terms of the spin holonomy on the Dirac spinor bundle.

To do this recall the following definition.

**<u>Definition:</u>** Given a spinor bundle $S(\Sigma)$ over a Riemann surface $\Sigma$ associated to a spin structure $\text{spin}(\Sigma)$, the **canonical spin connection** $\nabla: \Gamma S(\Sigma) \to \Omega^1(\Sigma)\otimes  \Gamma S(\Sigma)$ such that for any local section $\psi = [\epsilon,\hat \psi]$, $\nabla \psi = [\epsilon, \nabla \hat \psi]$ where
$$
\nabla \hat \psi = d\hat \psi + (\epsilon^\ast A_S) \cdot \hat \psi
$$
 where $A_S \in \Omega^1(\text{spin}(\Sigma),\mathfrak{spin}(2))$ is the spin connection defined by
$$
A_S = (\lambda_\ast)^{-1}\circ (\Lambda^\ast A),
$$
where $A$ is the Levi-Civita connection 1-form of $\Sigma$.

Phew! This is a lot, but what is particularly nice on the cylinder is that it is flat, so $A = 0$ hehe. In that case, the spin connection is the literal exterior derivative, which is at least nice.



**<u>Proposition:</u>** For any spinor field $\psi \in \Gamma S(S^1 \times \mathbb{R})$ and any simple nontrivial loop $\gamma$ on the cylinder we have that 
$$
P_\gamma \psi = \begin{cases}
\psi & \text{in Ramond structure}\\
-\psi & \text{in Neveu - Schwartz structure}
\end{cases}
$$
where $P_\gamma$ is the parallel transport along $\gamma$ with respect to the spin connection.

***Proof:*** Let's pick $S^1\times \{0\}$ to be our simple loop $\gamma$, anyway the holonomy in invariant under the choice of loop, and consider a flat lift $e$ of $\gamma$ on the frame bundle. Then given a spin structure, we can associate a local gauge $\epsilon$ such that $\Lambda \circ \epsilon = e$. Then the parallel transport along $\gamma$ is given by
$$
P_{\gamma}\psi = [\epsilon(\gamma(1)), \psi_\epsilon (\gamma(0))] = [\epsilon (\gamma(0)), \epsilon(\gamma(0))\epsilon(\gamma(1))^{-1} \psi_{\epsilon}(\gamma(0))]
$$
Now since $e$ is a flat lift we have that in the trivialization $e\circ \gamma = \alpha \in U(1)$. Then under the Ramond structure we have that $\epsilon = \pm \sqrt{e} = \pm \sqrt{\alpha}$. Here we see that $\epsilon(\gamma(0))\epsilon(\gamma(1))^{-1} = 1$ which proves the first part. for the other one we see that $\epsilon \circ \gamma = (\alpha \gamma)^{1/2} $ for some $\alpha \in U(1)$, where $\gamma(t) = e^{2\pi i t}$. Now what we notice is that
$$
\epsilon(\gamma(0))\epsilon(\gamma(1))^{-1} = \lim_{t \to 1} \gamma(t)^{\frac{1}{2}} = -1.
$$
The fact that the section $[\epsilon, - \psi_{\epsilon}] = -\psi$ is shown using the quotient construction of the associated vector bundle, but I will not do it explicitly because COME ON! This proves the second part.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

Let's generalize a bit. What happens in arbitrary Riemann surfaces? Well what we saw was that in 2D the classification basically boiled down to uncovering two boundary conditions per non-contractible cycle. In fact this makes sense with our original statement. We said that the spin structures are classified by
$$
\text{H}^1(\Sigma; \mathbb{Z}_2) \cong \text{Hom}(\pi_1(\Sigma),\mathbb{Z}_2).
$$
When we see this we are like: wait a second! What this group classifies is all the ways you can take the noncontractible cycles of $\Sigma$ and label them with a $\pm 1$. That $\pm 1$ is the holonomy of the spin connection corresponding to that spin structure! So in essence we can rephrase our classification of spin structures to a statement about boundary conditions of the fermion fields around non-contractible cycles using the method above. 



## A Path Integral for Free Fermions

Wow this was so much work, but what we have done is pretty remarkable. We have not only found a way to consistently describe all the possible ways we can have a spinor living on a Riemann surface $\Sigma$, but also found a way to parameterize them! So now the task of "summing over all possible fermion fields" which is something we have to do in our path integral is no longer as daunting. 

### Majorana Spinors and Kinetic Energy

The next step is to define an action. And in order to do that we need a $\text{spin}$-invariant inner product to write things like kinetic energy and whatnot. In our search to find it we find out these really cool results summed up in the following theorem.

**<u>Theorem:</u>** The Dirac spinor representation $\Delta$ for $\text{spin}(2k)$ for $k\in \mathbb{N}$ admits a real structure, i.e. it admits a complex $\text{spin}(2k)$ equivariant complex antilinear map $\sigma : \Delta \to \Delta$ such that $\sigma \circ \sigma = 1$. Additionally the same representation splits into two isomorphic eigenspaces $\Delta_{\pm}$ of the chirality element $\gamma^{2k}$. 

**<u>Proposition:</u>** For $k=1$ the complex structure is given by $\gamma_0 = \gamma(e_0)$ defined for any $\psi \in \mathbb{C}^2$ by
$$
\sigma(\psi) = \gamma_0 \psi^\ast,
$$
where $\psi^\ast$ is the complex conjugate of $\psi$.

**<u>Proof:</u>** We know that $\gamma_0 = \gamma_0^\ast$ and $\gamma_0^2 = 1$. Also we know that $\{\gamma_0,\gamma^2\} = 0$ Since every element in $\text{spin}(2)$ is written as $\alpha + i \beta \gamma^2$ for some $\alpha + i \beta \in U(1)$ we have that $[\gamma_0,i\gamma^2] = 0$.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
The proofs of the statments in the previous theorem are [here](../Quantum_Fields/Spinors.md) but honestly they are not as needed, since we are only going to do everything in the 2D spinor representation anyway. 

**<u>Definition:</u>** An element $\psi \in \Delta$ is called **Majorana** if $\sigma(\psi) = \psi$ and **Weyl** if $\gamma^2 \psi = \pm \psi$. For any spinor, we call $\psi^C \coloneqq \sigma(\psi)$ its **Majorana conjugate** or **Charge conjugate**. The restriction of the Dirac spinor representation to its real (Majorana) subspace is called the **Majorana spinor representation.** 

This is an interesting split. In physics we sometimes care about the physics of Dirac spinors, or of their Majorana subspaces. In particular, a very interesting CFT arises when we consider our spinor representation the Majorana spinor representation. This doesn't change anything from the discussion above as it is general enough to work with any representation of $\text{spin}(2)$. That said from now on we will restrict our attention to Majorana spinors.

**<u>Definition:</u>** A **Dirac form** is a nondegenerate $\mathbb{R}$-bilinear form $\langle \cdot,\cdot \rangle : \Delta \times \Delta \to \mathbb{C}$ on a Dirac representation $\Delta$ of $\text{spin}(n)$ such that for any $c \in \mathbb{C}$, $\psi,\phi \in \Delta$ and $X \in \mathbb{R}^n$ we have that

1. $\langle \psi,X\cdot \phi \rangle = \langle X \cdot \psi,\phi \rangle$
2. $\langle \psi,\phi \rangle = \langle \phi,\psi \rangle^\ast$
3. $\langle \psi,c\phi \rangle = c \langle \psi,\phi \rangle$.

The dual space element $\psi^\dagger \coloneqq \langle \psi,\cdot \rangle$ is known as the **Dirac conjugate spinor**.

A Dirac form is the closes we can get to a hermitian inner product that is $\text{spin}$ invariant. Notice that the only thing left for it to be a Hermitian form is positive definiteness, which honestly is the first thing we are ok with giving up. 

**<u>Proposition:</u>** On $\mathbb{C}^2$ with the $\text{spin}(2)$ representation the only Dirac form is defined for any $\psi, \phi \in \mathbb{C}^2$ by
$$
\langle \psi,\phi \rangle = (\psi^\ast)^T \phi = \psi^\dagger \phi.
$$
***Proof:*** Property 1 of the definition implies equivariance for $\gamma$ matrices, this means that $\gamma^\dagger = \gamma$. The next thing we want is conjugate symmetry and nodegeneracy which means that $\psi^\dagger = (A \psi^\ast)^T$ for some invertible complex linear map $A$. Plugging in the first thing we find that $(\gamma \psi)^\dagger = (A\gamma^\ast \psi^\ast)^T = (A\psi^\ast)^T (A \gamma^\ast A^{-1})^T$ but also this should equal $\gamma$. From this we find that $A = c$ for some $c \in \mathbb{C}$.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
Fantastic! Now that we can measure the length of spinors we can finally measure their kinetic energy by defining a Lagrangian. The only step missing is to extend the Dirac form into a bundle inner product which is done canonically the way we expect so let's go ahead and write down the Lagrangian! 

**<u>Definition:</u>** Let $\Sigma$ be a Riemann surface and $S(\Sigma)$ be the spinor bundle associated to a $\text{spin}(2)$ structure on $\Sigma$. Then the **massless free Dirac Lagrangian** is given by\
$$
\begin{align*}
\mathcal{L}: \Gamma S(\Sigma) &\to \Omega^2(\Sigma)\\
\psi &\mapsto \mathcal{L}(\psi) = \ast \frac{1}{2} \langle \psi, \centernot \partial \psi \rangle,
\end{align*} 
$$
where $\centernot\partial$ is the **Dirac operator** given by $\centernot \partial: \Gamma S(\Sigma) \to \Gamma S(\Sigma)$ such that for any vielbein $e= \{e_1,e_2\}$ 
$$
\centernot \partial \psi = g^{ab} e_a \cdot \nabla_{e_b} \psi.
$$
The dirac operator is effectively a trace over a vielbein of the covariant derivative of a spinor. In local coordinates (in flat $\Sigma$) it is given by
$$
\centernot \partial \psi = i\gamma^\alpha d\psi(e_\alpha).
$$
When you're not flat you have to add some Christoffel symbols but whatever we are working on a flat signature anyway because of our previous exploration that all Riemann surfaces are conformally flat. Another thing to notice is that the Dirac operator swaps the chirality of the spinor, in other words it maps you between the Weyl subspaces.

We can now define the action $S : \Gamma S(\Sigma) \to \mathbb{R}$ of a spinor field $\psi \in \Gamma S(\Sigma)$ by
$$
S(\Sigma, \psi) = \int_{\Sigma} \mathcal{L}(\psi).
$$
So what we have now is the $e^{-S(\psi)}$ part of our path integral! WOHOO! Now for the hard part, how do we put a measure on the set of spinor fields of $\Sigma$? Here is where grassmann variables come in.



### Aside on Antisymmetry

So far all of our fields were complex valued, however what we would like is to impose an extra condition to the operators in the quantum field theory side. We would like them to be antisymmetric. Usually we could achieve this by giving an antisymmetric structure on $\mathbb{C}^2$ where we can build our spinors with antisymmetric components that have some intrinsic wedge product instead of a scalar product. That would be a much more complicated space to find spinor representations in but there is a way we can treat antisymmetric spinors (or fermions) using the language of spinors that we have already developed. Particularly by noticing that with the exception of the Dirac form, there was no point in which we exchanged two spinor components for the antisymmetry to be apparent. 

So welcome to the wonderful world of Grassmann numbers. Honestly the rigorous picture of this is quite confusing it involves somehow defining a tensor product with an algebra that contains uncountably many generators so I am a bit iffy. Going through [Quantum Fields and Strings](https://bookstore.ams.org/qft-1-2-s/) (chapter 1 lol) there is a rigorous treatment of the extension of our spinor bundle in the language of sheves.

So we will use results from the cast down to a schematic language we can understand.

**<u>Definition:</u>** A **commutative Grassmann algebra** or **superalgebra** $A$ is a $\mathbb{Z}_2$ graded vector space over $\mathbb{C}$ with a multiplication $A\times A \to A$ such that for any $\theta,\phi \in A$
$$
\theta \phi = (-1)^{|\theta| |\phi|} \phi\theta,
$$
where $|\theta|$ is the $\mathbb{Z}_2$ degree of $\theta \in A$. 

**<u>Proposition:</u>** Let $A$ be a commutative superalgebra generated by $\Theta =\{\theta_i\}_{i\in I}$ elements of odd degree. This means that each element $z \in A$ has a unique decomposition to
$$
z = \sum_{I \in \mathcal{P}(\Theta)} z^I \theta_I,
$$
where $z^I \in \mathbb{C}$, $\theta_I = \bigwedge_{i\in I} \theta_i$, i.e. the antisymmetric product product of all the $\theta_i$, and $\mathcal{P}(\Theta)$ is the powerset of $\Theta$.

Here is an interesting observation. We can think of the superalgebra generated by a set of odd generators $\Theta$ as the set of polynomials in $\mathbb{C}$ with antisymmetric generators given by $A = \mathbb{C}^{\wedge}[\Theta]$. 

Therefore what we should do is to define the integral of such polynomials. Let $f \in A$ then we know that
$$
f = \sum_{I \in \mathcal{P}(\Theta)} f^I \theta_I.
$$
We will define the Berezin integral as follows.

**<u>Definition:</u>** The **Berezin integral** of $f \in A$ in some commuting superalgebra generated by a set of anticommuting generators $\Theta$ is given by
$$
\int f\, d\Theta = f^{\Theta},
$$
where $f^\Theta \in \mathbb{C}$ is the term in the usual decomposition above. 

This measure simply extracts the coefficient of the higest order (if it exists) in the polynomial $f$. For example
$$
\int 1\, d\Theta = 0.
$$
The nice thing about this measure is that it is very course. 

> **Intuition:** Once we think of Grassmann numbers as formal polynomials of anticommuting variables that really transforms our idea of the Berezin integral. The Berezin integral is a way to "integrate" the polynomial over all possible "values" the anticommuting variables can take, even though it doesn't strictly makes sense to assign a value to the generators.

One interesting class of superalgebras is $\Lambda_n$ which is given by $\mathbb{C}^\wedge [\mathbb{Z}_n]$. Then the next most interesting one is $\Lambda_\infty \coloneqq \mathbb{C}^\wedge[\mathbb{Z}]$. One more small aside, when we refer to “complex Grassmann numbers”, we are referring to the Grassmann algebra with generating set $\Theta\times \bar \Theta = \Theta^2$ where there are twice as many Grassmann numbers, but now we have the conjugation involution to switch between the generators. We are now ready to define fermion fields!

To do this carefully we think about scalar fields. Scalar fields are usually smooth functions on our manifold. One way to represent a smooth function would be to assign a value at every point, however, what we have just observed is that it doesn't really makes sense to assign an antisymmetric value at a point. 

Yet, we can think of real functions as polynomials. Let's consider $C^\infty(M)$ for a second, i.e. the set of smooth functions on $M$. As a **Sobolev space** we know that it is separable, i.e. we can find a countable basis for its elements. Let's call that basis $\mathcal{B}\subset C^\infty(M)$. Then every point $f \in C^\infty(M)$ can be given by
$$
f = \sum_{b \in \mathcal{B}} f_b b,
$$
for $f_b \in \mathbb{R}$. So in some sense, the polynomial $F \in \mathbb{C}^\infty[\mathbb{Z}_{|\mathcal{B}|}]$ given by $F = \sum_{b\in \mathcal{B}} x_b b$ generates all the possible elements of $C^\infty(M)$ simply by plugging in real numbers for the variables $x_b$. 

Notice that at the end of the day, all we want to do in Quantum field theory is not to pick out a specific $f$, but rather to add a measure to all of them, and using the polynomial $F$ we have essentially parameterized all of $C^\infty(M)$. As a result, if we "integrate" $F$ over $\mathbb{R}^{|\mathcal{B}|}$ we would integrate over $C^\infty(M)$. This is amazing news for our spinor fields. 

In the same way we defined all *commuting* spinor fields by providing a polynomial that effectively parameterizes them, we can define all *anticommuting* spinor fields by providing a polynomial $\Psi$ with antisymmetric generators. That polynomial is going to be an element of a Grassmann algebra that has values in modes. Here is this statement a bit more precisely.

**<u>Definition:</u>** Given a spinor bundle $S$, we say that $\Psi \in \Gamma(S)^\wedge[\mathbb{Z}]$ **parameterizes the Fermionic fields** (or antisymmetric spinor fields) if there exists a basis $\mathcal{B} = \{b_i\}_{i\in \mathbb{Z}}\subset \Gamma(S)$ of spinor fields such that $\Psi = \sum_{i \in \mathbb{Z}} b_i \theta_i$, where $\theta_i$ is the corresponding Grassmann odd generator. 

It doesn't matter that we can't actually plug in values to $\Psi$ to obtain different Fermion fields, because we already have a notion to integrate over all of them using the Berezin integral. The previous definition leads to a natural follow up definition for Grassmann algebras.

**<u>Definition:</u>** Given a Grassmann algebra $\Lambda$ generated by $\Theta$, an element $\psi \in \Lambda$ is called **generating** iff it contains a single monomial for each generator. If $\psi = \sum_{\theta \in \Theta}\theta$ it is called th **generating unit**. If $\Lambda = A^\wedge[\mathbb{Z}_{\text{dim\,}A}]$ for some separable algebra $A$ then the **algebra generator** with respect to a countable basis $B$ is the generating element
$$
\psi = \sum_{i \in \mathbb{Z}_{\text{dim}A}} b_i\,x_i,
$$
where $x_i$ is an antisymmetric generator of $\Lambda$.

So with this definition $\Psi$ is the algebra generator of $\Gamma(S) \wedge [\mathbb{Z}]$ with respect to the basis $\mathcal{B}$. Btw the intuition of a generating element is things like the vector $v = e_1 + e_2 + \cdots +e_n$ in $\mathbb{R}^n$.



### The Path Integral Measure

The key word of this is mode expansions. Here is the high level description of this story. We find a countable basis of sections in $\Gamma(S)$ for some spinor bundle and create a set of *modes* called $M(S)$,then we will find the corresponding generating polynomial for spinors and then use the Berezin integral as our path integral. 

> **Note for pendantic Mathematicians:** But how do you even find a set of countable modes over the smooth functions on your space? Blah blah blah! Ok this is the biggest pet peeve of mathematicians when they see path integrals. They think that the set we are trying to put a measure on is the actual set of $C^\infty(M)$ functions. Then someone says that it is $L^2(M)$ which does have a countable basis, but then proceeds to using non $L^2(M)$ functions. Here is the deal, the true answer is: We don’t care to measure either of these sets! 
>
> WAAAAT. Yes! What we do in fact measure is the following. Every lagrangian we write down HAS to have a kinetic term. In some sense this is a “quadratic term,” i.e. something that can be written as $\langle \phi, D\phi \rangle$ where $\phi$ is a field and $D$ is a linear map of fields. What we are interested in measuring is the domain of $D$. To give some examples, in the free Boson lagrangian $D = \Delta = \ast d\ast d$, this has a wonderful basis of eigenvalues that are bounded and whatnot. In this case of the spinor field $D = \centernot \partial$ which as as its domain pairs of analytic functions, which can be spanned using Laurent series. The true assumption that goes on in the path integral is that the domain of our kinetic energy operator is bounded. So with that out of the way, let’s actually calculate things.  

Here is a definition.

**<u>Definition:</u>** Let $\Sigma$ be a Riemann surface, then the **free massless Majorana Fermion path integral without insertions** $Z(\Sigma)$ is given by
$$
Z(\Sigma) = \sum_{S \in \mathfrak{s}(\Sigma)} \int dM(S) dM(S)^\ast \, e^{-S(\Sigma,\psi_{S})},
$$
where $\mathfrak{s}(\Sigma)$ is the set of spin bundles associated to the possible spin structures (up to spin bundle isomorphism), $M(S)$ is the set of **modes** for fermions in $S$, i.e. a countable basis for $\Gamma(S)$, and $\psi_S$ is the Grassmann algebra generator of $\Gamma(S)$ for the basis $M(S)$.

I AM SO HAPPY RIGHT NOW! We have a way to write the path integral for the spinor theory on an arbitrary Riemann surface! Thing is this can mean many things so let's try to work it out on some small way. Let’s start working out some modes.

**<u>Example:</u>** *(Modes on the cylinder)* This is getting obscure so it is high time we work out an example. Let’s find the modes for spinors on the cylinder $S^1 \times \mathbb{R}$. What we will find (luckily) will be similar enough to the modes one obtains during second quantization which is at least satisfying. 

We will work with Majorana spinors so let’s write down the set of majorana sections of a spinor bundle $S$ over $\Sigma = S^1 \times \mathbb{R}$ as $\Gamma^M(S)$. These are defined by
$$
\Gamma^M(S) \coloneqq \{\psi \in \Gamma(\Sigma) \mid \sigma(\psi) = \psi\},
$$
where $\sigma$ is the real structure of the spinor representation that is extended. Specifically, let’s use a set of isothermal coordinates for the complexified tangent space to define the vielbein
$$
e = \left( \frac{\partial }{\partial \sigma} , \frac{\partial }{\partial \tau} \right)
$$
where $\sigma$ is the coordinate along the circle, and also let’s assume that we have a metric such that our circumference is $2\pi$. This looks pretty already, but wait until you see how nicely we can write down the majorana spinor representations. In fact we know that $\sigma(\psi) = \gamma_0\psi^\ast = \psi$. So solving we obtain that $\psi = \binom{a}{a^\ast}$ for some $a\in \mathbb{C}$.  WOW! So let’s write out our sections in this gauge. Let $\epsilon$ be one of the lifts of $e$ to the spin structure of $S^1 \times \mathbb{R}$, then we know that for any majorana spinor field $\Psi \in \Gamma^M S(S^1 \times \mathbb{R})$ there exists a function $\psi : S^1\times \mathbb{R}\supset U \to \mathbb{C}$ such that
$$
\Psi = \left[\epsilon, \binom{\psi}{\psi^\ast}\right].
$$
This is awesome let’s goo! Now we need to specify $\epsilon$ and by extension the spin structure in order to find modes. Let’s start with the Ramond sector where the holonomy of the spin connection is trivial. To calculate $\epsilon$  we notice that under the action of $\text{SO}(S^1 \times \mathbb{R})$ the vielbein $e$ is given by $e(\sigma, \tau) = (1,\sigma, \tau) \in U(1)$. So its simplest lift is itself $\epsilon(\sigma, \tau) = (1,\sigma,\tau)$. Perfection. So we need to solve some kind of eigenvalue equation like
$$
\frac{\partial \psi}{\partial \sigma} - i\frac{\partial \psi}{\partial \tau} = \lambda \psi,
$$
for $\lambda \in \mathbb{R}$. Notice that since $\epsilon$ can be defined globally we are looking for a function $\psi: S^1 \times \mathbb{R} \to \mathbb{C}$ which implies the boundary condition that $\psi(\sigma, \cdot) = \psi(\sigma + 2\pi,\cdot)$.

The way it is written right now it is begging us to take Fourier series in $\sigma$ since we have a periodic function, so let’s write 
$$
\psi(\sigma, \tau) = \sum_{n \in \mathbb{Z}} a_n(\tau) e^{in\sigma}
$$
I’m in love. However the rest is not that nice. We don’t have an equally nice basis of Fourier modes for $a_n : \mathbb{R} \to \mathbb{C}$. But we know that all these smooth functions have countable bases, for example the Hermite polynomials. Let’s pick a basis $\mathcal{B} =\{b_k\}_{k\in \mathbb{Z}}$to write 
$$
\psi(\sigma,\tau) = \sum_{n,m \in \mathbb{Z}} a_{nm} b_m(\tau) e^{in\sigma}
$$
Eh not as cool, but at least we can now write a basis of fermions by assuming that $a_{nm}$ are Grassmann valued. Specifically we will define the set of **Ramond modes** to be
$$
M_R(S(S^1\times \mathbb{R})) \coloneqq \{\phi_n \times b_m \mid \phi_n(\sigma) = e^{in\sigma}, n \in \mathbb{Z}, b_m \in \mathcal{B}\}.
$$
The next question is what happens in the Nouveau-Schwartz spin structure. There we are slightly less fortunate. The reason is that our spin structure doesn’t allow us to lift to a global vielbein. Namely we have the equation
$$
e(\sigma, \tau) = (1,\sigma, \tau) = \Lambda \circ \epsilon(\sigma, \tau) = (\hat \epsilon^2 \sigma,\sigma, \tau )
$$
which has solutions $\hat \epsilon = \pm \sigma^{-\frac{1}{2}}$ which isn’t a function over $S^1$. But likeeeee it’s only one point where this is discontinuous in. So what if we define our functions on the double cover and then take one of the partial inverses down to the circle? This would correspond to the chart of the circle with one of the poles removed. then we can get the remaining point by switching charts. 

Now having moved to the double where $\sigma \in [0,4\pi)$, we have that $\psi(\sigma,\tau) = -\psi(\sigma + 2\pi,\tau)$. This means that we can write it in modes
$$
\psi(\sigma,\tau) = \sum_{n,m \in \mathbb{Z}} a_{nm} b_{m}(\tau) e^{i(n+\frac{1}{2})\sigma}.
$$
This appears because this circle has twice the radius, and the holonomy constraint implies that only the odd modes appear. Taking the restriction for $\sigma \in (0,2\pi)$ we are back on the circle with the north pole removed, but this was enough to fully define our modes everywhere, since we can take the limit for the last point. Therefore the **Neveau-Schwartz** modes are
$$
M_{NS}(S(S^1\times \mathbb{R})) \coloneqq \{\phi_n' \times b_m \mid \phi_n'(\sigma) = e^{i(n+\frac{1}{2})\sigma}, n \in \mathbb{Z}, b_m \in \mathcal{B}\}.
$$

$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$

There is a much nicer example where these are so much better defined but on the torus. For now we continue on the cylinder. 

Now let's examine some cool consequences of the Berezin integral of the generating polynomials specifically. 

**<u>Proposition:</u>** Let $\psi \in \Lambda =\mathbb{C}^\wedge[\Theta]$ be a generating in $\Lambda$ and $A:\Lambda\to \Lambda$ a linear map of generators in $\Theta$, then
$$
\int d\Theta d\Theta^\ast\, e^{-\psi^\dagger A\psi} = \text{det\,}||\psi||^2 A,
$$
Where $\psi^\dagger$ is the generator with the complex conjugate coefficients but in the algebra $\mathbb{C}^\wedge[\bar \Theta]$, that we think as the complex conjugate of $\psi$. More precisely we have that $\psi^\dagger A \psi = \psi_i^\ast A_{ij} \psi_j$ where $\psi_i$ are the monomials in $\psi$.

***Proof:*** First let's notice that for any linear map of generators $A$, the following identity holds  
$$
\bigwedge_{\theta \in \Theta} A\theta = (\det A) \bigwedge_{\theta \in \Theta} \theta.
$$
This is a standard property for top forms in an exterior algebra casted in this context, one can show this by unpacking the wedge product into an antisymmetric sum with Levi-Civita symbols. We know that since $\psi$ contains only monomials for each generator in $\Theta$ there must be a unitary transformation $S$ such that
$$
S \psi = ||\psi|| v = ||\psi||\sum_{\theta \in \Theta} \theta.
$$
Then we have that
$$
\psi^\dagger A \psi = v^\dagger S ||\psi||^2 A S^{-1} v.
$$
As a result, we can calculate that for the polynomial $f = e^{\psi^\dagger A \psi}$ the term of the form $f^{\Theta \cup \bar \Theta}$ can be calculated by the expansion of the exponential as
$$
e^\psi = \sum_{n =0}^\infty \frac{1}{n!}\prod_{i = 1}^n \psi
$$
Then we can calculate the top term to be
$$
\frac{1}{|\Theta|!}\prod_{i \in \Theta} \psi^\dagger A \psi = \bigwedge_{\theta^\ast \in \bar \Theta}\theta^\ast \bigwedge_{\theta \in \Theta} S ||\psi||^2 A S^{-1} \theta = \det(S ||\psi||^2 A S^{-1}) \bigwedge_{\theta \in \Theta} \theta^\ast \theta = \det(||\psi||^2 A ) \bigwedge_{\theta \in \Theta} \theta^\ast \theta
$$
Realizing that the integral is $f^{\Theta \cup \bar \Theta} = \text{det\,}(||\psi||^2A)$ we have shown the thing.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
Notice that in the above we have defined $||\psi||$ with respect to the norm of $v$. In finite dimensional vector spaces this would be $\sqrt{\frac{\langle \psi,\psi \rangle}{\langle v,v \rangle}}$, one can alternatively think of having an inner product such that $\langle v,v \rangle = 1$, this is how we generalize unitary transformations for infinite dimensional vector spaces. The reason for doing the above was to evaluate the path integral.

**<u>Corollary:</u>** The path integral with no insertions for the free fermion on a Riemann surface evaluates to
$$
Z(\Sigma) = \sum_{S \in \mathfrak{s}(\Sigma)} \text{det}_{M(S)} \centernot \partial,
$$
where $\text{det}_{M(S)}$ is the determinant on a vector space with a basis the of modes $M(S)$ of a spinor bundle $S$.



This is so amazing, I am so happy right now. However, this path integral only gives us numbers, in other words it can only offer a way to calculate correlation functions for closed manifolds. If we want to evaluate states we need to use the prescription we have developed in the first part of these notes. We will do this below.



## Basic correlation Functions

The first thing we want to calculate is the correlation functions of our spinor fields. So let's try it. Let's do this on the sphere $S^2 \cong \mathbb{C}$. This has genus $0$ so it only has the trivial spin structure which is particularly nice. What is even nicer is that if we work in a chart $U$ that doesn't have the poles we have something conformally equivalent to a cylinder with a Ramond spin structure. What we have also seen is that for the complex coordinates $z,\bar z$ we can find a gauge $\epsilon$ where a spinor field $\Psi$ is given by
$$
\Psi = [\epsilon, \psi e_1 + \bar \psi e_2],
$$
where $\psi \in C^\infty(U,\mathbb{C})$. In this notation the action is written as
$$
S(S^2,\Psi) = \frac{1}{2}\int_{\mathbb{C}} \left( \psi \frac{\partial \psi}{\partial \bar z} + \bar \psi \frac{\partial \bar \psi}{\partial  z} \right) dzd\bar z.
$$
Now what we need is a mode expansion as well as the following lemma.

**<u>Lemma:</u>** Let $\psi = \sum_{\theta \in \Theta}\theta$ be the generating unit generator for a Grassmann algebra $\Lambda$ generated by $\Theta$, and $A: \Lambda \to \Lambda$ be a linear map of generators, then for any $\theta, \phi \in \Theta$
$$
\int d\Theta d\bar \Theta\, \theta \phi^\ast e^{-\psi^\dagger A\psi} = (A^{-1})_{\theta \phi}\,\text{det\,} A.
$$
***Proof:*** This is a corollary of the previous proposition. Basically, we don't get the top form out of the exponential we get the second to last one and then wedge it with $\theta \phi^\ast$.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
Using the formula above we can calculate the correlation function of the spinors if we write the action in the form $\psi^\dagger A \psi$. Here is how we can now cheat a bit using the above lemma. The correlation function is defined by
$$
\langle \psi(x)\psi(y) \rangle = \frac{Z(S^2,\psi(x)\psi(y))}{Z(S^2)},
$$
now we expect this to be equal to something like $(A^{-1})_{\psi(x),\psi(y)^\ast}$ having written our action appropriately. But in general it might not be true that the ratio of these two terms converges. The thing that breaks things a bit is the fact that we have used $\psi(x)$ and $\psi(y)$ in our notation. It seems as if we have used an uncountable number of degrees of freedom to define this correlation function. But here is where the generating functional comes to our rescue!

**<u>Definition:</u>** The **generating functional** for a free Majorana fermion is defined for a field parameterization $\eta$
$$
Z[\eta] = \frac{1}{Z(S^2)} \int \mathcal{D}\psi \, e^{-S(S^2,\psi) + \int_{S^2} \ast \langle \eta,\psi \rangle}
$$
where $\mathcal{D}\psi = dMd\bar M$ for a set of modes over the spin bundle of $S^2$.

**<u>Theorem:</u>** The generating functional of a free Majorana fermion is given by
$$
Z[\eta] = \exp \frac{1}{2}\int_{S^2} \ast \langle \eta,G \star \eta\rangle,
$$
where $\star$ is the convolution, and $G$ is the distribution over the $S^2$ such that $\centernot \partial G = \delta$.

***Proof:*** Here is a sketch. We will show that the path integral measure is invariant under shifts. In other words if we add to it a Grassmann variable that we are not integrating over then the Berezin integral should remain invariant.

Let $\Theta$ be a set of generators for a commutative superalgerba and $H$ be the remaining odd generators. Now let $f$ be a polynomial in $\mathbb{C}^\wedge[\Theta]$. Now consider the polynomial $f' \in \mathbb{C}^\wedge [\Theta \cup H]$ where each generator $\theta \in \Theta$ is replaced with $\theta + \eta_{\theta}$ for some $\eta_\theta \in H$ and denote $\Theta + H$ the set of shifted generators. Now notice the following:
$$
f^{\Theta} = (f')^{\Theta} = (f')^{\Theta + H}.
$$
So the Berezin integral is invariant under shifts. This is quite nice. Now notice that the thing that appears in the exponential looks like
$$
\begin{align*}
-\frac{1}{2}\langle \psi,\centernot \partial \psi \rangle + \langle \psi,\eta \rangle 
&= -\frac{1}{2}\langle \psi,\centernot \partial \psi \rangle + \langle \psi,\centernot \partial G\star \eta \rangle
\end{align*}
$$
Now let $2\phi = 2\psi + G\star \eta$ and we can write
$$
\begin{align*}
-\frac{1}{2}\langle \psi,\centernot \partial \psi \rangle + \langle \psi,\eta \rangle 
&= -\frac{1}{2}\left\langle \phi,\centernot \partial \phi \right\rangle + \frac{1}{2}\langle G\star \eta,\centernot \partial G\star \eta \rangle\\
&= S(\phi) + \frac{1}{2} \langle \eta,G\star \eta \rangle.
\end{align*}
$$
Since the Berezin integral is invariant under the shift that created $\phi$ we have that
$$
Z[\eta] = \frac{Z(S^2)}{Z(S^2)} \exp \frac{1}{2}\int_{S^2} \ast \langle \eta,G \star \eta\rangle, = \exp \frac{1}{2}\int_{S^2} \ast \langle \eta,G \star \eta\rangle,
$$

$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

This is a nice way of regularizing our path integral. However, I did cheat a bit. The **shift invariance** of the Berezin integral was not proved for uncountably many generators. However there is a systematic way of doing it, it would just involve a lot more work. One way is to take a finite set of generators and then take the limit to infinity of the difference $\lim_{n\to \infty}f^{\Theta_n} - (f')^{\Theta_n - H_n}$. This must be zero for each finite $n$. Anyway moving on we now only need to find $G$! Once we do we have all the correlators.

**<u>Lemma:</u>** For the free Majorana fermion on $S^2 \cong \mathbb{C}$ the Green's function $G$ such that
$$
\centernot \partial G = \delta,
$$
in a global gauge induced by the coordinates $z,\bar z$ is given by
$$
G(z,\bar z) = \frac{1}{\pi}\begin{pmatrix}0 & \bar z^{-1} \\ z^{-1} & 0\end{pmatrix}.
$$
***Proof:*** The proof lies on the fact that
$$
\frac{\partial z^{-1}}{\partial \bar z} = \pi \delta_z.
$$
To show this we take a holomorphic function $f : \mathbb{C}\to \mathbb{C}$ and integrate over a disk $D$ that contains $0$. Then we have
$$
\int_D \ast \frac{\partial z^{-1}}{\partial \bar z} f = \frac{i}{2}\int_{D}fdz \wedge \bar \partial z^{-1} = \frac{1}{2i}\int_{D} \bar \partial (fz^{-1}dz) = \frac{1}{2i}\int_Dd(fz^{-1}dz) = \frac{i}{2} \int_{\partial D} \frac{f}{z} dz = \pi f(0).
$$
for an antiholomorphic function the integral is zero. 
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
So we are done!

**<u>Corollary:</u>** The following is true for the correlation functions 

1. $\langle \psi(z,\bar z) \psi(w,\bar w) \rangle = \frac{1}{\pi}\frac{1}{z-w}$
2. $\langle \bar \psi(z,\bar z) \bar \psi(w,\bar w) \rangle = \frac{1}{\pi}\frac{1}{\bar z-\bar w}$
3. $\langle \psi(z,\bar z) \bar \psi(w,\bar w) \rangle = \langle \bar\psi(z,\bar z) \psi(w,\bar w) \rangle = 0$.

Here we are looking at something remarkable. If we have $\psi(z) \psi(z)$, classically we expect this to vanish because of antisymmetry. However, in quantum language it seems to blow up! What this means is that there is some ambiguity in the corresponding operator. 

Remember that we are never actually evaluating these at points, rather we are thinking them as distributions. To put this in the language of modes, we should be able to reconstruct each mode by integrating against whatever expression we write down for $\psi(x)$ over something like $\Sigma$. So since only integrals of $\psi$ matter we shouldn't be surprised that it might be possible that our expression for the product of two fields might not yield a finite result. We can still (very consistently) use this expression to calculate integrals of two fermions.

Sometimes we want though to obtain a field at a specific point by combining two. This would lead to the following distribution.

**<u>Definition:</u>** Let $A,B$ be local fields then their **normal ordered product** is given by
$$
{:}AB{:}\, (z) = \lim_{w\to z} \left( A(z)B(w) - \langle A(z)B(w) \rangle \right).
$$
In the language of operator valued distributions this has a more precise definition, but whatever, we will not waste our days and nights on this. Essentially this says that if A and B are singular when they collide remove their singularity. Notice that this doesn't mean that the normal ordered field does not have any other singularities. 




## Virasoro Primaries

We are about to see why we did this for free Majorana Fermions. The answer is going to be that there are only 3 primaries. Let's explore that. We will first calculate them, and then show that they are the only primaries. In order to do that we need to extract the conformal algebra. To do it we first need our stress tensor.

### Stress Tensor and Trace Anomaly

**<u>Lemma:</u>** Let $S(\Sigma)$ be a spin bundle over a parallelizable Riemann surface $\Sigma$. The stress tensor $T$ for a free massless Majorana spinor $\Psi \in \Gamma(S)$ is given by
$$
T = \langle \Psi,  (\ast v) \cdot d\Psi\rangle,
$$
where the volume form is $dv$.

***Proof:*** We know that the Lagrangian is $\mathcal{L}(\psi) =\ast \frac{1}{2} \langle \Psi,\centernot\partial \Psi \rangle$ so what we want to figure out is how it changes under spacetime transformations. We also know that the spin connection is flat which means that
$$
\nabla \Psi = \nabla [\epsilon,\psi_\epsilon] = [\epsilon,d\psi_{\epsilon}] = d\Psi.
$$
Therefore if the volume form is $dv$ we have
$$
T= \langle \Psi,  (\ast v) \cdot d\Psi\rangle.
$$
 In isothermal coordinates $z,\bar z$ we can write the spinors as $\Psi = [\epsilon,\binom{\psi}{\psi^\ast}]$, and in that gauge the stress tensor reduces to
$$
T = [\epsilon, \psi \partial \psi \otimes d z + \psi^\ast \bar \partial \psi^\ast \otimes d\bar z].
$$
From now on we will refer to the stress tensor components in this gauge like so 
$$
\begin{align*}
T = \psi \frac{\partial \psi}{\partial z} && \bar T = \psi^\ast \frac{\partial \psi^\ast}{\partial \bar z}.
\end{align*}
$$

$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$

Very quickly we encounter an issue. We have already calculated the following
$$
\frac{\partial }{\partial w}\langle \psi(z) \psi(w)\rangle = \frac{1}{\pi} \frac{1}{(z-w)^2},
$$
which means that if we try to take $z\to w$ in order to define $T$ then $\langle T \rangle$ diverges. This is scary, but sometimes we have said that we don't really care about other divergences so long as the integrals work out well. The truth is though that there isn't a reason we should expect that what we calculated as $T$ in the classical theory should be a meaningful quantity in the quantum theory.

The real meaning of the stress tensor is to take in a "spacetime symmetry" and spit out a corresponding conserved current. The way this is done is as follows. A spacetime symmetry is usually furnished by the action of a Lie group which for every element of its Lie algebra induces a corresponding vector field on the manifold. In physics we call that an infinitesimal transformation. In practice the stress tensor takes this vector field (we contract it against it) and returns a conserved current $J$ (i.e. $dJ = 0$) generated by our fields. This is the intuition we want to preserve in the quantum theory.

But there is an immediate issue. What we observe as classical physics (defined using our classical action $S$) such as conserved currents and symmetries, are only things that we know for a fact hold **on average** or more precisely at large scales. Why should we expect that the same symmetries should hold in the small quantum world? In fact insisting on it is what causes our singularity. 

So how can we move on? The idea is to refine what we mean by symmetries only holding on large scales. Suppose that we have a fundamental vector field $\tilde X \in \mathfrak{X}(\Sigma)$ that is a representation of some Lie algebra element for an action on our spacetime. Whatever we define as $T$ it should have the property that $J_X = \ast T(\tilde X)$ should be a "conserved current on average". The classical definition of a conserved current is that $d J_X = 0$. However, $J_X$ is not an object that exists in our quantum theory. What does exist is averages of $J_X$ with respect to other fields obtained using our generating functional. So a more precise restatement of conserved current is to describe how it acts on the rest of the fields. 

**<u>Definition:</u>** Consider a Lie group $G$ and a smooth group action $\rho: G \to \text{Diff}(\Sigma)$ on the Riemann surface $\Sigma$. Then for any $X \in \mathfrak{g}$ we define the **fundamental vector field** $\tilde X \coloneqq \rho_\ast X$. That is a vector field that describes how the points move on $\Sigma$ under the action of $e^{tX}$.

**<u>Proposition:</u>** An action $\rho:G\to \text{Diff}(\Sigma)$ induces a representation $\kappa$ of $G$ to $\Gamma(S)$, the set of sections of a spinor bundle over $\Sigma$. This representation satisfies that for any $X \in \mathfrak{g}$ and spinor field $\psi \in \Gamma(S)$ 
$$
\left.\frac{d}{d\epsilon}\right|_0 \kappa(e^{\epsilon X}) \psi = \nabla_{\tilde X} \psi,
$$
where $\nabla$ is the spin connection.

***Proof:*** This is the representation induced by the pullback of sections under the inverse map, i.e. the parallel transport of sections of $S$ under the spacetime transformation induced by $e^{\epsilon X}$.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
Usually we choose the generators to be Hermitian which implies that we define the related vector fields as $\tilde X = i\rho_\ast X$, such that the matrix exponentials remain unitary operators. This is a matter of convention. In that case our formula is rewritten as
$$
\left.\frac{d}{d\epsilon}\right|_0 \kappa(e^{\epsilon X}) \psi = -i\nabla_{\tilde X} \psi \coloneqq \delta_X \psi.
$$
This is the physicist convention for an infinitesimal transformation of a field. 

Ok but like why do we even care about this? Because of integration by parts. We know that by definition of the stress tensor the following is true
$$
\delta_X S(\psi) \coloneqq \left.\frac{d}{d\epsilon}\right|_0S(\kappa(e^{\epsilon X})\psi) = \int_{\Sigma} d \ast T(\tilde X).
$$
Ok cool, but isn't the whole point of saying that the current is conserved that this integral is zero? Not necessarily, we define the stress tensor to have this property irrespective of the group action we choose. The reason why it is always possible to do this is a result of variational calculus and it is found [here](../Analysis/Varional_Calculus.md).

> **Warning:** There is no reason that $T$ is unique. In fact it isn't, we can add total derivatives to it all day and it will serve the same purpose. Classically we can also add any term that vanishes because of the equations of motion. The key point is that equations of motion in the quantum theory don't always make sense! We consider (i.e. integrate over in the path integral) field configurations that are not solutions of the equations of motion so some classically equivalent stress tensors will stop being equivalent.

This is the case with our stress tensor $T = \psi \partial \psi \otimes dz + \psi^\ast \bar \partial \psi^\ast \otimes d\bar z$. So how can we uncover the right prescription? A better stress tensor would be one that satisfies a quantum version of $\int_{\Sigma} d \ast T(\tilde X) = 0$.

**<u>Theorem:</u>** *(Ward Identity)* The following identity holds where $\psi$ parameterizes the antisymmetric spinors, and $X \in \mathfrak{X}(\Sigma)$ is some vector field
$$
\langle \nabla_{X} \psi \rangle = \int_{\Sigma} d\ast \langle T(X) \times \psi\rangle,
$$
or in local form
$$
\langle \nabla \psi(w) \rangle \delta(z-w) = \langle d\ast T(z) \psi(w) \rangle.
$$
***Proof:*** We will use the path integral to derive this. Consider a vector field $X$ and some $\epsilon > 0$. Then we know that the Berezin integral is invariant under shifts so it would be invariant under the parallel transport of $\psi$. Therefore
$$
\begin{align*}
\langle \psi \rangle 
&= \int \mathcal{D}\psi\, (\psi + \nabla_{\epsilon X} \psi) e^{-S(\psi) - \epsilon \int_{\Sigma} d \ast T(X)} + \mathcal{O}(\epsilon^2)\\
&= \langle \psi e^{-\epsilon \int_{\Sigma} d \ast T(X)}\rangle + \langle \nabla_{\epsilon X} \psi \, e^{-\epsilon \int_{\Sigma} d \ast T(X)}  \rangle + \mathcal{O}(\epsilon^2)\\
&= \langle \psi e^{-\epsilon \int_{\Sigma} d \ast T(X)}\rangle + \epsilon \langle \nabla_{ X} \psi \,  e^{-\epsilon \int_{\Sigma} d \ast T(X)}  \rangle + \mathcal{O}(\epsilon^2)\\
&= \langle \psi \rangle - \epsilon \left[\langle\psi \int_{\Sigma}d\ast T(X)\rangle - \langle \nabla_X \psi \rangle\right] + \mathcal{O}(\epsilon^2).
\end{align*}
$$
Since this must be true for all $\epsilon > 0$ the second term must vanish.  
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
Ok we have derived our condition! this is exactly what we want to pick our $T$ to satisfy. In other words we want to pick a $T$ such that we can take the integral outside of the expectation value. Turns out picking the normally ordered $T$ actually works. I will not show this because we have shown so many things here, but it is a direct calculation. So from now on the holomorphic part of the stress tensor is going to be given by
$$
T(z) = {:}\psi \frac{\partial \psi}{\partial z}{:}(z) = \lim_{w \to z} \left[ \psi(z) \frac{\partial \psi}{\partial w}(w) - \frac{\partial }{\partial w}\langle \psi(z)\psi(w) \rangle\right] = \psi(z) \frac{\partial \psi}{\partial z}(z) - \frac{1}{z^2}.
$$


### Vacuum

We have motivated previously that the vacuum would be the state defined on a disk with no insertions. Since the disk has trivial fundamental group there is only one spin structure we can add and that is the trivial one. To calculate modes we will use that the fields must have periodic boundary conditions to obtain that our fields must be comprised of appropriate Ramond modes that we have calculated above. 

However, we want to figure out what we want to calculate exactly. We could calculate the functional that one uses to obtain the state directly, but this is not useful. In fact here is a symbolic expression for it.
$$
\omega(f) = \int dM_fdM_f^\ast \, e^{-S(D^2,\psi_S)} = \text{det}_{M_f}\centernot \partial,
$$
where $M_f$ is the set of modes that match $f$ on $\partial D^2$. I mean... cool? This is sort of useless because we have nothing to compare it to! A way to treat this is to consider it as a the first state $\omega \in \mathbb{H}(S^1)$ that we have discovered so far. One interesting thing we could do is to figure out its conformal weight. Ideally we expect it to be zero. So let's try. 

We can generalize this stress tensor for any field by plugging in $\psi$ the spinor generating polynomial. Now we are ready to show that we have the vacuum of the theory.

**<u>Theorem:</u>** The conformal weight of $\omega \in \mathbb{H}(S^1)$ is $(0,0)$.

***Proof:*** We need a way to write down $L_0$ and $\bar L_0$, the easiest way is to do this with modes. We want a set of Ramond modes for the disk. Let's consider the basis
$$
M_R(S(D^2)) \coloneqq \left\{b_{nm} = z^n \bar z^m \ \middle| \ n,m \in \mathbb{Z}_{\geq 0}\right\},
$$
 The basis has the property that
$$
\begin{align*}
\partial b_{nm} = nb_{n-1,m} dz && \bar \partial b_{nm} = mb_{n,m-1}d\bar z,
\end{align*}
$$
and 
$$
\int_{D^2} b_{nm} b_{pq}^\ast = \frac{m+n-1}{\pi}\delta_{np}\delta_{mq}.
$$
So now we can calculate the modes of $T$ by plugging in the Fermion field generator $\psi = \theta^{nm} b_{nm}$, where $\theta^{nm}$ are Grassmann odd generators. But before we do so, it is worth remembering that the operators $\psi$ satisfy
$$
\langle \psi(z) \psi(w) \rangle = \frac{1}{z-w},
$$
so perhaps we can now simplify the modes that appear on $\psi$. Namely we have that
$$
\begin{align*}
\langle \psi(z) \psi(w) \rangle
&= \sum_{n,m,p,q \in \mathbb{Z}} \langle \theta^{nm}\theta^{pq} b_{nm}(z) b_{pq}(w)\rangle = \frac{1}{z-w}.
\end{align*}
$$
however we notice that the right part is holomorphic, which implies that only holomorphic terms can appear in this sum. Therefore it must be true that $m = q = 0$. So let's adopt the notation $\theta^n = \theta^{n0}$ and $\bar \theta^n = \theta^{0n}$. 



We have defined $T = {:}\psi\partial_z \psi{:}$ after much though and consideration. So let's write it in terms of modes. 

In particular we want to calculate the Hamiltonian. 
$$
H = \frac{1}{2\pi i} \int_{S^1} (zT dz +\bar z \bar Td\bar z) = \frac{1}{2\pi i} \int_{S^1}
$$








# Twisted Free Fermion



## An Equivalent Vacuum State?



## Interpreting the Defect



## Twisting the Path Integral



## Decomposition Into Primaries
