# Minimal Models

We go over some examples of commonly encountered minimal models in 2D CFT as well as common calculations for them.

[toc]

# Definitions

As we have seen in [here](../Quantum_Fields/Virasoro_Algebra.md), a representation $\rho: \text{Vir} \to \text{End}(V)$  of the highest weight representation of a Virasoro Algebra is called a **Virasoro module.** If, in addition, the elements of the form $\rho(L_{-n_1})\rho(L_{-n_2})\cdots\rho(L_{-n_k}) v$ form a basis, where $v$ is the vacuum vector of $V$, then $V$ is called a **Verma module**. What is interesting is that Verma modules are indecomposable, but not (in general) irreducible!

Remember indecomposable is being able to find two proper subresentations whose direct sum is isomorphic to the full Verma module not just as a vector space, but also as a representation. While irreducible, is simply being able to find a proper subrepresentation. One can take the vector space quotient but it isn't necessary  that the resulting thing will be naturally isomorphic **as a module** to the vector space decomposition by the quotient.

## Singular Vectors

Let's be more specific. As we have already seen [here](../Quantum_Fields/Virasoro_Algebra.md) there is a natural bilinear Hermitian (possibly degenerate) form $H: M^2 \to \mathbb{C}$ on any Verma module $M$ that takes advantage of the *grading* in the level subspaces. 

**<u>Definition:</u>** Elements of the kernel of $H$ are known as **singular vectors**, or null vectors, and $\text{ker\,} H$ is known as the **singular, maximal, or null subspace**. 

**<u>Corollary:</u>** $M/\text{ker\,}H$ is an irreducible Virasoro module. 

What is interesting about singular vectors? Primarily that they constrain the correlation functions further than conformal symmetry.  Constraining correlation functions implies the famous fusion rules as we will see now

**<u>Theorem:</u>**







