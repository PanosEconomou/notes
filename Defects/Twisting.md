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
\lambda(u) = u \cdot v = \bar \gamma \left( u \gamma(v) u^{-1} \right).
$$
Let's show that The fact that this is a double cover comes directly from $(\cos 2\theta  - i\sin 2\theta\ \gamma_1 ) \, v$. Notice that since $-i\gamma_1 = R(\frac{\pi}{2})$ is the $90^\circ$ rotation and we already know that every rotation in $\mathbb{R}^2$ can be written as
$$
\cos\alpha + \sin \alpha \, R\left( \frac{\pi}{2} \right), 
$$
we are done!



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

**<u>Lemma:</u>** A diffeomorphism of manifolds induces a bundle isomorphism of spin structures.

This says that if we have two manifolds that are diffeomorphic and one has a spin structure, then we can define a spin structure on the diffeomorphic manifold and vice versa. So diffeomorphic manifolds admit the same spin structures. If there was a structure on one that wasn't on the other, then their diffeomorphism would induce it. 

**<u>Corollary:</u>** The number of admissible spin structures on a Riemann surface only depends on the genus.

WOW! AMAZING! Now let's do better than that and try to solve it.





## A Path Integral for Free Fermions



## Virasoro Primaries



# Twisted Free Fermion



## An Equivalent Vacuum State?



## Interpreting the Defect



## Twisting the Path Integral



## Decomposition Into Primaries
