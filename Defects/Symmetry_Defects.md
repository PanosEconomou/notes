# Symmetries as Defects

This is a motivation for defining defects and their role in symmetry. The idea is to introduce defects in a familiar setting using conserved currents and then quickly stretching that definition to its limits to find what other things we could have.

These are stolen from

1.  [**Generalized Symmetries and their Gauging**](https://youtu.be/tj7JrjbclWA)
2. [**Generalized Global Symmetries**](https://arxiv.org/pdf/1412.5148)
3. [**Codimension-2 Defects and Higher Symmetries**](https://arxiv.org/pdf/2208.07367)
4. [**Path Integrals and Opeartors in QFT**](http://www.hartmanhep.net/topics2015/4-pathintegrals.pdf) 
5. [**Global Symmetries**](https://www.youtube.com/watch?v=GZvs-ae4YRA)

[toc]

# QFT as a Correlation Function Builder

We can think of any Quantum Field Theory as a way to take some data about an *“experimental”* configuration and spit out correlation functions. Take this correlation function, for example
$$
\langle \phi(x) \psi(y)\rangle.
$$
The data that we put is a couple of probes in spacetime $M$. One is for the value of field $\phi$ at point $x \in M$ and the other is for the value of field $\psi$ at point $y \in M$. Implicit in this notation, and often in most cases, are the boundary conditions we set on the fields.

A QFT is the mechanism by which we convert this data to this correlation function. Recently there is this [growing idea](https://www.youtube.com/watch?v=GZvs-ae4YRA) (2015, aka the year I learned Newton’s laws) that QFT hard to understand partly because we restrict the building blocks for the data we can have to point-like probes like the *field operators* $\phi(x)$. Sure we encounter nonlocal operators, such as the symmetry operators that we talk about here, but we usually treat them as composite objects that a theory *can have* but not as objects that are essential in building it. This leads to our first intuitive definition:

> The (possibly nonlocal) algebraic data fed into a QFT are called **defects**.

While this is a terrible definition, and we will give a more precise one soon, the first part of these notes is to recast our understanding of local operators into something that can be extended. Then we will use symmetry operators as a motivation of such nonlocal defects, and then start stretching the concept until it breaks.

# Invitation

A QFT comes with a spacetime manifold $M$. When probing the value of some field $\psi : M \to \mathbb{C}$ (almost all fields we probe can be casted into such functions) at a point $x \in M$ we call that a **field operator insertion** of the quantum field operator $\psi(x)$. But clearly we can insert more things.

Consider for example the correlation function
$$
\langle \psi(y) U\phi(x) \rangle,
$$
where $U$ is some symmetry transformation. The way this correlation function is written it is not clear what the "spacetime dependence associated" with the operator $U$ is, but it is clearly not a single point! $U$ is not a local quantum field.  

## Operators come with Manifolds

Let's be less sloppy by doing an example. Consider that our theory has a bunch of symmetry transformations that form a Lie group $G$. If that is the case, there is a Noether current $J \in \Omega^1(M)$ associated with any Lie algebra element. 

What we want to do is construct the operator $U$ that facilitates this symmetry action on the fields. To do this we usually construct a conserved charge by integrating $J$ over a codimension 1 surface $\Sigma \subset M$. That surface is usually a spacetime slice, but it doesn't have to be in general. 

Then we exponentiate the charge $Q(\Sigma)$ to get $U(\Sigma)$. But we already see the surface dependence of the operator $U$. Instead of $U$ being supported at a point, it is supported on a codimension 1 surface $\Sigma$ . This construction allows us to think of $U$ as a representation of some element $g \in G$ of our symmetry group. Making our notation explicit, the construction allows us see that 
$$
U_g(\Sigma) U_{h}(\Sigma) = U_{gh}(\Sigma),
$$
for all $g,h \in G$. 

Due to $Q$ being a symmetry charge it is conserved (aka independent of the spatial slice $\Sigma$ ) this construction makes the dependence of the surface unclear. Here is another construction of the operator $U(\Sigma)$ that makes the dependence on $\Sigma$ more explicit, and it is more illustrative of how to think of $U(\Sigma)$ as a *defect*.



## Path Integral Quantization

In path integral quantization we construct states on space-like slices using path integration from our asymptotic boundary with some prescribed boundary conditions. Going over all possible boundary conditions we can construct a set of states $\mathbb{H}_\Sigma$ associated with a codimension-1 spacelike slice $\Sigma$.

Specifically, given a spacelike slice $\Sigma$ and some boundary conditions in the past, a state $\Psi \in \mathbb{H}_\Sigma$ is a function of field configurations $\left.\phi\right|_\Sigma$ restricted on $\Sigma$ like so
$$
\Psi(\left.\phi\right|_\Sigma) = \int_{\left.\psi\right|_\Sigma = \left.\phi\right|_\Sigma} \mathcal{D}\psi\, e^{iS(\psi)},
$$
in this notation the dependence on the initial/asymptotic boundary conditions is implicit. Similarly, we can create the dual state as the one with the same boundary conditions but at the future boundary, and define their inner product by calculating their path integral. 



## Implementing Symmetry Operators by Twisting

We now have states that are defined on $\Sigma$ for our theory. Now we want to perform the symmetry action to define how $U$ acts on the states. Well we know how whatever global symmetry $G$ we have acts on the classical field configurations at the boundaries, i.e. $\psi \mapsto g\cdot \psi$ under the action of some $g \in G$ therefore we can construct $U_g(\Sigma)$ as the operator that takes in the untransformed states and spits out their transformed version.
$$
U_g(\Sigma) = \sum_{\psi} \ketbra{g\cdot \psi}{\psi},
$$
where the sum runs over all admissible boundary conditions of our theory. In generalized symmetry we refer to this as the **cut and twist** procedure. 

In summary, we cut our spacetime on $\Sigma$ found the Hilbert space $\mathbb{H}_\Sigma$ on that slice, and then proceeded by transforming all the states according to the symmetry transformations. 

In essence the Operator $U_g(\Sigma)$ applies the symmetry action to the field configurations in the past of $\Sigma$. 

Carrying this out we obtain the expected commutation relation with a field operator at $x \in \Sigma$ 
$$
U_g(\Sigma) \phi(x) = R_g \phi(x) U_g(\Sigma),
$$
where $R_g$ is the induced representation of the of the group element $g$ on the set of field operators. For example, if the symmetry is $G=U(1)$ then $R_g$ is a phase, and so on. 



## Abstracting

Let's go back to the correlation function picture. We have found a relation between the picture of an insertion of a symmetry operator $U(\Sigma)$ on $\Sigma$ and constructing the operator. Additionally we have seen that the surface $\Sigma$ doesn't matter as long as we don't change the path integration measure (i.e. as long as the surface doesn't cross any insertions).

What that really means is that correlation functions will be the same if we insert $U(\Sigma)$ or $U(\Sigma')$ for some, appropriately, deformed surface $\Sigma'$ (i.e. without crossing any other insertions).

We also learned what happens if a field operator lies on $\Sigma$, as well as what happens when two such defects collide. Now the question is what happens if $\Sigma$ encloses a defect?





## Open Manifolds?





# Symmetries Beyond Groups









# Gauging Using Defects 