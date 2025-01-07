# String 2025

Collection of quick notes from strings

[toc]

## Fortuity (6/1)

Fortuity is a feature of black holes that is studied at the $n\to \infty$ limit but has consequences on finite $n$. 

**<u>Definition:</u>** A **fortuitous** operator $O$ is an operator that is cancelled by trace relations with some supercharge $Q$. If the operator vanishes regardless, then it is called **monotonous**.

**<u>Proposition:</u>** While monotnous operators have BPS states at higher $N$ limit, fortuitous operators have a BPS origin which is lost at higher $N$.

A toy model which ahs such operators is $\mathcal{N} = 2$ SYK with the following super charge
$$
Q = \sum_{i_1,i_2, \cdots, i_n} C_{i_1,i_2, \cdots, i_q} \psi_{i_1} \psi_{i_2} \cdots \psi_{i_q}
$$
and a Hamiltonian
$$
H = \{Q,Q^\dagger\}.
$$
**<u>Proposition:</u>** Here are some properties of the modeil

1. Solvable in large $N$ limit.
2. Contains a lot of zero states
3. The Hilbert space of the model can be graded by the number of fermions called the **R-Charge**. Therefore It is the space of forms. 

As a result, the cohomology problem is to find all the $Q$-closed forms. Why? Because there is an analogy of trace relations with forms. Classifying such forms finds the fortuitous operators. 



## Rational VOAs from higher TFTs (6/1)

**<u>Definition:</u>** A **rational** VOA describes a chiral half of a 2D rational CFT.

We can find 2D VOAs in 3D TFTs living in the boundary, or by inserting holomorphic boundary conditions. The interesting thing is that generic VOAs in the previous construction is not rational. What would the boundary conditions needed for the VOA to be rational?

The idea to solve this, is via some *twist* from the $\mathcal{N} = 2$ description of some specific TFT. Under the twist map, we can track down the OPEs. 



## Alebras in Field Theory and Gravity (7/1)

How can we observe things while living inside the system that we observe? Let’s rebuilt quantum mechanics

**<u>Definition:</u>** A quantum theory consists of

1. Observers form an associative algebra
2. Positive observables have positive eigenvalues. 
3. …

**<u>Corollary:</u>** The set of observables is a Hilbert space.

However, that Hilbert space does not describe the state of the universe, it is a Hilbert space for the observes, but nothing beyond the cosmic horizon.

To solve this we might want to consider entanglement wedges between regions here and beyond the horizon.

What kind of algebras are available to us?

1. **Bounded operators.** We experimantally can only measure bounded observables
2. **Operators are equivalent up to experimental measurement.** In other words any operator has a weak limit, meaning we can measure finitely many eigenvalues with finite precision.
3. The center of the algebra consists of scalar fields

1&2 make the algebra von neumann, and 3 makes it a **simple** Lie algebra. This is called a **Type III** algebra. This is enough to do quantum mechanics, but nothing else.

**<u>Definition:</u>** If such an algebra has a trace defined in a dense subset it is called **Type II**, and if in addition it has an irreducible representation in a Hilbert space it is called **Type I**. 

**<u>Theorem:</u>** A Type I algebra is the algebra of bounded operators on the Hilbert space to which it has an irreducible representation to. 

**<u>Definition:</u>** There are two classes of Tupe II algebra on weather or not the trace of the identity is finite.

An observer who can’t see the full universe you will not have access to a Type I algebra. You will only have to Type III. In particular we could do quantum mechanics but not introduce entropies, traces, density matrices, or whatever. However, it does have a dual through AdS/CFT. 

If the boundary theory is an $SU(N)$ gauge theoryfor some finite $N$ we can do some QM, but we don’t have notions such as causality and spacetime we need to take $N\to \infty$. The interesting thing is that at this limit, the time evolution operators become outer automorphisms of the algebra. 

Ok this might suck slightly, however, here is some argument where Type II algebras could be relevant to gravity. 

1. In gravity we can define things like entropy and other trace class operators, while we might not be able to define specifc states.
2. In gravity we compute “Traces” via things like the gravitational path integral, which are not actually traces. For example, the topology of the space by which we calculate the partition function through the gravitational path intrgral does not admit a trace interpretation. However, such operators do satisfy some trace relations.

In JT gravity there is an argument that path integral insertions can be thought of as traces of a Type II algebra with infinite identity trace. 



## Emergent Causality with Algebras (7/1)

Bulk spacetime can be generated with RG flow and as this evolution via scaling the boundary along the bulk direction. However this poofs all local physics! How can we bring back things like causality and whatnot?

This can be saved by considering subsystems. There is a proposal that an emergent boundary will correspond in a boundary algebra that is a Type III subalgebra of the global Von Neumann algebra. 



## Future Algebras (7/1)

Consider the assumption that all observables from now to infinty form a subalgebra. This would imply that the Hamiltonian is not an observable. The interesting result, is that a subregion of spacetime will contain a subalgebra! Moreover, there is some dictionary between the spacetime operatations, like inclusion, transformations, etc. and algebraic concepts. 













