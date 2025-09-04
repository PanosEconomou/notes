# Motivating Problem

## Resonances in strong interaction

We are looking for a way to explain the resonances observed in strong interactions. We do this outside from a QFT, and try to write down the amplitude directly using consistency conditions. 

**<u>Definition:</u>** The Veneziano amplitude is the one that satisfies the DHS (modular invariance) constrain on 2-2 scattering in hadronic interactions and has the form
$$
A(s,t) = \frac{\Gamma(-\alpha(s))\Gamma(-\alpha(t))}{\Gamma(-\alpha(s) - \alpha(t))},
$$
where $\alpha: \mathbb{R}\to \mathbb{R}$ is a linear function and $\Gamma$ is the Euler function defined by
$$
\Gamma(y) \coloneqq \int_{0}^{\infty}\frac{dx}{x} x^{y} e^{-x}.
$$


Additional constraints to the Veneziano amplitude is it's pole behavior, i.e. expansions at poles are well defined and match local interactions. There are interesting limits to take other than $s\to \infty, t \in \mathbb{R}$. You could instead fix $s/t$ and set both $s,t\to \infty$. (the zero mass particle is a)

While this did not explain strong hadron interactions, it has a nice geometric interpretations. Quantizing the NG Action we found that this amplitude has the same spectrum. 



# Some kind of Construction

For a massless particle we can do the famous trick of minimizing the square of the length instead of the length itself. Here is the Lagrangian.

**<u>Definition:</u>** Let $(M,G)$ be a Lorentzian manifold and  $X: I \to M$ an embedding of a (p+1)-dimensional Riemannian manifold $(I,\gamma)$. Then the free brain action is given by
$$
S(X,\gamma) = -\frac{m}{2} \int_{I} \ast \text{tr}_{\gamma} X^\ast G.
$$
This trace is given by 
$$
\text{tr}_{\gamma} X^\ast G = \gamma^{ij} X^\ast G(e_i,e_j),
$$
where $\gamma = \gamma_{ij} e^i\otimes e^j$. This action is given by some version of low order expansion of the length, which is almost the square root of that thing.

> **Note:** Time to get unconfused about active and passive transformations. given a diffeomorphism $f:M\to M$ such that $f^\ast \sigma = \sigma'$ we have that 
> $$
> d\sigma' f'(\sigma') = d\sigma f(\sigma)
> $$
> This implies the physics transformation pullback law
> $$
> \frac{d\sigma'}{d\sigma} f'(\sigma') = h(\sigma).
> $$















