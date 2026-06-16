# Stabilizer Codes and Fracton Phases

[toc]

> **Questions:**
>
> 1. How does this picture break when you break translation invariance on the lattice or make it compact or add a boundary?



## Definitions

We can pick some lattice model with some hamiltonian where the operators are localilzed on the edges, sites, plaquettes, etc. Typically we write this as
$$
H = \sum_{p} A_p + \sum_{v} B_v
$$
where each plaquette and vertex operator are built through lattice site operators (typically). We can talk about the many body systems like this using stabiilizer codes. 

**<u>Properties:</u>** These Hamiltonians typically satisfy

1. **Translation invariant**
2. **Commuting operators**
3. **Locally generated** (e.g. products of pauli on the cites)
4. **Finite range:** Some boundeness condition so that we can make the lattice bigger and the hamiltonian doesn't blow up.

We will learn about **Algebraic structures,** then **Mobility,** then **Fractons**, and finally **Phases**.



**<u>Definition:</u>** A **matrix Algebra** $A_{loc}$ is given by
$$
A_{loc} = \bigotimes_{\lambda \in \mathbb{Z}^d} \text{End}(\mathbb{C}^n)^{\otimes m}.
$$
Basically $m$ is the number of qubits per site, $n$ is the dimension of the hilbert space of each qubit, and $\mathbb{Z}^d$ is the lattice that you are intereted it. What is hidden in this definition is the standard product topology such that all but dinitely many operators in the string are identity. 

**<u>Definition:</u>** What we call a **pauli operator** in $A_{loc}$ is a $X,Z \in \text{End}(\mathbb{C}^n)$ such that 
$$
\begin{align*}
X e_i = e_{i+1} && Z e_i = e^{2\pi i /n} e_i && ZX = e^{2\pi  i /n}XZ.
\end{align*}
$$
We can denote the root of unity by $\zeta$.

**<u>Proposition:</u>** Notice that $z X^a Z^b \in U(N)$ for $z\in U(1), a,b \in \mathbb{Z}_n$. Which implies that as a vector space $A_{loc}$ is spanned by such products of operators. The group of unitary products is called $\mathcal{P}$ the pauli group.

## Algebraic Description of Pauli Group

Consider the ring $R = \mathbb{Z}_n[\mathbb{Z}^d] \cong \mathbb{Z}_n[x_1^{\pm1},\cdots, x_d^{\pm1}]$ described by maps $\lambda = (\lambda_1, \cdots, \lambda_d) \mapsto x^\lambda =x_1^{\lambda_1}\cdots x_d^{\lambda_d}$. THen we can describe the exponents of products of pauli operators by looking at this module when we package the powers $a,b$ inside $P :=R^m \oplus R^m$. 

This is particularly nice because $\mathcal{P}$ has a nice action of $\mathbb{Z}_d$ which is obtained by multiplication with $x^\lambda$. What we have lost is the phase $z$. This is relatively fine. What one can show is that there is a short exact sequence
$$
U(1) \to \mathcal{P} \to P.
$$
So one can obtain the pauli group as a central extension of the pauli module. However we can package the phase by introducing an extra structure on $P$. We do so using a symplectic form. 

The way to see this is that commutation of pairs of the form $XZ$ is up to a phase. So in some sense we can capture the overal phase information simply by encoding it in a symplectic form $\omega: \mathcal{P} \times \mathcal{P} \to R$. Since the commutation structure is local one can show that the symplectic form is translation invariant. This means that we can use the module structure to encode everything. 

> **<u>Cool fact:</u>** When things like that (?) are translation invariant it probably means that we can describe them using a module. 

One can show that this form can be pulled back to the module as $\Omega: P\times P \to R$ given by
$$
\Omega(p,q) = \sum_{\lambda} \omega(x^\lambda p, q)x^\lambda.
$$
**<u>Definition:</u>** A submodule $L\subset P$ is **isotropic** if $\Omega$ restricts to zero on $L$ (i.e. all the operators it contains commute).

**<u>Proposition:</u>** If $L$ is isotropic then there exists a group homomorphism splitting $H:L\to \mathcal{P}$.

