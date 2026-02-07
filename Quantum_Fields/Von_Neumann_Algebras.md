# Von Neumann Algebras

Von neumann algebras help us classify and study entanglement with great detail. If one knows quantum gravity (i.e. not me) would immidiately understand why that is super needed. Loosely speaking if I give you a Hilbert space and some opearators to observe stuff in, it is unclear that this hilbert space is realted to some spacetime. However, there might be some hints on this relation that you may be able to find states and operators that behave as if you are making measurements in regions of spacetime with a specific geometry. Turns out, in a way that is not immidiately clear to me, nontrivial spacetime structures are in some way related to entangled states. Though what that means precisely remains unclear.

[toc] 

## What is entanglement without a factorization?

If we have two nontineracting quantum systems with corresponding hilbert spaces $A,\bar A$ we can combine them into one system with Hilbert space $A\otimes \bar A$. While one system does not know about the other, it is possible to find states that do, which we call entangled. By definition such a state $\psi \in A\otimes \bar A$ can't be factorized into a product of a state in $A$ and one in $\bar A$, and in some sense if the system is in that state, probing the "decoupled" $A$ part of the system will give us information about $\bar A$.

One way to look at a state $\psi$ is as a map $A \to \bar A$  (by $\psi(\phi) = \sum_{n} \langle \phi\otimes e_n, \psi \rangle e_n$), which rougly answers the question: if I am in state $\phi \in A$ what is my state in $\bar A$? If the answer is the same for all $\phi \in A$ then my state is not entangled. One easy way to measure then the degree of entanglement of state $\psi$ would be to ask how "big" is the image of $\psi$. One such measurement could be $\text{rank\,}\psi$, i.e. the dimension of the image, but a less crude measurement would also include information about the eigenvalues that quantify the spread of $\psi$. 

For example if you have 20 eigenvalues but one is almost one while the rest are almost zero, their *entropy* is low, so that state is less entangled than a state that has 20 equally spaced eigenvalues. We can use the shannon entropy for that which defines
$$
S_{\psi} = - \sum_{\lambda \in \text{eig\,} \psi} \lambda \log \lambda, 
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

**<u>Definition:</u>** Let $S=\{O_n\}_{n\in \mathbb{N}} \subset B(H)$ then we say that $S$ is **convergent to** $O \in B(H)$ iff for any $\psi,\phi \in H$ then $\langle \psi, O_n \phi\rangle \to \langle\psi, O\phi\rangle$. If a $\ast$-algebra contains all limits of weakly convergent sequences it is called a **Von-Neumann algebra**, or $W^\ast$**-algebra**.

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



## Weights  

One amazing thing, is that if you know the algebra, you can technically "forget" about the hilbert space. In the sense that what a measurement of operators in $M$ is is a linear map $\omega: M \to \mathbb{C}$, so it is an element of the "dual" of $M$. What that means precisely we will explore in a second, but what is interesting about this is that these linear maps help us understand $M$ and the physics. 

**<u>Definition:</u>** Let $\omega: M \to \mathbb{C}$ be a linear map from some Von Neumann algebra $M$. Then $\omega$ is a

1. **weight** if $\omega(a^\dagger a) \geq 0$ for any $a \in M$,
2. **trace** if it is a weight such that $\omega(ab) = \omega(ba)$ for any $a,b \in M$,
3. **positive** if it is a weight such that $\omega(1)$ is finite,
4. **state** if it is a weight such that $\omega(1) = 1$, we also call $\omega(a)$ the expectation value of $a$ on the state $\omega$,
5. **tratial** if it is a state that is also a trace,
6. **normal** if it is a state such that for any bounded positive sequence $\{a_n\}_{n\in \mathbb{N}}$ then $\sup \omega(a_n) = \omega(\sup a_n)$,
7. **faithful** if $\omega(a^\dagger a) = 0 \implies a=0$.

One interesting thing is that we can use states to build states.

**<u>Proposition:</u>** For two states $\omega, \eta$ and $\lambda \in (0,1)$ then $\lambda \omega + (1-\lambda) \eta$ is also a state. We say that this state **dominates** $\omega,\eta$ and a state that can't be written like this is a **pure** state.

So now we know that we can use these maps to know everything we needed to know about our measurements. States, densities and whatnot. In the appropriate settings, all these boil down to out known concepts. 

One more interesting thing that we want to use primarily because we have been using it to talk about entropy are projections. In some sense they can be a basis for the Von-Neumann algebra so it is worth spending some time here.

**<u>Proposition:</u>** There is a $1-1$ correspondence between projection operators and closed supspaces of $H$. 

The main intuition here is that every subspace of $H$ that is closed has a unique projection operator $P$, so we say that if $P$ is in $M$ we say that $M$ contains the region $PH$. In terms of projections, we say that if two projections $P,Q$ satisfy $PQ = P$ then $P\leq Q$. 



















