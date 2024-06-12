# Distributions

Formal distributions are such cool concepts in physics and we use them all the time! They are a way to generalize functions over some spaces but their genious is that so much of their properties are defined even better than most functions. For example all their derivatives exist, their Fourier transform exists, every linear PDE has a fundamental solution given by a distribution and that barely scratches the surface.

In here we will talk about distributions in a general sense such that we can build up to describing Quantum Fields in QFT.

We will start with defining *weak limits* of functions which will naturally lead to realizing the need for an extra object which is a distribution. Then we will define the set of test function, give it a nice topology and proceed with defining the set of distributions as linear maps on this space and identifying it with the closure under a nice topology. After that we will start playing! We will see examples of distributions, take their fourier transform, understand what local distributions are and so much more. 

[toc]





# Definions and Formalism

We begin by studying limits of functions. In essence this is an attempt to add a topology to the set of functions over some space. Eventually, we want to define distributions on smooth manifolds because at the end of the day we want to do physics. However, this is slightly cumbersome, so when proving things we will prove them in charts and then generalize to a general open subset of a manifold. 

> **<u>Remark:</u>** When talking about integration we will use a Riemannian manifold here in order to define the appropriate topology. A Riemannian manifold comes with a natural integration of smooth functions that lends itself to a Legesque integral that widens the set of measurable functions to things that are not necessarily smooth. This is the integral we use here, even though we don’t explicitly construct it.  

## Set of Test Functions

Distributions are objects that take in a test function and give you a number. Here we will talk about what is a test function in the first place. 

**<u>Definition:</u>** Let $U$ be an open subset of some smooth manifold. The **set of test functions** $\mathcal D (U)$ is the set of all smooth functions with compact support on $U$. In other words it is given by

$$
\mathcal D(U) \coloneqq \{f \in C^\infty(U) \mid \text{supp } f \subset U\}
$$

We pick these functions because they are particularly nice. They have all their derivatives defined and integrals finite for any open set that we can choose. Here is a very nice series of such functions. 

**<u>Example:</u>** Consider the following series of functions $\{\omega_{\epsilon}\}_{\epsilon \in \mathbb{R}^n} \subset \mathcal D(\mathbb R^n)$ given by

$$
\omega_\epsilon(x) = \begin{cases}A_\epsilon \exp\frac{-\epsilon^2}{\epsilon^2 - |x|^2} & |x| < \epsilon \\ 0 & |x| \geq \epsilon\end{cases}
$$

Where $A_\epsilon^{-1} = \int_{|x| \leq \epsilon} \exp\frac{-\epsilon^2}{\epsilon^2 - |x|^2}$. We will see later that sequences of these functions converge to the $\delta$ function under a particular definition of convergence. In fact we will use these as examples to come up with the topology of the set $\mathcal D(U)$ in more generality. 

Before we add a topology, let’s consider a special set of functions called bump functions. We will define it in general manifolds because we will use it later anyway. 

**<u>Theorem:</u>** *(Existance of bump functions)* Consider a manifold $M$ and a compact subset $A \subset M$, and $B\subset M$ is an open subset that contains $A$. Then there exists a smooth function $\eta_A: M \to [0,1]$ such that

$$
\eta_A(x) = 
\begin{cases}
1 & \text{if } x \in A\\
0 & \text{if } x \in M \setminus B
\end{cases}
$$

**<u>Corollary:</u>** Given an open subset $U \subset M$ for any compact subset $A \subset U$ there exists a bump function $\eta_A \in \mathcal D(U)$. 

***Note:*** We sometimes call bump functions characteristic functions. 

The more interesting theorem is the partitions of unity which we borrow directly from geometry

**<u>Theorem:</u>** *(Existance of Partitions of unity)* Given a locally finite open cover $\mathcal A$ of $U\subset M$ there exists a set of smooth functions $\{\epsilon_A : A \to [0,1]\}_{A\in \mathcal A}$ such that $\epsilon_A \in \mathcal D(A)$ and for any $x \in U$

$$
\sum_{A\in \mathcal A} \epsilon_A(x) = 1
$$

Note that the $\omega_\epsilon$​ functions we defined earlier are such bump functions. 



## Turning $\mathcal D(U)$ into a topological space

We want to add a sense of closesness into our set of test functions. Luckily the set of test functions is a subset of the integrable functions on $U$ which apart form being a vector space can also admit the topology of a metric space. Let’s see how to do this. 

**<u>Definition:</u>** Let $U$ be an open subset of some smooth *Riemannian* manifold and $f : U \to \mathbb{R}$ be some measurable function on $U$. Then $f$ is **p-integrable** if

