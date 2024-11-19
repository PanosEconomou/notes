# Conserved Currents

We have found what [momentum](./Momentum.md) is, now it is time to find out what a conserved current is. We will start doing this classically, first with Lagrangian field theory, then using Hamiltonian field theory, and then using Path Integration in quantum field theory.

[toc]

# Classical Field Theory

Let's begin with a definition of a conserved current.

**<u>Definition:</u>** Given a smooth manifold $M$ of dimension $n$ a **current** $J\in \Omega^{n-1}(M)$ is an $n-1$ form on $M$. The current is **conserved** iff it is closed, i.e. $dJ =0$.

The setup of Lagrangian field theory on smooth manifolds (this can be generalized, but I don't know how to work on the more general setting) is as follows. We consider $(M,g)$ a Riemannian manifold, and $\pi : E\to M$ be some vector bundle over $M$. Then we get a map $S:\Gamma(E) \to \mathbb{R}$ which is an action on $M$, given for any $\phi \in \Gamma^\infty(E)$ by
$$
S(\phi) = \int_M \ast \mathcal{L}\circ \phi,
$$
where $\mathcal{L}:E\to \mathbb{R}$ is a Lagrangian and $\ast$ is the hodge star. This is the setup we adopt in the following section.  Note that $\Gamma(E)$ the set if sections of $E$ is a Hilbert space.

## Noether's Theorem

While this definition is general enough it is not very useful for physics. What we usually refer to in Lagrangian mechanics is conserved currents arising from a particular action of some Lie group on the set of fields of the theory. We obtain such currents using Noether's Theorem. 

**<u>Theorem:</u>** *(Noether's Theorem on Smooth Structures)* Consider a Lie group $G$ and a representation $\rho: G\to \text{Aut}(\Gamma(E))$ such that the action $S:\Gamma(E)\to \R $ is $G$-invariant, then for every element of the Lie algebra $X\in \mathfrak{g}$ there exists a map $J_X:\Gamma(E)\to  \Omega^{n-1}(M)$ such that $dJ_X(\phi) = 0$ if $\phi \in \Gamma(E)$ is an extremum of $S$. 

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
S(\phi) = S(\bar\rho (e^X)\phi) \implies 0 = \delta_XS(\phi) = \int_{M}
$$


 













 