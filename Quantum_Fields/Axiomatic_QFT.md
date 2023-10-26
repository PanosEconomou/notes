# Axiomatic QFT

Even though this is not a thing people are trying to do it. Here are some cool results that are compatible with the quantizations that we present all the time.

It would be tempting to think that since in Classical field theory the fields are sections of vector bundles over $M$, (and often can be reduced to $C^{\infty}(M)$ functions) this is not the case for a their quantum counterparts in QFT. A good description ends up being formulated in the language of distributions which is described [here](../Analysis/Distributions.md).

Here we use that language to talk about quantum fields

## Field Operators

[Elsewehere](./Conformal_Group.md) we have discussed the notion of a *quantum Hilbert space* $\mathbb{H}$ as a seperable complex Hilbert space with Hermitian inner product.  Then we also talked about how the observable states belong to the *projective space* $\mathbb{P}(\mathbb{H})$, which we often call $\mathbb{P}$, that has a physically induced seminorm $\delta : \mathbb{P}\times \mathbb{P} \to [0,1]$ that is called the *transition probability*. We have also looked at some preliminary results surrounding these constructions, about how Lie groups with representations on $\mathbb{P}$ can be canonically extended to Lie groups with representations on $\mathbb{H}$ etc. 

Here we will extend the notion of operators by allowing them to be defined in subspaces of $\mathbb{H}$ and not the entirety of $\mathbb{H}$.

**<u>Definition:</u>** An **operator** on $\mathbb{H}$ is a pair $(A,D_A)$ where $A:D_A\to \mathbb{H}$  complex linear map defined on a subsapce $D_A \subset \mathbb{H}$. We call an operator **desnsely defined** if $D_A$ is dense in $\mathbb{H}$. The **adjoint** of the operator $(A,D_A)$ is the operator $(A^\dagger,D_{A^\dagger})$ where

$$
D_{A^\dagger} \coloneqq \{u\in \mathbb{H} \mid \exists v\in \mathbb{H} \text{ s.t } \forall w\in D_A\ \langle v,w\rangle = \langle u,Aw \rangle\}\\
\langle A^\dagger u,v\rangle = \langle u, Av\rangle \ \ \forall u\in D_{A^\dagger}, v\in D_A
$$















