# Inducing Topology Using Maps

We have previously characterized the set of all spacelike slices and eventually we want to add a nice and smooth structure on it so that we can start writing things down such as the *kinetic energy of path from a spacetime with a black hole to one without.* The first step is to define a topology, we do so using maps to topological spaces that have the properties we want and forcing them to be continuous. 



## Spacelike Slices

Let’s briefly and without motivation recall definitions for spacelike slices, even though we develop the following in greater generality below. 

**<u>Definition:</u>** An **$n$ dimensional spacelike slice** or just **slice** is an $n$ dimensional, orientable, connected, Riemanian manifold $(S,g)$ along with other niceness conditions that remain unspecified at the moment. The **set of all slices** is $\mathcal{M}^n$

*Let’s drop the $n$ since I will never spacify it anyway. lol*



## Topology from a single Map

Let’s study inducing the topology on some space using a single map first, before moving on to using multiple maps. 

Consider a map $f: X\to Y$ between a set $X$ and a topological space $Y$. Then the following proposition is cool.

**<u>Proposition:</u>** Given any map $f:X\to Y$ the set

$$
T_f \coloneqq \{f^{-1}(U) \mid U\subset Y \text{ open}\}
$$

defines a topology on $X$.

***Proof:*** $X$ is the preimage of $Y$, and $\emptyset \subset X$ is the preimage of $\emptyset \subset Y$. Additionally notice that for some $U,V\subset Y$ open,  $f^{-1}(U)\cup f^{-1}(V) = f^{-1} (U\cup V)$ and similarly for intersections. Therefore $T_f$ is closed under arbitrary unions and finite intersections. 

**<u>Corollary:</u>** $f:X\to Y$ is continuous.



Ok so now we have a way of defining a topology for a space using a single map, but how about properties? Let’s restrict the possible maps that could work for this. Look at the following proposition.

**<u>Proposition:</u>** $(X,T_f)$ is Hausdorff iff $f$ is an injective map to a Hausdorff space. 

Before we prove this proposition and have a nice discussion consider the following property

**<u>Property:</u>** Let $f:X\to Y$ be an injective map then $f^{-1}(f(U)) = U$

***Proof:*** $(\implies)$ Assume that $f$ is injective, then let $p,q \in X$ where $p\neq q$. Then there exist $U,V \subset Y$ disjoint neighborhoods  of $f(p), f(q)$ respectively. Since $f^{-1}(U\cap V) = f^{-1}(U) \cap f^{-1}(V) = \emptyset$, by injectivity, we have found two disjoint neighborhoods. 

$(\impliedby)$ Assume that $X$ is Hausdorff, then for any pair of points $p,q \in X$ there exists a pair of neighborhoods 











