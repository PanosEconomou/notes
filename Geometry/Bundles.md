# Fibre Bundles

We talked about Manifolds, time to start doing things with them! Bundles are nice structures that make it easy to attach algebraic objects on our manifold in a smooth way and studying their properties we can understand a lot of the general structure of how fields and such would behave as soon as we curve our base space a bit. 

[toc]

## Basic Definitions

Let’s start by defining some satellite objects that will be helpful in our analysis of fibre bundles.

**<u>Definition:</u>** Let $\pi: E \to M$ be a smooth surjective map of manifolds. We define the following objects for any $p \in M$

1. The subset $E_p \coloneqq \pi^{-1}(\{p\})$  is called the **fibre over** $p$. 

2. For any subset $U\subset M$ the subset $E_U \coloneqq \pi^{-1}(U)$ is called the **part of $E$ above $U$.** 

3. A smooth map $\sigma:M\to E$ such that
   $$
   \pi \circ \sigma = 1
   $$
   is called a **(global) smooth section of $E$**. Similarly a smooth map $\sigma : U\to E_U$ such that $\pi \circ \sigma = 1$ is called a **local smooth section of $E$** over $U$. 

Now that these are out of the way, we can write out the definition of the Fibre bundle. 

**<u>Definition:</u>** Let $E,M,F$ be smooth manifolds and consider a surjective smooth map $\pi : M \to E$. Then $(E,\pi,M;F)$ is called a **fibre bundle** if for any $p \in M$ there exists an open neighborhood $U \subset M$ such that the bundle can be **trivialized.** In other words there must exists a diffeomorphism $\phi_U : E_U \to U \times F$ such that $\text{pr}_1 \circ \phi_U = \pi$. We call $E$ the **total space,** $M$ the **base space,** $F$ the **fibre,** and $\pi$ the **projection map.**



## Bundle Morphisms and Atlases

**<u>Definition:</u>** Consider two bundles $\pi : E \to M$ and $\pi' : E' \to M$ a **bundle map** or **bundle morphism** is a smooth map $H:E \to E'$ such that 

$$
\pi' \circ H = \pi
$$

Hence, a bundle **isomorphism** is a bundle map that is also a diffeomorphism. 

Ok nice! Now we have maps in the category of bundles. The next thing to show is that every fibre bundle is a manifold. To do this we will need to define atlases for bundles. 

**<u>Definition:</u>** A **bundle atlas** for a fibre bundle $\pi : E \to M$ is an open cover $\mathcal A \subset T(M)$ of $M$ together with **bundle charts** for any $U \in \mathcal A$ which are diffeomorphisms

$$
\phi_U: E_U \to U \times F.
$$

 Given two bundle charts $(\phi,U),\, (\psi,V)$​ a **transition function** is the diffeomorphism

$$
\left.\phi \circ \psi^{-1} \right|_{(U \cap V)\times F}: (U \cap V)\times F \to (U \cap V)\times F.
$$

for every $p \in U \cap V$ we can use a transition function obtain a diffeomorphism

$$
f_p : F \to F
$$

the group of such diffeomorphisms is called is also called the **transition functions.** 



## Pullback Bundles

Another useful concept, more of a generalization of the special cases we will see below, is the concept of a pullback bundle. Say we have two base manifolds and some smooth map in between them. We want to add a structure to both, but we spent so much time finding the struction on the first. Then we can take the pullback and constract a similar bundle over the second! Let’s see how this works. 

**<u>Lemma:</u>** Let $\pi: E \to M$ be a bundle and $W \subset M$ be an embedded submanifold of $M$ with projection. Then the $\pi: E_W \to W$ is a bundle over $W$. 

Using this Lemma we can define a pullback bundle

**<u>Definition:</u>** Consider a smooth map $f: N \to M$ and a bundle $\pi: E \to M$. Then we define the set 

$$
f^\ast E \coloneqq \{(p,X) \in N \times E \mid f(p) = \pi(X) \}
$$

then $\text{pr}_1 : f^\ast E \to N$ is a fibre bundle called the **pullback bundle of $N$**. 

