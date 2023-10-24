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

**<u>Example:</u>** Given a function $g: M \to \mathbb{C}$ that is measurable, and bounded, i.e. 

$$
\int_M g\ d\mu < \infty,
$$

with respect to some measure $\mu$, and the set $g(M)$ is bounded in $\mathbb{C}$, then the map

$$
\begin{align*}
T_g:\mathcal{J} &\to \mathbb{C}\\
f &\mapsto T_g(f) = \int_M gf\ d\mu,
\end{align*}
$$

is a tempered distribution. 



***Note:*** Distributions are much richer objects. It goes without saying that it is possible to have distributions that are not associated with maps in any way. For example the $\delta$ function is such a distribution. 



Even though distributions are terrible objects, we would like to somehow treat them with the same confidence that we treat smooth maps. And as metrizable vector spaces we could start thinking about taking their derivatives and such

**<u>Definition:</u>** Given a tempered distribution $T \in \mathcal{J}^\vee (M)$ we define its derivate $\partial^\alpha T$ with respect to some multi-index $\alpha = (\alpha_1, \alpha_2, \cdots \alpha_n)$ as the map

$$
\begin{align*}
\partial^\alpha T : \mathcal{J}^\vee &\to \mathbb{C}\\
f &\mapsto \partial^\alpha T(f) = (-1)^{|\alpha|} \ T(\partial^{\alpha} f)
\end{align*}
$$

**<u>Corollary:</u>** Any derivative of $T \in \mathcal{J}^\vee$ is a tempered distribution. 

I mean… look at it, we just multiplied it by a constant.

**<u>Corollary:</u>** $\partial^\alpha T_g = T_{\partial^\alpha g}$.



Well, ok! We have now managed to define derivatives in a way, but it would be nice to show that the derivatives of distributions have a compatible intuition with derivatives of maps in some sense. Because we would like to use them in physics as such.





Ok ok quick sidenote because it is cool

**<u>Example:</u>** Consider the tempered distribution $T_H \in \mathcal{J}^\vee(\mathbb{R})$ where $H$ is the Heaviside function. Taking its derivative we get that for any $f \in \mathcal{J}$

$$
\begin{align*}
\frac{\partial}{\partial x} T_H (f) 
&= - T_H\left(\frac{\partial f}{\partial x}\right)\\ 
&= - \int_{\mathbb{R}} H\ \frac{\partial f}{\partial x} dx\\
&= - \int_{0}^\infty \frac{\partial f}{\partial x} dx\\
&= f(0) - \lim_{x\to \infty}f(x)\\
&= f(0) & \text{as } f \in \mathcal{J},
\end{align*}
$$

SO OMG THAT MEANS

$$
\frac{\partial }{\partial x} T_H = \delta.
$$

Which is the super well known result where “The delta function is the derivative of the Heaviside function” which always bothered me as Heaviside is not even freaking differentiable!



Directly pinging off of this example, we can prove the following property

**<u>Proposition:</u>** Any tempered distribution $T \in \mathcal{J}^\vee(\mathbb{R}^n)$ can be written as 

$$
T = \sum_{0 \leq |\alpha| \leq k} \partial^\alpha T_{p_\alpha}
$$

where $p_\alpha : M \to \mathbb{C}$ for some multi-index $\alpha$ is a continuous function of at most polynomial growth, i.e. $|p_\alpha(x)| \leq C (|x|^{-|\alpha|} + |x|^{|\alpha|})$ 

This is a much more powerful proposition than it seems. It means that we can uniquely identify any tempered distribution by knowing derivatives of distributions that are associated to functions. Which means we can write differential equations to solve for distributions! Therefore, they are so much more similar to smooth functions.

-----



## Partial Differential Equations of Distributions

YES! Yes we can do this

$$
bob
$$


















