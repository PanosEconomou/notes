# Minimal Models

We go over some examples of commonly encountered minimal models in 2D CFT as well as common calculations for them.

[toc]

# Introduction

As we have seen in [here](../Quantum_Fields/Virasoro_Algebra.md), a representation $\rho: \text{Vir} \to \text{End}(V)$  of the highest weight representation of a Virasoro Algebra is called a **Virasoro module.** If, in addition, the elements of the form $\rho(L_{-n_1})\rho(L_{-n_2})\cdots\rho(L_{-n_k}) v$ form a basis, where $v$ is the vacuum vector of $V$, then $V$ is called a **Verma module**. What is interesting is that Verma modules are indecomposable, but not (in general) irreducible!

Remember indecomposable is being able to find two proper subresentations whose direct sum is isomorphic to the full Verma module not just as a vector space, but also as a representation. While irreducible, is simply being able to find a proper subrepresentation. One can take the vector space quotient but it isn't necessary  that the resulting thing will be naturally isomorphic **as a module** to the vector space decomposition by the quotient.

# Singular Vectors

Let's be more specific. As we have already seen [here](../Quantum_Fields/Virasoro_Algebra.md) there is a natural bilinear Hermitian (possibly degenerate) form $H: M^2 \to \mathbb{C}$ on any Verma module $M$ that takes advantage of the *grading* in the level subspaces. 

**<u>Definition:</u>** Elements of the kernel of $H$ are known as **singular vectors**, or null vectors, and $\text{ker\,} H$ is known as the **singular, maximal, or null subspace**. 

**<u>Corollary:</u>** $M/\text{ker\,}H$ is an irreducible Virasoro module. 

We can show their existence in certain Verma Modules. 

**<u>Theorem:</u>** *(Existence of Singular Vectors)* Consider a Verma module $M(h_{pq}(c),c)$ with 
$$
h_{pq}(c)= \frac{1}{48}\left[ (13-c)(p^2+q^2) + \sqrt{(c-1)(c-25)}(p^2 -q^2) -24pq +2(c-1) \right],
$$
 for some natural numbers $p,q \in \mathbb{N}$, then there exists a singular vector at level $pq$ in the level decomposition, i.e. $L_0 \chi = h_{pq} + pq$ and $\langle u,\chi \rangle = 0$ for any $u\in M$.

***Note:*** All minimal models are built from Verma modules of this form. 

***Proof:*** It is enough to show that the Gram determinant vanishes at level $pq$. By Kac's theorem, we have that
$$
\det A_{pq} \propto (h_{pq}-h_{pq}) = 0.
$$

$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$

What is interesting about singular vectors? Primarily that they constrain the correlation functions further than conformal symmetry.  

Constraining correlation functions implies the famous fusion rules as we will see now

**<u>Theorem:</u>** 







