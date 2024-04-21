# Ising Model

This is a Conformal Field Theory “Hello World” project. Apparently the symmetry group of the ising model around its phase transition is actually the Virasoro group. Therefore we can conformal field theory our way into a nice description about it, just to play around with the fundamental objects there. 

We begin with a classical treatment of the model to fully define some terminology (but also because it is fun) and then move on to identify how the matching with the CFT description occurs.

[toc]

----



# Classical Treatment

Here is a brief overview the classical treatment of the 2D Ising model in order to find the limit at which it reduces to a quantum model. 



## Physical Setting

The setup is a bunch of arrows arranged in a lattice that can interact with their nierest neighbohrs. A picture is the following, where we have a 2D lattice and an arrow attached at each point.

 ![image-20240420013237038](_Ising_Model.assets/image-20240420013237038.png)

To build a mathematical description of the model, we can first identify a suitable configuration space. Let’s start with a finite lattice 2D lattice that contains a total of $N = n^2$ particles. This can be described as $\mathbb{Z}_n^2$, where at each point of which we have attached a spin up or down vector in $\mathbb{Z}_2$ for the vector space. Therefore the configuration space is given by

$$
C_N \coloneqq \mathbb Z_n^2 \times \mathbb Z_2
$$

which is the disjoint union of $N$ Spheres, with a nice way of labeling them. Regardless, the next ingredient we need is a Hamiltonian $H:C_N\to \mathbb{R}$.

The Hamiltonian in this case must capture the interaction of the neighboring spins. For some point $p = (s_1,s_2,\cdots, s_N) \in C_N$ we usually pick the hamiltonian 

$$
H(p) = -\sum_{i,j} J_{ij} s_i s_j +  h \sum_{i} s_i = p^T (h - J) p
$$

where $J$ is an $N\times N$ symmetric matrix such that $J_{ij} = I >0$ iff $s_i$ is neighboring $s_j$, otherwise $J_{ij} = 0$, and $h > 0$ represents some external magnetic field type interaction. Note that $s_i \in \{0,1\}$. Now we are ready to calculate the magnetization in the Canonical ensemble.



## Magnetization in the Canonical Ensemble

In the Canonical Ensemble, the partition function is given by 

$$
Z = \sum_{p\in C_N} e^{-\beta H(p)}
$$

Classically the magnetization is given by the average of the particles aligned in the up direction like so 

$$
M = \langle I s_i\rangle = 
$$
















