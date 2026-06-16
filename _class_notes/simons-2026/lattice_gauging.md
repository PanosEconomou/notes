# Gauging on the Lattice

Some open problems on the lattice have to do with the fact that we don't have a really good idea of what a symmetry is. Do we want to call a hamiltonian eigenspace projector a symmetry? It seems like "commuting with the hamiltonian" is not enough. What about how anomalies appear on the lattice? To what do symmetry operators in the lattice flow to in the continuum? And how do we know?

Here is a motivating example. Consider 
$$
H = \bigotimes_{i} H_i
$$
for some $H_i$ acting on finite dimensional subspaces. If this flows somewhere in the continuum and there we find some gaugeable symmetry, can we realize it on the lattice? And can we gauge it on the lattice?

[toc]

## Finding $\mathbb{Z}_2$ on the lattice

Especially on the lattice we refer to gauging as condensation (because we put a bunch of lines on the same surface). Consider the transverse field Ising model in a $2D$ square lattice with a Hamiltonian
$$
H = - J \sum_{\langle v,v' \rangle \in e} z_v z_{v'} - h\sum_{v}x_v
$$
There is a zero form symmetry which is the one that flips all the signs furnished by an operator
$$
\eta = \prod_v x_v.
$$
Another model we can do use is the toric code which has a hamiltonian on plaquettes $p$ and vertices $v$ as follows
$$
H=-\sum_v A_v - \sum_{p} B_p
$$
There we can find one form symmetries that can be obtained via the standard electric and magnetic charge constructions supported on loops $\gamma$ given by
$$
\begin{align*}
\eta_{e}(\gamma) &= \prod_{e\in \gamma} z_e\\
\eta_{m}(\gamma) &= \prod_{v\in \gamma} x_v
\end{align*}
$$
These two models are related by Gauging. Let's figure it out.



## What is a lattice Gauge theory?

In the toric code we can dconsider the largest hilbert space $\mathbb{H}$ such that
$$
B_p\psi = \psi \qquad \forall \psi \in \mathbb{H}, \forall p
$$
over all plaquettes. To gauge a symmetry we will do so like this:

1. Introduce $\mathbb{Z}_2$-gauge fields on each edge
2. We have to fix a local symmetry action on each vertex













