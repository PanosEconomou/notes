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

















