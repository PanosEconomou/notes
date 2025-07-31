# Orbifolds

In the context of Quantum Field Theory an **Orbifold** is a QFT where we have gauged a finite group. This set of notes will introduce the idea of gauging finite groups, provide a historical disclaimer that bridges the early string theory view of orbifolds to the more modern interpretation, and finally provide calculation tools for a set of examples that we already know how to solve known as cyclic. We will also see what fails in the general case. 

Here are some resources or supplemental reading for these notes.

1. [The Operator Algebra of Orbifold Models](https://link.springer.com/article/10.1007/BF01238812)
2. [Gauging Non-Invertible Symmetries and the Generalized Orbifold Groupoid](https://arxiv.org/pdf/2311.17044)
3. [Operator Algebra of Cyclic Orbifolds](https://arxiv.org/pdf/2212.07678)
4. [Systematic Approach to Cyclic Orbifolds](https://arxiv.org/pdf/hep-th/9701061)

[toc]



## Historical Disclaimer

> **This section is here solely to clear up confusion with String Theory orbifolds.** They are the same thing, but the intuition surrounding how they're presented is not easily generalizable to the modern view of orbifolds. The rest of the notes are not going to use this chunk so feel free to skip.

The modern view of orbifolds, as QFTs with a gauged discrete global symmetry group, is not usually discussed in standard QFT/String Theory courses. People with the good fortune of taking a string theory class, however, had most likely encountered the term orbifold referring to a particular Conformal Field Theory (usually a version of free boson or free fermion) with some version of messed up boundary conditions.

To be more concrete, let's pick up the free boson. This is a conformal field theory, where the field we are quantizing is a way to assign an element of a real line on every point in spacetime. In the tradiational fashion of CFT we choose to think of lines as really big circles ([this is done for IR completeness reasons](../Defects/Twisting.md#Space-is-a-Circle)). As a result, for a string theorist, the classical field we quantize in a free boson CFT doesn't assign an element of a line everywhere, but an element of circle (with possibly infinite radius) instead. This creates a family of "free boson CFTs" classified by the radius of the circle the free boson itself is valued in.

The *orbifold* in this context arizes if we consider the following. "Why not identify the antipodal points of the circle that the free boson takes values in?" In other words, instead of having the free boson assign an element of a circle at every point, why don't we fold the circle in a weird way, and have the free boson assing an element of that folded thing at every point. One is probably already screaming that what we really did was put boundary conditions on the values the boson can take. A mathematician would say that we replaced the circle with one of its orbifolds. And so the name stuck.

Turns out this can lead to a well defined (i.e. local, unitary, blah blah) Conformal Field Theory! *Unfortunately this is where the intuition stops.* What we secretly did when adding these boundary conditions on the free bosons, or swapping the target space with an orbifold, was actually gauging the discrete group $\mathbb{Z}_2$. However, this is not obvious from this construction. 

In the remaining of the notes, we talk about orbifolds from scratch without making reference to this construction. Once we define orbifolds using discrete gauging we will then make the connection between the two ideas.



# Gauging Discrete Groups?

I've mentioned a couple of times that Orbifolds are really gauge theories, where the group we are gauging is discrete. However, depending on how one thinks of gauge theories this might seem nonsensical. 

## Gauging Lie Groups

*This should really be called Gauging Lie groups with dimension* $\geq 1.$

Usually, "gauging a global symmetry" means the following. Use your Lagrangian $\mathcal{L}$ to identity a Lie group $G$ that acts on the fields of your theory in such a way that the action $S$ remains invariant. For $G$ to be a **global symmetry**, it has to satisfy an extra requirement. The way it acts on the values of the fields, does not depend on which point one considers. Such actions could be anything from spacetime transformations moving the fields around when the action only depends on their derivatives, changing the value of the fields by a phase in a Lagrangian where every field is multiplied to its conjugate, and so on. 

Once you have identified your global symmetry $G$, the idea is to take your original theory, do some clever manipulations to it, and generate a different one that has following property. Anything you can calculate in the new theory, should not change if you act with $G$ in a random small region in spacetime. This means that $G$ is now a **local symmetry**. The process of converting global to local symmetries is called **gauging**.

If $G$ is a Lie group, we have developed advanced tools to help us gauge it. In practice, we introduce a **Gauge field** whose purpose is to alter how the derivatives act on fields in specific regions of spacetime. The idea is that for any calculation you want to do, you average over the copies of the calculation with all possible gauge fields. Then the result would not change if you act with $G$ in a specific region.



## Why Averaging Works

The reason why this is true is worth paying close attention to when it comes to generalizing this idea to discrete groups. So let's look at an example outside of QFT for a second.

Consider the group $G=\mathbb{Z}_2 \times \mathbb{Z}_2$. This has 4 elements $G=\{1,a,b,ab\}$. Now consider a matrix reprentation of it $\rho: G \to \text{Aut}(V)$ to some finite dimensional vector space $V$. Check this out! Define the "average" $A \in \text{Aut}(V)$ of $G$ like so
$$
A = \rho(1) + \rho(a) + \rho(b) + \rho(ab).
$$
Now $A$ **is an operator on $V$ that is invariant under** $G$! Say you take an element $a \in G$, then you can see that
$$
\rho(a) A = \rho(a) \rho(1) + \rho(a) \rho(a) + \rho(a) \rho(b) + \rho(a) \rho(ab) = \rho(a) + \rho(1) + \rho(ab) + \rho(b) = A.
$$
Any element in $G$ can **at most permute** $A$. While this example is trivial, this is how summing over all Gauge fields turns $G$ into a local symmetry in the Gauged theory.

Anything you calculate in a gauged theory will contain sum over copies of the calculation but with all possible gauge fields you can put.  Pick a region in spacetime, and act there with $g \in G$. Then, out of all the possible gauge fields, there must be one that undoes the action of $g$ in that region. The copy of the calculation that uses that one, will be permuted with the one that had the do nothing gauge field. The one that had the do nothing gauge field, will be permutted with the gauge field that made it look like in that region there is a $g$ action and so on. The overal result after averaging over all possibilities is the same.

In practice there are a lot of things to consider when extending the above intuition to a healthily defined QFT. Often one needs to acount for degeneracy in the possible $A$ fields which has the side effect of introducing ghosts, or one might find that after gauging a group the resulting theory fails to even have unitary time evolution (this could happen when gauging certain Lie groups that are not compact). Subtleties aside, when it works, that's why it works.



## The Problem with Discrete Groups

At this point, it is natural to say: "Ok, let's gauge a discrete group in an identical way. Find all the gauge fields that correspond to its action and then sum over them." In fact, a lot of textbooks would say exactly that. However, that is really an abuse of notation, and there are a couple of meaningful subtleties for us to take into account.

1. **The Lie algebra of discrete groups is 0 dimensional.** The traditional techniques we have for gauging Lie groups tells us that gauge fields are valued in the Lie algebra of the group we want to gauge. So it seems that there really aren't many gauge fields for a discrete group. They're all zero. This is partly true, and examining the consequences of this intuition will give us an answer for how to gauge a discrete group.
2. **There are QFTs with no Lagrangian.** How do we even begin to think about gauging in those?

Both of these observations motivate us to more carefully examine gauge fields, and perhaps indicate that we should try to rethink of how we *couple a gauge field* to our theory. Thankfully, we have an answer to both, and that is **defects.** 



# Gauging Discrete Groups using Defects

A topological defect is so closely related to a coupling of a gauge field to a QFT (some people say that it straight up is that). In our case, it is the perfect alternative alternative viewpoint of the same thing to help us reframe how we think about gauging. A quick review of topological defects for symmetry purposes can be found [here](../Defects/Symmetry_Defects.md). For the purposes of these notes, we will only use the intuition of the first section in that reference. 

## 10s Review of Symmetry Defects

Defects can help us make precise the idea of a *Symmetry Operator* in a QFT. Imagine you have a global symmetry $G$ that acts on a QFT that lives on a spacetime $M$. For simplicity let's consider a 2 dimensional conformal field theory. One thing you might want to calculate, is correlation functions that involve insertions of a couple quantum fields $\phi,\psi$ at some points $x,y \in M$. Something like this
$$
F(x,y) = \langle \phi(x)\psi(y) \rangle.
$$
You know though, that since $G$ is a global symmetry gourp, its elements $g\in G$ have the property that 
$$
F(x,y) = \langle g\cdot \phi(x)\ g\cdot \psi(y) \rangle,
$$
where $g\cdot \phi$ denotes the field $\phi$ after being transformed by the action of $g$. Ok so that's not really useful to calculate because tranforming the fields did nothing. But what about this?
$$
F' = \langle \phi(x) g\cdot \psi(y) \rangle.
$$
In general we shouldn't expect that $F' = F$ because we didn't transform both fields, we only transformed one. 

> This can be thought of as applying the global symmetry in a region $R$ that contains $y$ but not $x$. This way only insertions at $y$ will be transformed by the global symmetry. There is no reason to think that that messed up non global application of the $G$ action would still be a symmetry of the theory.

This leads to an interesting question. Is there an operator associated with this half-implementation of the symmetry associated to $g\in G$ restricted in the region $R$? In other words we're looking for an operator $U_{g,R}$ such that
$$
U_{g,R} \psi(y) = g\cdot \psi(y) U_{g,R}.
$$
The realization that is key to help us understand that object better is that since $g \in G$ is a global symmetry, the correlation functions would stay the same if $U_{g,R}$ transformed all insertions inside $R$ or all insertions outside it in $M\setminus R$. The only difference between the two cases is a global application of $g^{-1} \in G$ which doesn't affect correlation functions. Therefore the only real data of interest in the Region $R$ is weather an insertion crossed its boundary, which is a **line** (in 2 Dimensions).

This is what people mean when they say, that a global symmetry operator is a codimension 1 topological defect. In this case, if we call $L = \partial R$ the boundary of $R$, then we can associate an operator $U_g(L)$ to it in such a way that when field insertions cross it, they pick up the action by $g$. In other words
$$
U_g(L) \psi(y) = g\cdot \psi(y) U_g(L).
$$
We call $U_g(L)$ a topological defect line or topological defect operator, though sometimes people would straight up denote it as $g$ when $L$ is clear from context.

One last interesting point, is that if we fix the point $y$, we can freely, but still continuously, deform $L$. As long as it doesn't cross any other operator insertions, the correlation function would not even know! It is in this sense, that the operator $U_g(L)$ is topological. It is called a defect because it has this singular action concentrated in the line $L$. 

> It is worth reflecting on what we created. The topological defect line $U_g(L)$ seems to do to our fields what a gauge field would do. It applies the global action of $g$ in a random region in spacetime enclosed by $L$!



## Summing Over Networks of Defects

The last box gets us so close to defining orbifolds. Using the idea that applying a global symmetry in some random region enclosed by $L$ is the same as inserting a topological defect line at $L$ we can rephrase what we mean by a gauge theory.

A gauge theory in this language is one where anything we can calculate remains the same, if we insert an arbitrary topological defect line associated to a global symmetry $g \in G$.















