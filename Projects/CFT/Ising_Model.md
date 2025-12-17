# Ising\_Model

## Ising Model

This is a Conformal Field Theory “Hello World” project. Apparently the symmetry group of the ising model around its phase transition is actually the Virasoro group. Therefore we can conformal field theory our way into a nice description about it, just to play around with the fundamental objects there.

We begin with a classical treatment of the model to fully define some terminology (but also because it is fun) and then move on to identify how the matching with the CFT description occurs.

\[toc]

***

## Classical Treatment

Here is a brief overview the classical treatment of the 2D Ising model in order to find the limit at which it reduces to a quantum model.

### Physical Setting

The setup is a bunch of arrows arranged in a lattice that can interact with their nearest neighbors. A picture is the following, where we have a 2D lattice and an arrow attached at each point.

![image-20240420013237038](../../.gitbook/assets/image-20240420013237038.png)

To build a mathematical description of the model, we can first identify a suitable configuration space. Let’s start with a finite lattice 2D lattice that contains a total of $N = n^2$ particles. This can be described as $\mathbb{Z}\_n^2$, where at each point of which we have attached a spin up or down vector in $\mathbb{Z}\_2$ for the vector space. Therefore the configuration space is given by

$$
C_N \coloneqq \mathbb Z_n^2 \times \mathbb Z_2.
$$

Notice that $\mathbb{Z}\_n^2$ as a graph admits the topology of a discrete donut! That is because we can connect the endpoints of the grid for each $\mathbb Z\_n$. The next ingredient we need is a Hamiltonian $H:C\_N\to \mathbb{R}$.

The Hamiltonian in this case must capture the interaction of the neighboring spins. For some point $p = (s\_1,s\_2,\cdots, s\_N) \in C\_N$ we usually pick the Hamiltonian

$$
H(p) = -\sum_{i,j} J_{ij} s_i s_j - h \sum_{i} s_i
$$

where $J$ is an $N\times N$ symmetric matrix such that $J\_{ij} = I >0$ iff $s\_i$ is neighboring $s\_j$, otherwise $J\_{ij} = 0$, and $h > 0$ represents some external magnetic field type interaction. Note that $s\_i \in {-1,1}$. Now we are ready to calculate the magnetization in the Canonical ensemble.

### Magnetization in the Canonical Ensemble

In the Canonical Ensemble, the partition function is given by

$$
Z = \sum_{p\in C_N} e^{-\beta H(p)}
$$

Classically the magnetization is given by the average of the particles aligned in the up direction like so

$$
M = \frac{1}{N\beta} \langle s_T \rangle = \frac{1}{N \beta} \sum_{i = 0}^N\langle s_i\rangle = \frac{1}{N \beta} \frac{\partial }{\partial h} \log Z.
$$

The phase transition also appears on the susceptibility which is given by

$$
\chi = \left.\frac{\partial M}{\partial h}\right|_{h=0} = \frac{1}{N \beta} \left.\frac{\partial ^2}{\partial h^2}\right|_{h=0} \log Z
$$

With some algebraic manipulation we can get that

$$
\chi = \frac{1}{N\beta} \left[ -\frac{1}{Z^2} \left(\frac{\partial Z}{\partial h}\right)^2 + \frac{1}{Z} \frac{\partial ^2 Z}{\partial h^2} \right] = \frac{\beta}{N} \left[\langle s^2_Τ \rangle - \langle s_Τ\rangle^2\right] = \frac{\beta}{N} \text{Var}(s_Τ)
$$

OK! All of this is not quantum, but check out that

$$
\text{Var}\left[\sum_{i=0}^N s_i\right] = \sum_{i,j=0}^n\text{Cov}(s_i,s_j) = \sum_{i,j=0}^n \langle s_is_j\rangle - \langle s_i\rangle \langle s_j\rangle
$$

The cool thing is that $s\_i,s\_j$ are uncorrelated unless $i,j$ are neighbors. Therefore we can write this a sum of the uncorrelated differences, which depends only on $|i-j|$ which hints to translation invariance, and a really cool use of CFT!

We will use CFT to calculate these correlation functions.

### Mean Field Theory During Transition

***

## Quantum Treatment

Ok, everything up to now has been fun, but it has mostly been background so that when we treat Ising in CFT we can be like OH COOL! Look at these conformal weights! They are the same as the classical ones! Now we will proceed with establishing a correspondence between the classical Ising model and some CFT. We do this by establishing a connection between the classical treatment and the quantum treatment and then we take a _continuum_ limit of the quantum model to some CFT. So before we do everything there let's understand the Quantum Ising model.

### Classical Starting Point

_This whole section can be skipped if you don't care about rigorously motivating angular momentum in classical Hamiltonian mechanics._

Let's first consider the single spin case in 3D. We have a magnetic moment $\mu$ with fixed magnitude and the only thing we care about is its direction. This is the picture of the classical situation.

![Spin Sphere](<../../.gitbook/assets/spin-sphere (1).svg>)

