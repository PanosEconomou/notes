# Representations

Some review of relevant representation theory and algebra concepts for an upcoming Quantum Field Theory intro class.  

[toc]



# Why should a physicist care?

Here is a summary of the past 500 years of progress in physics. Physicists are still trying to predict the future, yet they have changed their approach. Say you want to describe the future of an electron. A classical physicist would do their best to write down all the properties of an electron (like it's charge, mass, position, momentum, and so on) and then use physics rules to solve for how these properties change over time. Yet, experiments found that true electrons often brake these predictions in a sneaky way:

All the things you can observe about an electron don't necessarily define its state! Measure the momentum, you change the position and so on. So the conceptual shift, which we now call "quantum" whatever, was to **give up on trying to define what an electron is** and **instead define what experiments you can do to it**. All of subsequent quantum theory  can be understood as a way to define and understand "probes" (often called operators, observables, quantum fields, and more) that are loosely algebraic proxies for "something a poor experimentalist could measure about the system."

Therefore, being able to "write down all probes" that a quantum theory has access to is a relevant question. As you can imagine there are infinitely many of them, just as there are infinitely many positions. To deal with this in classical physics, we created mathematical structures that helped us generate all properties of the system using finitely many data (things like vector spaces, manifolds, differential equations, etc.). The tool we use in the quantum side is representation theory and its cousins. 

What we will see later on, is that representation theory allows us to group together probes or states by "meaning," partitioning large sets of operators, or huge Hilbert spaces into regions that we can handle.



# Introduction

Here we will develop the *idea* of a representation, talk a bit about the caveats people first run into, and make an attempt to rigorously define it in a small sanitized context so that we can play with it later.

## Caution

Before we start some cautious remarks especially for anyone who has studied representation theory before in a different context. 

1. **"Representation" is an overloaded term:** When someone says that *this is a representation of X* they could mean multiple things, often these are any of a map, action, module, algebra, vector space, and so on. It is often (though frustratingly not always) clear from context, but as you get more familiar with representation theory you will notice that all these structures can be converted from one to the other which is why people often don't bother specifying further and let the reader do the work. Here will start with a more rigid definition, but point out what conceptual jumps people make.
2. **Representation is an idea that can almost always be extended:** Here we will talk about representations of groups and algebras, however, almost all algebraic structures admit a concept of a representation. Especially in QFT, when one encounters a lot of wild algebraic objects (a funny sounding example is a *lie algebra of the set of sections of an associated vector bundle to some principal bundle over spacetime*), people extend the definition of a representation far beyond the tractable examples that we will talk about in here. Therefore don't be alarmed if someone calls your Hilbert space a representation of a monoidal tensor category! While you might not know what the technical definition is, you can be rest assured that the intuition you will develop here ports directly to that example, which is kind of nice :>



## Intuition

The leap at the core of algebra is taking sets whose elements interact with certain rules, and forgetting everything about the elements except the rules. For example, a vector space of finite dimensional matrices has a natural multiplication, addition, and more. If you forget the dimensions of the matrices, the actual entries, but remember what you get when you multiply two elements, you get the algebraic structure of a group. If you in addition remember the element you get when you add two matrices you get the algebraic structure of a ring. 

> The idea of a representation is to walk the other direction. You start with just the rules, and you try to create a different algebraic structure that **obeys** the rules. Notice that this doesn't mean find a structure that mirrors the rules, just find one that doesn't break them. 

That's it! We will make it rigorous in a second, but the basic idea is to start with an algebraic structure (a group, algebra, vector space, ring, whatever) and come up with a different algebraic structure with rules that don't break the original one.

> **Note:** Technically the intuition I described is that of a homomorphism or more precisely the codomain of a homomorphism, but we will see how to convert from one to the other based on examples, and we will later rigorously refine the notion of representation. The idea, however, is the same. 



## Definitions for Completeness

Finally we can start! For our playing pleasure we will restrict ourselves to representations of various algebraic structures (namely groups and algebras) to vector spaces. This is typically called a linear representation, the central object of representation theory, but it is important, as physicists, to remember that the spirit of these definitions extend beyond linear structures and throughout the semester we might see examples. 

Let's start with boring definitions for the sake of completeness.

**<u>Definition:</u>** A set $G$ with a map $\cdot:G\times G \to G$ is a **group** iff for any $x,y,z \in G$

1. **Associativity:** $(x\cdot y) \cdot z = x\cdot (y\cdot z)$ typically denoted as $x\cdot y \cdot z$.
2. **Unity:** There exists $1 \in G$ such that $1\cdot x = x =x\cdot 1$.
3. **Invertibility**: For any $x \in G$ there exists $x^{-1} \in G$ such that $x \cdot x^{-1} = 1 = x^{-1} \cdot x$.

A group is also **Abelian** or **commutative** iff in addition $x\cdot y = y \cdot x$.

> **<u>Exercise:</u>** Is any part of these axioms redundant?

**<u>Example:</u>** $\mathbb{Z}_2$ is the group with two elements, typically denoted by $1, -1$ with the standard integer multiplication. $\mathbb{Z}_n$ is the group defined by numbers from $0$ to $n-1$ with multiplication $a \cdot b = (a + b) \text{ mod } n$, where $+$ is the standard integer addition and $0$ is the identity. This example contains two definitions for $\mathbb{Z}_2$, the first one and the one you get by setting $n=2$. Using the intuition of the previous section, can you see why we call both of these seemingly different sets the **same group**? Can you come up with more, just for fun?

**<u>Example:</u>** $U(1)$ is perhaps the most important group in physics, as it kickstarted the modern way to study physics through understanding electromagnetism. It is the complex numbers that sit on the unit circle with the complex multiplication. They can all be thought of as $e^{i\theta}$ for some $\theta \in \mathbb{R}$ or as specific $2\times 2$ matrices (**which ones?** Can you come up with more than one consistent choice of matrices?). This is also an Abelian group. This is our first example of a **Lie group** which we will dive a lot in later. 

**<u>Example:</u>** $SU(2)$ the famous group that talks about spin in quantum mechanics, formed by all unitary $2x2$ matrices with determinant $1$. Unlike the other two, this is not an Abelian group. What would be wrong if the determinant was $-1$ instead?

Now let's push through the remaining introductory definitions...

**<u>Definition:</u>** A **vector space** $V$ over a field $\mathbb{F}$ (either $\mathbb{C}$ or $\mathbb{R}$ for our purposes) is an Abelian group $V$ whose group map is often denoted by $+ : V\times V \to V$ and called vector addition, while the identity is $0$, with an extra map $\cdot : \mathbb{F} \times V \to V$ called the scalar multiplication such that for any $x,y,z \in V$ and $1,a,b \in \mathbb{F}$

1. **Field and Scalar multiplication compatibility:** $(a \cdot (b \cdot x)) = (a b) \cdot x$ and $1 \cdot x = x$
2. **Field addition and Vector addition distributivity:** $(a + b) \cdot x = a \cdot x + b\cdot x$
3. **Field multiplication and Vector addition distributivity**: $a \cdot x + a\cdot y = a \cdot (x + y)$

Summing vectors multiplied by scalars, is called a **linear combination** of these vectors. A subset of $B \subset V$ is **linearly independent** if every *finite* subset of $B$ can't have $0$ as a nonzero linear combination. $B$ **spans** $V$ if every element in $V$ is a **finite** linear combination of $B$, and any linearly independent subset that spans is called a **basis**. We often ignore the $\cdot$ symbol when we multiply. Finally, the **automorphisms** $\text{Aut}(V)$ of $V$ is the group of invertible linear maps of the form $V\to V$ and the **endomorphisms** $\text{End}(V)$ of $V$ are the set of all linear maps of the form $V\to V$. 

Ok these are a bit boring, but it's just for completeness. The more interesting aspect of these, is the tensor structure of vector spaces which will be relevant into our study of representations.

**<u>Definition:</u>** Vector space homomorphisms are called **linear maps** and **tensors** are $k$-linear maps. Given a vector space $V$ over field $\mathbb{F}$ the set of all linear maps of the form $V\to \mathbb{F}$ is a vector space known as the **dual** space $V^\vee$. Given two vector spaces $V,W$ over the same field, their **tensor product space** $V\otimes W$ is the unique up to isomorphism space together with a map $\iota: V\times W \to V\otimes W$ such that for every bilinear map $h : V\times W \to U$ to some vector space $U$ there exists a unique linear map $\hat h : V\otimes W \to U$ such that $h = \hat h \circ \iota$. In other words, the following diagram commutes
$$
\xymatrix{
V\times W \ar[r]^{\iota}\ar[dr]_h & V\otimes W\ar@{.>}[d]^{\hat h}\\
& U
}.
$$
Usually given $v \in V, w\in W$ we denote $\iota(v,w) \in V\otimes W$ as $v\otimes w$ and call it the **tensor product**. In addition to that there is a **direct sum** denoted by $V\oplus W$ (that has a similar universal property definition as the tensor product, but for almost everything you will do thinking of $V\oplus W = V\times W$ would be enough thb)

***Remark:*** Honestly I only put the last definition of the tensor product because, if you haven't seen it, it is an interesting approach to a non-constructive definition which is often more useful than a constructive one. But any working knowledge of tensor products should more than suffice for this. Soon enough though we will talk about spinors where thinking of the tensor product like this really clears out a lot of confusion.

A couple more interesting structures we will come across a lot are algebras. So let's play with them.

**<u>Definition:</u>** An **algebra** is a vector space $A$ over $\mathbb{F}$ with an additional bilinear map $\times : A\times A \to A$ called the algebra **multiplication**. If for any $x,y \in A$ we have that $x\times y = y\times x$then the algebra is called **commutative**.

Out of everything so far, this is the only structure has any chance of feeling unfamiliar. Here are some examples.

**<u>Examples:</u>** $\mathbb{R}^3$ with the standard cross product. You can see why this algebra is not commutative. Another famous non-commutative algebra is the collection of square matrices with dimension $n$ and matrix multiplication.  An example of commutative algebra are the complex numbers or the real polynomials in one variable. 

Yet, there are some algebras that are so much more useful in physics, because they help us play with the idea of "infinitesimal transformations." We will talk a lot more about them later, including why they are related to infinitesimal transformations, but the definition and any working knowledge of them doesn't require thinking of any transformations.

**<u>Definition:</u>** A **Lie algebra** is an algebra $\mathfrak{g}$ with a multiplication map $[\cdot, \cdot] : \mathfrak{g}\times \mathfrak{g} \to \mathfrak{g}$ that for every $x,y,z \in \mathfrak{g}$ it satisfies

1. **Alternating property:** $[x,x] = 0$
2. **Jacobi identity:** $[x,[y,z]]+[z,[x,y]] + [y,[z,x]] = 0$.

The multiplication map is often called the **Lie bracket**.

This has a couple of interesting consequences already that are a good exercise to prove

**<u>Proposition:</u>** A Lie algebra $\mathfrak{g}$ satisfies for any $x,y,z \in \mathfrak{g}$

1. **Anitcommutativity**: $[x,y] = -[y,x]$

2. Each element acts as a **derivation**, in other words, each element $x$ defines a map $\text{ad}_x=[x,\cdot]:A\to A$ (often called the **adjoint** or just ad) such that
   $$
   \text{ad}_x [y,z] = [\text{ad}_xy, z] + [y, \text{ad}_x z].
   $$

If you stare at that last one and replace $[y,z]$ with $y\times z$ you see why it is the familiar Leibniz rule (or product rule) that derivatives follow. In fact, as we will see later, it is this property of the Lie bracket and its similarity to derivatives that makes them so good at describing infinitesimal stuff.

**<u>Example:</u>** Perhaps the most famous example of a Lie algebra is $\mathfrak{su}(2)$, or the angular momentum algebra. A $3$ dimensional algebra over the real numbers with a basis given by $J_1,J_2, J_3$ with the following commutation relations
$$
\begin{align*}
[J_i, J_j] = \varepsilon_{ijk} J_k.
\end{align*}
$$
We will later see that physicists chuck an $i$ in this definition, which will make a lot of sense in context.

There are a lot more that we will encounter, but we have spent enough time introducing background, so let's get to the real thing. 



## Group Representations

Finally! As a reminder this section is done for linear representations, and the idea presented before has natural extensions to crazier algebraic objects. Let's start with groups

**<u>Definition:</u>** Given a group $G$ a **group representation** on a vector space $V$ is a group homomorphism $\rho: G \to \text{Aut}(V)$.

This needs some disambiguation. 

1. First $\text{Aut}(V)$ is the group of invertible linear maps of the form $V\to V$ with composition (or matrix multiplication when you can think of these maps as matrices) as the group operation. 

2. A group homomorphism is a structure preserving map. Meaning that for every $g,h\in G$ we have that
   $$
   \begin{align*}
   \rho(g\cdot h) = \rho(g)\circ \rho(h) && \rho(1) = 1.
   \end{align*}
   $$

3. **Notice** that I called the map $\rho$ as the representation. This is common in both math and physics literature. However, people, especially us physicists, often abuse notation are refer to both $\rho$ and $V$ as "the representation" of $G$. So be careful.

4. Very quickly the notation becomes cumbersome. Think about it. Imagine you have $g \in G$ and $v \in V$. You'd have to write some clunky $\rho(g)(v)$. Because that looks disgusting, when it is not ambiguous we often prefer to write $g\cdot v$ or even $gv$ effectively naming $\rho(g)$ and $g$ with the same letter. This might take some getting used to at first, but it becomes quite useful later. 

5. This is called a group representation formally, but to avoid unnecessary clutter when someone says a representation of a group $G$ to a vector space $V$ they clearly mean a group representation, so we won't always put the "group" in front.

> **Intuition:** What you want is to take a group $G$ and use it to move some vectors around which happen to lie in $V$. So realistically what you need is a way to assign to each group element a map of vectors to vectors. These are the maps in $\text{Aut}(V)$. They are all of the form $V\to V$, and when $V$ is finite dimensional they are just matrices. So it is often enough to think of a representation as a way to assign a matrix to each group element. 
>
> The catch is that you can't assign any matrix! They have to obey the algebraic rules that make the group what it is (namely the multiplications)! Otherwise, there is literally no other information that the group knows so your representation would be as disconnected to the group as any other thing. 

**<u>Example:</u>** (Rotations) The clearest physically relevant example is rotation matrices. Take $\mathbb{R}^2$. Each rotation is defined by an angle, or equivalently a point on a circle. The structure that defines the composition of angles is the group $U(1)$ so we can define a representation $\rho: U(1) \to \text{Aut}(\mathbb{R}^2)$ by
$$
\rho(\theta) = \begin{pmatrix} \cos \theta & - \sin\theta \\ \sin\theta & \cos\theta \end{pmatrix} \in \text{Aut}(\mathbb{R}^2).
$$
You can show that this is a representation that rotates the vectors in $\mathbb{R}^2$. Can you find another one? How about one more? How about infinitely many more? In fact it goes even crazier than that! The representation that assigns the complex number $e^{i\theta}$ to the group elements of $U(1)$ is itself a representation! But someone might say that is is how you define $U(1)$ in the first place, so what gives? Stay tuned, there is a satisfying resolution to this and we will talk about defining representations soon.

**<u>Example:</u>** (Discrete Symmetry) In quantum mechanics we have a bunch of discrete symmetries. Time and orientation reversal, parity, charge conjugation, etc. All of these consist of finding an operator that moves states of the Hilbert space $\mathbb{H}$ around such that it commutes with the Hamiltonian and squares to $1$. In other words, these are all representations of $\mathbb{Z}_2$. For example parity symmetry is a representation $\Pi: \mathbb{Z}_2 \to \text{Aut}(\mathbb{H})$ such that $[H,\Pi(-1)] = H\circ\Pi(-1) - \Pi(-1) \circ H = 0$. I am using the disgusting notation $\Pi(-1)$ that nobody uses to highlight the connection to the operator that we typically call $\Pi$ and the representation of the group element $-1 \in \mathbb{Z}_2$.



**<u>Notation:</u>** Sometimes people abuse the definition of a representation to mean many things. Here is a disambiguation chart. Let $V$ be a vector space, $v \in V$ a vector, $G$ be a group, $g \in G$ a group element, and $\rho: G\to \text{Aut}(V)$ be a representation of $G$ to $V$. You might hear:

1. $V$ **is a representation of** $G$: For the vector space $V$ someone has a way to represent elements of $G$. Basically keep the map implicit. Fun fact, the structure $(V,\rho)$ i.e. the vector space with the representation of $G$ is called a $G$**-module**, but sometimes people also call that a representation interchangeably.
2. $g v$: People just mean $\rho(g)(v)$ but this notation sucks.
3. $M$ **is a representation of** $g$, **where** $M$ **is some matrix**: $M = \rho(g)$.
4. $M$ **is a representation of** $G$, **where** $M$ **is some matrix**: $M = \rho(g)$ for some $g \in G$ but they didn't bother to tell you $\rho$ or $V$.
5. $v$ **transforms in a representation of** $G$, or the more cursed $v$ **is a representation of** $G$: $v \in V$.
6. $V$ **carries a representation of** G: This typically means that $V$ is a representation of $G$, but often in the context that there is a strict subspace of $V$ where the representation is nontrivial. See below for what a trivial representation is.



Now that we have some grasp of representations it is time to introduce some really important classifications of representations that we will use **all the time**. 

> **Please Please Please:** Honestly, while I am presenting these as a list, try not to gloss over it! Try to come up with a couple of familiar examples and counter examples because knowing and having intuition about what, say, an "irreducible representation" is by heart during lecture is almost a prerequisite to event attend a QFT class. 
>
> If the only thing you read in these notes is the following definitions and spend some time actually working out (the matrices and other properties of) examples and counterexamples, you can be happy to ignore the rest and come back as you need.

**<u>Definition:</u>** Here are various flavors of group representations. If $G$ is a group, and $V$ a vector space, then a representation $\rho: G\to \text{Aut}(V)$ is a

1. **Trivial representation** if $\rho(g) = \text{Id}_V$ for all $g \in G$.

2. **Subrepresentation** if there exists another representation $\phi : G \to \text{Aut}(W)$ where $V$ is a vector subspace of another vector space $W$ and for every $g \in G$ 
   $$
   \rho(g) = \left.\phi(g)\right|_{V}.
   $$

3. **Irreducible representation** if the only subrepresentations of $\rho$ are $V$ and $\{0\}$. Sometimes people call these representations **simple**. Otherwise it is **reducible**.

4. **Direct sum of representations** $\phi: G \to \text{Aut}(U)$ and $\psi: G \to \text{Aut}(W)$ denoted by $\rho = \phi \oplus \psi$ iff $V \cong U\oplus W$ and for any $u \in U, w\in W$ and $g\in G$
   $$
   \rho(g)(u \oplus w) = \phi(g)(u) \oplus \psi(g)(w).
   $$

5. **Indecomposable representation** iff it can't be written as a direct sum of (nontrivial) subrepresentations. Otherwise it is **decomposable**.

6. **Semisimple representation** iff it is a direct sum of finitely many irreducible (or simple) representations.

7. **Tensor product of representations** $\phi: G \to \text{Aut}(U)$ and $\psi: G \to \text{Aut}(W)$ denoted by $\rho = \phi \otimes \psi$ iff $V\cong U\otimes W$ and for any $u \in U, w\in W$ and $g\in G$
   $$
   \rho(g)(u\otimes w) = \phi(g)(u) \otimes \psi(g)(w).
   $$

8. **Unitary representation** Iff $V$ is a complex vector space and $\rho(G)$ contains only unitary matrices.

9. **Dual representation to** $\rho^\vee : G \to \text{Aut}(V^\vee)$ if for every $f \in V^\vee, v \in V$ and $g \in G$ 
   $$
   f[\rho(g)(v)] = [\rho^\vee(g^{-1})(f)](v).
   $$

10. **Conjugate representation to** $\bar \rho: G \to \text{Aut}(\bar V)$ if $\rho(g) = \bar \rho(g)^\ast$ (the complex conjugate) for all $g \in G$.

11. **Faithful representation** iff $\rho$ is injective.

12. **Defining representation** if $G$ was presented to you as a group of matrices (or other algebraic objects like complex numbers) in the first place and $\rho$ is that presentation. This is a *choice of presentation*, not an intrinsic property. 

Ok, these are a lot of things, and each has its own intuition attached to it which is really important. So please work out some examples. Here are some results.

**<u>Proposition:</u>** Given a group representation $\rho: G \to \text{Aut}(V)$ some interesting results are as follows

1. If $\rho$ is irreducible then it is also indecomposable.
2. If $V$ is finite dimensional and $\rho$ is unitary, then it is a sum of finitely many irreducible representations.
3. If $G$ is compact, V finite dimensional, and $\rho$ unitary, then it is a sum of finitely many irreducible representations. (there are some more topological assumptions here namely that $\rho$ is strongly continuous, but nobody cares)

Properties 2 and 3 above are super important. So so so many problems in quantum physics effectively reduce to trying to decompose a representation in irreducible ones. You will do it very often in QFT 1. In fact we often try to do it in the cases where $V$ is infinite dimensional. We have been quite successful in cases that we study, but even more successful when we tried to understand what happens when we can't do it! Look up Von Neumann algebras if you're interested.

# Lie Groups and Algebras

I don't want to spend too much time here to be honest. This is more of a quick introduction to Lie groups more so than their representations. We will come back to this as we move on though, because things like exponential maps will be quite handy when we do QED and QCD.

## 10 second intuition for manifolds

Lie groups are groups that are also manifolds. Unfortunately the machinery to calculate things in manifolds is very involved, and while it is super useful to learn, if we were to include this in these notes they would quadruple in size. So here is another alternative that will give us the right amount of intuition to continue.

Similar to how vector spaces are the mathematical description of flat/linear spaces, and topological spaces are the one for continuous shapes, Manifolds are supposed to be the mathematical description of *smooth shapes*. So what is smoothness?

**<u>Intuition:</u>** A **smooth shape** (aka a manifold $M$) is one where the more you zoom into the flatter (i.e. the more like a vector space) it looks. If you pick a point, the flat approximation at $p$ is often called the **tangent space** $T_pM$, which is a plane that contains as vectors all the directions you can move in when standing at $p$, or in other words, all the velocity vectors for the paths passing through $p$. 

The whole point of smoothness is that, as you zoom in, motion looks more and more linear, which is something you already know how to deal with since high school. We roughly call the linear approximation to motion in "infinitesimal motion" in physics, but what this really means in practice is that you recognize that you're sitting a potentially non-smooth surface and you're working with velocity vectors instead of positions.



## Why do physicists love Lie groups?

Because we are used to do transformations in small steps. For example, when you can do a $73^\circ$, you are expected to be able to do this rotation gradually, *smoothly,* going from $0$ rotation all the way to your angle. This means that your group of rotations doesn't only have the $73^\circ$ rotation and its compositions, but all the infinite intermediate ones and a way to smoothly interpolate between them.

**<u>Definition:</u>** A **Lie group** is a group that is also a smooth manifold.

**<u>Examples:</u>** All your favorite matrix groups. $U(1)$ which geometrically is a circle $S^1$, $U(n), SU(N), GL(n,\mathbb{F}), SO(n)$ etc. Also all vector spaces are Lie groups under addition. Non matrix Lie groups exist but you will rarely see them QFT (and certainly not in QFT I). The most instructive example really is the circle and switching between thinking of rotations around an axis and positions on a circle is going to be useful intuition for the following.



## The problem with moving on manifolds

Lie groups being manifolds really is a fancy way to say that **we can move on a Lie group.** The gradual turning on of the rotation I described before is a type of motion, so we need a way to talk about the "velocities" or possible directions one can move in on a Lie group. There is just one snag:

> **Problem:** In a linear space, the directions you can move at any point are the same. Meaning that there is an unambiguous way to move "left" on a plane once you fix what left means on one point. You do this by taking the "left" vector from that point, and moving it in parallel to your point.
>
> But if you think of your favorite manifold (my go-to is a sphere) there is no free notion of what parallel means!  Instead you have to specify when two vectors are parallel. Typically this means to provide an isomorphism between tangent spaces along a path on the manifold (often called a **parallel transport**). 
>
> To show you why you'd need to pick, which one of the two is the "right" way to move a vector in parallel around a circle on punctured plane? I'm sure you can justify both.
>
> |                        Parallel from the plane's perspective | Parallel from the circle's perspective                       |
> | -----------------------------------------------------------: | :----------------------------------------------------------- |
> | ![Cartesian transport](https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Cartesian_transport.gif/250px-Cartesian_transport.gif?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail) | ![Polar transport](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Circle_transport.gif/250px-Circle_transport.gif?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail) |
>
> (I stole these pictures from [Wikipedia](https://en.wikipedia.org/wiki/Parallel_transport)) The point is that in both cases you'd need to prescribe extra data. 



## And why Lie algebras solve it for Lie groups

So what gives for a Lie group? **Does the fact that it's also a group give us enough data to specify a parallel motion?** The answer is yes! We take advantage of the fact that every Lie group $G$ has a built in, invertible, way to move from the identity to any point $g$. 

**<u>Definition:</u>** On a Lie group $G$ given an element $g\in G$  the smooth map $L_g : G\to G$ given by $x\mapsto g x$ is called the **left multiplication map** by $g$. 

Similarly one defines a **right multiplication map** and we could reframe the subsequent discussion in terms of right multiplications, but we won't.

Since the left multiplication is smooth, **and** defined everywhere on the Lie group, we can use it to map the tangent space $T_1 G$ (i.e. the set of directions we can move in at the identity) to the tangent space of any point $g \in G$. Effectively giving us a definition of what it means to be parallel. There is some, slightly involved machinery, to do this which you don't need to understand here, but [you can look up these notes to get an idea](https://notes.panos.wiki/Geometry+Lie_Crap). The intuition though, is that parallel motion is the direction group multiplication goes. For the $U(1)$ example the parallel transport induced this way is the one shown on the right picture of the previous section.

The point is that we can canonically identify the directions you can move on the Lie group at any point, using the directions at the identity. So we give the tangent space $\mathfrak{g} := T_1G$ a special name: the **Lie algebra** of $G$. So the elements are just velocities for the motion on the group (or if you're a physicist "infinitesimal group elements").

Notice that the Lie algebra as a vector space is always some version of $\mathbb{R}^n$, but it has a Lie bracket that we will define below. For now it suffices to say that the Lie algebra of $G$ as a vector space is always $\mathbb{R}^{\text{dim\,}G}$.

One thing that you would like is the equivalent of constant motion on the group. In $\mathbb{R}^n$ this is barely an inconvenience as the path you pick to move from $0$ with velocity $v$ is just $\gamma(t) = vt$. On the lie group $U(1)$ this map is just $e^{i vt}$, where $v \in \mathbb{R} \cong T_1 U(1) = \mathfrak{u}(1)$ is a possible velocity. The same thing happens with matrices. So we called the map that takes in a velocity, i.e. a Lie algebra element, and gives you the constant velocity path the **exponential map** $\text{exp}: \mathfrak{g} \to G$.

***Sidenote:*** This means that you can write $vt = \text{exp}(vt)$ in $\mathbb{R}$ without having a stroke lol.

The exponential map has to have all the properties of constant motion we expect. 

**<u>Proposition:</u>** Let $\text{exp}: \mathfrak{g} \to G$ be an exponential map. Then for any $t,s \in \mathbb{R}$ and any $X \in \mathfrak{g}$

1. $\text{exp\,} 0 = 1 \in G$
2. $\text{exp}[(t + s)X] = \text{exp}(tX)\, \text{exp}(sX)$

These properties guarantee that finite transformations are recovered by "successively applying infinitesimal transformations." 

**<u>Examples:</u>** Here are some well understood exponential maps. 

1. **Additive vector spaces**: For $\mathbb{R}^n$ as a Lie group under addition the exponential map is $\text{exp}(vt) = vt$
2. **Multiplicative Reals**: For $\mathbb{R}^\times$ the exponential map is the standard exponential $\text{exp}(vt) = e^{vt}$.
3. **Matrix Groups**: For $GL(n, \mathbb{F})$ and its Lie subgroups the exponential map is the standard matrix exponential
4. **Lorentz Group**: This is often written as $O(s,t)$ and it is the set of invertible linear transformations that leave a metric with Lorentzian signature $(s,t)$ invariant. So the boosts and rotations from special relativity are $O(1,3)$, $O(3,1)$, or $O(M)$ with $M$ being Minkowski space depending on your sensibilities.
5. **Poincare Group**: A famous player in QFT, this is the set of all *affine* transformations that leave the Minkowski metric invariant. This means that it includes the boosts and rotations $O(1,3)$ but also includes translations (which are not linear transformations since they move the origin. That's why they are called affine). The group of translations is just $\mathbb{R}^{1,3} = M$ aka the Minkowski space itself. Some people write this group as $\text{Poincare} = M \rtimes O(M)$. The product symbol is the (inner) semidirect product (yes there is an outer one too) which basically means that this $M$ is normal inside the poincare group. In layman's terms you can rotate translate and unrotate and it would look like you just translated. In operational terms, this means that every element of the group can be written $g = t r$, where $t$ is a translation and $r$ is a rotation. 

If you remember from the previous sections, though, a Lie algebra doesn't just need a vector space (which $T_1 G$) is, it also needs a Lie bracket, a way to take two vectors $X,Y \in \mathfrak{g}$ and turn them into a third one $[X,Y]$, how could we find that? There is a canonical choice that makes a lot of sense. We can figure out how to go from the identity and back using two lie algebra elements $X,Y$ by first going along $X$ for some time $t$, then $Y$, then going back along $X$ for the same amount, and then finally back along $Y$ for the same amount. This does not guarantee to take you to the same place in general (think about rotations of a book) so the resulting map will be something like
$$
e^{tX}e^{tY}e^{-tX}e^{-tY} = e^{t^2 Z + \mathcal{O}(t^3)},
$$
where the left hand side is an alternative rewriting you can always do for some other direction $Z \in \mathfrak{g}$ (***Exercise:*** Why is there no $t$ term and the expansion starts at $t^2$?). We then call $Z = [X,Y]$ and you can show that it satisfies the Lie bracket properties!

**<u>Definition:</u>** Given a Lie group $G$ its Lie algebra $\mathfrak{g}$ is the vector space of directions at the identity $T_1G$ along with the Lie bracket given by the procedure above. For simplicity, given a vector space basis $\{T^a\}_{a = 1}^{\text{dim\,}\mathfrak{g}}$ of the Lie algebra we write
$$
[T^a,T^b] = f_{abc} T^c,
$$
(yes people actually do use that terrible summation convention in real life) where we call the numbers $f_{abc} \in \mathbb{C}$ the **structure constants** of the Lie algebra.

**<u>Example:</u>** *(Abelian Lie algebras)* The Lie algebra of any Abelian Lie group has $f_{abc} = 0$. Can you show this for $\mathbb{R}^\times, \mathbb{R}^+,$ and $U(1)$?

**<u>Example:</u>** *(Endomorphism Algebra of a vector space)* Pick a vector space $V$, the set $\text{End}(V)$ known as the linear endomorphisms of $V$ the set of linear functions $V\to V$ (the set of linear automorphisms $\text{Aut}(V)$ is the subset of $\text{End}(V)$ that contains the invertible ones). The Lie bracket is given for any two matrices $A,B \in \text{End}(V)$ by
$$
[A,B] = AB - BA.
$$
One interesting result is that the Lie algebra of the Lie group $\text{Aut}(V)$ is $\text{End}(V)$, this is quite cute though I haven't shown this because we need some more differential geometry. If you know about pushforwards and Lie derivatives though I highly encourage you to prove this for yourself! It's so satisfying!

By the way, the exponential map $\text{exp}:\text{End}(V) \to \text{Aut}(V)$ is simply the matrix exponential which is a really powerful result we will use all the time. 

There are other examples presented earlier too. I'm not copying them.



# Lie Algebra Representations

You have probably spent a lot of time trying to understand group representations so far. And while they are quite important as the conceptual tools that we use in QFT, we almost never use them in practice! This is similar to how you spent a lot of time in early math studying functions, and understanding how to solve equations, only to never use regular equations in physics and instead almost exclusively use differential equations because they are such a better way to ask the questions we care about in a quantitative way. 

We will do the same for Lie algebra representations. Since we have already explored how Lie algebra elements help us with moving in a group similar to how velocity vectors help us with moving in a vector space. 

## Definitions

We have already seen group representations. So now we have intuition for what happens when you want to rotate a physical system. You pick your favorite $SO(n)$ group find a representation of it, and then use the elements to rotate it. But gradual rotations, or infinitesimal rotations would require you to represent the velocity vectors too! So here is the compatible way to do so.

**<u>Definition:</u>** *(Math Definition)* Let $\mathfrak{g}$ be a Lie algebra. A **Lie algebra representation** to a vector space $V$ is a lie algebra homomorphism $\rho: \mathfrak{g} \to \text{End}(V)$.

 That makes a lot of sense and it is a direct copy of the intuition we have already had for representations for the group case. However, in physics we find a different definition far more convenient.

**<u>Definition:</u>** *(Physics Definition)* Let $\mathfrak{g}$ be a Lie algebra. A **Lie algebra representation** to a complex vector space $V$ is a map $\rho: \mathfrak{g} \to \text{End}(V)$ such that the map $\rho(-i\,\cdot\,)$ is a Lie algebra homomorphism.

> **Important:** WTF? At first glance this seems stupid and unreasonable, but we have a very good reason for it. We will see later that when representing the Lie algebra of a group in this way will have the effect of making all of the Lie algebra matrices Hermitian as opposed to anti-Hermitian, meaning that in the quantum mechanical sense, these are observables. In fact we often refer to representations of Lie algebra elements as **charges**. We will see, this semester, why the electric charge operator in Quantum Electrodynamics is a representation of elements of the Lie algebra of $U(1)$. But I am sure you've already called angular momentum operators as charges in Quantum mechanics.
>
> **<u>Conversions</u>:** To convert between the two remember the rule that for a Lie algebra element $X \in \mathfrak{g}$ $\rho_{\text{math}}(X) = -i \rho_{\text{physics}}(X)$. From now on we will use the **physics definition**. But be careful sometimes we will drop the $\rho(X)$ in favor of $X$ as almost all physicists and mathematicians do. So this will force the exponential map to appear as $e^{-itX}$ instead of $e^{tX}$ and the structure constants as $[T^a,T^b] = if_{abc}T^c$ which is the usual way one encounters them in QFT.

**<u>Proposition:</u>** If you have a group representation $\rho : G \to \text{Aut}(V)$ you can induce a Lie algebra representation $\rho_\ast : \mathfrak{g} \to \text{End}(V)$ by differentiating for every $X\in \mathfrak{g}$
$$
\rho_{\ast}(X) = i\left.\frac{d}{dt}\right|_0 \rho[\text{exp}({tX})].
$$
This means that in the physics notation we are using
$$
\rho[\text{exp}(tX)] = \text{exp}[-it \rho_{\ast}(X)].
$$
This is something we will use all the time, but we will often call $g = \text{exp}(tX)$ and write $g = e^{-itX}$ for brevity.



The important thing about this proposition is that we can generate Lie algebra representations that are compatible with Lie group representations in the sense that they preserve the velocity relation between Lie group elements and Lie algebra elements. So given a Lie group representation, we can differentiate to find out the infinitesimal generators of these transformations.



Before we move on, here are terms that you really need to internalize.

**<u>Definition:</u>** Let $\mathfrak{g}$ be a Lie algebra over $\mathbb{F}$ and $V$ a vector space. A representation ρ: $\mathfrak{g}→\text{End}(V)$ is a

1. **Trivial representation** iff $\rho(X) = 0$ for every $X \in \mathfrak{g}$. 

   > Note the difference: the trivial *group* representation sends every g to $\text{id}_V$, and differentiating $\text{id}$ gives $0$. 
   >
   > Infinitesimally, "do nothing" means "move at zero velocity," not "act as the identity matrix."

2. **Subrepresentation** if there is a subspace $W \subset V$ that is **invariant**, meaning $\rho(X)W \subset W$ for every $X \in \mathfrak{g}$, together with the restricted map
    $\rho_W(X) = \left.\rho(X)\right|_{W}$.   That $\rho_W$ lands in $\text{End}(W)$ and is again a representation is immediate. Every invariant subspace also gives a **quotient representation** on $V/W$ by $\bar\rho(X)(v + W) = \rho(X)v + W$.

3. **Irreducible representation** iff the only invariant subspaces are $V$ and $\{0\}$. Otherwise **reducible**. If in addition $V$ decomposes as $W \oplus W'$ with *both* summands invariant, it is **fully** (or completely) reducible.

4. **Direct sum of representations** $\phi: \mathfrak{g} \to \text{End}(U)$ and $\psi: \mathfrak{g} \to \text{End}(W)$, denoted $\rho = \phi\oplus\psi$, iff $V \cong U\oplus W$ and for any $u\in U$, $w\in W$, $X\in\mathfrak{g}$
   $$
   \rho(X)(u\oplus w) = \phi(X)(u) \oplus \psi(X)(w).
   $$

5. **Indecomposable representation** iff it is not a direct sum of two nonzero subrepresentations. Otherwise it's **decomposable**.

6. **Semisimple representation** iff it is a direct sum of finitely many **irreducible** subrepresentations.

7. **Tensor product of representations** $\phi: \mathfrak{g}\to\text{End}(U)$ and $\psi: \mathfrak{g}\to\text{End}(W)$, denoted $\rho = \phi\otimes\psi$, iff $V\cong U\otimes W$ and
   $$
   \rho(X)(u\otimes w) = \phi(X)(u)\otimes w + u\otimes \psi(X)(w).
   $$

   > **This is the single most important difference from the group case.** Groups act multiplicatively, $\rho(g)(u\otimes w) = \phi(g)u \otimes \psi(g)w$ while algebras act by the **Leibniz rule**. It falls straight out of differentiating the group formula at $t=0$. 
   > $$
   > i\frac{d}{dt}\Big|_{0}\big(\phi(e^{tX})u \otimes \psi(e^{tX})w\big) = \phi_\ast(X)u\otimes w + u\otimes\psi_\ast(X)w.
   > $$
   >
   > This is *why angular momenta, energies, and other charges add*: $J^{\text{total}} = J^{(1)}\otimes 1 + 1\otimes J^{(2)}$, while rotations compose.

8. **Unitary representation** iff $V$ is a complex inner product space and $\rho(X)$ is **Hermitian**, $\rho(X)^\dagger = \rho(X)$, for every $X\in\mathfrak{g}$.

   > Differentiate $\rho(e^{Xt})^\dagger\rho(e^{Xt}) = 1$ and you get $\rho(X)^\dagger - \rho(X) = 0$. Unitary at the group level means Hermitian at the algebra level. This is the origin of the physicist's factor of $i$: We want unitary representations of symmetries to lead to **observable quantities** for the Lie algebra.

9. **Dual representation to** $\rho^\vee: \mathfrak{g} \to \text{End}(V^\vee)$ if $\rho(X) = -\rho^\vee(X)$ for all $X\in \mathfrak{g}$ (The minus sign is there because the transpose flips the order in the commutator).

10. **Conjugate representation to** $\bar \rho: \mathfrak g \to \text{End}(\bar V)$ if $V$ is complex and $\rho(X) = -\bar \rho(X)^*$ (the complex conjugate) for all $X \in \mathfrak g$.

11. **Faithful representation** iff $\rho$ is injective. Equivalently $\ker\rho = 0$.

12. **Defining representation** if $\mathfrak{g}$ was presented to you as an algebra of matrices in the first place and $\rho$ is that presentation. For $\mathfrak{su}(2)$ it's the $2\times 2$ traceless Hermitian matrices acting on $\mathbb{C}^2$. This is a *choice of presentation*, not an intrinsic property. 

     > You will often hear people call the defining representation **fundamental representation**. However, fundamental representation has a different meaning for a Lie algebra. This makes it such that a Lie algebra has many fundamental representations and not all of them are necessarily faithful. You will explore what a technical definition of a fundamental representation in QFT II, but if you can't wait [check this out](https://notes.panos.wiki/Geometry+Lie_Algebras).

## Tools

Lie algebra representations have so many tools that people use and honestly it can get daunting, and the purpose of this isn't really to go over them. [But the purpose of this is if you are interested](https://notes.panos.wiki/Geometry+Lie_Algebras). Let's just explore some basic tools so that we can understand the structures we are encountering. The most important one is this.

**<u>Theorem:</u>** *(Schur's Lemma)* Let $\rho: \mathfrak{g} \to \text{End}(V)$ be a finite dimensional irreducible complex representation, and a nonzero $A \in \text{End}(V)$ commute with $\rho(X)$ for every $X \in \mathfrak{g}$. Then $A = k \text{Id}_V$ for some $k \in \mathbb{C}$.

***Proof:*** Assume $k$ is an eigenvalue of $A$, and let $K \subset V$ be the eigenspace of $A$ with eigenvalue $k$. Then $\rho(G) K \subset K$ since for any $v \in K$ and $g \in G$
$$
A \rho(g) v =\rho(g) A v = k \rho(g) v \implies \rho(g) v \in K.
$$
Therefore $K$ is a subrepresentation of $V$. Since $V$ is irreducible it can either be $0$ or $V$. Since $A$ is nonzero $K = V$.
$$
\begin{equation} \tag*{$\Box$} \end{equation}
$$
This stupid result does an absurd amount of physics! And it also holds for groups and much more. If a Hamiltonian commutes with a symmetry, then on each irreducible piece of the Hilbert space it is a *number*, so every state in an irreducible multiplet has the same energy, and the degeneracy of a level is nothing but the dimension of an irreducible representation. When you were told that the degeneracy of a spin eigenstate is $j(j+1)$ it was exactly Schur's Lemma! The Hamiltonian commutes with the spin generators, and the irreducible spin-$j$ representation has dimension $j(j+1)$.

To take this a step further if your group is compact (like $U(1), SU(n)$ and more) then one can show that the structure constants of the Lie algebra are totally antisymmetric. Meaning that $f_{abc} = - f_{cba}$ as well! Using this fact show the following.

**<u>Exercise:</u>** Show that if $\mathfrak{g}$ is the Lie algebra of a compact semisimple Lie group, $\{T^a\}_{a=1}^{\dim \mathfrak g}$ is a basis for $\mathfrak g$, and $\rho$ is a Lie algebra representation then the following Matrix commutes with the all the Lie algebra element representations
$$
Q = \sum_{a = 1}^{\dim \mathfrak g} \rho(T^a) \rho(T^a).
$$
This is called a **quadratic Cassimir operator**. Cassimirs are constant on irreps so they are so helpful in classifying them. And you've already seen the most famous one, the total angular momentum operator $J^2 = \vec{J} \cdot \vec{J}$, which famously was useful because it commuted with all the momentum generators and had eigenvalue $j(j+1)$ on irreducible representations. Another one you might have seem or are about to see are the Cassimirs of the Poincare group which are the famous mass and helicity (or spin).

Another useful thing is that given a Lie algebra representation $\rho$, one can induce a representation $\hat \rho$ on $\text{End}(V)$ itself as a vector space. The way to do this is to realize that $\text{End}(V) \cong V \otimes V^\ast$ and take the tensor product representation. While this might feel involved, operational this means that for any $A \in \text{End}(V)$ and $X \in \mathfrak{g}$
$$
\hat{\rho}(X)(A) = [\rho(X),A],
$$
is a perfectly sensible Lie algebra representation on $\text{End}(V)$! You have certainly used this in quantum mechanics, but at least now there is a reason why it is a "natural" choice. (Similarly one can lift the representation of a group to the famous $U^\dagger A U$).

# Exercises

If you feel iffy about these concepts and they aren't yet fully in your working memory here are some exercises you can practice with. Remember the goal is to have these ready to go when you listen to a lecture, and not have to go like: "oh and what was an irrep again?"

## Tedious Ones

Don't underestimate the power of tedium! If this was the first time you saw any of these concepts going through these more operational problems, by actually completing all the details and not stopping once you know what to do, can help highlight things you take for granted or give you some working examples for your intuition.

**<u>Exercise:</u>** *(2 Spins)* Consider $\mathfrak{su}(2)$ with the basis $[T^a,T^b] = \epsilon_{abc}T^c$ and let $\phi$ be the spin $\frac{1}{2}$ representation on $\mathbb{C}^2$. 

1. Write out the explicit matrices for $\phi(T^a)$
2. Write out the explicit matrices for $(\phi \otimes \phi)(T^a)$. What is the Hilbert space they act on?
3. Find the corresponding group representation $\Phi$ of $SU(2)$ on $\mathbb{C}^2$, and the explicit matrices of $e^{i\theta T^3}$ under $\Phi$ and $\Phi \otimes \Phi$.
4. Find a one dimensional subrepresentation of $\Phi\otimes \Phi$ (you've already done this in quantum mechanics).

**<u>Exercise:</u>** *(The physics $i$ convention)* Let $\rho$ be a representation of Lie group $G$ and let $\rho_\ast (X) = -i \left.\frac{d}{dt}\right|_0 \rho(e^{tX})$ for any $X \in \mathfrak{g}$ be the induced Lie algebra representation.

1. Is $\rho_\ast$ a Lie algebra homomorphism?
2. If $\{T^a\}$ is a basis of $\mathfrak{g}$ such that $[T^a,T^b] = g_{abc}T^c$, then what is $[\rho_\ast(T^a), \rho^\ast (T_b)]$? If a physicist writes $[T^a,T^b] = if_{abc}T^c$ (where they are abusing notation by $\rho_\ast(T^a) = T^a$) how are $f$ and $g$ related?
3. Are the Pauli matrices a representation of $\mathfrak{su}(2)$? If not how can you construct one using them? If so in the physics or math convention? What do you need to do to convert from one convention to the other?
4. Show that if $\rho$ is unitary then $\rho_\ast(X)$ is Hermitian for every $X$.

**<u>Exercise:</u>** *(How the algebra acts on itself)* Remember that $\text{ad}_X = [X,\cdot\,]$ for some $X \in \mathfrak{g}$ and assume that $\mathfrak{g}$ is the Lie algebra of a Lie group $G$. 

1. Show that $X \mapsto \text{ad}_X$ is a representation of $\mathfrak{g}$ on itself. This is called the **adjoint representation**.
2. Pick a basis for $\mathfrak{su}(2)$ and calculate the representation of the basis elements.
3. What is the kernel of the adjoint representation?

## Irreducible, Indecomposable, and Semisimple

**<u>Exercise:</u>** *(Huh?)* Consider the representation of $\mathbb{R}$ given by 
$$
t \mapsto \begin{pmatrix}1 & t\\ 0 & 1 \end{pmatrix}.
$$
Is it irreducible? Is it decomposable? Is it semisimple? What is the corresponding Lie algebra representation? Could this be a time evolution of a qubit?

**<u>Exercise:</u>** *(Charge)* Often (yet this definition breaks down in so many cases) we say that a quantum mechanical system has a $G$ symmetry if the Hilbert space is a representation of $G$ and the representation of the elements in $G$ commute with the Hamiltonian. If $G$ is an Abelian Lie group, then the eigenvalues of the Lie algebra generators of $G$ are the possible charges. For example, a free particle has an $\mathbb{R}$ symmetry since translations along any direction commute with the Hamiltonian. The corresponding charge is the momentum. Electric charge is a thing because Quantum Electrodynamics has a $U(1)$ symmetry. Why is the electric charge an integer? (don't @ me about units, I'm asking why is it not continuous like the momentum of a free particle). In fact the representation of $U(1)$ is the adjoint representation. What are the possible values of the electric charge?

## Direct Sums and Tensor Products

**<u>Exercise:</u>** *(Hyperfine Structure)* The proton and electron in the hydrogen atom are spin $\frac12$ particles interacting with a perturbation $H = \lambda \sum_{n = 1}^3 J^i \otimes J^i$ (where $J^i$ is a representation of an $\mathfrak{su}(2)$ generator). How many times will the ground state of the Hydrogen atom be split once you turn on $\lambda$. (I mean I know you can do this with "hello world" perturbation theory, but you don't need it for this) 

**<u>Exercise:</u>** *(Decompositions)* Think of $L^2(\mathbb{R})$, $L^2(S^1)$ and $\mathbb{\mathbb{R}}^{\mathbb{Z}_k}$ (the vector space of maps $\mathbb{Z}_k \to \mathbb{R}$). What are the three relevant translation groups for each vector space of functions, and what are their representations? Now decompose each one into sums of irreducible representations. 

**<u>Exercise:</u>** *(Tensor products and irreducibility)* Assume that $\rho$ is an irreducible group representation of dimension more than $2$. Prove or disprove that $\rho \otimes \rho$ is not irreducible.

## Quantum Mechanics

**<u>Exercise:</u>** *(The sad truth about particle Hilbert spaces)* A free 1D particle has to have a position and a momentum Hermitian operator such that $[X,P] = i$. Why can't the Hilbert space be finite dimensional (if not trivial)?

**<u>Exercise:</u>** *(Who is time evolution?)* Time evolution is a representation of $\mathbb{R}$. What is the representation of the Lie algebra? When is the time evolution representation irreducible? 

## Zoo of counterexamples

**<u>Exercise:</u>** Show $e^A e^B \ne e^{A+B}$ in general, and compute the first correction for the matrix exponential. Compare with the $t^2$ expansion used to define the bracket in these notes and explain why the two computations are the same computation.

**<u>Exercise:</u>** Find a representation of $\mathfrak{g}$ that is faithful while the corresponding representation of $G$ is not. Then show the reverse, or prove that it is impossible.

**<u>Exercise:</u>** Give a representation that is irreducible over $\mathbb{R}$ and reducible over $\mathbb{C}$, and one that is irreducible over $\mathbb{C}$ but where the underlying real representation is reducible.







