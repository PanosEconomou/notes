# Perturbations on Background Classical Fields

[toc]

Consider a Lagrangian of some scalar field $\phi \in C^\infty(\mathbb R^n)$. We want to write a QFT where the field is given by 
$$
\phi = \phi_{cl} + \delta \phi,
$$
where the first term is a classical field and the second is a quantum fluctuation. This is how we capture nonperturbative physics. 



## How many Quanta of Gravity in LIGO waves?

Consider the energy density of a classical gravitational wave $\epsilon \sim \frac{1}{G_N} \omega^2 A^2 $ where $\omega$ is the frequency and $A$ is some nondimensional amplitude, we can approximate the action as
$$
S(h) \sim \frac{1}{G_N}\int  (\partial h)^2,
$$
where $g = \eta + h$. Therefore we can write the energy per quantum as
$$
E_q = \hbar \omega.
$$
As a result, there must be some maximum energy
$$
\epsilon^M \sim \frac{\omega}{\lambda^3} \sim \omega^4,
$$
therefore teh minimum number of quanta is of the order
$$
N^m \sim \frac{\omega^2 A^2}{G_N\omega^4} \sim \frac{\mu_p A^2}{\omega^2} \simeq 10^{36}.
$$


## Complex Scalar Field

Consider the following lagrangian of a complex scalar field
$$
\mathcal L(\phi) = d\phi\wedge \bar \ast d\phi - m^2 \bar \phi \phi.
$$
This describes a charged particle of mass $m$ with two degrees of freedom. However, there is a simpler picture of what this lagrangian could describe that is based on the fluctuations. 

We introduce the following parameterization.
$$
\phi(x) = \frac{1}{\sqrt 2} \rho(x) e^{i\alpha(x)}.
$$
 We assume that $\rho(x)$ has nonvanishing vaccum expectation value. Plugging it in we obtain:
$$
\mathcal L(\phi) = \frac{1}{2} d\rho \wedge \ast d\rho + \frac{1}{2} \rho^2 d\alpha \wedge \ast d\alpha - \frac{1}{2} m \rho^2.
$$
The field equations are given by
$$
\begin{align*}
-\partial_\mu\partial^\mu \rho + \rho(\partial_\mu \alpha)(\partial^\mu \alpha) - m^2 \rho &= 0\\
\partial_\mu(\rho \partial^\mu \alpha) &= 0.
\end{align*}
$$
We see that a possible solution is $\rho = \rho_0 \in \mathbb R$, and $\alpha = mt$. To physically interpret consider the global symmetry action of $U(1)$. The conserved current is given by
$$
J_\mu = i(\bar \phi \partial_\mu \phi - \phi \partial_\mu \bar \phi).
$$
Substituting at the solution we see that
$$
J_0 = \rho \partial_0 \alpha = \rho_0 m.
$$
We can then calculate the corresponding charge, which is
$$
Q = \int_{V_3} J_0 = \rho_0 m V_3.
$$
We see that the itegration constant $\rho_0$ is directly proportional to the number of charged particles in whatver volume $V_3$ we are looking at. 

Now what are the **dispersion relations** of the quantum fluctuations for this system? We will say that
$$
\begin{align*}
\rho &= \rho_0 + \delta\rho(x)\\
\alpha &= mt + \delta\alpha(x),
\end{align*}
$$
and we want to find $\omega(k)$. **Calculate it.** (We can do so by plugging in the solution and solving for the fluctuations) You should get 2 excitation modes one for moving existing particles, and one that includes pair production.

Now consider adding an interaction of the form
$$
\lambda (\bar \phi \phi)^2.
$$
Then classically, only the $\rho$ equation will be by a $\lambda \rho^3$ term. With this interaction we can calculate the dispersion relation to be linear in $k$ for small $k$. What we are calculating is the dispersion relation of a **goldstone boson**! What we are calculating is dispersion relations of phonons. For small $k$ we have a Bose-Einstein condensate. 

**Look up Goldstone Theorem** and spontaneous symmetry braking. 



# Anomalies in QFT

Let’s explore anomalies in $1+1$ QED, and move on from there. 

## Classical Scwinger Model

