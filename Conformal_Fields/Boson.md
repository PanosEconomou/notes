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
But this naively seems that unlike Dirichlet boundary conditions we only have 1 Neumann condition. This makes little sense, because under T-duality we should exchange the two. The extra degree of freedom comes because we can keep adding a boundary term in this action of the form
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
now if we try to quantize our Hilbert space we have a chunk first that is a free particle on a circle, with position $X_0$ and momentum $P_0^\alpha = 2\pi g R (\theta_0 + \alpha)$. In this case we see that the momentum must be quantized since the particle is on a circle of radius $R$ thus any translation by $2\pi R$ must leave the states invariant, which means that $e^{2\pi i R P_0^{\alpha}} = 1$ which implies that $P_0^{\alpha}= \frac{n}{R}$ on some states, which finally means that $\theta_0 = \frac{n}{2\pi gR^2} - \alpha$, which means that the zero modes are shifted but still quantized. There is clearly a nicer normalization in hindsight that I need to adopt, but this is it for now.



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
\theta_0 + \tilde \theta_0 + 2\alpha = \frac{m}{2\pi g R^2}, \ m\in \mathbb{Z}.
$$
Finally we can repackage them as so
$$
\begin{align*}
\theta_0 = \frac{m}{4\pi g R^2} - \frac{n}{2} - \alpha && \tilde \theta_0 = \frac{m}{4\pi g R^2} + \frac{n}{2} - \alpha,
\end{align*}
$$
remember the $-\alpha$ appears if we turn on a flat gauge field. If we want it to single valued we have $\alpha = 0$. This is fantastic! We have a way to describe the momenta of the free boson in general. Moreover we have found all the possible conformal weights, up to an integer, since $L_0 = \frac{1}{2} (P_0^\alpha)^2 + N$, where $N$ is some number operator whatever. So we also now know all the twisted Hilbert spaces here! WOOOOHHHHOOOOOOO! (Ok not all, but still we know a lot).



## Boundary Entropy

One way to think about boundary conditions is "boundary entropy." This is a measure of how complex the boundary looks like that serves the role of the c-function when we flow along marginal deformations on the same theory. We often call it the $g$-function. Intuitively we expect it to be monotonic as the entropy changes monotonically as we perform an RG transformation which by definition makes the boundary fuzzier and fuzzier.

But these are words. How do we actually calculate this thing? We want an entropy so if we have a partition function $Z_\alpha$ associated to a boundary $\alpha$ we can define the boundary entropy $S_\alpha = \log Z_\alpha$ or some normalization of this. The most natural partition function to choose from is the disk partition function with the chosen boundary. So once we have that, we define $S_\alpha = \log g_\alpha$ which represents the finite terms in $Z_\alpha$. We call that $g_\alpha$ the g-function of the boundary. There is a nice formalism in which the precise normalization becomes unambiguous, but the idea won't change. In essence, this is the inner product with the unique cft vacuum and the state that corresponds to that insertion. 

The formalism behind this is the one of ishibashi states. Let's build this up real quick. As we have found earlier, primaries in this theory have conformal weights
$$
\begin{align*}
h = 2\pi g \left( \frac{m}{4\pi g R} - \frac{nR}{2} \right)^2  && \bar h = 2\pi g \left( \frac{m}{4\pi g R} + \frac{nR}{2} \right)^2. 
\end{align*}
$$
Since we know how to use radial quantization so much, it would be nice to use it as a tool to find what the disk partition function should look like. The issue here is that the way we have been talking about the boundaries right now has the sphere oriented kinda awkwardly. One thing we could try is to do a coordinate transformation (which will simply end up being a rigid conformal map) such that we bring it into the equator like so
$$
w = \frac{(1+i)z +(1-i)}{(1-i)z + (1+i)}.
$$
In this new coordinates the boundary sits directly on the circle we have quantized and therefore should result to a state after radial quantization. For a boundary $\alpha$ we will call the corresponding boundary state $\phi_{\alpha}$. Now there are interesting things that are happening. One interesting thing is that this transformation produces no conformal anomaly since it is rigid, therefore the Schwartzian derivative (which is designed to measure how far away you are from being a Mobius transformation) vanishes. 





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

As we will see this has interesting consequences on the 



















