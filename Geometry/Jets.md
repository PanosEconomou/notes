# Jets

It is time. Jets initially looked like scary objects because they’re so many of them, and whatnot. Turns out Jets are something like coordinate free Taylor expansions of fields (i.e. sections of vector bundles). We use them all the time in physics, even if we don’t explicitly call them out, and they can help us generalize the formalism of classical Lagrangian field theory to Hamiltonian field theory, and finally Quantum field theory.

This discussion follows:

1. [Natural Operations in Differential Geometry](https://www.emis.de/monographs/KSM/kmsbookh.pdf)
2. [The Variation Bicomplex](https://www.emis.de/monographs/KSM/kmsbookh.pdf)
3. [Introduction to smooth Manifolds](https://link.springer.com/book/10.1007/978-1-4419-9982-5)

[toc]



# Motivation

Let’s do some quick motivation by introducing Taylor series in a completely new way. Consider the set of functions $C^\infty(\mathbb{R})$. Since they are smooth they already admit a taylor series. Let’s define an equivalence relation on them.

**<u>Definition</u>** Given $f,g \in C^\infty(\mathbb{R})$ we say that they are $k$**-jet-equivalent** at $x\in \mathbb{R}$ or $f\sim_kg$, when their first $k\in \N$ derivatives are equal. In other words
$$
f\sim_k g \iff f^{(n)}(x) = g^{(n)}(x),\ 0\leq n \leq k.
$$
Notice that now at each point $x\in \mathbb{R}$ we can associate a vector space of equivalence classes of $k$-jets. The reason why this would be a vector space is that every equivalence class is completely parameterized by $k$ real numbers, the coefficients in the Taylor series of the representative. In other words, there is a 1-1 and onto correspondence with $k$-jets and the following polynomials
$$
p_k(x) = \sum_{n=0}^k \frac{p_n}{n!}x^n \leftrightarrow [p(x)] = (p_0,p_1,\cdots, p_k).
$$
The natural next stepping point is to construct the $\infty$-jets, which is the equivalence relation where all the derivatives are equal which corresponds to the smooth functions with identical taylor series at a point. The interesting thing, is that if we put this vector space over each point, by picking a section of that, we would have chosen a value for all the derivatives of a function in a way that looks sort of independent of each other!

This should be reminiscent of how in Lagrangian mechanics we treat the field and its derivatives are independent variables, and eventually in phase space, we treat the position and momenta as such as well. 

# Constructions

We begin with the basic jet constructions on vector bundles. For more bundly stuff check [this](./Bundles.md) out. 



## Jet Equivalences

To define Jet bundles we will first introduce the $r$-jet as an equivalence relation of sections, and then we will define the r-jet of some section as an

**<u>Definition:</u>** Consider a fiber bundle $\pi:E \to M$, then for every $p \in M$ let $\Gamma_p(E)$ be the **set of all local smooth sections** of $E$ defined at $p$. Then two such sections $\phi,\chi \in \Gamma_p(E)$ are $k$**-jet equivalent** at $p$ if all their partial derivatives up to order $k$ are equal. In other words
$$
\phi \sim_k\chi \iff \frac{\partial^{|I|} \phi}{\partial x^I} = \frac{\partial^{|I|} \chi}{\partial x^I}, \ 0\leq |I| \leq k,
$$
where $I$ is some multiindex. The equivalence class of $\phi \in \Gamma_p(E)$ is called a $k$**-jet** and it is denoted by $j_p^k\phi \coloneqq [\phi]$. Often we denote $j_p^0\phi = \phi$. The set of all such equivalence classes for each point is the **set of** $k$**-jets** at $p\in M$ denoted by $J_p^k(E) = J_p^kE$. We denote the **set of all** $k$**-jets** as 
$$
J^kE \coloneqq \{j_p^k\phi\mid \phi \in \Gamma_p(E),\ p\in M\}.
$$


And there we have the definition of a jet. The interesting thing is that this is in direct analogy to the motivation we carried out where the jets were essentially the Taylor series. 



## Bundle Structure

The other thing we need to show is that the set of $k$-jets is a bundle. This is not obvious so let’s give it some love for once and then never again. 

**<u>Proposition:</u>** For $0\leq r \leq k$ the map $\pi_{kr}:J^kE\to J^rE$ between the sets of $k$-jets over a bundle $\pi:E\to M$ defined for any section $\phi \in \Gamma(E)$ as
$$
j_p^k\phi \mapsto j_p^r\phi,
$$
by dropping the rest of the components, is a smooth surjective submersion. Additionally, the map
$$
\begin{align*}
\pi_k:J^kE&\to M\\
j_p^k\phi &\mapsto p,
\end{align*}
$$
 is also a smooth surjective submersion. One has that $\pi_k=\pi\circ \pi_{k0}$ and $\pi_{kr} = \pi_{mr}\circ \pi_{km}$ forming the following commutative diagrams
$$
\vcenter{\xymatrix@C=1em{
\cdots & J^kE \ar[rr]^{\pi_{k,k-1}}\ar[d]_{\pi_k} && J^{k-1}E \ar[d]^{\pi_{k-1}} & \cdots &  J^{1}E\ar[rr]^{\pi_{1,0}}\ar[d]_{\pi_1} && E\ar[d]^{\pi}\\
 \cdots &  M \ar[rr]_{\text{id}} && M & \cdots & M \ar[rr]_{\text{id}} && M
}}.
$$
***Proof:*** These maps are fiberwise linear projections.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
**<u>Proposition:</u>** Let $U \subset M$ be an open subset of $M$ and $(E_U,\psi)$ be a chart on $E$, where for any $\phi_p \in E_U\subset E$ we have that $\psi(\phi_p) = (x^i(p),e^i(\phi_p))$ for some $x^i \in C^\infty(U)$ and $e^i\in C^\infty(E_U)$. Then $(E_U,\psi)$ induces a chart $(U^k,\psi^k)$ on $J^kE$ in the following way for any $j_p^k\phi \in J^kE_U$ we have that
$$
\psi^k(j_p^k\phi) = (x^i(p),e^i(\phi_p),e_{I}^i(j_p^k\phi)),
$$
for some multiindices $I$ with $1\leq |I|\leq k$ where the maps $e_I^i:u^k \to \mathbb{R}$ are defined by
$$
e_I^i(j_p^k\phi) \coloneqq \left.\frac{\partial^{|I|} \phi^i}{\partial x^I}\right|_p.
$$
***Proof:*** Work it out.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
**<u>Corollary:</u>** $\pi_k :J^kE \to M$ for some $k\in \mathbb{N}$ is a vector bundle over $M$. In fact, any of the following are bundles $\pi_{kr}:J^kE \to J^rE$ for $r\leq k$. This is known as the $k$**-jet bundle of E**. 

Ok we all sort of knew that this would happen at some point, but the interesting thing we want to construct is the bundle $J^\infty E$ that contains all the full Taylor series as a fiber at each point. This is defined using limits Frechet spaces. Here is the definition.

**<u>Definition:</u>** The set $J^\infty E$ is a Frechet bundle over $M$ with the smooth structure obtained by taking the following limit
$$
J^\infty E \coloneqq \lim_{\leftarrow k}J^kE = \lim_{\leftarrow} \left( \cdots J^2E \to J^1 E \to E \right),
$$
 where these arrows are given by the projections in the commutation diagram above.

***Note:*** We don't really need to care about the exact structure of the infinite dimensional bundle, because in all applications in physics the maps that we will define on it, like Lagrangians and whatnot, will be zero for all but finitely many directions on each fiber. This is compatible with the product topology on the bundle and with the Frechet smooth structure. So we will only need to be careful when that isn't the case.



# Contact Structure

Sections of the jet bundles we created are the perfect place to talk about treating the derivatives of a function as independent components. So when it comes to taking sections, we can get two different types. Ones where all the derivatives are perfectly aligned such that we obtain an actual section of $E$, and ones where the derivatives are a bit off. This division of the possible sections of a jet bundle is roughly its contact structure. 

## Distributions*

We formalize this using distributions on a manifold. These distributions are not defined in the algebraic sense, but rather as a collection of tangent spaces. We take a quick diversion to talk about them here. 

**<u>Definition:</u>** Given a manifold $M$ a **distribution** on $M$ of **rank** $k$ is a vector subbundle $D$ of $TM$ with rank $k$. Such a distribution is called **involutive** if for any two sections of it, their Lie bracket is also a section of it. 

**<u>Proposition:</u>** A distribution $D\subset TM$ is involutive iff $\Gamma(D)$ is a Lie subalgebra of $\Gamma(TM)$. 

A cool property of distributions is that they can be *integrated*. Essentially construct a submanifold who's tangent space at each point is the distribution at that point.

**<u>Definition:</u>** Let $D\subset TM$ be a distribution on $M$. Then $X\subset M$ is an **integral** of $D$ if it is a manifold where the tangent space at each $p\in X$ is $D_p$. If $D$ has an integral it is called **integrable**. If all the integrals of $D$ form a foliation of $M$ then $D$ is called **globally integrable**. 

Here is a pretty cool theorem.

**<u>Theorem:</u>** *(Frobenius' Theorem)* A distribution is globally integrable iff it is integrable iff it is involutive.

Another way to define distributions is using forms.

**<u>Lemma:</u>** Let $D\subset TM$ be a distribution of a manifold $M$ of dimension $n$. Then for every point $p \in M$ there exists a neighborhood $U_p \subset M$ on which there is a set of local 1-forms $\{\omega^1,\omega^2,\cdots,\omega^{n-k}\} \in \Omega^1(U)$ such that 
$$
D_p = \text{ker\,}\omega^1_p \cap \text{ker\,}\omega^2_p \cap \cdots\cap \text{ker\,}\omega^{n-k}_p.
$$
We say that this set of 1-forms **annihilates** $D$. 

Using this lemma, one can construct a distribution by looking for sets of annihilation 1-forms. Which will be super interesting for what we want to do. 

Ok so now we can play with the Cartan Distribution on Jet bundles. 

## Cartan Distribution

Now we have the intuition of what the contact structure of a Jet bundle should be, and what distributions over a manifold are. As a result, we will introduce the Cartan distribution to formalize this.  

**<u>Definition:</u>** A section $\Phi \in \Gamma(J^kE)$ of the jet bundle $J^kE$ of some bundle $\pi: E\to M$ is **holomorphic** if there exists some section $\phi \in \Gamma(E)$ such that $\Phi = j^k\phi$.

Holomorphic sections what we would call a *valid* Taylor series, i.e. all the terms of the power series are derivatives of a single section.

**<u>Proposition:</u>** The collection of tangent planes to all the graphs of holomorphic sections of $J^kE$ is a distribution $C \subset TJ^kE$ called the **Cartan Distribution**.

**<u>Lemma:</u>** The Cartan distribution on $J^\infty E$ is of rank $\text{dim\,}M$ and it is involutive. Otherwise the distribution of a finite rank Jet bundle is not involutive. 



## Contact Forms

It is often easier to talk about the Cartan distribution on some Jet bundle in terms of annihilation sets of forms. 

**<u>Proposition:</u>** A 1-form $\theta \in \Omega^1(J^kE)$ is an annihilator for the Cartan distribution iff it is annihilated by any holonomic $k$-jet. Or in other words for every $\phi \in \Gamma(E)$ a contact form satsfies
$$
(j^k \phi)^\ast \theta = 0.
$$
 In other words, contact 1-forms will measure how badly a particular jet fails to be holomorphic. 

We could determine the contact forms in a local coordinate system $(U^k,\psi)$ of $J^kE$. Where $\psi = (x^i, e^i, e^i_I)$. 

**<u>Example:</u>** The following forms $\theta^i$ are contact forms for $J^kE$, given by
$$
\begin{align*}
\theta^i = de^i - e^i_j dx^j && \theta^i_I = de^i_I - e^i_{Ij} dx^j,
\end{align*}
$$
where $I$ is a multiindex. To see this consider any holomorphic section $j^k\phi$.



# Variational Bicomplex

This is why we introduced Jets! We will build a place where we can do variational stuff! To study this we will separate between horizontal and vertical vector fields.

## Horizontal and Vertical Distributions

Vector fields and forms on a bundle over $M$ can move you along the manifold, or the fibers, or both! Ones that move you along the manifold, are called Horizontal, and the ones that move you along the fibers are called vertical. Here is a definition.

**<u>Definition:</u>** Given any bundle $\pi : E\to M$ over $M$, a **vertical vector field** $X \in \mathfrak{X}(E)$ is such that  $ \pi_\ast X = 0$. A form $\omega \in \Omega^k(E)$ is **horizontal** if there exist forms $\theta^i \in \Omega^k(M)$ and smooth functions $f_i \in C^\infty(E)$ such that $\omega = f_i\pi^\ast \theta^i$.

Their intuition is governed by exactly what we said before. 

**<u>Proposition:</u>** The span of the horizontal vector fields form a distribution $VE \subset TE$ called the vertical tangent bundle. Similarly an orthogonal distribution $HE \subset TE$ given by some Ehresmann connection is called a horizontal tangent bundle and we have that $VE\otimes HE \cong TE$.

More specifically, we can now define a vertical form.

**<u>Definition:</u>**  A **vertical** form on $\Omega^k(E)$ is an annihilator of the horizontal tangent bundle.

**<u>Corollary:</u>** The set of forms of oder $k$ can be decomposed into subspaces $\Omega^{r,k-r}(E)$ where each form in that subspace is given by the wedge product of $r$ horizontal one forms, and $k-r$ vertical ones. More precisely,
$$
\Omega^k(E) = \bigoplus_{r=0}^k \Omega^{r,k-r}(E).
$$
**<u>Definition:</u>** For any form $\omega \in \Omega^{h,v}$ we call $h$ its **horizontal degree** and $v$ its **vertical degree**. 



## Horizontal and Vertical Differentials

We can do a similar thing with the differential operators. 

**<u>Definition:</u>** The **vertical differential** $\delta$ on some bundle $\pi:E\to M$ is the antiderivation on $\Omega(E)$ such that $\pi_V \circ \delta = \mathbf{d} \circ \pi_V$, where $\mathbf{d}$ is the De Rham differential on $E$, and $\pi_V:TE\to VE$, is the projection to the vertical subspace.

**<u>Proposition:</u>** In a local coordinate chart $(U,x^i,e^i)$ the vertical differential of a function $f\in C^\infty(E)$ is given by
$$
\delta f = \frac{\partial f}{\partial e^i}de^i.
$$
**<u>Definition:</u>** The **horizontal differential** $d$ on some bundle $\pi:E\to M$ is the antiderivation on $\Omega(E)$ such that $\pi_H \circ d = \mathbf{d} \circ \pi_H$, where $\mathbf{d}$ is the De Rham differential on $E$, and $\pi_H:TE\to HE$, is the projection to the horizontal subspace. 

**<u>Proposition:</u>** In a local coordinate chart $(U,x^i,e^i)$ the horizontal differential of a function $f\in C^\infty(E)$ is given by
$$
d f = \frac{\partial f}{\partial x^i}dx^i + \frac{\partial f}{\partial e^i} \frac{\partial e^i}{\partial x^j} dx^j.
$$
Notice that the coordinate chart for the horizontal differential might not be independent of the base manifold coordinates, that's why we get the extra terms. 

## Definition

Consider a bundle $\pi:E\to M$ and its jet bundle $\pi_\infty: J^\infty E \to M$. In this setting there are a canonical evaluation maps
$$
\begin{align*}
\text{ev}_E: M\times \Gamma(E) &\to E\\
(p,\phi) &\mapsto \phi_p,
\end{align*}
$$
and 
$$
\begin{align*}
\text{ev}_J: M\times \Gamma(J^\infty E) &\to J^\infty E\\
(p,j^\infty \phi) &\mapsto j^\infty_p \phi.
\end{align*}
$$
Similarly, we have the **jet prolongation map**
$$
\begin{align*}
j^\infty : \Gamma(E) &\to \Gamma(J^\infty E)\\
\phi &\mapsto j^\infty \phi,
\end{align*}
$$
the corresponding jet. With this, we can induce a smooth map
$$
\xymatrix{
X\times \Gamma(E)\ar[r]_{\text{Id}_M\times j^\infty }\ar @/^2em/[rr]^{\text{e}_\infty} & X\times \Gamma(J^\infty(E)) \ar[r]_{\text{ev}_J} & J^\infty E.
}
$$
Or more precisely $e_\infty = \text{ev}_j \circ (\text{Id}_M\times j^\infty)$. Therefore, one can consider the forms on the product $X\times \Gamma(E)$ usually denoted as $\Omega^{\cdot, \cdot}(X\times \Gamma(E))$ which is graded with respect to the degree of the forms on each factor. Similarly one can create the **total differential** $\mathbf{d} = d + \delta$, the sum of the differentials in the two factors respectively. We call $d$ the **vertical differential** and $\delta$ the **vertical** or **variational differential**.

**<u>Definition:</u>** The **variational bicomplex** is the image of the pullback under $e_\infty$ of the set set of all the forms on the bundle $J^\infty E$. Or more precisely the variation bicomplex is the set 
$$
\Omega^{\cdot, \cdot }_{\text{loc}} \coloneqq e^\ast_{\infty}\Omega(J^\infty E) \subset \Omega(X\times \Gamma(E)),
$$
which is thought of as the local forms on the sections of $E$.

This might look like a complicated construction, but basically it is forms that live on a space where each point is a section over that space and a point. This is how we usually define the Lagrangian!

However, we could think of it in an alternative by characterizing the jet bundle.

**<u>Definition:</u>** The **horizontal differential**  $d_h$ on $\Omega(J^\infty E)$ is the antiderivation, with respect to the wedge product, such that for any $\phi \in \Gamma(E)$ 
$$
(j^\infty \phi)^\ast \circ d_h = d \circ (j^\infty \phi)^\ast .
$$
**<u>Proposition:</u>** Given a coordinate chart $(U^\infty, \psi)$ where $\psi=(x^i,e^i, e^i_I)$ and a smooth  function $f\in C^\infty(J^\infty E)$  the horizontal differential acts as
$$
d_h f = \left( \frac{\partial f}{\partial x^i} + \frac{\partial f}{\partial e^j}e^j_i + \frac{\partial f}{\partial e^j_k}e^j_{ki} + \cdots  \right) dx^i.
$$
Therefore in this bundle we have that

**<u>Proposition:</u>** A horizontal differential form $\omega \in \Omega^k(J^\infty E)$ is a bundle homomorphism
$$
\omega : J^\infty(E) \to \Lambda^nT^\ast M.
$$
Similarly the vector fields can be regarded as horizontal and vertical as we have shown in the previous paragraph. As a result, we can also interpret the local and vertical differentials on $J^\infty E$.











