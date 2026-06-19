# Lattice Flows

One of the coolest stuff we can in a physical model is Lattice RG flow into the continuum. I am curious to see how we can start with a lattic emode and what nobs do we need to adjust to find a continuum behavior. We will start from absolutely nothing and then slowly try to play with a simple example. 

Spin chains offer a nice playground because they are simple to describe using 2D hilbert spaces per site but they still have pretty cool dynamics available. 

[toc]

# Spin Chain Basics

Let's start with lattices. A common way people define lattices is as subspaces of vector spaces, but while this offers really cool control, we would typically take a bunch of quotients and things like that (for example we might want to define a lattice on a torus, or a sphere and whatnot). So let's study how people describe them. 

## Lattices

Lattices can appear in all shapes and sizes. Since we are in some exploratory approach we have to be comfortable with sacrificing generality for studying simple examples in depth. So let's start with $1D$ lattices. 

**<u>Lemma:</u>** The only connected 1 dimensional manifolds with no boundary are $\mathbb{R}$ and $S^1$. 

That's a very pretty classification theorem. In particular, since the only conceivable boundary conditions (for now) are periodic, fixed, or asymptotic, all of these can be given by taking quotients of $\mathbb{R}$. Therefore we can literally treat a lattice in this case as quotients of $\mathbb{Z}$ defined by various embeddings in $\mathbb{R}$. The goal is that as we go on we will constantly trying to "tweak" our setup to make it more interesting but I have no idea what path we will follow so let's start here.

Let's start simple by fixing $M \in \{\mathbb{R},S^1\}$ and a group $G= \mathbb{Z}_n$ where $n =\infty$ gives us the normal $\mathbb{Z}$. We will also fix an **embedding homomorphism** $\lambda: G\to M$. 

**<u>Proposition:</u>** The map $\lambda$ is defined by $\lambda(1) = a \in M$. 

***Proof:*** Homomorphism is so restrictive here because $1$ is cyclic in $G$ so we can pick everything like so. We call $a$ the **lattice-spacing**.

let's restrict our attention on **finite** $n$. Then the only two parameters that define our lattice are $n$ and $a$, because we have implicitly fixed $M=S^1$. Notice that the radius of the circle is given by $R = \frac{na}{2\pi}$. So for us:

**<u>Definition:</u>** A **lattice** $\lambda : G\to M$ is an embedding of a discrete Abelian group $G$ to a manifold $M$. It is called **regular** if $\lambda$ is also a Lie group homomorphism.

## Functions On Lattices

What we are interested now is functions over the lattice itself. The embedding formalism for the lattice gives us convenient rules for the fucntions. For example the pullback may end up rescaling tensors and so on. So there are a couple of cool results that we can use already. 

The whole idea of *local fields* is that we can keep track of the degrees of freedom of our physics using objects that depend on position. For example, here we have chosen to parameterize our space using a lattice in a circle so it would make sense to consider *lcoal fields* to be **functions** on that lattice. We will later find out that this is wayyy too restrictive, but for now we can proceed.

The thing is, after we have functions on the lattice one would be interested in scoring them. Often the whole point of quantum mechanics is to take field configurations and then spit out a score of "how physical" the configuration is. So in some sense we need a way to measure objects of the from $f: M \to B$ for some banach space $B$.  Without going too much into the weeds this means that whatever we will accept to be a *field* has to be measureable on the lattice with respect to whatever measure we put there.  



## Course Graining

The next question now is:

> "What kind of measure do we put on our lattice?"

Since lattices have discrete topology there are so many measures we can put that are easy to describe. However, it would be nice to introduce one directly from the embedding of the lattice onto whatever manifold we are looking at. A way to do this is called **course graining**.

Very basically, we can't just pull back the measure of $M$ onto the lattice because that spits out zero since $G$ is $0$ dimensional. However, we can cover regions of $M$ using our lattice by simply picking a partition $U$ of $M$ labelled by the lattice points in $G$. 

**<u>Definition:</u>** Given a lattice $\lambda: G\to M$ then a **course graining** is a partition of unity $\mathcal{\chi}=\{\chi_g\}_{g\in G}$ of $M$ peacked on $\lambda(g)$. 

Therefore using a conurse graining we can define a maeasure on the lattice such that 
$$
\mu(\{g\}) = \int_{M} \ast \chi_g,
$$
So now we have a way of measuring functions on the lattice. If we start with a function $f:M\to B$ we can define $\langle \mu,\lambda^\ast f \rangle$ directly as $\sum_{g \in G}\int_{M}\ast \chi_gf = \int_M \ast f$.

## Physics Rules



# Making Things Denser











