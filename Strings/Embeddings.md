# Embeddings

Here we study how we can embed oriented 2D manifolds in some spacetime and how to use the embeddings to define a Quantum Field Theory. This is basically an invitation to working with strings. It follows these references

1.  [String Theory in a Nutshell](https://press.princeton.edu/books/hardcover/9780691155791/string-theory-in-a-nutshell?srsltid=AfmBOoqUOcEnjE8lZfXJcKY9qXOZ4Zbj7rOYkp0kqoq76U11fO4ZVY_E)
2. [Lectures on String Theory](https://www.damtp.cam.ac.uk/user/tong/string.html)
3. [Geometry Topology and Physics](http://www.stat.ucla.edu/~ywu/GTP.pdf)

[toc]

# Embedding Lines

All lines are orientable, so they serve as a great toy example for starting to think about embeddings. From a physics standpoint, what we are interested in is, often to find the line between two points in spacetime that is physical. Another way to frame that question is to find a way to score embeddings of a segment on a Riemannian (or pseudo-Riemannian) manifold. 

As a point of notation all manifolds are assumed to be pseudo-Riemannian, even Lorentzian, unless it is stated otherwise. 

## Stretching Segments

Every segment can be thought of as a Riemannian manifold with boundary. Here is a cool result.

**<u>Lemma:</u>** The most general metric $g$ for a segment $I=[0,1]$ is given by a non vanishing function $f \in C^\infty(I)$ as
$$
g = f^2 \eta
$$
where $\eta$ is the Euclidean metric on $I$.

***Proof:*** We use linearity, non-degeneracy, and positivity.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
**<u>Corollary:</u>** Any connection 1-form (einbein) $e:TI\to \mathbb{R}$ defines a metric on $I$.

***Proof:*** The metric is $g = e\otimes e \in \Gamma_{\text{Sym}}(T^\ast I\otimes T^\ast I)$.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$


Using this we can reduce, without loss of generality to strictly positive functions. What is interesting though is that while the length of such a line is
$$
\int_I \ast 1 = \int_0^1 f(t) dt,
$$
an embedding can actually stretch the line and its length will change! Often in physics we define the physical path between two points as the embedding of the segment that extremizes its length. Here is how we define this.

**<u>Definition:</u>** Given a Lorentzian manifold $(M,G)$, and an embedding $X: I \to M$ the **free length action** of $\gamma$ is given by
$$
S(X) \coloneqq \int_{I} \omega_{X^\ast G},
$$
where $\omega_g$ is the volume form on the line with respect to the metric $G$.

We see that the free length action is simply the length of the embedding, and it has somehow forgotten about the length of the original line itself.

What physicists are interested in, are extreme of the function $S: C^\infty(I,M) \to \mathbb{R}$. However, there is one problem with our current definition. In a pseudo-Riemannian manifold, we can embed the line in many different ways, including ones that have length 0. 

This is not necessarily a problem, since we know that things like photons have worldlines with 0 length. However, with this action we are completely incapable of solving for such lines since the free  length action $S$ is identically zero for any parameterization of length zero. So it is completely useless in telling us how massless particles move. 

To solve this problem we can play the following game. Instead of minimizing the length we might want to minimize this.

**<u>Definition:</u>** Given a manifold $(M,G)$ and an embedding $X:I\to M$ with an einbein $e$, the **free action** of $X$ with mass $m\in \mathbb{R}_{\geq 0}$ is given by
$$
S(\gamma,e) \coloneqq \frac{1}{2} \int_I \ast \text{tr}_{e}(X^\ast G - m^2) = \frac{1}{2} \int_I \ast (X^\ast G\left( \hat e,\hat e \right) - m^2),
$$
where $\hat e \in \Gamma(TI)$ is the vector field dual to the einbein such that $e(\hat e) = 1$, and $\text{tr}_e$ is the trace with respect to the metric $g = e\otimes e$.

At first glance this seems esoteric as hell, but by noticing $X^\ast G(\hat e,\hat e) = v^2$, the velocity of the particle, we can see that the expression is the Legendre transform of Einstein's energy $E = m^2 +p^2$. This allows us to take into account paths with zero mass more effectively.

The reason why is because we are minimizing for both the length of the line we are embedding as well as the Lagrangian. This way if the paths have no length (which is true for the case $m=0$) we can still find an extremum by changing the length of the line.

**<u>Proposition:</u>** An einbein $e$ extremizes $S$ iff
$$
G(p,p) = - m^2,
$$
where $p$ is the momentum of the path defined by $\gamma_\ast \hat e$.

This is exactly what we expect so we are in good hands. In some trivialization of $I$ with coordinate $\tau$ we can solve for $e = f d\tau$ directly by plugging things in the equation above to obtain 
$$
f(\tau) = \sqrt{-\frac{G(v,v)}{m^2}},
$$
where $v = X_\ast \frac{d}{d\tau}$ is the momentum of the path under the einbein $d\tau$ (that momentum is called the 4-velocity of the path). In the case where $m=0$ we have that the choice of einbein is irrelevant so we choose one that makes the length of $I$ to be $1$. 

**<u>Corollary:</u>** At an extremum $(X,e)$, the free action for $m\neq 0$ is
$$
S(X,e) = -m^2L,
$$
where $L$ is the length of the path given by
$$
L \coloneqq \int_I e = \int_0^1 \sqrt{-\frac{G(v,v)}{m^2}} d\tau,
$$
where $\tau$ is the identity trivialization of $I$. At the extremum for $m=0$ we have that 
$$
S(X,e) = 0.
$$
***Proof:*** Just plug in the results above.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$

## Path Integral 

Let's do some quick quantum mechanics and obtain the propagator for restricting the endpoints of the embedding. The propagator in quantum mechanics in the path integral prescription is given by
$$
G(x,y) = \langle \psi_y,\psi_x \rangle = \frac{1}{Z} \int_{\partial X = \{x,y\}} \mathcal{D}e \mathcal{D}X \exp[-iS(X,e)],
$$
where $Z$ denotes a normalization prescription. This is schematic and honestly not very useful for our purposes because as we will see $\int \mathcal{D}e\, \exp[-iS(X,e)]$ diverges so we will need some way around this.

In order to get around this is to realize the the only real effect of $e$ is to change the length of the segment, and by integrating over $\gamma$ we will effectively take all the $e$ into account. So we can define the identity trivialization $\tau$ and define $e = L \tau$ for some $L>0$. Now the path integral can be written as
$$
G(x,y) = \langle \psi_y,\psi_x \rangle = \frac{1}{Z} \int_{0}^\infty dL\int_{\partial X = \{x,y\}} \mathcal{D}\gamma \exp[-iS(X,Ld\tau)].
$$
**<u>Lemma:</u>** If $\tau:I\to [0,1]$ is the identity trivialization we have that for any $L>0$ and any embedding $X: I \to M$ 
$$
S_m(X,Ld\tau) = \frac{1}{L}S_{Lm}(X,d\tau),
$$
 where we have made the dependence on the mass $m>0$ explicit in the subscript.

Next step in our calculation is Wick rotating on $M$. This involved analytically continuing the variable with negative length of the Lorentzian manifold. Doing so, we convert the Lorentzian metric $G$ to a metric $\tilde G$ defined on a trivialization of $M$ that contains $X$ such that $\tilde G$ is Riemannian.

We now obtain a Euclidean path integral that we know how to evaluate
$$
\begin{align*}
G(x,y) = \frac{1}{Z} \int_0^\infty dL \int_{X(0) = x}^{X(1) = y} \exp\left[-\frac{1}{2L} \int_0^1 \left(\tilde G(v,v) +L^2m^2\right)d\tau\right]
\end{align*}.
$$
The mass integral is simply an exponential so we absorb it in $Z$. Doing the gruntwork for $M = \mathbb{R}^D$ we find
$$
G(x,y) = \frac{1}{2\pi}\left( \frac{m}{2\pi|x-y|} \right)^{\frac{D-2}{2}} K_{\frac{D-2}{2}}(m|x-y|).
$$
We will show the required gruntwork for embeddings of surfaces but not for lines. It is in Nakahara (Chapter 1 lol) anyway. 



# Geometry on Riemann Surfaces

Lines are easy, however 2D surfaces are hard. Yet, every time we imagine a 2D surface we imagine something orientable, well behaved, smooth, etc. Turns out what we are imagining is Riemann surfaces. So we will quickly study the geometry of Riemann surfaces and how their embeddings naturally give rise to conformal Field theories.

## Complex Structure

We have shown in the [conformal field theory notes](../Quantum_Fields/2D_CFT_Axioms.md#Conformal-Transformations) the following theorem.

**<u>Theorem:</u>** Any 2-dimensional Riemannian Manifold $(M,g)$ is conformally flat, i.e. for any $p \in M$ the metric restricted a chart $U \ni p$ is given by
$$
\left. g\right|_U =\Omega\eta,
$$
where $\Omega \in C^\infty(U,\mathbb{R}^+)$ and $\eta$ is the flat Euclidean metric on $U$.

***Proof:*** To show this we will find a set of local coordinates such that this is true. Assume a general metric given by
$$
g = g_{xx} dx^2 + 2g_{xy} dx\cdot dy + g_{yy} dy^2.
$$
Notice that if $g_{xx} = 0$ then $g_{x,y}\neq 0$ to preserve non-degeneracy, then we have $g=(2g_{xy}dx + g_{yy}dy)\cdot dy$ which is conformally flat. The remaining choices are when $g_{xx}\neq 0$. Then, we can factorize the 2nd order polynomial to obtain
$$
g = \left(\sqrt{g_{xx}} dx + \frac{g_{xy} + \sqrt{\Delta}}{\sqrt{g_{xx}}} dy  \right)\left(\sqrt{g_{xx}} dx + \frac{g_{xy} - \sqrt{\Delta}}{\sqrt{g_{xx}}} dy  \right),
$$
where $\Delta = g_{xy}^2 - g_{xx}g_{yy}$. However we know that whatever is in the parentheses is a 1-form. Therefore it must be written as $f_{\pm} du^{\pm}$, where $f_{\pm} \in C^\infty(U,\mathbb{C}^\ast)$ and $du^{\pm} \in T^\ast U^{\mathbb{C}}$are some non vanishing smooth functions on the chart. As a result, we have that
$$
g = f_{+} f_{-} du^+ \cdot du^{-}.
$$
Notice that the only complex part is in $\sqrt{\Delta}$ so that implies that $du^+ = \overline {du^-}$ and similarly $f_+ = \bar f_-$. Now we define the functions $\xi^1,\xi^2 \in C^\infty(U,\mathbb{R})$ such that
$$
du^\pm = d\xi^1 \pm id\xi^2.
$$
Then the metric can be written as 
$$
g = ||f_{+}||^2(d\xi^1 \cdot d\xi^1 + d\xi^2 \cdot d\xi^2),
$$
which is the metric written in a new chart but in conformal coordinates. These coordinates, btw, are called **isothermal.** 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
**<u>Corollary:</u>** In a Riemann surface there is always a chart $(U,z,\bar z)$ where the metric can be written as
$$
g = e^{2\sigma} dz \cdot d\bar z,
$$
for some $\sigma \in C^\infty(U)$.

***Proof:*** Pick $z = \xi^1 + i \xi^2$ and $2\sigma = \log f_{+}f_-$.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
These are super useful coordinates to play with in such surfaces.

**<u>Definition:</u>** Consider a **conformal transformation** $f : M \to M$ of a Riemann surface (i.e. $\bar \partial f =0$). Then we know that for any holomorphic tensor $T \in \Gamma(TM^{\otimes p}\otimes T^\ast M^{\otimes q})^+$ we have that
$$
f^\ast T = \left(\frac{\partial f}{\partial z}\right)^n T,
$$
then the number $n$ is the **helicity of** $T$.



## Parallel Transport

Since we always have a conformally flat metric it would be nice to play around and find the possible parallel transports we can add to the Riemann surfaces. 



# Embedding Riemann Surfaces

Cross sections of Riemann surfaces embedded in $\mathbb{R}^{k+2}$ are lines, or as we call them here, strings. So it would make sense that the spacetime picture of any "string configuration" is an embedding of an oriented 2D surface. If it is compact (which we really want to assume) then that would a Riemann surface. Let's study an action for them.

Following the lines along which we have played with before, we can define one action to be the area of the embedding which would end up being problematic to minimize in a Lorentzian manifold. That action, btw, has a name and it is called the Nambu-Goto action. So let's skip that and continue right ahead to the "energy version" of the action.

**<u>Definition:</u>** Let $(M,G)$ be a Lorentzian manifold of dimension greater than $2$, and consider an embedding $X: \Sigma \to M$ of a Riemann surface $(\Sigma,\gamma)$. Then the **Polyakov action** of the Embedding of $\Sigma$ with metric $\gamma$ is given by
$$
S(X,\gamma) = -\frac{T}{2} \int_\Sigma \ast \text{tr}_{\gamma}X^\ast G,
$$
where $T>0$ is a constant known as the **string tension**. We conventionally define the **Regge slope** as
$$
\alpha'= \frac{1}{2\pi T}.
$$
Notice that this extremely similar what we have seen before. For the line, the momentum was $v^2=  X^\ast G(e,e) = \tr_{e\otimes e} X^\ast G $. Here it is exactly the same thing but this time we have kept the vielbein implicit. This is actually a universal construction for the momentum in physics and field theory in general. So this action is nothing but the momentum squared.

Now we can also calculate the stress tensor

**<u>Proposition:</u>** The **stress tensor of the Polyakov Action** is $T_P \in \Gamma(T^\ast \Sigma\otimes T^\ast \Sigma)$ and is given by
$$
T_P = X^\ast G - \frac{1}{2} \gamma \text{tr}_\gamma X^\ast G.
$$
Notice that this definition is up to convention. In physics we usually multiply this by a real number which is $l^{-2} > 0$, the inverse string length. Also notice that $\tr_{\gamma} \gamma = 2$

To show this we need some lemmas.

**<u>Lemma:</u>** Let $A: \mathbb{R}\to \mathbb{R}$ and $\gamma_{\epsilon}:\mathbb{R} \to \Gamma (T^\ast M\otimes T^\ast M)$ a family of metrics over $\Sigma$. Then
$$
d\ast_{\gamma_{\epsilon}} A = -\frac{1}{2} \text{Tr\,} (\gamma_{\epsilon}\circ  d\gamma_{\epsilon}^{-1}) \ast_{\gamma_{\epsilon}} A + \ast_{\gamma_{\epsilon}} dA,
$$
where $\Tr$ is the Euclidean trace.

***Proof:*** This is done by calculation and using Jacobi's formula
$$
d \det X = -\det X \,\text{Tr\,}(XdX^{-1})
$$
and the fact that $\ast_{\gamma}A = \sqrt{-\det \gamma} A \omega$.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
**<u>Lemma:</u>** Let $X$ be a tensor on $\Sigma$ and $\gamma_{\epsilon}$ as before. Then 
$$
d \tr_{\gamma_{\epsilon}} X = \tr_{\gamma_{\epsilon}}\left(\gamma_{\epsilon} d\gamma_{\epsilon}^{-1} X \right).
$$
***Proof:*** This is done by realizing $\tr_{\gamma} X = \Tr \gamma^{-1}\circ X$.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
Finally, we are to calculate our stress tensor.

***Proof of Proposition:*** The stress tensor is defined by taking the variation with respect to the inverse of the metric. In other words, we go to the action and define the metric as
$$
\gamma_{\epsilon}^{-1} = \gamma^{-1} +\epsilon \eta,
$$
for some compactly supported symmetric (0,2) tensor $\eta$ and $\epsilon \in \mathbb{R}$. Then we can calculate
$$
T_P(\eta) \coloneqq \Tr T_P \eta \sim \ast_{\gamma}\left.\frac{d}{d\epsilon}\right|_0 \mathcal{L}(X,\gamma_{\epsilon}),
$$
where the $\sim$ is equivalence up to an exact tensor $(0,2)$ tensor. By using the previous two lemmas along the fact that $d\gamma_{\epsilon}^{-1} = \eta$ we have that
$$
\begin{align*}
\left.\frac{d}{d\epsilon}\right|_0 \mathcal{L}(X,\gamma_{\epsilon})
&= \ast_{\gamma} \Tr \eta \left[ X^\ast G - \frac{1}{2} \gamma \text{tr}_\gamma X^\ast G  \right].
\end{align*}
$$
As a result, we have that $T_P$ is given by the term in the bracket (since $\ast ^2_{\gamma} = 1$ from our 2D Lorentzian signature).
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$


## Symmetries of the Polyakov Action

Let's find them. Apart from reparameterization invariance (i.e. our action doesn't depend on the choice of chart) The action is invariant under the metric preserving diffeomorphisms of $(M,G)$. Let's show some useful lemmas.

**<u>Lemma:</u>** Let $f: \Sigma \to \Sigma$ be a diffeomorphism, $\gamma$ a pseudo-Riemannian metric on $\Sigma$ and $\omega_\gamma$ the corresponding volume form. Then

1. $\omega_{f^{\ast} \gamma} = f^\ast \omega_{\gamma}$
2. $\text{tr}_{f^\ast \gamma} X = \tr_{\gamma} f^{-1\ast}X$, for some tensor $X$.

***Proof:*** For the first one we know from calculus that
$$
f^\ast \omega = |\text{det\,}J_f| \omega,
$$
where $J_f$ is the Jacobian. We also know that $\omega_{\gamma} = \sqrt{|g|} \omega_{\eta}$, where $\eta$ is a flat metric. Now we see that
$$
\det f^\ast g = \det g\circ (f_\ast \otimes f_\ast) = \det g\ \det (f_\ast \otimes f_\ast) = \det g\ (\det J_f)^2.
$$
which proves the first part. For the second we have that
$$
\tr_{f^\ast \gamma} X = \tr_{\eta} (f^\ast \gamma)^{-1}\circ X = \tr_{\eta} \gamma^{-1}(f^\ast)^{-1}X = \tr_{\gamma} f^{-1\ast} X. 
$$

$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$



**<u>Proposition:</u>** The Polyakov action is invariant under metric preserving diffeomorphisms of the target space.

***Proof:*** Consider the embedding $X: \Sigma \to M$ and the metric preserving diffeomorphism $f: M \to M$ such that $f^\ast G = G$. Then we have that
$$
(f\circ X)^\ast G = X^\ast f^\ast G = X^\ast G \implies S(f\circ X,\gamma) = S(X).
$$

$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$

This is pretty nice in $M = \mathbb{R}^D$ with the Minkowski metric, where the set of metric preserving diffeomorphisms is the Poincare transformations. There are more transformations!

**<u>Proposition:</u>** The Polyakov action is invariant under diffeomorphisms $f: \Sigma \to \Sigma$, i.e.
$$
S(f^\ast X, f^{-1\ast }\gamma) = S(X,\gamma).
$$
***Proof:*** This is the physical way of writing a diffeomorphism where in pseuodo-Riemannian manifold notation this is
$$
f = f\times 1: (\Sigma,\gamma) \to (\Sigma, f^{-1\ast}\gamma).
$$
This is a way to *lift* a diffeomorphism from the category of smooth manifolds to the category of pseudo-Riemannian manifolds. I think this is called a **passive** transformation, while an **active** one is of the form $(\Sigma, \gamma) \to (\Sigma, \gamma)$. *I might be mixing them up though.* That said, what we actually want is  

Anyway, here is the proof by using the lemma at the top of this section
$$
\begin{align*}
S(f^\ast X,f^{-1\ast}\gamma) 
&= \int_{f(\Sigma)} \ast_{f^{-1\ast}\gamma} \tr_{f^{-1\ast}\gamma} \gamma^\ast X^\ast G\\
&= \int_{\Sigma} f^\ast f^{-1\ast} \ast_{\gamma} \tr_{\gamma} f^\ast f^{-1\ast} X^\ast G\\
&= \int_{\Sigma} \ast_{\gamma} \tr_{\gamma} X^\ast G\\
&= S(X,\gamma).
\end{align*}
$$

$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$



**<u>Proposition:</u>** The Polyakov action is invariant under Weyl transformations of $\Sigma$. That is given a transformation of the form $f:\Sigma \to \Sigma$ such that $f^\ast \gamma = \Omega^2 \gamma$ for some function $\Omega \in C^\infty(\Sigma, \mathbb{R}^+)$.

***Proof:*** We can calculate directly
$$
S(X,f^\ast \gamma) = \int_\Sigma \ast_{f^\ast \gamma} \text{tr}_{f^\ast \gamma} X^\ast G.
$$
Notice that $\ast_{f^\ast \gamma} = \ast_{\Omega^2 \gamma} = \Omega^2\ast_{\gamma}.$ Therefore we have that
$$
\ast_{f^\ast \gamma} \text{tr}_{f^\ast \gamma} = \ast_\gamma \text{tr}_\gamma.
$$

$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

This makes a lot of sense, because in this case the action depends on the volume of the embedding and not the volume of $\Sigma$. So scaling up $\Sigma$ with a Weyl transformation is something like a Gauge freedom kind of thing. Here is a way to sum up this result.

**<u>Theorem:</u>** The Polyakov action has $\text{Diff}(\Sigma)\ltimes \text{Weyl}(\Sigma)$ as a gauge group. 


## Further Interaction Terms

Ok but what about interaction terms? Mass term? Something! In the worldline picture the Lagrangian was 
$$
\mathcal{L}(X,\gamma) = \ast_{\gamma}\text{tr}_{\gamma} (X^\ast G - m^2),
$$
yet, here there is no $m^2$. What gives? 

**<u>Proposition:</u>** The critical points of $\mathcal{L}(X,\gamma) = \tr_{\gamma}(X^\ast G - 1)$ occur at $\gamma = 0$.

***Proof:*** Consider the modified stress tensor in this scenario. The extra term is $-\ast_{\gamma}2 $ which, using the lemmas derived above would contribute to the new stress tensor $T$ like so
$$
T = T_P + \gamma.
$$
That is interesting is that $T_P$ is Weyl invariant. In other words, we have that
$$
\Omega^2 \gamma \tr_{\Omega^2 \gamma} X^\ast G = \gamma \tr_{\gamma} X^\ast G \implies T_P(\Omega^2 \gamma) = T_P(\gamma).
$$
However since $T=0$ is an equation of motion, we find that if $(X,\gamma)$ is a critical point then for any $\Omega \in C^\infty(\Sigma, \mathbb{R}^+)$
$$
\Omega^2 \gamma = \gamma \implies \gamma = 0.
$$

$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

This is a super interesting observation. We can rephrase it to say that in the presence of a "mass term" the dynamics of the world-sheet are trivial! As a result, we will start by not considering such interaction terms.

What about other interaction terms? The other thing that we are interested in is to use the Ricci scalar curvature. 

**<u>Theorem:</u>** *(Gauss Bonnet Theorem)* In a 2-dimensional Riemannian manifold $(\Sigma,\gamma)$ of genus $g$ with Levi-Civita connection $\nabla$ and Ricci form $\hat R$ the following identity is true
$$
\int_{\Sigma} \ast \tr_{\gamma}\hat R = 4\pi \chi(\Sigma) = 8\pi (1 - g),
$$
 where $\chi(\Sigma)$ is the Euler characteristic of $\Sigma$.

With this we can introduce an interesting interaction term on the Polyakov action. 

**<u>Definition:</u>** Given a pseudo-Riemannian manifold $(M,G)$, a Riemann surface $(\Sigma,\gamma)$, and an embedding $X:\Sigma \to M$, the **interacting Polyakov action** of $(X,\gamma)$ is given by
$$
S_{I}(X,\gamma) \coloneqq \frac{T}{2}\int_{\Sigma} \ast \tr_{\gamma} \left( X^\ast G +  \frac{\lambda}{2\pi T} \hat R\right).
$$
where $T,\lambda \in \mathbb{R}^\ast$.

The interaction term there has the interesting consequence to be invariant up to homotopy. This will have very useful results in defining a path integral! In fact let's do it!



# String Quantization

We can't just go ahead and sum everything because, as we have shown above there is a massive gauge group which is $\text{Diff}(\Sigma) \ltimes \text{Weyl}(\Sigma)$. To actually proceed we will use the famous Faddeev-Popov procedure. 

**<u>Definition:</u>** Let $(\Sigma,\gamma), (\Sigma,\gamma')$ be Riemann surfaces and $(M,G)$ a Pseudo-Riemannian manifold where $X,X':\Sigma \to M$ are corresponding embeddings. Then we say that the **string configuration** $(X,\gamma)$ is **gauge equivalent** to $(X',\gamma')$ if there exist a map of Riemannian manifolds $f:(\Sigma,\gamma) \to (\Sigma,\gamma')$ where $f \in \text{Diff}(\Sigma) \ltimes \text{Weyl}(\Sigma)$ such that $f^\ast X = X'$. In other words 
$$
\begin{align*}
(X,\gamma) \sim (X',\gamma') \iff X'= f^\ast X && \gamma' = \Omega^2 f^{-1\ast} \gamma,
\end{align*}
$$
for some diffeomorphism $f:\Sigma \to \Sigma$, and $\Omega \in C^\infty(\Sigma,\mathbb{R}^+)$. The set of $\sim$ equivalence classes is called the **gauge slice**.

What we would like to do is to find a way to some over all possible combinations of string configurations after taking the quotient under gauge equivalence. To be more precise let’s follow Nakahara.

## Gauge Fixing

Let $E(\Sigma, M)\coloneqq \{X:\Sigma \to M | X \text{ embedding}\}$ be the set of all embeddings of the Riemann surface $\Sigma$ to $M$, and $\mathcal{M}(\Sigma)$ the set of all metrics that can be put on $\Sigma$. The set of all string configurations is given by $E\times \mathcal{M}$ where the arguments have been omitted. Now consider the gauge group $G = \text{Diff}(\Sigma) \ltimes \text{Weyl}(\Sigma)$ and the gauge equivalence. We want to put a measure on $E\times M / G$.

To gauge fix we could dive into the beautiful world of moduli spaces and TM spaces, but unfortunately this is saved for another day :<.

Instead we will "gauge fix" by explicitly parameterizing a gauge slice, i.e. a set of representatives of $\sim$ equivalence classes. To get a flavor let's try to do so for Riemannian manifolds that have genus 0. these are things like a cylinder, a plane, etc. At this stage we will also allow them to have boundaries.

**<u>Theorem:</u>** For any manifold $M$ along with a top form $\omega \in \Omega^{\dim M}(M)$ there is a countable collection of disjoint precompact charts $\mathcal{U}=\{(U_i,\phi_i)\}_{i\in I}$ such that $\phi_i^\ast \omega$ is continuous on $\overline{\phi_i(U_i)}$ and $\bigcup_{U\in \mathcal{U}} \overline{U} = M$.

***Proof:*** Any manifold is second countable. Therefore there is a countable open subcover for every cover. As a result, lets pick a precompact atlas such that the pullback under every chart of $\omega$ is continuous. We can always do that since $\omega$ is smooth by definition. Then take the countable open subatlas and remove the intersections. We have our partition. We can use that partition to integrate forms over our manifold.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
We have also shown that all 2-dimensional manifolds are locally conformal. Therefore we can find such a partition of our manifold where the metric appears conformal on each chart! However, in the action we will eventually have to sum over all such terms. One thing that is interesting to notice is that each of these precompact charts are globally conformal manifolds in the 2-D case. So it suffices to gauge fix for globally conformal manifolds and then generalize.

**<u>Definition:</u>** Let $(\Sigma,\gamma)$ be a globally conformal Riemann surface. Then we say that $(\Sigma,\gamma)$ is in **conformal gauge** if $\gamma = \eta$, the flat metric on $\Sigma$. Therefore the **Polyakov action in conformal gauge** for a globally conformal manifold $\Sigma$ and an embedding $X:\Sigma \to M$ where $(M,G)$ is a Pseudo-Riemannian manifold is given by
$$
S(X) = -\frac{T}{2}\int_{\Sigma} \ast \tr_{\eta}X^\ast G = T\int_{\Sigma} G_{\mu\nu}\part X^\mu \wedge \bar \partial X^\nu,
$$
where $\partial,\bar \partial$ are the Dolbeualt operators on $\Sigma$.

This is particularly nice, especially when $G$ is the flat metric on $M$. Notice that there are more gauge degrees of freedom here. In particular what we have done by setting the conformal gauge is to parameterize representatives of the equivalence classes of $E\times \mathcal{M}/\text{Weyl}(M)$ but not diffeomorphisms. We will deal with this later. For now let's explore what this really means here.

**<u>Proposition:</u>** The Polyakov stress tensor in the conformal gauge when the target space is $(\mathbb{R}^d,G)$ is given by
$$
T_c(X) = T_P(X,\eta) = X^\ast G - \frac{\eta}{2} \tr_{\eta} X^\ast G
$$
and has the properties that

1. $\tr_{\eta} T = 0$

2. $T_c = T + \bar T $ where
   $$
   T = \frac{1}{2}\langle \partial X \otimes \partial X \rangle_{G} = \frac{1}{2} G_{\mu\nu} \partial X^\mu \otimes \partial X^\nu.
   $$

Notice that these expressions only hold in $M = \mathbb{R}^n$. But they are quite fantastic! 

***Proof:*** For the first one, notice that $T_c(X) = \hat T - \frac{\eta}{\tr_{\eta} \eta}\tr_{\eta}\hat T$ where $\hat T = X^\ast G$ so taking the trace yields zero immediately. In addition notice that must be symmetric, so terms that contain $dz\otimes d\bar z$ must be zero. Then we can rearrange it to read like $2$ with direct calculation by plugging in $\eta = dz\cdot d \bar z$.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
 This stress tensor is amazing, because it is the stress tensor of a conformal field theory! This is explored in much detail in [Free Fields](../Projects/CFT/Free_Fields.md).



## Appearance of Witt Algebra

The diffeomorphism algebra that is remaining is precisely the conformal transformations. Let's explore some classical aspects of strings for two very specific embeddings. Here are their definitions.

**<u>Definition:</u>** A global conformally conformal Riemann surface $(\Sigma,\gamma)$ is a **closed string** iff it is diffeomorphic to $(I\times S^1,\eta)$ and it is an **open string** iff it is diffeomorphic to $(I\times I,\eta)$. 

***Note:*** Often we might extend our definition of closed and open strings for $I \in \{[0,1],\mathbb{R}^+,\mathbb{R}\}$.

The way to deal with open vs closed strings is to impose boundary conditions an immersion $X : I\times I \to M$. Imposing periodic boundary conditions $X$ is the lift of an embedding $I\times S^1 \to M$, while imposing Neumann boundary conditions on $X$ we have an embedding of $I\times I \to M$. Neumann boundary conditions, mean $\left.X_\ast\right|_{T\{0\}\times I} = 0$, or less formally, no inflow in time. 

With that let's try to write down and solve the equations of motion.

**<u>Proposition:</u>** The Polyakov equations of motion for open and closed strings are given by
$$
\partial \bar \partial X^\mu = 0,
$$
for an immersion $X:I\times I \to \mathbb{R}^d$ with the corresponding boundary conditions.

***Proof:*** We can obtain the equations of motion by varying the Polyakov action with respect to $X$. We have that
$$
\left.\frac{d}{d\epsilon}\right|_0 \mathcal{L}(X+\epsilon Y,\eta) = G_{\mu\nu} dX^\mu \wedge \ast dY^\nu = -Y^\nu d\ast G_{\mu\nu} dX^\mu + d(\ast G_{\mu\nu} Y ^\nu dX^\mu).
$$
Notice that if we assume $\left.Y\right|_{\partial \Sigma} = 0$ then the second term vanishes in the action because of stokes theorem. So we obtain that the equations of motion are
$$
d\ast G_{\mu\nu}dX^\mu = 0.
$$
In the case where $M$ is Minkowski space we have that this becomes $ 0 =d\ast d X^\mu = 2 \partial \bar \partial X^\mu $.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
**<u>Proposition:</u>** The general solution for the homogeneous 2-dimensional wave equation is given by 
$$
X^\mu(\tau,\sigma) = X_L^\mu(\tau-\sigma) + X_R^\mu(\tau+\sigma).
$$
This is directly a proof from PDE. However, there is a much more interesting observation.

**<u>Lemma:</u>** $\partial X^\mu$ is holomorphic and $\bar \partial X^\mu$ is antiholomorphic.

***Proof:*** $\partial \bar \partial X^\mu = \bar \partial \partial X^\mu  = 0$.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
This result means that we can expand these in Laurent modes. Namely we can write
$$
\begin{align*}
\partial X^\mu = l_s \sum_{n\in \mathbb{Z}} a_n^\mu z^n dz && \bar \partial X^\mu = l_s \sum_{n\in \mathbb{Z}} \hat a_n^\mu \bar z^n d\bar z.
\end{align*}
$$
Therefore we can write the stress tensor as
$$
T = \frac{1}{2}G_{\mu\nu}\partial X^\mu \otimes  \partial X^\nu = \frac{1}{2}\sum_{n,m \in \mathbb{Z}} G_{\mu\nu} a_n^\mu  a_m^\nu z^{n+m} dz \otimes d z.
$$
So we can define $l_{-n-2} \coloneqq \frac{1}{2}\sum_{m \in \mathbb{Z}} G(a_m,a_{n-m}) = \frac{1}{2}\sum_{m \in \mathbb{Z}} G_{\mu\nu} a_m^\mu a_{n-m}^\mu$ and rewrite the stress tensor as
$$
T = \sum_{n\in \mathbb{Z}} l_n z^{-n-2} dz\otimes dz.
$$
**<u>Proposition:</u>** The modes of $T$ form a representation of the Witt algebra. i.e.
$$
[l_n,l_m] = i(n-m)l_{n+m}.
$$
***Proof:*** This is calculated using their related vector fields.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$















