# Magnetic Monopoles

Let’s see how to construct magnetic monopoles using a bunch of solitonic methods in nonlinear pde. If we write Maxwell equations as
$$
\begin{align*}
d\ast F = J && dF = 0
\end{align*} 
$$
If there is no 0 on the right equation then $F$ would not be closed (in $U(1)$). This comes directly from Bianchi identity. However, if we have a nonabelian gauge theory then the Bianchi identity would add a monopole. 

[toc]

# Dirac Monopoles

Consider a solenoid with a current going through. This results in a consentrated magnetic field inside. Now consider the solenoid to be infinite in only one direction. And then take it infinitely thin. 

If that string like object is not observable, then the holonomy should vanish around any closed path that contains the string. In other words given such a path $\gamma$  the holonomy of this would be the charge
$$
e^{ie\int_\gamma A} = e^{ie\frac{g}{2}}.
$$
Therefore since the holonomy must vanish as a result the charge must be
$$
e = \frac{4\pi n}{g} \ \ \ n\in \mathbb Z.
$$
Let’s call the field solution of the solenoid $F_s = E_s \wedge dt + dA_s$ where $A_s$ is the magnetic field 2 form. We know that
$$
d B = 0
$$
and we can solve for the magnetic potential as
$$
A_s = \frac{g}{4\pi r} \left( \frac{1 - \cos\theta}{\sin\theta} \right) n,
$$
where $n$ is a one form of length 1. 



# Regular Monopoles

Consider a nonabelian group $G = SU(2)$, we will construct a Yang Mills gauge theory with a higgs term and a coupleing with this as a gauge group. We call this the Georgi Glashow Model. The lagrangian is
$$
\mathcal L = F\wedge \ast F + d\phi \wedge \ast d\phi - \frac{\lambda}{4} \left( \phi^2 - v^2 \right)^2
$$
where $v$ is a vacuum. Let’s pick the gauge 
$$
\begin{align*}
\phi^1 = \phi^2 = 0 && \phi^3 = v + \eta,
\end{align*}
$$
for some $\eta \in C^\infty(M)$. Remember that in this case the Higgs field $\phi$ is also lie algebra valued map on the base space. In the gauge where $A_0^a = 0$ $\frac{\partial A_i}{\partial t} = 0$ and $\frac{\partial \phi}{\partial t} = 0$.  

Let’s find a topological charge. What we will do is that the topological charge $Q = 0$ coresponds to the vacuum being perturbative. In order for $Q\neq 0 $ then there must some weirder vacuum. In this theory the topological current is given by 
$$
k = \frac{1}{8\pi} d\sigma \wedge d\sigma \wedge d\sigma,
$$
where $\sigma = \frac{\phi}{|\phi|}$. Therefore, $d\ast k = 0$. As a result, we can construct 
$$
Q = \int_\Sigma k_0,
$$
where $\gamma$ is a spacelike slice. Doing the calculation with a bunch of Euler angles we obtain $1$. 



## Fractionalization

We have a toy model with monopoles. In a 3+1d SU(2) gauge theory with a Higgs ($\mathfrak{su}(2)$ lie algebra valued) and a fermion field that couples with Yukawa.
$$
\mathcal{L} = \frac{1}{2} F\wedge \ast F + \frac{1}{2}D\phi \wedge \ast D\phi -V(\phi) + i\langle \psi,\centernot{D} \psi\rangle + h \langle \psi, \phi \psi\rangle.
$$
The equations of motion appear as we know them. We can find all the conserved currents

> Panos: You need to study topological solutions to PDEs in general, so that you can talk about solitons, instantons, monopoles, etc. 











