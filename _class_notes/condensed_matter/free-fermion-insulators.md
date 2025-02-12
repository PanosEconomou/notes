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

**<u>Definition:</u>** **Time reversal** for a unitary operator $U : \mathcal{H} \to \mathcal{H}$ is the antilinear map $\bar U$ such that $\bar U^\dagger H \bar U = H$. **Chiral symmetry** is such that $\bar U H \bar U = -H$, and **Sublattice** is $UHU = -H$.

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

**<u>Definition:</u>** Let $M$ be some manifold. Then a **variable Hamiltonian** is a map $H:M\to \text{Herm\,}\mathcal{H}$ to the Hermitian operators of some Hilbert space. 

**<u>Proposition:</u>** Given a principal $\R$ bundle $P$ over $M$ and the representation $\rho: P\to \text{Aut\,}\mathcal{H}$ given by $(\epsilon,p)\mapsto e^{-i\epsilon H(p)}$ defined by a variable Hamiltonian over $M$, we can construct the associated vector bundle $E=P\times_\rho \mathcal{H}$ with an induced connection one form $A$ by the action of $P$. 

**<u>Definition:</u>**  The induced connection $A$ is called the **Berry connection**. The holonomy of $\nabla^{A}$ is known as the **Berry phase**.

**<u>Corollary:</u>** Given a local gauge, the Berry phase is a topological invariant.

**<u>Proposition:</u>** Regardless of gauge, the Berry phase mod $2\pi$ is a topological (diffeological) invariant.

In most cases it is easy to calculate this given a path $\gamma:\mathbb{R}\supset I\to M$. Especially when we are interested in holonomy we are studying loops of the form $\gamma : S^1 \to M$. 

**<u>Example:</u>** Let $M$ be locally parameterized by its embedding in some $\mathbb{R}^m$ in a neighborhood $U \subset M$ of $p \in U$. Then a local form of the Berry connection is given by
$$
A = i\langle v_n,e^{iH}\partial_k e^{-iH}v_n  \rangle dx^k \otimes v_n,
$$
where $v_n$ is an orthonormal eigenbasis for $\mathcal{H}$ of $H(p)$. Therefore given a loop $l:S^1 \to U\subset M$ we can write the Berry phase $\gamma \in \mathcal{H}$ as
$$
\gamma = \int_{l} A.
$$
Now assume that $l = \partial S$ for some $S \subset U$. Then the Berry phase is given by
$$
\gamma = \int_S dA.
$$
By the Bianchi identity we have that the curvature of the berry connection  (known as **Berry Curvature**) is given by
$$
F=dA.
$$
After some algebra we will see that
$$
F = \sum_{m\neq n} \frac{\langle v_n,e^{iH} dH e^{-iH}v_m\rangle \wedge \langle v_m,e^{iH} dH e^{-iH} v_n\rangle}{(E_n - E_m)^2},
$$
where $E_k \in \mathbb{R}$ are the eigenvalues of $H(p)$.



**<u>Example:</u>** *(Single Fermion in a Magnetic Field)* Consider $M = S^2$ and the variable Hamiltonian $H:S^2\to \text{Herm\,}\mathbb{C}^2$ given by $r\mapsto r\cdot \sigma$. Here we are parameterizing the sphere by a conformal embedding embedding in $\mathbb{R}^3$. One can calculate Berry curvature to be 
$$
F =(v_+ - v_-) \otimes \frac{\ast dr}{2r^3}
$$
 where $H(r)v_\pm = \pm v_\pm$. This is pretty cool because of the cohomology of $S^2$! In other words there must be a discontinuity on the $A$ since a closed form in $S^2$ is not exact. $H^0(S^2) = \mathbb{R}$ and $H^2(S^2) = \mathbb{R}$. The rest are $\emptyset$.

# Integer Quantum Hall Effect

We have seen that classically, the resistance as a function of the magnetic field under the setup is linear with gradient being the charge density of the superconductor. However, quantum mechanically this depends on the Landau levels of this. Let's explore that.

## Coordinate transformation.

Consider the following Hamiltonian for the electron in the conductor. 
$$
H  = \frac{1}{2}\left[p_x^2 + \left(p_{y} - ieA\right)^2 \right],
$$
where $A$ is the magnetic potential $A = \hat y Bx$. Therefore we can do the natural coordinate transformation to obtain new momenta (notice that we are just adding the connection to the magnetic field). Let's solve for stationary state $\psi \in L^2(\mathbb{R}^2)$ such that
$$
H\psi = E \psi.
$$
We find that
$$
\psi = e^{iky} f(x),
$$
form a basis as long as $f(x)$ satisfies 
$$
Hf = Ef \iff -\frac{\partial^2 \psi}{\partial x^2} + \left(x - k\right)^2 \psi = E \psi,
$$
up to some constants. 



## Degeneracy

Therefore solutions to these are Hermite polynomials! The energy levels are
$$
E_n = n + \frac{1}{2},
$$
with the amazing property that they are ultra-degenerate. We can play with compact boundary conditions for the conductor and what we find is that the degeneracy of the energy levels is proportional to the area. We get this by saying that the center of the probability distribution should be inside the material.

That's why it makes sense to define a quantity that is the proportionality constant to the degeneracy and the area. This is $n_B$ and we call this the degeneracy per unit area. Since all the electrons are polarized along the magnetic field, we can put only one in each energy state. So given the number of electrons and the degeneracy we can find the energy of the conductor. 

We can also derive that the degeneracy also depends linearly on $\sqrt B$. Therefore as a function of $B$ the energy increases stepwise!   