Ok cool! Now let’s play!



# Principal Bundles

Time to play with symmetries! We can have a Lie group that acts in a particular way on our manifold and we wanna create sections of it, basically smooth local actions of the symmetry group. The structure that assigns an element of the group at every point of the base space is a principal bundle. 

**<u>Definition:</u>** Let $G$ be a Lie group, $\pi : P \to M$ be a fiber bundle with fiber $G$, and consider a smooth right action $P\times G \to P$. Then $P$ is called a **principal $G$ bundle** iff

1. The action preserves the fibers of $G$ and is simply transitive on them. Namely for all $p \in M$ the action restricts to 
   $$
   P_p \times G \to P_p
   $$
   and the oribit map $G \to P_p$ such that $g \mapsto p\cdot g$ is a bijection.

2. There exists a bundle atlas $\mathcal A$ of $G$ equivariant bundle charts i.e. $\forall U \in \mathcal A$,  we have $\phi_U:P_U \to U \times G$ such that for any $g\in G$, $X \in P_U$ 
   $$
   \begin{align*}
   
   \phi(X\cdot g) = \phi(X) \cdot g = (p,h g),
   \end{align*}
   $$
   assuming $\phi(X) = (p,h)$ for some $h\in G$. Such an atlas is called a **principal bundle atlas**. 

The group $G$ is called the **structure group** of $P$. 

## Reductions

We have two groups and a group homomorphism between them. We would really like to find a way to create another bundle related through the homomorphism. This process is called reduction. 

