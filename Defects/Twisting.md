# Twisting Adventure

*Twisted Hilbert space.* “Oh just calculate the twisted Hilbert space by this defect.” “It’s just boundary conditions.” “You forgot to account for the twist fields.” “The operator at the endpoint of a TDL is a twisted field.” I swear to god after the first 10 minutes of learning defects you are bombarded with phrases like these as if talking about twisting Hilbert spaces is something you learned in Quantum 1. 

Unlike most of the notes here, this chunk is meant to motivate the existence of twisted Hilbert spaces and use a constructive approach to obtain intuition and familiarity. The calculations here are rigorous (i.e. not handwavy except in the frist section) but kept simple at the expense of generality. The point is to go through some constructive examples, and not to present a rigorous general framework, because there is no point chasing generality without a working understanding.

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
We usuallt assume that any spacetime has no boundary. But often hte main idea is to split the spacetime at some spacelike slice, define a Hilbert space there, and then write the correlation functions as inner products of the states in the Hilebert space. In fact there is a general theorem (the aptly named Hilbert space reconstruction theorem) that says that if you have correlation functions satisfying things like “locality”, etc. then there is a separable Hilbert space that gives rize to them as inner products. 

Under this splitting though, we can rethink our $QFT$ map. We can define the map $Z$ that roughly takes in a manifold $\Sigma$, a set of probes/data $\Psi$ on that manifold, and then it spits out a state on the Hilbert space that lives on the boundary of the manifold $\mathbb{H}(\partial \Sigma)$
$$
Z(\Sigma, \Psi) \in \mathbb{H}(\partial \Sigma).
$$
All this is nice and fun in theory, but what happens in practice?

Wick (I think) observed that correlation functions can be analytically continued as functions that have a complex time coordinate. Not only that, but the analytic continuation is to literally plug in a complex time coordinate for in the path integral. This is not really relevant to show here, and to even make this statement in its full generality would be too involved. For our purposes though, this observation is enough to use the Path integral to define quantum states, aka the map $Z$. Here is how.

As we said our spacelike slice is $S^1$ so we want to define a Hilbert space on $S^1$. To do this, consider a 2 Dimensional manifold $\Sigma$ such that its boundary $\partial \Sigma = S^1$. Then if I give you an action, we better be able to find the laegest set of manifods that can accept it. In the case of the free boson this is relatively simple.

**<u>Definition:</u>** Let $(\Sigma,g)$ be a 2-dimensional Riemannian manifold and $\phi \in C^\infty(\Sigma)$ be a smooth function, then the **free scalar field Lagrangian** $\mathcal{L} : C^\infty(\Sigma) \to \Omega^2(\Sigma)$ is given by
$$
\mathcal{L}(\phi) = d\phi \wedge \ast d\phi.
$$
This is pretty general and it is defined on all orientable 2D manifolds. Not only that, check this out. 

**<u>Proposition:</u>** The free scalar field Lagrangian is weyl invariant. 

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

We have seen before that this would corredpond to a finding a measure $\mathcal{D}\phi$ that must be conformally invariant (since the state must be super-duper-symmetric). Unfortunately this is where our luck ends. It is **hard** to define such a measure. In a perfect world one would like to give enough conditions such as “locality, conformal invariance, convergence, etc.” and then have some version of measure theory spit out a unique $\mathcal{D}\phi$. Unfortunately, in almost all cases we can’t even have conformal invariance! We need to start using regulators, cuttofs, discretizations, or other regularization schemes that are not guaranteed to fix a unique measure. So bummer. 

> That said, there are theories where the measure does in fact become so crazily constrained that we get the closest thing to a “unique vacuum measure.” We will see the example of the free fermion in the next section where we will work everything out in detail. So, for now, assume that we have a mechanism for choosing it, and in the next section we will actiually write it down. 

Yet, picking a measure is only part of the story. We will assume that this measure is local, conformally covariant in the sence that it is invariant only up to terms that depend on the conformal anomaly (which we have explored [here](../Quantum_Fields/Virasoro_Algebra.md)), and well defined on the manifolds we will consider. If we impose that the vacuum is $\mathfrak{sl}(2,\mathbb{C})$ invariant, which is the Witt algebra, the one generated by rigid conformal transformations, we will see that we can create a measure where there is exactly one such state. In that case we will define that state to be
$$
\omega \coloneqq Z(D^2) = \int_{\Omega(D^2,\cdot)} \mathcal{D}\phi \, e^{-S(D^2,\phi)} \in \mathbb{H}(S^1).
$$
In other words, we will intuitively use as the vacuum the state corresponding to the “empty” unit disk. We will see this in the example of the free Fermion, but there will also be a more rigorous follow up as to why we should always be able to do this. 



## State Operator Correspondence





# Untwisted Free Fermion



## Spin Structures in 2D



## A Path Integral for Free Fermions



## Virasoro Primaries



# Twisted Free Fermion



## An Equivalent Vacuum State?



## Interpreting the Defect



## Twisting the Path Integral



## Decomposition Into Primaries
