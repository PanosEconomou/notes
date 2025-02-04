# Conformal Boundaries

What happens when we try to do a 2D CFT on a manifold that has a Boundary? In these notes we describe what are boundary states, as well as conformal and topological defects that our theory can have.

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



## Partition Functions



# Conformal Boundaries

The reason we did all this was to be able to describe what's called the modular partition function of a CFT. We will see at a different point how are those things actually related to one another, but for now, let's try and restrict our attention on boundaries. 

## Conformal Boundary Condition

Let's consider a CFT on the closed upper half plane $\overline{\mathbb{H}} \subset \mathbb{C}$. Now we have a boundary at the real axis, and that is somewhat confusing in terms of our symmetry. Clearly doing conformal transformations we would move the boundary around. 

Therefore, we have to refine what we mean by conformal invariance. The easiest way to think about it would be to restrict our attention to transformations that leave the boundary alone. In other words we want to consider conformal transformations $f:\overline{\mathbb{H}}\to \overline{\mathbb{H}}$ such that
$$
f^\ast g = \Omega^2 g,
$$
where $g$ is the metric on $\overline{\mathbb{H}}$ and such that $f(z,\bar z) = \overline {f(z,\bar z)}$ whenever $z = \bar z$. This restricts the representations of the Virasoro algebra we have in our theory.

In particular, we have shown that the full set of conformal transformations in $\mathbb{C}$ is given by the holomorphic and antiholomorphic maps on $\mathbb{C}$. Here is how we can find the restriction on which antiholomorphic transformations we have.

**<u>Theorem:</u>** *(Analytic Continuation)* If $f$ is an analytic function on an open subset $U\subset \mathbb{C}$ and $V \supset U$ is another open subset of $\mathbb{C}$ containing $U$ then there is a unique analytic function $F:V\to \mathbb{C}$ such that
$$
F(x) = f(x), \ \forall x\in U.
$$
In this particular case, consider an analytic function $f:\overline{\mathbb{H}} \to \mathbb{C}$ such that $f(z) = \overline{f(z)}$ whenever $z = \bar z$, and the function
$$
F(z) = \begin{cases}
f(z) & z \in \overline{\mathbb{H}}\\
\bar f(\bar z) & z \in \mathbb{C} \setminus \overline{\mathbb{H}}.
\end{cases}
$$
Then $F: \mathbb{C} \to \mathbb{C}$ is analytic, and satisfies that $F(z) = \overline{F(z)}$ when $\bar z = z$. 



> Look up [**modular forms**](https://en.wikipedia.org/wiki/Modular_form)















