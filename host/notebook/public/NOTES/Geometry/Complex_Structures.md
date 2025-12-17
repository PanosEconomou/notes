# Complex\_Structures

## Complex Structures

Time to understand complex manifolds! Really the main point is to use definitions from \[Differential Geometry]\[./Geometry.md] and extend them so that we can effectively do calculus on complex manifolds with holomorphic and anti-holomorphic maps. This is primarily following [Nakahara Chapter 8](http://www.stat.ucla.edu/~ywu/GTP.pdf).

\[TOC]

### Basic Definitions

We will start with definitions that are useful in the context of complex analysis in order to fully define what we mean by complex maps in $\mathbb{C}^n$.

**Definition:** A map $f : \mathbb{C}^n \to \mathbb{C}$ is called **holomorphic** if it satisfies the Cauchy-Riemann criterion, i.e. if $f = f\_1 + if\_2$ where $f\_1,f\_2:\mathbb{R}^{2n} \to \mathbb{R}$ are smooth functions

$$
\begin{align*} \frac{\partial f_1}{\partial x^i} = \frac{\partial f_2}{\partial y^i} && \frac{\partial f_1}{\partial y^i} = - \frac{\partial f_2}{\partial x^i} \end{align*}
$$

The complex conjugate $\bar f : \mathbb{C}^n \to \mathbb{C}$ given by $\bar f = f\_1 - if\_2$ is often called an **anti-holomoprhic** function. A function $F: \mathbb C^n \to \mathbb C^m$ given by $F(z) = (f^1(z),f^2(z),\cdots, f^m(z))$ is called **(anti) holomorphic** if each $f^i:\mathbb C^n \to \mathbb C$ are (anti) holomorphic.

Now we have a definition that is smoothness$^+$ specifically crafted for dealing with smoothness in a complex setting. Notice that the set of holomorphic functions is much smaller than the set of smooth functions, but that’s ok! We have everything we need to define a complex manifold.

**Definition:** An **m-dimensional complex manifold** $M$ is a second countable, Housdorff topological space with a complex maximal atlas, i.e. a family $\mathcal{A} = {(U\_i,\phi\_i)}_{i\in I}$ such that ${U\_i}_{i\in I}$ is an open cover of $M$, $\phi\_i:U\_i \to \mathbb{C}^m$ is a homeomorphism and for any two charts $(U,\phi),\ (V,\psi)$ we have that the map

$$
\phi \circ \left.\psi\right|_{\psi(V)}^{-1} : \psi(U\cap V) \to \psi(U\cap V)
$$

is a holomorphic function. We call the last condition the compatibility of charts, and $m\in \mathbb{N}$ the **complex dimension** of the manifold.

**Corollary:** Any complex manifold with dimension $m$ is a real manifold with dimension $2m$.

With this we can copy paste the useful definitions for maps. In particular

**Defintion:** Given two complex manifolds $M,N$ a **holomorphic map** $f:M\to N$ is such that for any chart $(U,\phi)$ of $M$ and $(V,\psi)$ of N the map

$$
\psi \circ f \circ \phi^{-1}: \phi(U) \to \psi(V)
$$

is a holomorphic function. If the holomorphic map is bijective we call $M$ **biholomorphic** to $N$, and $f$ a **biholomorphism.** A **holomorphic function** is a holomorphic map $f:M\to \mathbb C$, and the set of all holomorphic functions on an open subset $U\subset M$ of $M$ is denoted by $\mathcal{O}(U)$.

This is basically a complex diffeomorphism. Now check this theorem out that is a direct consequence of the Heine Borel theorem and the Maximum modulus Principle.

**Theorem:** Any holomorphic function $f:M\to \mathbb C$ is constant if $M$ is compact.

Ok I’m done with definitions, let’s play!

## Complexifications

Honestly the reason to even develop this formalism is to be able to take preexisting manifolds and convert them somehow into complex ones. We will do this A LOT with tangent bundles and tangent spaces because it is super useful in physics and not only. Let’s see how to do this.

### Complexification of Vector Spaces

We do it in steps. We first _complexify_ the set of functions and then we slowly move up towards the tangent and cotangent spaces.

**Definition:** Given a real $n$ dimensional manifold $M$ the set $C^\infty(M)^{\mathbb{C\}}$ is the set of all functions $f:M\to \mathbb C$ such that $f = g + ih$ for $g,h \in C^\infty(M)$. This is called the **complecification of the set of smooth functions** of $M$.

**Note:** The complexification of the set of smooth functions does not only contain (anti) holomorphic functions! It contains a lot more.

Now let’s move on

**Definition:** Let $V$ be a real vector space of dimension $m$. Its **complexification** $V^{\mathbb{C\}}$ is a complex vector space given by

$$
V^{\mathbb{C}} = V\otimes \mathbb{C}
$$

where the tensor product is taken by treating $\mathbb{C}$​ as a real vector space and it defines a scalar product with the complex field.

Let’s examine it a bit closer in the following proposition.

**Proposition:** For any $v\in V^{\mathbb{C\}}$​ there exist $u,w \in V$ such that $v = u + i w$.

Using this proposition we can define the conjugate to be

**Definition:** For any $v = u + iw \in V^{\mathbb{C\}}$ for $u,w \in V$ its **complex conjugate** is given by $\bar v = u - iw$. A vector $v$ is **real** if $\bar v = v$. In addition, for a linear map $f : V \to W$ we can define the **complexified** linear map $f^\mathbb{C} : V^{\mathbb{C\}}\to W^{\mathbb{C\}}$ like so

$$
f^{\mathbb{C}}(u+iw) = f(u) + if(w),
$$

for any $u,w \in V$. A complex linear map is real if it is equal to its conjugate.

I know this is boring, just a little more! This proposition is kinda what unlocks the complexification of the tangent space.

**Proposition:** Let ${e\_j}_{j=1}^m$ be a basis of $V$. Then ${e\_j + i 0}_{i=1}^m$ is a basis for $V^{\mathbb{C\}}$.

**Corollary:** $\dim\_{\mathbb{R\}} V = \dim\_{\mathbb{C\}} V^{\mathbb{C\}}$.

Now we can finally complexify the tangent space, just like any other vector space. What we care about is the complexified cotangent space. The ambiguity is resolved with this proposition

**Proposition:** Given a real manifold $M$ and $p \in M$, $(T\_p^\ast M)^\mathbb{C} \cong (T\_p M^\mathbb{C})^\ast$

Also note that the properties we wanted are captured here

**Proposition:** Any $Z = X + i Y \in T\_p M^\mathbb{C}$ for $X,Y\in T\_pM$ has a natural action on $C^\infty(M)^\mathbb{C}$ where $X : C^\infty(M)^\mathbb{C} \to \mathbb{C}$ such that for all $f \in C^\infty(M)^\mathbb{C}$

$$
Zf = Z(f_1 + if_2) = Xf_1 - Yf_2 +iXf_2 + iYf_1
$$

Using these we can talk about the complexificaition of sections of vector bundles! Let’s define that real quick

**Definition:** Let $E\xrightarrow{\pi} M $ be a vector bundle over $M$ with fiber a real vector space $V$. The we can define the complexified set of smooth sections $\Gamma(E)^\mathbb{C}$ as the set of all sections on the bundle $\tilde{E} \xrightarrow{\pi} M$ with fiber $V^\mathbb{C}$.

Note that this definition may seem to abstract, but it has just taught us how to complexify the set of all tensors over any real manifold. We think of $(r,s)$ tensors as sections of the bundle $(TM)^{\otimes r}\otimes (T^\ast M)^{\otimes s}$ therefore their complexification is borrowed directly from the complexification of vector spaces, and their canonical action on the set of smooth complex functions is borrowed from the complexification of the tangent space.

### Almost Complex Structures

We saw that the set of holomorphic functions is way too restrictive but we still want to do differential geometry and have some nice notion of volumes forms, differentials, etc.. With that as a starting point we want to use vector fields on complex manifolds to define a structure that will make them look more like $\mathbb{C}$. Doing so will give us interesting results that will emulate calculus.

**Note:** on notation. We said before that any complex manifold $M$ is also a real manifold. Therefore we don’t have to redefine the concepts of tangent space etc. For any $p\in M$, we still call $T\_pM$ the tangent space of $M$ at $p$ as if it was a real manifold. However we will find useful the complexified tangent space $T\_pM^\mathbb{C}$ as it has a natural action on the set of complex smooth functions of $M$.

Treating $M$ as a real manifold of dimension $2m$ we can pick a basis on some chart $(U,\phi)$ for it of the form $\phi:U\to \mathbb{C}$ such that

$$
\phi(p) = (x^1(p)+iy^1(p),\cdots, x^m(p)+iy^m(p))
$$

we will notice that the functions ${x^i,y^i}$ form a real chart. Therefore we can immidiately say that the following vector fields are a basis of the real tangent bundle

$$
\frac{\partial}{\partial x^\mu},\frac{\partial}{\partial y^\mu}
$$

for $1\leq \mu \leq m$. However, as we have shown when we were complexifying vector spaces, these vector fields will also be a basis for the complexified tangent bundle. Let’s take some linear combination of them that is more useful in defining a complex structure

$$
\frac{\partial }{\partial z^\mu} = \frac{1}{2}\left[\frac{\partial}{\partial x^\mu} - i \frac{\partial}{\partial y^\mu}\right],
$$

for $1\leq \mu \leq m$. The factor for $\frac{1}{2}$ is there sot hat this partial derivative reduces to the complex derivative in 1D. Similarly we define its conjugate

$$
\frac{\partial}{\partial \bar z^\mu} =\frac{1}{2}\left[\frac{\partial}{\partial x^\mu} + i \frac{\partial}{\partial y^\mu}\right].
$$

These are also bases of the complexified tangent space, with the following special property.

**Proposition:** A map $f \in C^\infty(M)^\mathbb{C}$ is holomorphic if and only if $\frac{\partial f}{\partial \bar z^\mu} = 0$ and it is anti holomrphic if and only if $\frac{\partial f}{\partial z^\mu} = 0$ for any $1\leq \mu \leq m$.

This is pretty cool! Similarly, we can define a basis for the complexified cotangent bundle using the 1-forms

$$
\begin{align*} dz^\mu = dx^\mu + idy^\mu && d\bar z^\mu = dx^\mu - idy^\mu \end{align*}
$$

Note that these bases are dual to each other. Why is there no 1/2? Because if you work it out we have that

**Proposition:** For any $f \in C^\infty(M)^\mathbb{C}$

$$
df = \frac{\partial f}{\partial z}dz + \frac{\partial f}{\partial \bar z} d\bar z.
$$

Now we have enough tools to define almost complex structures!

**Definition:** Given a manifold $M$ an **almost complex structure** $J:TM\to TM$ on $M$ is a smooth section $\Gamma (T^\ast M\otimes T M)$ such that $J\circ J = -\text{Id}$. A manifold with an almost complex structure is often called an **almost complex manifold.**

_Sidenote:_ We often denote $J\circ J = -\text{Id}$ as $J^2 = -1$ to resemble the almost complex structure of the complex plane.

This might seem inconspicuous as a definition. But just the fact that the manifold can have an almost complex structure is a big deal in turning it into a complex manifold. Namely

**Proposition:** (Properties of Complex Structures) A manifold $M$ of dimension $n$ that admits a complex structure $J$ satisfies

1. $J$ is a bundle automorphism on $TM$.
2. $(\det J)^2 = (-1)^n \implies n$ must be even.
3. $M$ is orientable.

This is pretty cool in turning real manifolds into complex manifolds! We are almost there, but before we hit the nail to the coffin, there is a lot to be gained by studying the almost complex structure of a complex manifold.

**Proposition:** Every complex manifold $M$ admits a complex structure $J$ that in the local basis described above is given by

$$
J = i\left[ dz^\mu \otimes \frac{\partial }{\partial z^\mu } - d\bar z^\mu \otimes \frac{\partial }{\partial \bar z^\mu } \right]
$$

I think this is very nice because we can now play around some more! We can use the complex structure to break down the tangent bundle based on holomorphy (is that even a word? It sounds really funny)

**Definition:** Given an almost complex manifold $M$ with complex structure $J$ the **holomorphic** subspace of $T\_pM^\mathbb{C}$ for some $p \in M$ is the subspace

$$
T_pM^+= \{X \in T_pM^\mathbb{C} \mid JX = i X \}
$$

and the **anti-holomorphic subspace** is

$$
T_pM^- = \{X\in T_pM^\mathbb{C} \mid JX = -iX\}
$$

The interesting part is the corollary below

**Corollary:** The complex tangent space at $p \in M$ for any almost complex manifold is given by

$$
T_pM^{\mathbb{C}} = T_pM^+\oplus T_pM^-
$$

where $T\_pM^+$ is spanned by $\left.\frac{\partial }{\partial z^\mu}\right|\_p$ while $T\_pM^-$ is spanned by $\left.\frac{\partial }{\partial \bar z^\mu}\right|\_p$. Also we note that

$$
T_pM^- = \overline{T_pM^+} \coloneqq \{\bar Z \in T_pM^\mathbb{C}\mid Z \in T_pM^+\}
$$

and thus $\dim\_\mathbb{C} T\_pM^+ = \dim\_\mathbb{C} T\_pM ^- = \frac{1}{2}\dim\_\mathbb{C} T\_pM = \frac{1}{2}\dim\_\mathbb{C} M $.

Splitting the tangent space has the corollary of splitting the tangent bundle. In particular we can see that

**Corollary:** For an almost complex manifold $M$ the set of complex vector fields can be decomposed as

$$
\mathfrak{X}(M)^\mathbb{C} = \mathfrak{X}(M)^+ \oplus \mathfrak{X}(M)^-
$$

where $\mathfrak{X}(M)^\pm \coloneqq {X \in \mathfrak{X}(M)^\mathbb{C} \mid JX = \pm iX}$. Additionally, under the Lie bracket of vector fields we each $\mathfrak{X}(M)^\pm $ is a Lie algebra.

## Complex Forms

Now that we have seen complex forms and complex structures, it is time to start working on understanding complex forms. The goal is to try and extend our differential operator to a nicer version using the holomorphic and antiholomorphic decomposition of the space of smooth sections of the tangent bundle. I also want to define volume forms for complex manifolds, integrate them and figure out what is stokes theorem in this setting.

We will start with quickly defining forms, then talk about differentials, hermitian metrics, hodge duality and finally parallel transport. Then we will study Kahler manifolds in particular that are a particularly cute kind of complex manifolds.

### Complexification of Forms

We have previously seen how to complexify vector bundles therefore treating forms as sections of vector bundles where the fibre is some product of cotangent spaces complexifies them. We won't waste time writing the definitions, but here are some cool properties.

**Proposition:** _(Properties of Complex Forms)_ Let $\omega,\eta \in \Omega^n(M)^\mathbb{C}$ be a complex $n$-form on a manifold $M$, and ${X\_i}\_{i=1}^n \subset \mathfrak{X}(M)^\mathbb{C}$ be a collection of complex vectors. Then the following properties hold

1. $\overline{\omega}(X\_1,X\_2,\cdots,X\_n) = \overline{\omega(\bar X\_1,\bar X\_2,\cdots,\bar X\_n)}$
2. $\overline{\omega + \eta} = \bar \omega + \bar \eta$
3. $\bar{\bar{\omega\}} = \omega$

The more interesting thing is to see if the algebra structure of $\Omega(M)$ given by the wedge product is preserved in $\Omega(M)^\mathbb{C}$.

**Proposition:** _(Wedge Product of Complex forms and differential)_ Consider two complex forms $\omega \in \Omega^n(M)^\mathbb{C},\ z \in \Omega^m(M)^\mathbb{C}$ given by $\omega = u + iv, , z=x+iy$, where $u,v \in \Omega^n(M),, x,y \in \Omega^m(M).$ Then there is a canonical extension of the wedge product given by

$$
\omega\wedge z = (u+iv)\wedge (x+iy) = u\wedge x -v\wedge y + i (v\wedge x +u\wedge y)
$$

Furthermore, the exterior derivative acts on complex forms as

$$
d\omega = du + idv
$$

Therefore the following still hold

1. $\omega \wedge z = (-1)^{nm} z\wedge \omega$
2. $d(\omega \wedge z) = d\omega \wedge z + (-1)^n \omega \wedge dz$

### On Complex Manifolds

We have seen that on almost complex manifolds there is a nice decomposition of the complexified tangent space to a holomorphic and nonholomorphic component. In particular we have seen that

$$
T_pM^\mathbb{C} = T_pM^+ \oplus T_pM^-
$$

for any $p \in M$. This can help us classify complex differential forms on complex manifolds in a better way.

**Definition:** For an $n$ dimensional complex manifold $M$ and a complex form $\omega \in \Omega^k(M)^\mathbb{C}$ we say that $\omega$ has **bidegree** $(r,s)$ for $r+s = k$ such that for ${V\_i}\_{i=1}^k \subset \mathfrak{X}(M)^\mathbb{C}$ then $\omega(V\_1,V\_2,\cdots,V\_k) = 0$ unless $r$ of the vector fields are in $\mathfrak{X}(M)^+$ and $s$ of the vector fields are in $\mathfrak{X}(M)^-$. The set of all forms with bidigree $(r,s)$ is denoted by $\Omega^{(r,s)}(M)$.

**Proposition:** The forms $dz^{\mu\_1} \wedge dz^{\mu\_2}\wedge \cdots \wedge dz^{\mu\_r} \wedge d\bar z^{\mu\_{r+1\}} \wedge d\bar z^{\mu\_{r+2\}} \wedge \cdots \wedge d\bar z^{\mu\_{r+s\}}$ form a basis for $\Omega^{(r,s)}(M)$.

Here are so cute properties of classifying complex forms in this way.

**Proposition:** _(Properties of complex forms)_ Let $z \in \Omega^{(r,s)}(M)$ and $\omega \in \Omega^{(m,n)}(M)$. Then the following are true

1. $\bar z \in \Omega^{(s,r)}(M)$
2. $z\wedge \omega \in \Omega^{(r+m,s+n)}(M)$
3.  $z = \sum\_{p + q = r+s} z^{(p,q)}$, where $z^{(p,q)} \in \Omega^{(p,q)}(M)$. This implies that the complex forms can be decomposed as

    $$
    \Omega^{n}(M)^\mathbb{C} = \bigoplus_{r+s =n}\Omega^{(r,s)}(M)
    $$

The last property is particularly important and pretty. The interesting thing is that we can break down the action of the differential based on the bidegree of the form. To do this we will introduce Dolbeault operators.

**Definition:** The **Dolbeault** operators are the maps $\partial : \Omega^{(r,s)}(M) \to \Omega^{(r+1,s)}(M)$ and $\bar \partial : \Omega^{(r,s)}(M) \to \Omega^{(r,s+1)}(M)$ such that for some $z \in \Omega^{(r,s)}(M)$

$$
\partial z = \frac{\partial}{\partial z^\mu} z_{\nu_1,\cdots \nu_{r+s}} dz^\mu\wedge dz^{\nu_1} \wedge \cdots \wedge d\bar z^{\nu_{r+s}}\\ \bar \partial z = \frac{\partial}{\partial \bar z^\mu} z_{\nu_1,\cdots \nu_{r+s}} d\bar z^\mu\wedge dz^{\nu_1} \wedge \cdots \wedge d\bar z^{\nu_{r+s}}
$$

**Corollary:** The differential operator on $M$ as a real manifold is given by

$$
d = \partial +\bar \partial
$$

Let's show some properties just to be able to calculate stuff with these objects.

**Proposition:** _(Properties of Dolbealut operators)_ Let $z \in \Omega^{(r,s)}(M)$ and $\omega \in \Omega^{(m,n)}(M)$. Then the following are true

1. $\partial \partial \omega = (\partial \bar \partial +\bar \partial \partial)\omega = \bar \partial \bar \partial \omega = 0$
2. $\partial \bar\omega = \overline{\bar \partial \omega}$
3. $\bar \partial \bar \omega = \overline{\partial \omega}$
4. Leibniz rule.

And now it is time to actually use these operators for what they are meant to be, which is defining holomorphic and antiholomorphic forms in a way similar to how we did it with maps, but now we are extending it to the rest of the forms.

**Definition:** A form $\omega \in \Omega^{k,0}(M)$ such that $\bar \partial \omega =0$ is a **holomorphic form**. A form $\eta \in \Omega^{0,k}(M)$ such that $\partial \eta = 0$ is an **anit-holomorphic form**.

This is great because we have extended our definition and now we are ready to talk about metrics and start putting everything together!

## Hermitian Manifolds

We have seen the basic definitions of complexified stuff, which are all pretty and whatnot, however, the time has come to actually build up some structures that we can use in practice! We will add metrics on these manifolds that will have special properties and we will use them to form things like action functionals and whatnot.

### Hermitian Metrics

Let's start by extending the notion of a metric

**Definition:** Let $(M,g)$ be a complex Riemannian manifold with almost complex structure $J$. If $g$ satisfies for any $X,Y\in \mathfrak{X}(M)^\mathbb{C}$

$$
g(JX,JY) = g(X,Y),
$$

then the metric is called **Hermitian** and $M$ is called a **Hermitian Manifold.**

By the way reading this definition you might be thinking, why the hell can I plug in elements of the complexified space of vector fields into a Riemannian metric. The answer is that since we have complexified all vector bundles in our general theorem before and identified the real subspace of the complexified sections we can just pick g by identification to act canonically on complex vector fields.

**Theorem:** Every complex Riemannian manifold admits a hermitian metric.

_**Proof:**_ The proof is by construction. Given any metric $g$ on a complex Riemannian manifold $M$ we have that the following is a Hermitian metric

$$
\hat g(X,Y) = \frac{1}{2} \left[g(X,Y) + g(JX,JY)\right],
$$

for any $X,Y \in \mathfrak{X}(M)^{\mathbb{C\}}$.

Ok but check this out!

**Proposition:** Any hermitian metric can be represented in the holomorphic basis as

$$
g = g_{\mu\bar \nu} dz^\mu \otimes d\bar z^{\nu} + g_{\bar \mu\nu} d\bar z^\mu \otimes dz^\nu
$$

Notice that in this convention

$$
g_{\mu\bar\nu} = g\left(\frac{\partial}{\partial z^\mu},\frac{\partial}{\partial \bar z^\nu}\right),
$$

etc.

This is a pretty cool result and it is based on the fact that $g(\partial\_{z^\mu},\partial\_{z^\nu}) = g(J\partial\_{z^\mu},J\partial\_{z^\nu}) = -g(\partial\_{z^\mu},\partial\_{z^\nu}) = 0$. So this can only depend on alternating holomorphic and antiholomorphic components. Another cool fact is that a hermitian metric makes the complex structure act like multiplication by i does in $\mathbb C$ by making the vectors perpendicular.

**Proposition:** Let $X\in \mathfrak{X}(M)^\mathbb{C}$ then

$$
g(JX,X) = - g(X,JX) = -g(JX,X) = 0
$$
