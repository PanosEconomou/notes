# Conserved Currents

We have found what [momentum](./Momentum.md) is, now it is time to find out what a conserved current is. We will start doing this classically, first with Lagrangian field theory, then using Hamiltonian field theory, and then using Path Integration in quantum field theory.



[toc]

# In Classical Field Theory

Let's begin with a definition of a conserved current.

**<u>Definition:</u>** Given a smooth manifold $M$ of dimension $n$ a **current** $J\in \Omega^{n-1}(M)$ is an $n-1$ form on $M$. The current is **conserved** iff it is closed, i.e. $dJ =0$.



## Quick Setup 

The setup of Lagrangian field theory on smooth manifolds (this can be generalized, but I don't know how to work on the more general setting) is as follows. We consider $(M,g)$ a Lorentzian manifold, and $\pi : E\to M$ be some vector bundle over $M$. Then we get a map $S:\Gamma(E) \to \mathbb{R}$ which is an action on $M$, given for any $\phi \in \Gamma^\infty(E)$ by
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

Given such a manifold $M$ we often assume that there exists a global free and proper (timelike if the manifold is pseudo-Riemannian) action of $\mathbb R$ on $M$ called time evolution. This has the following interesting property.

**<u>Corollary:</u>** *(Existence of timelike slices)* $M$ is isomorphic to $\Sigma \times \mathbb{R}$ where $\Sigma \coloneqq M/{\mathbb{R}}$, the quotient under time evolution. The subset $\Sigma_{t} = \Sigma\times \{t\}$ is called a **timelike slice**, and it has dimension $n-1$. 

***Proof:*** Since time evolution is a Lie group action that is free and proper, this result is a corollary of the quotient manifold theorem. This is further explored [here](../Projects/CFT/Free_Fields.md#Wick-Rotation). 

  

## The Shell 

In physics we often say that something is true *on shell*. This intuitively means that we did our calculations with fields that are solutions to the Euler Lagrange equation. Here is a rigorous definition of this.

**<u>Definition:</u>** Consider the map $E$ that carries out the assignment $\phi \mapsto E_\phi$ of a field to the Euler Lagrange equations as defined above. The **shell** is the set
$$
S = \text{ker\,}E \subset \Gamma^\infty(E).
$$
Now, consider the embedding $\iota:S \to \Gamma^\infty(E)$. We say that an algebraic structure is **on shell** if it is pulled back by $\iota$. 



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
which implies that $J_\phi(\delta_X\phi)$ is a conserved current on shell! In particular, the Noether current associated to this Lie group action is the map
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

Here is a cool theorem though.

**<u>Theorem:</u>** For each $\phi \in \Gamma(E)$ the Noether currents form a representation of a central extension of the Lie algebra.

***Proof:***  I don't know yet which one hehe.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$


## Conserved Charges

Now that we have the formalism of obtaining conserved currents under our belt, we can create another construction which is called a conserved charge.

**<u>Definition:</u>** Given a Noether current $J:\mathfrak{g}\times \Gamma(E) \to \Omega^{n-1}(M)$ associated with a Lie algebra representation of a Lie algebra $\mathfrak{g}$ on $\Gamma(E)$  a **conserved charge** for some codimension-1 surface $\Sigma \subset M$ is a map $Q_{\Sigma}:\mathfrak{g}\times \Gamma(E) \to \mathbb{R}$ given for any $\phi \in \Gamma(E)$ and $X\in \mathfrak{g}$ the function
$$
Q_\Sigma(X,\phi) = \int_{\Sigma} J_X(\phi),
$$
Sometimes, when $\Sigma$ is unambiguous we refer to $Q_X$ as the conserved charge for the symmetry generated by $X$ and $Q_X(\phi)$ as the conserved charge of field $\phi$ under the symmetry generated by $X$.

**<u>Theorem:</u>** If the surfaces $\Sigma,K \subset M$ are homologous, then $Q_\Sigma = Q_{K}$.

***Proof:*** If these two surfaces are homologous, then they enclose a region $R\subset M$ such that $\partial R = \Sigma \sqcup -K$, where $-K$ is the surface with the opposite orientation. Since we know that $dJ_X(\phi) = 0$, consider the integral
$$
0 = \int_{R} dJ_X = \int_{\Sigma \sqcup -K} J_X = \int_{\Sigma}J_X -\int_{K}J_X \implies Q_{\Sigma} = Q_{K},
$$
where we used stokes theorem in the second step. 

We will see later that the conserved charges $Q_X$ form a representation of some central extension $\mathfrak{g}$ in a very specific way. But in order to do this we need Hamiltonian field theory.



# In Hamiltonian Field Theory

This is perhaps a more illuminating framework to discuss why the currents and charges are useful objects! This will also help us motivate generalized symmetries in some sense.

## Quick Setup

The place where physics happens in Hamiltonian field theory is the **phase space**. In its most covariant formulation it is **the shell**, i.e the set of classical solutions to the equations of motion, which is defined in exactly the same way as it was above in classical Lagrangian field theory.

**<u>Definition:</u>** The **phase space** $\Pi$ for a field theory on $\pi:E\to M$ over some Lorentzian manifold $(M,g)$ with Lagrangian $\mathcal{L}$ is the shell of that Lagrangian, with canonical embedding map $\iota : \Pi \to \Gamma(E)$.

Often such a space can be parameterized by a symplectic manifold. For example in classical mechanics, where the underlying manifold is $\mathbb{R}$, and the fields are sections of an $M$ bundle over $\mathbb{R}$, there is a bijection $T^\ast M \cong \Pi$. We will explore this in more detail. However, when such a parameterization is possible, we often refer to the symplectic manifold as the phase space and $\Pi$ as the covariant phase space. 

To figure out the symplectic structure let's start with an example in field theory.

**<u>Corollary:</u>** *(Fundamental Variational Formula)* Let $\mathcal{L} \in \Omega^{n,0}(J^\infty E)$ be a Lagrangian, and assume that we are working on some coordinate chart $(U^\infty, x^i, \phi^i, \phi^i_I)$ Then we have that
$$
\delta \mathcal{L} = E\delta \phi - d\theta
$$
where $E \in C^\infty(J^\infty E)$ and $\theta \in \Omega^{n-1,1}(J^\infty E)$ where $\delta, d$ are the vertical and horizontal differentials respectively. 

***Proof:*** This is what we proved before but in the more formal language of Jet bundles.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
The key object in hamiltonian field theory is this $\theta$ form over there. 



 













 