The only quantity of interest is this angular momentum vector $\mu$, which transforms under a representation of $SO(3)$. In practice, in our physics we don't care about anything other than the orientation of this magnetic moment. Therefore, we can safely say that the _configuration space_ is just a sphere! We could show this nicely by performing a symplectic reduction of $T^\ast \mathbb R^3$.

For the purposes of this construction we will consider the spin as a point in $S^2$, with the symplectic form $\omega$ given by its embedding in $i:S^2\to \mathbb R^3$ like so

$$
\omega = i^\ast \iota_{n}d\text{vol},
$$

where $d\text{vol}$ is the standard volume form of $\mathbb R^3$ and $n \in \mathfrak X(\mathbb R^3)$ is any vector field that is perpendicular to the surface of the sphere. This induces a nondegenerate symplectic form that is the volume form on the sphere given by

$$
\omega = \sin\theta d\theta\wedge d\phi,
$$

where $\theta,\phi$ are the standard coordinates on the sphere.

The first thing that we want to show is to find the momentum map of the sphere.

**Proposition:** The restriction on the sphere of the fundamental representation of $SO(3)$ on $\mathbb R^3$ is a Hamiltonian action on $S^2$ with momentum map the inclusion map $\iota:S^2\to \mathbb R^3 \cong \mathfrak {so}(3)$.

_**Proof:**_ We will show that $X\_x,X\_y,X\_z$ follow the standard commutation relations of the generators of $SO(3)$.

In particular we want to show that

$$
\begin{align*} \{q^i,q^j\} = \epsilon^{ij}_{\ \ \ k}q^k. \end{align*}
$$

We can now calculate that

$$
\begin{align*} \{q^i,q^j\} &= \iota_{X_{q^j}}\iota_{X_{q^i}}\omega\\ &= \iota_{X_{q^j}}\iota_{X_{q^i}} i^\ast \iota_n d\text{vol} \end{align*}
$$

$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

In fact here is a picture of their Hamiltonian vector fields for $x,y,$ and $z$ respectively.

![Hamiltonian Vector Fields](<../../.gitbook/assets/hamiltonian-vector-fields (1).svg>)

Now we can move on through geometric quantization to produce the Hilbert space associated to this thing.

### Hamiltonian

Now consider the Hamiltonian of that spin system. If the point on the sphere is an angular momentum, then on an external magnetic field $H \in \mathbb R^3$ the Hamiltonian is given by $H:S^2\to \mathbb R$

$$
H(p) = q^i(p) H_i.
$$

We can actually plot this Hamiltonian right here,

![Hamiltonian Sphere](<../../.gitbook/assets/hamiltonian-sphere (1).svg>)

Where the phase space is shown in translucent gray and the Hamiltonian ($r=H(\phi,\theta)$) is shown as the blue sphere. Notice that in this depiction the magnetic field is pointing towards the top. Therefore we can see two unstable extrema parallel to $H$ and two stable ones perpendicular to it.

Interestingly, we can think of what happens when we have $n$ such spins. In that case, the phase space is

$$
\mathcal P_n = \{p:\mathbb Z_n \to S^2\},
$$

with the canonical product topology and symplectic form.

We want those to interact with each other, so the way we will do this is using graphs.

**Definition:** Given a connected graph $G=(V,E)$, the phase space $\mathcal P\_n$ together with the graph is called an **interacting system** if there exists a bijection $V\to {\pi\_i:\mathcal P\_n \to S^2}$ to the set of canonical projections of $\mathcal P\_n$. If $G$ is a cyclic undirected graph, then the system is called **cyclic** or **nearest neighbor**.

**Proposition:** In a nearest neighbor interacting system there exists a map $J:\mathcal P\_n\to \mathcal P\_n$ such that the set of edges is given by

$$
E=\{(\pi_i,\pi_i\circ J)\mid i = 1,2,\dots, n\}.
$$

This map is called the **adjacency map** and it is a permutation.

Now, we can play with the interaction terms. We will restrict our attention to nearest neighbor interacting systems because they have an interesting relation with the quantum mechanical and field theoretic models. In particular, let's say that the spins interact with each other based on their $z$ component. What that means in practice is that the Hamiltonian has a stable extremum when the spins are aligned in the $z$ direction. We will formalize it like so:

**Proposition:** Given a map $f:S^2 \to V$, where $V$ is some vector space, the map lifts to a unique map $\bar f:\mathcal P\_n \to V^n$ such that the following diagram commutes.

$$
\begin{CD} \mathcal P_n @>{\bar f}>> V^n\\ @A\iota_i AA @VV\pi_iV \\ S^2 @>f>> V \end{CD}
$$

_**Proof:**_ The map is $\bar f = \underbrace{f\times f\times \cdots \times f}\_{n\text{ times\}}$.

$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

**Proposition:** The map $f$ lifts to a map $J\_f:\mathcal P\_n \to V^n$ such that

$$
J_f(p) = \sum_{(i,j) \in E} \iota_j\circ f\circ \pi_i(p).
$$

In the case the system is nearest neighbor, we have that $J\_f$ is given by $J\_f = f^\ast J = \bar f \circ J$.

In other words we can introduce the following interaction term:

