# Warm Quantum Fields

What happens when there is more than a couple of particles in space? We will use thermodynamics to introduce perturbative corrections to QFT calculations. We start with a revision of the basic structures in statistical physics, formulated in a more abstract way such that it is directly applicable to the path integral formalism. Then play with the partition function for QFTs enough to derive corrections to the Green's functions of the theory and finally do some perturbative corrections to show that the temperature is meaningless and we were right to ignore it all along.

These notes rely on:

1. [Kapusta - Finite temperature field theory](https://library.oapen.org/bitstream/handle/20.500.12657/64016/1/9781009401968.pdf)
2. [Ramond - Field Theory](https://archive.org/details/fieldtheorymoder0000ramo_c7r4)
3. [Donoghue - The analytic continuation of distributions](https://www.sciencedirect.com/science/article/pii/S0079816908618899?via%3Dihub)
4. [Peskin - Introduction to Quantum Field Theory](http://home.ustc.edu.cn/~gengb/200923/Peskin,%20An%20Introduction%20to%20Quantum%20Field%20Theory.pdf)



[toc]

# Ensembles

The playing field of statistical physics is ensembles which is a term that comes from probability. The idea is that one has a measure space that denotes all the possible outcomes for the big system and then they add a probability measure that satisfies certain physical conditions such as the existence of temperature or chemical potential and so on. 

The definition of an Ensemble is useless because it is too general, but here it is but that's too abstract to make sense.

**<u>Definition:</u>** An **ensemble** $(\Gamma,\Sigma,\lambda,S)$ is a measurable space $\Gamma$ with sigma algebra $\Sigma$ and a map $\lambda:S\times \Sigma \to [0,1]$, where $S$ is some set and for any $s\in S$  $\lambda_s = \lambda(s,\cdot)$ is a measure on $(\Gamma,\Sigma)$. 

The definition of the other components is [here](../Analysis/Functional_Analysis.md) and honestly it isn't even that relevant. An ensemble is basically a space $\Gamma$ that contains all the configurations of the constituents of the system and a probability measure $\lambda$ slapped on top of that such that we can tell how likely some configurations are versus others. 

The physics of the ensemble are all inside $\lambda$. Usually it depends on the Hamiltonian in a cute way, or the chemical potential, temperature, and so on. These are the parameters in the set $S$. Usually $S$ is something like $\mathbb{R}$ representing time, where we get a different measure for every point in time. Other times $S$ can be the set of all temperatures or chemical potentials or both. Let's see how that works.

## Quantum Mechanical Canonical Ensemble

It is actually worth to go through this as an example because it will force us to think about interesting topics such as the spectral theorem and so on, plus it will be a useful motivating intuition for our subsequent definitions.

**<u>Example:</u>** *(Quantum Canonical Ensemble)* Consider a quantum system with Hilbert space $\mathbb{H}$ that describes the states for a single particle. Then we can consider the *Fock space* of that system which is the Hilbert space that contains all the possible combinations of this kind of particle and it is given by
$$
\mathbb{F} = \bigoplus_{n=0}^\infty \mathbb{H}^{\otimes n} = \mathbb{C}\oplus \mathbb{H} \oplus (\mathbb{H}\otimes \mathbb{H}) \oplus \cdots.
$$
In any physical theory one doesn't just get the Fock space by itself, but also gets an algebra of possibly bounded self adjoint operators $\mathcal{A}$, or observables, that contains familiar physics concepts such as the Hamiltonian $H$, the number operator $N$, etc. Honestly there is a generalization for algebras of unbounded operators but I don't know it, and I don't need to. It exists. 

Given all that, we need to convert $\mathbb{F}$ into a measure space by introducing a sigma algebra. We are lucky because there is a free sigma algebra in the projective Hilbert space given to us by the Born rule! 

**<u>Definition:</u>** The **projective Hilbert space** $P(\mathbb{H})$ is the set of all rays of a Hilbert space $\mathbb{H}$, namely
$$
P(\mathbb{H}) = \{[\psi] \subset \mathbb{H}\setminus \{0\} \mid \phi \sim \psi  \iff \exists \lambda \in \mathbb{C} \text{ s.t. } \psi = \lambda \phi\}.
$$
**<u>Corollary:</u>** The projective Hilbert space is isomorphic to the set of all projection operators to the lines in $\mathbb{H}$.



The projective space has a natural Khaler manifold structure with metric induced by the inner product in $\mathbb{H}$. Here is how.

**<u>Theorem:</u>** Consider a complex Hilbert space $\mathbb{H}$ with the canonical metric induced by its hermitian form
$$
g = dz^\mu\otimes dz_\mu,
$$
where $z^\mu$ are projection coordinates. Then $P(\mathbb{H})$ can be identified as the quotient of the unit sphere $S^{\mathbb{H}} \subset \mathbb{H}$ on the Hilbert space, and the induced metric, known as the **Fubini metric**, makes it a Khaler manifold.

This is way too complicated for what it is. It just means that the probability norm we are using for the born rule defines a metric on the projective space and more importantly a volume form there, including a measure. 

**<u>Example:</u>** Let $\psi, \phi \in \mathbb{H}$, then their geodesic distance in $R(\mathbb{H})$ induced by the Fubini metric is given by
$$
\gamma(\psi,\phi) = \arccos \frac{|\langle \psi,\phi \rangle|}{\langle \psi,\psi \rangle\langle \phi,\phi \rangle}.
$$
This can be thought of as their angle in the projective space which belongs in $[0,\pi/2]$. 

We actually don't care to measure $\mathbb{F}$ we only really care on measuring $P(\mathbb{F})$ which we can do with the Fubini metric. However, there is one super awesome theorem that can define the measures so much simpler. Here it is.

**<u>Theorem:</u>** *(Gleason's Theorem)* I probability measure is a Fubini probability measure $\mu$ on $P(\mathbb{H})$ iff there exists a unique positive semidefinite linear map $\rho:\mathbb{H}\to \mathbb{H}$ on $\mathbb{H}$ with unit trace $\text{Tr}\rho =1$ such that the measures density is given by the map
$$
\begin{align*}
p:P(\mathbb{H}) &\to [0,1]\\
\Pi &\mapsto \text{Tr\,}\rho \Pi,
\end{align*}
$$
where $\Pi : \mathbb{H} \to \mathbb{H}$ is an element of $P(\mathbb{H})$ thought of as a projection operator to a line in $\mathbb{H}$. 

Note that the integral of the Fubini form on $P(\mathbb{H})$ is normalized to 1 for this to work.

> **Intuition:** In physics we call $\rho$ a **density matrix**. The above theorem can be rephrased to any density matrix defines a distribution over the projective space. 
>
> In particular, the configurations in quantum mechanics are really only the elements projective space of the Hilbert space. This is the rigorous form of the statement: "Physical states are equivalent up to a phase." As a result, the density states are essentially a probability distribution over the set of such configurations. 
>
> In a more quantum mechanical language a density matrix can be thought of as the probability distribution that a quantum system would collapse to a specific state after observation. For example, the density matrix $\ketbra{0}$ in a spin-$\frac{1}{2}$ system is a probability distribution over all the possible quantum states that after observation the system would collapse to the $\ket{0}$ state. 
>
> This is similar to classical statistical mechanics, where the density of states is a distribution over the classical configurations.

So now we can add measures using density matrices which is honestly pretty cool! We are ready to define an ensemble.

**<u>Definition:</u>** Consider a quantum system with Hilbert space $\mathbb{H}$, a Hermitian map $H:\mathbb{F}\to \mathbb{F}$ (i.e. the Hamiltonian), and a Hermitian map $N:\mathbb{F} \to \mathbb{F}$ such that for any $\psi \in \mathbb{H}^{\otimes n}$ $N\psi = n\psi$ (i.e. the number operator). The **quantum mechanical grand canonical ensemble** is an ensemble $(P(\mathbb{F}), \Sigma, \mu)$ where $(P(\mathbb{F}),\Sigma)$ is the Fubini measure space on the projective space, and $\lambda: \mathbb{R}^2 \times \Sigma \to [0,1]$ is a collection of measures given by
$$
(\beta,\mu, A) \mapsto \lambda_{\beta,\mu}(A) = \frac{1}{Z(\beta,\mu)}\int_{A} \ast \text{Tr}\left(e^{-\beta H + \mu N}\Pi_{\bullet}\right),
$$
where $\ast$ is the Hodge star on $P(\mathbb{F})$ with the Fubini metric and $Z : \mathbb{R}^2 \to \mathbb{R}$ is a normalization factor called the **partition function** and given by
$$
Z(\beta,\mu) = \int_{P(\mathbb{F})} \ast \text{Tr}\left(e^{-\beta H + \mu N}\Pi_{\bullet}\right) = \text{Tr}\left(e^{-\beta H + \mu N}\Pi_{\bullet}\right),
$$
where the last equality is given by the spectral theorem. 

And here we have it! A fully fledged ensemble! Probably not the best first example for this, but this can serve as a blueprint for the later definitions. 

## Physical Motivation

Notice that the grand canonical ensemble is the ensemble given by the density matrix
$$
\rho = \frac{e^{-\beta H + \mu N}}{Z}.
$$
Let's go over the physical motivation for this. The grand canonical ensemble is supposed to describe a system where there are a bunch of particles at some fixed temperature that is connected to a reservoir such that adding or removing particles expends a fixed amount of energy. The total energy remains constant though. Let's motivate each condition separately. 

Such a system thermodynamically has to obey the first law of thermodynamics which in this case is written by
$$
dE = TdS - \mu dN,
$$
where we define the number of microscopic states that correspond to a particular macroscopic state to be
$$
\Omega = e^{S},
$$
by where $S$ is the entropy which is some function over the macroscopic configuration space. The probability is going to be proportional to $\Omega$ since it indicates the number of available states to our system with given macroscopic variables. Now consider the system attached to a big reservoir. This corresponds to taking the (categorical tensor) product of the two configuration spaces, so the total number of states $\Omega_T$ is going to be $\Omega_S \cdot \Omega_R$, i.e. the product of the available states of our system $S$ and the reservoir $R$. This implies that
$$
\Omega_T = \Omega_S\Omega_R \iff e^{S_T} =  e^{S_S + S_R} \iff S_T = S_S + S_R.
$$
Now assume that the reservoir is *much bigger* than our system. This really means that if we change its state variables the reservoir won't budge. To be more precise, we focus on the Reservoir. It is a system whose total energy is given by
$$
E_R = E_T - H,
$$
where $H$ is the Hamiltonian of our system. The issue is that the system is **not in equilibrium** unless $H=0$. Therefore our thermodynamics only work for that regime. Here is where the large assumption comes in. The picture below is the intuition of what it means for the two energies to be close. The bottom blob is the surface in the macroscopic configuration space where the total energy is $E_R$, while the other surface is the one with the Hamiltonian.

![macroscopic-phase-space](_Thermal_QFT.assets/macroscopic-phase-space.svg)

What the condition means is that these surfaces are physically close in the configuration space. In other words, for every path $\gamma$ from the bottom surface to the top, defined by some evolution of the Hamiltonian any observable $O$ can be written as
$$
O\circ \gamma(\epsilon) = O_R + \frac{\partial O}{\partial \epsilon} \epsilon + \mathcal{O}(\epsilon^2),
$$
where $\epsilon$ is some small unitless parameter. In addition to that, we have that at any point in the configuration space
$$
TdS_R = \mu dN_R + dE_R.
$$
Therefore we can now calculate the difference in entropy. This directly leads to the weighting factor we have introduced above.








## Partition Function

Almost by accident we got introduced to the partition function in the definition of the grand canonical ensemble above as this normalization constant. It very often happens to be a smooth function and it can give us information about all thermodynamic observables by taking appropriate derivatives of it. In some sense, one has an Ensemble simply by knowing the partition function. 

To see how that is true we will first define the *average of observables* in our thermodynamical system. 

**<u>Definition:</u>** Let $(\Gamma,\Sigma,\lambda,S)$ be an ensemble and $f:\Gamma \to X$ be a map from the configuration space to some Banach space $X$. Then the **ensemble average** of $f$ is a map $\langle f \rangle : S\to X$ given for any $s\in S$ by
$$
\langle f \rangle(s) = \int_{\Gamma} f d(\lambda(s)).
$$
where the integral is the *Bochner integral* (generalization of Lebesgue integral for Banach spaces).

With this we can see that the partition function is very close to the ensemble average. In particular the partition function helps us define a probability measure using a volume integral. 

**<u>Proposition:</u>** Let $\mu$ be a measure on $(\Gamma,\Sigma)$ then the measure $\lambda : \Sigma \to \bar{\mathbb{R}}$ defined for all $A \in \Sigma$ by
$$
\lambda(A) = \frac{\mu(A)}{Z},
$$
where $Z = \mu(\Gamma)$ is the partition function, is a probability measure.

***Proof:*** Clearly $\lambda(\Gamma) = \frac{\mu(\Gamma)}{\mu(\Gamma)} = 1$ for finite $Z$. The proof also extends to the other case using appropriate limits.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
So in some sense, the partition function can help us relate one measure as a function of another, but it can also help us obtain ensemble averages. Specifically check out this example.

**<u>Example:</u>** *(Cool stuff on manifolds)* Let $\Gamma$ be an orientable Riemannian manifold and consider it as a measure space using integration of top forms. Now we can define a collection of measures $\mu : S \to C^\infty(\Gamma)$ parameterized by another manifold $S$. Given such a collection of measures, one can define a partition function $Z:S\to \mathbb{R}$ obtained for any $s\in S$ by
$$
Z(s) = \int_{\Gamma} \ast \mu(s).
$$
Then one can define the collections of probability measures $\lambda: S \to C^\infty(\Gamma,I)$ by $\lambda = \mu / Z$. Then we have that for any vector $X_s \in T_sS$ for some $s\in S$
$$
\left\langle \frac{X\mu}{\mu} \right\rangle = X\log Z.
$$
The proof for this is through the following calculation
$$
X\log Z = \frac{XZ}{Z} = \frac{1}{Z} \int_{\Gamma} \ast X\mu =\int_{\Gamma} \frac{X\mu}{\mu} \ast \frac{\mu}{Z} = \int_{\Gamma}\frac{X\mu}{\mu} \lambda.
$$
This is a pretty powerful fact, because usually in thermodynamics $S$ is some set of thermodynamic parameters $\mu$ is an exponential function that includes all of our interested quantities like the Hamiltonian, number of particles, etc.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
Given such a successful construct we would like to use it in our path integral formalism.



# Partition Function in QFT

As we have seen in the previous section a partition function doesn't exist without a reference to a measure. In quantum field theory the configuration space is a projective space of a Fock space that is comprised out of all the field operators. There we have introduced a measure called *the path integral* that allows us to integrate over everything and assign probabilities to each state just like in the quantum mechanical grand canonical ensemble we saw in the previous example. We want to find the partition function with respect to that measure in such a way that it encodes the idea of temperature. 



## Aside on Complexification

Let's begin by considering what is the condition under which one can continue a real valued distribution to a complex analytic function in some sense. Let's first define the object that would make sense in this context.

**<u>Definition:</u>** Let $U\subset \mathbb{C}$ and $\Omega \subset \mathbb{R}$ then an **analytic distribution valued function** is a map $T:U \to \mathcal{D}^\ast(\Omega)$ such that for any $\phi \in \mathcal{D}(\Omega)$ the complex valued function $T(\phi) : U\to \mathbb{C}$ is analytic. 

Recall that $\mathcal{D}(\Omega)$ contains test functions of the form $\phi:\Omega \to \mathbb{C}$. The relevant theorem is as follows.

**<u>Theorem:</u>** Let $V \subset \mathbb{C}$ be an open subset of the complex plane such that $U\subset V$ is a proper subset. Additionally, consider an analytic distribution valued function $T:U\to D^\ast(\Omega)$ for some measure space $\Omega$. Then there exists a unique analytic valued function $T':V\to D^\ast(\Omega)$ such that for any test function $\phi \in D(\Omega)$ and point $z \in U$
$$
T_z(\phi) = T'_z(\phi),
$$
if and only if for all such test functions $T(\phi):U\to \Omega$ can be analytically continued to $V$.

This result is what facilitates Wick rotation in field theory. The fields are such distribution valued functions usually with discrete singular support. 



## Transition Amplitudes

In Quantum field theory we want to calculate things like the amplitude that a state, after time evolution, will evolve to a different state. These are called transition amplitudes and can be calculated with the path integral prescription that we briefly describe here. 

To make this more precise consider the eigenstates of the field operator $\phi(x,0)$ defined by
$$
\phi(x,0) \ket{\alpha} = \alpha(x) \ket{\alpha}, 
$$
where $\alpha$ is some section of the appropriately chosen time slice. Following a lattice limiting procedure one can derive that the amplitude between two field eigenstates is given by
$$
\bra{\alpha} e^{-iHt} \ket{\beta} = \int_{\Omega_{\alpha\beta}} \mathcal{D} \phi\,^{i\int_0^t L(\phi)dt }
$$
where the domain $\Omega_{\alpha\beta}$ is populated by the functions with appropriate boundary conditions like so
$$
\Omega_{\alpha\beta} \coloneqq \{\phi \in \Gamma^\infty(E) \mid \iota^\ast_0\phi = \beta, \iota^\ast_t\phi = \alpha\},
$$
where $\iota_t : \Sigma_t \to M$ is the inclusion map of the corresponding time slice. The partition function looks extremely similar to this! So let's try it.



## Free Theory Partition Functions

These path integrals are really only well defined in free theories. So let's try  to do one derivation and then we can move on to the interacting ones.

We have seen from the previous example of the quantum mechanical phase space that the appropriate partition function is given by
$$
Z = \text{Tr\,} e^{-\beta H},
$$
 where $\beta \in \mathbb{R}$ is some real number related to the temperature. We could create a field theoretic equivalent of this statement by calculating the trace in the basis of eigenstates of the field operators. Without loss of generality we will do this for a single field since theories with multiple fields can be written as single field theories. 

Specifically, we would have 
$$
Z = \int d\alpha \bra{\alpha} e^{-\beta H} \ket{\alpha},
$$
where the integration is carried out over all field configurations. The cool thing is that we are already familiar with such constructions because we can Wick rotate. In other words, we analytically continue our fields to the complex plane such that plugging in $\tau =it$ in the fields is a sensible thing to do. Once we do so, the action changes because we are integrating over the imaginary axis instead. Specifically, we obtain
$$
Z=\int d\alpha \int_{\Omega_{\alpha\alpha}} e^{\int_0^\beta L_E d\tau}.
$$
 Now is where things get suuuuper cool. What we have here is that we are integrating the domain $\Omega_{\alpha\alpha}$ over all configurations $\alpha$. One such element of $\Omega_{\alpha\alpha}$ is one that starts at $\tau = 0$ at $\alpha$ and ends at $\alpha$  at $\tau = \beta$. Therefore this is sort of like a field on a circle. Here is a picture.

![Compactification-picture](_Thermal_QFT.assets/Compactification-picture.svg)

In this picture we have a circle with perimeter $\beta$ parameterized by arc-length $\tau$ on top of which two fields satisfying the boundary conditions are depicted in blue. As a result we can notice that integrating over all the possible $\alpha$ we are summing over all the possible field configurations on this circle without double counting (since each set of fields differs at at least one point). Therefore the partition function for equilibrium temperature $\beta$ can be equivalently written as this trace over a field theory on a circle with perimeter $\beta$.  This yields,
$$
Z = \int \mathcal{D}\phi \, e^{\int_{S^1} L_E(\phi)},
$$
where the integral is taken over all the fields in this new compactified configuration. 



