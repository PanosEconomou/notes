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

I am gonna start by saying that even though distributions can be thought of as “generalized functions” the concept of the value of a distribution at a point doesn’t have a rigorous definition. However, some of them do! We defined distributions $T_{g}$ for sufficiently nice functions $g$. In fact all $g$ needed to be was measurable and bounded. And with this we could relate the distribution with a function $T_g \leftrightarrow g$. So the “value” of $T_g$ at some point is the value of the function $g$. But this is clearly not true for all tempered distributions, and it doesn’t have to be! The point of having a *distribution* is that it is well defined to integrate against, and anything physical thing we choose to describe with such a construction we should be taking the integral of in order to extract a physical meaning.



Ok ok quick sidenote because it is cool

**<u>Example:</u>** Consider the tempered distribution $T_H \in \mathcal{J}^\vee(\mathbb{R})$ where $H:\mathbb{R} \to \mathbb{R}$ is the Heaviside function. Taking its derivative we get that for any $f \in \mathcal{J}$

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

YES! Yes we can do this! In fact this is what distributions are MOST famous for. We use them as tools to build solutions for differential equations. The whole theory of Green’s functions is based on using distributions as solutions to partial differential equations through convolving the source with a special distribution. Sometimes this distribution is of the form $T_G$ so we simply describe it with $G$. So let’s build this beautiful framework.

Let’s initially focus on linear PDE’s with constant complex coefficients, since these most useful in the language of field theory. 

**<u>Definition:</u>** Given $n$ indeterminates $\{X_1,X_2,\cdots,X_n\}$ with a product structre, a multivariate polynomial with complex coefficients $P \in \mathbb{C}[X_1,X_2,\cdots,X_n]$  is an element of the polynomial ring over the complex field, where the operations are addition and multiplications of a vector space (or if not possible a free field).

I HATE this definition, it is just fancy words to say that if you have things you can multiply you can form polynomials in n variables. The only good thing is that it allows us to suuuuper general about what is a polynomial for example

**<u>Definition:</u>** Given a smooth manifold $M$, and a basis  $\mathcal{B} = \{v_1,v_2,\cdots,v_n\} \subset TM$ of the tangent bundle at $p\in M$, a differential operator $D$ with constant coefficients is a polynomial $D\in \mathbb{C}[-i\mathcal{B}]= \mathbb{C}[-iv_1,-iv_2,\cdots,-iv_n]$.

We often use a standard basis like $\frac{\partial}{\partial x^\mu}$ to get expressions like

$$
D = \sum_{\alpha \in A} C_{\alpha} (-i\partial)^\alpha
$$

Summing over a set of multi-indices $\alpha = (\alpha_1,\alpha_2, \cdots, \alpha_k) \in A$. This is really pretentious, so here are some examples

**<u>Example:</u>** The laplace operator is given by

$$
\Delta = \partial_1^2 +  \partial_2^2 + \cdots  + \partial_n^2 \in \mathbb{C}[-i\partial_1,-i\partial_2, \cdots ,-i\partial_n]
$$

Another example is D’Alembert’s operator given by

$$
\Box = -\partial_1^2 +  \partial_2^2 + \cdots  + \partial_n^2 \in \mathbb{C}[-i\partial_1,-i\partial_2, \cdots ,-i\partial_n]
$$

which is the wave equation operator. 

Finally, the Klein-Gordon operator, the wave equation for massive scalar fields is given by

$$
\mathcal{D} = \Box + m^2 \in \mathbb{C}[-i\partial_1,-i\partial_2, \cdots ,-i\partial_n],
$$

for some constant $m\in \mathbb{R}$ that we call the mass.



Ok! Why am I even saying all this? We can now start defining differential equations in a way that they are symbollically compatible with both functions and distributions. For example using the last Proposition, we know that derivatives of distributions span the set of distributions so we can use this fact to write relations like this.

**<u>Definition:</u>** Given a differential operator $D \in \mathbb{C}[-i\mathcal{B}]$ and a distribution (smooth function) $f \in \mathcal{J}^\vee(M)$ a **solution** of the differential equation defined by $D$ sourced by $f$ is a distribution $u \in \mathcal{J}^\vee(M)$ such that

$$
Du = T_f
$$

A **fundamental solution** of the differential equation defined by $D$ is a distribution $G \in \mathcal{J}^\vee(M)$ such that

$$
D G = \delta
$$

where $\delta \in \mathcal{J}^\vee(M)$ is the delta function. 

I will explain the reasoning behind the introduction of the fundamental solution right after this definition

**<u>Definition:</u>** Given any two decreasing functions $f,g \in \mathcal{J}(M)$ is defined as 

$$
f\star g(x) = \int_M f(y)g(x-y) dy
$$

