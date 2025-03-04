# Symmetry Protection

We will talk about bosonic symmetry protection

## Matrix Product states

We have a $\mathbb{Z}_2 \times \mathbb{Z}_2$ symmetry. Consider two copies of Ising for example. Another example is the AKLT chain. To understand that model, we need to understand matrix product states.



**<u>Motivation:</u>** Consider a 1D chain with some spins on each site. Then any general wavefunction can be written as
$$
\ket{\psi} = \sum_{\sigma_i} C_{\sigma_1 \cdots \sigma_n} \ket{\sigma_1 \cdots \sigma_n}.
$$
We can represent this wavefunction in a different way, by introducing the following objects
$$
\ket{\psi} = \sum_{\sigma_i} A^{\sigma_1}_{[1]} A^{\sigma_2}_{[2]}\cdots A^{\sigma_n}_{[n]} \ket{\sigma_1 \cdots \sigma_n}.
$$
these are matrices with the with dimensions such that they product to a 1x1 matrix.

To do this, we use singular value decomposition. 

**<u>Theorem:</u>** *(Singular Value Decomposition)* Let $M$ be a $(d_A,d_B)$ matrix. Then there exists a diagonal square matrix $\Lambda$ of dimension $\min(d_A,d_B)$ and two matrix such that $UU^\dagger = 1$ and $VV^\dagger = 1$ where
$$
M = U\Lambda V^\dagger.
$$
To understand how to get this decomposition we can think of the coefficient $C_{\sigma_1,\sigma_2,\cdots,\sigma_n}$ as the element of a matrix indexed by $\sigma_1$ on the row and $\sigma_2,\cdots,\sigma_n$ on the column. Then we can keep performing SVD to get these $A$.



While this might seem utterly useless but let's see what happens in AKLT. We take periodic boundary conditions on a spin chain with each site having a spin 1 particle.  

Now consider two sites $i,i+1$ and we want the total spin to never be $2$. Therefore a projector to that subspace is
$$
\Pi_i = \left( S_i + S_{i+1} \right)^2 - 6
$$
Now we want to find a Hamiltonian that a state where each pair has spin $2$ is zero, while the rest of the states take the value of the pairs. Here is the Hamiltonian (Notice $\Pi_i + 6 = \left( S_i + S_{i+1} \right)^2$ the operator that measures the spin).
$$
H = \sum_i \left( \Pi_i +6 \right) (\Pi_i + 4).
$$
The idea of this Hamiltonian is to have the pairwise spin $1$ state to be the lowest energy state. Notice that this has 2 as the highest energy state, 0 next up, and 1 up next. We can reframe our logic by considering half the sit

 

