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



# Boundary Conditions

One of the things that the free boson is still useful for is as a prototypical example for generalizations in modern problems. In particular it is super useful when we think about boundary conditions, so it would be nice to try and analyze that. Let's figure that out. We talked about boundaries rigorously [here](../Quantum_Fields/Boundaries.md), but really the intution for our purposes here is that a **boundary condition** is a choice of fields (i.e. A subpace $\hat F$ of some Banach space of fields $F$) together with a boundary term added to the action such that the variational problem is "well defined" in the following sense.

**<u>Definition:</u>** Given an action $S: \hat F \to \mathbb{R}$ from some Banach subspace $\hat F$ the **variational problem is well defined** if $\delta_{\eta}S(X)$ exists for all $X \in \hat F$ and $\eta \in T_{X}\hat F$. By the way we define the set of variations or the **tangent space** of a Banach subspace $\hat F$ at $X \in \hat F$ by
$$
T_X \hat F = \{ h \in \hat F \mid \exists \epsilon >0 \text{ s.t } X+th \in \hat F\ \forall |t| < \epsilon \}.
$$
By the way this has the result that $T_X F = F$ for a Banach space $F$. Anyway this helps us think about the variational problem a little bit more carefully. 

As a result, the only possible boundary conditions that we can put in there must satisfy for any variation $\eta$ 
$$
\int_{\Sigma} d(\ast \eta dX) = \int_{\partial \Sigma} \ast \eta dX,
$$
which means that in this case the only boundary conditions must satisfy $dX = 0$ when pulled on the boundary of $\Sigma$. Let's work this out carefully.

**<u>Proposition:</u>** Some conformally invariant boundary conditions for a free boson are
$$
\begin{align*}
\left.\frac{\partial X}{\partial \tau}\right|_{\partial \Sigma} = 0 && \text{or} && \left.\frac{\partial X}{\partial \sigma}\right|_{\partial \Sigma} =0,\ B = \int_{\partial \Sigma} \alpha dX.
\end{align*}
$$
for some $\alpha \in \mathbb{R}$. 

***Proof:*** Let's first consider the case where we add no boundary terms. We want to restrict our space of fields to $F$ such that $\int_{\partial \Sigma} \ast \eta dX$ vanishes for all $X \in F$ and $\eta \in T_X F$. 

Consider the map $f:  \mathbb{R}\to \mathbb{C}$ given by $x \mapsto (z,\bar z) = (x,x) $. Then we see that 
$$
\begin{align*}
f^\ast \ast dX 
&= f^\ast \left( \ast \partial X +\ast \bar \partial X \right) = -if^\ast \left(  \partial X - \bar \partial  X \right) = -i \left.\frac{\partial X}{\partial z}\right|_{\partial \Sigma} dx + i \left.\frac{\partial X}{\partial \bar z}\right|_{\partial \Sigma} dx.
\end{align*}
$$
In coordinates where $x = \pm e^{\tau}$ (depending on the values of $\sigma \in \{0,\pi\}$) we can use chain rule to get
$$
f^\ast \ast\eta dX = -ix \eta \left. \frac{\partial X}{\partial \sigma}\right|_{\partial \Sigma} dx.
$$
If we assume that $\frac{\partial X}{\partial \sigma} = 0$ on the boundary we recover the Neumann condition and we won't even need to restrict our set of fields further. Alternatively we are forced to say that we pick our set of fields such that all variations $\eta$ must vanish on the boundary. This implies that $X$ is forced to pick a fixed value on the boundary, otherwise we would be able to find variations that change the values on the boundary, which would necessarily not vanish there. These boundary condition are Dirichlet.

Now though we are interested in Boundary terms that we can add. And there are soooo increadibly many. Because once we allow nontrivial physics on the line, we can pretty much find a way to attach any physical system there. That's why we impose the Conformal boundary condition. 

In other words, any boundary term can be given by $\phi(X) \in \Omega^1(\partial \Sigma)$ to have the form
$$
B  = \int_{\partial \Sigma} \phi(X) = \int_{\Sigma} d\phi(X).
$$
While all of these preserve the equations of motion not all are conformal. For example, we want an operator that has scaling dimension $\Delta = 1$ so that the action is conformal under scalings. This means that $\phi$ is a marginal operator. In addition to that, we want it to be exactly marginal, that is under RG flow we don't go away, i.i.e. we want its $\beta$ function to vanish. But we could also find other non-local boundary terms that are still conformal, i.e. we just picked an isolated fixed point somewhere. 

