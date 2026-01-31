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











