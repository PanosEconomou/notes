# Boson

An almost fully solved Conformal Field Theory is the free boson.  This is a repository of conventions, useful facts, and quick reference since more complicated tools in CFT are designed to emulate the ones used to study this theory.

[toc]

# Quantization

Let's start with the hello world description of a free boson. Let $\Sigma$ be a Riemann surface then a free boson $X:\Sigma \to M$ is an embedding to a 1-dimensional manifold $M$ known as the *target* space.

## Aside on the Action

We will consider two main cases of a the free boson, one is when $M = \mathbb{R}$ and the other is when $M = S^1$ which is known as the compact boson. When we have something that is other than $\mathbb{R}$, however, we have to be careful on how we define the action. For a map $X \in C^\infty(\Sigma, \mathbb{R})$ we define the action $S:C^\infty(\Sigma, M) \to \mathbb{R}$ as
$$
S(X) \coloneqq -\frac{g}{2} \int_{\Sigma} dX\wedge \ast dX
$$
> In string theory we call $g = \frac{1}{4\pi \alpha'}$ for some constant $\alpha'$.

But for the circle, this doesn't strictly make sense. Up to scaling there is a unique arclength form on circle $\omega \in \Omega^1(S^1)$ such that
$$
\int_{S^1} \omega = 2\pi R,
$$
where $R$ is the radius of the circle. Now we can take the pullback $X^\ast \omega$ and define the action as $S(X) = -\frac{g}{2}\int_\Sigma X^\ast \omega \wedge \ast X^\ast \omega$. Since the latter is clunky we will use the notation introduced above to denote the action in both cases and kinda forget about $\omega$. 

## Equations of Motion

Any Riemann surface admits complex coordinates $z, \bar z:U\subset \Sigma \to \mathbb{C}$ such that the complex structure there is given by $J = i\left( dz \otimes \frac{\partial }{\partial z} - d\bar z \otimes \frac{\partial }{\partial \bar z} \right)$ and hence the volume form is given by $\omega = \frac{i}{2}dz\wedge d\bar z$. Therefore we can see that  the equations of motion are given by
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
with the requirement that $\alpha_n^\ast = \alpha_{-n}$ in order for $X$ to remain real. We are almost ready to quantize this model. 

## Boundary Conditions

One of the things that the free boson is still useful for is as a prototypical example for generalizations in modern problems. In particular it is super useful when we think about boundary conditions, so it would be nice to try and analyze that. Let's figure that out.

A useful parameterization that comes from radial quantization is $z = e^{-iw}$, where $w = \sigma + i \tau$, where $\sigma$ is a compact spatial coordinate in $[0,l]$ for some $l>0$ usually set to $\pi$ or $2\pi$, while $\tau \in \mathbb{R}$ is the Euclidean time. Setting boundary conditions effectively amounts to setting conditions on $w$. 

For example say we can pick $z= - e^{-iw} = e^{-i\sigma +\tau}$ for $\sigma \in [0,\pi]$. We often also impose that $X$ should descend into the quotient on a circle. This means that $X$ should be a periodic function such that $X\sim X + 2\pi R$ so we can write $\theta \coloneqq \frac{X}{R}$ to be the normalized free boson. 

If we pick the boundary condition such that $\theta(\text{Re\,}z) = \alpha$ this implies that $\theta(\sigma = 0) = \theta(\sigma = \pi) = \alpha$. Let's work out its mode expansion in some convenient place. We know that it should also satisfy
$$
\partial \bar \partial \theta =0\implies \theta(z,\bar z) = \theta_L(z) + \theta_R(\bar z).
$$
Since $\partial \theta_{L}$ and $\partial \theta_R$ are analytic functions we can expand them in modes, as if $z$ was valued in the entire complex plane. This would imply that their Laurent expansion would be 
$$
\begin{align*}
\partial \theta = -i\sum_{n\in \mathbb{Z}} \theta_{n} z^{-n-1} && \bar \partial \theta = -i\sum_{n\in \mathbb{Z}} \tilde \theta_{n} \bar z^{-n-1},
\end{align*}
$$
which implies that
$$
\theta = \frac{X_{0}}{R} -i \theta_0 \log z -i \tilde \theta_0 \log \bar z + i\sum_{n\neq 0}\frac{1}{n}\left( \theta_n z^{-n} + \tilde \theta_{n} \bar z^{-n}\right)
$$
Dirichlet boundary conditions imply that
$$
0= \frac{\partial \theta}{\partial \tau} = \partial \theta \frac{\partial z}{\partial \tau} + \bar \partial \theta \frac{\partial \bar z}{\partial \tau} = z\partial \theta + \bar z \bar \partial \theta \implies \theta_n = - \tilde \theta_n \text{ for } n\neq 0.
$$
For $\theta_0$ we see that for all $\tau$
$$
\frac{X_0}{R} -i (\theta_0 + \tilde \theta_0) \tau = \alpha \implies \alpha = \frac{X_0}{R} , \ \theta_0 = - \tilde \theta_0.
$$
Therefore the solution is given by
$$
\theta = \alpha -i \theta_0 \log \frac{z}{\bar z} + \sum_{n\neq 0} \frac{\theta_n}{n}(z^{-n} - \bar z^{-n}).
$$
In addition the fact that $\theta$ is real implies that $\theta_n = \theta_{-n}^{\ast}$. Also notice that $\text{log\,}\frac{z}{\bar z} = 2i\sigma$. Putting $\sigma = \pi$ and imposing the same condition we get that $\theta_0 = 0$ since $\alpha = \alpha + 2\theta_0 \pi$. This is amazing by the way, because it seems that it might not be possible to write a consistent function on the UHP that has different boundary conditions on the lhs and rhs. But this is what is fixing it! Had we said that $\theta(\sigma = \pi) = \alpha + 2\beta$ for some $\beta \in \mathbb{R}$ we would've found $\theta_0 = \beta$.

There is something we don't see from the sphere though directly. If we are to calculate the torus partition functions 

 