Since this needs to have dimension $1$ let's consider 
$$
B = \int_{\partial \Sigma} \alpha dX,
$$
for some $\alpha \in C^\infty (\Sigma)$. Then we can see that after doing the variation we have the following boundary contributions
$$
\int_{\partial \Sigma} \eta(\ast dX - d\alpha),
$$
where we have used stokes and that the boundary has empty boundary. Now we can play the same game. Forcing $\eta$ to vanish achieves Dirichlet so whatever, but forcing the rest to vanish is equivalent to
$$
f^\ast \ast dX = f^\ast d\alpha \implies -i \left.\frac{\partial X}{\partial z}\right|_{\partial \Sigma} + i \left.\frac{\partial X}{\partial \bar z}\right|_{\partial \Sigma} = \left.\frac{\partial \alpha}{\partial z}\right|_{\partial \Sigma} + \left.\frac{\partial \alpha}{\partial \bar z}\right|_{\partial \Sigma}.
$$
which in our favorite coordinates reads
$$
\left.\frac{\partial X}{\partial \sigma}\right|_{\partial \Sigma} = \left.\frac{\partial \alpha}{\partial \tau}\right|_{\partial \Sigma}.
$$
However, there is a subtlety here. The only conformal coupling we can pick here is constant $\alpha$. This way we recover the pure Neumann boundary condition we already know and love, but with the subtlety that there is an extra phase in the Lagrangian now. We will see how this plays in a second. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
A useful parameterization that comes from radial quantization is $z = e^{-iw}$, where $w = \sigma + i \tau$, where $\sigma$ is a compact spatial coordinate in $[0,l]$ for some $l>0$ usually set to $\pi$ or $2\pi$, while $\tau \in \mathbb{R}$ is the Euclidean time. Setting boundary conditions effectively amounts to setting conditions on $w$. 

For example say we can pick $z= - e^{-iw} = e^{-i\sigma +\tau}$ for $\sigma \in [0,\pi]$. We often also impose that $X$ should descend into the quotient on a circle. This means that $X$ should be a periodic function such that $X\sim X + 2\pi R$ so we can write $\theta \coloneqq \frac{X}{R}$ to be the normalized free boson. Let's work out its mode expansion in some convenient place. We know that it should also satisfy
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
In addition the fact that $\theta$ is real implies that $\theta_n = \theta_{-n}^{\ast}$. 

## Dirichlet

Dirichlet boundary conditions (i.e. $\theta(\text{Re\,}z) = \alpha$ which implies that $\theta(\sigma = 0) = \theta(\sigma = \pi) = \alpha$) imply
$$
0= \frac{\partial \theta}{\partial \tau} = \partial \theta \frac{\partial z}{\partial \tau} + \bar \partial \theta \frac{\partial \bar z}{\partial \tau} = z\partial \theta + \bar z \bar \partial \theta \implies \theta_n = - \tilde \theta_n \text{ for } n\neq 0.
$$
For $\theta_0$ we see that for all $\tau$
$$
\frac{X_0}{R} -i (\theta_0 + \tilde \theta_0) \tau = \alpha \implies \alpha = \frac{X_0}{R} , \ \theta_0 = - \tilde \theta_0.
$$
Therefore the solution is given by
$$
\theta = \alpha -i \theta_0 \log \frac{z}{\bar z} + i\sum_{n\neq 0} \frac{\theta_n}{n}(z^{-n} - \bar z^{-n}).
$$
Also notice that $\text{log\,}\frac{z}{\bar z} = 2i\sigma$. Putting $\sigma = \pi$ and imposing the same condition we get that $\theta_0 = 0$ since $\alpha = \alpha + 2\theta_0 \pi$. This is amazing by the way, because it seems that it might not be possible to write a consistent function on the UHP that has different boundary conditions on the lhs and rhs. But this is what is fixing it! Had we said that $\theta(\sigma = \pi) = \alpha + 2\pi\beta$ for some $\beta \in \mathbb{R}$ we would've found $\theta_0 = \beta$.