The intuition for this is that $L$ can be found insdie an abelian subtroup of $\mathcal{P}$. In particular to satisfy translation invariance these are the operators that we will use to build the hamiltonians. So to build a hamiltonian it is enough that we find a commuting $L$ or pick things in the kernel of $\Omega$. 

One more interesting fact is that $L$ has to be finitely generated. So the way we will do this is that we will add the finitely many generators together with their conjugates to build the hamiltonians.

> **<u>Remark:</u>** The goal of this pgrogramme is that if we understand $L$ we understand the possible Hamiltonians. So we can tell a lot of things (such as can you find gapped hamiltonians? etc.) by finding the equivalent algebraic questions.



## Frustration

**<u>Definition:</u>** A **frustration free** ground state of $H = -\sum_{l \in B(L)}H_l$ is a state $v$ such that $H_lv = v$ for all $l \in L$, where $H_l$ is the corresponding generator of an isotropic $L\subset P$.

**<u>Theorem:</u>** $H$ has a unique frustration free ground state iff $L = L^\perp$ (i.e. if $L$ is a Lagrnagian algebra).

**<u>Definition:</u>** A **Lagrangian Stabilizer Code** or code is $L \subset P$ s.t. $L = L^\perp$.

Another type of state is a local excitation. Which is such that there is a region in which the $H_l$ are excited while outside you look like the frustration free ground state. 

**<u>Defintion:</u>** Consider $\text{Hom}_{\mathbb{Z}}^{\text{loc}}(L,\mathbb{Z}_n)=:L^\ast$ be the homomorphisms $s: L \to \mathbb{Z}_n$ such that $s(x^\lambda l) = 0$ for all $\lambda \gg 0$ where $H_l \ket{s} = \zeta^{s(l)} \ket{s}$. We call $L^\ast$ the **module of local excitations**.

**<u>Theorem:</u>** A state $s$ is in the super-selection sector of $v$ iff there exists $p \in P$ such that $s = h_p v$ and iff  there exists $p\in P$ such that $s(l) = \Omega(p,l)$.

In other words we can find any excitation that is within a unitary transformation of the ground state (i.e. in the super-selection sector of the ground state) iff we can write it as a contraction of the symplectic form. Sometimes we call these states **locally creatable excitations**.

> Is quotienting out by the locally creatable stuff equivalent to quotienting out by the kernel of $\Omega$?

**<u>Definition:</u>** The **superselection sectors** are in bijection with the quotient $Q_L :=L^\ast/(P/L)$ via the map $\Omega(p,\cdot)$. This is also called the zeroth dimensional charge module. 

In other words one cna find a short exact sequence such that
$$
P/L \xrightarrow \Omega L^\ast  \to Q_L.
$$
Effectively what we have constructed is the local excitation mod the locally creatable excitations. 

## Computational Tools

In order to caluclate the super selection sectors we will define a cute tool this is called the charge complex. This will be something that will let us understand if $L$ is lagrangian. So we have
$$
L \hookrightarrow P \to P/L
$$
Then we can define a complex such as 
$$
\cdots \to F_2 \xrightarrow{d_2} F_1 \xrightarrow{d_1} F_0 = P
$$
such that there is a projection of $F_1 \to L$. Taking duals of the $d_i$ we can build $F_i^\ast$ in the other direction to obtain a chain complex. This is typically called the **charge complex**

> **<u>Notation:</u>** This is a special case of a **fusion complex**. 

The point is that having this complex we can ask all the calculation questions we are interested in. Here are some properties

**<u>Proposition:</u>** TFT

1. $H_0(F) = 0 \iff L=L^\perp$.
2. $H_{-1}(F) = Q_L$.

What is interesting is that this shows that $Q_L= \text{Ext}^1_R(P/L,R)$.

**<u>Definition:</u>** The higher ($i^{\text{th}}$ Dimensional) exitations are given by $Q^{i}_L = \text{Ext}^{i+1}_R(P/L,R)$.

So pointlike excitations are given by $Q^0_L$, then we get $Q_L^1$ for loop excitations and so on. 

Finally we can talk about codes! 

**<u>Definition:</u>** A code is **pointlike** if $Q_L^i =0$ for $i>0$.