**<u>Definition:</u>** Suppose $G \to P \xrightarrow{\pi} M$ and $G' \to P' \xrightarrow{\pi'} M$ are principal $G$ and $G'$ bundles respectively, and $f:G\to G'$ is a Lie group homomorphism then a **bundle morphism** between $P$ and $P'$ is an $f$ equivariant smooth bundle map $H: P\to P'$ such that

$$
\pi' \circ H = \pi
$$

and for any $p\in P, g \in G$ 

$$
H(p\cdot g) = H(p) \cdot f(g)
$$

Together with the homorphism $f$, $H:P\to P'$ is known as a **$f$ reduction of $P'$**. If $f$ is an embedding, then $H$ is called a **$G$ reduction of $P’$** and the image of $H$ is called a **principal $G$ subbundle**. 

These are useful objects when talking about frame bundles. In physics we use reductions all the time to find all the possible matter fields that we could have in our theory. 



## Gauges 

Another super useful concept in physics is the idea of a gauge. A guage can be roughly thought of as a trivialization of a Principa bundle. To be more precise, what we often do in physics is we want to assign local smooth transformations on our base space or associated vector bundles, which we will talk about later. To do this we want to somehow convert whatever principal bundle we have to a trivial bundle. Picking a gauge helps us do that. 

**<u>Definition:</u>** Let $\pi : P \to M$ be a principal $G$ bundle, a global (local) section $\sigma \in \Gamma(P)$ is called a **global (local) gauge**.

**<u>Theorem:</u>** *(Local Trivializations)* Let $\pi : P \to M$ be a principal $G$ bundle with a local gauge $\sigma \in \Gamma(U)$ for $U \subset M$. Then the following map 

$$
\begin{align*}
t : U\times G &\to P_U\\
(p,g) &\mapsto s(p)\cdot g
\end{align*}
$$

is a $G$ equivariant diffeomorphism. 



# Frame Bundles

We could define orientations using top forms, but there is a much more involved way that is going to help us understand intuitively what is going on for spin structures. This is the language of **Frame bundles**. Let’s play with them for a second. 

**<u>Definition:</u>** Let $M$ be a smooth manifold and $p \in M$. Then the **set of all bases** of $T_pM$ is given by 

$$
\text{Fr}_{GL}(M)_p \coloneqq \{(v_1,v_2,\cdots, v_n) \subset T_pM \text{ basis}\}
$$

The disjoint union 

$$
\text{Fr}_{GL}(M) \coloneqq \bigsqcup_{p\in M}\text{Fr}_{GL}(M)_p
$$

is known as the **Frame Bundle** of $M$.

The definition is not complete yet, let’s figure out why that thing is a bundle.

**<u>Proposition:</u>** There exists a natural projection $\pi : \text{Fr}_{GL}(M) \to M$ and an action 

$$
\begin{align*}
\text{Fr}_{GL}(M) \times GL(n,\mathbb R) &\to \text{Fr}_{GL}(M)\\
((v_1,v_2,\cdots, v_n), A) &\mapsto (A_{\ 1}^i v_i, A_{\ 2}^i v_i, \cdots, A_{\ n}^i v_i).
\end{align*}
$$

Also the projection and action make $\pi : \text{Fr}_{GL}(M) \to M$ into a principal $GL(n,\mathbb R)$ bundle. 

**<u>Corollary:</u>** Consider an $n$-dimensional Riemannian manifold $(M,g)$ then we can similarly define an **orthogonal frame bundle** which is a principal $O(n)$ bundle 

$$
\pi : \text{Fr}_O(M) \to M,
$$

such that the fiber consists of the set of all orthonormal bases in $T_pM$. 

The process by which we defined the orthogonal frame bundle is called *reduction.* Let’s define it more rigorously for general principal $G$ bundles. 

**<u>Proposition:</u>** Any Riemanian metric defines an $O(n)$ reduction of the frame bundle. 

**<u>Definition:</u>** Let $G$ be a Lie group. A principal subbundle of the frame bundle of $M$, aka a $G$ reduction of the frame bundle, is called a **$G$ structure on $M$.**

We already created an $O(n)$ structure on $M$ by using the Riemannian metric. Now it becomes clear that a spin structure would be some kind of reduction of $GL(n)$ by the spin group. 



# Vector Bundles

One of the most commonly used type of bundles is one where the fiber is a vector space. They have awesome properties and a lot of natural structures that we can list here. 

**<u>Definition:</u>** A fibre bundle $\pi : E \to M$ with fiber $V$ a $k$ dimensional vector space over a field $\mathbb K$ is a **vector bundle of rank $k$**  if there exists a bundle atlas $\mathcal A$ such that the induced maps $\phi_p : E_p \to V$ are vector space isomorphisms for any $p\in M$. The atlas is called a **vector bundle atlas.** Also a vector bundle of rank $1$ is a **line bundle**. 

Why is this nice? Because we can add and multiply any two sections of a vector bundle using the pointwise multiplication of the fibre. 

**<u>Example:</u>** The tangent and cotangent bundles are vector bundles. So are all the antisymmetric and symmetric bundles. 

**<u>Corollary:</u>** Vector bundles always admit global sections!



## Linear Algebra Constructions over Vector Bundles

We are ready to unlock the real power of vector bundles which is the ability to define all the linear algebra constructions, such as direct sums, tensor products, antisymmetric products, etc. over the manifold! 

We do this by applying the construction fiber wise. For example, say $E,F$ are vector bundles over the same base manifold we can create the following bundles

$$
\begin{align*}
E \oplus F && E\otimes F && E^\ast && \Lambda^k E && \text{Hom}(E,F) && \bar E.
\end{align*}
$$

Another useful definition is one of the subbundle. 

**<u>Definition:</u>** Let $V\to E \xrightarrow{\pi} M$ be a vector bundle of rank $k$ a subset $F\subset E$ is called a **vector subbundle of rank** $m$ of $E$  if for any $p\in M$ there exists a local trivialization to $M \times W$ where $W$ is an $m$ dimensional subspace of $V$. 

Next up we have metrics!

**<u>Definition:</u>** A **Eucledian bundle metric** of some vector bundle $E$ is a smooth section $\langle \cdot, \cdot \rangle \in \Gamma(E^\ast \otimes E^\ast)$ such that at every point on $M$ it defines a nondegenerate symmetric form on the fiber. Similarly, a **Hermitian bundle metric** of some complex vector bundle $E$ is a smooth section $\langle \cdot, \cdot \rangle \in \Gamma(\bar E^\ast \otimes E^\ast)$ such that at every point on $M$ it defines a nondegenerate hermitian form on the fiber. 

What about orthogonal complements? Now that we have metrics, it only makes sense!

**<u>Definition:</u>** $E$ be a vector bundle and $F$ be a vector subbundle of $E$. Then the **orthogonal complement** $F^\perp$ is a vector subbundle of $E$ such that $F\otimes F^\perp \cong E$​. 



## Vector Valued Forms

Now we can have fun! The structures we want to define to be able to do calculus on vector fields. 

**<u>Definition:</u>** A **vector valued $k$​ form** with values on vector space $V$​ is a smooth section $\omega \in \Gamma(\Lambda^k T^\ast M \otimes E)$​ where $E$​ is some vector bundle over $M$​ with fibre $V$​. We usually denote the set of vector valued forms as $\Omega^k(M,E)$​. 

Note that with this definition $\Omega^0(M,E) = \Gamma(E)$. 

Vector valued forms obey a bunch of properties that are similar to regular forms. Here are some of them.

**<u>Definition:</u>** Given two vector valued forms $\omega = \omega^a\otimes e_a \in \Omega^p(M,E)$ and $\eta = \eta^a \otimes e_a \in \Omega^q(M,E')$ their **wedge product** is given by 

$$
\begin{align*}
\wedge : \Omega^{p}(M,E) \times \Omega^q(M,E') &\to \Omega^{p+q}(M,E\otimes E')\\
(\omega,\eta) &\mapsto \omega \wedge \eta = \omega^a\wedge \eta^b \otimes (e_a \otimes e_b)
\end{align*}
$$

Additionally, we can define the **pullback of vector valued forms** under a smooth map $f:M\to N$ like so 

$$
f^\ast \omega = (f^\ast \omega^a) \otimes e_a
$$

These definitions are such that all the properties of these structures we know and love still hold. What we can’t define a priori is a differential! We do this though using a choice of parallel transport. If we have a connection we can interpret it the following way. 



## Connections on Vector Bundles

A connection $\nabla : \Gamma(TM) \times \Gamma(E) \to \Gamma(E)$ takes in a vector field and a smooth section of the vector bundle and returns another one. In other words, we could reinterpret this object as 

$$
\nabla : \Gamma(E) = \Omega^0(M,E)\to \Omega^1(M,E),
$$

which is the starting point of our differential! This is a really cool definition that we can extend as follows 

**<u>Definition:</u>** Given a vector bundle $E$ over a manifold $M$ with a connection $\nabla$, the **exterior covariant derivative** is a map

$$
d_\nabla : \Omega^k(M,E) \to \Omega^{k+1}(M,E)
$$

such that  for any $\omega \in \Omega^p(M,E), \eta \in \Omega^q(M)$  (notice that $\eta$ is an ordinay form!)

$$
d_\nabla (\omega\wedge \eta) = d_\nabla\omega \wedge \eta + (-1)^p \omega \wedge d\eta
$$

**Notice** that there is no reason that $d_\nabla ^2 = 0$ in this general setting! However, if we pick a flat connection we see that this is the case. 

This is great! We know how to take derivatives of sections given a connection! In the next section we will see more natural choices for picking the connections in the special case of the associated vector bundles. 

The last cool thing to notice is that we can treat things like vector fields as vector valued 0 forms where the vector bundle is the tangent bundle! Our definition extended the covariant derivative to vector fields as well! 

There are multiple objects we can define to characterise these derivatives and by extension the connection. 

**<u>Definition:</u>** Given a connection $\nabla$ on a vector bundle $E$ over $M$, the **curvature 2 form** $F_\nabla \in \Omega^2(M,E^\ast \otimes E)$ is defined for all sections $s \in \Gamma(E)$ and vector fields $X,Y \in \mathfrak{X}(M)$

$$
F(X,Y)(s) = \nabla_X \nabla_Y s - \nabla_Y\nabla_X s + \nabla_{[X,Y]}s
$$

A connection is called **flat** if $F_\nabla$ vanishes. 

We haven’t written some theorems in a while, here are some important ones. 

**<u>Theorem:</u>** Given a connection $\nabla$ on a vector bundle $E$ over $M$ then for any section $\sigma \in \Gamma(E)$

$$
d^2_\nabla \sigma = F_\nabla \wedge \sigma
$$

**<u>Theorem:</u>** *(Bianchi Identity)* The following identity holds

$$
d_\nabla F_\nabla = 0
$$

The last thing we will explore is the idea of a connection one form. We can define a connection using a one form and vice versa. To do this we first note this nice proposition.

**<u>Proposition:</u>** The linear endomorphism bundle of a vector bundle $E$ is given by another vector bundle

$$
\text{End}(E) \cong E^\ast \otimes E
$$

to continue we will do everything locally



## Locally Expressing Connections

In physics we always calculate things locally. So it would be instructive to see what happens given a local structure for our connection. 

Given a vector bundle $E$ over $M$ with fibre $V$, we pick a local frame $e = (e_1,e_2,\cdots,e_n)$ of smooth sections $e_i \in \Gamma(E_U)$ over some $U\subset M$ such that they form a basis for each fibre pointwise. In other words $e$ is a local section of the frame bundle constructed with all the bases of $V$.

**<u>Definition:</u>** A **connection 1-form** of a connection $\nabla$ on a vector bundle $E$ is an endomorphism valued 1-form $A \in \Omega^1(U,E_U^\ast\otimes E_U)$ such that for any vector field $X \in \mathfrak{X}(U)$ and any section $ \sigma \in \Gamma(U)$ the connection is given by

$$
\nabla s =ds + As
$$

where $ds = d s^a \otimes e_a \in \Omega^1(U,U)$ and $As = A^i_{\ j} s^j \otimes e_i$ which is standard matrix multiplication. 

Notice that the connection one form is a section of a vector bundle, therefore there always exist global sections $A$ we can pick in order to define $\nabla$. In fact we will see this 



## Hodge Duality in Vector Bundles

We’re already familiar with Hodge duality for traditional k forms. Once we have a bundle metric it is possible to define hodge duals with vector valued forms such that they have similar properties. We define them like so 

**<u>Definition:</u>** Let $\pi : E\to M$ be a vector bundle with a bundle metric $\langle \cdot,\cdot \rangle_E : \Gamma(E) \times \Gamma(E) \to C^\infty(M)$. Then a **scalar product of twisted forms** is given by 

$$
\begin{align*}
\langle \cdot,\cdot \rangle_E : \Omega^{k}(M,E)\times \Omega^{k}(M,E) &\to C^\infty(M)\\
(\omega^a \otimes e_a,\eta^b \otimes e_b) &\mapsto \langle\omega ^a,\eta^b\rangle \langle e_a, e_b\rangle_E
\end{align*}
$$

where $\langle\cdot,\cdot\rangle $ is the canonical inner product structure of forms (sometimes defined using a Lorenzian metric). 

Now that we know how to extend the definition of th einner product of forms, we can create a Hodge duality!

**<u>Definition:</u>** The **Hodge star** operator on twisted forms is a linear map given by 

$$
\begin{align*}
\star : \Omega^k(M,E) &\to \Omega^{n-k}(M,E)\\
\omega^a \otimes e_a &\mapsto (\star\omega^a)\otimes e_a
\end{align*}
$$

Notice that 

# Associated Vector Bundles

This is my favorite part of these constructions! We use the language of principal bundles in order to come up with Vector bundles that transform under some representation of the structure group. These are the vector bundles that we take sections of and we call those sections *matter* in physics. They have other cool applications but honestly they are cool by themselves. 

**<u>Definition:</u>** Given a principal $G$ bundle $\pi : P \to M$ and a representation $\rho: G \to GL(V)$ on some $k$ dimensional vector space over the field $\mathbb K$, an **associated vector bundle** is the vector bundle 

$$
V \to E \coloneqq P\times_\rho V \xrightarrow{\pi_E} M
$$

where

$$
M\times_\rho V \coloneqq P\times V/G = \{(p, G \cdot v)  \mid (p,v)\in P\times V \}
$$

is the set of orbits under the representation $\rho$, and $\pi_E: E\to M$ is such that $\pi_E[p,v] = \pi(p)$. There are pretty pictures that one can draw and when I will find them I will put them here as well.

Sections of an associated vector bundle can be trivialized using Gauges! 

**<u>Proposition:</u>** Let $P$ be a principal $G$ bundle, $\rho : G\to GL(V)$ a representation, and $\sigma \in \Gamma(P_U)$ a local gauge of $P$. Then for any section $\tau \in \Gamma(E_U)$ of the associated vector bundle $E = P\times_\rho V$ there exists a smooth map $f:U\to V$ such that 

$$
\tau(p) = [\sigma(p),f(p)],
$$

for any $p\in M$. 

What about the lie algebra representations? Well they still induce vector bundles

**<u>Definition:</u>** The sections of an associated vector bundle $P \times_\rho V$ are called **charged** if $\rho_\ast : G \to \text{End}(V)$ is not trivial. 

Since the associated vector bundle is still a vector bundle we can add canonical bundle metrics here! This will be useful when we put our geometric constructions on it. The only thing we require is that the metric on the fibers is invariant under the action of the group. 

**<u>Definition:</u>** Let $\langle\cdot,\cdot\rangle : V\times V \to \mathbb{K}$ be a $G$ invariant scalar product on $V$. Then the **bundle metric** of some associated vector bundle $E = P\times_\rho V$ is given for any $[p,v],[p,w] \in E$

$$
\langle[p,v],[p,w]\rangle_E = \langle v,w\rangle
$$

The fact this can be defined outside of the equivalence classes is because of the $G$ invariance of the inner product. In other words, we can induce a bundle metric only when the products are $G$ invariant. 



## Geometry on Associated Bundles

we often want to take derivatives and such of the sections of associated vector bundles. In the previous section on vector bundles we saw that all we really need in order to do that we need to define a connection on the vector bundle. Then there was no natural choice of connection, but now there is. We can use the structure group and its representation to tell us how vectors transform and this help us define what we mean by “parallel.”

We start bu thinking a bit more on what is a connection one form.

**<u>Definition:</u>** A **connection one form** on a principal $G$ bundle is a Lie aglebra valued 1-form $A \in \Omega(P,\mathfrak g)$ such that

1. $r_g^\ast A = \text{Ad}_{g^{-1}} \circ A$ for any $g \in G$
2. $A(\tilde X) = X$ where $\tilde X$ is the fundamental vector field associated with $X \in \mathfrak g$. 

We also call connection one forms **gauge fields**. 

Notice that the connection one form can always be globally defined, but we don’t use that in order to define a connection on the associated vector bundle. Instead, we use a trivialization of it with the help of a gauge. 

**<u>Definition:</u>** Given a local gauge $\sigma \in \Gamma(U)$ on some $U\subset M$ and a connection one form $A$, then a **local connection one form** is given by 

$$
A_\sigma = \sigma^\ast A \in \Omega^1(U,\mathfrak g).
$$

Now we have a local one form on any neighborhood. But if we have an associated vector bundle we have a representation $\rho : G \to \text{Aut}(V)$ which induces a lie algebra representation $\rho_\ast : \mathfrak g \to \text{End}(V)$ which is an excellent object to help us transform the local gauge field into a local connection 1 form that can define a connection $\nabla_A$ on our associated vector bundle. 

**<u>Lemma:</u>** The form $\rho_\ast(A_\sigma) = (A_\sigma)_i \otimes \rho_\ast(X^i) \in \Omega^1(U,\text{End}(E))$ defines a connection $\nabla^A: \Gamma(E) \to \Omega^{1}(M,E)$ on the associated vector bundle $E = P \times_\rho G$ such that for any local section $s \in \Gamma(U)$

$$
\nabla^As = ds + \rho_\ast(A_\sigma) s
$$

We use this connection $\nabla^A$ to define an exterior covariant derivative $d_{\nabla^A} \eqqcolon d_A$ on the associated vector bundle. Just as we did with the previous objects. 









