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



## Moving Sections of Vector Bundles

Very often in physics we have a vector bundle (for example a spinor bundle) and we want to take its derivative, or see how it acts under an infinitesimal local transformation. That transformation can either be a Gauge transformation or a local isometry. We can bundle (see what I did there?) all of this intuition using the language of principal bundles.

Here are some more detailed notes about what a [principal bundle](../../Geometry/Bundles.md#principal-bundles) is. Without rewriting the definitions, we can give some intuition. A To construct a principal bundle we need a Lie group $G$ and a base manifold $M$. We construct the bundle $P$ such that it is a bundle over $M$ with fiber $G$ and with a smooth Lie group action $G\times P \to P$. So now we basically have a way to take sections of this bundle, and create local transformations on the manifold! That's why we introduce them.

If I give you a representation $\rho: G \to \text{Aut}(V)$ of the gauge group to some vector space $V$ one can form an **associated vector bundle** which is a quotient of the principal bundle in such a way that we construct a vector bundle with fiber $V$ where elements of the principal bundle canonically act on! We usually write the associated vector bundle like so $P\times_\rho V$. Now we can pick our fields to be sections of this bundle since it is bundle isomorphic to our original vector bundle $E$. Doing so we have gained a powerful way of transforming our fields. 

In the notes linked above all the formal definitions of these objects are outlined, but one cool result, is that by picking a Gauge Field, i.e. Lie algebra valued one form $A \in \Omega^1(P,\mathfrak g)$ on $P$, one can come up with a connection and thus an exterior covariant derivative on $V$ that is a Lie algebra reprsentation of $\mathfrak g$ on $\Gamma^\infty(P\times_\rho V)$. This is an amazing result! In the following we will assume the existence of this connection and denote it as $\nabla$.

Words aside here is how a connection helps us calculate the infinitesimal transformations of a field!

**<u>Proposition:</u>** Let $\phi \in \Gamma^\infty(E)$ be a section of a vector bundle $\pi : E\to M$ over some smooth manifold $M$ with connection $\nabla : \Gamma^\infty(E) \times \mathfrak X(M) \to \Gamma^\infty(E)$. Let $X \in \mathfrak X(M)$ be a nonvanishing vector field. Then the transformed version of the $\phi$ under the flow of $\epsilon X$ for some $\epsilon > 0$ is given by

$$
\tilde \phi_\epsilon = \phi + \epsilon \nabla_X \phi + \mathcal O(\epsilon^2)
$$

This is going to be really useful when taking variations. In fact we can define the variation like so.

**<u>Definition:</u>** Let $\mathcal L : \Gamma^\infty(E) \to \Omega^n(M)$ be a Lagrangian. A **variation of the Lagrangian under a vector field** $X \in \mathfrak X$ at $\phi \in \Gamma^\infty(E)$ is given by

$$
\left.\frac{d}{d\epsilon}\right|_0 \mathcal L(\tilde\phi_\epsilon) = \lim_{\epsilon \to 0} \frac{1}{\epsilon}\left[\mathcal L(\phi + \epsilon\nabla_X\phi) -\mathcal L(\phi) \right]
$$

**<u>Remark:</u>** Note that the second order term inside the Lagrangian would vanish anyway because it would be subleading. However, from our discussion before we have argued that there would be a connection that acts as a representation of the Lie algebra! Therefore a variation stripes out all the properties of a transformation except from the Lie algebra properties. This is pretty cool, because we can get so much physics without knowing the full details of the transformation group, but rather knowing about the algebra. 

**<u>Corollary:</u>** Given a Lie group $G$ with a smooth action on a manifold $M$, then there is an induced Lie algebra representation $\mathfrak g \to \mathfrak X (M)$ given by $X\in \mathfrak g \mapsto \tilde X \in \mathfrak X (M)$ which maps Lie algebra elements to their related vector fields. Given a one parameter group $\{f_\epsilon = e^{\epsilon X}\}_{\epsilon \in I \subset \mathbb R} \subset G$ for some $X \in \mathfrak g$ we have that the variation of any Lagrangian $\mathcal L$ on $E$ at $\phi \in \Gamma^\infty(E)$ is given by

$$
\left.\frac{d}{d\epsilon}\right|_0 \mathcal L(\tilde\phi_\epsilon) = \lim_{\epsilon \to 0} \frac{1}{\epsilon}\left[\mathcal L(\phi + \epsilon\nabla_{\tilde X}\phi) -\mathcal L(\phi) \right] = 0
$$

 If the Lagrangian is invariant under that transformation and $\phi$ is a field.

by This is the central piece of information that we use to calculate Noether currents and so on! We will be using it constantly in the coming sections. 

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

where $\tilde X \in \mathfrak X(\mathbb R^n)$ is the related vector field to $X \in \mathfrak i(\mathbb R^n)$. Therefore we see that $(e^X)^\ast \phi(x) = \phi(x + X)$, which is a much simpler version of the first proposition in the previous section. Before we carry the variation we show that for any $\phi \in C^\infty(M)$

$$
\begin{align}
(e^X)^\ast \mathcal L(\phi) 
&= (e^X)^\ast(d\phi \wedge \ast d\phi)\\
&= d\phi \wedge \ast d\phi,
\end{align}
$$

 therefore the Lagrangian is invariant under this transformation. As a result,As  from the Corollary of the previous section we know that the variation of the Lagrangian will also be invariant. Let's calculate it.

$$
\begin{align}
0 &=\lim_{\epsilon\to 0} \frac{1}{\epsilon} \left[\mathcal L (\phi + \nabla_{\tilde X} \phi) - \mathcal L(\phi)\right]\\
&= \lim_{\epsilon\to 0} \frac{1}{\epsilon} \left[\mathcal L (\phi + \tilde X \phi) - \mathcal L(\phi)\right]\\
&= 2 d\phi \wedge \ast d(\tilde X\phi)\\
&= \tilde X\phi\,  d\ast d \phi + d \ast (\tilde X\phi \, d\phi)\\
&= \tilde X\phi\,  d\ast d \phi + d \ast (d\phi (\tilde X) \, d\phi).
\end{align}
$$

More specifically if $\phi$ is a field, then by the field equation $d\ast d \phi = 0$ which we didn't prove here, but to show it we do exactly the same procedure we find that:

$$
d\ast\left[d\phi(\tilde X) d\phi\right] = 0.
$$

Therefore the conserved current is

$$
J_{\tilde X} = \ast\left[d\phi(\tilde X) d\phi\right] = \ast T(\tilde X).
$$

As a result we can read off that a valid stress tensor is

$$
\begin{equation}
T = d\phi \otimes d\phi.  \tag*{$\Box$}
\end{equation}
$$


 ## Free Vector Fields 

Free vector fields include both vector bosons as well as spinors. These are not necessarily tensor fields! They could be anything else. Yet, tensor fields are a subcategory of this, but we usually use a different, more convenient, equivalent notation to talk about them. Here we will do it in some abstract way that encompasses all these cases with the goal of obtaining the stress tensor in general. 

For this section we will make reference to the following ingredients for our Free field theory. Assume that the following objects are defined:

1. A (pseudo) Riemannian manifold $(M,g)$ of dimension $n \in \mathbb N$
2. A vector bundle $\pi :E \to M$  over $M$ of rank $k < n$ with fiber $V$ some real inner product space with inner product $\langle \cdot , \cdot \rangle : E\times E \to \mathbb R$ (Complex works just fine but we have to take conjugates on our inner products.) 
3. The induced bundle metric $\langle \cdot , \cdot \rangle_E \in \Gamma^\infty(E^\ast \otimes E^\ast)$.
4. A connection $\nabla : \Gamma^\infty(E) \times \mathfrak X(M) \to \Gamma^\infty(E)$ on the vector bundle. And its induced exterior covariant derivative.

And that's it! We will also need to address something. So far we have a canonical wedge product of twisted forms which gives a twisted form with values on the tensor product bundle. We want to have a wedge product that gives regular k forms in order to form the Lagrangian. Thankfully having a bundle metric we can immidiately get that using the definition below. To write it we will first need this lemma.

**<u>Lemma:</u>** Given any twisted form $\omega \in \Omega^m(M,E)$ there exist $k$ forms $\omega^i \in \Omega^m(M)$ such that $\omega = \omega^i \otimes e_i$ for any collection of basis sections $\{e_i\}_{i=1}^k \subset \Gamma(E)$. 

Now the definition of the wedge product.

**<u>Definition:</u>** Let $\sigma \in \Omega^l(M,E), \eta \in \Omega^m(M,E)$ their **reduced wedge product** is the form $\omega \wedge_M\eta \in \Omega^{l+m}(M)$ given by 

$$
\omega\wedge_M \eta = \omega^i\wedge \eta^j\, \langle e_i ,e_j\rangle_E.
$$

This wedge product still has the same properties as the one that we have seen before. This can be also seen as taking the trace of the canonical wedge product. 

We are finally ready to define the following as the free field Lagrangian.

**<u>Definition:</u>** A **free field Lagrangian** $\mathcal L_{F} : \Gamma^\infty(E) \to \Omega^n(M)$ on $M$ is such that for any $\phi \in \Gamma^\infty(E)$

$$
\mathcal L_F(\phi) = \ast \langle \nabla \phi,\nabla \phi \rangle_E = d_\nabla \phi \wedge_M \ast d_\nabla \phi.
$$

**<u>Remark:</u>** The cool thing is that this Lagrangian reduces to the free scalar field Lagrangian we discussed in the previous section if $E$ is the real line bundle.



We are now ready to calculate a stress tensor.

**<u>Theorem:</u>** A stress energy tensor for the free field Lagrangian is given by the linear map

$$
\phi \in \Gamma^\infty(E) \mapsto \langle\nabla\phi \otimes \nabla\phi\rangle_E \in \Gamma^\infty(TM\otimes TM).
$$

***Proof:*** Similarly to the previous proof we will consider that $M$ has a well defined isometry group $I(M)$ and see what happens under variation of any related vector field $\tilde X \in \mathfrak X(M)$ of a Lie algebra element $X\in \mathfrak g$. In particular we have that

$$
\begin{align}
0 &=\lim_{\epsilon\to 0} \frac{1}{\epsilon} \left[\mathcal L (\phi + \nabla_{\tilde X} \phi) - \mathcal L(\phi)\right]\\
&= 2 \nabla \phi \wedge_E \ast \nabla \nabla_{\tilde X}\phi\\
&= \langle \nabla_{\tilde X}\phi \otimes d_\nabla \ast d_\nabla \phi \rangle_E + \langle d_\nabla \ast (\nabla_{\tilde X}\phi \otimes  \nabla \phi)\rangle_E.
\end{align}
$$

Therefore we see that the conserved current is given by

$$
J_{\tilde X} = \langle\ast(\nabla_{\tilde X}\phi \otimes  \nabla \phi)\rangle_E = \ast T(\tilde X).
$$

As a result, the stress tensor is obtained by

$$
T = \langle \nabla \phi \otimes \nabla \phi \rangle_E,
$$

which we can also think of as the length of the velocity vector, which I find really cool to be honest. 

$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$


It is time to see an example. The simplest one I can come up with is a bunch of scalar fields. 

**<u>Example:</u>** *(Multiple Scalar Fields)* This will be a trivial vector bundle over the manifold with a connection $\nabla$ with the property that for some basis sections $\{e_i\}_{i=0}^k \subset \Gamma^\infty(E)$ it satisfies

$$
\nabla e_i = 0.
$$

If we further add the Euclidean bundle metric on $E$ we have that the stress tensor of a field $\phi \in \Gamma^\infty(E)$ given by $\phi = \phi^i \otimes e_i$ for $k$ smooth functions $\phi^i \in C^\infty(M)$ is given by

$$
T(\phi) = \sum_{i= 1}^k d\phi_i \otimes d\phi_i
$$

which is what we physically expect to happen. The other interesting thing is that the Lagrangian is the sum of Lagrangians of free fields. 

## Tracelessness Sidenote

Often in CFT we require the stress tensor to be traceless. Here is what we mean.

**<u>Definition:</u>** Let $A :V\to V^\ast$ be an endomorphism of some inner product vector space $V$. Its trace is a Linear operator such that
$$
\Tr(A) = \langle e^\mu,T(e_\mu)\rangle,
$$
for some basis $e_\mu$ of $V$ and its canonical dual basis $e^\mu(e_\nu)=\delta^\mu_\nu$ and where $\langle\cdot,\cdot\rangle:V^\ast\times V^\ast\to\mathbb R$ is some nondegenrate bilinear form on $V^\ast$.

**<u>Proposition:</u>** Let $A=X\otimes Y$ where $X,Y\in V^\ast$. Then 
$$
\Tr(A)=\langle X,Y\rangle.
$$
**<u>Corollary:</u>** The trace of the metric is the dimension of the space. i.e. $\Tr g=\dim V^\ast$.

Using these we can see that we can find a traceless energy momentum tensor like so
$$
T'=T-\frac{g\ \Tr T}{\dim M}.
$$






## Free Tensor Fields

The above notation is a bit cumbersome. It gets super complicated super fast and for most things in physics it suffices to look at tensor fields instead. These are sections of tensor bundles, in other words bundles of the form $TM^{\otimes k}  \otimes T^\ast M^{\otimes l}$ for some $k,l \in \mathbb N$. Given a Riemannian manfold, they have a canonical connection and bundle metric that allows us to simplify the notation a bit by identifying twisted forms with sections of tensor bundles with higher order.

  

# Conformal Free Fields

The whole point of doing the classical exploration was to start playing with conformal field theories properly. There are notes on defining CFTs abstractly [here](../../Quantum_Fields/2D_CFT_Axioms.md). Here we will dive more into examples for 2 dimensional manifolds and construct the Conformal Field Theories for free fields. We do this in order to understand how the objects in a CFT language work. 



## Free Scalar Field and Radial Quantization

 The prototypical example of a conformal field theory is the Free scalar field in $2$ dimensions. In this case only, we will not directly apply the formalism developed [in these notes](../../Quantum_Fields/2D_CFT_Axioms.md), but rather motivate it through the procedure of radial quantization. 

Consider the Free scalar field in $\mathbb R^{1,1}$ with the Lagrangian $\mathcal L_F : C^\infty(\mathbb R^{1,1}) \to \Omega^2(\mathbb R^{1,1})$ that we have found before. The first step to radially quantize is to perform a *Wick rotation*. This is a really common trick in Quantum Field theory and since we will be using it a lot, it would be nice to devote a section in understanding it.



## Wick Rotation

A Wick rotation is a maneuver we do in field theory that involves analytic continuation of some fields in such a way that we can "convert" our theory from Minkowski space to Euclidean space. Here we will formally develop it for scalar field theories on Lorentzian manifolds, but the extension should be clear. 

Not any Lorentzian manifold is useful for this purpose. For example, I can totally imagine a Lorentzian manifold that is compact, in which case interpreting the time direction causes all sorts of problems. Therefore we will limit our attention to manifolds that do not have a "compact time direction." The precise meaning of this is as follows.

**<u>Theorem:</u>** Let $(M,g)$ be a Lorentzian manifold with signature $(1,n-1)$ that admits a global, nonvanishing, timelike Killing vector field, i.e. there exists $X \in \mathfrak X(M)$ such that $\mathcal L_Xg = 0$ and $g(X,X) < 0$. Then there exists a spacelike surface $\Sigma \subset M$ such that $M$ embeds in $\mathbb C \times \Sigma$. 

![trivialization](./_Free_Fields.assets/trivialization.svg)

***Proof:*** The flow of a global nonvanishing Killing vector field $\phi_X : \mathbb R\times M \to M$ defines a smooth free proper $\mathbb R$ action on $M$. Therefore, by the [quotient manifold](../../Analysis/Distributions.md#killing-vector-fields-and-the-quotient-manifold-theorem) theorem the quotient $\Sigma \coloneqq M/\mathbb R$ under the orbit equivalence $\sim$, i.e. for any two $p,q \in M$

$$
p\sim q \iff \exists t \in \mathbb R \text{ s.t. } \phi_X(t,p) = q,
$$

 is a submanifold of $M$. 

To show that this submanifold is spacelike it is enough to show that the metric is Riemannian. Consider the inclusion map $\iota : \Sigma \to M$. If there exists a vector $Y_p \in T_p\Sigma$ for some $p\in \Sigma$ such that  $\iota^\ast g_p(Y_p,Y_p) < 0$ then $i_\ast Y_p = Y_p \in T_pM$ is a timelike vector. Now consider the projection of $Y_p$ on $X_p$ denoted by $\bar Y_p$, as a result any path tangent to $\bar Y_p$ is also tangent to $X_p$ which means that it is contained in the flow of $X_p$ and thus not on $\Sigma$. Therefore $\bar Y_p = 0$ which also implies that $g(Y_p,X_p) = 0$. This means that $Y_p$ and $X_p$ are orthogonal timelike vectors, implying that $\text{sign}(M,g) = (q,n-q)$ with $q \geq 2$ which is a contradiction. Therefore there exists no timelike vector in $\Sigma$. 

Finally, the embedding to $\mathbb C \times \Sigma$ comes from the canonical diffeomorphism $M \to \mathbb R\times \Sigma$ using the flow to lift the quotient map composed with the canonical embedding $\mathbb R \times \Sigma \to \mathbb C\times \Sigma$.  

$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

**<u>Corollary:</u>** The induced metric $g$ on $\mathbb R\times \Sigma$ can be written around any point as 

$$
g = -\chi + \eta,
$$

where $\eta$ is a Riemannian metric on $\Sigma$, and $\chi$ is a Riemannian metric on $\mathbb R$.

**<u>Remark:</u>** We usually pick a chart on $\mathbb R \times \Sigma$ such that $\chi = dt\otimes dt$.  

The first interesting result of these is that we can embed both the Riemannian and Lorentzian versions of $\mathbb R\times \Sigma$ with metrics $g_E = \chi + \eta$ and $g = -\chi + \eta$ respectively in $\mathbb C \times \Sigma$. Here is how this works.

**<u>Proposition:</u>** There exists a metric $g_{\mathbb C} \in \Gamma^\infty(T^\ast_{\mathbb C} \mathbb C\times \Sigma\otimes T^\ast_{\mathbb C} \mathbb C\times \Sigma)$ such that both the Lorentzian and Riemannian versions of $\mathbb R\times \Sigma$ isometrically embed on $\mathbb C\times \Sigma$. 

Notice that this metric spans the complexified cotangent space. However, this is not bad at all because the next step is to extend our Lagrangian on the complexified vector bundle. For more about complexified vector bundles [check this out](../../Geometry/Complex_Structures.md).

**<u>Definition:</u>** A form $\omega \in \Omega^{n}(\mathbb R\times \Sigma)$ is called **extendable** if there exists a holomorphic form $\omega_{\mathbb C} \in \Omega^n(\mathbb C \times \Sigma)^{\mathbb C}$ (i.e. $\bar \partial \omega_{\mathbb C} = 0$) such that

$$
\iota^\ast \omega_{\mathbb C} = \omega.
$$

A Lagrangian $\mathcal L : \Gamma^\infty(E) \to \Omega^n(\mathbb R \times \Sigma)$ is called **extendable** if for any $\phi \in \Gamma^\infty(E)$ then $\mathcal L(\phi)$ is extendable. 

**<u>Proposition:</u>** The free field Lagrangian is extendable.

This definition allows us to consider Lagrangians that have analytic continuations in the complex numbers. With this definition we are ready to create the Wick rotated Lagrangian.

**<u>Theorem:</u>** *(Wick Rotation)* Let $\mathcal L : \Gamma^\infty(E) \to \Omega^n(M)$ be an extendable Lagrangian, over a Lorentzian Manifold with a global timelike Killing vector field. Then there exists a Lagrangian $\mathcal L' : \Gamma^\infty(E^{\mathbb C}) \to \Omega^n(M)^{\mathbb C}$  such that for any field $\phi \in \Gamma^\infty(E)$ there exists a unique field $\psi \in \Gamma^\infty(E^{\mathbb C})$ such that

$$
i^\ast \mathcal L'(\psi)_{\mathbb C} = \mathcal L(\phi).
$$

The Lagrangian $\mathcal L'$ is called the **Wick rotated Lagrangian of** $\mathcal L$.

**<u>Remark:</u>** In other words this says that for any field $\phi$ we can find a complex reparameterization $\psi$ such that it solves a simpler Lagrangian!

Let's see this in practice.

**<u>Example:</u>** *(Wick Rotation of Scalar Fields)* Consider the Free field Lagrangian of a scalar field $\phi \in C^\infty(\mathbb R\times \Sigma)$ over a Lorentzian manifold with a global timelike killing field and metric

$$
g = -dt\otimes dt + \eta,
$$

where $(\mathbb R,dt\otimes dt)$ and $(\Sigma, \eta)$ are Remannian manifolds. Then for each $\phi$ we have that $\mathcal L (\phi) = d\phi \wedge \ast d\phi$. The extension of the form $\mathcal L(\phi)$ is  given by the analytic continuation of $\phi$ into an analytic function $\phi_{\mathbb C} : C^\infty(\mathbb C \times \Sigma, \mathbb C)$ such that $\bar \partial \phi_{\mathbb C} =0$. Then we find that 

$$
\omega = d\phi_{\mathbb C} \wedge \ast d(\bar \phi_{\mathbb C} dz) \in \Omega^n(\mathbb C\times \Sigma)^{\mathbb C}
$$

with metric $g_{\mathbb C} = -dz\cdot d\bar z + \eta$ is the extension of $\mathcal L(\phi)$ since

$$
\begin{align}
\iota^\ast \omega 
&= \iota^\ast  \ast_{\Sigma}\left(- 2\left|\frac{\partial \phi_{\mathbb C}}{\partial z}\right|^2 + \partial_i \phi_{\mathbb C} \partial^i \phi_{\mathbb C}\right) dz\\
&= \ast_{\Sigma}\left(- (\partial_t\phi)^2 + \partial_i \phi \partial^i \phi\right) dt\\
&= d\phi \wedge \ast d\phi.
\end{align}
$$

We notice, however, that under the inclusion $\epsilon : \mathbb R\times \Sigma\to \mathbb C\times \Sigma$ given by $(t,p)\mapsto (0,-t,p) = (-it,p)$ we obtain the following pullback of the extension $\omega$

$$
\begin{align}
\epsilon^\ast\omega 
&= \epsilon^\ast  \ast_{\Sigma}\left(- 2\left|\frac{\partial \phi_{\mathbb C}}{\partial z}\right|^2 + \partial_i \phi_{\mathbb C} \partial^i \phi_{\mathbb C}\right) dz\\
&= i\ast_{\Sigma}\left((\partial_t\phi_{\mathbb C})^2 + \partial_i \phi_{\mathbb C} \partial^i \phi_{\mathbb C}\right) dt\\
&= id\phi_{\mathbb C} \wedge \ast_E d\phi_{\mathbb C}.
\end{align}
$$

where $\ast_E$ is the Hodge duality for the Riemannian metric $g_E = dt\otimes dt + \eta$. This is a really cool result since we have found away to obtain the Wick rotation of the Lagrangian to be

$$
\mathcal L'(\phi) = id\phi\wedge\ast_E d\phi.
$$

In other words if we solve for $\phi$ that is a field for $\mathcal L'$ we can use this analytic continuation such that we obtain a field for $\mathcal L$. 



## Mode Expansion

In the previous way we have seen an argument as to why solving for a free particle in a Riemannian manifold gives us unique solutions for the free particle in Minkowski space, under some assumptions on the niceness of the time axis. Now that we can work in a Riemannian Manifold, we can finally play around with mode expansions! 

Unfortunately, mode expansions rely on Fourier transforms which are hard to define on an arbitrary manifold. The main idea of Fourier series is that we are able to find a basis for some big set of functions that consists of eigenfunctions of the Laplacian. These are called *characters.* In $\mathbb R^n$ the eigenfunctions of the Laplacian $\ast d \ast d$ are exponential functions of the form $e^{ik\cdot x}$ for some $k \in \mathbb R^n$. 

The issue is that there is no reason that characters should exist globally on a random Riemannian manifold. What we do know is that they exist for Lie groups (using the exponential map) and compact Riemannian manifolds (using some more complicated mess of a procedure). 

The purpose of this is to derive everything for a 2 Dimensional CFT, so we will now restrict to $\mathbb R^2 \cong \mathbb C$ where we know the characters.

**<u>Theorem:</u>** Let $\phi \in C^\infty(\mathbb C \setminus\{0\})$ then it admits an **angular mode expansion**. In other words, there exist functions $\phi_n \in C^\infty(\mathbb R^+)$ such that

$$
\phi(r,\theta) = \sum_{n = -\infty}^\infty \phi_n(r) e^{in\theta}.
$$

The functions $\phi_n$ are called the **angular modes of** $\phi$.

We can use mode expansions to rewrite the action. 

**<u>Corollary:</u>** The Wick rotated free scalar field action can be rewritten for any $\phi \in C^\infty(\mathbb C)$

$$
S(\phi) = \sum_{n=-\infty}^\infty i\int_{\mathbb R^+}rdr\, \left[\left |\frac{\partial \phi_n}{\partial r} \right|^2 - \frac{n^2}{r^2} |\phi_n|^2\right].
$$

**<u>Remark:</u>** We recognize this result as the sum of infinite harmonic oscillators. This is something that we know how to quantize. 

What we will figure out is that each of these modes is a Virasoro generator. But for now let's attempt to quantize this. Let's focus for a single mode. This is going to have the following Lagrangian

$$
\mathcal {L}_n(\phi) = \left[\left |\frac{\partial \phi_n}{\partial r} \right|^2 - \frac{n^2}{r^2} |\phi_n|^2\right] rdr = (d\phi \wedge \ast d\bar \phi) - \frac{n^2}{r^2} \ast \phi \bar \phi.
$$

If this Lagrangian did not have $\frac{1}{r^2}$ factor in the second term it would be exactly the one for a harmonic oscillator, however we need to deal with that first before continuing. Luckily this is isn't a problem since we already know how to treat such potentials. Let's take the Legendre transform in order to obtain the Hamiltonian.

**<u>Proposition:</u>** The Hamiltonian $H_n$ associated to the Legendre Transform of the Lagrangian $\mathcal L_n$ is given by

$$
H_n(\pi,\phi) = \pi\bar \pi + \frac{n^2}{r^2} \phi \bar \phi,
$$

where $\pi = \frac{\partial \phi}{\partial r}$ is the canonical conjugate momentum.

Here is a good time to examine the structure of the phase space onto which the Hamiltonian is acting on. 

## Phase Spaces

A phase space in classical mechanics is easy to interpret. It is the cotangent bundle of space. Its abstraction in field theory, however, is slightly more complicated. Let's see how to do this by first examining the structure of phase space on the 1-dimensional setting. 

In the following we will consider our base manifold to be time ($\mathbb R$) and our fields are sections of the trivial bundle $\mathbb R\times M$, where $M$ is some Riemannian manifold that represents space. This is the setting of classical mechanics but interpreted from a Field theory point of view, where we assign a point on space for every point in time. In other words, sections of $\mathbb R\times M$ are paths on $M$. 

We want to construct the phase space of this system. Phase space is to be interpreted as the space of *all configurations* of the fields. If we fix a point in time, using uniqueness of second order ODEs everything we need in order to determine the field, is a point $q \in M$ and its initial velocty $v \in T_qM$ or equivalently its momentum $p\in T^\ast_q M$. Since each field configuration only needs these two data we identify the space of all field configurations as the cotangent bundle $T^\ast M$. (So far in this argument there was no reason to prefer $T^\ast M$ over $TM$, we are not going to focus on that here.)

Now let's try to structure this intuition in such a way that it generalizes.

**<u>Definition:</u>**  Let $(M,g)$ be a Lorentzian manifold with a nonvanishing global timelike Killing vector field $X \in \mathfrak{X}(M)$ with trivialization $M \cong \mathbb R \times \Sigma$, where $\Sigma$ is a Riemannian submanifold. The **phase space of fields** that are sections of a fiber bundle $\pi: E\to M$ with fiber the manifold $N$ is the set
$$
\mathcal P (E,\Sigma) = \Gamma^\infty(\Sigma \times T^\ast N).
$$

**<u>Example:</u>** *(Classical Mechanics)* Consider $\mathbb R$ with fields on the trivial bundle $M\times \mathbb R$ where $M$ is some Riemannian manifold. We recognize this as the setting of classical mechanics. We see that the phase space is

$$
\mathcal P(M\times \mathbb R,\{t\}) = \Gamma^\infty(\{t\}\times T^\ast M) \cong T^\ast M.
$$

 **<u>Lemma:</u>** The phase space of fields admits a Frechet manifold structure.

Another way to think of the phase space is as the set of all initial conditions of time evolution. In other words, each point in the phase space fully defines a configuration of the fields over time. The implicit assumption we have made here is that the equations of motion are second order. In the case of free fields they are though, so we are good. A more general formulation uses Jet bundles to replace the cotangent bundle. 

Since any point on phase space defines everything we need to do time evolution of the fields, and since any observable depends on the fields, it would make sense to turn any observable in smooth functions over phase space. For example, in a classical mechanics theory the mass observable is a constant function over phase space, or the momentum observable is one of the coordinate maps of the cotangent bundle, etc. 

Therefore, we want to turn our attention to studying these maps.

**<u>Proposition:</u>** The set $\{\phi_x^i, \pi_x^i\}_{x \in \Sigma} \subset C^\infty_0(\mathcal P)$ defined such that for any $(\phi,\pi) \in \mathcal P$

$$
\begin{align}
\phi_x^i(\phi,\pi) = \phi^i(x) && \pi_x^i(\phi,\pi) = \pi^i(x)
\end{align}
$$

is a basis for the vector space $C^\infty_0(\mathcal P)$. 

The first thing we see is that the set of smooth maps admits a Lie algebra structure using a construction called the *Poisson Bracket.* 

**<u>Proposition:</u>** The **Poisson Bracket**  $\{\cdot,\cdot\}: C^\infty( \mathcal P) \times C^\infty( \mathcal P) \to C^\infty( \mathcal P) $ defined for any $f,g \in C^\infty(\mathcal P)$ 

$$
\{f, g\} = \sum_{i=1}^{\dim T^\ast N}\int_{\Sigma}\frac{\partial f}{\partial \phi_x^i} \frac{\partial g}{\partial \pi_x^i} - \frac{\partial g}{\partial \phi_x^i} \frac{\partial f}{\partial \pi_x^i} dx  
$$

is a Lie Bracket on $C^\infty_0( \mathcal P)$.

**<u>Corollary:</u>** The following identity holds

$$
\{\phi_x^i,\pi_y^j\} = \delta^{ij}\delta(x-y)
$$

We now have a phase space description for our stuff.



## Quantizing the Harmonic Oscillators

With the Hamiltonian for each mode given by $H_n$ we immediately realize that it looks so tantalizingly close to a harmonic oscillator. But then we also immediately realize that $\mathbb C \setminus \{0\}$ is diffeomorphic to a cylinder via the diffeomorphism

$$
\begin{align}
f : \mathbb C \setminus\{0\} &\to \mathbb R \times S^1\\
(z,\bar z) &\mapsto \left(\frac{1}{2} \log(z\bar z),\frac{1}{2i} \log\frac{z}{\bar z}\right) 
\end{align}
$$

We don't care that this isn't an isometry, because we can use it to push the Lagrangian forward the following way.

**<u>Definition:</u>** Given a Lagrangian $\mathcal L : \Gamma^\infty(E) \to \Omega^n(M)$ and a diffeomorphism $f : N\to M$ of $n$ dimensional manifolds $N,M$, then the **pullback of the Lagrangian under** $f$ is the map $f^\ast \mathcal L : \Gamma^\infty(f^\ast E) \to \Omega^n(N)$ such that for any $\phi \in \Gamma^\infty(f^\ast E)$ 
$$
(f^\ast \mathcal L)(\phi) = f^\ast[\mathcal L(f_\ast \phi)].
$$

The definition of what the pushforward of sections of the Pullback bundle means is [here](../../Geometry/Bundles.md).

Now we can see that the Fourier modes of the fields are so much better defined in this case. In particular the following proposition is true. 

**<u>Proposition:</u>** For any $\phi \in C^\infty(\mathbb R\times S^1)$ there exists a unique $\{\phi_n\}_{n\in \mathbb Z} \subset C^\infty(\mathbb R,\mathbb C)$ such that for any $(r,\theta) \in \mathbb R \times S^1$ 
$$
\phi(r,\theta) = \sum_{n=-\infty}^\infty \phi_n(r)e^{in\theta}.
$$

We call $\phi_n$ the **angular mode of order** $n$ of $\phi$. 

With this in mind, taking the pullback. under the transformation $f^{-1} : \mathbb R\times S^1 \to  \mathbb C\setminus \{0\}$ we introduced above, of the free scalar field Lagrangian on $\mathbb C\setminus \{0\}$ we obtain the following lagrangian $\mathcal L'$ which we can rewrite in Fourier modes as

$$
\mathcal L'(\phi) = \frac{1}{4}  \sum_{n,m=-\infty}^\infty \left[ \frac{\partial \phi_n}{\partial r} \frac{\partial \phi_m}{\partial r} - nm \phi_n \phi_m\right] e^{i(n+m)\theta} dr\wedge d\theta = \sum_{n,m=-\infty}^\infty  d(\phi_ne^{in\theta}) \wedge \ast d(\phi_m e^{im \theta}).
$$

  Yet, the more interesting aspect of this is that the action can be integrated on the angle variable to obtain

$$
S'(\phi) = \int_{\mathbb R \times S^1} \mathcal L'(\phi) = \frac{\pi}{2} \int_{\mathbb R} \sum_{n=-\infty}^\infty \left[ \frac{\partial \phi_n}{\partial r} \frac{\partial \phi_{-n}}{\partial r} - n^2 \phi_n \phi_{-n}\right] dr,
$$

where we have used the property that $\Im\,\phi(r,\theta) = 0 \ \forall (r,\theta) \in \mathbb R\times S^1 \implies \phi_n = \bar \phi_{-n} $. This now looks like a bunch of complex harmonic oscillators (the careful transformation we took, got rid of the pesky radius). So we have created an equivalence between the theory of a free scalar field in $\mathbb R^{1,1}$ with the field theory of $\mathbb Z$ harmonic oscillators on $\mathbb R$. 

For this theory we have that our fields are on a vector bundle over $\mathbb R$, where the fiber is $\mathbb R^\mathbb N $, which is the topological vector space of sequences on $\mathbb R$. Let's call this bundle $E$. Now we can finally talk about the phase space, which in this case is isomorphic to $\mathcal P \coloneqq \Gamma^\infty(\{0\}\times T^\ast \mathbb R^{\mathbb N}) \cong  T^\ast \mathbb R^{\mathbb N} \cong (\mathbb R^2)^{\mathbb N}$. By performing the Legendre transform we can write our Hamiltonian $H : \mathcal P \to \mathbb R$ as

$$
H(\phi,\pi) = \frac{1}{2} \sum_{n=-\infty}^\infty \pi_n \bar \pi_n + n^2 \phi_n \bar \phi_n.
$$

We see that with the canonical Lie bracket we have that

$$
\{\phi_n,\pi_m\} = \delta_{nm}.
$$

Which leads to the quantization condition $[\phi_n,\pi_m] = i\delta_{nm}$. Let's introduce the functions $a_n : \mathcal P \to \mathbb C$, given by

$$
a_n = \frac{1}{\sqrt{-2}} 
\begin{cases}
n\phi_n -i\pi_{-n} & n>0\\
-n\phi_n + i\pi_{-n} & n < 0
\end{cases},
$$

as well as the functions $\bar a_n :\mathcal P \to \mathbb C$ given by
$$
\bar a_n = \frac{1}{\sqrt{-2}} 
\begin{cases}
n\phi_{-n} -i\pi_n & n>0\\
-n\phi_{-n} + i\pi_n & n < 0
\end{cases}.
$$
By doing some manual labor we can show that
$$
\begin{align*}
\{a_n,a_m\} = \{\bar a_n,\bar a_m\} = -in\delta_{n+m} && \{a_n,\bar a_m\} = 0.
\end{align*}
$$
Then we can further see that the Hamiltonian can be written as
$$
H = \frac{1}{2} \pi_0^2+ \sum_{n\neq0} a_na_{-n} + \bar a_n \bar a_{-n}.
$$

Another notable property is that in our quantum theory
$$
[H,a_{-n}] = na_{-n}.
$$
In fact we see that the Hilbert space is that of two harmonic oscillators. So we can construct it and start to play on it!



## Extracting the Quantum Fields

Using this prescription we can extract the field operators. In particular we know that for any time the value of the field in this decomposition is given by
$$
\phi(x,t) = \phi_0 + \pi_0t + i\sum_{n\neq0} \frac{1}{n}\left[a_ne^{in(x-t)} - \bar a_ne^{in(x+t)}\right].
$$
 Using the map $f^{-1}:\mathbb R\times S^1\to \mathbb C$ back to the plane, we can extract the value of the field at any $(z,\bar z)$. In particular, we have:
$$
\phi(z,\bar z) = \phi_0 -i\pi_0\log(z\bar z) + i\sum_{n\neq0} \frac{1}{n}\left[a_nz^{-n} - \bar a_n\bar z^{-n}\right].
$$
This is really cool! Because we can now play the CFT game! Let's consider the stress energy tensor







# Free (Majorana) Fermion

Another example that is worth going in detail in a way that is more similar to how we would work on it using modern methods is the free Fermion in 2D. We start by identifying all the spin structures on flat 2D space and eventually build up to a conformal field theory in the conformal sphere.

## Spinor Representation on 2D

 The actual structure building is done [here](../../Quantum_Fields/Spinors.md), in this section we will summarize results for spinors in $\mathbb R^{2}$.

**<u>Lemma:</u>** The Dirac spinor representation in 2 dimensions is isomorphic to $\mathbb C^2$, and the representation of the even subspace has a Weyl decomposition in left and right handed spinors. In particular, the spinor representation consists of the following gamma matrices
$$
\begin{align*}
\gamma^0 = \begin{pmatrix}0 & 1\\1 & 0\end{pmatrix} && 
\gamma^1 = \begin{pmatrix}0 & -i\\ i & 0\end{pmatrix}
\end{align*}
$$

An interesting corollary is the following.

**<u>Corollary:</u>** The Dirac operator in this spinor representation is given by

$$
\centernot{\partial} = 2\begin{pmatrix}0 & \frac{\partial}{\partial z}\\ \frac{\partial}{\partial \bar z} & 0\end{pmatrix}.
$$

***Proof:*** The proof is by direct calculation.

$$
\centernot{\partial} \coloneqq \gamma^0 \frac{\partial}{\partial x^0} + \gamma^1 \frac{\partial}{\partial x^1}.
$$

We have chosen carefully the basis for the representation such that the Dirac operator is given by that condition. 



## The Majorana and Weyl Representations

The 2-dimensional spinor representation is particularly nice. To see how let's first recall a couple of cool theorems.

**<u>Proposition:</u>** Given the representation of the Clifford algebra defined by the gamma matrices above, we have that the weyl eigenspaces are given by
$$
\Delta^{\pm} \coloneqq \{x \in \mathbb C^2 \mid -i\gamma^0\gamma^1 x = \pm i x\} \cong \mathbb C.
$$

These are vector subspaces and we have that $\Delta^+\oplus \Delta^- \cong \mathbb C^2$. 

***Proof:*** We know that the Weyl subspaces in the even dimensional Clifford algebra representations are the eigenspaces of the Chirality element. In this representation the chirality element is given by
$$
\gamma^2 \coloneqq -i\gamma^0\gamma^1 = \begin{pmatrix}1&0\\0&-1\end{pmatrix},
$$

hence the eigenspaces $\Delta^\pm$. 

$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$


This is the Weyl part of the representation. The next interesting part is to find the Majorana. Since the Clifford algebra is associated to the even dimensional vector space $\mathbb R^{2}$, there must exist a $\text{spin}^+$-invariant real structure over the spinor representation. 

Before we find the real structure, we need to find $\text{spin}^+(2)$. 

**<u>Proposition:</u>** The representation of $\text{spin}^+(2)$ on $\mathbb C^2$ is generated by a subset of the linear combinations of $1, -i\gamma^2$.

***Proof:*** Using the definition of the orthochronous spin group we see that it is generated by even Clifford products of unit vectors in $\mathbb R^2$. Therefore the only elements it can depend on the representation are the identity and $\gamma^0\gamma^1$. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

Using this we can see something really cool!

**<u>Proposition:</u>** The map $\sigma: \mathbb C^2 \to \mathbb C^2$ given by 
$$
\psi \in \mathbb C^2 \mapsto \sigma(\psi) = \gamma^0\psi^\ast
$$

is a $\text{spin}^+(2)$ equivariant real structure for $\mathbb C^2$.

***Proof:*** We use the property that $\{\gamma^0,\gamma^2\} = 0$ to show equivariance. The rest of the stuff are properties of $\gamma^1$. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

Therefore we can find the Majorana subspace to be

$$
\Delta^\sigma \coloneqq \{\psi \in \mathbb C^2 \mid \sigma(\psi) = \psi\}.
$$

This can be simplified to

$$
\Delta^\sigma = \left\{\binom{\alpha}{\alpha^\ast} \in \mathbb C^2 \ \middle|\ \alpha \in \mathbb C\right\}
$$

Therefore, we see that $\mathbb C^2 \cong \Delta^\sigma \oplus i\Delta^\sigma$, so every spinor can be written as $\psi = \phi + i\chi$, where $\phi,\chi \in \Delta^\sigma$.

## Defining the Action

Now we can play with calculating some correlation functions.

**<u>Definition:</u>** Given a spinor bundle $S$ over $\mathbb R^{2}$ with a Dirac form $\langle \cdot,\cdot \rangle$ the free Lagrangian is given by
$$
\begin{align*}
\mathcal L_F : \Gamma^\infty(S) &\to \Omega^2(\mathbb R^{2})\\
\psi &\mapsto L_f(\psi) =  \ast \frac{1}{2}\langle \mathcal  \psi,(\centernot\partial +m) \psi \rangle,
\end{align*}
$$

for some $m \geq 0$.

We know from studying [spinors](../../Quantum_Fields/Spinors.md) that for any Dirac form we have a Dirac conjugate spinor that is defined for any $\psi \in \Gamma^\infty(S)$ as $\bar \psi \coloneqq \langle \psi, \cdot \rangle$. There aren't infinite Dirac forms we can place here, so lets see what's going on. The Dirac form must have the property that

$$
\langle X\cdot \psi,\phi\rangle = \langle \psi,X\cdot \phi\rangle.
$$

Enforcing this rule along with conjugate symmetry we can see that the only choice for the Dirac form is the one such that

$$
\langle \psi, \phi\rangle = \psi^\dagger \phi.
$$

This is a particularly nice choice that relies on the fact that all of our gamma matrices are hermitian. 

**<u>Proposition:</u>** By writing a Majorana fermion $\psi = \binom{\psi}{\bar \psi} \in \Gamma^\infty(S)$, i.e. $\sigma(\psi) = \psi$, we can rewrite the free Lagrangian (for $m=0$) as
$$
\mathcal L_F(\psi) = \ast \left(\psi \frac{\partial}{\partial \bar z} \psi + \bar \psi \frac{\partial}{\partial z} \bar \psi  \right).
$$

 As a result the action is given by

$$
S(\psi) = \int_{\mathbb C} \mathcal L_F(\psi) = \int_{\mathbb C} \left(\psi \frac{\partial}{\partial \bar z} \psi + \bar \psi \frac{\partial}{\partial z} \bar \psi  \right) d^2z.
$$

***Proof:*** Using the real structure we see that for a majorana fermion $\psi^\dagger = \psi^T \gamma^0$. Therefore we have that

$$
\langle \psi, \centernot{\partial} \psi\rangle = \psi^T \gamma^0 \centernot \partial \psi = 2\begin{pmatrix}\psi & \bar \psi\end{pmatrix} \begin{pmatrix}\frac{\partial }{\partial \bar z} & 0 \\ 0 & \frac{\partial}{\partial z} \end{pmatrix} \begin{pmatrix}\psi \\ \bar \psi\end{pmatrix} = \psi \frac{\partial}{\partial \bar z} \psi + \bar \psi \frac{\partial}{\partial z} \bar \psi.
$$

$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

## Calculating 2-point Functions

We will use path integral quantization to calculate two point functions for this free theory. To do so we use that

$$
\langle \psi(x) \psi(y) \rangle = \frac{1}{Z(0)} \int \mathcal D \bar \psi \mathcal D \psi\ \psi(x)\psi(y)e^{iS(\psi)}.
$$

We can do this using the partition function. But before we do so, it here are some cool results that we will use soon. 

**<u>Proposition:</u>** Let $w\in \mathbb C$, $U \subset \mathbb C$ some neighborhood of $w$ and $F_U: C_0^\infty(\mathbb C) \to \mathbb C$ be a distribution that is regular in $\mathbb C\setminus \{w\}$ such that for any $f \in C^\infty_0(\mathbb C)$ 

$$
F_U(f) = \int_{U} \frac{f(z,\bar z)}{z-w}dzd\bar z.
$$

Then if $f$ is analytic in $U$ then

$$
\frac{\partial F_U}{\partial \bar z}(f) = \delta_w(f),
$$

or in more convenient notation, when integrated against locally analytic functions the following equality holds

$$
\partial_{\bar z} \frac{1}{z-w} = \delta(z-w).
$$

***Proof:*** Since $F$ is compactly supported, we can use Stoke’s theorem to write
$$
\frac{\partial F_w}{\partial \bar z}(f) = \int_{U} \frac{\partial }{\partial \bar z} \frac{f(z,\bar z)}{z-w} dzd\bar z = \int_{\partial U} \frac{f(z,\bar z)}{z-w} dz
$$

If $f$ is analytic in $U$ then we have shown that $\frac{\partial F_w}{\partial \bar z}(f) = \delta_w(f)$ via Cauchy’s theorem, by taking the Taylor series of $f$ on the nominator. 

$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

While this might seem a bit arbitrary at first, we will see that our fields are going to be at least locally analytic. Therefore, this is not as a restricted of an identity as it seems. In particular check out this proposition.

**<u>Proposition:</u>** The field equations for the free fermion are given by

$$
\begin{align*}
\partial \bar \psi &=  0\\
\bar \partial \psi &=  0.
\end{align*}
$$

**<u>Corollary:</u>** $\psi$ is holomorphic and $\bar \psi$ is antiholomorphic.

Since the fields are analytic we can use the expression of the delta function we have discovered, which is very reminiscent of correlation functions in CFT for fields with $h=1$. Let’s start playing with the partition function. 

**<u>Definition:</u>** The partition function of this theory is a map $Z : \Gamma^\infty(S) \to \mathbb C$ such that for any $\eta \in \Gamma^\infty(S)$ it is given by

$$
Z(\eta) = \int \mathcal D\bar \psi\mathcal D\psi\, \exp\left[-S(\psi) + i\int_{\mathbb C} \eta^T(z)\psi(z)\, d\bar zdz \right].
$$

On our way to the correlation functions we can do some cool coordinate transformations and express the partition function in a very nice way. Let’s first see this property.

**<u>Proposition:</u>** Consider the Majorana spinor $\eta \in \Gamma^\infty(S)$. Then we can write for any $x\in \mathbb C$

$$
\eta(x) = \frac{\gamma^0 \centernot\partial}{2} \int_{\mathbb C} G(z-w) \eta(w)\, dwd\bar w,
$$

where $G$ is the matrix given by

$$
G(x) = \begin{pmatrix}\frac{1}{z-w} & 0 \\ 0 & \frac{1}{\bar z - \bar w}\end{pmatrix}.
$$

***Proof:*** We are operating under the assumption that all of our spinors are locally analytic, in particular we assume that for $\eta = \binom{\eta}{\bar \eta}$, that the first component is locally holomorphic and the second is locally antiholomorphic. Therefore using the identity we derived for the delta function we can write:
$$
\begin{align*}
\eta(z) 
&= \int_{\mathbb C} \begin{pmatrix}\delta(z-w) &0 \\0&\delta(z-w) \end{pmatrix} \binom{\eta(w)}{\bar \eta(\bar w)}\, dwd\bar w\\
&= \int_{\mathbb C} \begin{pmatrix}\frac{\partial}{\partial \bar w} \frac{1}{w-z} &0 \\0& \frac{\partial}{\partial w} \frac{1}{\bar w-\bar z} \end{pmatrix} \binom{\eta(w)}{\bar \eta(\bar w)}\, dwd\bar w\\
&= \int_{\mathbb C} \frac{ \gamma^0\centernot\partial_z}{2} G(z-w)\eta(w)\, dwd\bar w\\
&= \frac{ \gamma^0\centernot\partial}{2}\int_{\mathbb C} G(z-w)\eta(w)\, dwd\bar w,
\end{align*}
$$

where we have also used $G(z-w) = - G(w-z)$.

$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

Now we can finally write the following coordinate transformation

**<u>Proposition:</u>** The partition function is given by

$$
Z(\eta) = Z(0)\exp\left[-\int_{\mathbb C} d^2z\int_{\mathbb C}d^2w\  \eta^T(z) G(z-w)\eta(w)\right].
$$

***Proof:*** We consider the coordinate transformation $\tilde \psi(z) = \psi(z) + i\int_{\mathbb C} dw\, G(z-w) \eta(w)$, then complete the square and we are done.

**<u>Proposition:</u>** The correlation functions are given by

$$
\langle \psi(z, \bar z) \psi^T(w,\bar w) \rangle = G(z-w).
$$

This can also be expressed as

$$
\begin{pmatrix}\langle\psi(z) \psi(w)\rangle & \langle\bar \psi(\bar z) \psi(w)\rangle \\ \langle\psi(z) \bar \psi(\bar  w)\rangle & \langle\bar \psi(\bar z) \bar \psi(\bar w)\rangle\end{pmatrix} = \begin{pmatrix}\frac{1}{z-w} & 0\\ 0&\frac{1}{\bar z - \bar w}\end{pmatrix}.
$$


## Stress Energy Tensor

We can now do a small diversion into finding the stress energy tensor of this fermionic theory. 

## Operator Product Expansions of Fermions

Using the correlation functions we can derive the 

















