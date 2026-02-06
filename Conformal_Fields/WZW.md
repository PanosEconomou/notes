# Wess-Zumino-Witten Models

Super nice examples of CFT that are often (maybe even always?) solvable through field definitions. Let's study them in short detail to understand how to play with them as toy examples. Most of the representation theory we will require here is [here](../Geometry/Lie_Algebras.md), but the physics should be fine. Here are some references

1. [Di Francesco](https://link.springer.com/book/10.1007/978-1-4612-2256-9)
2. [YRISW Vienna WZW Models notes](https://conf.itp.phys.ethz.ch/esi-school/Lecture_notes/WZW%20models.pdf)
3. [Mathematical Gauge Theory](https://link.springer.com/book/10.1007/978-3-319-68439-0)

[toc]

# Field Description

Fundamentally the fields in a WZW model live on a sphere (the Witt rotation of $\mathbb{R}^{1,1}$) and have values on a Lie group. For convenience we require the Lie group to be semisimple (i.e. it is locally diffeomorphic to a product of finite simple Lie groups).

## Tools for Lie Groups

Let's develop some language that would be useful for talking about fields that live on Lie groups. This is not new, but a useful generalization of things that we have already encountered when studying free fields.

**<u>Definition:</u>** Let $G$ be a semisimple Lie group and $\mathfrak{g}$ its Lie algebra. Then its **Maurer Cartan form** $\mu : TG \to \mathfrak{g}$ is a $\mathfrak{g}$-valued one-form defined for all $g\in G, X\in T_gG$ by
$$
\mu_g(X) = L_{g^{-1} \ast} X,
$$
where $L_g \in \text{Aut}(G)$ is the smooth left multiplication map $L_g(h) = g\cdot h$.

Why is this useful? Well, we have heard the mantra that: "the Lie algebra is canonically isomorphic to the tangent space at the identity." This map does exactly that! It takes a vector somewhere away from the identity and it spits out the corresponding Lie algebra element, by pushing it to the tangent space at the identity. This map has been used to often in physics even without realizing it.

> **Note:** Sometimes we see this under a different notation because we can think of $L_{g\ast}$ as a $G$-action on $TM$ in which case we simply write $\mu_g(X) = g^{-1}X$, but the other notation makes explicit how one would calculate this.

It has some nice properties. One natural that we would expect the map to the lie algebra to have is that it is left invariant.

**<u>Proposition:</u>** The Maurer Cartan form is left invariant. That is for any $g \in G$ $L_{g}^\ast \mu = \mu$. In addition $R_g^\ast \mu = \text{Ad}_g\circ \mu$.

***Proof:*** We can do this by direct computation $(L_g^\ast \mu)_h = \mu_{g^{-1}h} \circ L_{g^{-1}\ast} = L_{h^{-1}g\ast}\circ L_{g^{-1}\ast} = L_{h^{-1}gg^{-1} \ast} = \mu_{h}$.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
Here is a nice example to see what we mean more concretely.

**<u>Example:</u>** *($\mathbb{R}^n $ form)* In $\mathbb{R}^n $ the Maurer Cartan form in some coordinate basis $x^\alpha$ is given by $\mu = dx^\alpha \otimes \left.\frac{\partial }{\partial x^\alpha} \right|_0$. Which we will use later to extract a super familiar result.

An additional tool that is going to be useful, as always in physics, is a way to measure angles and lengths in the Lie algebra that respects the natural action of the Lie algebra onto itself. The natural way that a Lie algebra acts on itself is stolen from the natural way a lie group acts on itself. A lie group acts on itself via conjugation, so if we take the pushforward of conjugation we induce an endomorphism of the tangent space known as the Adjoint representation. 

**<u>Definition:</u>** Let $G$ be a Lie group with Lie algebra $\mathfrak{g}$, then for all $g \in G$ the **conjugation map** $c_g : G\to G$ is given by $h \mapsto ghg^{-1}$. Similarly for any $X \in \mathfrak{g}$ the **adjoint representation** $\text{Ad} : G \to \text{Aut}(\mathfrak{g})$ is given by $\text{Ad}_g = c_{g \ast,1}$ where $1 \in G$ is the identity. Finally the **adjoint representation of the Lie algebra** $\text{ad}:\mathfrak{g} \to \text{End}(\mathfrak{g})$ is given by $\text{ad} = \text{Ad}_\ast$.

**<u>Proposition:</u>** For any $X,Y \in \mathfrak{g}$ we have that $\text{ad}_XY = [X,Y].$

Now that we have a natural way to act we want to find an "inner product esque thing" that is invariant under the adjoint action. Yet, one can quickly notice that $\text{ad}_X = 0$ for an abelian group. So whatever we can come up with can't be non-degenerate. That's why we propose the following called the Killing form.

**<u>Definition:</u>** The **Killing form** $K: \mathfrak{g}\times \mathfrak{g}\to \mathbb{C}$ is defined by
$$
(X,Y) \mapsto K(X,Y) = \text{tr\,} \text{ad}_X \circ \text{ad}_Y.
$$
We can show that this form is unique up to an overall factor and it is ad-invariant and other cool stuff. All these are [here](../Geometry/Lie_Algebras.md). 

What about tools on manifolds? We have to think about how we can write forms and stuff for fields that are valued on a Lie group. Things break down very quickly when we try to multiply elements of a Lie algebra together. Primarily because their multiplication (i.e. the Lie bracket) sucks! However, there is a natural multiplication in the set of endomorphisms of any vector space: the composition! So if we work on a representation of the Lie algebra we can certainly define such products. Let's be more precise.

**<u>Definition:</u>** Let $\rho: \mathfrak{g} \to \text{End}(V)$ be a Lie algebra representation of $\mathfrak{g}$, $E$ a vector bundle with fiber $\mathfrak{g}$, and $E'$ a vector bundle with fiber $\text{End}(V)$. Then there is a natural embedding of $E\to E'$ induced by $\rho$. As a result, for any two $E'$-valued forms we can induce another $E'$ valued form using the product 
$$
\omega \wedge \eta = \omega^\alpha \wedge \eta^\beta \otimes t_\alpha \circ t_\beta.
$$
Similarly, having fixed a representation we can refer to the wedge product of Lie algebra valued forms as the product of their image under $\rho$. Finally, we define a "norm" given by $\langle \omega \rangle = (\text{tr\,}t_\alpha)\,\omega^\alpha=\text{tr\,} \omega$. Notice that if $\rho = \text{ad}$ then $\langle \rho(X)\circ \rho(Y) \rangle = K(X,Y)$ for any two $X,Y \in \mathfrak{g}$.



### A small coordinate digression 'cause it's fun

A Lie group comes with an awesome set of local coordinates because the exponential map is a local diffeomorphism between the tangent space at a point, and a neighborhood around that point. Yet, we have an isomorphism (given by the left action) of the tangent space at any point and the Lie algebra. So around every point we can find a patch that can be coordinetized using the Lie algebra. Here is how.

Assume that $t_\alpha \in \mathfrak{g}$ is a basis for our Lie algebra. Then fix a point $h$ and consider an open subset $U_h \subset \text{exp}_h T_hG$ that contains $h$. Then pick $g \in U_h$. This means, that there must be a unique $X_g \in T_nG$ such that $g = \exp_h X_g$. We also know that there is a unique Lie algebra element $\hat X_g = \mu_h X_g$ that corresponds to it! If we write $\hat X_g = g^\alpha t_\alpha$, then we have found a coordinate system based on a Lie algebra basis. Namely let's define a chart $\phi_h: U_h \to \mathbb{R}^n$ by $g\mapsto \phi_h(g) = (g^1, g^2,\cdots, g^n)$. This is an awesome coordinate system, and we will use it unless otherwise specified. Notice that always $\phi_h(h) = 0$.

**<u>Lemma:</u>** Let $\Sigma$ be a manifold and $g:\Sigma \to G$ be a smooth map, then we have that $g^\ast \mu \in \Omega^1(\Sigma, \mathfrak{g})$ is given by
$$
g^\ast \mu = (L_{g^{-1}\ast})^\alpha_{\ \beta}\, dg^\beta \otimes t_\alpha =L_{g^{-1}\ast} g_\ast=g^{-1}g_\ast.
$$
where in the second equation we have used the notation $g^{-1}=L_{g^{-1}\ast}:TG\to \mathfrak{g}$ and that $g_\ast : T\Sigma \to TG$. 

> **Note:** In matrix Lie groups, we can do the following thing. Pick $G$ an embedded submanifold and subgroup of $GL(n,\mathbb{k})$. Then pick an integral curve $\gamma:I\to G$ at $h\in G$ for some $X\in T_hG$. Now for any $g \in G$ we have that $L_g \circ \gamma = g\gamma(t)$. In addition, we have that $X = \gamma_\ast \frac{d }{d t}$. Therefore, $L_{g\ast}X = L_{g\ast} \gamma_\ast \frac{d }{d t} = (L_g \circ \gamma)_\ast \frac{d }{d t} = g \frac{d\gamma}{dt}$. Finally in $GL(n,\mathbb{k})$ we have the identification that $X = \frac{d\gamma}{dt}$. 
>
> So in matrix Lie groups the induced representation of the Lie group to the Lie algebra by left multiplication is simply left multiplication. This is particularly convenient and the source of overloading our notation with $g^{-1} = L_{g^{-1}\ast}$.

***Proof:*** We know that $g_\ast = dg^\beta \otimes \frac{\partial }{\partial t^\beta}$, therefore we conclude that the pullback contains $\mu_{g}(\frac{\partial }{\partial t^\beta}) = L_{g^{-1}\ast}\frac{\partial }{\partial t^\beta}$.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$


## A wrong guess for the action

Now that we have an inner product thing, what is stopping us from trying to write something down in the standard physics way? Using the tools we talked about above we can define an action for any smooth $g:S^2 \to G$ by 
$$
S_0(g) = \frac{1}{4\lambda^2} \int_{S^2} \text{tr\,} g^\ast \mu \wedge \ast  g^\ast \mu,
$$
where  $\lambda \in \mathbb{R}$ is some normalization, $\mu$ is the Maurer Cartan form of $G$, and $K$ is the Killing form. Implicit in this notation is the representation we have fixed in order to take the trace. It is usually either a faithful representation or the adjoint. So to be explicit when we say $g^\ast \mu$ we mean $\rho(g^\ast \mu)$ where $\rho$ is the bundle embedding induced by the representation. 

**<u>Proposition:</u>** Assume $\rho: \mathfrak{g} \to \text{End}(V)$ is some representation that maps to a $\text{End}(V)$ vector bundle with a flat connection (we can find that in $S^2$ bundles) , then $g^\ast \mu = g^{-1} dg$.

**<u>Proposition:</u>** $S_0$ has a global $G\times G$ symmetry action defined for any $(h,k) \in G\times G$ by $g\mapsto L_h \circ R_{k^{-1}} \circ g = hgk^{-1}$.

***Proof:*** Notice that 
$$
\begin{align*}
(L_h \circ R_{k^{-1}} \circ g)^\ast \mu 
&= (R_{k^{-1}}\circ g)^\ast L_h^\ast \mu\\
&= (R_{k^{-1}}\circ g)^\ast \mu\\
&= g^\ast R_{k^{-1}}^\ast \mu\\
&= Ad_{k} \circ g^\ast \mu, 
\end{align*} 
$$
but a trace is $Ad$-invariant by construction, so the action is invariant.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
Also notice that this has conformal symmetry because is is basically a sum of free fields when expanded out. However, when calculating quantum corrections to the $\beta$ function for this action, we will obtain that it is negative! Therefore we can RG flow to a quantum conformal theory. Let's see this.

**<u>Proposition:</u>** The equation of motion for $S_0$ is given by
$$
d \ast g^\ast \mu =0.
$$
This means that $J=g^\ast\mu$ is a conserved current. By the way we can show that another conserved current is $\tilde J = g^\ast \tilde \mu$, where $\tilde \mu_g(X) = R_{g^{-1}\ast} X$, which is the other multiplication map. We could see this entire construction as a Gauge Theory which implies that also 
$$
d_JJ = dJ - \frac{1}{2} J\wedge J = 0.
$$
This implies that the holomorphic and antiholomorphic components of $J$ cannot vanish separately unless $G$ is Abelian. Therefore, quantumly, we can't treat $J$ as a current that generates a Chiral algebra. As a result, we need to modify this.



## The WZW model action

To modify the action above we include an extra term. Before we do so, we need some results.

**<u>Lemma:</u>** If $G$ is a Lie group, then if $g:S^2 \to G$ is smooth it can be continued to the sphere's interior.

***Proof:*** The reason why this is always possible is because for every Lie group $G$ all such maps are homotopic, so if the constant map can be continued to the interior, so can the other one. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
Another fact is that if $g$ is such a continuation then the term 
$$
\Gamma(g) = \frac{1}{2\pi i}\int_{D^3} g^\ast \mu \wedge g^\ast \mu \wedge g^\ast \mu,
$$
is invariant under homotopic extensions of $g$. The homotopy classes of such extensions are classified by $\pi_3(G) \cong \mathbb{Z}$, and with a little work we can see that evaluating the difference of $\Gamma$ on two nonhomotopic maps we find that it is in $2\pi i \mathbb{Z}$, which also justifies the normalization we chose. We are now ready to introduce the WZW action.

**<u>Definition:</u>** The **WZW-model action** for a semisimple Lie group $G$ and a map $g:S^2\to G$ with a choice of extension to $D^3$ is given by
$$
S(g) = S_0(g) + k\Gamma(g),
$$
for some $k\in \mathbb{Z}$.

> **Note:** The reason why we want $k \in \mathbb{Z}$ is so that in the Path integral, changes of the homotopy class of the extensions leave the Path integral measure invariant. If $k$ was not an integer we would get terms of the form $e^{2\pi ik}$ if we picked different extensions of $g$, which means that we wouldn't treat them all in the same way.  
>
> In practice we pick $k\in \mathbb{Z}_{\geq0}$ and $\lambda^2 = \frac{\pi}{k}$ so that we simplify the equations of motion below. If we were to pick negative $k$ the action is not positive definite, so we can't do stationary phase on the path integral.

**<u>Proposition:</u>** The equations of motion of $S$ are given by
$$
\left( 1 + \frac{\lambda^2 k}{\pi} \right) \partial (g^{-1}\bar \partial g) + \left( 1 - \frac{\lambda^2 k}{\pi} \right) \bar \partial (g^{-1}\partial g) = 0,
$$
where we have used Dulbeault operators. 

Therefore we have two currents now which are
$$
\begin{align*}
J = -kg^\ast \bar \mu && \bar J = kg^\ast \mu,
\end{align*}
$$
where $\bar \partial J = \partial \bar J = 0$ because of the equations of motion.



# Algebras

We have a field description of the WZW model, but, in practice, the only reason why that is useful is to derive an algebraic description of the model in order to use that in most calculations. Turns out that the structure is highly constrained and particularly nice. We will see that the resulting Conformal Field Theory is rational.

## Chiral Algebra

We didn't fix a representation before, so we pick the adjoint representation of the Lie Algebra, which we can always take. We can count dimensions and find that $J$ must have conformal weights $(1,0)$ in order for the action to be unitless. Let's be a bit more explicit. We can write the current as $J = J^\alpha \otimes t_\alpha$ where $t_\alpha$ are the Lie algebra generators, so we have a bunch of them now. 

What we notice is that the OPE can be written as
$$
J^\alpha(z) J^\beta(w) \sim \sum_{n} \frac{X_n}{(z-w)^{n}},
$$
where $X_n$ has weight $2-n$. We know that by unitarity there must be no operators with negative conformal weight (otherwise the Virasoro representation they are in would not be unitary by Kac's theorem). With a bit of work we can conclude the following.

**<u>Lemma:</u>** The OPE of the current operators in the basis where $K(t_\alpha,t_\beta) = \delta_{\alpha\beta}$ is given by
$$
J^\alpha(z) J^\beta(w) \sim \frac{k\delta^{\alpha \beta}}{(z-w)^2} + \frac{if^{\alpha \beta}_\gamma J^{\gamma}(w)}{z-w},
$$
where $f^{\alpha\beta}_{\gamma}$ are the structure constants of the Lie algebra. Similarly for the antiholomorphic part. 

This nice, because we can talk about the mode algebra of each current by defining
$$
J^\alpha = \sum_{n\in \mathbb{Z}} J_n^\alpha z^{-n-1}.
$$
With this in mind, we can see that
$$
[J^\alpha_n,J^\beta_m] = kn\delta^{\alpha\beta} \delta_{n+m} + i f^{\alpha\beta}_\gamma J^\gamma_{n+m}.
$$
An algebra with such a property is called an **affine Kac-Moody algebra**. The particular property is that the zero modes $(n=m=0)$ form a copy of $\mathfrak{g}$, so we often think of this as an extension to the Lie algebra denoted by $\hat{\mathfrak{g}}_k$.



## Sugawara Stress Tensor

Given an algebra we can construct a Stress tensor. We do this by the **Sugawara construction** which is detailed here.

The holomorphic part of the classical stress tensor is given by 
$$
T = \frac{1}{2k} \text{tr\,}J\wedge\ast  J = \frac{1}{2k} J^a J^a,
$$
in the basis where $\text{tr\,}t^at^b = \delta^{ab}$. The issue as always becomes normal ordering. To solve this we define
$$
(J^aJ^a)(z) = \frac{1}{2\pi i} \int_{S^1} \frac{dx}{x-z} J^a(x)J^a(z),
$$
where $S^1$ here is a small circle around $z$. With some calculation overhead we can see that
$$
(J^aJ^b)(z) J^a(w) = 2(k+h^\vee) \left( \frac{J^a(w)}{(z-w)^2} + \frac{\partial J^a(w)}{z-w} \right),
$$
where $h^\vee$ is the dual Coxeter number defined by
$$
f^{ab}_c f^{bc}_d = 2h^\vee \delta^{ad}.
$$
The above therefore shows that if we redefine our stress tensor to be
$$
T(z) = \frac{1}{2(k + h^\vee)}(J^aJ^a)(z),
$$
then $J^a$ are primaries with dimension $1$ as expected. Doing the $TT$ OPE we find that the central charge is
$$
c = \frac{k \dim \mathfrak{g}}{k + h^\vee}.
$$
We call that stress tensor the **Sugawara Stress Tensor**, and therefore we have seen that the enveloping algebra of every Kac-Moody algebra contains a copy of Virasoro.

**<u>Proposition:</u>** The stress tensor modes are given by
$$
L_n = \frac{1}{2(k + h^\vee)}\sum_{m\in \mathbb{Z} } {:}J^a_mJ^a_{n-m}{:} = \frac{1}{2(k + h^\vee)}\left( \sum _{n\leq -1}J^a_nJ^a_{m-n} + \sum_{n\geq 0} J^a_{m-n}J^a_n \right).
$$
And the algebra satifies
$$
\begin{align*}
[L_n,J^a_m] &= -mJ^a_{n+m}\\
[L_n,L_m] &= (n-m)L_{n+m} + \frac{c}{12} n(n^2-1) \delta_{n+m,0}.
\end{align*} 
$$
***Proof:*** This is a good exercise that I should do to get comfortable.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
An important convenience which is a corollary of the Sugawara construction is:

**<u>Proposition:</u>** When $\mathfrak{g}$ is semisimple, then the Sugawara stress tensor is defined by $T_{\mathfrak{g}} = \sum_{\mathfrak{h}\prec \mathfrak{g}} T_\mathfrak{h}$ which implies that the central charge satisfies
$$
c_{\mathfrak{g}} = \sum_{\mathfrak{h} \prec \mathfrak{g}} c_{\mathfrak{h}}.
$$
Another cool result is that these have been classified.

| $\mathfrak{g}$ | $A_n$    | $B_n$    | $C_n$    | $D_n$    | $E_6$ | $E_7$ | $E_8$ |
| -------------- | -------- | -------- | -------- | -------- | ----- | ----- | ----- |
| $h^\vee$       | $n+1$    | $2n-1$   | $n+1$    | $2n-2$   | $12$  | $18$  | $30$  |
| $\text{dim}$   | $n^2+2n$ | $2n^2+n$ | $2n^2+n$ | $2n^2-n$ | $78$  | $133$ | $248$ |



## Primaries

Primaries are the highest weight vectors of the irreducible highest weight representations of the affine Kac-Moody algebra $\hat{\mathfrak{g}}_k$ of the Hilbert space of the theory. So we need to analyze their representations.

Most of this is developed [here](../Geometry/Lie_Algebras.md) but here is a telegraphic summary of the properties we are looking for. Say we have a set of simple roots $S$. Then for any $\alpha \in S$ there corresponds an Lie algebra element $E^\alpha$ such that $[H,E^\alpha] = \alpha(H)$ for any $H \in \mathfrak{h}$. Given a representation of a Lie algebra $\rho: \mathfrak{g}\to \text{End}(V)$ and a simultaneous eigenvector $\psi$ for the Cartan subalgebra then for any $H\in \mathfrak{h}$ we have that $\rho(H) = \lambda(H) \psi$, where $\lambda \in \mathfrak{h}^\ast$ is called a weight. Then the state $E^\alpha\psi$ has weight $\lambda + \alpha$ and so on. We draw a plane in $\mathfrak{h}^\ast$ and call the roots that fall on one side of it positive. It doesn't matter which it is though. In a highest weight representation there exists a state with weight $\lambda$ such that $\lambda + \alpha$ is not a weight for any state for all positive roots $\alpha$. In an affine Lie algebra, we have a copy of the roots of the base Lie algebra, at each level, plus an extra one $\delta = K(-\Lambda_0,\cdot)$ that maps us between the levels and it is called an *imaginary* root. 

A positive root is simple, if it can't be expressed as a sum of two positive roots. The set of simple roots is a basis for $\mathfrak{h}^\ast$ and all other roots are sums (or differences) of simple roots. There is the Weyl group, which is a group of reflections on planes perpendicular to the roots that generates the set of roots and it is going to be useful shortly. One cool result, is that the entire dual Cartan algebra is split into cones known as Weyl chambers, such that the orbit of the roots in one chamber generates the rest. 

Every root $\beta$ can be written in terms of simple roots as $\beta = \sum_{\alpha \in S}\beta^\alpha\alpha$. There is a particularly useful root $\theta$ which is the one where $\sum_{\alpha \in S} \theta^\alpha$ is maximum. In this case, the coefficients of $\theta$ are called the *marks*. A different normalization of the roots is called the coroots $\alpha^\vee$. This is how roots appear in the Weyl transformation. We can express the components of $\theta$ in the simple coroots and we call them comarks. In particular we have the defining relation
$$
\alpha^\vee =\frac{2\alpha}{(\alpha, \alpha)}.
$$
Another convenient basis is the one of fundamental weights. There is a natural inner product in $\mathfrak{h}^\ast$ induced by the killing from, and the dual elements of the coroots roots are the fundamental weights satisfying $(\omega^\alpha, \beta^\vee) = \delta_{\alpha,\beta}$. In an affine Lie algebra we have a special simple root $\alpha_0 = -\theta +\delta$. Finally we know that $K(-\Lambda_0,\hat k) = 1$ so we can find a weight $\omega_0 = K(\hat k,\cdot)$, this would have the property that $(\omega_0,\delta)= 1 = (\omega_0, \alpha_0^\vee)$ while $(\omega_0, \alpha^\vee) = 0$ for any $\alpha \in S\setminus\{\alpha_0\}$. 

Phew! That was fast. A detailed description is the link above. One thing we can do is to list the fundamental weights. Any weight can be given as a linear combination of fundamental weights like so:
$$
\lambda = \sum_{\alpha \in S} \lambda_\alpha \omega_\alpha + l\delta, 
$$
where $l\in \mathbb{R}$. Having fixed the representation of $\hat k$ to be the level $k \in \mathbb{Z}_{\geq 0}$ we see that for any state with weight $\lambda$ it must be the case that 
$$
k = \lambda(\hat k) = (\lambda, \delta) = \sum_{\alpha \in S} \lambda_\alpha (\omega_\alpha,\delta).
$$
 But $\delta = \alpha_0 + \theta = \sum_{\alpha\in S}\theta_{\alpha}^\vee\alpha^\vee$ (where we used $\theta_{\alpha_0}^\vee= 1$) so we find
$$
k = \sum_{\alpha \in S}\lambda_\alpha \theta_{\alpha}^\vee,
$$
since the comarks are fixed by the algebra and $k$ by the representation, there aren't infinite possibilities for the weights. This implies something nice. Every affine weight $\hat \lambda$ is given by a finite weight $\lambda$ in the underlying lie algebra like so
$$
\hat \lambda = k\omega_0  + \lambda + l\delta.
$$
In a unitary representation we want an inner product such that $(J^\alpha_n)^{\dagger} = J^\alpha_{-n}$, which implies $H_n^\dagger = H_{-n}$ and $(E^\alpha_n)^{\dagger} = E^{-\alpha}_{-n}$. This way we have that for any state $\psi$ with weight $\hat \lambda$ we have
$$
\langle E_{-n}^\alpha\psi, E_{-n}^\alpha \psi  \rangle= \langle \psi, E_{n}^{-\alpha}E_{-n}^\alpha \psi  \rangle = \frac{2[nk-(\alpha,\lambda)]}{(\alpha,\alpha)} \langle \psi,\psi \rangle,
$$
which is positive if $n$ is a positive integer and if $(\alpha,\lambda) < k$ for all simple $\alpha$, which is the same constraint above. So if we know the coroots we can solve it. 

Another interesting question then is what about the famous conformal weight? In other words, what is $L_0$ in this algebra. Clearly this is connected to $\Lambda_0$ which is the operator that gives the level, but the true conformal weight is lost. However, all is not lost, because we already know something interesting. From the field discussion above, the $L_0$ operator is the $0$ mode of $T$. By the Sugawara construction it is given by
$$
L_0 = \frac{1}{(k + h^\vee)}\left( \frac{1}{2}J_0^\alpha J_0^\alpha + \sum_{n\geq 1} J^a_{-n}J^a_n \right).
$$
We know that if $\psi$ is the ground state then $J_n\psi = 0$, so we find that
$$
L_0 = \frac{J_0^\alpha J_0^\alpha}{2(k+h^\vee)} - \Lambda_0,
$$
But we also notice that this is almost the Cassimir for the underlying Lie algebra, that is because $J_0^\alpha \psi = -t^\alpha \psi$ where $t^\alpha$ is the generator of the base semisimple Lie algebra. Specifically in any simple Lie Algebra one can find Cassimir operators in the enveloping algebra (i.e. the formal power series of elements in $\mathfrak{g}$) like so. Let $B$ be a basis of the Lie algebra. Then
$$
Q = \sum_{a,b \in B} \frac{ab}{K(a,b)},
$$
where $K$ is the killing form, is the Cassimir Element. In this case we have picked $J$ that diagonalize it so we are good. In the Cartan-Weyl Basis we can rewrite this as
$$
Q = \sum_{H} HH + \sum_{\alpha>0} \frac{(\alpha,\alpha)}{2} (E^\alpha E^{-\alpha} + E^{-\alpha}E^{\alpha}).
$$
 Now on a highest weight state $\psi$ with weight $\lambda$ we see the following. 
$$
\begin{align*}
Q \psi 
&= \sum_{H}HH \psi + \sum_{\alpha > 0} \frac{(\alpha,\alpha)}{2} (E^\alpha E^{-\alpha} + E^{-\alpha}E^{\alpha})\psi\\
&= (\lambda,\lambda) \psi + \sum_{\alpha>0} \frac{(\alpha,\alpha)}{2} ([E^\alpha,E^{-\alpha}]\psi +2E^{-\alpha}E^\alpha\psi)\\
&= (\lambda,\lambda)\psi + \sum_{\alpha>0} (\alpha,\lambda) \psi\\
&= (\lambda, \lambda + 2\rho) \psi,
\end{align*}
$$
where we have used that $\rho = \frac{1}{2}\sum_{\alpha>0} \alpha$ and that $[E^{\alpha},E^{-\alpha}] = \frac{2}{(\alpha,\alpha)}\alpha\cdot H $. Therefore the conformal weight of a primary with finite weight $\lambda$ is
$$
L_0 \psi = \frac{Q}{2(k+h^\vee)} \psi = \frac{(\lambda, \lambda + 2\rho)}{2(k + h^\vee)}.
$$



## Characters

The Hilbert space is organized into irreducible representations of $\hat{\mathfrak{g}}_k$. These representations are graded by the weights. In particular if you have a representation with highest weight $\lambda$ you can grade it by an element of the Cartan algebra because its representation will necessarily commute with the remaining generators (This is the same thing we are doing in quantum mechanics when we label states by independent commuting observables). Anyway, one can find a function $\chi_{\lambda}:\hat{\mathfrak{h}}_k \to \mathbb{C}$ that takes a Cartan subalgebra element and provides a generating function for the dimensions in its grading. 

**<u>Definition:</u>** Given a representation of $\mathfrak{g}$ with highest weight $\lambda$, its **character** is a map $\text{ch}_{\lambda} : \mathfrak{h} \to \mathbb{C}$ given by
$$
\text{ch}_{\lambda} = \sum_{\mu \in \Omega_\lambda} \text{mult}(\mu) e^{\mu},
$$
where $\Omega_\lambda \subset \mathfrak{h}^\ast$ is the set of weights in the $\lambda$ highest weight representation (also known as the weight system of $\lambda$),  $\text{mult}(\mu)$ is the number of independent vectors in the representation with weight $\mu$, and $e^\mu : \mathfrak{h}\to \mathbb{C}$ is for any $H\in \mathfrak{h}$ such that $e^{\mu}(\mathfrak{h}) = e^{(\mu, K(H))} = e^{\mu(H)}$. 

In an affine Lie algebra we define a **normalized character** since that thing above is not necessarily modular invariant. Therefore we write,
$$
\chi_{\lambda} = e^{-m_{\lambda} \delta} \text{ch}_{\lambda},
$$
where $m_\lambda \in \mathbb{R}$ is a constant known as the **modular anomaly** and it is related to the central charge of the algebra $\hat{\mathfrak{g}}_k$ as well as  the conformal weight of the representation (i.e. the Cassimir element)
$$
m_{\lambda} = h_\lambda - \frac{c_{\mathfrak{g}}}{24} = \frac{(\lambda, \lambda + 2\rho)}{2(k + h^\vee)} - \frac{k \dim \mathfrak{g}}{24(k + h^\vee)} = \frac{(\lambda + \rho, \lambda + \rho)}{2(k + h^\vee)} - \frac{(\rho,\rho)}{2h^\vee}.
$$
Often in the context of a WZW model we keep more than one charges, we define the character of a module as
$$
\chi_{\lambda}(\tau,z) = \chi_\lambda(-2\pi i \tau \Lambda_0 -2\pi i z_\alpha J^\alpha),
$$
and use it as a generating functional for the dimensions of the various graded subspaces.

With this definition we can calculate a formula for the $S$ and $T$ modular matrices. In particular we can quickly see that
$$
T_{\lambda\mu} = e^{2\pi i \, m_{\lambda}} \delta_{\lambda\mu}.
$$


## Fusion Ring

The super important invariant of a CFT is its Fusion ring. Once it is decomposed into representations of the chiral algebra these representations can fuse together and then be decomposed. For simple Lie algebras this is captured by the Clebsch-Gordan decomposition, or its more general version. We call that structure a Fusion ring.

In conformal Field theory this is constrained severely because of the famous Verlinde formula. For a set of irreducible representations $\mathcal{R}$ we find that for all $a,b\in \mathcal{R}$ 
$$
a\otimes b = \bigoplus_{c\in \mathcal{R}} N_{ab}^c c,
$$
for some nonnegative integers $N^{c}_{ab}$ given by
$$
N_{ab}^c = \sum_{d \in \mathcal{R}}\frac{S_{ad} S_{bd} S_{cd}^\ast}{S_{1d}},
$$
 where $S$ is the modular $S$ matrix of the theory.



# Examples

At low $k$ WZW models are surprisingly tractable. Here are some of them in more detail.



## $G_2$ Model

The Lie algebra $G_2$ might seem complicated because it is an exceptional algebra, but it enjoys a nice **Fib** fusion ring. The coroots are $2,1$ therefore the highest weight representations at level $k$ must have finite weight $\lambda = \lambda^1\omega_1 + \lambda^2\omega_2$ satisfying
$$
k \geq 2\lambda^1 + \lambda^2.
$$
If $\lambda$ is a highest weight then all of the $\lambda^i$ must be positive integers otherwise we could subtract more. For $k=1$ we have only two possible weights are $0,\omega_2$. For $\lambda = 2$ we have $0,\omega_1, \omega_2, 2\omega_2$. So let's start with the simplest case where we only have two primaries. How can we find their conformal weights? Assume $\psi$ is the highest weight state with weight $\omega_2$. Then according to the discussion above 
$$
L_0 \psi = \frac{(\omega_2, \omega_2 + 2\rho)}{2(1 + h^\vee)} = \frac{1}{10} \left(\frac{2}{3} + \frac{10}{3}\right) = \frac{2}{5},
$$
here we've used the quadratic form matrix $F$ and the fact that $\rho = \omega_1 + \omega_2$. The other one has weight $0$ lol. Ok this is awesome! We've met our primaries. By the way the central charge of this model is given by
$$
c = \frac{k\,\text{dim\,}\mathfrak{g}}{k+h^\vee} = \frac{14}{5}.
$$
The good thing is that with so little primaries we can try to solve for the modular data by assuming unitarity and integrality. Knowing the conformal weights we know that the $T$-matrix is
$$
T = \begin{pmatrix}e^{\frac{7\pi i}{30}} & 0 \\0&e^{\frac{17\pi i}{30}}\end{pmatrix}.
$$
Now we can try to bootstrap the $S$ matrix. Integrality implies that $N_{aa}^1 = 1$ for both defects, while conformal invariance of the vacuum requires that $N_{1a}^a = 1$. Unitarity implies that the $S$ matrix is unitary and the fact that the only charge conjugate of the second primary must be itself, implies that $S^2 = 1$, so $S$ is fixed by a two numbers $a,b,\in \mathbb{R}$ and it is given by
$$
S = \begin{pmatrix}a & b \\b & \frac{b^2\pm 1}{a}\end{pmatrix},
$$
where we used the additional assumption that nothing on the first row should vanish because of Verlidne's formula. Using Verlinde's formula we find that
$$
\begin{align*}
N_{11}^1 &= 1 \iff 1 = a^2 + b^2
\end{align*}
$$
this already implies that there is no solution for $\det S = 1$. For $\det S = -1$ we use 
$$
N_{22}^2 = n \in \mathbb{Z}_{\geq 0}\iff \frac{b}{a} - \frac{a}{b} = n,
$$
which in combination with the other equation means that we can write the $S$ matrix as
$$
S = \begin{pmatrix}\cos\theta & \sin\theta \\ \sin\theta & - \cos \theta\end{pmatrix},
$$
with $\theta = \arccot(-\frac{n}{2})$. So the S-matrices are parameterized by whatever the value of $N_{22}^2$ is. So this is the only thing that we need from our model. Since we know $T$ we are done! We can use the condition that
$$
(ST)^3 = 1 \implies \cos\theta = \sqrt{\frac{2}{5+\sqrt 5}} = \frac{1}{\sqrt{1 + \phi^2}} \implies \sin\theta = \frac{\phi}{\sqrt{1+\phi^2}}.
$$
So the $S$ matrix in our case is
$$
S = \frac{1}{\sqrt{1+\phi^2}}\begin{pmatrix}1 & \phi \\ \phi & -1\end{pmatrix}.
$$
Finally we can find our famous $n$ because
$$
n = \phi - \frac{1}{\phi} = 1,
$$
so we have $\text{Fib}$ symmetry as we always wanted! I used the fact that $\phi$ is the solution to $x^2 - x - 1= 0$. THIS IS AWESOME! There is only one consistent way to add $F$ symbols to $\text{Fib}$ therefore we even have the $F$-symbols where the nontrivial ones are
$$
F^{\phi}_{\phi\phi\phi} = \frac{1}{\phi}\begin{pmatrix}1 & \sqrt{\phi}\\ \sqrt{\phi} & -1\end{pmatrix}.
$$


## Folded $G_2$

In the study of generalized symmetries and kinematics often folding is a great way to obtain new theories or study the existing one. Let's play with the kinematics of $(G_2)^2$ and try to learn something about tis symmetry category. Since $G_2$ has $\text{Fib}$ symmetry, it is clear that $(G_2)^2$ would have at least $\text{Fib}\boxtimes \text{Fib}$ symmetry, which we can read off directly from the primaries which are now tensor products of the $G_2$ primaries. However, there are more symmetries. While $G_2$ didn't have any appreciable outer automorphisms, $(G_2)^2$ does! The obvious one is the exchange one, which we will think about in detail in a second.

*One interesting question we can ask is if the model $(G_2)^2$ is simply the WZW model for $G_2\oplus G_2$ the answer is yes because of the Sugawara construction of the stress tensor being simply the sum of the two stress stress tensors.*

Let's study the modular tensor category $\text{Fib}\boxtimes \text{Fib}$ for a second. There are 4 objects which are products of the 2 objects of $\text{Fib}$. their fusion rules satisfy $(a\boxtimes b) \otimes (c\boxtimes d) = (a\otimes c) \boxtimes (b\otimes d)$ so all the $F$ symbols are given by 
$$
F^{a}_{bcd} = F^{a_1}_{b_1c_1d_1} \otimes F^{a_2}_{b_2c_2d_2},
$$
where $a = a_1 \boxtimes a_2$. However, what would be even more interesting is to find boundary states that close in the Symmetry Category that includes the $\mathbb{Z}_2$ outer automorphism $\sigma$ that exchanges the two copies. We denote that category $C_{\text{Fib}} \coloneqq (\text{Fib}\boxtimes\text{Fib}^{\text{rev}})\ltimes \mathbb{Z}_2$. One quick thing we can figure out is its objects and fusion rules. Its simple objects are given by pars of the form $\alpha \in C$ where $\alpha = (a\boxtimes b,g)$ where $a,b \in \text{Fib}$, and $g\in \mathbb{Z}_2$, and the fusion rules are of the form
$$
\begin{align*}
(a\boxtimes b,\sigma) \otimes (c\boxtimes d,g) &= ((a\boxtimes b) \otimes (d\boxtimes c), \sigma g)\\
(a\boxtimes b,1) \otimes (c\boxtimes d,g) &= ((a\boxtimes b) \otimes (c\boxtimes d),1 g),
\end{align*}
$$
This rule stems from the action of sigma in the Hilbert space which is given by $\sigma V_a \otimes V_b \sigma = V_b \otimes V_a$, where $V_a,V_b$ are modules associated to $a,b \in \text{Fib}$. Now what we can do is to find the $F$ symbols of this category, which could be particularly nice. Here, we very quickly have our lines exploded! In particular $C_{\text{Fib}}$ has $2(\text{rank\,} \text{Fib})^2 = 8$ lines, so this becomes exponentially hard to bootstrap for other categories. Anyway we will do our best to work this out in this simple example. 

Let's adopt the following notation $a\in C$ is of the form $a=(a_1\boxtimes a_2, 1)$ and $\hat a = (a_1\boxtimes a_2, \sigma)$, while $a' = \sigma \otimes a\otimes \sigma$. We notice that $\hat 1 = \sigma$ must have dimension $1$ because it is invertible so all is good. Let's try to calculate $F$ symbols in which $\sigma$ is involved in. This is also known as the $\mathbb{Z}_2$-extension of a Fusion Category we have been considering, more of which is found [here](https://arxiv.org/abs/0909.3140). That paper guarantees the existence of $F$ symbols so let's find them in this case.

One thing that we notice immediately is that the $F$ symbols satisfy
$$
(F_{abc}^d)^{\hat x y}=(F_{abc}^d)^{y\hat x}= (F_{abc}^d)^{\hat x\hat y} = 0.
$$
In fact any $F$ symbol with a single $\hat x$ entry is trivially zero. That is because $\text{Hom}(a\otimes \hat b, c) = 0$ for all $a,b,c \in \text{Irr} (\text{Fib}\boxtimes \text{Fib}^{\text{rev}})$. Effectively there is one (or basically two) key $F$ symbols that we need to fix. These are
$$
\begin{align*}
\beta \coloneqq \left(F_{\hat 1 aa}^{\hat a'}\right)^{a\hat a'} && \frac{1}{\gamma} \coloneqq \left(F_{aa\hat 1}^{\hat a}\right)^{a\hat a}.
\end{align*}
$$
So we need some way to constrain them. The nice realization is that in the unitary gauge (which we have chosen) the (nonzero part) of the $F$ symbols must be unitary! Therefore, $\beta,\gamma$ must simply be some phases because there is only one possible fusion channel in that case. Do we have freedom to choose the phase? Yes! Our normalization doesn't specify the phase because every time $v$ appears in the consistency conditions, so does $v^\dagger$ so the basis is specified up to a phase that we can absorb! So we set $\beta = \gamma = 1$ and now we are in business. 

The only genuine freedom we have is for the grouplike $F$-symbols that haven't been specified yet. Notice is that $\{1,\hat 1\}$ form the category $\mathbb{Z}_2$ so the $F$ symbols for that are simply given by a normalized cocycle $\alpha \in H^3(\mathbb{Z}_2, U(1))$. Luckily there are only two and we already know that $F^{\hat 1}_{\hat 1\hat 1\hat 1} = 1$ so it is the trivial one. Ok awesome.

That fixes all of our Fusion rules, and what we are left with is to see if there is some braiding somewhere. Turns out there is none.

**<u>Proposition:</u>** The Fusion category above does not admit a braiding structure.

***Proof:*** A brading structure would provide a natural isomorphism with components $c_{x,y} : x\otimes y\to y\otimes x$. In that case $\hat a' \cong \hat 1 \otimes a \xrightarrow{c_{\hat 1, a}} a\otimes \hat 1 \cong \hat a$ but no such arrow exists because $\hat a \neq \hat a '$ are both simple.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
So we have a fusion category that is cannot be modular (unfortunately). But no matter. We only wanted modularity to make the center easier. Now we might struggle a bit.

### Boundaries

We can check something cool with boundaries. If we have a collection of Cardy boundaries that we have obtained from the orbifolding procedure, we have their $g$ functions we can figure out their Frobenius-Perron dimensions (which are proportional to $g$) using the methodology described [here](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.67.161). Using this we can then search which module of the symmetry category do these representations form and see if the action of the $Z_2$ defects is trivial, i.e. $N_{\hat 1 a}^b = \delta_{a}^{b}$. If this is the case we are done! But it might be the case that this is not it. Let's try this differently.









