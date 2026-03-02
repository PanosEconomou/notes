# Von Neumann Algebras

Von Neumann algebras help us classify and study entanglement with great detail. If one knows quantum gravity (i.e. not me) would immidiately understand why that is super needed. Loosely speaking if I give you a Hilbert space and some opearators to observe stuff in, it is unclear that this hilbert space is realted to some spacetime. However, there might be some hints on this relation that you may be able to find states and operators that behave as if you are making measurements in regions of spacetime with a specific geometry. Turns out, in a way that is not immidiately clear to me, nontrivial spacetime structures are in some way related to entangled states. Though what that means precisely remains unclear. These notes follow [these notes](https://arxiv.org/abs/2510.07017) by Hong Liu very closely. Honestly just go read that instead.

[toc] 

## What is entanglement without a factorization?

If we have two nontineracting quantum systems with corresponding hilbert spaces $A,\bar A$ we can combine them into one system with Hilbert space $A\otimes \bar A$. While one system does not know about the other, it is possible to find states that do, which we call entangled. By definition such a state $\psi \in A\otimes \bar A$ can't be factorized into a product of a state in $A$ and one in $\bar A$, and in some sense if the system is in that state, probing the "decoupled" $A$ part of the system will give us information about $\bar A$.

One way to look at a state $\psi$ is as a map $A \to \bar A$  (by $\psi(\phi) = \sum_{n} \langle \phi\otimes e_n, \psi \rangle e_n$), which rougly answers the question: if I am in state $\phi \in A$ what is my state in $\bar A$? If the answer is the same (i.e. parallel) for all $\phi \in A$ then my state is not entangled. One easy way to measure then the degree of entanglement of state $\psi$ would be to ask how "big" is the image of $\psi$. One such measurement could be $\text{rank\,}\psi$, i.e. the dimension of the image, but a less crude measurement would also include information about the singular values that quantify the spread of $\psi$. 

For example if you have 20 singular values but one is almost one while the rest are almost zero, their *entropy* is low, so that state is less entangled than a state that has 20 equally spaced singular. We can use the shannon entropy for that which defines
$$
S_{\psi} = - \sum_{s \in \text{sing\,} \psi} |s|^2 \log |s|^2.
$$
One way to extract the singular values is to look at the eigenvalues of $\rho_\psi \coloneqq \psi^\dagger \circ \psi$ since and write
$$
S_\psi = -\sum_{\lambda \in \text{eig\,}\rho} \lambda \log \lambda = -\text{Tr\,}\rho \log \rho,
$$
which is the definition of the Von-Neumann entropy. There are other ways that we can measure it, but this one seems natural. 

Yet this assumes that we can write the total Hilbert space as $A\otimes \bar A$, however this doesn't have to be the case. If we have two systems that we can make measurements independently in but they are always coupled, the hilbert space can't be split because there are no states in there that are unentangled. 

A nonphysical approximation to what happens around a timelike-slice of a relativistic QFT can be obtained by considering two columns, each with $N$ qubits. Let's assume that each pair is in the state $\psi_{\theta} = \cos\theta \ket{00} + \sin\theta \ket{11}$ for some different angle $\theta \in (0,\pi/4)$. Therefore each pair is entangled. If now the system is in the state $\phi = \bigotimes_{n=1}^N \phi_{\theta_{n}}$, we can study finite energy excitations around that state. We see that as $N\to \infty$ to produce an unentangled state we would need to do infinitely many flips, which we can't because that would require infinite energy.

This is not a great example, since the limit of that hilbert space is not even separable, but the point is that this is a model of what happens around a timelike slice of spacetime. Observables are very densely correlated, and exactly because we force separability we can't unentangle the local interactions from the two sides of the boundary.

Yet there still must be a notion of entanglement. The immidiate physicist trick would be to introduce some regulator for the divergent quantities, and try to extract information from them that are independent of the regulator. While one might be lucky and have such information be enough, it is often the case that a regulator obscures the physics we are trying to probe. So we need a different approach.



# Subsystems

As we have motivated above, we need a different way to talk about subsystems. One that still works even if we can't factorize the Hilbert space. **One such redefinition becomes clearer once we decide that all we can know about a subsystem is what we can measure.** 

In particular consider a Hilbert space $H$ and $B(H)$ is the set of bounded Linear operators $H\to H$. We assume that all we can measure is a bounded linear operator, but in reality there are extensions to what we will talk about today in more weird cases.

>  *Note:* An operator is bounded if it moves bounded sets to bounded sets. In other words, the image of every sphere can be put inside another sphere.

Suppose that we have access only to a subset of these operators $M \subset B(H)$ (and also that you wouldn't want ot measure something unbounded please for the love of god). If we only have access to $M$ the only way we can measure and affect $H$ is in $M$. So in some sense, $M$ is so close to defining a subsystem of $H$. 



## Von Neumann Algebra = Subsystem

Obviously for any subset $M$ of stuff we can measure must also close under linearity (we can sum up measurements) as well as hermitian conjugation, so in some sense it is already a nice algebra. How nice? Let's see some definitions.

**<u>Definition:</u>** A vector space $A$ with an associative multiplication map $A\times A \to A$ is an (associative) **algebra** iff the multiplication is compatible with the scalar multiplication of $A$, and it is left and right distributive with respect to the vector addition of $A$. 

Therefore $M$ is by definition an algebra over $\mathbb{C}$ when we take as multiplication the composition.

**<u>Definition:</u>** An algebra $A$ is called $\ast$-**algebra** there exists an involution $x\mapsto x^\ast$ that respects the multiplication, vector addition, as well as $(\lambda x)^\ast = \bar \lambda x^\ast$ for any $\lambda \in \mathbb{C}$, $x\in A$.

In our case, Hermitian conjugation in $M$ serves as the $\ast$-algebra involution so we have a $\ast$-algebra. But now we hit a wall, because as physicists we are so used to doing things like: an operator $O$ is given by $O = \sum_{n\in \mathbb{N}} O_n$, where $O_n \in M$. That thing does is not necessarily in $M$, but it would be useful to include it. One way we can study such series is with norms. 

**<u>Definition:</u>**  If every convergent sequence in a $\ast$-algebra $A$ converges in $A$, (i.e. $A$ is a banach space). then $A$ is calld a $C^\ast$**-algebra**. (The $C$ stands for convergent)

This is often wayyyy tooo strong. A typical example is that if you have an equation of motion whose operator doesn't vanish. BUT you know where it does vanish? Inside correlation functions! We call that weak convergence.

**<u>Definition:</u>** Let $S=\{O_n\}_{n\in \mathbb{N}} \subset B(H)$ then we say that $S$ is **weakly convergent to** $O \in B(H)$ iff for any $\psi,\phi \in H$ then $\langle \psi, O_n \phi\rangle \to \langle\psi, O\phi\rangle$. If a $\ast$-algebra contains all limits of weakly convergent sequences it is called a **Von-Neumann algebra**, or $W^\ast$**-algebra**.

We finally made it! If we take $M$ and close it under weak convergence then it is a Von-Neumann algebra.

**<u>Proposition:</u>** Von-Neumann algebras are $C^\ast$-algebras.

***Proof:*** Anything that converges also converges weakly, therefore a von neumann algebra contains all convergent sequences.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
So now this is Von Neumann algebra construction describes everything we want to measure. We want to measure components of matrices and they need to converge. As a result if a subsystem is everything we can measure, it is a Von Neumann algebra.



## The remaining subsystem

Ok the whole point of being able to do the factorization of the Hilbert space was to be able to isolate one part from the rest. Let's find the complement of the Von Neumann algebra. 

**<u>Definition:</u>** The **complement** $A'$ of an algebra $A$ is defined by the set of operators that commute with $A$. 
$$
A' \coloneqq \{B \in B(H) \mid [B,C] = 0 \ \forall C\in A\}.
$$
Ok cool. Here is an equally cool result

**<u>Proposition:</u>** For any $\ast$-algebra $A$ then $A''' = A'$.

**<u>Theorem:</u>** If $A$ is a $\ast$-algebra such that $A'' = A$ then it is a Von-Neumann algebra.

I am not proving this, but this is a much easier check to perform than weak convergence. Here is a cool corollary.

**<u>Corollary:</u>** If $A$ is a $\ast$-algebra then $A''$ is a the **smallest** Von Neumann algebra that contains $A$.

Now here is some more ways that we can think of the von neumann algebras. 

**<u>Definition:</u>** Let $A,B$ be Von-Neumann algebras then the **smallest Von Neumann algebra that contains (is contained in) $A,B$** is denoted by $A\vee B$  ($A\wedge B$).

**<u>Proposition:</u>** The following properties are true.
$$
\begin{align*}
A\vee B = (A\cup B)'' && A\wedge B = A\cap B && (A\vee B)' = A'\wedge B'.
\end{align*}
$$
One super amazing and useful construct of a Von Neumann algebra is the set of all operators in $B(H)$ that commute with it. 

**<u>Definition:</u>** The **center** $Z(A)$ of a Von Neumann algebra $A\subset B(A)$ is defined as
$$
Z(A) \coloneqq A \cap A'.
$$
$A$ is called **primary** or a **factor** iff $Z(A) \cong \mathbb{C}$.

**<u>Proposition:</u>** A Von Neumann primary satisfies $B(H) = A\vee A'$.

These is simply a list of tools that help us understand von-neumann algebras. We will use them soon but it's nice to have that here in one place.



## You "only need"  the algebra

One amazing thing, is that if you know the algebra, you can technically "forget" about the hilbert space. 

> To be clear, you aren't forgetting anything or getting information that you didn't have, but you can repackage any question you can ask of your Quantum theory into one about the Von Neumann algebra that you have access to.

What a measurement of operators in $M$ really is, is a linear map $\omega: M \to \mathbb{C}$, so it is an element of the "dual" of $M$. What that means precisely we will explore in a second, but what is interesting about this is that these linear maps help us understand $M$ and the physics. 

**<u>Definition:</u>** Let $\omega: M \to \mathbb{C}$ be a linear map from some Von Neumann algebra $M$. Then $\omega$ is a

1. **weight** if $\omega(a^\dagger a) \geq 0$ for any $a \in M$,
2. **trace** if it is a weight such that $\omega(ab) = \omega(ba)$ for any $a,b \in M$,
3. **positive** if it is a weight such that $\omega(1)$ is finite,
4. **state** if it is a weight such that $\omega(1) = 1$, we also call $\omega(a)$ the expectation value of $a$ on the state $\omega$,
5. **tratial** if it is a state that is also a trace,
6. **normal** if it is a state such that for any bounded positive sequence $\{a_n\}_{n\in \mathbb{N}}$ then $\sup \omega(a_n) = \omega(\sup a_n)$,
7. **faithful** if $\omega(a^\dagger a) = 0 \implies a=0$.

One interesting thing is that we can use states to build states.

**<u>Proposition:</u>** For two states $\omega, \eta$ and $\lambda \in (0,1)$ then $\lambda \omega + (1-\lambda) \eta$ is also a state. We say that this state **dominates** $\omega,\eta$ and a state that can't be written like this is a **pure** state. Also any state satisfies the triangle inequality, namely
$$
|\omega(a^\dagger b)|^2 \leq |\omega(a^\dagger a)| |\omega(b^\dagger b)|.
$$
So now we know that we can use these maps to know everything we needed to know about our measurements. States, densities and whatnot. In the appropriate settings, all these boil down to out known concepts. 

One more interesting thing that we want to use primarily because we have been using it to talk about entropy are **projections**. In some sense they can be a basis for the Von-Neumann algebra so it is worth spending some time here.

**<u>Proposition:</u>** Every operator in a Von Neumann Algebra can be written as a linear combination of projections.

***Proof:*** Since every Hermitian operator is diagnoalizable, then it can be written as a linear combination of projections to eigenspaces scaled by the corresponding eigenvalues. If an operator $a$ is not hermitian, then it can be written as $a = \frac{a + a^\dagger}{2} + i\frac{a- a^\dagger}{2i}$, where each term in there is a Hermitian operator.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

Apart fromt the super cool thing that they build the algebra, projections are very nice, because they correspond to subspaces of $H$.

**<u>Proposition:</u>** There is a bijection between projection operators and closed supspaces of $H$. 

The main intuition here is that every subspace of $H$ that is closed has a unique projection operator $P$, defined by the inner product in $H$.

**<u>Definition:</u>**  Here are some esoteric ways we talk about projections $P,Q \in M$ in a Von Neumann Algebra $M \subset B(H)$. 

1. We say that $M$ **contains the region** $PH$.
2. if $PQ = P$ then we say $P\leq Q$. That is because $P$ must project further than $Q$ to a subspace that must be at most as big as $QH$. *Ironically this notation has the consequence that any projection $P$ satisfies $P\leq 1$.* 
3. The **projection orthogonal to** $P$ is defined by $P^\perp \coloneqq 1 - P$.
4. The projection to $PH\cap QH$ is denoted by $P\wedge Q$.
5. The projection to $PH \cup QH$ is denoted by $P\vee Q$.
6. $P\neq 0$ is **minimal in** $M$ iff there exists no projection $Q<P$ in $M$.
7. $Q\sim P$ are **equivalent in** $M$ if there exists a partial isometry $a\in M$ such that $Q=a^\dagger a$ and $P = aa^\dagger$. (i.e. $a$ is an isometry for the orthogonal complement of its kernel)
8. $P\neq 0$ is **finite** if it is not equivalent to a smaller projection, and **infinite** if it is $P\sim Q$ for $Q< P$.

This is a bunch of unmotivated terminology that we will make good use of really soon when we try to understand the classification of Von Neumann algebras. But first, let's write some elementary results.

**<u>Proposition:</u>** If $P,Q \in M$ are projections in a Von Neumann algebra $M$ then $P\wedge Q, P\vee Q,$ and $P^\perp$ are in $M$. If $M$ is a factor, then $1$ is the maximum projection (i.e. It is the unique maximal projection).

Here is a small example to illustrate why we used such a weird notion of finiteness in the definition above.

**<u>Example:</u>** Consider the Hilbert space $H= H_1 \otimes H_2$ and the projection $P = \psi\psi^\dagger \otimes \text{Id}_{H_2}$ for some $\psi \in H_1$. If $H_2$ is (countably) infinite dimensional then $P$ could be a projection with infinite rank on $H$ (because it projects to all of $H_2$). But  were to restrict to $H_1$ it has finite rank. In other words, in the Von Neumann Algebra $B(H_1)\otimes \text{Id}_{H_2}$ it has finite rank, while it has infinte rank in $B(H)$. In particular the point of the equivalence, is to ask if there is a transformation of $H \to H$ that keeps $P^\perp H$ untouched while mapping the images of the projections.



One more tool we need about projections is a way to talk about their dimensions. This is equivalent to asking "within the subsystem $M$ what is the dimension of the subspace $P$?" The naive way would be to take $\text{Tr\,}P$, but the example above showed that this is a terrible idea because it will have the same value no matter what $M$ is. But since we have found a partial ordering of finite projections, means that we can safely attach an integer to each in a monotonic way, which is really what a dimension function should do.

**<u>Theorem:</u>** Let $M$ be a Von Neumann algebra and $\Pi \subset M$ be its projections. Then there exists a map $d:\Pi\to \bar{\mathbb{R}}$ such that for any two finite projections $P\leq Q \in \Pi$ 
$$
\begin{align*}
d(0)=0 && d(P) \leq d(Q)
\end{align*}
$$
saturdated when $P=Q$, and $d(W) = \infty$ for any infinite $W\in \Pi$. In addition, it is possible to find a normal faithful trace $\text{tr}:M \to \mathbb{C}$ that agrees with $d$ on the projections up to scaling. 

The idea here is that such a function $d$ has all the properties to define a sort of "normalized trace" within the subsystem we are looking in. 



# Classification

This is what we've all been waiting for! Finally we have built up enough of the vocabulary to meaningfully start thinking of the qualitatively different ways a Von Neumann algebra can look like.

**<u>Theorem:</u>** *(Von Neumann and Murry Decomposition Theorem)* Any Von Neumann Algebra can be written as a direct integral of factors.

> A direct integral is a continous analog to direct sums. Namely, one can collect a bunch of Hilbert in a family $F$ spaces and form a [measurable space](../Analysis/Functional_Analysis.md), then one can consider maps to a family Von Neumann Algebras. Using a standard integral construction on a measure space for some measure on $F$ we can sum such maps and therefore construct other Von Neumann algebrs. This leads to the famous decomposition theorem above. But for intuition we can think of direct sums instead, since they are a direct integral for the finest measure on $F$.

What this means in practice is that if we classify factors, then we can put them together into building blocks. The way we classify them is by projection operators. Since projection operators help us classify "which subspaces of $H$ are included in $M$" it would make sense to understand factors that represent subsystems in terms of which chunks of the Hilbert space they have. 

So here are the categories.

**<u>Definition:</u>** Let $M$ be a Von Neumann factor. Then $M$ is

1. **Type** $\text{I}$ if it contains nonzero minimal projections. We assume that $d(P_0) = 1$ for any minimal projection (we have this freedom) and that the trace takes values in $\bar{\mathbb{Z}}_{\geq0}$. Then it further is
   1. **Type** $\text{I}_n$ if $d(1) = n \in \mathbb{N}$, which means that $d(P) \leq n$ for all projections. 
   2. **Type** $\text{I}_{\infty}$ if $d(1) = \infty$.
2. **Type** $\text{II}$ if it contains finite but not minimal projections. In this case the dimension has to be real valued. It further is
   1. **Type** $\text{II}_1$ if $d(1) < \infty$, in which case we set it to $1$.
   2. **Type** $\text{II}_{\infty}$ if $d(1) = \infty$.
3. **Type** $\text{III}$ if all nonzero projections are infinite.
   1. **Type** $\text{III}_0$ if $S(M) = \{0,1\}$
   2. **Type** $\text{III}_\lambda$ if $S(M) = \{0\} \cup \{\lambda^n \in \mathbb{R}_+\mid  n\in \mathbb{Z}\}$ for $\lambda \in (0,1)$
   3. **Type** $\text{III}_\infty$ if $S(M) = \{0\} \cup \mathbb{R}_+$


where $S(M)$ is the Conne's invariant of $M$.



With the formalities out of the way we can play a bit with some intuition. By the way the classificaiton of Type $\text{III}$ is explained in detail in a later section. We will not need the Connes invariant in any of the subsequent discussion until we introduce it so you can safely ignore the subclassification of Type $\text{III}$ factors.

**<u>Example:</u>** *(Type $I$ Algebras)* The algebras we are familiar with from Quantum Mechanics are all type $\text{I}$. There not only is there a well defined dimension, but the existance of a minimal projection implies that everything is graded, so the subspaces that can be included have to have nonnegative integer dimensions, which is exactly the sort of situtation that we are used to in the separable Hilbert spaces of QM. Therefore we can count states in such algebras. In fact, say that we have a separable Hilbert space $H = A\otimes \bar A$ where $A$ is $n$-dimensional while $\bar A$ is infinite dimensional. Then the alegebra $M = B(A)\otimes \bar 1$ is of type $\text{I}_n$ while $N = 1\otimes B(\bar A)$ is of type $\text{I}_{\infty}$, and the trace in both is the standrard trace in $A$ and $\bar A$. Not only that but also $M' = N$.

More importantly given an factor $M \subset B(H)$, it is possible to factorize $H$ with one factor be $1H$ only if $M$ is type $\text{I}$. So regular quantum mechanical entanglement measures strictly live there.



**<u>Example:</u>** *(Type $II$ Algebras)* When we loose minimal projections so this idea of counting of states is immidiately lost. Yet they do admit a trace! Which means that they can be used to study things like: "Number particles per volume" instead of "Number of particles." For example, in statistical mechanics when we take a system to be "infinitely many copies," i.e. the thermodynamic $N\to \infty$  limit, we are often faced with this kind of problem where we have to find new operators that belong to a type $\text{II}$ algebra in order to get finite expectation values, energies and whatnot. Yet the thermodynamic limit is still not local operators in QFT. 

One interesting result though is that for both type $\text{II}$ and type $\text{III}$ algebras it is not possible to find something like a normalized pure state. This follows because there is no minimal projection, so factorization doesn't make sense. 



**<u>Example:</u>** *(Type $III$ Algebras)* The issue here is that any dimension function we could try to write down will simply be infinity, and that sucks. So instead of defining things like states and other crazy things, we define other objects to do useful calculations in called densities. Even though these are the algebras of local operators in QFT they require a much more careful classification that we will go through later. However, there is a good classification parametrizing by a number in $(0,1]$.

Yet, there are still interesting things about such algebras. In particular, since all projections are infinite, they are all related to the identity projection. Namely, for every projection $P\in M$ there exists $a \in M$ such that $1= aa^\dagger$ and $P = a^\dagger a$. This means that for any state $\omega : M \to \mathbb{C}$ we can find an eigenstate $\omega_a$ of $P$. An eigenstate would statisfy $\omega_a(P) = 1$ (since a projection can only have eigenvalue $1$). Therefore we can pick $\omega_a(b) = \omega(aba^\dagger)$ for any $b\in M$.

Why is this interesting? Well physically, a projection is a yes-no observable. That's why minimal projections are interesting, in some sense they probe the finest question you can ask about a system (e.g. "Does the electron in the hydrogen atom have the following values for a complete set of quantum numbers?") and therefore allow you to find a countable number of commuting observables to fully describe them. In other words this is what allows us to kinematically split the Hilbert space into regions where there are no physical processes you have access to that can cross them (aka superselection sectors).

What we have shown is that if you know the local kinematics in a QFT you won't be able to find any superselection sectors. In other words, the whole local algebra of observables is till not enought to answer the question: "will a particle of this time appear there at that time."



# Pulling out the Hilbert space

Now we get to do something cool! While Von Neumann algebras know everything about the Hilbert space, a $C^\ast$ algebra doesn't need to. It only needs a norm. In other words, if I was doing physics and I had a set of observables that was a $C^\ast$ algebra I wouldn't know what Hilbert space I am actually looking at. Turns out you only need one state to pull it out! This is called the emergent Hilbert space construction. 

**<u>Theorem:</u>** *(GNS Construction)* Let $A$ be a $C^\ast$ algebra and $\omega$ be a state in $A$. Then it is possible to find a $\ast$ representation (i.e. a $C^\ast$ algebra homomorphism) $\pi_\omega(A) \subset B(H_{\omega})$ of $A$ acting on some Hilbert space $H_{\omega}$ with a cyclic vector $v$ such that for any $a\in A$
$$
\langle v,\pi_{\omega}(a) v \rangle = \omega(a).
$$

> Notice that the representation of $A$ is still a $C^\ast$ algebra and not necessarily a Von Neumann algebra. We can take its double commutant though and obtain a nice Von Neumann algebra.
>
> Also, a cyclic vector $v\in H$ is such that $Av \subset H_\omega$ is dense in $H_\omega$.

Before we sketch out the proof, let's see why this is cool. Apart from the (quite amusing honestly) fact that all the structure that a $C^\ast$ algebra forgot about the Hilbert space was a single state, this offers a great way to classify the representations of such an algebra through states! We are used to that by the way. If you know the angular momentum algebra, you only need the state with largest angular momentum to figure out which irreducible representation you are in! But it looks so obscure here that I thought I should mention it.

***Proof:*** Let $a,b \in A$, then we can define a sesquilinear form (bilinear but constant are pulled out conjugated from one argument) like so
$$
\langle a,b \rangle \coloneqq \omega(a^\dagger b).
$$
Then the properties of $\omega$ as a state are more than enough to show positive definiteness and conjugation. Yet this is degenerate as hell, since there definitely are $\omega$ we can pick where we can find $a\neq 0  \in A$ such that $\omega(a^\dagger a) =0 $. Let's call the $J\subset A$ the subset of these operators. These in fact are a vector subspace of $A$ (by triangle inequality which $\omega$ must satisfy as a state) that is also fixed by $A$ so it is a left ideal of $A$, meaning that we can take quotients of $A$ by $J$. To show that we take $a\in A, x\in J$ and see that there must be a $C> 0$ such that
$$
|\omega((ax)^\dagger ax)|^2 = |\omega(x^\dagger a^\dagger a x)|^2\leq C\omega(x^\dagger x) = 0,
$$
by triangle inequality. So now we have a vector space $A/J$ in which the form we defined via $\omega$ is a Hermitian inner product. So we can try and complete it by including all the limits of Cauchy sequences with respect to that inner product and BOOM we have a Hilbert space, in which the representation of $A$ is the multiplication in it after it descends to the quotient $A/J$. In addition we see that the elment $[1] \in A/J$ serves the cyclic vector $v$ since any element can be given as $a[1]$ for some $a \in A$, and it satisfies that
$$
\langle [1], a[1] \rangle = \omega(1 a 1) = \omega(a).
$$

$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

BUT WAIT! There is more! 

**<u>Proposition:</u>** Such a representation is irreducible iff $\pi_\omega(A)'' = B(H_{\omega})$ which is iff $\omega$ is pure. In addition, iff $\omega$ is faithful (i.e. nondegenerate) then the representation is **separating**, that is no element in $A$ kills the cyclic vector.



## Examples

**<u>Example:</u>** *(Purification)* Let $A = \text{End}(\mathbb{C}^n)$, and we pick the state $\omega$ such that for any $a\in A$
$$
\omega(a) = \text{Tr\,}\rho a,
$$
for some positive definite Hermitian $\rho$ of rank $1\leq m\leq n$ such that $\text{Tr\,}\rho = 1$. If $m = 1$ then $\rho$ can be written as $\rho = \psi\psi^\dagger$ for some state $\psi \in \mathbb{C}^n$, i.e. it is pure. Otherwise it is mixed, and it is faithful for $m=n$. Since $\rho$ can be diagonalized, it can be written as a linear combination of $m$ independent projections. In fact there is a projection $p_m$ such that for any $a \in A$ $\omega(a^\dagger a) = 0 \iff \text{Tr\,} p_m a^\dagger a = 0$. So the ideal $J$ consists of all maps that map $\mathbb{C}^n \to p_m^\perp \mathbb{C}^n \cong \mathbb{C}^{n-m}$. Therefore the Hilbert space is isomorphic to $\text{Hom}(\mathbb{C}^n,\mathbb{C}^m) \cong \mathbb{C}^{n}\otimes \mathbb{C}^{m}$. This is so cool! The GNS construction gave us the (smallest) purification of state $\omega$ as the cyclic vector in the representation!



**<u>Example:</u>** *(Thermodynamic Entanglement Limit)* Consider the setup of the two columns of $N$ entangled qubits as $N\to \infty$. We want to find a way to describe the Hilbert space of finite energy excitations of these qubits around taht entangled state that we will call $\omega$. We know the operators that do these excitations, so we can use the GNS construction to build the Hilbert space. The operators are of the form
$$
a = \bigotimes_{i=1}^{\infty} a_i, 
$$
where all but finitely many $a_i$ are different from the identity, and $a_i$ is acting on the spins at row $i$. Since we have made all but finite of the factors trivial, the norm is inherited from the finite dimensional case, and then we can complete this set of operators to build a $C^\ast$ algebra. 

One interesting consequence of defining the Hilbert space this way is that we can quickly have information about the subsystems. Consider the algebra $M_{R,L} \subset B(H_{\omega})$ which contains the bounded operators that act on the right and left columns respectively. Since they must commute we have that $M_R' = M_L$.





# Entanglement

We have now some formalism to start tackling entanglement in this more general setting. We will do it for Type $\text{I, II}$ algebras separately and develop some tools to continue to Type $\text{III}$. We will effectively generalize the notion of entropy that we have introduced in the controlled setting at the start of this note.



## Type I and II

In Types $\text{I, II}$ there is a trace. Intuitively the trace in these algebras gives us a way to count "states" and "states per something," therefore the entropy idea should be readily generalized. 

**<u>Lemma:</u>** Let $A$ be a type $\text{I}$ or type $\text{II}$ Von Neumann algebra over $H$. Then for any $\psi \in H$ there exists a unique $\rho \in A$ such that for any $a\in A$
$$
\text{tr\,}\rho a = \langle \psi, a \psi \rangle.
$$
***Proof:*** Let $\rho,\theta \in A$ be two such elements, then we know that for all $a\in A$
$$
\text{tr\,}(\rho-\theta)a = 0 \implies \text{tr\,}(\rho-\theta)(\rho-\theta)^\dagger = 0 \implies  \rho = \theta,
$$
since the trace in these algebras is faithful. The subtlety is that one might not be able to write this down in $\text{I}_{\infty}$ and $\text{II}_{\infty}$ because the trace might be infinite for some $a$. In that case, though the same argument is identical for $a\in A$ where the equation holds.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
**<u>Definition:</u>** For $\psi \in H$, the corresponding $\rho \in A$ is known a **density operator** in $A$ for $\psi$. Its Von Neumann entropy is given by
$$
S_{\rho} = -\text{tr\,}\rho\log \rho.
$$
There are two cool results here. Unlike the partial trace situation, this is more general because we didn't need to know anything other than the operators in our subsystem $A$. We just measured a bunch of values there and we were able to come up with the entropy directly! 

One very interesting thing to keep in mind is that if our subsystem has a type $\text{II}$ factor then there are no pure states. 

**<u>Proposition:</u>** There are no pure states in a type $\text{II}$ von Neumann algebra. 

***Proof:*** Let $\psi$ be a pure state in a type $\text{II}$ von Neumann algebra. Then the corresponding density operator $\rho$ is a projection that can't be decomposed as a linear combination of projections. Then $\rho$ is minimal which implies that the algebra is not type $\text{II}$. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

## Modular Flows

Type $\text{III}$ algebras don't even have a trace. In this case, there is no way to assign a density operator to a state, so measuring the entanglement of a state as the "spread" of the density operator is no longer captured by a Shannon entropy type thing. So instead we might figure out a new way to talk about entanglement entropies. This new way is going to be modular flows.

The key idea is that a density operator can be thought of as a probability distribution in the statistical mechanics sense. Here is a concrete way to see it.

**<u>Proposition:</u>** In a type I algebra $A \subset B(H)$ a faithful density operator $\rho$ can always be written in the form of $e^{-K}$, for some bounded hermitian operator $K \in  A$.

***Proof:*** For a given state $\psi \in H$ the density operator can be written by $\rho = \Tr_{A'} \psi\psi^\dagger$ where $A'$ denotes the Hilbert space of the complement system. This operator is bounded because it belongs in $A$ and normalized since it is a state in $A$ and hermitian by construction. So it can be diagonalized with eigenvalues of the form $e^{-k}$ for $k \in \mathbb{R}$ since $\rho$ is faithful and therefore has nonzero eigenvalues. Since $k\geq 0 $ then there is a positive semi definite operator $K$ such that $\rho = e^{-K}$.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
But we already know how to interpret operators like these! For any $a\in A$ taking $\text{tr\,}a\rho = \langle a \rangle$, i.e. the thermal average of observable $a$ in a system with temperature $1$ and Hamiltonian $K$. So treating $K$ as a unique Hamiltonian defined by a state, can help us study properties of the state (including entanglement) using Hamiltonian mechanics.

We have seen already that an observer of a subsystem in an entangled state will inevitably see a "temperature" in the context of black hole thermodynamics, or the person trapped in a Rindler wedge of Minkowski space. In some sense if that temperature was zero then the state would not be entangled. But there is something else here. A Hamiltonian yields time evolution! 

**<u>Proposition:</u>** Consider a faithful density operator $\rho = e^{-K}$ in a type I von Neumann algebra $A$, then for any $a \in M$ the operator
$$
a(s) \coloneqq e^{iKs}ae^{-iKs},
$$
is in $A$ for all $s\in \mathbb{R}$.

***Proof:*** It can be written as a weakly convergent sequence of products of $K$ and $a$ by expanding the exponentials. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
The physics of this is that time evolution by the Hamiltonian $K$ keeps the states inside the same subsystem. So if I give you a separating state you can produce a form of time evolution in your subsystem. What is interesting is that using the same state, you can build a time evolution in the complement of the subsystem by repeating the construction to obtain $\rho' = e^{-K'}$ and define the evolution accordingly. In particular we can define the following evolution operator in the joint system by
$$
\Delta = \rho \otimes \rho'^{-1}.
$$
 The only thing that this requires is that $\rho$ is faithful in $A'$, which would be guaranteed if the state $\psi$ is cyclic and separating with respect to $A$. The point is that we can write a time evolution operator for both systems $\Delta^{-is}$ for $s\in \mathbb{R}$ that evolves $A$ by $s$ and $A'$ by $-s$ in the time direction dictated by Hamiltonians $K$ and $K'$ respectively. 

**<u>Definition:</u>** An operator $\Delta = \rho \otimes \rho'^{-1}$ corresponding to a cyclic and separating state $\psi$ with respect to a Von Neumann Algebra $A$, is a **modular operator**, which defines a **modular flow** $\sigma : A\sqcup A'\times \mathbb{R} \to A\sqcup A'$ such that for any $a \in A\sqcup A'$ 
$$
\sigma(a,s) = \Delta^{-is} a \Delta^{is},
$$
which preserves the subsystem $a$ belongs to. Specifically $\Delta \psi = \psi$. One can also define an antiunitary **modular charge conjugation operator** $J: H \to H$ such that $J^2 = 1$, $J \psi =\psi$, $J\Delta = \Delta ^{-1} J$ and most importantly $JAJ =  A'$ and $JA'J = A$. 

However, this definition does not help us at all with type III algebras since it relies on defining $K$ using density operators which we don't have access too in type III. The generalization is easy from here because we will soon realize that we never needed $\rho,\rho'$ for its definitions. In fact here it is.

**<u>Theorem:</u>** *(Tomita-Takesaki)* Given a Von Neumann algebra $A\subset B(H)$ with a cyclic, separating vector $\psi \in H$ then:

1. <u>There exists a positive modular operator</u> $\Delta$: i.e. an operator $\Delta : H\to H$ given by $e^{-K}$, where $K:H\to H$ is a nondegenerate positive definite hermitian map such that $\Delta \psi = \psi$ and it generates a family of inner automorphisms $\sigma_s$ of $A$ and $A'$ given by conjugation with $e^{-iKs}$ for $s\in \mathbb{R}$.
2. <u>There exists a modular conjugation operator</u> $J$: i.e. an unitary hermitian antilinear operator $J : H\to H$ such that $J\psi =\psi$, $J\Delta = \Delta^{-1} J$, $JAJ = A'$ and $JA'J = A$.
3. For every $a\in A$ the function $\Delta^{-is} a \psi$ can be analytically continued for $\text{Im\,}s \in [0,\frac{1}{2})$ with $\Delta^{-it+\frac{1}{2}} a\psi = \Delta^{-it} Ja^\dagger \psi$ for $t\in \mathbb{R}$. 
4. For $a,b\in A$ correlation functions $G_{ab}(s) = \langle \psi, \sigma_s(a)b\psi \rangle$ can be analytically continued to $\text{Im\,}s \in (-1,0]$ such that $G_{ab}(s) = G_{ba}(-s-i)$.

> The reason for that last condition is that we want whatever the time evolution is to behave as a hamiltonian in a Gibbs ensemble, i.e. the trace is a density matrix divided by a partition function. **Kubo, Martin, and Schwinger** showed that the condition on the analytic continuation of correlation functions in $4$ is enough to guarantee that whatever we get out will transfer the same intuition. Amusingly this condition, first introduced in '57 is known as the **KMS condition**.

However, even with a generalization it seems that we have lost track of entanglement. Like cool, we have found that there might be a collection of states that give rize to hamiltonians between a subsystem and its conjugate and that there are thermal relations. But what about entanglement entropy?



## Relative Entropy

What we said in a type II algebra was that an absolute notion of entropy was illdefined, however, we were able to define a Von-Neumann entropy measured relative to the highest projection. The highest projection, i.e. $1$ has entropy zero, since $\text{tr\,} 1 = 1$ enen though sometimes that projector could indeed correspond to an infinitely entangled state. The difference between Type II and Type III is that while in Type II we were able to define this relative entropy for all states by redefining the trace, while Type III the absence of a trace is evidence that we might not be able to. Instead studying entropy in Type III devolves into finding pairs of states that we can compare their entropy. Here is how this starts.

**<u>Definition:</u>** Given a Von Neumann algebra $A\subset B(H)$ with two cyclic, separating vectors $\psi,\phi \in H$ the tomita operator $S_{\psi\phi}$ is the linear map that satisfies that for all $a\in A, a' \in A'$
$$
\begin{align*}
S_{\psi\phi} a\phi = a^\dagger \psi && S_{\psi\phi}^\dagger a' \phi = a'^\dagger \psi.
\end{align*} 
$$
One can show that such operators admit a decomposition of modular flow $\Delta_{\psi\phi}$ and modular conjugation $J_{\psi\phi}$ such that $S_{\psi\phi} = J_{\psi\phi}\Delta^{\frac{1}{2}}_{\psi\phi}$. These are known as **relative flow** and **relative conjugation,** while the decomposition itself is known as a **polar decomposition**.

Why do we care about this decomposition? Because these relative flows generate actual modular flows.

**<u>Proposition:</u>** Consider a relative flow opeartor $\Delta_{\phi\psi}$ where $\psi,\phi$ are cyclic separating vectors with respect to a Von Neumann algebra $A$, and $\Delta_\psi$, $\Delta_\phi$ are their respective modular operators. Then for all $a\in A, a' \in A'$ 
$$
\begin{align*}
\Delta_{\psi\phi}^{-is}a\Delta_{\psi\phi}^{is} &= \Delta_{\psi}^{-is}a\Delta_{\psi}^{is}\\
\Delta_{\psi\phi}^{-is}a'\Delta_{\psi\phi}^{is} &= \Delta_{\phi}^{-is}a'\Delta_{\phi}^{is}.
\end{align*} 
$$
**<u>Corollary:</u>** Given cyclic separating vectors $\psi,\phi\in H$ the operator
$$
u_{\psi\phi}(s) \coloneqq \Delta_{\psi\omega}^{-is}\Delta_{\omega\phi}^{is},
$$
is the same for any choice of cyclic separating vector $\omega \in H$, and more importantly it satisfies
$$
\sigma_\psi(a,s) = u_{\psi \phi}(s) \sigma_{\phi}(a,s) u_{\psi\phi}^\dagger(s).
$$


In other words, modular flows are related to each other by inner automorphisms! That means that the properties in one modular flow are pretty much all you need to study the rest. So let's use this to bring back our intuition of measuring the "spread" of the map between a subsystem and its complement. In this case, by definition, the mere existence of the modular flow gives an isomorphism (the charge conjugation) between the two subsystems, therefore cylic separating states are all infinitely entangled, so it would make sense to try to quantify their differences. 

In Type I, the Von-Neumann entropy of a cyclic separating state $\psi$ in subsystem $A$ is given by
$$
-\text{tr\,} \rho \log \rho = \text{tr\,}e^{-K_\psi} K_\psi = \langle \psi, K_\psi \psi \rangle,
$$
But wait we have done something cool! We have seen that each cyclic seperating state $\psi$ defines a time direction and a time evolution via a modular flow in which the subsystem evolves on itself. So what the "spread" of the map really was all this time was how much energy is there in this evolution! 

In the finite dimensional setting, $\psi = \psi^{i} e_i\otimes e_i'$ for some orthonormal eigenbasis $e_i\otimes e_i'$ of $K_\psi$ (the axioms of $K$ allow us to do this since it generates flow on both $A$ and $A'$ separately). Then we can solve $e^{-K_\psi} e_{i}\otimes e_i' = |\psi^i|^2 e_{i}\otimes e_i'$, which implies that the eigenvalues of $K_\psi$ are $-\log |\psi^i|^2$. 

Interestingly we see that the higher energy states contribute less in $\langle \psi, K_\psi \psi \rangle = -|\psi^i|^2 \log |\psi^i|^2$. So a highly entangled state is one where almost all states in the time evolution have about the same energy. If that is the case, the average energy of $\psi$ is going to be large. In other words, the less chaotic the flow, the more entangled the state is, which makes sense with our intuition of the more even the spread is the more entangled the state. 

Therefore, if we had two states $\psi,\phi$, we could measure the relative entropy of $\psi$ with respect to $\phi$ by seeing how their energy differs, aka 
$$
S_\phi(\psi) = \langle \psi, K_\psi\psi \rangle - \langle \psi, K_\phi\psi \rangle.
$$
If they both have similar energies under the two different time evolutions this means that they generate similarly chaotic flows. Let's now write it down for a general case.

**<u>Definition:</u>** *(Araki Entropy)* Given two cyclic separating states $\psi,\phi \in H$ with respect to some von Neumann algebra $A$ the **entropy of** $\psi$ **relative to** $\phi$ is given by
$$
S_\phi(\psi) \coloneqq -\langle \psi, \log \Delta_{\psi\phi} \psi \rangle.
$$

>  That is because in the finite dimensional setting $\Delta_{\psi\phi} = \rho_\psi\rho_\phi'^{-1} = e^{-K_\psi + K_\phi'}$, so it generalizes even when the density matrices are not defined.

One interesting clarification is that this only holds for cyclic separating states, which are pretty unnatural. They are always maximally entangled and things like that, but here is the thing. If a state is not infinitely entangled, then you can put it in a Type II or even a Type III subsystem and calculate its entropy there! So in some sense, there is selective pressure to find such states for Type III subsystems.



## Type III Classification

So we are finally able to classify Type III factors and algebras based on how much of these nice modular flows we can find in them. We have found that cyclic separating states $\psi \in H$ with respect to some Von neumann algebra $A$ give rise to modular flows $\sigma^\psi_s = \sigma^\psi(\cdot, s)$ which are automorphisms of $A$ and $A'$ for a range of $s\in \mathbb{R}$. We've also seen that for two such states $\psi,\phi$ we can find a unitary transformation $u_{s}^{\psi\phi} \in A$ such that $\sigma_s^\psi = u_{s}^{\psi\phi}\sigma_s^\phi u_{s}^{\psi\phi\dagger }$, that relate families of inner automorphisms for the two states.

So in some sense the set 
$$
T(A) = \{ s\in \mathbb{R} \mid \exists u_s \in A \text{ s.t. } \sigma_s^\psi(a) = u_s a u_s^\dagger \ \forall a\in A \}
$$
for some cyclic separating $\psi$ is an invariant of $A$ since for all the rest of the states there is a canonical isomoprhism. By the way another way to describe this set is the times when modular flows are also inner automorphisms of $A$.

**<u>Proposition:</u>** If $A$ is a type I or type II factor, then $T(A) = \mathbb{R}$. Also $T(A)$ is a closed subgroup of $\mathbb{R}$.

***Proof:*** if $A$ is type I or II, we see that one such $\sigma_s$ is the one that corresponds to the tracial state of the algebra. These give identity flows, which implies that all $\sigma_s$ are inner automorphisms.

For the second claim we know that $\sigma_s\sigma_t = \sigma_{s+t}$, so if $s,t \in T(A)$ then $\sigma_s (a) = u_sau_s^\dagger$ and similar for $t$. Therefore $u_{s+t} = u_{t}u_{s}$ which implies that $s+t \in T(A)$ which means that it is a subgroup. Since the set of inner automorphisms $\sigma_s$ is closed in $A$, the so is $T(A)$ in $\mathbb{R}$. This means in particular that $T(A)$ is either $\{0\},\mathbb{R}$ or $\alpha \mathbb{Z} \subset \mathbb{R}$ for some $\alpha \in \mathbb{R}$.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
Invariants can be used to classify stuff into classes with the same invariant, so let's look for another one. A useful tool is the spectrum of an operator.

**<u>Definition:</u>** Let $a\in B(H)$, then $\lambda \in \mathbb{C}$ is in the **spectrum of** $a$, denoted by $\sigma(a)$, iff $a - \lambda$ is not bijective in $H$.

In the finite dimensional context this is just the set of eigenvalues, but in a more general setting, when you start having weirndess inherited from sequences this is might contain more stuff that you would naturally assume it would. Anyway here is a cool invariant. 

**<u>Definition:</u>** Let $A \subset B(H)$ be a von Neumann algebra and $C(A)$ the set of cyclic separating vectors of $H$ with respect to $A$. Then the **Connes invariant** $S(A) \subset \mathbb{R}_{\geq 0}$ is given by
$$
S(A) \coloneqq \bigcap_{\psi \in C(A)} \sigma(\Delta_{\psi}).
$$


In other words is the collection of the spectra of all possible cyclic separating vectors with respect to $A$. Let's get some intuition for this. 

**<u>Lemma:</u>** $S(A)\cap \mathbb{R}_+$ is a closed multiplicative subgroup of $\mathbb{R}_+$.

***Proof:*** It's closed because the spectrum of any bounded hermitian operator is a closed subset of $\mathbb{R}$ (Why? the intuition is that bounded operators have endpoints in their spectrum. For more intuition see a functional analysis textbook). It must contain the identity because $\Delta_\psi \psi = \psi$ by definition and therefore $1$ will always be in the spectrum for all $\psi \in C(A)$. To show that it needs to be a group (lmao) we need more tools from group cohomology but [here they are](https://en.wikipedia.org/wiki/Radon–Nikodym_theorem) if one's interested. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
The point of the previous thing though is that there is only a finite thing it can be! Because the closed multiplicative groups of $\mathbb{R}_+$ have been classified. Here they are.

**<u>Lemma:</u>** The closed multiplicative subgroups of $\mathbb{R}_+$ are, $\{1\}, \mathbb{R}_+$ and $\lambda^{\mathbb{Z}} \coloneqq \{\lambda^n \mid n \in \mathbb{Z}\}$ for some $\lambda \in (0,1)$. 

So now we are ready to classify Type III factors and the classification is presented in the classification theorem in the previous section. What is interesting to say here perhaps is the following proposition.

**<u>Proposition:</u>** For a type I or II factor $A$ the Connes invariannt $S(A) = \{1\}$.

***Proof:*** We have a tracial state that is cyclic and separating, therefore it must have eigenvalue 1 for all states and nothing else. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
Out of the three subtypes of type III factors, $\text{III}_0$ is considered to be the most *excotic* in some sense. $S(A)$ effectively tells us which is the collection of common eigenvalues for modular flows. In other words, if you find $\lambda \in S(A)$ it means that for any possible cyclic separating (aka vacuum) state, the modular flow is going to contain at least one fluctuation with energy $\lambda$ under the corresponding time evolution. The larger $S(A)$ is the more common energy eigenvalues you are guaranteed to have amongst all the "vacuua." In the type $\text{III}_0$ case, the spectrum is freaking wild, that you basically no nothing about the energies for different vacua, which kind of sucks. 

This in combination with $T(A)$ gives us a lot of information about modular flows. Here is a table.

|        |  $\text{I}$  | $\text{II}$  | $\text{III}_0$ |          $\text{III}_\lambda$           |      $\text{III}_1$       |
| :----: | :----------: | :----------: | :------------: | :-------------------------------------: | :-----------------------: |
| $S(A)$ |   $\{1\}$    |   $\{1\}$    |   $\{0,1\}$    |    $\{0\} \cup \lambda^{\mathbb{Z}}$    | $\{0\} \cup \mathbb{R}^+$ |
| $T(A)$ | $\mathbb{R}$ | $\mathbb{R}$ |    $\{0\}$     | $\frac{2\pi }{\log \lambda} \mathbb{Z}$ |       $\mathbb{R}$        |

So you can see that while both $\text{I}$, $\text{II}$, and $\text{III}_0$ have pretty much just $1$ in $S(A)$ (the zero is because none of the faithful operators in type $\text{III}$ are truly bijective in $H$) the modular structure is terrifying! Except the trivial inner automorphism, all modular flows are outer in $\text{III}_0$, unlike the completely opposite scenario in $\text{I}$, and $\text{II}$. So if you have a system in such an algebra you can't really say much in general about the possible time evolutions of anything.

In some sense you only need one invariant to talk about their behavior. The important point really is that the type $\text{III}$ subclassification is basically how much "alike" are the possible vacuua of modular flows. One last and super powerful thing is this:

**<u>Theorem:</u>** *(Connes)* If $A$ is a factor, then $\sigma(\Delta_\psi)$ is the same for all cyclic and separating $\psi$. 

***Proof:*** lol
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
This is a fantastic theorem! It helps us to avoid checking all the possible modular flows for factors! So if you know your factor decomposition figuring out the type is a breeze!



## Example | Infinite entangled spins

We saw this example before but let's explore it a bit more. The setup is that you have $N$ pairs of spins, each pair has Hilbert space $\mathbb{C}^2 \times \mathbb{C}^2$ and each spin is in a state $\psi_\theta = \cos\theta \ket{00} + \sin\theta \ket{11}$. We call the system of all the right spins $R$ and the system of all left spins $L$. Then for a tuple $\theta = (\theta_i)_{i\in \mathbb{N}}, \theta_i \in (0,\pi/4]$ we consider the state
$$
\Psi_\theta = \bigoplus_{i\in \mathbb{N}}  \psi_{\theta_{i}}.
$$
Then we define a $C^\ast$ algebra $C_R$ as the collection of bounded linear operators that act trivially in all but finitely many spins on $\Psi_\theta$ closed under (norm) convergence. In particular we form $C_R$ by picking $a \in C_R$ a product of the form $\bigotimes_{i\in I} a_i$ where $a_i$ is a boudned linear operator on the $i^{\text{th}}$ pair of spins and the index set $I$ is finite, and then closing under the product topology of $4\times 4$ complex matrices thought of as a vector space. If we only have access to the right spins, then we can certainly measure more than just $C_R$. To find what we have access to we will use GNS to find a von neumann algebra $R \subset B(H_{\theta})$, where $H_\theta$ is the hilbert space in which $\Psi_{\theta}$ is cyclic with respect to $C_R$ (notice that it is also separating since there are no trivially acting elements in $C_R$ by construction). Now we can define $R = (C_R)''$ and we are ready to start playing. This contains all the operators in $B(H_\theta)$ that act on the right system, therefore $L = R'$ since they must commute by construction. 

Let's study some entanglement for $\theta = \frac{\pi}{4}$ for all spins. In this case, we can even define a trace as follows. Let $a \in R$ be a product operator $a = \otimes_{i\in I} a_i$ that we described before then 
$$
\text{tr\,}a \coloneqq \langle \Psi_{\frac{\pi}{4}}, a \Psi_{\frac{\pi}{4}} \rangle = \prod_{i \in I} \langle \psi_{\frac{\pi}{4}}, a_i \psi_{\frac{\pi}{4}} \rangle = \frac{1}{2^{|I|}}\prod_{i\in I} \text{Tr\,}a_i.
$$
This is well defined because $I$ is finite. But also (by construction) the collections of product operators $a$ is dense by construction. Since the trace we wrote is uniformly continuous (i.e. if you pick $\epsilon > 0$ there is $\delta > 0$ such that any pair of points  under a distance $\delta$ apart has images separated by at most $\epsilon$. This is a stronger form of continuity that controls how fast you can explode, for example $x^2$ is not uniformly continuous but $x$ is.) we can extend it to the entirety of $R$. 

Since we have a trace this $R$ is either type I or II. If pick a minimal projection $p : \mathbb{C}^2 \to \mathbb{C}^2$ and $q = 1-p$ then any tuple $\pi = (\pi_i)_{i\in I}$ where $\pi_i \in \{p,q,1\}$ for a finite index set $I$ defines a projection $P_\pi$ where all the factors are $1$ except in locations $i \in I$ where they are $\pi_i$. Clearly there is a maximal projection $1$ which has $\text{tr\,}1 = \langle \Psi_{\frac{\pi}{4}},\Psi_{\frac{\pi}{4}} \rangle = 1$ and any other projection we described is going to be smaller since we would have to flip one of the identity factors to $p$ ro $q$ picking up a factor of $\frac{1}{2}$ since $\frac{1}{2}\text{Tr\,} p = \frac{1}{2} \text{Tr\,}q = \frac{1}{2}$. This means that we are in a Type $\text{II}_{1}$ situation, with no minimal projections but a normalizable maximal projection.

We can now calculate the entropy of a couple of states. One quick thing we can do is calculate the entropy of $\Psi_{\frac{\pi}{4}}$. This corresponds to the identity projection. Therefore we see that
$$
S\left(\Psi_{\frac{\pi}{4}}  \right) = -\text{tr\,} 1 \log 1 = 0.
$$
Almost immidiately we see that the von-neumann entropy we have defined in here is a weird thing. We started these notes by trying to argue that the whole point of needing to redefine our system is that this state is infinitely entangled and here we are getting nothing. Let's see what happens when we measure a different state. Let's construct the following density matrix. It will be given by a tuple $(\rho_i)_{i\in \mathbb{N}}$ where $\rho_i$ is a density matrix on the $i^{\text{th}}$ pair of qubits and all but finitely many of them are the identity matrices. Since our trace has these pesky factors of 2, our density operator in $R$ will be given by
$$
\rho = \bigotimes_{i\in \mathbb{N}}  2\rho_i.
$$
One quick thing that we can see is that $\rho(\Psi_{\frac{\pi}{4}}) = 1$ because for each qubit $2\langle \psi_{\frac{\pi}{4}}, \rho_i\psi_{\frac{\pi}{4}}\rangle = \text{Tr\,}\rho_i = 1$. So we can calculate the entropy to be
$$
\begin{align*}
S(\rho) 
&= -\text{tr\,}\rho \log \rho \\
&= -\prod_{i\in \mathbb{N}} \langle \psi_{\frac{\pi}{4}}, 2\rho_i \log 2\rho_i \psi_{\frac{\pi}{4}} \rangle\\ 
&= -\prod_{i\in \mathbb{N}} \text{Tr\,}\left(\rho_i \log \rho_i - \rho_i \frac{1}{2}\log 2\right)\\ 
&= -\prod_{i\in \mathbb{N}} \text{Tr\,}\rho_i \log \rho_i +  \prod_{i\in \mathbb{N}} \frac{1}{2}\log 2\\ 
&= \lim_{N\to \infty} - S_N(\rho) + S_{N}(1) = -S_{\Psi_{\frac{\pi}{4}}}(\rho),
\end{align*}
$$
where $S_N$ is the entropy for $N$ pairs. This is so cool! It is just the negative of the relative entropy with respect to $\Psi_{\frac{\pi}{4}}$. So every state has lower entropy than $\Psi_{\frac{\pi}{4}}$ which is such a cool result. In some sense the ground state of the system is the most entangled it can possibly get but still the relative entropy is zero. 

Alternatively what we could do is instead of picking the perfect value $\theta = \frac{\pi}{4}$ we can just pick another one in $(0,\frac{\pi}{4})$. For a general angle the state $\Psi_{\theta}$ is still separating and cyclic by construction, so we can construct a modular operator by considering the following limit. We define $\rho_N(\theta)$ the density operator in $R$ dual to $\Psi_\theta$ for $N$ spins, and $\rho'_N(\theta)$ the same thing for $L=R'$. Then we have
$$
\Delta_{\theta} = \lim_{N\to \infty} \rho_N(\theta) \otimes \rho_N'(\theta)^{-1}.
$$
Notice that in the case of $N=1$ the operator $\rho_1(\theta) = \cos^2\theta \ketbra{00} + \sin^2\theta\ketbra{11}$ then the matrix $\rho_1(\theta) \otimes \rho'_1(\theta)^{-1}$ has only their product as eigenvalues given by $1, \tan^2 \theta, \cot^2\theta$. If we define $\lambda = \tan^2\theta \in (0,1)$ we see that the full matrix $\Delta_\theta$ at the limit has spectrum
$$
\sigma(\Delta_\theta) = \{0\} \cup \lambda^{\mathbb{Z}},
$$
the reson for the $0$ is because the spectrum has to be a closed subset of $\mathbb{R}$. Since we have one such operator the only thing this system could be for a generic $\theta$ is either type $\text{III}_0$ or $\text{III}_\lambda$.  There is a theorem, called Connes' theorem that says that for a factor the spectrum of a flow is the same for all cyclic and separating states. So if $R(\theta)$ is a factor, then $\sigma(\Delta_\theta) = S(R(\theta))$. Now consider an operator $k$ in the center of $R(\theta)$. We have that at every finite $N$, $k$ must commute with everything in $R^N(\theta) = B(\mathbb{C}^{2^N}) = \text{Mat}_{\mathbb{C}}(2^N)$. However, the center of all the matrices is trivial. So $k$ must act as a multiple of the identity in $\cup_{N\in \mathbb{N}} R^N(\theta) \subset R(\theta)$. Since that subset is dense, $k$ must be a multiple of the identity, making $R(\theta)$ a type $\text{III}_{\lambda}$ factor.

By the way, if we now allow the angles to not be the same for every pair, we will find that the algebra is of type $\text{III}_1$ which as we will see in the following example is the same type of algebra you get when you try to separate your local observables in a QFT by regions. In other words this example models the kind of algebra you'd get by the infinite entanglement you expect to see at the border of two spacetime regions. 



## Example | Spacetime Regions

Rindler! Let's bring it all full circle and see how to handle the fact that the two rindler wedges of Minkowski $\mathbb{R}^{1,1}$ are connected at a point. For our algebra $R$ we will consider all local operators $O(x)$ that lie on the positive $x$ axis of some fixed inerital frame. Now here is a cool thing. By causality any measurement we can do at $x>0$ fully determines what will happen in thr right rindler wedge. When we try to write the von neumann algebra $R$ we will inevitably, in our completion, include all the local operators supported on the right Rindler wedge. Moreover, by the same argument we will not have access to the observables on the left rindler wedge, which would form the von Neumann algebra $L = R'$ (By the way this is a famous result known as **Haag duality**).We have only assumed locality and causality in this argument, and it can be rigorously shown entirely at the level of Ward identities.  

Let the QFT vacuum be $\Omega$, since a dense set of states are obtained by acting with local operators on $\Omega$, then it is separating and cyclic. In our case Carl has shown that $\Omega \Omega^\dagger = e^{-2\pi K}$, where $K$ is a boost. This can be done explicitly by writing the path integral on the half space. This result is also known as the Unruh effect in which an observer trapped in the right rindler wedge feels a temperature $\frac{1}{2\pi}$ even if the universe is at its vacuum state.

However, you can boost at any speed, therefore $K$ must have a continuous spectrum which implies that $\sigma(e^{-2\pi K}) = \overline{\mathbb{R}_+}=\{0\}\cup \mathbb{R}_+$. In addition, one of the nontrivial, yet still intuitive, results from Haag duality is that the only operator that commutes with all the local observables on $\mathbb{R} \subset \mathbb{R}^{1,1}$ has to be a multiple of the identity. The reason why that's intuitive is that all states are given by acting with local observables on the vacuum, so if something commutes with all of them, it has to map the identity onto itseld. Therefore $R$ is a factor! As a reuslt by Connes' theorem $S(R) =\{0\}\cup \mathbb{R}_+$ and thus the algebra of observables is of type $\text{III}_{1}$. In fact this result generalizes to all open regions that contain cauchy slices, which leads to famous subregion-subalgebra duality and other cool things to study.

> **Split Property:** Uder certain niceness assumptions (known as the numeclear property of Relativistic QFT) given two open sets $X \subset Y$ such that $\bar X \subset Y$ there exists a Type $I$ factor $N$ such that 
> $$
> A_X \subset N \subset A_Y, 
> $$
> where $A_X$ is the von Neumann algebra of local observables in $X$. TYPE I! But there is more. Turns out that if this is true, then the type  $\text{III}_1$ algebras $A_X$ for all open regions $X$ are *hyperfinite* (that is an increasing sequence of finite dimensional matrix algebras is dense in them). But the catch is that there is only one such algebra, up to isomorphism. What that means is that all the measurements you can make in any region are pretty much the same, and all the physics is in the "global data" of the theory, namely on how you glue them together. 









