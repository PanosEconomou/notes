# Defects

[toc]

> **<u>Questions:</u>** 

Many body dynamics are cool. If they are strongly coupled their dense limit is a QFT. Defects are central objects in understanding impurities there. For example, given a microscopic description what kind of phase structure do you expect to see, and what transitions should you expect. Defects and their associated symmetries play a central role there. 

**<u>Example:</u>** Some examples of this are

1. 2D Lattice models (quantum group)
2. 4D Non-Abelian gauge symmetry (Siberg WItten theory) has a well understood phase structure using fusion. But also there is a mathematical interplace with the smooth structures of 4-manifolds and monopole solutions which are classified using the physics tools.

## Approach

Intuitively there are two main ways to describe defects.

1. Extended operators (can be defined by action on other operators)
2. Localized Impurities (can be defined by a modification on a hamiltonian)

One interesting thing is that defects have rich dynamics because they can have things living on them, or interuct with the bulk in a way. This leads to interesting questions about defect RG flows. Interesting questions would be measurement induced phase transitions since measurement is a defect.

As an entry point we can study the two famous impurities in free fermionic models. On the lattice we have a 1D spin chain. The one that limits to a compact boson CFT. The impurity problem we are considering is defined by the following action.

We pick $R=\sqrt{2}$ because this gives us a special SU(2) symmetry with an associated current $J$ such that
$$
S_{K} = \int_{L} \iota^\ast J,
$$
the embedding $\iota$ is an extra degree of freedom. Sometimes we write this as $J\cdot S$ for some "spin" degree of freedom for the fermion that we just introduced. In reality this is just a qubit.  So the path integral sums over the two possible qubit orientations. 

The IR dynamics of this are quite interesting. For positive coupling this flows in the IR to a topological defect line. We say that the qubit is screened. The topological defect line is related to the $\mathbb{Z}_2$ generator of the center of $SU(2)$. Notice that at this radius this is the $SU(2)_1$ WZW model.

Note that since $J$ has dimension 1 $\lambda$ is dimensionless so this is a marginal deformation. This becomes marginally relevant at $\lambda >0$. 

The other handle that gives rize to defects is the Kane-Fisher impurity. Same thing but this time we have electrical coupling. We can pick $R$ to be general and then we obtain 
$$
S_F = \int_L \cos \tilde \theta
$$
the dimension of this operator is $\Delta = \frac{R^2}{4}$. In the Luttinger liquid this is calles the luttinger parameter. In this case we can calculate the flows (at least numerically) where we have two regimes. if $\Delta < 1$ then this thing is relevant which has an interesting result of being a factorized defect. For $\Delta > 1$ in which the perturbation is irrelevant in the IR this flows to the identity defect. 



If we are expecting that $(J_n - \bar J_{-n}) D_{IR} = 0$ then it must be factorizing (it can't really be anything else). The only thing that is factorizing with respect to that are the boundary conditions (which are 2) because $\mathfrak{su}(2)_2$ only has 2 primaries. 

The perturbation looks like
$$
e^{\lambda \int_L S\cdot(J(x) + \bar J(x))dx}
$$
So we can calculate this term by term to obtain
$$
(J_n - \bar J_{-n})(J_m x^{-m-1} + \bar J_m x^{- m- 1}) =
$$

$$
\lambda\bar \lambda\int_L \int_L J(x) \bar J (y)
$$

At the fixed point there are two boundary states in $\mathfrak{su}(2)_1$ that can be obtained by the $S$-matrix as 





