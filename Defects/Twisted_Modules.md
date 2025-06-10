# Twisted Representation Theory

In [Twisting Adventure](../Defects/Twisting.md) we have explored how to construct the "twisted Hilbert space" of a free fermion using a path integral with varying Boundary conditions for the monodromy of the fields around a circle. Here we generalize the discussion about twisted Hilbert spaces ever so slightly devoid of the context of physics (i.e. we won't use path integrals) in order to obtain intuition for systems where the path integral is not well defined and see some extremely useful generalizations for calculations in physics.

[toc]



# Motivation

While we won't use physics to derive the results it would be foolish not to use them to motivate the structures and properties we will encounter. A particularly interesting approach for this would be to use intuition of twisting Rational CFTs by discrete groups.

## Definitions

Here are some definitions to get us oriented.

**<u>Definition:</u>** Let $A$ be a Lie algebra. A CFT is called **rational with respect to** $A$ if the Hilbert space as an $A\oplus A$ module has a finite sum decomposition into irreducible highest weight $A\oplus A$ modules. We call each highest weight vector of the irreducible representations an $A$ **primary**, and the rest of the vectors in the modules **descendants**.  In addition if the Hilbert space is an $A\oplus A$ module, then $A$ is known as a **chiral algebra** and the CFT is called **full**. Finally a full CFT that is rational with respect to $\text{Vir}$ is called **minimal**. 

Here by CFT we will mean a full CFT unless otherwise specified since I don't even know how to think about the twisted Hilbert space of a weirder thing. 

**<u>Proposition:</u>** Every CFT has $\text{Vir}$ as a chiral algebra.

***Proof:*** At the very least a CFT must have a stress tensor whose modes (by definition) are a representation of $\text{Vir}\oplus \text{Vir}$.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
Usually with our definition of the CFT we identify a bunch of "symmetry actions" on the Hilbert space which are certain automorphisms that form a representation of (usually) a group. Let's be a bit more specific.

**<u>Definition:</u>** A group $G$ is a **symmetry** of a rational CFT with Hilbert space $\mathbb{H}$ if it has a representation on $\mathbb{H}$ that is equivariant with respect to the $\text{Vir}\oplus \text{Vir}$ action on $\mathbb{H}$.

By the way, if we want to be pedantic, this condition is necessary but not sufficient. You can write down operators with that property that don't strictly fall under the physics definition of a symmetry. This definition uses the fact that $\mathbb{H}$ must be a $\text{Vir}\oplus \text{Vir}$ module for any CFT. Also by equivariant, we simply mean that the representations of the elements of $G$ commute with all the Virasoro generators.

**<u>Proposition:</u>** A symmetry $G$ of a CFT acts trivially on the irreducible $\text{Vir}\oplus \text{Vir}$ representations of $\mathbb{H}$.

***Proof:*** This is a direct application of Schur's lemma, where we have two equivariant representations, therefore the only action is proportional to the identity.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
There is some sense by which $A$ is a **symmetry algebra** for our CFT. For example, since $\text{Vir}$ must always be a subalgebra of $A$ there area always generators in $A$ that can be used to form the stress tensor of the theory. In principle if there was an additional conserved current, then one could take its modes along with the stress tensor's and then generate a chiral algebra for the theory. Yet, chiral algebras can have generators that go beyond modes of conserved currents. 

The more specific statement is that a chiral algebra can generate Ward identities. This makes sense, since $\mathbb{H}$ carries an $A$ representation and from the state operator correspondence we can associate insertions with specific states in $\mathbb{H}$ then we can tracking their $A$ orbits gives us Ward identities. Specifically, consider a string of primary field operators $\mathcal{O}$ which corresponds to a state $\psi \in \mathbb{H}$, then calculating the set $\langle \omega, A\psi \rangle$, where $\omega \in \mathbb{H}$ is the vacuum of the theory, will give us all sort of identities.



## What we Expect from Twisting 

Now we can set up a couple of examples. Consider a rational CFT with a chiral algebra $A$ and a finite abelian symmetry $G$. 

Physically though a CFT is still a Quantum *Field* Theory. In a QFT we assume that we have a spacetime with some nontrivial "physics" (*e.g. fields*) on it, and a set of probes (*e.g. quantum field operators*) that can be attached to spacetime to measure the values of physical quantities of interest. The QFT is a recipe for converting specific probe placements on spacetime to correlation functions of their readings. In that framework, an action of some $g \in G$ is a way to change a probe such that it now measures a transformed version of the underlying physics. For example, if you had a probe that measures the electric potential at some location in spacetime, then the action of the translation group on the electric potential probe will cause it to become the probe that measures the electric potential at the translated location in spacetime.

In a 2 dimensional Conformal Field Theory we consider space to be a circle, this is done for various irrelevant for now reasons. I'm mentioning it because in that idea of a Conformal Field Theory, **twisting by the symmetry action of** $g \in G$ refers to setting up the underlying physics in such a way that moving  any probe once around the space-circle will cause it to come back changed by the action of $g$.

This is why often in physics people will say: "The twisted Hilbert space corresponds to a sector of the theory with nontrivial boundary conditions." The boundary condition picture is simply the idea that the monodromy of local quantum fields is now $g$ in the $g$-twisted sector.

This might seem trivial, but it can have nontrivial consequences on the structure of our theory. For example, we shouldn't expect to have the same symmetry that we started with. Since the underlying physics is different, we should expect that the Hilbert space contains different states. Which would imply that we could measure different things that were not available to measure in our original theory. This translates to saying that we expect additional/different quantum fields in the twisted sector of the theory.

Think of the stress tensor, for example. The field $T(z)$ is a probe for the value of the conserved current of spacetime transformations in our theory. Say that we want to twist by a symmetry action $g \in G$, then we know that the representation of $g$ commutes with the operator $T(z)$, so naively we might quickly say that since $T$ remains invariant under monodromy ($g T g^{-1} = T$) that the Laurent modes of $T$, i.e. the Virasoro generators also remain the same. However this would be incorrect. The underlying Hilbert space has now changed since we have introduced the new boundary condition, in other words, the Hilbert space contains different states, so while you still can probe $T(z)$ in the new theory, the underlying configurations you are probing have changed. This would result in the $L_n$ generators having a different representation because different Virasoro modules would be available in the Hilbert space.

All this is to say that consequences of this twisting procedure can be quite subtle and we must be mindful to not accidentally make untrue assumptions.



## Twisting 

As an invitation let's explore some results without proving them, just to get a feel of the sort of thing we are calculating. Say that we have a rational CFT with a Hilbert space $\mathbb{H}$, a chiral algebra $A$ and a symmetry action of a finite group $G$. If the representation of some $g \in G$ is $A$ equivariant on $\mathbb{H}$ then we would expect that while the twisted Hilbert space $\mathbb{H}_g$ by $g$ would be different (in general) from $\mathbb{H}$ it would remain an $A$ module. That is, it should still be able to be decomposed into a sum of irreducible $A\oplus A$ representations. 

An example is the Ising CFT. This is a minimal model ($A = \text{Vir}$) that contains only three irreducible representations. It's Hilbert space can be written like so
$$
\mathbb{H} = (V_0\otimes V_0)\oplus (V_1 \otimes V_1) \oplus (V_2 \otimes V_2),
$$
where $V_i$ are irreducible highest weight $\text{Vir}$ modules. Notice that an irreducible representation of $A\oplus A$ is simply the tensor product of two irreducible representations of $A$, the fact that it is the same copy on each side is a special property of the Ising model. 

It is possible to define a symmetry action of $\mathbb{Z}_2=\{1,\eta\}$ such that the nontrivial element $\eta$ acts on each module by
$$
\eta V_{i}\otimes V_i = (-1)^{i} V_i \otimes V_i.
$$
Since $\eta$ acts proportional to the identity on the irreducible representations it must commute with $\text{Vir}$. It would be interesting to figure out what is the twisted Hilbert space by $\eta$. We know that whatever it is, it should still be decomposable into irreducible $\text{Vir}\oplus \text{Vir}$ representations. In fact, if we calculate it using tools that we haven't developed so far, we will find that
$$
\mathbb{H}_{\eta} = (V_0 \otimes V_2) \oplus (V_2 \otimes V_0)\oplus (V_1 \otimes V_1).
$$
In some sense the twisting operation changed the type of states (or fields) that we have available in the twisted sector, but the chiral algebra remained $\text{Vir}$. This was somewhat a trivial example, since, of course the chiral algebra would remain Virasoro, otherwise we would twist and not get a conformal field theory. But this is a general property that we expect when twisting theories with larger invariant chiral algebras.

The next natural question then is to think about the case where a rational CFT has a chiral algebra $A$ but only a the action of a subalgebra $A^g$ is equivariant under the representation of $g \in G$. Well since $A_g$ is a subalgebra of $A$ it is still a chiral algebra so in principle we would expect the twisted sector to be an $A^g \oplus A^g$ module, but what happens with the remaining algebra $A/A_g$? We can still use it to build operators that are well defined in our theory, it's just that they would have to act differently in the twisted Hilbert space to account for the monodromy of $g$. 

This is a key observation about twisting our Hilbert space. Since we can build operators from a chiral algebra that we could write down in the untwisted theory, we expect that we should be able to write them down in the twisted sector too by modifying them in such a way that the monodromy requirement is satisfied. In other words, we expect to be able to use the operators of the untwisted sector to obtain the ones in the twisted sector!

A physical way to interpret this is that if we have a theory of something like an electric field, we should expect that after twisting we would get very different available configurations of that electric field, but we shouldn't expect to obtain a matter field. The content of the untwisted sector can uniquely define the content of the twisted one. This sounds imprecise AF, but the whole point of these notes is to make it precise. Let's start outside of CFT with group representations. 

# Induced Group Representations

The last thing we hinted at in the motivation was that we should be able to use the untwisted content to obtain the twisted one. This may sound obvious from the field theory perspective (if you have a scalar field $\psi$ you don't expect to somehow obtain a weird tensor field $T$ after twisting), but when our theory is basically a Hilbert space the field content is a bit obscure. So let's put this intuition aside for a second and tackle a much more tractable problem. The induced representations of finite groups.

> The problem is the following. We have a finite group $G$ and a subgroup $H$. If someone gives us a representation of $H$ is there a natural way to extend it to a representation of $G$? 

At first glance this is only slightly relevant to our original problem. Yes in some way we have a representation and we want to use some kind of argument to extend it, but the similarities seem to end there. In fact the answer to this problem is very quickly generalizable to what we are interested in, so let's study it in isolation, and then view the extension.

**<u>Theorem:</u>** Let $G$ be a finite group with a subgroup $H$, and consider a representation $\rho: H \to \text{Aut}(V)$ for some vector space $V$. Then fix an embedding $\iota : G/H \to G$ and for each $[g]\in G/H$ define  $[g]V \cong V$ with an isomorphism $i_g: [g]V \to V$ and the vector space
$$
\text{Ind}_H^GV = \bigoplus_{[g] \in G/H} [g]V.
$$
This vector space carries a direct sum representation $\hat \rho$ of $H$ defined for any $h \in H$ by  $\left. \hat \rho(h) \right|_{[g]V} = i_g^{-1} \circ \rho(h) \circ i_{g}$. It also caries a representation $\tilde \rho$ of $G$ defined like so. Let $k \in G$ and let $h_k \in H$ be such that
$$
k\, \iota([g]) = h_k\, \iota([kg]) \implies h_k = k\, \iota([g])\, \iota([kg])^{-1}.
$$
Then 
$$
\left.\tilde{\rho}(k)\right|_{[g]V} = i_{kg}^{-1} \circ \rho(h_k) \circ i_{g}.
$$
***Proof:*** The action is basically create a big vector space that has one copy per equivalence class of $H$ in $G$ and then when acting on it by $G$ permute the copies the same way that $G$ permutes its equivalence classes.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
This is nice! This solution is a mostly straightforward answer in inducing a nontrivial representation to the whole group. However, it is not in a language that can be easily generalized. Here is an alternative way of defining the induced representation.

**<u>Theorem:</u>** Let $G$ be a finite group with a subgroup $H$, and consider a representation $\rho: H \to \text{Aut}(V)$ for some vector space $V$, then the induced representation above can be written as
$$
\text{Ind}_H^GV \coloneqq \{f : G \to V \mid \forall h\in H,\  f(hx) = \rho(h) f(x)\},
$$
and has the group action $\tilde \rho : G \to \text{Aut}(\text{Ind}_H^GV)$ defined for any $g,x \in G$
$$
\tilde \rho(g)f(x) = f(xg).
$$
 This is in particular a right action.

***Proof:*** For a group $G$ there is a bijection between the set of $H$ equivariant maps and the set of maps from $G/H$. The set $\{G/H \to V\}$ for a finite group $G/H$ is isomorphic as a vector space to $V^{|G/H|}$ which is in turn isomorphic to the vector space we showed before. Then we have an inclusion so we map between the two.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
This is an equivalent restatement, but it allows us to generalize the definition of the induced representation to non-finite groups! In fact we can use this theorem as a definition for the induced representation of a non-finite group $G$. We are now getting seriously close  to talking about $A$ modules and twisting.



# Extension to Modules

In the previous example we considered covariance as the requirement for the extension of the group representation. And while this is perfectly possible, there is no reason that this is the only possible condition.











