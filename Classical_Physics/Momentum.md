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










