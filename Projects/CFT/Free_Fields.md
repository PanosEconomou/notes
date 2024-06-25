# Free Conformal Field Theories

It is what you think it is. Examples of CFTs for Free fields. We start with classical field theory, formalizing some stuff, and then see how we can move on to the CFT formalism at the right limits. 

[TOC]



# Classical Free Fields

Classically a field is a section of a some associated vector bundle to a principal bundle over spacetime. For example, each (pseudo) Riemannian manifold canonically admits a spin structure and a frame vector subbundle called the spin bundle. The spin bundle is a principal bundle over the manifold with fiber the canonical spin group associated to the particular manifold. Picking different representations of the spin group we get different associated vector bundles and thus we can create all of our classical fields as sections of these associated vector bundles, from bosons to spinors. 

In this we will not go into this level of detail in order to need principal bundles for our construction. Therefore these constructions might seem a bit physically unmotivated, but its good to keep in mind that they have very natural origins in the symmetry group of the spacetime manifold we are working on. 



## Lagrangian formalism

We start with a general description of the formalism before we apply it to particular examples. 

**<u>Definition:</u>** Given a vector bundle $\pi: E \to M$ over a (pseudo) Riemannian manifold $M$ of dimension $n$ a **Lagrangian** on $M$ is a map

$$
\mathcal L : \Gamma^\infty(E) \to \Omega^n(M).
$$

Similarly, an **action of a Lagrangian** $\mathcal L$ is a continuous map $S : \Gamma^\infty(E) \to \mathbb R$ such that for any $\phi \in \Gamma^\infty(E)$

$$
S(\phi) = \int_M\mathcal L(\phi).
$$

**<u>Remark:</u>** The smoothness of the Lagrangian is given by a canonical extension of the notion of smoothness. While $\mathcal \Gamma^\infty(E)$ is not a finite dimensional manifold, it admits a smooth structure as a Frechet space, therefore there is a canonical smoothness definition of $\mathcal L$ as a map of Frechet spaces. We are not going to use that definition, but still, it exists. 

**<u>Definition:</u>** We call $\Gamma^\infty_0(E)$ the set of **compactly supported sections of** $E$. Then a **field** $\phi \in \mathcal \Gamma^\infty(E)$ of a particular Lagrangian $\mathcal L : \Gamma^\infty(E) \to \Omega^n(M)$ is a smooth section such that for any compactly supported section $\eta \in \Gamma^\infty_0(E)$ the following is true

$$
\left.\frac{d}{d \epsilon}\right|_0 S(\phi + \epsilon \eta) = 0.
$$

This is known as the **principle of least action.** 

Symmetries of the Lagrangian can lead to cool concepts such as conserved currents and so on. These are more completely explored in other notes here, but this is a quick recap.

**<u>Definition:</u>** A **current** on an $n$-dimensional Manifold $M$ is an $n-1$ form $J \in \Omega^{n-1}(M)$. If the form is closed then the current is **conserved.** 

**<u>Remark:</u>** In physics we often don't use the language of forms to refer to currents, instead we refer to them as rank 1 tensors through Hodge duality. So sometimes we refer to currents as the form $\ast J \in \Omega^1(M)$, but not always so it will be clear from context what we mean.

**<u>Remark':</u>** Given a vector bundle $\pi: E\to M$ we often interchange our definition of current to what we will from now call a **current map** $J: \Gamma^\infty(E)\to \Omega^{n-1}(M)$, which is map that takes in a field and gives the current. The current map is **conserved** if for any field $\phi \in \Gamma^\infty(E)$ then $dJ(\phi) = 0$. 

Last thing we need to define is a conserved charge.

**<u>Definition:</u>** Let $J \in \mathcal \Omega^{n-1}(M)$ be a conserved current on an $n$ dimensional manifold $M$ and $\Sigma$ be a codimension one smooth foliation of $M$ (i.e. $\Sigma_t \subset M$ is an $n-1$ dimensional submanifold of $M$ with canonical inclusion map $\iota_t$ for all $t \in I \subset \mathbb R$). Then a **conserved charge** on the foliation is a map $Q_J : I \to \mathbb R$ such that

$$
t \in I \subset \mathbb R \mapsto Q_J(t) = \int_{\Sigma_t} \iota_t^\ast J.
$$

**<u>Corollary:</u>** A conserved charge $Q_J$ is such that

