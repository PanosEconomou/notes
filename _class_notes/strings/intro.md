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



# Classical String Quantization

We will start by considering the standard boring stupid canonical quantization where we "promote" stuff.

We define position and momenta like so
$$
\begin{align*}
X^\mu &&  P_{\mu} \coloneqq T\eta_{\mu\nu} X^{\nu},
\end{align*}
$$
where $X:\Sigma \to M$ is the embedding of the worldsheet. These interpreted as $M$ sections on $\Sigma$ where we have stuff
$$
[X^\mu(\sigma),P_{\nu}(\sigma')] = i\delta^\mu_\nu \delta(\sigma - \sigma'),
$$
with the rest of the commutators vanishing. Remember that we are quantizing on a slice for some $\tau = 0$, that's why these are only functions of $\sigma$. Using the expansion we wrote last time we can rebase this in terms of modes, and extract their commutation properties. Doing so we find that with free boundary conditions the modes satisfy
$$
\begin{align*}
[\alpha_{m}^\mu, \alpha_{n}^\nu] &= m \delta_{m+n,0} \eta^{\mu\nu}\\
[\tilde \alpha_{m}^\mu, \tilde \alpha_{n}^\nu] &= m \delta_{m+n,0} \eta^{\mu\nu},
\end{align*}
$$
and using our standard expectations for creating and annihilation operators for oscillators we can find that these are proportional to the creator and annihilation operators, i.e. 
$$
\left(\alpha^{\mu}_{m}\right)^\dagger = \alpha^{\mu}_{-m}.
$$
So far we haven't gauged fixed everything though. Pullbacks under analytic and antianalytic maps can be canceled by Weyl invariance and that still exists here trough field redefinition.

Now we have a choice, when it comes to constraining the stress tensor. If we impose the vanishing of the diagonal of the stress tensor, in the thermal basis, before quantization this is called **light-cone quantization**. The other way to do this is called **covariant quantization**. This is quantize first impose constraints later, very Faddeev Popov flavored.

> Turns out when you do this quantization of imposing weak vanishing of $T$ on a "physical subspace" of the Hilbert space, any condition leads to equivalent solutions for the physical subspace. 

What we want to do is for two states $\phi,\psi \in \mathcal{H}_{\text{phys}}$ then
$$
\langle \phi, T\psi \rangle = 0.
$$
But when we do this, we can't get rid of the negative norm states seeping into our physical Hilbert space. We find that we can rephrase  this condition as 
$$
\begin{align*}
(L_0 - a) \psi &= 0\\
L_m \psi &= 0 \ \forall m>0.
\end{align*}
$$
and if $a > 1$ we have those pesky negative states seeping into the Hilbert space. The way to do this is to write these conditions in terms of modes and then start solving. 



## Lightcone Quantization

Now let's try to fix the stress tension condition before quantization. Will we get a different theory? Who knows? It's called lightcone quantization because the coordinates we are using are two that resize on the two components of a lightcone and the remaining spatial ones.

If we follow through (Polchinski ch.1) we will find that forcing Lorenz invariance requires that the $D=26$ and $a=1$. Not only that, but this is the case where the two quantization schemes coincide! This is so cool! 

Conditions we want to force are symmetry constraints. If our target space's dimension is $D$ we know that a massless representation must be a representation of $SO(D-2)$. This fixes $a$. The reason why we have 2 less dimensions is that for a massless vector operator we have a gauge fixing condition and a gauge invariance which remove 2 degrees of freedom.

