There is one more thing though! We know that $\theta \sim \theta + 2\pi$, which means that $\theta(\sigma = 0) = \alpha + 2\pi n$, while $\theta(\sigma = \pi) = \alpha + 2\pi m$ for integers $n,m \in \mathbb{Z}$. Therefore the true general form of $\theta$ can have inequivalent windings such that 
$$
\theta(\sigma=0) - \theta(\sigma = \pi) = \alpha - \beta + 2\pi n,
$$
for the context here $\alpha = \beta$ but I wanted to write it explicitly ok? This effectively fixes $\theta(\sigma = \pi) = \alpha -2\pi m$, which implies $\theta_0 \in \mathbb{Z}$. The general form of the solution is given by
$$
\theta = \alpha-i n \log \frac{z}{\bar z} + i\sum_{n\neq 0} \frac{\theta_n}{n}\left( z^{-n} - \bar z^{-n} \right).
$$
So if we fix $n$ we then have a tower of oscillators that fully specify our states. Now let's do the Same thing for Neumann Boundary conditions. In 



## Neumann

Neumann conditions of CFT fame are given by saying
$$
0 = \frac{\partial \theta}{\partial \sigma} = \partial \theta \frac{\partial z}{\partial \sigma} + \bar \partial \theta \frac{\partial \bar z}{\partial \sigma} = -iz\partial \theta + i\bar z \partial \theta \implies \sum_{n \in \mathbb{Z}} \left(\tilde \theta_n x^n -\theta_n x^n  \right) = 0,
$$
where we plugged in $\sigma = 0$. This finally can only be solved by $\theta_n = \tilde \theta_n$ which implies that
$$
\theta(z,\bar z) = \frac{X_0}{R} -i\theta_0 \log z\bar z + i \sum_{n\neq 0} \frac{\theta_n}{n} \left( z^{-n} + \bar z^{-n} \right).
$$
But this naively seems that unlike Dirichlet boundary conditions we only have 1 Neumann condition. This makes little sense, because under $T$-duality we should exchange the two. The extra degree of freedom comes because we can keep adding a boundary term in this action of the form
$$
B = 2\pi g R\int_{\partial \Sigma} \alpha dX.
$$
This means that we have to be a bit more careful because the canonical commutation relations have changed in the presence of this term! Let's work them out in its absence and then in its presence. The canonical position here would be 
$$
X_0 = \int_{\tau = 0} Xd\sigma = X_0,
$$
i.e. the integration constant we introduced earlier. Meanwhile the (Lorentzian) $P_0$ is going to be
$$
P_0 = \frac{\partial L}{\partial \partial_{\tau}X_0} = g\pi R (\theta_0 + \tilde \theta_0) = 2\pi R g \theta_0.
$$
But when we add the additional term in the action we find that 
$$
P_0^{\alpha} = g\pi R \left( \theta_0 + \tilde \theta_0  + 2\alpha \right) = 2\pi R g(\theta_0 + \alpha),
$$
with some appropriate constants in front of $\alpha$ in $B$ that we won't care about because $\alpha \in \mathbb{R}$. The point is that when we include the boundary term, the Hamiltonian is shifted by $\alpha$, so in some sense, our operators $\theta_0^\alpha$ when we quantize with $B$ act in the same way as if we didn't insert it and instead acted with $\theta_0 + \alpha$. This makes a lot of since, since what we really did was to fuse a defect with the boundary associated with inserting a flat gauge field of the form $A = \alpha d\tau$ (up to constant factors). So to be precise, by $\theta_0$ we will always mean $\theta_{0}^{\alpha = 0}$ and we will add $\alpha$ explicitly when needed. Therefore we obtain that
$$
\theta(z,\bar z) = \frac{X_0}{R} - i(\theta_0 + \alpha) \log z\bar z +i\sum_{n\neq 0} \frac{\theta_n}{n} \left( z^{-n} + \bar z^{-n} \right).
$$
now if we try to quantize our Hilbert space we have a chunk first that is a free particle on a circle, with position $X_0$ and momentum $P_0^\alpha = 2\pi g R (\theta_0 + \alpha)$. In this case we see that the momentum must be quantized since the particle is on a circle of radius $R$ thus any translation by $2\pi R$ must leave the states invariant, which means that $e^{2\pi i R P_0^{\alpha}} = 1$ which implies that $P_0^{\alpha}= \frac{n}{R}$ on some states, which finally means that $\theta_0 = \frac{n - \alpha}{2\pi gR^2}$, which means that the zero modes are shifted but still quantized. There is clearly a nicer normalization in hindsight that I need to adopt, but this is it for now.