$$
||f||_{p} \coloneqq \int_U |f|^p < \infty
$$

The **set of p-integrable functions** is defined as $\mathcal L^p(U)$​. Furthermore a function $f \in \mathcal L^p(U)$ is known as **locally p-integrable** if for every $x \in U$ there exists a neighborhood $V$ of $x$ such that $f \in \mathcal L^p(V)$. The **set of locally p-integrable** functions is denonted by $\mathcal L^p_{\text{loc}}(U)$. 

**<u>Corollary:</u>** The map $|| \cdot || : \mathcal L^p(U) \to \mathbb{R}$ is a metric. And therefore $\mathcal L^p(U)$ is a metric space.

**<u>Corollary:</u>** $\mathcal D (U) \subset \mathcal L^p(U)$ for any $p > 0$. Therefore $D(U)$ is a metric space. 

Now that we know that $D(U)$ is a metric space we can talk about sequences of functions and so on. Let’s use this to show something cool

**<u>Theorem</u>** $\mathcal D(U)$ is dense in $\mathcal L^p(U)$ for some open subset $U$​. 



## The Canonical LF Topology on $\mathcal D(U)$

While metric spaces are amazing, when it comes to finite dimensional vector spaces they might lack the limiting properties that we desire. To fix this we have introduced a type of topological spaces called ***L**imit of **F**rechet* spaces that are often more useful when talking about spaces of functions. We will try to find a canonical choice of an LF topology for the set of test functions.

The theory of LF spaces requires category theory to be able to fully describe, but we can cheat and define directly the LF topology on $\mathcal D(U)$ instead.  

**<u>Definition:</u>** A **linear smooth differential operator in** $U \subset M$ an open subset of an $n$ dimensional smooth manifold, is a smooth linear map $D : C^\infty(U) \to C^\infty(U)$ of the form

$$
D = \sum_{\alpha \in \mathbb N^n} c_\alpha \partial^\alpha,
$$

where all but finitely many $c_\alpha \in C^\infty(U)$ vanish. The **order** of such an operator is given by the largest norm of the multiindex of the nonvanishing coefficients $c_\alpha$, i.e. $\text{ord\,} D = |D|\coloneqq \sup \{|\alpha| \in \mathbb N^n\mid c_\alpha \neq 0\}$.

The point of the LF topology is to make all the differential operators continuous maps in $\mathcal D(U)$​. To do this we will first examine what type of topologies the space of test functions admits that are compatible with the vector space structure that it inherits as a set of Banach valued maps.

The topology that is compatible with a vector space is one that makes the operations of the vector space continuous maps. 

**<u>Definition:</u>** A **vector space topology** is a Frechet topology on an algebraic vector space such that the scalar multiplication and vector addtion maps are continuous. A vector space with a vector space topology is a **topological vector space.**

**<u>Corollary:</u>** A topological vector space is Hausdorff. 

***Proof:*** The proof relies on the fact that a vector space topology is Frechet (or $T_1$). We could have equivalently defined a vector space topology to be Hausdorff. 

The next thing we want, apart from compatibility with the algebraic vector space structure is a notion of convexity. 

**<u>Definition:</u>** A topological vector space $V$ over a field $\mathbb F$ is **locally convex** if for $0 \in V$ there exists a  (topological) neighborhood basis that consists of balanced convex sets. In other words for any neighborhood $U$ of the origin there exists some open, convex set $B$ in the basis such that for any $x \in U$ and $s \in \mathbb F$ such that $|s| \leq 1$ then $sx \in B$. 

The local convexity really is a property that can help us take narrower and narrower neighborhoods around the identity which will help A LOT with taking limits and proving convergence. We are now ready to define the topology on $\mathcal D(U)$.

**<u>Definition:</u>** The **canonical LF topology** on $\mathcal D(U)$ is the coursest locally convex vector space topology such that all linear smooth differential operators are continuous endomorphisms. 

From now on this is the topology we will assign to $\mathcal D(U)$. 

**<u>Lemma:</u>** The canonical LF topology on $\mathcal D(U)$ is strictly finer than the topology induced by $C^\infty(U)$ and $L^p(U).$ If a sequence converges using the norms $\|\cdot \|_p$ then it converges in $\mathcal D(U)$. 

From now on we will always assume that $\mathcal D(U)$ has the canonical LF topology. 



## Distributions

Now we are ready to define distributions.

**<u>Definition:</u>** A **distribution** on some open subset $U$ of a Riemannian manifold is an element of the dual space $\mathcal D'(U)$ of $\mathcal D(U)$, i.e. a continuous linear map $\phi: \mathcal D(U) \to \mathbb R$. 