$$
\frac{d Q_J}{dt} =  0.
$$

There is a nice way we can find conserved currents using local symmetries. In particular consider this really famous Theorem. 

**<u>Theorem:</u>** *(Noether's Theorem)* Let $G$ be a Lie group with a smooth action $\rho: G \to \text{Aut}(M)$ on some Manifold $M$ with Lagrangian $\mathcal L$ such that for any $g \in G$ the Lagrangian is invariant, i.e.

$$
\rho(g)^\ast \mathcal L = \mathcal L
$$

Then for each independent related vector field $\tilde X \in \mathfrak X(M)$ of a Lie algebra element $X \in \mathfrak g$ there exists an independent conserved current map $J_X : \Gamma^\infty(E) \to \Omega^{n-1}(M)$.

**<u>Definition:</u>** A linear map $T : \Gamma^\infty(E) \to \Omega^1(M,E)\otimes \Omega^1(M)$ such that for any field $\phi \in \Gamma^\infty(E)$ and vector field $X \in \mathfrak X(M)$ we have that $\ast T(\phi)(X)$ is a conserved current is called a **stress-energy tensor**. 

**<u>Remark:</u>** Notice that since the currents are not unique for each related vector field, then there can be multiple stress tensors for a given Lagrangian.



With all the definitions out of the way, we are now ready to talk about free field theories.



## The Free Scalar Field

Possibly the simplest example of the formalism above is the free scalar field, because we don't even have to talk about a vector bundle, since Sections of the canonical real line bundle over a manifold can be identified with smooth functions over the manifold. We will avoid talking about this example in the line bundle terms just to show an alternative way, but we will generalize this anyway in the next section about vector bosons.

**<u>Definition:</u>** Given a (pseudo) Riemannian manifold $(M,g)$ the **free scalar field Lagrangian** $\mathcal L : C^\infty(M) \to \Omega^n(M)$ is given by 

$$
f \in C^\infty(M) \mapsto df\wedge \ast df \in \Omega^n(M).
$$

Notice that the hodge duality is given by the metric $g$ directly. 

Now let's fix our attention to particularly nice manifolds $M$ that have a global isometry group $I(M)$ with the defining group action on $M$. This structure does not exist in general, but in most manifold we use in physics, like $\mathbb R^{p,q}$ the group is well defined. 

**<u>Example:</u>** Under the transformations of the isometry group, a stress energy tensor for this theory is given by the linear map

$$
\phi \in C^\infty(M) \mapsto d\phi \otimes d\phi.
$$

***Proof:*** To show this construction we calculate conserved currents. In particular consider a lie algebra element of the isometry group lie algebra $X \in \mathfrak i(M)$, and a field $\phi \in C^\infty(M)$. Then we can see that any such element, though the exponential map has an induced map like so

$$
\phi \mapsto (e^X) ^\ast \phi,
$$

 where the action is given by the induced representation of the Lie algebra from the defining action of the isometry group. For example in the case of $M = \mathbb R^n$ we have that for any $p \in \mathbb R^n$

$$
(e^X)(p) = p + \tilde X,
$$

where $\tilde X \in \mathfrak X(\mathbb R^n)$ is the related vector field to $X \in \mathfrak i(\mathbb R^n)$. Therefore we see that $(e^X)^\ast \phi = \phi + \tilde X\phi$. This formula is true on a general manifold $M$ as well with a well defined isometry group. To see how it works we will interrupt the proof for the following cool facts about Lie groups.



**<u>Theorem:</u>** *(Induced Lie algebra representation on vector bundles)* Consider $\pi:E\to M$ a vector bundle over a manifold $M$ with connection $\nabla : \Gamma^\infty(E)\times \mathfrak X(M) \to \Gamma^\infty(M)$, and the local isomorphism group $I(M)$ of $M$. Then there exists a unique, up to scaling, Lie algebra representation $\bar \rho : \mathfrak i(M) \to \text{End}(\Gamma^\infty(M))$ given by 

$$
\bar \rho(X) = \nabla_{\tilde X},
$$

where $\tilde X \in \mathfrak X(M)$ is the fundamental vector field of $X \in \mathfrak i(M)$.

***Proof:*** Since the group is the local isometry group, the fundamental vector fields of any element of the Lie algebra are Killing. Therefore, we know that

$$

$$

 

















