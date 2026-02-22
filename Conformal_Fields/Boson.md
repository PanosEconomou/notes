# Boson

An almost fully solved Conformal Field Theory is the free boson.  This is a repository of conventions, useful facts, and quick reference since more complicated tools in CFT are designed to emulate the ones used to study this theory.

[toc]

# Quantization

Let's start with the hello world description of a free boson. Let $\Sigma$ be a Riemann surface then a free boson $X:\Sigma \to M$ is an embedding to a 1-dimensional manifold $M$ known as the *target* space.

## Aside on the Action

We will consider two main cases of a the free boson, one is when $M = \mathbb{R}$ and the other is when $M = S^1$ which is known as the compact boson. When we have something that is other than $\mathbb{R}$, however, we have to be careful on how we define the action. For a map $X \in C^\infty(\Sigma, \mathbb{R})$ we define the action $S:C^\infty(\Sigma, M) \to \mathbb{R}$ as
$$
S(X) \coloneqq \frac{g}{2} \int_{\Sigma} dX\wedge \ast dX
$$
> In string theory we call $g = \frac{1}{2\pi \alpha'}$ for some constant $\alpha'$.

But for the circle, this doesn't strictly make sense. Up to scaling there is a unique arclength form on circle $\omega \in \Omega^1(S^1)$ such that
$$
\int_{S^1} \omega = 2\pi R,
$$
where $R$ is the radius of the circle. Now we can take the pullback $X^\ast \omega$ and define the action as $S(X) = \frac{g}{2}\int_\Sigma X^\ast \omega \wedge \ast X^\ast \omega$. Since the latter is clunky we will use the notation introduced above to denote the action in both cases and kinda forget about $\omega$. 

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
Also notice that $\text{log\,}\frac{z}{\bar z} = 2i\sigma$. Putting $\sigma = \pi$ and imposing the same condition we get that $\theta_0 = 0$ since $\alpha = \alpha + 2\pi \theta_0$. This is amazing by the way, because it seems that it might not be possible to write a consistent function on the UHP that has different boundary conditions on the lhs and rhs. But this is what is fixing it! Had we said that $\theta(\sigma = \pi) = \alpha + 2\pi\beta$ for some $\beta \in \mathbb{R}$ we would've found $\theta_0 = \beta$.

There is one more thing though! We know that $\theta \sim \theta + 2\pi$, which means that $\theta(\sigma = 0) = \alpha + 2\pi n$, while $\theta(\sigma = \pi) = \alpha + 2\pi m$ for integers $n,m \in \mathbb{Z}$. Therefore the true general form of $\theta$ can have inequivalent windings such that 
$$
\theta(\sigma=0) - \theta(\sigma = \pi) = \alpha - \beta + 2\pi n = 2\pi \theta_0,
$$
for the context here $\alpha = \beta$ but I wanted to write it explicitly ok? This effectively fixes $\theta(\sigma = \pi) = \alpha -2\pi m$, which implies $\theta_0 \in \mathbb{Z}$. The general form of the solution is given by
$$
\theta = \alpha-i n \log \frac{z}{\bar z} + i\sum_{n\neq 0} \frac{\theta_n}{n}\left( z^{-n} - \bar z^{-n} \right).
$$
So if we fix $n$ we then have a tower of oscillators that fully specify our states. Now let's do the Same thing for Neumann Boundary conditions. In particular we can ask for the conformal weights of these things. We can find them by
$$
L_0 = \frac{1}{2\pi i}\int_{S^1} T(z) z dz = -gR^2i \int_{S^1}z^{-n-m-1}{:}\theta_n\theta_m{:} =  2\pi gR^2 \theta_0^2 + 4\pi gR^2\sum_{n>0} \theta_{n}\theta_{-n}.
$$
So the conformal weights in this case are simply $2\pi gR^2 n^2$.

## Neumann

Neumann conditions of CFT fame are given by saying
$$
0 = \frac{\partial \theta}{\partial \sigma} = \partial \theta \frac{\partial z}{\partial \sigma} + \bar \partial \theta \frac{\partial \bar z}{\partial \sigma} = -iz\partial \theta + i\bar z \partial \theta \implies \sum_{n \in \mathbb{Z}} \left(\tilde \theta_n x^n -\theta_n x^n  \right) = 0,
$$
where we plugged in $\sigma = 0$. This finally can only be solved by $\theta_n = \tilde \theta_n$ which implies that
$$
\theta(z,\bar z) = \frac{X_0}{R} -i\theta_0 \log z\bar z + i \sum_{n\neq 0} \frac{\theta_n}{n} \left( z^{-n} + \bar z^{-n} \right).
$$
But this naively seems that unlike Dirichlet boundary conditions we only have 1 Neumann condition. This makes little sense, because under T-duality we should exchange the two. The extra degree of freedom comes because we can keep adding a boundary term in this action of the form
$$
B = 2\pi i g R\int_{\partial \Sigma_1} \alpha dX + 2\pi i g R\int_{\partial \Sigma_2} \beta dX.
$$
where we have used $\partial \Sigma_i$ to denote the disconnected components of the boundary. The reason for the $i$ factor is that we added it on Lorentzian signature and then Wick rotated. This means that we have to be a bit more careful because the canonical commutation relations have changed in the presence of this term! Let's work them out in its absence and then in its presence. The canonical position here would be 
$$
\Theta_0 = \frac{1}{\pi}\int_{\tau = 0} \theta d\sigma = \frac{X_0}{R},
$$
i.e. the integration constant we introduced earlier. Meanwhile the (Lorentzian) $P_0$ is going to be
$$
P_0 = \frac{\partial L}{\partial \partial_{t}\Theta_0} = -i\frac{\partial L}{\partial \partial_\tau \Theta_0} = -\pi gR^2 (\theta_0 + \tilde \theta_0) = -2 \pi gR^2 \theta_0.
$$
But when we add the additional term in the action we find that 
$$
P_0^{\alpha} = -\pi gR^2 \left( \theta_0 + \tilde \theta_0  - \alpha - \beta \right) = -2\pi gR^2(\theta_0 - \frac{\alpha}{2} -\frac{\beta}{2}),
$$
with some appropriate constants in front of $\alpha$ in $B$ that we won't care about because $\alpha \in \mathbb{R}$. The point is that when we include the boundary term, the Hamiltonian is shifted by $\alpha$, so in some sense, our operators $\theta_0^\alpha$ when we quantize with $B$ act in the same way as if we didn't insert it and instead acted with $\theta_0 + \alpha$. This makes a lot of since, since what we really did was to fuse a defect with the boundary associated with inserting a flat gauge field of the form $A = \alpha d\tau$ (up to constant factors). To really show this consider the momentum quantization condition.

If we try to quantize our Hilbert space we have a chunk first that is a free particle on a circle, with position $\Theta_0$ and momentum $P_0^\alpha = -2\pi g R^2 (\theta_0 - \frac{\alpha}{2} - \frac{\beta}{2})$. In this case we see that the momentum must be quantized since the particle is on a circle of radius $R$ thus any translation by $2\pi R$ must leave the states invariant, which means that $e^{2\pi i P_0^{\alpha}} = 1$ which implies that $P_0^{\alpha}\in \mathbb{Z}$ on some states, which finally means that $\theta_0^\alpha = \frac{n}{2\pi gR^2} +\frac{\alpha}{2} + \frac{\beta}{2}$ where $\theta_0 = \frac{n}{2\pi gR^2}$, which means that the zero modes are shifted but still quantized. Therefore we have here that 
$$
\theta(z,\bar z) = \frac{X_0}{R} - i(\theta_0 + \frac{\alpha}{2} + \frac{\beta}{2}) \log z\bar z +i\sum_{n\neq 0} \frac{\theta_n}{n} \left( z^{-n} + \bar z^{-n} \right).
$$
 A nicer way to see this is to recalculate $L_0$ In this case we have that
$$
\partial \theta = -i \sum_{n\in \mathbb{Z}} \left(\theta_n + \frac{\alpha}{2}\delta_{n0} + \frac{\beta}{2}\delta_{n0}\right)z^{-n-1} dz.
$$
Notice that this is exactly the same expression as we had but simply having a new $\theta_0$ since it is now shifted. Therefore we find that
$$
L_0 = \frac{1}{2\pi i}\int_{S^1} T(z) z dz = -gR^2i \int_{S^1}z^{-n-m-1}{:}\theta_n\theta_m{:} =  2\pi gR^2 \left(\theta_0 + \frac{\alpha}{2} + \frac{\beta}{2}\right)^2 + 4\pi gR^2\sum_{n>0} \theta_{n}\theta_{-n}.
$$
But now $\theta_0$ is not integer valued anymore! So the conformal weights are of the form
$$
h = 2\pi gR^2 \left(\frac{n}{2\pi g R^2} +\frac{\alpha}{2} + \frac{\beta}{2}\right)^2.
$$
Notice though that in our case we have two boundaries so if we have the same flux in both because the orientation is opposite we will find that $\alpha = -\beta$ so we would still be in the untwisted sector.

## No Boundary

As a quick way let's see something important for the compact Boson.  Using this expansion we find that
$$
\theta = \frac{X_{0}}{R} -i \theta_0 \log z -i \tilde \theta_0 \log \bar z + i\sum_{n\neq 0}\frac{1}{n}\left( \theta_n z^{-n} + \tilde \theta_{n} \bar z^{-n}\right)
$$
but if we impose that $\theta$ is a single valued function on the plane we have that
$$
\begin{align*}
\theta(\sigma=2\pi, \tau = 0) - \theta(\sigma=0, \tau = 0) = 2\pi n &&\implies&& - \theta_0 + \tilde \theta_0 = n \in \mathbb{Z},
\end{align*} 
$$
but also as we have seen the translation operator $e^{2\pi i R P_0^{\alpha}} = 1$ which implies that
$$
\theta_0 + \tilde \theta_0 + \alpha = \frac{m}{2\pi g R^2}, \ m\in \mathbb{Z}.
$$
Finally we can repackage them as so
$$
\begin{align*}
\theta_0 = \frac{m}{4\pi g R^2} - \frac{n}{2} - \frac{\alpha}{2} && \tilde \theta_0 = \frac{m}{4\pi g R^2} + \frac{n}{2} - \frac{\alpha}{2},
\end{align*}
$$
remember the $-\alpha$ appears if we turn on a flat gauge field. If we want it to single valued we have $\alpha = 0$. This is fantastic! We have a way to describe the momenta of the free boson in general. Moreover we have found all the possible conformal weights, up to an integer, since $L_0 = \frac{1}{2} (P_0^\alpha)^2 + N$, where $N$ is some number operator whatever. So we also now know all the twisted Hilbert spaces here! WOOOOHHHHOOOOOOO! (Ok not all, but still we know a lot).

One thing we haven't done yet is to figure out the canonical commutation of the modes of $\theta$. We can see that
$$
\langle \theta(z) \theta(w) \rangle = G(z,w),
$$
where $G(z,w)$ is the propagator obtained from the action written as
$$
S = \frac{1}{2} \int_{\Sigma^2}  \ast X(x) (g\delta(x-y) \Delta) X(y) ,
$$
the reason why this is done this way is to do saddle point on the path integral. Therefore we have that
$$
g\Delta G = \delta(z-w) \implies G(z,w) = -\frac{1}{4\pi g} \log(z-w)^2.
$$
Therefore we that
$$
\partial \theta(z) \partial \theta(w) \sim -\frac{1}{4\pi g R^2 (z-w)^2}.
$$
So finally, 
$$
[\theta_n,\theta_m] = \frac{1}{4\pi g R^2 (2\pi i)^2}\int_{S^1} \int_{S^1_{w}} \frac{z^nw^m}{(z-w)^2}dwdz = \frac{n}{4\pi g R^2} \delta_{n,-m}.
$$




## Boundary Entropy

One way to think about boundary conditions is "boundary entropy." This is a measure of how complex the boundary looks like that serves the role of the c-function when we flow along marginal deformations on the same theory. We often call it the $g$-function. Intuitively we expect it to be monotonic as the entropy changes monotonically as we perform an RG transformation which by definition makes the boundary fuzzier and fuzzier.

But these are words. How do we actually calculate this thing? We want an entropy so if we have a partition function $Z_\alpha$ associated to a boundary $\alpha$ we can define the boundary entropy $S_\alpha = \log Z_\alpha$ or some normalization of this. The most natural partition function to choose from is the disk partition function with the chosen boundary. So once we have that, we define $S_\alpha = \log g_\alpha$ which represents the finite terms in $Z_\alpha$. We call that $g_\alpha$ the g-function of the boundary. There is a nice formalism in which the precise normalization becomes unambiguous, but the idea won't change. In essence, this is the inner product with the unique cft vacuum and the state that corresponds to that insertion. 

The formalism behind this is the one of ishibashi states. Let's build this up real quick. As we have found earlier, primaries in this theory have conformal weights
$$
\begin{align*}
h = 2\pi g R^2\left( \frac{m}{4\pi g R^2} - \frac{n}{2} \right)^2  && \bar h = 2\pi g R^2 \left( \frac{m}{4\pi g R^2} + \frac{n}{2} \right)^2. 
\end{align*}
$$
Since we know how to use radial quantization so much, it would be nice to use it as a tool to find what the disk partition function should look like. The issue here is that the way we have been talking about the boundaries right now has the sphere oriented kinda awkwardly. One thing we could try is to do a coordinate transformation (which will simply end up being a rigid conformal map) such that we bring it into the equator like so
$$
w = \frac{z -i}{1 -iz}.
$$
In this new coordinates the boundary sits directly on the circle we have quantized and therefore should result to a state after radial quantization. For a boundary $\alpha$ we will call the corresponding boundary state $\phi_{\alpha}$. Now there are interesting things that are happening. One interesting thing is that this transformation produces no conformal anomaly since it is rigid, therefore the Schwartzian derivative (which is designed to measure how far away you are from being a Mobius transformation) vanishes. So the new stress tensor will be
$$
T'(w) = \left(\frac{dz}{dw}\right)^2 T(z) \approxeq L_n \frac{(iw+1)^{n+2}}{(w+i)^{n+6}}.
$$
The issue is that we can't use the Laurent expansion in the same place as $z$ because it doesn't converge in the $S^1$ we are responsible in. No matter we have an analytic expression for $T$ anyway, so we can just use it to derive a new Laurent series. There is another way to think about this business. That is using Ishibashi states.

### Ishibashi States

The main idea is that after we radially quantize we should see that for a boundary to be conformal $T(x) = \bar T(x)$ for $x\in \mathbb{R}$ which implies that on the state $\phi_\alpha$ corresponding to the boundary $\alpha$ it must be the case that
$$
\left(L_n - \bar L_{-n}\right) \phi_\alpha = 0.
$$
Now any twisted Hilbert space $H_\sigma$ for some TDL $\sigma$ (including the identity) has a decomposition into Virasoro modules (since $\sigma$ must commute with the Virasoro generators for it to be a TDL). Here we see something nice.

**<u>Proposition:</u>** The boundary state $\phi_a$ is an intertwiner of Virasoro representations.

***Proof:*** Assume that $V$ are highest weight Virasoro modules. For any $v\in V$ if $V$ is contained in $H$ we can see that $\langle v,\phi_a\rangle \in W$ where $W$ is another Virasoro module   if we use the inner product of $V$. And moreover we see that $\langle L_n v,\phi_a \rangle = \langle v, L_{-n}\phi_a \rangle = \bar L_{n} \langle v,\phi_a\rangle $, which means that it is a Virasoro equivariant map, between representations of different chiralities. In particular though, applying this for $L_0$ we see that $\phi_0$ maps a module with conformal weight $h$ to one with the same conformal weight! So it is an intertwiner.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
As a result, we have that it must be composed out of zero maps and isomorphisms of irreps. These isomorphisms are called **Ishibashi states.** In particular if $V$ is a Virasoro module such that $V\otimes \bar V$ is in the Hilbert space then there exists an anti-unitary isomorphism $U:V\to \bar V$ such that $Uv = \bar v$ where $v$ is the cyclic vector of $V$ and $\bar v$ the one of $\bar V$. We then call the ishibashi state $\psi_V$ (aka the representation of the identity map $V\to \bar V$ in the Hilbert space) the state
$$
\psi_V \coloneqq \sum_{u\in B(V)} u\otimes Uu,
$$
where $B(V)$ is an orthonormal basis of $V$. By the way this is unique up to an overall phase.

**<u>Lemma:</u>** A boundary state $\phi_a$ is given by 
$$
\phi_a = \sum_{V \in \text{Irr}H} g^V_a \psi_V,
$$
where $g_a^V \in \mathbb{C}$ and $\text{Irr}H$ is the collection of Virasoro modules $V$ that appear as $V\otimes \bar V$ in the Hilbert space $H$ (Aka the diagonal primaries). 

**<u>Corollary:</u>** The g-function $g_a = g_a^1$ for the identity module $1$.

Now we can start thinking about these Ishibashi states. By the way if we have a boundary condition that is invariant under a bigger chiral algebra (say $U(1)\times U(1)$) we can just replace every Virasoro reference there with the algebra and we can play exactly the same game. By the way the corollary above implies that $g_a = \langle v,\phi_a\rangle$.

Let's write the boundary states of our defects. 

### Boundary States

There is a conceptual shift to what we've done. We want to find a state in the bulk theory that acts as our boundary. Before when we worked this out we had a theory in a different manifold where we restricted the modes and thus found the boundary changing operators on that manifold. So if we want to impose the Dirichlet boundary condition $\alpha$ we want to find a state $\phi_\alpha$ such that for $|z|=1$
$$
\begin{align*}
\theta(z,\bar z) \phi_\alpha = \alpha \phi_\alpha \implies \left.\frac{\partial \theta}{\partial \sigma}\right|_{\tau = 0} \phi_\alpha = 0.
\end{align*}
$$
Notice that this condition looks like the Neumann one but the boundary here is along the unit circle! Ok moving on we can proceed by realizing that this implies
$$
\left(-iz\frac{\partial \theta}{\partial z} + i\bar z\frac{\partial \theta}{\partial \bar z}\right)\phi_\alpha = 0 \implies (\theta_n - \tilde \theta_{-n})\phi_\alpha = 0.
$$
for all nonzero $n$.  This is awesome because we already know how to calculate such a state. Let's quickly work out the commutation relations of $\theta_n$. Namely we have that 
$$
[\theta_n,\theta_{-n}] = \frac{n}{4\pi g R^2}.
$$
Therefore we can use this to figure out a solution. Let $H$ be the Harmonic oscillator Hilbert space for $\theta_n$ and $\bar H$ the one for $\tilde \theta_n$. We have that the creation and annihilation operators in $H\otimes \bar H$ are given by
$$
\begin{align*}
a = \sqrt{\frac{4\pi g R^2}{n}}\theta_n && \bar a = \sqrt{\frac{4\pi g R^2}{n}}\bar \theta_n.
\end{align*} 
$$
So we want to find a state such that it vanishes by $a - \bar a^\dagger$ and its conjugate. One way we could do that is by using a combination of creation and annihilation operators $f$ on the vacuum $v$ which would imply
$$
\begin{align*}
[ a - \bar a^\dagger, f] v = f \bar a^\dagger v && [ a^\dagger  - \bar a^, f] v = -f  a^\dagger v.
\end{align*}
$$
Now assume there exists a some function of creation and annihilation operators $X$ in the enveloping algebra such that $[a - \bar a^\dagger, X] = \bar a^\dagger$ as well as $[a^\dagger, X] = [\bar a^\dagger, X] = 0$. Then we can look for polynomials of the form $f(X)$ since they would have to satisfy
$$
[ a - \bar a^\dagger, f(X)] = f'(X) [ a - \bar a^\dagger, f(X)] = f'(X) \bar a^\dagger \implies f'(X) = f(X) \implies f(X) = e^{X}.
$$
(Notice the same $f(X)$ would satisfy the conjugate equation too). But does such an operator exist? We can pick $X = a^\dagger \bar a^\dagger$. Therefore our Dirichlet boundary state is given by
$$
\phi_\alpha = A\delta\left(\Theta_0-\alpha\right)\prod_{n=1}^{\infty} \exp\left[ \frac{4\pi gR^2}{n} \theta_{-n}\tilde \theta_{-n}\right]v
$$
where the first part is there because we want to fix the zero mode too (Notice that $f(-X)$ satisfies the Neumann boundary condition instead). A way we can write this is to use the commutation relations
$$
i =[\Theta_0,P_0] = g\pi R^2[\Theta_0, (\theta_0 + \tilde \theta_0)].
$$
Therefore we can write a delta function in terms of momentum eigenstates. In this case the momentum eigenstates are quantized and have the form $\psi_{m}$ such that
$$
P_0 \psi_{m} = \frac{m}{2\pi g R^2} \psi_m.
$$
As a result, we should be able to write
$$
\delta(\Theta_0 - \alpha) = \frac{1}{2\pi}\sum_{n \in \mathbb{Z}} e^{-in\alpha} e^{in\Theta_0},
$$
which will be useful in computation soon. The thing is that we haven't fixed the Neumann boundary condition. The reason is that we don't need to! For the 0 momentum flow we using $f(-X)$ fully specifies our state, and for the other ones we simply go to the twisted sector by one of the Wilson lines, therefore our modes would automatically satisfy the momentum condition. 

The issue is that we are missing an overall normalization for this. This is a bit subtle. So here we use a cool idea. We can pick an annulus. This was the really cool insight of Cardy. 



## Cardy Trick

Imagine a finite tube with two of these boundary states on either side and height $2\pi L$. The amplitude of this (aka the partition function) is given (in Euclidean signature) by
$$
Z_{\alpha \alpha}(L) =\langle \phi_\alpha,e^{-2\pi LH}\phi_\alpha\rangle.
$$
Now we should be able to map this to an annulus vial $z=e^{-iu}$ where $u = \sigma + i\tau$ the coordinates of the tube (we pick this because it maps the circle $\Im u = 0$ to the unit circle on the plane onto which we have quantized). But also map this to an upper half plane by a different trick that we will illustrate soon. The thing is, we know both what the upper half plane partition function should look like, as well as the partition function on this annulus. And since we are only doing conformal transformations the partition function should remain invariant. The point is that whatever the partition function in the upper half plane is, it will be a sum of characters, so we can use integrality to normalize this, and finally figure out what $\langle v,\phi_\alpha \rangle$ is.

> **<u>Note:</u> Why do we get a trace?** Consider the amplitude $\langle \phi, A \psi\rangle$. Then we can do the following $\sum_{n}\langle \psi,e_n \rangle \langle e_n,A\phi \rangle = \text{Tr\,}A\phi\psi^\dagger$. So we pulled out the trace, but it looks a bit different. The operator $\phi\psi^\dagger$ though is not as mysterious as we might have originally thought. In a QFT, if $A=e^{-LH}$ for some Hamiltonian, we can see that what we have effectively done is calculated the path integral over some combination of states with an appropriate choice of euclidean time. But we didn't have to pick that time. We could've picked anything! So since this is a cylinder, why don't we pick as our euclidean time $2\pi - \sigma$ which runs along the circle. Doing so we would evaluate the same path integral as a trace over a Hilbert space with a different boundary condition and a different time direction. Specifically we would find
> $$
> \text{Tr}_{\mathbb{H}} e^{-LH} \phi\psi^\dagger = \text{Tr}_{\mathbb{H}'} e^{-2\pi H'}, 
> $$
> where $H'$ is the Hamiltonian with the new time coordinate and $\mathbb{H}'$ contains the boundary conditions prescribed by $\phi, \psi$.

We will pick the map to the upper half plane such that along the height of the cylinder there is a line mapped onto (half of) the unit circle on the upper half plane. In this case the map 
$$
w = e^{\frac{\pi}{L}-\frac{u}{2L}},
$$
would do. On the Annulus (under the map $z=e^{-iu}$) the Hamiltonian vector field for our time evolution is given by
$$
X_{H} = \frac{\partial }{\partial \tau} = \frac{\partial u}{\partial \tau}\frac{\partial }{\partial u} + \frac{\partial \bar u}{\partial \tau} \frac{\partial }{\partial \bar u} = \frac{\partial }{\partial u} + \frac{\partial }{\partial \bar u},
$$
which implies that the Hamiltonian on the annulus is given by
$$
H_A = -\frac{1}{2\pi}\int_{0}^{2\pi} T_C(u) + \bar T_C(\bar u) d\sigma = \frac{1}{2\pi}\int_{0}^{2\pi} L_n e^{-inu} + \bar L_n e^{inu} - \frac{1}{12} du =  L_0 + \bar L_0 -\frac{1}{12},
$$
which we find because the stress tensor of the cylinder is given by $T_C(u) = -[z^2 T(z) - \frac{1}{24}]$ where $T = -g{:}\partial X \partial X{:}$ is the stress tensor on the plane. 

> **Notice!** In a CFT we denote the holomorphic part of the stress tensor $T(z) = -2\pi T_{zz}(z)$ in order to get charges via contour integration. 

On the other hand, on the upper half plane the stress tensor of the cylinder is given by $T_C(u) = \frac{1}{4L^2}\left[w^2T(w) - \frac{1}{24}\right]$. But now the Hamiltonian is different! The vector field for time evolution is
$$
X' = -2L\frac{\partial }{\partial \sigma} = -2L\frac{\partial w}{\partial \sigma}\frac{\partial }{\partial w} -2L \frac{\partial \bar w}{\partial \sigma} \frac{\partial }{\partial \bar w} = w\frac{\partial }{\partial w} + \bar w \frac{\partial }{\partial \bar w},
$$
which is the familiar dilation vector field which is cute. Let's now calculate whatever this new Hamiltonian in terms of the theory in the upper half plane
$$
H_{UHP}' =-\frac{1}{4L^2 (2\pi)}\int_{0}^{2\pi L} L_n e^{-\frac{i\tau}{2L} n} + L_{-n}e^{\frac{i\tau}{2L}n} - \frac{1}{12} d\tau = -\frac{1}{2L(2\pi L)} \int_{0}^{2\pi L} L_n e^{-\frac{i\tau n}{2L}} - \frac{1}{24} d\tau = -\frac{1}{2L}\left( L_0 - \frac{1}{24} \right).
$$


Now we can write our previous equations into stuff that we know! In particular we have that
$$
\langle \phi_{\alpha}, e^{-2\pi L (L_0 + \bar L_0 - \frac{1}{12})}\phi_\beta\rangle =  \langle \phi_{\alpha}, e^{-2\pi L H_A}\phi_\beta\rangle = \text{Tr}_{\mathbb{H}_{\alpha\beta}} e^{-2\pi H'_{UHP}} = \text{Tr}_{\mathbb{H}_{\alpha\beta}} e^{-\frac{\pi}{L} (L_0 -  \frac{1}{24})}.
$$
Notice that if we define a modulus $\tau = 2iL$ then we can take $q=e^{2\pi i \tau}$ and its S-transformed version $\tilde q = e^{\frac{2\pi }{i\tau}}$ and write this as
$$
\langle \phi_\alpha, q^{\frac{1}{2}(L_0 + \bar L_0 - \frac{c}{12})} \phi_{\beta}\rangle = \text{Tr}_{\mathbb{H}_{\alpha\beta}} \tilde q^{L_0 -  \frac{1}{24}},
$$
so we are one $S$ transform away from glory! In this case we know how to evaluate both of the traces with the exception that the left hand side is up to an overall constant that we will fix using this equation. 



## Dirichlet g-functions

We have everything ready so let's plug some stuff in. We know that the partition function of $\mathbb{H}_{\alpha\alpha}$ is spanned by the usual oscillator modes which will contribute an $\eta(-1/\tau)$ to the partition function, while the momenta are given by $\mathbb{Z}$. Now we need the conformal weights in this case are $2\pi g R^2 n^2$ for $n\in \mathbb{Z}$ so we have that 
$$
\text{Tr}_{\mathbb{H}_{\alpha\alpha}} \tilde q^{L_0 - \frac{c}{24}} = \frac{1}{\eta(\tilde q)} \sum_{n\in \mathbb{Z}} \tilde q^{2\pi gR^2 n^2}.
$$

where this is some Jacobi theta function. In particular we find that since 
$$
\theta_3(z\mid \tau) = \sum_{m\in \mathbb{Z}}e^{\pi i \tau n^2 + 2\pi i n z},
$$
then the trace is 
$$
\text{Tr}_{\mathbb{H}_{\alpha\alpha}} \tilde q^{L_0 - \frac{c}{24}} = \frac{1}{\eta(\tilde q)} \theta_{3}\left( \frac{4\pi gR^2}{-\tau} \right).
$$

> **<u>Note:</u>** Notice that the conformal weights we found are 4 times the chiral conformal weights of the free boson. The reason is that the boundary hilbert space is only comprised out of modes with even integer windings. We saw this when deriving everything since we imposed that the boson should be periodic at the endpoints of the boundary not after a full circle  (effectively doubling the winding).

Now its time to evaluate the inner product that we so desire. We will do it in tiny steps For notational convenience let's define
$$
D_n = \frac{4\pi gR^2}{n} \theta_{-n}\tilde \theta_{-n} \text{ and } D = \sum_{n=1}^{\infty} D_n.
$$
With the number operator $N = \sum_{m=1}^{\infty} N_m$ i.e. the one such that $[N_m,\theta_{-n}^k] = kn \theta_{-n}\delta_{nm} $ for positive $n$ we find that $[N_m,D_n] = 0$ if $n\neq m$ therefore we can see that
$$
\begin{align*}
e^{N}e^{D}v 
&= \prod_{m=1}^{\infty} e^{N_m}  \prod_{n=1}^{\infty} e^{D_n}v = \prod_{n=1}^{\infty} e^{N_n} e^{D_n}v \\
&= \prod_{n=1}^{\infty} \sum_{p=0}^{\infty}\sum_{q=0}^{\infty}\frac{1}{p!q!} N_n^q D_n^pv = \prod_{n=1}^{\infty} \sum_{p=0}^{\infty}\frac{(e^nD_n)^p}{p!} v\\
&= \prod_{n=1}^{\infty} e^{e^n D_n} v
\end{align*}
$$
So we can put these together to show
$$
\begin{align*}
\langle e^Dv,e^{-2\pi L (N+\bar N)} e^D v\rangle 
&= \langle e^Dv,\prod_{n=1}^{\infty}e^{q^{n}D_n} v\rangle\\
&= \langle v, \prod_{n=1}^{\infty}  e^{D_n^\dagger} e^{q^nD_n} v\rangle\\
&= \langle v, \prod_{n=1}^{\infty}\sum_{r=0}^{\infty}\sum_{s=0}^{\infty} \frac{q^{sn}}{r!s!} (D_n^\dagger)^r (D_n)^s v \rangle\\
&= \langle v, \prod_{n=1}^{\infty}\sum_{s=0}^{\infty} \frac{q^{sn}}{(s!)^2} (\bar a^\dagger a^\dagger)^s (a\bar a)^s v \rangle\\
&= \langle v, \prod_{n=1}^{\infty}\sum_{s=0}^{\infty} \frac{q^{sn}}{(s!)^2} s!s! v \rangle\\
&= \prod_{n=1}^{\infty}\sum_{s=0}^{\infty} q^{sn}= \prod_{n=1}^{\infty} \frac{1}{1-q^n} = q^{\frac{1}{24}} \eta(q)^{-1}.
\end{align*}
$$
Ok! We're getting there! Now we need the zero mode which can be found by evaluating the commutator $[L_0,\Theta_0]$. We know that 
$$
[\theta(\sigma, 0), \frac{\partial \theta}{\partial \tau}(\sigma',0)] = \frac{i}{gR^2} \delta(\sigma' - \sigma) \implies [\Theta_0, \theta_0 + \tilde \theta_0] = -\frac{1}{2\pi gR^2}.
$$
Assuming that $[\Theta_0, \theta_0 - \tilde \theta_0] = -$ we have that $[\Theta_0,\theta_0] = [\Theta_0,\tilde \theta_0] = -\frac{1}{4\pi g R^2}$. Now we proceed with 
$$
[L_0, \Theta_0] = [2\pi gR^2 \theta_0^2,\Theta_0] = \theta_0 \implies [\bar L_0,\Theta_0] = \tilde \theta_0.
$$
Now we calculate the zero mode to be
$$
\frac{1}{(2\pi)^2}\sum_{m,n \in \mathbb{Z}} e^{-i(n-m)\alpha} \langle e^{im\Theta_0}v,e^{-2\pi L(L_0 + \bar L_0)} e^{in\Theta_0} v\rangle.
$$
Notice that $\psi_m = e^{im\Theta_0} v$ has the property that $\theta_0 \psi_m = -\frac{im}{4\pi gR^2}\psi_m \implies L_0 \psi_m=\frac{m^2}{8\pi gR^2} \psi_m$. Also notice that since $L_0$ is Hermitian $\langle \psi_m,\psi_n \rangle = \delta_{mn}$. So we find that  the zero mode contribution is 
$$
\frac{1}{(2\pi)^2} \sum_{m,n \in \mathbb{Z}} q^{\frac{m^2}{8\pi gR^2}} e^{-i(n-m) \alpha} \delta_{nm} = \frac{1}{(2\pi)^2} \sum_{m\in \mathbb{Z}} q^{\frac{m^2}{8\pi gR^2}},
$$
where this is some Jacobi theta function. In particular we find that 
$$
\theta_3(z\mid \tau) = \sum_{m\in \mathbb{Z}}e^{\pi i \tau n^2 + 2\pi i n z}.
$$
So in this case the zero mode contribution looks like
$$
\frac{1}{4\pi^2} \theta_3 \left(0; \frac{\tau }{4\pi gR^2}  \right).
$$
Putting everything together we have that
$$
\langle \phi_\alpha, q^{\frac{1}{2}(L_0 + \bar L_0 - \frac{1}{12}) }\phi_\alpha\rangle = \frac{A^2}{4\pi^2  \eta(q)} \theta_3\left( \frac{\tau }{4\pi gR^2} \right) = \frac{1}{\eta(\tilde q)} \theta_{3}\left( \frac{4\pi gR^2}{-\tau} \right) = \text{Tr}_{\mathbb{H}_{\alpha\alpha}} \tilde q^{L_0 - \frac{c}{24}}.
$$
But we also know that $\theta_{3}(-\frac{1}{\tau}) = \sqrt{-i\tau} \theta_3(\tau)$ so we can find that 
$$
\frac{A^2}{4\pi^2 \eta(q)} \sqrt{\frac{4\pi gR^2}{-i\tau}} \theta_3\left(\frac{4\pi gR^2}{-\tau}\right) = \frac{1}{\sqrt{-i\tau}\eta(q)} \theta_{3}\left( \frac{4\pi gR^2}{-\tau} \right)
$$
And therefore we see that
$$
A = \frac{2\pi}{(4\pi g R^2)^{\frac{1}{4}}}.
$$
So now we are ready to find our $g$-function by simply calculating
$$
g_\alpha = \langle v,\phi_\alpha \rangle = A\langle v, \delta(\Theta_0 - \alpha) v\rangle = \frac{A}{2\pi} \sum_{n\in \mathbb{Z}} e^{-in\alpha} \langle v, e^{in\Theta_0} v\rangle = \frac{A}{2\pi} = (4\pi g R^2)^{-\frac{1}{4}}.
$$
AAAAAAAAAA! Ok cool. What is super interesting now, is that there is a special radius where $g_\alpha = 1$. In this case these Dirichlet defects have the chance to be topological defects in the unfolded theory (if it exists).



## Neumann g-functions

Now that we have the Dirichlet g-functions we don't actually have to change things that much for the Neumann case. In the upper half plane we have already found that the conformal weights are simply shifted by $\alpha$ due to the topological Wilson line that we have inserted. In particular the conformal weights are $h = \frac{n^2}{2\pi gR^2}$ for $n\in \mathbb{Z}$.  So we have that
$$
\text{Tr}_{\mathbb{H}_{\alpha\alpha}} \tilde q^{L_0 - \frac{c}{24}} = \frac{1}{\eta(\tilde q)} \sum_{n\in \mathbb{Z}} \tilde q^{\frac{n^2}{2\pi g R^2}} = \frac{1}{\eta(\tilde q)}\theta_3\left( -\frac{1}{\pi g R^2 \tau} \right).
$$
> **<u>Note:</u>** Notice that the conformal weights we found here is also 4 times the chiral conformal weights of the free boson. The reason is the same. One way to get some intuition is to think of the free boson as a string. Putting a boundary condition is like fixing the endpoint (we will see later how Neumann is also fixing the endpoint of a "dual string"). If you fix the endpoint the string should 

The next ingredient on our list is the boundary state. The modes were derived above, therefore we have that the state should be given by
$$
\psi_\alpha = e^{-D} v = B\prod_{n=1}^{\infty}\exp\left[- \frac{4\pi gR^2}{n} \theta_{-n}\tilde \theta_{-n}\right] v,
$$
for some normalization constant $B$. However, one might ask, HEY! What happened with the zero mode? And you'd be right. In fact there is no way to have a state in the untwisted Hilbert space that has momentum other than $0$. In particular the Neumann boundary condition reads:
$$
\left. \frac{\partial \theta}{\partial \tau}\right|_{\tau=0} = 0,
$$
this is automatically satisfied by the state $\psi_\alpha$. We must be missing something. What we are missing is that there may be many field configurations that have this property. Let's examine the boundary term in this case. Plugging in $\theta$ we find that if the boundary is placed on $\tau=0$ then
$$
2\pi i g R^2 \alpha \int_{S^1} \left.\frac{\partial \theta}{\partial \sigma}\right|_{\tau=0} d\sigma = -4\pi^2 i g R^2 \alpha (\theta_0 - \tilde \theta_0) = 4\pi^2 i g R^2 \alpha w.
$$
So all this boundary term does if we place the boundary at a circle is to weight states by their winding number in the path integral. So we can build the Boundary state directly using the path integral with the boundary term inserted. Namely we will find that the "empty" state can be given as a sum of winding ground states. Namely for some boundary configuration $\hat \theta : \partial \Sigma \to S^1$ we have that the state $v$ (aka the zero mode) is given by 
$$
v(\hat\theta) = \sum_{w\in \mathbb{Z}}e^{4\pi^2 i g R^2 \alpha w}\int_{\theta_w |_{\partial \Sigma} = \hat \theta} \mathcal{D}\theta_w e^{-S(\theta_w)} = \sum_{w\in \mathbb{Z}}e^{4\pi^2 i g R^2 \alpha w} v_w,
$$
where $\theta_w$ is a field configuration with winding $w$ and $v_w$ is the lowest energy state with winding $w$, i.e. $-(\theta_0 -\tilde \theta_0)v_w = wv_w$.  

Doing so fixes the rest of our problems. So let's calculate the inner product between the states in the annulus. However the oscillator part will remain identical since we really didn't change anything. 
$$
\langle \psi_\alpha,q^{\frac{1}{2}\left( L_0 + \bar L_0 -\frac{1}{12} \right)} \psi_\alpha\rangle= \frac{B^2}{\eta(\tau)} \sum_{w,l\in \mathbb{Z}} \langle v_l ,q^{4\pi^2 i g R^2 \alpha(w-l) + \frac{\pi g R^2}{2} w^2 }v_w\rangle = \frac{B^2}{\eta(\tau)} \sum_{w\in \mathbb{Z}} q^{\frac{\pi g R^2 w^2}{2}}.
$$
As a result by equating both sides we find that
$$
\frac{B^2}{\eta(\tau)} \theta_3\left(  \pi gR^2 \tau\right) = \frac{1}{\eta(\tilde q)} \theta_3\left( -\frac{1}{\pi g R^2 \tau} \right) = \frac{\sqrt{-i\tau \pi gR^2}}{\sqrt{-i\tau}\eta(q)} \theta_3(\pi g R^2 \tau)  \implies B = (\pi g R^2)^{\frac{1}{4}}
$$

So we can now solve for the Neumann g-functions by 
$$
g_{\alpha} = \langle v_0,\psi_\alpha \rangle = (\pi gR^2)^{\frac{1}{4}}.
$$
YES! We are done! Notice that in the normalization where the Dirichlet defects have g-function 1, i.e. at $4\pi gR^2 = 1$ these ones have $\frac{1}{\sqrt{2}}$. 









# Interesting $\mathbb{Z}_2$'s

One thing we could have noticed above is that if the free Boson is diagonal with respect to the $\mathfrak{u}(1)$ chiral algebra. Let's derive the conformal weights carefully. The stress tensor is defined by
$$
T(z) = \sum_{n\in \mathbb{Z}} L_n z^{n-2} = -2\pi g {:}\partial X \partial X{:} (z).
$$
To extract $L_0$ we need to carry out
$$
L_0 = gi \int_{S^1} {:}\partial X \partial X{:} = 2\pi g R^2\, \theta_0 ^2 + N,
$$
where $N$ counts integer oscillator excitations as we have seen in the past. Therefore in the theory with no boundary, the conformal weights are given by
$$
\begin{align*}
h = 2\pi g \left( \frac{m}{4\pi g R} - \frac{nR}{2} \right)^2  && \bar h = 2\pi g \left( \frac{m}{4\pi g R} + \frac{nR}{2} \right)^2. 
\end{align*}
$$
We can now safely work out the partition function because each representation we have available here is the same. One thing that we see is that the total scaling dimension for a primary is given by
$$
\Delta_{m,n} = h + \bar h =\frac{m^2}{8\pi g R^2} + \frac{\pi gR^2}{2}  n^2.
$$
So they are all positive and exist in a pretty lattice. But there is something more happening here. We can interpret $n,m$ as magnetic and electric charges! The way we can see this clearly is to find out what we mean by electric and magnetic in this context first.

Notice that the free compact Boson has natural $U(1)$ action that shifts the origin of the circle we are embedding. Let's find its symmetry currents. The variations under such a translation are of the form $X + \epsilon$ for some constant $\epsilon$. Let's do it
$$
\frac{g}{2}\left.\frac{d}{d\epsilon}\right|_0\int_{\Sigma} d (X + \epsilon)\wedge \ast d(X+\epsilon) = EOM +g \int_{\partial \Sigma} \ast dX \implies J = \ast gdX = -ig (\partial X - \bar \partial X).
$$
Ok! We can calculate the electric charge for this current to be
$$
Q_e = \int_{\tau = 0} J = -gR \sum_{n\in \mathbb{Z}}\int_{S^1} \theta_n z^{-n-1}dz - \tilde \theta_n \bar z^{-n-1} d\bar z = 2\pi igR (\theta_0 + \tilde \theta_0) = \frac{m i}{R},
$$
One might freak out that the electric charge is not unitary, but remember that this is all done in Euclidean signature, if we wick rotate we would find $Q^{real}_e = iQ_e = m/R$ as expected. Similarly we can calculate the magnetic charge from the current $J_m=\ast J$ to be
$$
Q_m = \int_{\tau = 0} \ast J = -g\int_{S^1} dX = -2\pi g R n.
$$
Same thing here, but since $Q_m^{real} = -Q_m = 2\pi gRn$ we are still good! But yey, we have a symmetry over there. 



## T-Duality

The reason for doing all this business is to motivate $T$ duality which is the electric-magnetic exchange symmetry of the free boson. In other words what if we define a field $\tilde X$ such that $\tilde J_m^{real} = J_e^{real}$, where the real current is the one in Lorentzian signature. Anyway we are in 2D and we can definitely do this since both are one forms. Turns out this is amazingly awesome because of what $\tilde X$ implies.
$$
\tilde J_m^{real} = -\tilde J_m = g \partial \tilde X +g \bar \partial \tilde X = g \partial X - g \bar \partial X = iJ_{e} = J^{real}_{e} \implies \begin{cases}
\partial \tilde X = \partial X = \ast i\partial X\\
\bar \partial \tilde X = -\bar \partial X = \ast i\bar \partial X.
\end{cases}
$$
 Now all we really know is this relation. But we can see that this field will have magnetic charge $\frac{m}{R}$ and electric charge $2\pi g R n $ for integers $n,m$. The incredible realization is that this is simply the original free boson at radius
$$
\tilde R = \frac{1}{2\pi g R}.
$$
The reason we can say it so casually is that the whole Hilbert space is defined by the representation of this affine $\mathfrak{u}(1)$, and under this exchange I just told you which representation to pick, there are no more free parameters. One interesting thing is that there is a self dual radius such that
$$
R^\ast = \frac{1}{2\pi g R^\ast} \implies R^\ast = \frac{1}{\sqrt{2\pi g}} = \sqrt{\alpha'}.
$$
There are mostly two string theory normalization conventions. One is $R^\ast = \frac{1}{\sqrt 2}$ and the other is $R^\ast = \sqrt{2}$. It doesn't matter which one we pick, but think $g=1/\pi$ is particularly nice. The reason this might be interesting is because we can perform T-Duality while we have a boundary. In that case we will see that the boundary goes from Neumann to Dirichlet and vice versa. In fact it is quite straightforward to see. 

If we explore $T$-duality we can write the new field further. In particular since $\partial \tilde X = \partial X \implies \frac{\partial \tilde X_L}{\partial z} dz = \frac{\partial X_L}{\partial z} dz \implies \tilde X_L = X_L$ and similarly $\tilde X_R = - X_R$. In terms of the normalized field $\theta$ we have that
$$
\tilde \theta = \tilde \theta_L + \tilde \theta_R = \frac{\tilde X_L}{\tilde R} + \frac{\tilde X_R}{\tilde R} =2\pi g R \left( X_L - X_R \right) = 2\pi g R^2 (\theta_L - \theta_R) = 2 R (X_L - X_R),
$$
where in the last step we used a nice normalization $g = \pi ^{-1}$. Anyway, the point here really is that the field $\tilde \theta$ is a perfectly good field we can write down in the Boson with radius $R$. In fact it is linearly independent from field $\theta$ and enjoys its own symmetry action. In some sense since we can rotate the left and right chiral parts independently by $U(1)$, i.e. shift the circle by a phase, then we can think that we have one $U(1)$ associated with $\theta$ and one with $\tilde \theta$ (even though our mode description might suggest otherwise). The real thing is that we have found that the free boson has a symmetry $U(1)\times U(1)$. 

One last thing, is that we can write $T$-duality in this description as $\theta \mapsto \tilde \theta, \tilde \theta \mapsto \theta$, which automatically takes care of the radius thing. 



## Charge Conjugation

We saw that the charges under the currents $J_e$ and $J_m$ are practically integers. So doing a transformation $J_e' = -J_e$ also won't change  anything. What that would imply is that $X \mapsto -X$ under this symmetry action. This is a $\mathbb{Z}_2$ action called charge conjugation that has other super interesting consequences. First of all we have found a symmetry of the form $(U(1)\times U(1))\rtimes \mathbb{Z}_2$.

One pretty nifty thing is that we can gauge this one. Before we do so though let's examine what it means intuitively. On the circle flipping the sign of the phase means that we traverse it in the opposite orientation. So charge conjugation is orientation reversal of the map that places $\Sigma$ onto $S^1$. This is far more intuitive. At its core, means that when gauging this we are considering maps that are invariant under flipping the orientation which may include ones that were not oriented to begin with.

There is a string intuition here which is that charge conjugation flips the orientation. It is also not surprising, what we are flipping is in fact, the electric (and magnetic) charge which corresponds to the transformation that rotates us on the circle, so if we flip its sign we will rotate the other way. 

Also we have an interesting conjugation matrix that simply flips $(n,m)\mapsto (-n,-m)$. Since all the numbers appear square I'd be curious to see if you can write down a modular invariant for the free boson such that this charge conjugation thing flips only part of that. That probably is not an automorphism of the algebra.







