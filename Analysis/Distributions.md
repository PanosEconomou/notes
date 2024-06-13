# Distributions

Formal distributions are such cool concepts in physics and we use them all the time! They are a way to generalize functions over some spaces but their genious is that so much of their properties are defined even better than most functions. For example all their derivatives exist, their Fourier transform exists, every linear PDE has a fundamental solution given by a distribution and that barely scratches the surface.

In here we will talk about distributions in a general sense such that we can build up to describing quantum fields in QFT.

We will start by defining test functions, playing around with their topology and slightly stretching what they can be. Then we define distributions as continous linear maps of test functions, highlight some of their properties and then we start playing! The main focus will be on the study of *local distributions* which are a special type of distributions that is super useful when we think of



These notes are compiled from: 

1. [The Analysis of Linear Partial Differential Operators I](https://link.springer.com/book/10.1007/978-3-642-61497-2)
2. [Methods of the Theory of Generalized Functions](https://www.taylorfrancis.com/books/mono/10.1201/9781482288162/methods-theory-generalized-functions-vladimirov) 
3. [Advanced Mathematical Analysis](https://link.springer.com/book/10.1007/978-1-4684-9886-8) 
4. [Generalized Functions and Partial Differential Equations](https://archive.org/details/generalizedfunct0000shil) 
5. [Partial Differential Equations I: Basic Theory](https://link.springer.com/book/10.1007/978-3-031-33859-5)
6. [A smooth introduction to the wavefront set](https://arxiv.org/pdf/1404.1778)



[toc]





# Definitions and Formalism

We begin by studying limits of functions. In essence this is an attempt to add a topology to the set of functions over some space. Eventually, we want to define distributions on smooth manifolds because at the end of the day we want to do physics. However, this is slightly cumbersome, so when proving things we will prove them in charts and then generalize to a general open subset of a manifold. 

> **<u>Remark:</u>** When talking about integration we will use a Riemannian manifold here in order to define the appropriate topology. A Riemannian manifold comes with a natural integration of smooth functions that lends itself to a Legesque integral that widens the set of measurable functions to things that are not necessarily smooth. This is the integral we use here, even though we don’t explicitly construct it.  

## Set of Test Functions

Distributions are objects that take in a test function and give you a number. Here we will talk about what is a test function in the first place. 

**<u>Definition:</u>** Let $U$ be an open subset of some smooth manifold, and $A$ a unital division algebra. The **set of test functions** $\mathcal D (U)$ is the set of all smooth functions with compact support on $U$. In other words it is given by

$$
\mathcal D(U,A) \coloneqq \{f \in C^\infty(U,A) \mid \text{supp } f \subset U\}.
$$

**<u>Remark:</u>** Here and throughout we will use the notation $C^\infty(U)$, $\mathcal D(U)$ to refer to the particular choice of $A = \mathbb R$ but the definitions are similar.

We pick these functions because they are particularly nice. They have all their derivatives defined and integrals finite for any open set that we can choose. Here is a very nice sequence of such functions. 

**<u>Example:</u>** Consider the following sequence of functions $\{\omega_{\epsilon}\}_{\epsilon \in \mathbb{R}^n} \subset \mathcal D(\mathbb R^n)$ given by

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
\sum_{A\in \mathcal A} \epsilon_A(x) = 1.
$$

Note that the $\omega_\epsilon$​ functions we defined earlier are such bump functions. 



## Turning $\mathcal D(U)$ into a topological space

We want to add a sense of closesness into our set of test functions. Luckily the set of test functions is a subset of the integrable functions on $U$ which apart form being a vector space can also admit the topology of a metric space. Let’s see how to do this. 

**<u>Definition:</u>** Let $U$ be an open subset of some smooth *Riemannian* manifold and $f : U \to \mathbb{R}$ be some measurable function on $U$. Then $f$ is **p-integrable** if

$$
||f||_{p} \coloneqq \int_U |f|^p < \infty.
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
f_n \to f \in \mathcal D(U) \implies \phi(f_n) \to \phi(f) \text{ as } n\to \infty.
$$

Notice that if the manifold was not Riemannian we would have no natural topology on $\mathcal D(U)$. Also as the dual space of $\mathcal D(U)$, $\mathcal D'(U)$ inherits all the nice operations on distributions that we normally have, like addition and scalar multiplication and so on. 

**<u>Lemma:</u>** $U \subset V \implies D'(U) \subset D'(V)$. 

Any open subset of a chart is a chart, so it would be helpful to think about restrictions of distributions.

**<u>Definition:</u>** Let $V\subset U$ be an open subset of some open subset $U$, and $f \in \mathcal D'(U)$, then the **restriction of** $f$ is a distribution $\left.f\right|_{V} \in \mathcal D'(V)$ such that for any $\phi \in D(V) \subset D(U)$

$$
\left. f\right|_V (\phi) = f(\phi).
$$

There is a notion of restriction of a distribution to submanifolds that we will explore soon. Also there is a canonical product of distributions that share singularities.



## Examples

Now we can have some fun playing with examples. We will introduce certain commonly encountered distributions as well as classes of distributions. The first thing is a very useful class of distributions called regular. 

**<u>Definition:</u>** A distribution $F\in \mathcal D'(U)$ on some open subset $U$ of a smooth manifold is called **regular** if there exist a locally integrable function $f \in \mathcal L^1_{\text{loc}}(U)$ such that for any test function $\phi \in D(U)$ 

$$
F(\phi) = \int_U f\phi.
$$

In the case of regular distributions we often abuse notation and write $f$ instead of $F$​ to denote the distribution. 

**<u>Corollary:</u>** Since $\mathcal D(U) \subset \mathcal L^1_{\text{loc}}(U)$ with this identification there is an inclusion $\mathcal D(U) \hookrightarrow \mathcal D'(U)$​ as well. 

**<u>Example:</u>** *(The Heaviside function)* Consider the Heaviside function $h \in \mathcal L^1_{\text{loc}}(\mathbb{R})$ given by 

$$
h(x) = \begin{cases}
1, & x\geq 0\\
0, & x<0
\end{cases}.
$$

Then according to the natural identification above the Heaviside function can be considered as a distribution $H \in \mathcal D'(\mathbb{R})$ where for any test function $f \in \mathcal D(\mathbb R)$

$$
H(f) = \int_0^\infty f(x) dx.
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
\mathcal P\frac{1}{x} (f) = P.V. \int_\mathbb R \frac{f(x)}{x} dx = \lim_{\epsilon \to 0} \left[\int_{-\infty}^{-\epsilon} \frac{f(x)}{x} dx + \int_{\epsilon}^\infty \frac{f(x)}{x} dx\right].
$$

This is a very helpful distribution in physics since we always take integrals of the form when solving PDEs

$$
\lim_{\epsilon \to 0}\int_{\mathbb R} \frac{\phi(x)}{x + i\epsilon} dx = -\pi i \phi(0) + \mathcal P\frac{1}{x} (\phi).
$$

Therefore we can define the following super cool and helpful distributions

$$
\frac{1}{x + i0^{\pm}} = \mathcal P\frac{1}{x} \mp \pi i \delta.
$$

## Remark on Scwartz Distributions

The set of test functions that we have defined so far is large. Sometimes we might want to restrict that set to functions with special properties. This will help us define things such as the Fourier transform of distributions and so on. Here we will introduce a commonly used set of test functions $\mathcal J(U)$ known as the *Scwarz functions* whose dual is a subspace of $\mathcal D'(U)$. Notice that $\mathcal J(U)$ doesn’t have to be a subset of $\mathcal D(U)$ in order for its dual to be so. 

(ToDo)



# Localization

There is a particularly interesting class of distributions that we use all the time in physics because they can be super similar to functions. These are called *local distributions*. They are the ones that can be thought of as functions almost everywhere in space with the exception of some sets that we don’t mind. To do this we need to talk about support of distributions. 

## Support of Distributions

Smooth functions have support and in principle this notion should extend to distributions as well. Here is how we do it. Throughout the rest we assume that $U$ is some open subset of a smooth manifold unless indicated otherwise.

**<u>Definition:</u>** Given a distribution $f \in \mathcal D'(U)$ the **support of** $f$ is the complement of the largest subset where $f$ restricts to $0$. In other words

$$
\text{supp }f = U \setminus O,
$$

 where $O$ is the largest subset such that $\left.f\right|_O = 0$. 

This definition already lends itself into some notion of localization of distribution. For example a distribution compactly supported in $U$ can then be naturally extended to the entire manifold. But there is a notion of support that is far more interesting to study.

**<u>Definition:</u>** Given a distribution $f \in \mathcal D'(U)$ the **singular support of** $f$, denoted by $\text{sing\,supp\,}f$ is the set of points in which there exists no neighborhood that the distribution restricts to a regular one, i.e. 

$$
\text{sing\,supp\,}f = \{x \in U\mid \nexists A \text{ neighborhood of }x \text{ s.t. } \left.f\right|_A \in \mathcal L^1_{\text{loc}}(A)\}.
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

The main usefulness of local distributions is the following 



## Distributions With Compact Support

Given some distribution with compact support, we can actually extend how it acts on any smooth function, not just test functions. Let’s see how to do this.

**<u>Theorem:</u>** Let $u \in \mathcal D(U)$ be a distribution with compact support. Then $u$ can be canonically extended to a continuous linear functional $U : \mathcal C^\infty(U) \to \mathbb R$ such that for any test function $f \in C^\infty(U)$ 

$$
U(f) = u(\eta_{\text{supp\,}u} f),
$$

where $\eta_{\text{supp\,}u}$ is the bump function on the support of $u$. 

Therefore we could define a class of distributions that act on all functions that are smooth in the support of $U$. The delta function is one such distribution. 



# Algebra and Calculus of Distributions

Distributions are generalized functions, but they are a bit finicky to work with. Here we develop multiple methods by which we can perform operations that resemble as closely as we can the operations of smooth functions. 

## Products with Test Functions and Partial Derivatives

Apart from the natural addition and scalar multiplication inherited by the structure of $\mathcal D(U)$ as a vector space it would be helpful to be able to multiply distributions with test functions.

**<u>Definition:</u>** The **product of distributions with test functions** is a continuous linear map $\cdot : \mathcal{D}(U) \times \mathcal D'(U) \to \mathcal D'(U)$ such that $(f,u) \mapsto f\cdot u = fu$ and for any $g \in \mathcal D(U)$

$$
fu(g) = u(fg).
$$

The next thing we want is the partial derivatives.

**<u>Definition:</u>** Given a derivation $\partial : C^\infty (U) \to C^\infty(U)$ on $U$ the **derivative of a distribution** $u \in \mathcal D'(U)$ is given by the distribution $\partial u \in \mathcal D'(U)$ defined such that for any $f\in \mathcal D(U)$

$$
\partial u (f) = -u(\partial f).
$$

**<u>Remark:</u>** The negative sign comes to make this definition compatible with regular distributions. To see this, let $u \in \mathcal D(U)$, then as a distribution it acts on test functions $f \in \mathcal D(U)$ as 

$$
u(f) = \int_U uf.
$$

Therefore we would like $\partial u$ to act in a similar way. If we say its true we get using by parts

$$
\partial u(f) = \int_U (\partial u) f = - \int_U u\partial f = -u(\partial f).
$$


We can now use bundle the two definitions above in the following lemma.

**<u>Lemma:</u>** Given a smooth linear differential operator $P$ of order $k$ and a distribution $u \in \mathcal D'(U)$ then there is a unique distribution $Pu \in \mathcal D'(U)$ that acts on test functions $f\in \mathcal D(U)$ like so

$$
Pu(f) = (-1)^k u(Df).
$$


One cool thing to notice is that all distributions are infinitely differentiable in this sense. Since we have an idea of what it means to take derivatives of distributions and we have seen that the locally integrable functions are distributions, we can find their derivatives!

**<u>Example:</u>** *(Derivative of Heaviside)* Consider the heaviside distribution $H \in \mathcal D'(\mathbb R)$ defined previously. Its derivative is given by $\frac{dH}{dx} \in \mathcal D'(\mathbb R)$ and it acts on test functions $f \in \mathcal D(\mathbb R)$ such that

$$
\begin{align*}
\frac{dH}{dx}(f) 
&=  -H\left(\frac{df}{dx}\right)\\
&= -\int_{0}^\infty \frac{df}{dx} dx\\
&= f(0).
\end{align*}
$$

Therefore $\frac{dH}{dx} = \delta$.

This definition also gives us our first steps towards thinking of distributions as the right object to do PDEs with. In fact we can now talk about fundamental solutions!

**<u>Defintion:</u>** Given a smooth linear differential operator $P$ a **fundamental solution** of the differential equation defined by $P$ in an open subset $U$ of a manifold relative to some point $p \in U$ is a distribution $G_p \in \mathcal D'(U)$ such that

$$
PG_p = \delta_p.
$$

Soon we will see the cases where convolutions can be defined and then we can use fundamental solutions as amazing tools to prove existance and uniqueness of solutions to PDEs. 



## Outer Product of Distributions

Another easy product that we can create which is surprisingly useful in physics is the outer product. It is a way of forming a distribution on the space $U\times U$. 

**<u>Definition:</u>** The **outer product of distributions** is a continuous binlinear map $\cdot \times \cdot : \mathcal D'(U)\times \mathcal D'(U) \to \mathcal D'(U\times U)$ where $(u,v) \to u\times v$ such that for any test function $f \in \mathcal D(U\times U)$ 

$$
(u\times v)(f) = u(v(f)),
$$

where we regard $v(f)$ to act on the second argument of $f$, i.e. $v(f) \in \mathcal D(U)$ such that $v(f)(x) = v(f(x,\cdot))$  for any $x \in U$. 

The complications arize when we try to multiply distributions in an associative way such that we obtain a distribution over the same subset $U$​. There is no general definition for that, but we will soon see ways in which that makes sense. 



## Pullback of Distributions

We want to generalize the operation of composition. Since we can compose functions with smooth maps we would like to extend this notion on distributions. 

**<u>Definition:</u>** Let $u \in \mathcal D'(U)$ be a distribution over an open set $U \subset M$ of a manifold $M$ and $\phi : V \to U$ be a diffeomorphism from an open set $V \subset N$ of a manifold $N$. Then the **pullback** of the distribution $u$ is a distribution $\phi^\ast u \in \mathcal D'(V)$ on $V \subset N$ such that for all test functions $f \in \mathcal D(V)$ 

$$
(\phi^\ast u)(f) = \frac{1}{|\det J_\phi|} u(f\circ \phi) = u \left(\frac{f\circ \phi}{|\det J_\phi|} \right),
$$

where $J_\phi$ is the Jacobian of the diffeomorphism.

The following proposition sums up some properties of the pullback. Notice that we denote the pullback of functions $f \in \mathbb{C}^\infty(U)$ as $\phi^\ast f = f\circ \phi$. 

**<u>Proposition:</u>** Given distributions $u,v \in \mathcal D' (U)$,  test functions $f,g \in \mathcal D(U)$ and a diffeomorphism $\phi: V\to U$ the following are true

1. Given some linear differential operator $\partial$ then $\partial \phi^\ast u = \partial \phi^k \frac{\partial u}{\partial x^k}$
2. $\phi^\ast (fu) = (\phi^\ast f) (\phi^\ast u)$

**<u>Example:</u>** Consider an automorphism $\phi : U\to U$ such that $\phi(p) = q$, and $\det J_\phi(p) = 1$. Then $\phi^\ast \delta_q = \delta_p$.



# Fourier Transforms

Since we did all this analysis on manifolds, it would be nice to talk about Fourier transforms on manifolds. The immidiate problem is that a Fourier transform doesn’t seem to generalize to a definition on the whole manifold, because there is no canonical notion of inner product of points of a manifold!

The goal of these notes is to study distributions in a local sense in order to prepare for the analysis of quantum fields, so we will define a Fourier transform in a way that it can help us extract local properties of the distributions. This will have the interesting consequence of not giving us a unique (even up to constants) definition, however the properties that we want to study, such as singularities will be there regardless of the choice. 

## Killing Vector Fields

A Fourier transform requires a canonical notion of translation on the manifold. Killing vector fields provide us with one! We will introduce them here and then explore relevant interesting results that will help us define the Fourier transform on certain open subsets of a manifold.

**<u>Definition:</u>** A vector field $X \in \mathfrak{X}(U)$ on some open subset $U \subset M$ of a smooth Riemannian manifold $(M,g)$ is **Killing** if 

$$
\mathcal L_X g =0,
$$

where $\mathcal L$ is the Lie derivative. 

In fact any Killing vector field can be thought of as the fundamental vector field of some Lie group action on $M$. The Lie group in question is the isometry group. 

**<u>Definition:</u>** Given a, open subset $U \subset M$ of a smooth Riemannian manifold $(M,g)$ a **local isometry** is a diffeomorphism $f: U\to U$ such that $f^\ast g = g$. The set of local isometries forms a Lie group known as the **local isometry group of** $U$ denoted by $I_g(U)$. 

The local isometry group comes with a free (i.e. at no cost to the physicist) defining smooth group action, which can be used to generate the killing vector fields. 



# Singular Analysis

We want to examine the properties of the singularities of distributions. This is particularly applicable in physics in Conformal Field Theory where we look at expansions of products of local distributions near their singularities. The main tool we are going to develop is the *Wavefront Set* of a distribution. This will be a collection of one forms in the cotangent space that we will interpret as the wavefronts caused by the presence of a singularity in the distribution. I promise this will make sense as this goes along. 



## Wavefront Sets

Using the Wavefront Sets we will be able to extend a lot of the properties of functions to distributions including pulling back distributions on submanifolds or writing something similar to Laurent series around a singularity. 
















[The Schwartz Space on a Manifold](https://mathoverflow.net/questions/80094/the-schwartz-space-on-a-manifold)

[Does a Fourier transformation on a (pseudo-)Riemannian manifold make sense?](https://math.stackexchange.com/questions/13902/does-a-fourier-transformation-on-a-pseudo-riemannian-manifold-make-sense)

[Tempered distributions and Schwartz functions on definable manifolds](https://www.sciencedirect.com/science/article/abs/pii/S0022123620300148)









