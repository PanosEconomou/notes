# Conformal Boundaries

What happens when we try to do a 2D CFT on a manifold that has a Boundary? In these notes we describe what are boundary states, as well as conformal and topological defects that our theory can have. Most of these are stolen from

1. [Di Francesco](https://link.springer.com/book/10.1007/978-1-4612-2256-9)
2. [Conformal Defects in 2D CFT](https://kclpure.kcl.ac.uk/ws/portalfiles/portal/105923299/2018_Makabe_Isao_0802395_ethesis.pdf)
3. [Boundary Conformal Field Theory](https://arxiv.org/abs/hep-th/0411189)
4. [Boundary Conformal Field Theory and D-branes](https://people.phys.ethz.ch/~mrg/CFT/Budapest.pdf)

[toc]

# Modular Invariance

Before we talk about boundaries let's try to explore some relevant properties of Conformal Field Theories that should not be broken when we add a boundary. To study modular invariance we will talk about intertwiners. These are objects that map between representations of CFTs. 

## Complex Quotient Maps of Tori

To explain modular invariance, let’s try to understand modular transformations. To do this, we need to understand how we can obtain a torus from the complex plane.

**<u>Lemma:</u>** Any complex number $\tau \in \mathbb H\subset \mathbb C $ in the upper half plane defines the **torus equivalence** relation on $\mathbb C$ such that
$$
z \sim z + n + m\tau,
$$
where $n,m\in \mathbb Z$. 

This is pretty clear to verify, but the picture is looks like this. 



![modular-plane](_Boundaries.assets/modular-plane.svg)



Essentially, each parallelogram is equivalent to each other. If we take the quotient we get a torus like so.

**<u>Theorem:</u>** The quotient $\mathbb C/{\sim}$ under the torus equivalence is homeomorphic to a torus iff $\Im \tau \neq 0$ otherwise it is homeomorphic to a Cylinder.

***Proof:*** Consider the surjective map $\mathbb C \to I^2$ such that $z + m + n\tau \mapsto $ that preserves the identifications of the torus equivalence. Then we see that the quotient map $I^2 \to T^2$ also preserves the identifications of the torus equivalence. In the case of $\Im \tau = 0$ we have that the above is no longer true. However, we can map every horizontal line into a segment like so $\mathbb C \to \mathbb R\times I$, and then notice that a quotient map to the cylinder $\mathbb R\times I \to \mathbb R\times S^1$ respects the identifications made. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
**<u>Corollary:</u>** The quotient under the torus equivalence is diffeomorphic to the flat torus, i.e. the Riemannian manifold $(T^2 \coloneqq S^1\times S^1,g)$ where the metric is given by the canonical product metric of Euclidean circles.

***Proof:*** We can think of the quotient $\mathbb C/{\sim}$ under the torus equivalence as the quotient by the group $\mathbb Z^2$ under the smooth action defined by $\tau \in \mathbb C$ on $\mathbb C$. Also, the action is free (the stabilizer of any point in $\mathbb C$ is trivial), proper (under the map $\mathbb Z^2\times \mathbb C \to \mathbb C \times \mathbb C$, given by $(g,x) \mapsto (gx,x)$ the preimage of any compact set is compact, we just translate it), and isometric (For any $g\in \mathbb Z^2$ the orbit map is an isometry since in this case it is a translation).

Then by the quotient manifold theorem, the quotient is a smooth manifold of dimension 2, and the quotient map $q : \mathbb C \to \mathbb C/\mathbb Z^2$ is a submersion. As a result the map $q^\ast$ is injective and linear, therefore by dimension counting it is an isomorphism of the cotangent tangent spaces pointwise. Therefore, we can define a metric on the quotient as $g'= (q^{\ast})^{-1}g$.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

## Conformal Equivalence

Conformal equivalence is the property we want the modular transformations to preserve. So let's think about it first before we think of the rest. The idea is very simple. 

**<u>Definition:</u>** Two Riemannian manifolds $(M,g)$ ans $(N,h)$ are **conformally equivalent** iff there exists a diffeomorphism $f:M\to N$ such that
$$
f^\ast h = \Omega^2 g,
$$
for some $\Omega \in C^\infty(M)$. 

**<u>Corollary:</u>** Conformal equivalence is an equivalence relation.

The intuition behind conformal equivalence is that two manifolds are conformally equivalent if I can take one and stretch it into the other without changing the orientation or any of the angles in the process. 

**<u>Example:</u>** The flat tori obtained by the torus equivalence for some $\tau \in \mathbb H$ and $-\frac{1}{\tau}$ are conformally equivalent. 

***Proof:*** The transformation $R : \mathbb C\to \mathbb C$ given by $z\mapsto -e^{-i\arg \tau}z$ is a conformal transformation as a rotation of the complex plane. The same thing is true for scalings $D :\mathbb C\to \mathbb C $ where $z\mapsto \frac{1}{||\tau||} z$. We note that the transformation $z\mapsto -\frac{1}{z}$ is the composition of the two so it is conformal. 

Now take a look at he following commutative diagram.
$$
\begin{CD}
\mathbb C @>f>> \mathbb C\\
@Vq_{\tau}VV @VVq_{-\frac{1}{\tau}}V\\
\mathbb C/{\mathbb Z^2} @>>\tilde f> \mathbb C/{\mathbb Z^2}
\end{CD}
$$
We have a conformal map $f$ such ttaht $q_{-\frac{1}{\tau}} \circ f$ respects the identifications of $q_\tau$. As a result the composition descends to the quotient. In other words there exists a unique map $\tilde f :  \mathbb C/\mathbb Z^2\to \mathbb C/\mathbb Z^2$ such that 
$$
\tilde f\circ q_\tau = q_{-\frac{1}{\tau}} \circ f.
$$
Using this, we can prove that $\tilde f$ is conformal. Consider the metric
$$
g_{-\frac{1}{\tau}} = (q_{-\frac{1}{\tau}}^\ast)^{-1} g,
$$
of the right quotient. Then we can take the pullback under $\tilde f$ to obtain
$$
\begin{align*}
\tilde f^\ast g_{-\frac{1}{\tau}} 
&= \tilde f^\ast \circ (q_{-\frac{1}{\tau}}^\ast)^{-1} g\\
&= (q_{\tau}^\ast)^{-1} \circ f^\ast \circ q_{-\frac{1}{\tau}}^\ast \circ (q_{-\frac{1}{\tau}}^\ast)^{-1} g\\
&= (q_{\tau}^\ast)^{-1} \circ f^\ast g\\
&= (q_{\tau}^\ast)^{-1} \Omega^2 g\\
&= \tilde \Omega^2 g_{\tau}.
\end{align*}
$$
where we have used the fact the that quotient maps are submersions, therefore their pullback is surjective, and thus invertible since the dimension of the quotient is the dimension of the original manifold. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

## The Modular Group

Now we are ready to find the modular group. 

**<u>Definition:</u>** A diffeomorphism $f: \mathbb H \to \mathbb H$ is called **modular** if for every $\tau \in \mathbb H$ the torus quotients under $\tau$ and $f(\tau)$ are conformally equivalent.

Before we find them, let’s think about lattices for a second. 

**<u>Definition:</u>** Given a vector space $(V,\mathbb K)$ with a basis $B \subset V$ over a field $\mathbb K$, and a ring $R\subset \mathbb K$, a **lattice** $\Lambda \subset V$ is the $R$ span of the basis $B$ given by
$$
\Lambda \coloneqq \left\{ \sum_{b\in B}^\infty r_b b\ \middle|\ r_b \in R  \right\}
$$
This definition gives us exactly what we expect from a lattice. We pick a basis, such that we can get to every point in the lattice in integer steps. The reason for introducing them in the first place is because a lattice induces an action of the group $R^{|B|}$ on the vector space $V$ like so.

**<u>Lemma:</u>** Every lattice $\Lambda$ on a vector space $(V,\mathbb{K})$ over ring $R\subset \mathbb{K}$ spanned by the basis $B \subset V$ is homomorphic to $R^{B}$ under addition. 

***Proof:*** The following map is a group homomorphism
$$
\begin{align*}
f: R^{B} &\to \Lambda\\
\{r_b\}_{b\in B} &\mapsto \sum_{b\in B} r_b b \in \Lambda
\end{align*}
$$
this map is called the **defining homomorphism**. Just so that we can have a name for it.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
Now we use this to find the group action. 

**<u>Proposition:</u>** Given a lattice $\Lambda$ on a topological vector space $(V,\mathbb{K})$ over ring $R\subset \mathbb{K}$ spanned by the basis $B \subset V$, the map 
$$
\begin{align*}
\rho: R^{B}\times V &\to V\\
(r,v) &\mapsto  v+f(r),
\end{align*}
$$
where $f:R^{B}\to \Lambda$ is the defining homomorphism, defines a *free* and *proper* group action of $R^B$ on $V$.

***Proof:*** It is easy to see that it is a group action, since for any $g\in R^{B}$ the induced map
$$
\rho_g : V\to V,
$$
is a vector space isomorphism (so technically $\rho$ is a representation), since it acts by translation. To show that it is free, we need to show that for any $v \in V$, its stabilizer is trivial. The stabilizer for any point is defined as
$$
S_v \coloneqq \{ g \in R^B \mid gv = v\}.
$$
However, we can see that in this case, we have that $gv = v+ f(g)$ so this implies that $g\in S_v \iff f(g) = 0 \iff g=e$. So the stabilizers are trivial, hence the action is free. Then we can show that the action is proper. A proper action, satisfies that the preimage of any compact set under the map
$$
\begin{align*}
R^B \times V &\to V\times V\\
(g,v) &\to (gv,v)
\end{align*}
$$
is compact. To show this we treat $R^B$ with the subset topology induced by the defining homomorphism of $f:R^B \to \Lambda \subset V$ and we can see that the preimages of compact sets are simply translated, so they remain compact in the topological vector space topology since translations are proper maps, and so are their products.

Therefore the action is free and proper. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
We have enough tools to find the modular transformations now. We will do so by first classifying the conformal automorphisms of the flat torus and then get the modular transformations for free. 

**<u>Lemma:</u>** Any conformal automorphism of a flat torus, lifts to a conformal map of the complex plane.

***Proof:*** We can construct any flat torus given the action of $\mathbb Z^2$ on $\mathbb C$ defined using a lattice $\Lambda$ over $\mathbb Z$ defined using the basis $w \in \mathbb{C}^2$, i.e.
$$
\Lambda \coloneqq \{mw_1 + nw_2 \in \mathbb{C}\mid m,n \in \mathbb Z\}.
$$
 Using the previous theorem, the action of $\mathbb{Z}^2$ on $\mathbb{C}$ defined by the lattice $\Lambda$ is free and proper, therefore by the quotient manifold theorem, the quotient map $q$ by the $\mathbb Z^2$ orbits is a well defined submersion of $\mathbb{C}$ to the flat torus. Now consider the following commutation diagram
$$
\begin{CD}
\mathbb{C} @>\tilde f>> \mathbb{C}\\
@VqVV @VVqV\\
\mathbb{C}/\mathbb{Z}^2 @>>f> \mathbb{C}/\mathbb{Z}^2
\end{CD}
$$
where $f$ is conformal. It is easy to see that $q$ is a covering map, therefore $f$ lifts to a smooth map $\tilde f$ between the covering spaces. In other words, we can see that $f\circ q : \mathbb{C}\to \mathbb{C}/\mathbb{Z}^2$ is a well defined map, and it should have a lift $\tilde f : \mathbb{C}\to \mathbb{C}$ to the covering space of the torus. This map has the property: 
$$
q\circ \tilde f = f\circ q.
$$
By fixing the origin this map we guarantee uniquess. Also, since $f$ is invertible then we so is $\tilde f$. We will now show that the lifted map is indeed conformal. To do so we use the fact that $q$ is a submersion. 

The metric of $T_{\Lambda} \coloneqq \mathbb{C}/\mathbb{Z}^2$ is given by
$$
g_\Lambda = (q^\ast)^{-1} g,
$$
where $g$ is the metric of $\mathbb{C}$ and we know that $q^\ast$ is invertible, because $q$ is a submersion to a manifold of the same dimension. Since $f$ is conformal, we know that
$$
f^\ast g_{\Lambda} = \Omega^2 f,
$$
for some $\Omega \in C^\infty(T_{\Lambda})$. We also know that 
$$
(q\circ \tilde f)^\ast = \tilde f ^\ast \circ q^\ast = (f\circ q)^\ast = q^\ast \circ f^\ast \implies \tilde f^\ast = q^\ast \circ f^\ast \circ (q^\ast)^{-1}
$$
which, by the way, is the conjugation of $f^\ast$ which I think is pretty cool. Regardless, we can now calculate 
$$
\begin{align*}
\tilde f^\ast g 
&= q^\ast \circ f^\ast \circ (q^\ast)^{-1}g\\ 
&= q^\ast \circ f^\ast g_{\Lambda}\\
&= q^\ast (\Omega^2 g_{\Lambda})\\
&= (\Omega^2 \circ q)\ q^\ast g_{\Lambda}\\
&= (\Omega^2 \circ q) g
\end{align*}
$$
Therefore $\tilde f$ is conformal.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
This was a lot of proof. In essence, we said that any conformal map of the flat torus is can be thought of as a conformal map of the complex plane. And we are about to use this fact to find all the conformal transformations of the plane. We do this by first classifying the conformal maps of the torus.

**<u>Theorem:</u>** The conformal maps of the flat torus are the group $GL(\mathbb Z^2)$ under composition.

***Proof:*** Any such conformal map of the torus lifts to a conformal map of the complex plane. However, since any flat torus is defined by the action of some lattice, in order to obtain the same torus we need the conformal map to leave the lattice invariant. Therefore it must map a lattice basis to a different lattice basis. This implies that the map is an element of $GL(\mathbb Z^2)$. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
Now we can finally find the modular transformations.

**<u>Lemma:</u>** The set of modular transformations is the group $PSL(\mathbb Z^2)$ under composition. 

***Proof:*** The modular transformations are the transformations of $\tau$ such that the resulting quotient under the torus equivalence gives conformally equivalent tori. We know that given a basis $w \in \mathbb{C}^2$ for a lattice $\tau \coloneqq \frac{w_1}{w_2}$ as a result, any conformal transformation of the torus will affect $\tau$ only as far as the fraction is irreducible, therefore the only nonequivalent elements form the group $SL(\mathbb{Z}^2)$.  Wanting to keep $\tau \in \mathbb{H}$ in the upper half plane, we want to identify the elements of the center of the group, such that we don\'t accidentally shift the orientation. Therefore we obtain the projective group $PSL(\mathbb{Z}^2)$. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$



## From the Sphere to the Cylinder to the Torus

Conformal Field theories are usually defined on a sphere $\bar{\mathbb{C}}$ which is the one point compactification of $\mathbb{R}^2$. Modular conformal theories however, are the ones that can be expressed as living on the torus. Here we describe unambiguously what the series of mappings are, and how these induce different representations of the Virasoro algebra on the Hilbert space.

Using the stress tensor we have defined an important representation $\rho: \text{Vir} \to \text{End}(\mathcal{H})$ of the Virasoro Algebra on the Hilbert space $\mathcal{H}$ of our CFT. One key observation is that if we change our base space from $\bar{\mathbb{C}}$ to something else, we would have to push the stress tensor forward. Then the new stress tensor will induce a different representation of the Virasoro algebra for our CFT. 

Let's see this in practice  

**<u>Proposition:</u>** The map $f: \mathbb{C} \to \bar{\mathbb{C}}$ defined by
$$
f(z) = e^{z}
$$
is conformal. 

***Proof:*** It is analytic.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
This transformation maps the punctured plane to the conformal sphere. We will use this to construct a quotient map to the cylinder. But first, let's see how the stress tensor changes when we pull it back by that map.  

**<u>Lemma:</u>** The pullback of the stress tensor $T=T(z)dz\otimes dz + \bar T(\bar z) d\bar z \otimes d\bar z$ under any conformal map $f:\bar{\mathbb{C}} \to \bar{\mathbb{C}}$ is given by
$$
f^\ast T = \left[\left(\frac{df}{dz}\right)^{2} T\circ f + \frac{c}{12}\{f;z\}\right]dz\otimes dz +  \left[ \left(\frac{d\bar f}{d\bar z}\right)^2 \bar T\circ f + \frac{c}{12}\{\bar f;\bar z\}\right] d\bar z\otimes d\bar z,
$$
where $\{f;z\}$ is the Scwartzian derivative given by
$$
\{f;z\} = \frac{f'''(z)}{f'(z)} - \frac{3}{2} \left( \frac{f''(z)}{f'(z)} \right)^2.
$$

***Proof:*** This expression is not obvious. The first term of each component is what we expect the pullback to be classically (which is derived the standard way). The presence of the conformal anomaly in the second term is because in the process of taking the pullback we inevitably encounter the OPE with the stress tensor itself. There are more steps here, but I am not sure I can calculate them.

Mathematically, we can think of it like so. The stress-tensor (the operator) transforms under the induced representation of the Virasoro algebra on the Hilbert space, while the classical stress-tensor (the tensor field) transforms under the Witt algebra.  Therefore, the appearance of the central charge in the transformation law is not unexpected. 
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
Knowing how the stress tensor transforms under a conformal transformation $f$, we can induce the new representation of the Virasoro algebra on the Hilbert space that corresponds to the conformal field theory that "lives" in the domain of the transformation $f$. The way we do so is by defining $T' = f^\ast T$ and the new representation by 
$$
\begin{align*}
\rho_f(L_n) \coloneqq \frac{1}{2\pi i}\int_{C} f^\ast \left(z^{n+1} T\right)
\end{align*}
$$
where $C \subset \mathbb{C}$ is a closed curve that encloses the origin and no other singularities of $T$. Here is an example using the transformation we defined in the previous proposition.

**<u>Proposition:</u>** Under $f(z) = e^{z}$ we have that the holomorphic part of the stress tensor is given by
$$
T'(z) = e^{2z} T(e^{z}) - \frac{c}{24}
$$
***Proof:*** Plug in $f'=f$ into the formula of the previous lemma.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
Similarly we can get the antiholomorphic part. This has the following corollary.

**<u>Corollary:</u>** The Dilation operator $H = \rho(L_0 + \bar L_0)$ and momentum operator $P = \rho(L_0 - \bar L_0)$ are pulled back under $f$ to be
$$
\begin{align*}
H_f &= \rho_f(L_0 + \bar L_0) =\rho(L_0 + \bar L_0) - \frac{c}{12} = H-\frac{c}{12}\\
P_f &= \rho_f(L_0 - \bar L_0) =\rho(L_0 - \bar L_0) = P.
\end{align*} 
$$

This is all that our Lie algebra representation knows about transformations. Here is an example.

***Proof:*** The related vector field to dilation in the conformal sphere (minus the poles) is given by 
$$
X_{H} = -z \frac{\partial }{\partial z} - \bar z \frac{\partial }{\partial \bar z }.
$$
Notice that we can pull this back to $\mathbb{C}\setminus \{0\}$ at least locally since $e^{iz}$ is a diffeomorphism $f:\mathbb{R}\times (0,2\pi)\subset \mathbb{C} \to\mathbb{C}\setminus\{0\}$. So the pushforward of $f$ is a linear isomorphism of tangent spaces. As a result, using $w$ to denote the coordinate of $(0,2\pi) \times \mathbb{R}$ and $z$ for the coordinate of $\mathbb{C}\setminus\{0\}$ as is conventional we have that
$$
\begin{align*}
f_\ast \frac{\partial }{\partial w} = ie^{iw} \frac{\partial }{\partial z} = iz \frac{\partial }{\partial z} && f_\ast \frac{\partial }{\partial \bar w} = -ie^{\bar w} \frac{\partial }{\partial \bar z} = -i\bar z \frac{\partial }{\partial \bar z}.
\end{align*}
$$
Therefore we can see that the pullback of $X_H$ is
$$
X_{H_{f}} = \left( f_{\ast} \right)^{-1} X_H = i\frac{\partial }{\partial w} - i\frac{\partial }{\partial \bar w } = -\frac{\partial }{\partial y},
$$
or otherwise known as the translation vector field along the imaginary axis (in the opposite direction). Similarly, for the momentum operator, the related vector field on the sphere is given by
$$
X_P = -z \frac{\partial }{\partial z} + \bar z \frac{\partial }{\partial \bar z },
$$
 hence its pullback is
$$
X_{P_{f}} = \left( f_\ast \right)^{-1}X_P = i\frac{\partial }{\partial w} + i\frac{\partial }{\partial \bar w} = i \frac{\partial }{\partial x}.
$$
Now that we have pulled back our vector fields, we can finally obtain the pullback Virasoro generators by contracting with the pullback of the stress tensor and then integrating along a "spacelike" slice.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$



**<u>Example:</u>** Consider translations by $\tau \in \mathbb{C}$ of our new theory obtained by pullback under $f(z) = e^{iz}$. 



## Partition Functions

What we will show here, is that a partition function for a conformal field theory gives us information about the structure of the Virasoro level decomposition of the Hilbert space of the CFT! To do this, however, we would have to be able to define it using a path integral somehow, which is not possible for compact domains. This is where tori come to play. 

Given a parameter $\tau \in \mathbb{H}$ the flat torus we will get under the torus equivalence will have $\tau$ as the "time" coordinate.

Therefore the Hamiltonian of the theory defined on the torus would be the Virasoro generator of translations along $\tau$, which is given by
$$
H_{\tau} = -iH\, \Im \tau -  P \, \Re \tau ,
$$
where $H = L_0 + \bar L_0 - \frac{c}{12}$ is the generator of translations in the imaginary direction of the conformal cylinder, and $P = L_0 - \bar L_0$ is the generator of translations on the real direction on the conformal cylinder. *The reason for the $-i$ in front of the Hamiltonian is because we have performed the transformation to the cylinder $z = e^{iw}$ we are actually evolving by an amount* $t=-i\text{Im\,}\tau$. 

**<u>Definition:</u>** For a given automorphism $A : \mathcal{H} \to \mathcal{H}$ of some Hilbert space $\mathcal{H}$, its **partition function** $Z_A \in \mathbb{R}$ is defined as the trace
$$
Z_A = \Tr e^{-iA}.
$$
The physical definition for this quantity as the partition function comes from finite temperature field theory, and can be found [here](../Quantum_Fields/Thermal_QFT.md#Free-Theory-Partition-Functions-\(Intuition\)). The cool result is that partition functions in the torus are related to the structure of the level decomposition of the Hilbert space of the theory. We will show this in steps. 

**<u>Lemma:</u>** The **modular partition function**, i.e. the map $Z:\mathbb{H} \to \mathbb{R}$ given by
$$
Z(\tau) = \Tr e^{-iH_\tau},
$$
is given by
$$
Z(\tau) = \text{Tr\,} q^{L_0 - \frac{c}{24}}\bar q^{\bar L_0 - \frac{c}{24}},
$$
where $q = e^{i \tau}$.

***Proof:*** We can perform the algebra
$$
\begin{align*}
Z(\tau) 
&= \text{Tr\,} \exp \left[ -\frac{\tau-\bar \tau}{2i}\left(L_0 + \bar L_0 - \frac{c}{12}\right) + \frac{\tau+\bar \tau}{2} i(L_0 - \bar L_0) \right]\\
&= \text{Tr\,} \exp i \left[ \tau \left(L_0 - \frac{c}{24}\right) - \bar \tau \left( \bar L_0 - \frac{c}{24} \right)\right]\\
&= \text{Tr\,} \exp \left[ i\tau \left(L_0 - \frac{c}{24}\right)\right] \exp \left[- \bar \tau \left( \bar L_0 - \frac{c}{24} \right)\right]\\
&= \text{Tr\,} q^{L_0 - \frac{c}{24}}\bar q^{\bar L_0 - \frac{c}{24}}.
\end{align*}
$$

$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

The interesting result of this, however, is that these look so much like [characters](../Quantum_Fields/Minimal_Models.md#Characters-for-Rational-Modules)! In fact, we will see that modular invariance of the partition function will help us calculate the operator algebra for minimal models by solving for characters.



# Conformal Boundaries

The reason we did all this was to be able to describe what's called the modular partition function of a CFT. We will see at a different point how are those things actually related to one another, but for now, let's try and restrict our attention on boundaries. 

## Conformal Boundary Condition

Let's consider a CFT on the closed upper half plane $\overline{\mathbb{H}} \subset \mathbb{C}$. Now we have a boundary at the real axis, and that is somewhat confusing in terms of our symmetry. Clearly doing conformal transformations we would move the boundary around. 

Therefore, we have to refine what we mean by conformal invariance. The easiest way to think about it would be to restrict our attention to transformations that leave the boundary alone. In other words we want to consider conformal transformations $f:\overline{\mathbb{H}}\to \overline{\mathbb{H}}$ such that
$$
f^\ast g = \Omega^2 g,
$$
where $g$ is the metric on $\overline{\mathbb{H}}$ and such that $f(z,\bar z) = \overline {f(z,\bar z)}$ whenever $z = \bar z$. This restricts the representations of the Virasoro algebra we have in our theory. 

**<u>Theorem:</u>** The local conformal transformations that preserve the real axis on $\overline{\mathbb{H}}$ form a representation of the $\text{Witt}$ algebra. 

***Proof:*** We know that conformal transformations are either holomorphic or antiholomorphic functions. Therefore they must form a representation of $\text{Witt}\oplus \text{Witt}$ as we have shown before. Now without loss of generality assume that a local conformal transformation is given by the Laurent expansion
$$
f(z) = f_n z^{n+1}.
$$
Since for all $x \in \mathbb{R}$ we must have that $f(x) = \bar f(x)$ then it is true that $f_n = \bar f_n \implies f_n\in \mathbb{R}$. A similar argument applies to the antiholomorphic coefficients. Since $\text{Witt}$ is a complex Lie algebra, this amounts to picking the real part of the Lie algebra for the holomorphic and the imaginary for the anti holomorphic functions. As a result, the full algebra is
$$
\text{Witt}^+ \oplus \text{Witt}^+ \cong \text{Witt}.
$$

$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

This is very nice condition! In essence, our symmetry was reduced by half by imposing that the boundary stays put. Here is a more physical interpretation.

**<u>Corollary:</u>** $T(x) = \bar T(x)$ for any $x \in \mathbb{R}$.

***Proof:*** Conformal invariance under the new $\text{Witt}$ (instead of itself squared) algebra implies that since the coefficients for each conformal transformation must be real. Therefore, we would never be able to create a transformation with flow along
$$
\frac{\partial }{\partial y} = -i\left(\frac{\partial }{\partial z} - \frac{\partial }{\partial \bar z}\right) = i \left( l_{-1} - \bar l_{-1} \right),
$$
on the real axis, where $l,\bar l$ are the representations of the generators of the $\text{Witt}$ algebra as defined in the conformal sphere in a regular cft.  Since the stress tensor $T = Tdz^2 + \bar T d\bar z^2$ induces a representation of the new algebra on the fields (through the conserved currents), the representation of $\frac{\partial }{\partial y}$ must vanish on the boundary. Otherwise we would have that our theory has an extra conserved current that just the ones that can be obtained by conformal symmetry which we identified.

*Notice that this statement is equivalent to saying that no energy flows along the boundary since any conserved current associated with the perpendicular direction to the boundary must vanish.*

We can now do some algebra to show
$$
T\left( \frac{\partial }{\partial y} \right) = iTdz -i\bar T d\bar z.
$$
Taking the pullback to the real line $x+iy \mapsto x$ we have that
$$
i\left(T(x) - \bar T(x)\right)dx = 0 \implies  T(x) = \bar T(x).
$$
It is possible to make a more careful statement through decomposing the representation of the original CFT. That would involve thinking of the projective representation of the Witt Algebra, induced by the conserved charges, as a subrepresentation of the real part of $\text{Witt} \oplus \text{Witt}$ under some injection $\iota: \text{Witt}^+ \oplus \text{Witt}^+ \to \text{Witt} \oplus \text{Witt}$.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

## Intuition Behind Boundary States

What we want to motivate here is that for each **boundary condition** we can find a **boundary state** that implements it. To understand this statement, let's give intuition and consistency conditions behind the definition of Boundaries. 

The effect of a boundary condition is to assign the value of a field on the boundary of the manifold it lives in. Therefore in some sense we can think of a boundary condition as a map of the form $\text{Fields} \to \mathbb{C}$. Yet from the operator state correspondence a boundary condition can be thought of as a structure preserving map $\mathcal{H} \to \mathbb{C}$ where $\mathcal{H}$ is the Hilbert space of the theory. Therefore, we can see that a boundary state is an element of $\mathcal{H}^\vee$ the dual space of $\mathcal{H}$. States in $\mathcal{H}$, or series thereof, can define elements of the dual space. Such series are called **boundary states**.

Without any further exploration this idea is useless in finding the states. In what follows we present a bunch of consistency conditions that these boundary states should satisfy that constrains which states can be boundary states or not.  

## Chiral Algebras

One of the greatest results in classifying CFTs is that we can do this using representation theory of **Chiral algebras**. A chiral algebra is the Lie algebra generated by the modes of a **chiral field** in a CFT. Let's define these.

**<u>Definition:</u>** Given a conformal field theory, a local conformal field operator $W : \mathbb{C}\setminus\{0\} \to \text{End\,}(\mathcal{H})$ with conformal weight $h$ is **chiral** iff it is holomorphic. The Laurent modes of that field
$$
W_n = \frac{1}{2\pi i}\int_{S^1} W(z) z^{n - 1 + h} dz,
$$
along with their Lie bracket of $\text{End\,}(\mathcal{H})$ generate a Lie Algebra $\mathcal{A}$ known as a **chiral algebra generated by** $W$. Given a set of multiple local conformal field operators $\mathcal{W } = \{W^i\}_{i=0}^n$ that *close under OPEs* one can form a chiral algebra generated by $\mathcal{W}$ using their Laurent modes in exactly the same way.

It is possible to extend this definition to operator valued distributions $W$ with discrete compact support. This definition of a chiral algebra is known as a *holomorphic* chiral algebra. Similarly one can define an antiholomorphic chiral algebra using antiholomorphic local fields. To understand this, there is always a chiral algebra in any CFT. 

**<u>Example:</u>** *(Virasoro)* For every 2D CFT we axiomatically have a chiral field with conformal weight $2$ called the chiral part of the stress tensor $T(z)$. We know that its modes generate the Virasoro algebra. So the chiral algebra generated by the holomorphic part of the stress tensor $T$ is $\text{Vir}$. The antiholomorphic chiral algebra is also $\text{Vir}$ by the way.

**<u>Example:</u>** *(W Algebras)* We could consider chiral algebras generated using multiple chiral fields. If we restrict our attention where all the chiral fields $\{W^i\}_{i=1}^n$ are conformal primaries with weights $h_i$ then we denote the corresponding chiral algebra as $W(h_1,h_2, \cdots, h_n)$ since we can show that the commutation relations only depend on the conformal weights. Such an algebra is known as a **W Algebra**.

Notice that $W(2) = \text{Vir}$ since the stress energy tensor has conformal weight $2$. We often consider extensions of Virasoro by Virasoro primaries given by $W(2,h_1,h_2,\cdots, h_n)$. Since the chiral fields $W^i$ are primaries we can calculate that their modes satisfy
$$
[L_n,W^i_m] = (n(h_i-1)-m)W_{n+m}^i.
$$
The commutation relations between $W^i$ modes are more complicated.



Almost always when we refer to the chiral algebra of a 2D CFT we refer to a chiral algebra that has the strss tensor $T$ as one of its generators unless specified otherwise. Ok so why care about chiral algebras? That is because of the following corollary

**<u>Corollary:</u>** Let $\mathcal{A}$ be a chiral algebra and $\mathcal{\bar A}$ the corresponding antiholomorphic chiral algebra. Then the Hilbert space of the corresponding CFT is a Lie algebra representation of $\mathcal{A}\otimes \bar {\mathcal{A}}$.   

We can play with this a little in the Ising model.

**<u>Example:</u>** The 2D Ising CFT corresponds to the representation of $\text{Vir} \otimes \text{Vir}$ given by
$$
\mathcal{H} = W_0\otimes W_0 + W_{\frac{1}{16}} \otimes W_{\frac{1}{16}} + W_{\frac{1}{2}} \otimes W_{\frac{1}{2}},
$$
where $W_i$ are the irreducible highest weight representations of $\text{Vir}$ with conformal weight $h$ and central charge $\frac{1}{2}$. However, none of the fields here, other than the stress tensor can be considered to extend the Chiral algebra since the inclusion of any field's modes will make the algebra not closed under OPEs. However we can consider squaring the Ising model! Let the set of conformal weights be $H = \{0,\frac{1}{16},\frac{1}{2}\}$ then the Hilbert space of the Tricritical Ising Squared is defined by
$$
\mathcal{H} = \bigoplus_{{i,j} \in H} (W_{i}\otimes W_j) \otimes (W_{i}\otimes W_j).
$$
With a little work we can show that $W_i \otimes W_j$ is an irreducible highest weight representation of $\text{Vir} \oplus \text{Vir}$ with central charge $1$. So now we can see that directly from this decomposition the chiral algebra is $\mathcal{A} = \text{Vir}\oplus \text{Vir}$. Another way to arrive to this result is to realize that the stress tensor of the combined theory is
$$
T = T^1 + T^2,
$$
where $T^i$ is the chiral part of the stress tensor in each copy of Ising. The chiral algebra formed by the modes of $T^i$ is $\text{Vir}$. Yet, we can find another chiral field $T'$ that is defined by
$$
T' = T^1- T^2.
$$
Another cool thing we can do is to see that $T'$ is primary with respect to $T$. Now we can see that both are closed under fusion and therefore, we can form their combined chiral algebra $ W(2,2) = \text{Vir} \oplus \text{Vir}$. If we were to write the Ising model squared in terms of representations of $\text{Vir}$ we would need infinitely many!
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
 

## Preserving Symmetry

Now that we have a way to talk about chiral algebras we can finally see what it means for a boundary to preserve a symmetry. We have painstakingly shown using first principles that the boundary preserving conformal symmetry of the theory leads to the condition that
$$
T(z) = \bar T(z), \ \forall z \in \mathbb{R}.
$$
Now we can interpret $T$ to be the generator of the Virasoro chiral algebra. In other words, we can extend our idea of preserving a symmetry to preserving a chiral algebra. For example, if there is another chiral field $W$ that closes under fusion with $T$ then we can define that a boundary preserves the chiral algebra formed using $\mathcal{W} = \{T,W\}$ if in addition 
$$
W(z) = \bar W(z),\ \forall z\in \mathbb{R}.
$$
So any conformal boundary preserves the Virasoro algebra, but if we introduce some other chiral algebra, any boundary that is invariant with respect to that is also a conformal boundary. The reason for doing this is that wile finding all conformal boundaries may be hard, finding the boundaries that preserve some larger chiral algebra is often easier. 



## Boundary States

It is not obvious how we will interpret a boundary condition in terms of a state. To do this we need to map the upper half plane to the sphere with the unit disk removed. Now using radial quantization around any circle that contains the unit disk we can interpret the boundary as a state that lives in the completion of the bulk Hilbert space. This is a boundary state.

Let's consider the map carefully. A boundary in the upper half plane really is a time-like boundary in our theory, so when we move to the sphere we have effectively swapped the space and time coordinates. This will be useful in a second, however, what we can see is that any conformal boundary state $\psi \in \mathcal{\bar H}$, where $\mathcal{\bar H}$ denotes the appropriate completion of the Hilbert space which we will precisely define in a second, must satisfy
$$
\left( L_n - \bar L_{-n} \right) \psi = 0.
$$
If we want the boundary to preserve a bigger chiral algebra, we expect that in addition it should satisfy
$$
\left( W_n - (-1)^{h} \Omega \bar W_n \right) \psi = 0,
$$
where $W_n$ are the modes of a chiral quantum field with conformal weight $h$ that generates the chiral algebra, and $\Omega$ is some chiral algebra automorphism that leaves the modes of $T$ invariant. That automorphism is determined from the boundary conditions and is often taken to be identity.



## Ishibashi States

So far we have no tools to calculate the boundary states, other than brute force solving the consistency conditions we defined above. This is where we can start being a bit more practical. We will look for trivial solutions of the above equations and then try to find the linear combinations of which satisfy the rest of the consistency conditions of our QFT. These states are called Ishibashi states. 

To make things easier we will formally define ishibashi states in a rational setting, and $\Omega = \mathbb{1}$.

**<u>Lemma:</u>** *(Ishibashi states)* Consider a conformal field theory with chiral and anti-chiral algebra $\mathcal{A}$ then for each irreducible highest weight representation $W$ of $\mathcal{A}$ that appears in the CFT's Hilbert space the following power series is invariant under $A$
$$
\psi_W = \sum_{v \in B_W} v\otimes \bar v,
$$
  where $B_W$ is the level basis of $W$.

***Proof:*** We can verify this directly by plugging in to the above equations.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
The much more interesting corollary is that each chiral preserving boundary condition can be written as a superposition of boundary states.

**<u>Corollary:</u>** Every conformal boundary condition $\alpha \in \mathcal{\bar H}$ that preserves $\mathcal{A}$ can be written as a superposition of ishibashi states
$$
\alpha = \alpha^i \psi_i,
$$
where the index $i$ runs through all the irreducible representations of $\mathcal{A} \otimes \mathcal{A}$ that appear in the theory.



## Cardy Constraints

The nice and super amazing cool thing we can talk about is Cardy constraints. This is the powerful tool that allows us to actually find these chiral preserving conformal boundary states. Notice that these are not all the boundary states (unless the chiral algebra we use is actually Virasoro). But this is still good enough.

Cardy constraints are basically a form of modular invariance but on the annulus instead of the torus. We will map the cft with the boundary to one on the annulus, then we will calculate the partition function in the presence of the boundary states and then use the fact that it must be modular invariant to obtain pretty heavy constraints on what the boundary states could look like. 



# Conformal Defects

We haven't presented this yet, but the whole point of studying boundaries is so that we can find the possible conformal defects we can add to our theory. There is an identification we can make between the possible boundary states we can add on the boundary theory, and the conformal defects we can add on the unfolded one. 

## Interpreting Boundary States as Conformal Defects