Similarly, the convolution between a distribution $T \in \mathcal{J}^\vee(M)$ and the function $f$ is defined as the distribution

$$
\begin{align*}
T\star f : \mathcal{J}(M) &\to \mathbb{C}\\
g &\mapsto (T\star f)(g) = T(f\star g)
\end{align*}
$$

**<u>Proposition:</u>** *(Properties of convolutions)* Given functions $f,g\in \mathcal{J}(M)$ and a distribution $T\in \mathcal{J}^\vee(M)$ then the following hold

1. $f\star g = g\star f$
2. $\partial_i(f\star g) = (\partial_i f) \star g = f \star (\partial_i g)$ 
3. $\partial_i (T\star f) = (\partial_i T)\star f = T \star (\partial_i f)$
4. For the delta function $\delta \in \mathcal{J}^\vee(M)$ we have that $(\delta \star f)(g) = \delta (f\star g) = \int_Mf g\ d\mu = T_f$

Ok with these properties we can finally write about the fundamental solution that

$$
D G =\delta \implies D (G\star f) = (DG)\star f = \delta \star f = T_f
$$

Therfore the following propsition

**<u>Proposition:</u>** Given a differential operator $D$ and a fundamental solution $G$ a solution for the differential equation of $D$ sourced by $f\in \mathcal{J}(M)$ is the distribution $G\star f$.

------



## Fourier Transforms of Distributions

In our exploration of finding the fundamental solutions we introduce the Fourier Transform. We initially use it as a tool for finding fundamental solutions.



**<u>Definition:</u>** The **Fourier Transform** on a riemannian manifold $(M,g)$ is a continuous, linear map

$$
\begin{align*}
\mathcal{F} : \mathcal{J}(M) &\to \mathcal{J}(M)\\
f &\mapsto (\mathcal{F}f)(\omega)=\int_M f(x) e^{ig(x,\omega)}dx
\end{align*}
$$

**<u>Proposition:</u>** The Fourier Transform is invevrible with inverse

$$
\begin{align*}
\mathcal{F}^{-1}:\mathcal{J}(M) &\to \mathcal{J}(M)\\
f &\mapsto (\mathcal{F}^{-1}f)(\omega) = \frac{1}{(2\pi)^{\dim M}}\int_M f(x) e^{-ig(\omega,x)}dx
\end{align*}
$$

**<u>Proof:</u>** Guaranteed by Fourier’s Identity.


After this formulation of the Fourier transform in the language of Schwarz functions, we can define the Fourier transform on distributions by inducing a similar map on the dual space. To do this we use the beautiful adjoint! (as we have been sectretly doing all this time)

**<u>Definition:</u>** The **Fourier Transform** of distributions $\mathcal{F}'$ on a Riemannian manifold $(M,g)$ is the adjoint of the Fourier transform, given by

$$
(\mathcal{F}'T)(f) = T(\mathcal{F} f)
$$

***Note:*** We often drop the prime when talking about the fourier transform of distributions and functions, just like we did for the derivatives. 

**<u>Proposition:</u>** Given a map $g \in \mathcal{J}(M)$ then $\mathcal{F}T_g = T_{\mathcal{F}g}$.

**<u>Examples:</u>** Here are some examples of Fourier transforms of distributions. Here we use some abuse of notation, where given a function $f:M\to\mathbb{C}$ we say some distribution $T = f \iff T =T_f$ .

1. $\mathcal{F} H = \frac{i}{\omega}$
2. $\mathcal{F}\delta = 1$
3. $\mathcal{F}^{-1}(e^{ig(p,y)})= \delta_y$



The Fourier transform is super useful because of the following proposition

**<u>Proposition:</u>** Given some distribution $T \in \mathcal{J}^\vee(M)$, then the following identity holds

$$
\mathcal{F}{\partial^\alpha T} = (-ip)^\alpha \mathcal{F}T
$$

for some multi-index $\alpha$. 

This leads immidiately to the following super nice Proposition. 

**<u>Proposition:</u>** Given a differential operator $D \in \mathbb{C}[-i\mathcal{B}]$ we can find its characteristic polynomial $P$ as the polynomial with the same coefficients $P\in \mathbb{C}[p^1,p^2,\cdots, p^n]$. Therefore, a fundamental solution $G$ to the differential equation defined by $D$ is given by

$$
G = \mathcal{F}^{-1}\frac{1}{P}
$$

**<u>Example:</u>** Consider the Klein Gordon equation given by the differential operator $\mathcal{D} = \Box + m^2$ for some $m>0$. The characteristic polynomial is given by $P = g(p,p) + m^2 = p^\mu p_{\mu} +m^2$ where $g$ is the metric. Then a fundamental solution is given by

$$
G = \mathcal{F}^{-1}\frac{1}{P} = \mathcal{F}^{-1}\frac{1}{p^2 + m}
$$














