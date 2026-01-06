# Boson

An almost fully solved Conformal Field Theory is the free boson.  This is a repository of conventions, useful facts, and quick reference since more complicated tools in CFT are designed to emulate the ones used to study this theory.

[toc]

# Quantization

Let's start with the hello world description of a free boson. Let $\Sigma$ be a Riemann surface then a free boson $X:\Sigma \to M$ is an embedding to a 1-dimensional manifold $M$ known as the *target* space.

## Aside on the Action

We will consider two main cases of a the free boson, one is when $M = \mathbb{R}$ and the other is when $M = S^1$ which is known as the compact boson. When we have something that is other than $\mathbb{R}$, however, we have to be careful on how we define the action. For a map $X \in C^\infty(\Sigma, \mathbb{R})$ we define the action $S:C^\infty(\Sigma, M) \to \mathbb{R}$ as
$$
S(X) \coloneqq \frac{1}{4\pi} \int_{\Sigma} dX\wedge \ast dX.
$$
But for the circle, this doesn't strictly make sense. Up to scaling there is a unique arclength form on circle $\omega \in \Omega^1(S^1)$ such that
$$
\int_{S^1} \omega = 2\pi R,
$$
where $R$ is the radius of the circle. Now we can take the pullback $X^\ast \omega$ and define the action as $S(X) = \frac{1}{4\pi}\int_\Sigma X^\ast \omega \wedge \ast X^\ast \omega$. Since the latter is clunky we will use the notation introduced above to denote the action in both cases and kinda forget about $\omega$. 

## Covariant Quantization

Any Riemann surface admits complex coordinates $z, \bar z:U\subset \Sigma \to \mathbb{C}$ such that the complex structure there is given by $J = i\left( dz \otimes \frac{\partial }{\partial z} - d\bar z \otimes \frac{\partial }{\partial \bar z} \right)$ and hence the volume form is given by $\omega = \frac{i}{2}dz\wedge d\bar z$. In the case of the non-compact boson we can see that  the equations of motion are given by
$$
d\ast dX = 2i\partial \bar \partial X = 0.
$$
This means that $X$ admits solutions of the form $X(z,\bar z) = X_L(z) + X_R(\bar z)$. From this we see that $\partial X_L$ is a holomorphic form and $\bar \partial X_R$ is an antiholomorphic form. The better part is that we can write a mode expansion for any function on the complex plane simply by taking its Laurent series. Therefore, we would have 
$$
\begin{align*}
\partial X_L(z) = -i\sum_{n \in \mathbb{Z}}\alpha_n z^{-n-1}dz && \bar \partial X_R(\bar z) = -i\sum_{n\in \mathbb{Z}} \tilde \alpha_{n}\bar z^{-n-1} d\bar z.
\end{align*}
$$
As a result, the most general solution for $X$ has the form
$$
\begin{align*}
X_L(z) = C_L + ip\log z + i\sum_{n \in \mathbb{Z}} \frac{\alpha_n}{n}z^{-n} && X_R(z) = C_R + ip\log \bar z + i\sum_{n \in \mathbb{Z}} \frac{\tilde \alpha_n}{n}z^{-n},
\end{align*}
$$
where $C_L,C_R \in \mathbb{C}$ and $p\in \mathbb{R}$, we also conventionally call $C_L + C_R= x \in \mathbb{R}$ the zero mode, to obtain
$$
X(z,\bar z) = x + ip\log z\bar z + i\sum_{n\in \mathbb{Z}} \frac{1}{n} \left( \alpha_n z^{-n} + \tilde \alpha_n\bar z^{-n} \right),
$$
with the requirement that $\alpha_n^\ast = \alpha_{-n}$ in order for $X$ to remain real. We are now ready to quantize this model.











 









