# Free Fermion Topological Insulators

[toc]

## Examples

Chern Insulators, Integer Quantum Hall Effect, etch.

# Idea

We are working on systems with a complicated Hamiltonian that express a robust phenomenon that we can essentially derive the dynamics based strictly on topology. When we are looking for symmetries we are looking for things that are really difficult to remove, as an example:

1. Time reversal symmetry (T)
2. Particle-Hole, Charge Conjugation (C)
3. Sublattice Symmetry, Chiral (S)

Let's define them more precisely. Namely notice that $T,C$ are anti-unitary symmetries, and $S$ is unitary symmetry. Specifically, 

**<u>Definition:</u>** 

**<u>Defnition:</u>** **Time reversal** for a unitary operator $U : \mathcal{H} \to \mathcal{H}$ is the antilinear map $\bar U$ such that $\bar U^\dagger H \bar U = H$. **Chiral symmetry** is such that $\bar U H \bar U = -H$, and **Sublattice** is $UHU = -H$.

Important properties of these are that $T^2 = U\bar U = \pm 1$ and so on. 

## SSH Model

We will use it as a motivating example for topological quantum systems. We will do this in a second quantized form first.

**<u>Definition:</u>** An **SSH-Model** has Hamiltonian
$$
H = \sum_{i \in \mathbb{I}} \left[ (t+\delta t) c_{Ai}^{\dagger} c_{Bi} + (t-\delta t)c_{A,i+1}^{\dagger}c_{Bi} + \text{h.c.}\right]
$$
where $\text{h.c.}$ stands for Hermitian conjugate, $I$ is some index set, and $c_A,c_B$ are anti-commuting operators on the fock space. Namely
$$
\begin{align*}
\{c_{\alpha i},c_{\beta j}^{\dagger}\} = \delta_{ij} \delta_{\alpha \beta} && \{c_{\alpha i},c_{\beta j}\} =0.
\end{align*}
$$


What we will study is the **bulk boundary correspondence** and the existence of **zero modes** for this model.

Let's first study this in periodic boundary conditions. This can tell us about the existence of zero modes. Let's study the modes of this after a discrete Fourier transform. In other words we can write the following:
$$
\begin{align*}
c_{\alpha i} &= \sum_k e^{ika_{i}}\tilde c_{\alpha k},
\end{align*}
$$
where $a_i$ is some variable which depends on the mode. We usually set $a_i = a i$ where $a$ is some constant lattice spacing.  Notice that $k$ runs over a finite set, the reason being that there is a discrete translation symmetry for the characters. As a result, using Parceval's identity we have
$$
H = \sum_{k \in \mathbb{N}} \left[ \tilde c_{Ak}^{\dagger}\tilde c_{Bk}\left[(t+\delta t) + (t-\delta t)e^{-ika} \right] +\text{h.c.} \right].
$$
We can actually rewrite the Hamiltonian in a more palatable form as
$$
H = c^\dagger H_k c,
$$
where $c_{k} = \binom{c_{Ak}}{c_{Bk}}$, and $H_k = d_k\cdot \vec \sigma$, where $d_k$ is some vector. We can ascribe a topological invariant to this problem to be the winding number of $d(k)$ around the origin in the $k$ plane (since $d_z = 0$). We can construct this invariant more explicitly soon. 

Now the interesting part is that $d_z = 0$ which implies that $\{H_k,\sigma_z\} = 0$ which means that we have found an $S$-type symmetry (sublattice symmetry). 

 The different winding number of the vector $d$ is a cool property because it defines the existence of a zero mode for the theory (We can see this using 1d qm).

# Berry Connection

The berry phase can be given as the integral of a 1-form (or 2-form using Stoke's theorem). That one form is a connection one-form and it is called the Berry connection. In other words, the Berry connection defines a particular parallel transport for our eigenstates via time evolution. 

**<u>Definition:</u>** Let $M$ be some manifold 





















