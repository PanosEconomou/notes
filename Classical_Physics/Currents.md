# Conserved Currents

We have found what [momentum](./Momentum.md) is, now it is time to find out what a conserved current is. We will start doing this classically, first with Lagrangian field theory, then using Hamiltonian field theory, and then using Path Integration in quantum field theory.

[toc]

# Classical Field Theory

Let's begin with a definition of a conserved current.

**<u>Definition:</u>** Given a smooth manifold $M$ of dimension $n$ a **current** $J\in \Omega^{n-1}(M)$ is an $n-1$ form on $M$. The current is **conserved** iff it is closed, i.e. $dJ =0$.



## Quick Setup 

The setup of Lagrangian field theory on smooth manifolds (this can be generalized, but I don't know how to work on the more general setting) is as follows. We consider $(M,g)$ a Riemannian manifold, and $\pi : E\to M$ be some vector bundle over $M$. Then we get a map $S:\Gamma(E) \to \mathbb{R}$ which is an action on $M$, given for any $\phi \in \Gamma^\infty(E)$ by
$$
S(\phi) = \int_M \ast \mathcal{L}(\phi),
$$
where $\mathcal{L}:\Gamma(E)\to \mathbb{R}$ is a continuous Lagrangian and $\ast$ is the hodge star. This is the setup we adopt in the following section.  Note that $\Gamma(E)$, the set of sections of $E$, is a real Hilbert space with inner product induced by the metric on $M$. 

Specifically, one can obtain the field equations through variation. 

**<u>Lemma</u>**: For any $\eta \in \Gamma(E)$, the variation of $S$ under $\eta$ is given by
$$
\delta_\eta S(\phi) = \int_M E_\phi(\eta) + d(J_\phi(\eta)),
$$
where $E_\phi : \Gamma(E) \to \Omega^n(M)$ is a linear map called the **Euler-Lagrange equations**, and $J_\phi:\Gamma(E)\to \Omega^{n-1}(M)$ is another linear map.

***Proof:*** The quickest proof I can think of is given by thinking of the Lagrangian as a smooth map on some Jet bundle of $E$, and then showing that the variation of that is a contraction of the differential by the jet of $\eta$, proving the above thing. However, this proof sucks because Jet bundles suck. Yet, we could reproducing without pesky Jets by explicitly using variations, by noticing that the variations are linear maps on the variation variable, and reinterpreting the Lagrangian as a function of $\phi$ and all its derivatives, then using integration by parts to show the formula above. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$


In particular one can obtain the variation of the action by any sufficiently vanishing field $\eta \in \Gamma(E)$, in other words we want an $\eta$ satisfying the following definition.

**<u>Definition:</u>** A **test section** $\eta \in \Gamma(E)$ is such that that for every linear map $f:\Gamma(E) \to \Omega^{n-1}(M)$ then 
$$
\int_M d(f(\eta)) = 0.
$$
The set of test sections is denoted by $\Gamma_0(E)$. 

While this condition might seem esoteric it isn't as much. Every such linear map can be written as $f(\eta)^j = f^{i}_{\ j}\eta^j$ which is essentially a sum over the components of $\eta$. For example, in the case of $M = I\subset \mathbb R$, a compact interval, this condition is equivalent to saying that the components of $\eta$ vanish at the endpoints. 

**<u>Corollary:</u>** *(Least Action Principle)* For any $\phi \in \Gamma(E)$ the following are equivalent
$$
\delta_\eta S(\phi) = 0,\ \forall\eta \in \Gamma_0(E)  \iff E_\phi = 0.
$$
***Proof:*** By the previous lemma
$$
0 =\delta_\eta S(\phi) = \int_M E_\phi(\eta)\, \forall \eta \in \Gamma_0(E) \iff E_\phi =0.
$$

$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

## Timelike Foliations

Given such a manifold $M$ we often assume that there exists a global free and proper action of $\mathbb R$ on $M$ called time evolution. This has the following interesting property.

**<u>Corollary:</u>** *(Existence of timelike slices)* $M$ is isomorphic to $\Sigma \times \mathbb{R}$ where $\Sigma \coloneqq M/{\mathbb{R}}$, the quotient under time evolution. The subset $\Sigma_{t} = \Sigma\times \{t\}$ is called a **timelike slice**.

***Proof:*** Since time evolution is a Lie group action that is free and proper, this result is a corollary of the quotient manifold theorem. This is further explored [here](../Projects/CFT/Free_Fields.md#Wick-Rotation). 

 

Now we have all the formalism we need to explore Noether's theorem!

## Noether's Theorem

While this definition is general enough it is not very useful for physics. What we usually refer to in Lagrangian mechanics is conserved currents arising from a particular action of some Lie group on the set of fields of the theory. We obtain such currents using Noether's Theorem. 

**<u>Theorem:</u>** *(Noether's Theorem on Smooth Structures)* Consider a Lie group $G$ and a representation $\rho: G\to \text{Aut}(\Gamma(E))$ such that the action $S:\Gamma(E)\to \R $ is $G$-invariant, then for every element of the Lie algebra $X\in \mathfrak{g}$ there exists a map $J_X:\Gamma(E)\to  \Omega^{n-1}(M)$ such that $dJ_X(\phi) = 0$ if $\phi \in \Gamma(E)$ is an extremum of $S$. Such a map is called a **Noether current**.

So in physics what we call a conserved current is a map of fields to currents, such that if the current is conserved every time the field is a solution to the field equations. Let's see some examples.  

**<u>Example:</u>** *(Spacetime Symmetries)* Consider a Lie group $G$ with an action $\rho:G\to \text{Diff}(M)$ on the manifold $M$. Then this induces an action on the fields by pullback. In particular, given a definition of the pullback on the vector bundle $\pi : E\to M$ we have a new action $\bar \rho : G\to \text{Aut}(M)$ (which is a representation because of the linearity of the pullback) is given for any $g\in G$ and $\phi \in \Gamma(E)$ by 
$$
\bar\rho(\phi) = \rho(g^{-1})^\ast \phi.
$$
Now we have an action on the set of fields. We are now ready to find the conserved currents using the Noether procedure. Given any $\phi \in \Gamma(E)$, consider the map $\tilde \phi : \mathfrak{g}\to \Gamma(E)$ such that $\tilde{\phi}(X) = \bar \rho(e^X)\phi = \rho(e^{-X})^\ast \phi$. Under this map we can calculate the variation of $\phi$ based on the Lie algebra element $X\in \mathfrak{g}$. This is given by 
$$
\delta_X\phi = \bar \rho_\ast(X) \phi,
$$
where $\bar \rho_\ast (X)$ is the induced representation of the Lie algebra on the fields by pushforward $\bar \rho_\ast : \mathfrak{g} = \text{End}(\Gamma(E))$. Knowing that $S$ is $G$-invariant we have that
$$
S(\phi) = S(\bar\rho (e^X)\phi) \implies 0 = \delta_XS(\phi) = \delta_{\delta_X\phi}S(\phi) = \int_M E_{\phi}(\delta_X\phi) + dJ_{\phi}(\delta_X\phi).
$$
If $\phi$ is on shell (aka a solution of the field equations) we have that $E_\phi = 0$ and therefore, 
$$
0 = \int_M dJ_\phi(\delta_X\phi),
$$
which implies that $J_\phi(\delta_X\phi)$ is a conserved current! In particular, the Noether current associated to this Lie group action is the map
$$
\begin{align*}
J_X: \Gamma(E) &\to \Omega^{n-1}(M)\\
\phi &\mapsto J_X(\phi) = J_{\phi}(\delta_X\phi) = J_\phi(\bar\rho_\ast(X) \phi),
\end{align*}
$$
or in other words
$$
J_X = J_\phi \circ \bar \rho_\ast(X).
$$

$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$



## Conserved Charges

Now that we have the formalism of obtaining conserved currents under our belt, we can create another construction which is called a conserved charge.

**<u>Definition:</u>** Given a Noether current $J:\mathfrak{g}\times \Gamma(E) \to \Omega^{n-1}(M)$ associated with a Lie algebra representation of a Lie algebra $\mathfrak{g}$ on $\Gamma(E)$  a **conserved charge** is a map $Q:\mathfrak{g}\times \Gamma(E) \to \mathbb{R}$ given by 
$$

$$






 













 