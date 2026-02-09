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



With the formalities out of the way we can play a bit with some intuition. 

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
> Also, a cyclic vector $v\in H$ is such that $\text{span\,}Av = H$.

Before we sketch out the proof, let's see why this is cool. Apart from the (quite amusing honestly) fact that all the structure that a $C^\ast$ algebra forgot about the Hilbert space was a single state, this offers a great way to classify the representations of such an algebra through states! We are used to that by the way. If you know the angular momentum algebra, you only need the state with largest angular momentum to figure out which irreducible representation you are in! But it looks so obscure here that I thought I should mention it.

***Proof:*** Let $a,b \in A$, then we can define a sesquilinear form (bilinear but constant are pulled out conjugated from one arfument) like so
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

***Proof:*** Let $\omega$ be a pure state in a type $\text{II}$ von Neumann algebra. Then the corresponding density operator $\rho$ is a projection that can't be decomposed as a linear combination of projections. Then $\rho$ is minimal which implies that the algebra is not type $\text{II}$. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
