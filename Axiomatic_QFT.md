# Axiomatic QFT

Even though this is not a thing people are trying to do it. Here are some cool results that are compatible with the quantizations that we present all the time.



## Distributions

It would be tempting to think that since in Classical field theory the fields are sections of vector bundles over $M$, (and often can be reduced to $C^{\infty}(M)$ functions) this is not the case for a their quantum counterparts in QFT. A good description ends up being formulated in the language of distributions which we are going to talk about here.

**<u>Definition:</u>** Consider the set $\mathcal{J}(M) \subset C^\infty(M,\mathbb{C})$ that contains all smooth complex valued functions such that
$$
|f|_{p,k} \coloneqq \sup_{|\alpha| \leq p} \sup_{x\in M} |\partial^\alpha f(x)|(1+|x|^2)^k < \infty,
$$
for all $p,k \in \mathbb{N}$ (where $\alpha$ is some multi-index). $\mathcal{J}$ is a complex vector space for any smooth manifold $M$, and is known as the space of **rapidly decreasing functions on M**. We also call the dual space $\mathcal{J}^\vee$ the space of **tempered distributions.**

***Note:*** $|\cdot|_{p,k}$ Defines a seminorm on $\mathcal{J}$ for all $p,k \in \mathbb{N}$.

**<u>Property:</u>** **(Defining Property of tempered distributions)** A tempered distribution $T \in \mathcal{J}^\vee$ is a linear map $T: \mathcal{J} \to \mathbb{C}$ that is continuous in the topology induced by all such seminorms. 

*This is simply a restatement of the definition of the dual space*.

This has an interesting implication

**<u>Corollary:</u>** Any tempered distribution $T$ is bounded for every seminorm, i.e. for all  $f\in \mathcal{J}$, $p,k \in \mathbb{N}$ the image
$$
|T(f)| \leq C|f|_{p,k},
$$
The topology we add on $\mathcal{J}^\vee$ is that of uniform convergence on any compact subset of $\mathcal{J}$.

Arbitrarily, distributions may look weird objects to play around with but they aren’t that much. For example, any measurable and bounded function $g\in C^\infty(M,\mathbb{C})$  can give rise to a distribution.

**<u>Proposition:</u>** Given $g \in C^\infty(M,\mathbb{C})$ that is measurable, and bounded, i.e. 
$$
\int_M g\ d\mu < \infty,
$$
with respec to some measure $\mu$ and the set $g(M)$ is bounded in $\mathbb{C}$.