**<u>Remark:</u>** While linearity is intuitively clear, continuity in this sense might be mysterious. In practice it means that for every convergent sequence of test functions $\{f_n\}_{n\in \mathbb{N}}$ 

$$
f_n \to f \in \mathcal D(U) \implies \phi(f_n) \to \phi(f) \text{ as } n\to \infty
$$

Notice that if the manifold was not Riemannian we would have no natural topology on $\mathcal D(U)$. Also as the dual space of $\mathcal D(U)$, $\mathcal D'(U)$ inherits all the nice operations on distributions that we normally have, like addition and scalar multiplication and so on. 

**<u>Corollary:</u>** $U \subset V \implies D'(U) \subset D'(V)$. 

Any open subset of a chart is a chart, so it would be helpful to think about restrictions of distributions.

**<u>Definition:</u>** Let $V\subset U$ be an open subset of some open subset $U$, and $f \in \mathcal D'(U)$, then the **restriction of** $f$ is a distribution $\left.f\right|_{V} \in \mathcal D'(V)$ such that for any $\phi \in D(V) \subset D(U)$

$$
\left. f\right|_V (\phi) = f(\phi)
$$

There is a notion of restriction of a distribution to submanifolds that we will explore soon. Also there is a canonical product of distributions that share singularities.



## Examples

Now we can have some fun playing with examples. We will introduce certain commonly encountered distributions as well as classes of distributions. The first thing is a very useful class of distributions called regular. 

**<u>Definition:</u>** A distribution $F\in \mathcal D'(U)$ on some open subset $U$ of a smooth manifold is called **regular** if there exist a locally integrable function $f \in \mathcal L^1_{\text{loc}}(U)$ such that for any test function $\phi \in D(U)$ 

$$
F(\phi) = \int_U f\phi
$$

In the case of regular distributions we often abuse notation and write $f$ instead of $F$​ to denote the distribution. 

**<u>Corollary:</u>** Since $\mathcal D(U) \subset \mathcal L^1_{\text{loc}}(U)$ with this identification there is an inclusion $\mathcal D(U) \hookrightarrow \mathcal D'(U)$​ as well. 

**<u>Example:</u>** *(The Heaviside function)* Consider the Heaviside function $h \in \mathcal L^1_{\text{loc}}(\mathbb{R})$ given by 

$$
h(x) = \begin{cases}
1, & x\geq 0\\
0, & x<0
\end{cases}
$$

Then according to the natural identification above the Heaviside function can be considered as a distribution $H \in \mathcal D'(\mathbb{R})$ where for any test function $f \in \mathcal D(\mathbb R)$

$$
H(f) = \int_0^\infty f(x) dx
$$

An interesting property is that $H(\omega_\epsilon) = \frac{1}{2}$  for any $\epsilon > 0$. But since $\omega_\epsilon$ is supported on $[-\epsilon,\epsilon]$ we can take the limit as $\epsilon \to 0$ to find that $\lim_{\epsilon \to 0} H(\omega_\epsilon) = \frac{1}{2}$ which is the reason that in a lot of applications we say that $h(0) = \frac{1}{2}$ instead of $1$. 

**<u>Example:</u>** *(The $\delta$ function)* Finally we can define one of the most commonly used objects in physics. The **delta function** on some open subset $U$ of some manifold centered at point $p \in U$ is the distribution $\delta_p \in \mathcal D'(U)$ such that for any $f \in \mathcal D(U)$ 

$$
\delta_p (f) = f(p)
$$