The lagrangian is given by
$$
\mathcal L = -\frac{1}{2} F\wedge \ast F + i\langle \psi, \centernot D \psi\rangle,
$$
in $2D$. Let’s first find the dimensionality of the gauge field. This implies that the coupling constant has the dimensionality of the mass. We get this from $\centernot D = \centernot\partial - ie \centernot A$. We could immidiately make comments on renormalizability based on the dimension of the coupling constant. i.e. if we expand on power series of $e$ we get that the only thing we can write is of the form 
$$
\sim 1 + \frac{m^2}{p^2} + \left(\frac{m^2}{p^2}\right)^2 + \cdots.
$$
As a result, this **seems** like a *super-renormalizable* theory. Additionally, we can see that the degrees of freedom of our gauge field are zero. The reason being that we can get rid of two of them from gauge freedom, but there were only two to begin with. So there are no propagating degrees of freedom.

The equations of motion are 
$$
d\ast  F = \ast e J
$$
with $F_{11} = B = 0$ and $E = F_{01}$. As a result we can rewrite it as
$$
\partial_1 E = eJ_0.
$$
Now we can find the green’s function $G$ by solving 
$$
\partial_1 G = e q\delta \implies G = eq \left(\theta - \frac{1}{2}\right),
$$
where $\theta$ is the Heaviside function. The cool thing is that there is a *‘constant’* field, and no waves. We can show confinement with this. The way we do this, is that any test charge is attracted from one side, and repelled from the other. We cannot separate two particles without pumping infinite energy to the system.

What happens if we move the particle? In that case we see that the equations give
$$
\begin{align*}
\dot E &= eJ_1\\
E' &= eJ_0.
\end{align*}
$$
Calculating solution using the Green’s function in this case we have that
$$
E(x,t)= \frac{e}{2} \int dx' \tilde \theta(x-x') J_0(x',t),
$$
the imidiate equation we have is wtf happened to causality? (btw $\tilde \theta = 2\theta - 1$) The answer is that the retarded potential if of the form
$$
\theta(t)\theta(t-x),
$$
which is perfectly causal. Specifically,
$$
A_\nu (x,t) = e\int dx'dt' \theta(t-t')\theta(x'-t',-x+t) J_\nu(x',t')
$$
These are all lightcone coordinates. So as we can solve the potential is nonzero *inside* the light cone (not on the edges). 



## Quantizing Scwinger Model

To quantize we will do the classic mode expansion like so
$$
A_\mu =  \int \frac{d^2p}{\sqrt{2\omega}} (a_a^\dagger \epsilon ^a_\mu e^{ipx}  + a_b\epsilon^\ast_\mu e^{-i\bar p \bar x}),
$$
and we will use the following clifford algebra representation
$$
\begin{align*}
\gamma^0 = \begin{pmatrix}0 & -i \\ i & 0\end{pmatrix} && \gamma^1 = \begin{pmatrix}0 & i \\ i & 0\end{pmatrix}
\end{align*}
$$
With the classic anticommutation relations of the clifford algebra and we will define teh chirality element as
$$
\gamma^5 = \gamma^0 \gamma^1 = \begin{pmatrix} 1 & 0 \\ 0 & -1\end{pmatrix},
$$
and work with the structures we already know. By splitting into chiralities, i.e. saying that
$$
\psi = \binom{\psi_+}{\psi_-}
$$
we can write coordinates
$$
\begin{align*}
\partial_+ &=  \partial_0 - \partial_1\\
\partial_- &= - \partial_0 - \partial_1.
\end{align*}
$$
In these coordinates the field equations of the fermions are given by
$$
\begin{align*}
\partial_- \psi_- = 0 && \partial_+ \psi_+ = 0.
\end{align*}
$$
By the way this coordinate system is given by
$$
x_\pm  = \frac{x_0 \pm x^1}{\sqrt 2}.
$$
The projection operators of the spinors have names we can write them in fancy notation as
$$
P_\pm = \frac{1}{2} (1 \pm \gamma^5).
$$
So in other words we have
$$
\begin{align*}
\gamma^5 \psi_+ = \psi_+ &&\gamma^5 \psi_- = -\psi_-.
\end{align*}
$$
We can start writing the Feynman diagrams and calculate their solutions. In particular we want to calculate the polarization to 1 loop. The anomaly is precisely the fact that this integral is *finite*.

In particular we can sum up all the diagrams, so what is the resummed propagator? We will find that
$$
D_{\mu \nu }^{\text{Resum}} = \frac{\eta_{\mu\nu} - \frac{p_\mu p_\nu}{p^2}}{p^2 - \boxed{\frac{e^2}{\pi}} - i\varepsilon}
$$
WTF!? There is a mass? This is so cool! It seems that the photon is no longer gapless in 2D. To physically interpret this let’s think of a photon propagating in a plasma. So we can see the dispersion relation is
$$
\omega^2 = k^2 + \frac{\epsilon^2}{\pi}
$$




















