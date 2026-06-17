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