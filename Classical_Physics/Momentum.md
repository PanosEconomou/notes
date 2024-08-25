# Momentum

One of the first thing I learned in classical physics is the concept of momentum as $p=mv$. Over time I learned that this was a very small part of the story. Angular momentum, energy, magnetic moment, spin, stress, and others kept creeping up over time. While position was a relatively strightfoward concept to understand, through coordinates, momentum had so many different forms that didn’t seem to be compatible with each other.

The purpose of this is to describe a general form of momentum that when applied to different circumstances it becomes the appropriate quantity we are used to. Furthermore, we will do it in such a way that this will lend itself to the intricate way that momentum becomes messed up in quantum mechanics. 

We will use [differential geometry](../Geometry/Bundles.md) as well as [representation theory](../Geometry/Lie_Crap.md) to build up the concept of the **momentum map**. We will then play around with Noether’s theorem and give some examples.

[toc]



# Phase space

This will be done in the context of Hamiltonian mechanics. However, the only functional difference from Hamiltonian Field theory is that we allow for mathematical structures that are less rigid than smooth manifolds (like infinite dimensional manifolds, or vector bundles with with uncountably dimensional fibers). A more complete exploration of this with the structures encountered in field theory can be found [here](../Projects/CFT/Free_Fields.md#Phase_Spaces). For now we will restrict ourselves in the mechanics case. A complete version of this discussion is found in the following.

1. [An Introduction to Riemannian Geometry](https://link.springer.com/book/10.1007/978-3-319-08666-8)
2. [Quantum Theory for Mathematicians](https://link.springer.com/book/10.1007/978-1-4614-7116-5)
3. [Mathematical Methods of Classical Mechanics](https://link.springer.com/book/10.1007/978-1-4757-1693-1)

## Classical Mechanics Setting

**<u>Definition:</u>** A **phase space** is an even dimensional symplectic manifold $(P,\omega)$. Given any manifold $M$, we can define its **canonical phase space** $\pi: T^\ast M \to M$ as its cotangent bundle together with the **canonical symplectic** or **Liouville form**  $\omega = d\theta$ where $\theta \in \Omega^1(T^\ast M)$ is the **symplectic potential**, also known as the **tautological one-form** given for any $\alpha \in T^\ast M$ by
$$
\theta_\alpha \coloneqq \alpha \circ \pi_\ast.
$$
This looks super complicated so let's look at some familiar examples.

**<u>Example:</u>** *(Euclidean Phase Spaces)* Traditionally the configuration space of a particle (or a system of particles) is a point in some Euclidean space $\mathbb R^n$. The *canonical phase space* for this configuration is $T^\ast \mathbb R^n \cong \mathbb R^{2n}$, that we already know of. In particular consider some coordinate system in $\mathbb R^n$ given by $(q^1,q^2,\cdots, q^n)$ where $q^i:\mathbb R^n \to \mathbb R$ are smooth coordinate maps.

Then we know that the set of smooth vector fields $\{V_i\coloneqq\frac{\partial }{\partial q^i}\}_{i=0}^n$ forms a coordinate chart on $T^\ast M$ since at every point $q \in M$ we have that $V_{iq} : T^\ast_q M \to \mathbb R$. So we can formally define a coordinate chart for $T^\ast M$ like so:
$$
\alpha \in T^\ast M \mapsto (q^i(\alpha),p_i(\alpha)) \coloneqq(q^i\circ \pi(\alpha), V_{i\pi(\alpha)}(\alpha))
$$
where we have used some abuse of notation to define the coordinate functions $q^i:T^\ast M \to \mathbb R$ given by the pullback of the coordinates of $\mathbb R^n$by $\pi$, as well as defined the coordinate functions $p^i : T^\ast M \to \mathbb R$ given by  the standard "velocity vectors." 

> In physics, we usually pick $mV_i$ instead of $V_i$ for some positive mass $m$ and we are going to see soon why this would be a more natural choice in this setting. But nothing, so far, forbids us from using the $V_i$ basis.

Now we are ready to come up with the canonical  symplectic form of $T^\ast \mathbb R^n$. In our coordinate chart we can calculate it like so. We know that since $\theta \in \Omega^1(T^\ast M)$ it can be expressed, in our chart, as
$$
\theta = \theta_i dq^i + \theta^idp_i.
$$
where $\theta_i,\theta^i \in C^\infty(T^\ast M)$. To find these components we can use the fact that
$$
\begin{align*}
\theta\left(\frac{\partial}{\partial q^i}\right) = \theta_i && \theta\left(\frac{\partial}{\partial p_i}\right) = \theta^i.
\end{align*}
$$
Using the definition we can calculate that for any $\alpha \in T^\ast M$
$$
\begin{align*}
\theta_i(\alpha) 
&= \alpha \left(\pi_\ast\left( \frac{\partial}{\partial q^i} \right)\right)\\
&= \alpha \left( \frac{\partial}{\partial q^i} \right)\\
&= \alpha(V_i)\\
&= V_{i,\pi(\alpha)}(\alpha)\\
&= p_i(\alpha)
\end{align*}
$$
and similarly for $\theta^i$
$$
\begin{align*}
\theta^i(\alpha) 
&= \alpha \left(\pi_\ast\left( \frac{\partial}{\partial p_i} \right)\right)\\
&= \alpha \left( 0 \right)\\
&= 0.
\end{align*}
$$
As a result we can conclude that the sumplectic potential takes the form
$$
\theta = p_idq^i,
$$
implying that the Liouville is the familiar 2 form
$$
\omega = d\theta = dp_i\wedge dq^i.
$$
This is a the canonical phase space structure of any Euclidean space. We will soon talk about a much more general way to describe the canonical form of a *physical system* which could often differ from the canonical form of the configuration space.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
**<u>Example:</u>** *(The Oscillator)* To avoid introducing the horrid formalism in physics, we often describe the phase space of a pendulum as a $\mathbb R^2$ where one axis is the angle and the other is the angular momentum. This is a very nice thing to do (in fact it corresponds to the universal cover of the phase space) but we now have the tools to describe it completely.

A pendulum lives on a circle. In other words, the configuration space of a pendulum is $S^1$. We know that the tangent bundle is $T^\ast S^1 \cong S^1\times \mathbb R $ which makes sense for an intuitive point of view. In each angle the angular momentum can take any scalar value, but as the angle increases at some point it has to wrap around.

![pendulum-phase-space](_Momentum.assets/pendulum-phase-space.svg)

 Here is a picture of how it looks locally around a point.

$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

## Hamiltonian Vector Fields

The point of phase space is that given a point, I can tell you exactly how you will flow over time. But there is no time axis here, and to be honest we don't want to include it. Instead we will depict the flow directly. The way we do this geometrically is with a vector field. 

What we will develop here is a way to obtain that vector field from any Hamiltonian-like function. But since the Hamiltonian could be any function on our phase space, might as well generalize it for anything. Doing so we will get some pretty results concerning Lie brackets and so on.

**<u>Definition:</u>** For any smooth function $f \in C^\infty(P)$ on a phase space $(P,\omega)$ its **Hamiltonian vector field** $X_f \in \mathfrak X(P)$ is a vector field such that
$$
df = -\iota_{X_f}\omega,
$$
where $\iota_{X_f}$ denotes the contraction by $X_f$. Namely, for any $Y\in \mathfrak X(f)$
$$
Yf = \omega(Y,X_F).
$$
**<u>Proposition:</u>** For any $f \in C^\infty(M)$ a Hamiltonian vector field exists and is unique.

***Proof:*** Existence is guaranteed by existence of solutions of 1st order ODEs. Uniqueness is guaranteed by the nondegeneracy of $\omega$ as a symplectic form. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
**<u>Example:</u>** *(Hamiltonian vector field of the Hamiltonian)* Let $H : T^\ast \mathbb R^n \to \mathbb R$ be a Hamiltonian in the Euclidean space we defined before. Then, its Hamiltonian vector field $X_H = X^i \frac{\partial }{\partial q^i} + X_i \frac{\partial }{\partial p_i}$ can be calculated similarly to the symplectic potential $\theta$. Namely, we know that
$$
\begin{align*}
-\frac{\partial H}{\partial q^j} 
&= \omega\left(X_H,\frac{\partial}{\partial q^j} \right) \\
&= dp_i \wedge dq^i\left (X_H,\frac{\partial}{\partial q^j}\right)\\
&= (dp_i \otimes dq^i- dq^i \otimes dp_i)\left (X_H,\frac{\partial}{\partial q^j}\right)\\
&= dp_i \otimes dq^i \left (X_H,\frac{\partial}{\partial q^j}\right)\\
&= X_j
\end{align*}
$$
and similarly,
$$
\begin{align*}
-\frac{\partial H}{\partial p_j} 
&= \omega\left(X_H,\frac{\partial}{\partial p_j} \right) \\
&= dp_i \wedge dq^i\left (X_H,\frac{\partial}{\partial p_j}\right)\\
&= (dp_i \otimes dq^i- dq^i \otimes dp_i)\left (X_H,\frac{\partial}{\partial p_j}\right)\\
&= - dq^i \otimes dp_i \left (X_H,\frac{\partial}{\partial p_j}\right)\\
&= - X^j.
\end{align*}
$$
Therefore the Hamiltonian vector field of the Hamiltonian is
$$
X_H = \frac{\partial H}{\partial p_i}\frac{\partial }{\partial q^i} - \frac{\partial H}{\partial q^i} \frac{\partial}{\partial p_i}.
$$
The cool thing to notice is that the integral curves of this vector field follow Hamilton's equations of motion! Another cool thing that we notice is that the Hamiltonian vector field can be calculated by applying the following linear transformation to the gradient
$$
X_H = 1\cdot \begin{pmatrix}0&1\\-1&0\end{pmatrix} \nabla H,
$$
which is a rotation by $\pi/2$! So since the gradient of the Hamiltonian points perpendicular to the level curves, the Hamiltonian vector field is pointing parallel to them. This means that its integral curves (i.e. the physical paths in phase space) are precisely the level curves of the Hamiltonian! Which proves that the Hamiltonian is conserved. Here is an example in $\mathbb R^2$.

![Hamiltonian Plot](_Momentum.assets/hamiltonian-plot.svg)

In Grey is a 2D plot of a Hamiltonian, while in blue is a stream plot of its Hamiltonian vector field. In black is a stream plot of the gradient. We can see that the level curves of the Hamiltonian are the integral curves (streams) of its Hamiltonian vector Field. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
**<u>Proposition:</u>** *(Properties of Hamiltonian Vector Fields)* Let $f,g \in C^\infty(P)$ and $a \in \mathbb R$. Then

1. $X_{f+a g} = X_f + aX_g$
2. $X_{fg} = gX_f + fX_g$.

We will soon use these properties to show that we can convert $C^\infty(P)$ into a Lie algebra. Another super interesting and useful theorem is the famous phase space conservation theorem.

**<u>Theorem:</u>** *(Liouville's Theorem)* For any $f\in C^\infty(P)$ on some phase space $(P,\omega)$ the volume form is invariant along its Hamiltonian vector field. Namely,
$$
\mathcal L_{X_f}\omega =0, \ \ \ \forall f\in C^\infty(P).
$$
***Proof:*** In this formalism the proof is very simple. We use the following
$$
\begin{align*}
\mathcal L_{X_f}\omega 
&= \iota_{X_f}d\omega + d(\iota_{X_f}\omega)
\end{align*}
$$
The first term vanishes because $d\omega = dd\theta = 0$ and the second term vanishes because $d(\iota_{X_f} \omega) = d(-df) = 0$.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
A very useful corollary in calculation is the following

**<u>Corollary:</u>** For any two Hamiltonian vector fields $A,B$ we have that
$$
[A,B] = X_{\omega(A,B)}
$$




## Poisson Bracket

With this insight we will introduce one of the most useful constructions of Hamiltonian mechanics. The Poisson bracket. 

**<u>Definition:</u>** Given two smooth functions $f,g \in C^\infty(P)$ on some phase space $(P,\omega)$ their **Poisson bracket** $\{\cdot,\cdot\} : C^\infty(P)\times C^\infty(P) \to C^\infty(P)$ is given by
$$
\{f,g\} \coloneqq \omega(X_f,X_g) = X_fg=-X_gf.
$$
We can think of the Poisson bracket as a measure of how similar the vector fields are in some sense. For example, if the functions are the same, then by the antisymmetry of $\omega$, their Poisson bracket vanishes. But that is not the only case when they vanish. Let's examine some cases.

Since $\{f,g\} = X_fg$, the poisson measures the change of $g$ along the Hamiltonian vector field of $f$. This is naturally the opposite change of $f$ along the Hamiltonian vector field of $g$ which is verified by t the antisymmetry of the symplectic form. As a result we obtain the following familiar theorem.

**<u>Theorem:</u>** *(Hamiltonian Conservation Laws)* Given $f,g \in C^\infty(P)$ on some phase space $(P,\omega)$ iff
$$
\{f,g\} = 0
$$
then $g$ is conserved on the level curves of $f$ and vice versa.

Another very interesting theorem is the following.

**<u>Theorem:</u>** The Poisson bracket is a Lie bracket for $C^\infty(P)$ converting it into a Lie algebra over $\mathbb R$.

***Proof:*** The corollary from the previous section can be rewritten as $[X_f,X_g]=X_{\{g,f\}}$. Since we know that $[\cdot,\cdot]$ is a Lie bracket for the Hamiltonian vector fields (closure of the Lie subalgebra is guaranteed by the corollary), we can apply it directly to show
$$
\begin{align*}
0 
&= [X_f,[X_g,X_h]] + [X_h,[X_f,X_g]] + [X_g,[X_h,X_f]]\\
&= [X_f,X_{\{g,h\}}] + [X_h,X_{\{f,g\}}] + [X_g,X_{\{h,f\}}]\\
&= X_{\{f,\{g,h\}\}} + X_{\{h,\{f,g\}\}} + X_{\{g,\{h,f\}\}}\\
&= X_{\{f,\{g,h\}\}+ \{h,\{f,g\}\}+\{g,\{h,f\}\}}\\
\implies 0 &= \{f,\{g,h\}\}+ \{h,\{f,g\}\}+\{g,\{h,f\}\}.
\end{align*}
$$

$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$



















