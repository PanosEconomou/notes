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

**<u>Definition:</u>** Given a Lorentzian manifold $(M,G)$, and an embedding $\gamma: I \to M$ the **free length action** of $\gamma$ is given by
$$
S(\gamma) \coloneqq \int_{I} \omega_{\gamma^\ast G},
$$
where $\omega_g$ is the volume form on the line with respect to the metric $G$.

We see that the free length action is simply the length of the embedding, and it has somehow forgotten about the length of the original line itself.

What physicists are interested in, are extreme of the function $S: C^\infty(I,M) \to \mathbb{R}$. However, there is one problem with our current definition. In a pseudo-Riemannian manifold, we can embed the line in many different ways, including ones that have length 0. 

This is not necessarily a problem, since we know that things like photons have worldlines with 0 length. However, with this action we are completely incapable of solving for such lines since the free  length action $S$ is identically zero for any parameterization of length zero. So it is completely useless in telling us how massless particles move. 

To solve this problem we can play the following game. Instead of minimizing the length we might want to minimize this.

**<u>Definition:</u>** Given a manifold $(M,G)$ and an embedding $\gamma:I\to M$ with an einbein $e$, the **free action** of $\gamma$ with mass $m\in \mathbb{R}_{\geq 0}$ is given by
$$
S(\gamma,e) \coloneqq \frac{1}{2} \int_I \ast (\gamma^\ast G\left( \hat e,\hat e \right) - m^2),
$$
where $\hat e \in \Gamma(TI)$ is the vector field dual to the einbein such that $e(\hat e) = 1$.

At first glance this seems esoteric as hell, but by noticing $G(\hat e,\hat e) = v^2$, the velocity of the particle, we can see that the expression is the Legendre transform of Einstein's energy $E = m^2 +p^2$. This allows us to take into account paths with zero mass more effectively.

The reason why is because we are minimizing for both the length of the line we are embedding as well as the Lagrangian. This way if the paths have no length (which is true for the case $m=0$) we can still find an extremum by changing the length of the line.

**<u>Proposition:</u>** An einbein $e$ extremizes $S$ iff
$$
G(p,p) = - m^2,
$$
where $p$ is the momentum of the path defined by $\gamma_\ast \hat e$.

This is exactly what we expect so we are in good hands. In some trvivialization of $I$ with coordinate $\tau$ we can solve for $e = f d\tau$ directly by plugging things in the equation above to obtain 
$$
f(\tau) = \sqrt{-\frac{G(v,v)}{m^2}},
$$
where $v = \gamma_\ast \frac{d}{d\tau}$ is the momentum of the path under the einbein $d\tau$ (that momentum is called the 4-velocity of the path). In the case where $m=0$ we have that the choice of einbein is irrelevant so we choose one that makes the length of $I$ to be $1$. 

**<u>Corollary:</u>** At an extremum $(\gamma,e)$, the free action for $m\neq 0$ is
$$
S(\gamma,e) = -m^2L,
$$
where $L$ is the length of the path given by
$$
L \coloneqq \int_I e = \int_0^1 \sqrt{-\frac{G(v,v)}{m^2}} d\tau,
$$
where $\tau$ is the identity trivialization of $I$. At the extremum for $m=0$ we have that 
$$
S(\gamma,e) = 0.
$$
***Proof:*** Just plug in the results above.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$

## Path Integral Propagator

Let's do some quick quantum mechanics and obtain the propagator for restricting the endpoints of the embedding. The propagator in quantum mechanics in the path integral prescription is given by
$$
G(x,y) = \langle \psi_y,\psi_x \rangle = \frac{1}{Z} \int_{\partial \gamma = \{x,y\}} \mathcal{D}e \mathcal{D}\gamma \exp[-iS(\gamma,e)],
$$
where $Z$ denotes a normalization prescription. This is schematic and honestly not very useful for our purposes because as we will see $\int \mathcal{D}e\, \exp[-iS(\gamma,e)]$ diverges so we will need some way around this.

In order to get around this is to realize the the only real effect of $e$ is to change the length of the segment, and by integrating over $\gamma$ we will effectively take all the $e$ into account. So we can define the identity trivialization $\tau$ and define $e = L \tau$ for some $L>0$. Now the path integral can be written as
$$
G(x,y) = \langle \psi_y,\psi_x \rangle = \frac{1}{Z} \int_{0}^\infty dL\int_{\partial \gamma = \{x,y\}} \mathcal{D}\gamma \exp[-iS(\gamma,Ld\tau)].
$$
**<u>Lemma:</u>** If $\tau:I\to [0,1]$ is the identity trivialization we have that for any $L>0$ and any embedding $\gamma: I \to M$ 
$$
S_m(\gamma,Ld\tau) = \frac{1}{L}S_{Lm}(\gamma,d\tau),
$$
 where we have made the dependence on the mass $m>0$ explicit in the subscript.

Next step in our calculation is Wick rotating on $M$. This involved analytically continuing the variable with negative length of the Lorentzian manifold. Doing so, we convert the Lorentzian metric $G$ to a metric $\tilde G$ defined on a trivialization of $M$ that contains $\gamma$ such that $\tilde G$ is Riemannian.

We now obtain a Euclidean path integral that we know how to evaluate
$$
\begin{align*}
G(x,y) = \frac{1}{Z} \int_0^\infty dL \int_{\gamma(0) = x}^{\gamma(1) = y} \exp\left[-\frac{1}{2L} \int_0^1 \left(\tilde G(v,v) +L^2m^2\right)d\tau\right]
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