$$
\begin{align*} H_I : \mathcal P_n &\to \mathbb R\\ p=(p_1,p_2,\cdots,p_n) &\mapsto H_I(p) \coloneqq -J^{ij}z(p_i) z(p_j), \end{align*}
$$

where $J:\mathbb R^n\to \mathbb R^n$ is a symmetric positive definite matrix called the **interaction matrix.** If $J\_{ij}\neq0$ then we say that $p\_i, p\_j$ are neighbors. The simplest such interaction matrix would be the following

$$
J^{ij} = J(\delta^{i(j+1)} + \delta^{i(j-1)}+\delta^{i1}\delta^{jn}+\delta^{j1}\delta^{in}),
$$

for some $J>0$. In this scenario we ca write the full Hamiltonian as:

$$
\boxed{H = -H^iq_i - J^{ij}z_iz_j.}
$$

If the external field is pointing in the $x$ direction we have

$$
H = -h \sum_{i=0}^n x_i - J^{ij}z_iz_j.
$$

### Construction of Hilbert Space

Performing canonical quantization we see that $x\_i,y\_i,z\_i$ form representations of $\mathfrak{so}(3)$ respectively. After going through the geometric quantization procedure by polarizing on the $\theta$ coordinate we obtain a 2-dimensional Hilbert space for the single sphere which we can label by the eigenvalues of the representation of the $z$ operator.

**Proposition:** The single particle Hilbert space $\mathcal H\_1$ is a quantum Hilbert space.

Now we can proceed by defining operators appropriately through geometric quantization by identifying the linear operator $z : \mathcal H\_1 \to \mathcal H\_1$. That for the two pure states $\psi\_+ = \binom 1 0, \psi\_- = \binom 0 1$ it acts as follows

$$
\begin{align*} z \psi_+ = \psi_+ && z \psi_- = -\psi_- && \implies && z = \sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}. \end{align*}
$$

We can then create the $N$ particle Hilbert space by taking tensor products like so:

**previousDefinition:** The $N$ **particle Hilbert space** is given by $\mathcal H\_N \coloneqq \bigotimes\_{n=1}^N \mathcal H\_1$. And the $i$th spin operator $z\_i : \mathcal H\_N \to \mathcal H\_N$ is given by

$$
z_i = 1\otimes 1\otimes \cdots \underbrace{\otimes\ z\ \otimes}_{i^{\text{th}}\text{ position}} \cdots \otimes 1.
$$

So now we have the Hilbert space constructed and we can proceed with the Hamiltonian.

**Definition:** The **Quantum $N$ particle Ising Hamiltonian** is the linear map $ H : \mathcal H\_N \to \mathcal H\_N$ given by

$$
H =H_1+ H_0 = -J^{ij}z_iz_j - h\sum_{i=0}^N x_i
$$

where $x\_i = \sigma\_{xi}$ is the corresponding operator to the $x\_i:\mathcal P\_n\to \mathbb R$ map, with the commutation relations that we are expecting. Notice that $\[H\_1,H\_0]\neq 0$.

### Quantum to Classical Correspondence

The item of interest that will facilitate the correspondence of the the classical and the quantum theories is the partition function. We have calculated it for the 2-dimensional Ising model in the previous section, so we can try to evaluate it for this one.

The partition function is given by

$$
Z = \Tr e^{-\beta H}.
$$

for some $\beta \geq 0$. However we see that to do this we need to somehow calculate

$$
e^{-\beta(H_0 + H_1)},
$$

which are non-commuting operators. We could use Baker-Campbell-Hausdorff to obtain the result, but that is insane. Anyway here is the proposition.

**Proposition:** The partition function is given by

$$
Z = \Lambda^{NL} \sum_{z_i,z_j = \pm1} e^{\Delta \tau J^{ij}z_iz_j + \gamma \sum_{i,j}^{N,L}z_jz_j}
$$

for some $L\in \mathbb N$, and $\Lambda, \gamma \in \mathbb R$.

## Quantum Field Theory

Having the quantum mechanical model it is time to "take the continuum limit" and obtain a quantum field theory for it. This is done through the **Jordan-Wigner transformation** that we will explore in mode detail. What we will derive, is a prescription to increase the number of spins in such a way that it limits to the CFT of a free fermion.

To do so, we will define linear operators $c\_i : \mathcal H \to \mathcal H$ such that

$$
\begin{align*} \sigma_i^z = - \prod_{i<j}(1-2c_j^\dagger c_j) (c_i + c_i^\dagger) && \sigma_i^x = 1-2c_i^\dagger c_i. \end{align*}
$$

**Proposition:** These operators have the following commutation relations

1. ${c\_i,c\_j^\dagger}=\delta\_{ij}$
2. ${c\_i,c\_j}={c\_i^\dagger,c\_j^\dagger} = 0$

The cool thing is that we can now rewrite the Hamiltonian.

**Proposition:** The Hamiltonian for the 1D Ising chain can be written as

$$
H = -J\sum_{i=1}^N c_i^\dagger c_{i+1} + c_{i+1}^\dagger c_i + c_i^\dagger c_{i+1}^\dagger + c_{i+1}c_i - 2g ci^\dagger c_i + g.
$$

_**Proof:**_ Plug it in and cry.

$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
