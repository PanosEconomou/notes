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

A QFT is the mechanism by which we convert this data to this correlation function. Recently there is this [growing idea](https://www.youtube.com/watch?v=GZvs-ae4YRA) (2015, aka the year I learned Newton’s laws) that QFT hard to understand partly because we restric the building blocks for the data we can have to point-like probes like the *field operators* $\phi(x)$. Sure we encounter nonlocal operators, such as the symmetry operators that we talk about here, but we usually treat them as composit obects that a theory *can have* but not as objects that are essential in building it. This leads to our first intuitive definition:

> The (possibly nonlocal) algebraic data fed into a QFT are called **defects**.

While this is a terrible definition, and we will give a more precise one soon, the first part of these notes is to recast our understanding of local operators into something that can be extended. Then we will use symmetry operators as a motivation of such nonlocal defects, and then start stretching the concept until it breaks.

# Invitation

A QFT comes with a spactime which is a manifold we call $M$. When probing the value of some field $\psi : M \to \mathbb{C}$ (almost all fields we probe can be casted into such functions) at a point $x \in M$ we call that a **field operator insertion** of the quantum field $\psi(x)$. 

The effect of an operator insertion effect on the spacetime configuration can even be appreciated with a path integral! In particular the path integral 



## Operators come with Manifolds





## Path Integral Quantization





## Implementing Symmetry Operators by Twisting





## Open Manifolds?





# Symmetries Beyond Groups









# Gauging Using Defects 