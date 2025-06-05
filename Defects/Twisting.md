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
f\circ \text{pr}_{S^1 \times \mathbb{R}} = \text{pr}_{S^1 \times \mathbb{R}} \circ \bar \Lambda.
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
-\psi & \text{in Nuveu - Schwartz structure}
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



## A Path Integral for Free Fermions



## Virasoro Primaries



# Twisted Free Fermion



## An Equivalent Vacuum State?



## Interpreting the Defect



## Twisting the Path Integral



## Decomposition Into Primaries