There are multiple ways we can construct it. One particularly nice one is using delta sequences. A sequence $\{\delta_p^k\}_{k\in \mathbb N} \subset \mathcal L^1_{\text{loc}}(U)$ (where we can use the identification we mentioned before to think of them as elements of $\mathcal D'(U)$) is a  **delta sequence**  if 

1. $p \in \text{supp } \delta_p^k \ \forall k\in \mathbb N$
2. $\text{supp } \delta_p^k$ is compact
3. $\int_U \delta_p^k = 1 \ \forall k\in \mathbb N$
4. $\int_U \delta_p^k = 1 \ \forall k\in \mathbb N$
5. $\int_{\text{supp}(\delta_p^k)} \to 0$ as $k \to \infty$. 

Then every delta sequence converges to the delta function, i.e. $\delta_p^k \to \delta_p$ as $k \to \infty$. 

Delta sequences are super powerful in prooving things because we can use them to construct averages of a function around a point. One such delta sequence is the bump functions $\omega_\epsilon \in \mathcal D(\mathbb R)$ we described earlier.

**<u>Example:</u>** *(The principal value)* We define the complex valued distribution $\mathcal P\frac{1}{x} \in \mathcal D'(\mathbb C)$ such that for any test function $f \in \mathcal D(\mathbb C)$ 

$$
\mathcal P\frac{1}{x} (f) = P.V. \int_\mathbb R \frac{f(x)}{x} dx = \lim_{\epsilon \to 0} \left[\int_{-\infty}^{-\epsilon} \frac{f(x)}{x} dx + \int_{\epsilon}^\infty \frac{f(x)}{x} dx\right]
$$

This is a very helpful distribution in physics since we always take integrals of the form when solving PDEs

$$
\lim_{\epsilon \to 0}\int_{\mathbb R} \frac{\phi(x)}{x + i\epsilon} dx = -\pi i \phi(0) + \mathcal P\frac{1}{x} (\phi)
$$

Therefore we can define the following super cool and helpful distributions

$$
\frac{1}{x + i0^{\pm}} = \mathcal P\frac{1}{x} \mp \pi i \delta
$$

## Remark on Scwartz Distributions

The set of test functions that we have defined so far is large. Sometimes we might want to restrict that set to functions with special properties. This will help us define things such as the Fourier transform of distributions and so on. Here we will introduce a commonly used set of test functions $\mathcal J(U)$ known as the *Scwarz functions* whose dual is a subspace of $\mathcal D'(U)$. Notice that $\mathcal J(U)$ doesn’t have to be a subset of $\mathcal D(U)$ in order for its dual to be so. 

**<u>Definition:</u>** 



# Localization

There is a particularly interesting class of distributions that we use all the time in physics because they can be super similar to functions. These are called *local distributions*. They are the ones that can be thought of as functions almost everywhere in space with the exception of some sets that we don’t mind. To do this we need to talk about support of distributions. 

## Support of Distributions

Smooth functions have support and in principle this notion should extend to distributions as well. Here is how we do it. Throughout the rest we assume that $U$ is some open subset of a smooth manifold unless indicated otherwise.

**<u>Definition:</u>** Given a distribution $f \in \mathcal D'(U)$ the **support of** $f$ is the complement of the largest subset where $f$ restricts to $0$. In other words

$$
\text{supp }f = U \setminus O
$$

 where $O$ is the largest subset such that $\left.f\right|_O = 0$. 

This definition already lends itself into some notion of localization of distribution. For example a distribution compactly supported in $U$ can then be naturally extended to the entire manifold. But there is a notion of support that is far more interesting to study.

**<u>Definition:</u>** Given a distribution $f \in \mathcal D'(U)$ the **singular support of** $f$, denoted by $\text{sing\,supp\,}f$ is the set of points in which there exists no neighborhood that the distribution restricts to a regular one, i.e. 

$$
\text{sing\,supp\,}f = \{x \in U\mid \nexists A \text{ neighborhood of }x \text{ s.t. } \left.f\right|_A \in \mathcal L^1_{\text{loc}}(A)\}
$$


These are essentially the points where if we were to try to think of the distribution as a function it would “blow up”. 

**<u>Example:</u>** $\text{sing\,supp\,}\delta_p = \text{supp\,}\delta_p = \{p\}$ for $\delta_p \in \mathcal D'(U),\ p\in U$. 



## Local Distributions

Now we are finally ready to talk about local distributions. We will define them here, show some examples, but really uncover how cool they are later.

**<u>Defintion:</u>** A distribution $f \in \mathcal D(U)$ is called **local** if its singular support has measure $0$. In other words a local distribution is regular in a neighborhood of almost every point in $U$. 

**<u>Example:</u>** The following are local distributions

1. The delta function
2. Any regural distribution
3. The Principal value
4. Probability measures for continuous random variables













[The Schwartz Space on a Manifold](https://mathoverflow.net/questions/80094/the-schwartz-space-on-a-manifold)

[Does a Fourier transformation on a (pseudo-)Riemannian manifold make sense?](https://math.stackexchange.com/questions/13902/does-a-fourier-transformation-on-a-pseudo-riemannian-manifold-make-sense)

[Tempered distributions and Schwartz functions on definable manifolds](https://www.sciencedirect.com/science/article/abs/pii/S0022123620300148)

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

**<u>Definition:</u>** Given any two decreasing functions $f,g \in \mathcal{J}(M)$ their **convolution** is defined as 

$$
f\star g(x) = \int_M f(y)g(x-y) dy
$$

Similarly, the **convolution** between a distribution $T \in \mathcal{J}^\vee(M)$ and the function $f$ is defined as the distribution

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

We can do much more rich operations in the language of distributions motivated by problems in physics. 











