# Interactions

We want our string field theory to be conformal with a given central charge. So let's study some CFT in order to see what interactions look like in this place. 

A string theory defines a CFT. What we mean is that a physical state for $a=1$ has the property that
$$
\begin{align*}
L_n \psi = 0 && L_0 \psi = \psi.
\end{align*}
$$
This means that any physical state has the form that the stress tensor vanishes in correlation functions, and, more importantly $\psi$ is the highest weight state for a Virasoro irreducible representation of weight $h=1$. 

Virasoro is the smallest symmetry algebra for a CFT. However, from the quantization and embedding pictures it could be possible that there are conserved currents in the target space that might descend into primaries! These will also be conserved currents of our theory and we can use them to form bigger symmetry algebras that are affine. 

One way to these groups is to define the Coxeter operator of the algebra using a Cassimir. 

# No more ghosts

We have defined the conserved charge under the BRST transformation
$$
Q = -\kappa^\dagger \sum_{m\neq 0} \alpha_{-m}^- c_m + Q_0 + Q_{-1},
$$
where $Q^2 = 0$ and $\{R,Q\} = S$ with some $R^2 = 0$ then we say that the cohomology of $Q$, i.e. 
$$
\mathbb{H}(Q) \coloneqq \{\psi \in \mathbb{H} \mid Q\psi = 0, \text{ i.e. }\phi \sim \phi + Q\psi \}
$$
is in the kernel of $S$.





