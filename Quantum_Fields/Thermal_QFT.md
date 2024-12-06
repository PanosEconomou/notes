# Warm Quantum Fields

What happens when there is more than a couple of particles in space? We will use thermodynamics to introduce perturbative corrections to QFT calculations. We start with a revision of the basic structures in statistical physics, formulated in a more abstract way such that it is directly applicable to the path integral formalism. Then play with the partition function for QFTs enough to derive corrections to the Green's functions of the theory and finally do some perturbative corrections to show that the temperature is meaningless and we were right to ignore it all along.

These notes rely on:

1. [Kapusta - Finite temperature field theory](https://library.oapen.org/bitstream/handle/20.500.12657/64016/1/9781009401968.pdf)
2. [Ramond - Field Theory](https://archive.org/details/fieldtheorymoder0000ramo_c7r4)



[toc]

# Ensembles

The playing field of statistical physics is ensembles which is a term that comes from probability. The idea is that one has a measure space that denotes all the possible outcomes for the big system and then they add a probability measure that satisfies certain physical conditions such as the existence of temperature or chemical potential and so on. 

The definition of an Ensemble is useless because it is too general, but here it is but that's too abstract to make sense.

**<u>Definition:</u>** An **ensemble** $(\Gamma,\Sigma,\mu)$ is a measurable space $\Gamma$ with sigma algebra $\Sigma$ and a map $\mu:S\times \Sigma \to [0,1]$, where $S$ is some set and for any $s\in S$  $\mu_s = \mu(s,\cdot)$ is a measure on $(\Gamma,\Sigma)$. 

The definition of the other components is [here](../Analysis/Functional_Analysis.md) and honestly it isn't even that relevant. An ensemble is basically a space $\Gamma$ that contains all the configurations of the constituents of the system and a probability measure $\mu$ slapped on top of that such that we can tell how likely some configurations are versus others. 

The physics of the ensemble are all inside $\mu$. Usually it depends on the Hamiltonian in a cute way, or the chemical potential, temperature, and so on. These are the parameters in the set $S$. Usually $S$ is something like $\mathbb{R}$ representing time, where we get a different measure for every point in time. Other times $S$ can be the set of all temperatures or chemical potentials or both. Let's see how that works.

## Example: Quantum Mechanical Canonical Ensemble

It is actually worth to go through this as an example because it will force us to think about interesting topics such as the spectral theorem and so on, plus it will be a useful motivating intuition for our subsequent definitions.

**<u>Example:</u>** *(Quantum Canonical Ensemble)* Consider a quantum system with Hilbert space $\mathbb{H}$ that describes the states for a single particle. Then we can consider the *Fock space* of that system which is the Hilbert space that contains all the possible combinations of this kind of particle and it is given by
$$
\mathbb{F} = \bigoplus_{n=0}^\infty \mathbb{H}^{\otimes n} = \mathbb{C}\oplus \mathbb{H} \oplus (\mathbb{H}\otimes \mathbb{H}) \oplus \cdots.
$$
In any physical theory one doesn't just get the Fock space by itself, but also gets an algebra of possibly bounded self adjoint operators $\mathcal{A}$, or observables, that contains familiar physics concepts such as the Hamiltonian $H$, the number operator $N$, etc. Honestly there is a generalization for algebras of unbounded operators but I don't know it, and I don't need to. It exists. 

Given all that, we need to convert $\mathbb{F}$ into a measure space by introducing a sigma algebra. There is no obvious way to it, a priori, BUT we can cheat by using the algebra of observables $\mathcal{A}$ because anyway anything physical will be related to it. The reason for that is that every self adjoint operator can define a sigma algebra in a subset of $\mathbb{F}$. 

Let's see how that works. 

The next thing we need is the definition of a 

**<u>Definition:</u>** 











To do this we need some tools that will help us to work with bounded Hermitian operators. The first tool is the *spectrum.* The spectrum is a generalization of the set of eigenvalues of an operator. This makes sense to consider from a physics standpoint, because all the physics is are contained in the set of eigenvalues of such Hermitian operators. 

**<u>Definition:</u>** Let $A:\mathbb{H}\to \mathbb{H}$ be a bounded linear self adjoint (Hermitian) operator on a complex Hilbert space $\mathbb{H}$. A complex number $\lambda \in \mathbb{C}$ is in the **spectrum of** $A$, denoted by $\sigma(A)$, if the inverse map of $A - \lambda I$ is not linear and bounded. Compactly we have
$$
\sigma(A) \coloneqq \{\lambda \in \mathbb{C}\mid (A-\lambda I)^{-1} \text{ not bounded linear} \}.
$$
Notice that if $\lambda$ is an eigenvalue, the inverse is not even defined, so all the eigenvalues live in the spectrum of $A$.













 