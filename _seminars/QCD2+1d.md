# Electrodynamics in 2+1d (30/10)

The lagrangian is the standard lagrangian of a U(1) Yang mills
$$
\mathcal{L} = dA\wedge \ast dA
$$
We have two conserved currents. One is a 0-form symmetry and one a 1-form symmetry
$$
j^0 = \iota^\ast F
$$
anf the 1-form is
$$
j^1=\ast F
$$
The local operators that are charged under the 1-form symmetry can be constructed by the path integral. To do this we pick a point $p\in M$ in spacetime and then pick a small ball $B_\epsilon$ centered at $p$ and force that the integral is
$$
\int_{B_\epsilon} F = 2\pi n \ \forall n \in \mathbb{N}, \epsilon > 0.
$$
We call such operators **monopole operators**. 

Phenomenologically, for U(1) Yang Mills in (2,1) we can pick a massless particle with a single polarization. However, the 0-form symmetry as we have seen in QFT III is broken. Therefore, by the sheer number og Goldstone bozons that must exist, the expectation of any monopole operator doesn’t vanish.

Here in 2+1d classically we can see that the energy of two charges a distance $L$ apart is given by
$$
E = -q_1q_2 \log(L).
$$
As a result, we can’t separate two charges by sending them to infinity. We call that confinement. 

Let’s add QED to this by creating the lagrangian
$$
\mathcal{L}'= \mathcal{L} +\ast \langle \psi,\centernot{D}\psi\rangle + \ast \langle \psi, M\psi\rangle.
$$
for some pair of chiral fermions $\psi$. We will study the phenomenology of this. If $M$ is large we can integrate out the fermions because they won’t participate in the correlation functions with high probability. If $M$ is small, then we can actually play. 

Consider the case $M = 0$. We have isospin, which is an $SU(2)$ symmetry and then we get time reversal $\mathbb{Z}_2$ and the monopole symmetry from the Bianchi identity. As a result we get the full symmetry group to be
$$
SU(2) \times \mathbb{Z}_2 \times U(1)
$$
When we want to go to small $M$ eigenvalues we have to break some of these.

For interpeting the $M=0$ case we have to try to do the following. We can pick a nonlinear sigma model with the following lagrangian.
$$
S_\sigma = \int\text{Tr\,}\partial g\partial g^{-1}\omega,
$$
where $g\in SU(2)$. 

















