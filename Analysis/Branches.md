# Branching and Covering

A fantastical thing about functions on the complex plane, is that even if they are not analytic everywhere, they often have analytic continuations on super nice surfaces that we call Riemann Surfaces. Most of the complex analysis we know and love still holds on Riemann surfaces, so it is often super nice to be able to do our calculation there, and then go back to the complex plane with the result. Here we will develop this theory further following:

1. [Marsden, Basic Complex Analysis](https://www.cds.caltech.edu/~marsden/books/Basic_Complex_Analysis.html)

[toc]

# Analytic Continuation

The idea of analytic continuation is that if you have two analytic functions that agree with each other on a small chunk of a region (a connected open subset) then they must agree on the entire region. This means that one function can be extended patch-wise. 

**<u>Theorem:</u>** *(Identity Theorem)* Let $f,g$ be analytic on a connected open subset $A\subset \mathbb{C}$, and consider a sequence of distinct points $\{z_k\}_{k\in \mathbb{N}} \subset A$ such that $z_k \to z \in A$ such that $f(z_k) = g(z_k)$ for $k\in \mathbb{N}$ then $f=g$ on $A$. 

***Proof:*** *(Identity theorem)* Consider the function $h = f-g$, then $h$ is analytic on $A$ and it is identically zero on the sequence. Since the Taylor series of an analytic function must converge on a disk, then we have that 
$$
h(z) = \sum_{n=0}^{\infty} \frac{h^{(n)}(c)}{n!} (z-c)^n,
$$
so the only way that this can be zero for all the points in the sequence towards $c$ is for all the derivatives to be zero, which implies that the function must be zero on a disc that contains $A$. However, since $A$ is connected, we can cover it with overlapping disks, which would imply that $h$ is identically zero on $A$. More precisely, if $B\subset A$ is the subset of of points where $h$ vanishes in a neighborhood, then it must be closed in $A$ since it contains its limit points (limit points can be obtained by sequences of the form we described above), but it must also be open in $A$ since it contains a neighborhood for each of its points. Since it is nonempty it must be $A$.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
**<u>Corollary:</u>** *(Isolated Zeros)* The values of a non-constant analytic function $f$ in $A$ are isolated in the sense that if $f(x) = w$ for some $x\in A$ then there exists an $\epsilon>0$ such that no $f(z) = w$ for any $0<|z-x|<\epsilon$.

This is particularly nice intuition for analytic functions. Namely analytic functions can't be pathological in the sense that you can find neighborhoods where they obtain the same value again and again as you zoom in further and further. For example $\sin z^{-1}$ can never be analytic around $z = 0$, even though it is defined there.  

**<u>Corollary:</u>** Let $f,g$ be analytic functions on open connected regions $A,B$ respectively and such that they agree on $A\cap B$. Then the function $h$ defined by $f$ on $A$ and $g$ on $B$ is the unique analytic function on $A\cup B$ that equals $f$ on $A$. We call it an **analytic continuation of** $f$ or $g$.



## Common Continuations

While it might not be possible to continue our functions analytically to arbitrary sets, we can find sets on which they can't be continued anymore, we often look for them. Here are some techniques where extending analytic functions is often well defined. 

**<u>Theorem:</u>** *(Schwartz Reflection)* Let $f$ be an analytic function on an open connected subset $A$ such that its boundary intersects at a finite union of disjoint intervals $I = \partial A \cap \mathbb{R}$ with the real axis. If $\hat I$ is the intervals without their endpoints and $f$ is continuous on $A\cup \hat I$, then there exists an analytic continuation $h$ on $A \cup \hat I \cup A^\ast$, where $A^\ast$ is the complex conjugated region, such that $h(z) = \overline{ f(\bar z)}$ for $z \in A^\ast$.

***Proof:*** We use the limit points of $f$ to find a sequence on $I$ and use the identity theorem to show uniqueness.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
**<u>Corollary:</u>** The same is true after mapping the plane by the map $e^{iz}$.

Another useful but general form is the following.

**<u>Theorem:</u>** *(Analytic Continuation by Continuity)* Let $A,B$ be disjoint simply connected open subsets whose boundaries intersect intersect on a simple (winding number $0$) curve $\gamma$. For $C = A\cup \hat \gamma \cup B$ if

1. Each point in $\gamma$ has a neighborhood in $C$,
2. $f$ is analytic in $A$ and continuous on $A\cup \gamma$,
3. g is analytic in $B$ and continuous on $B\cup \gamma$,
4. for $t\in \Gamma$ we have that $\lim_{z\to t} f(z) = \lim_{z\to t}g(z)$,

then there exists a unique function $h$ that is analytic on $C$ and agrees with $f$, and $g$.



One of the most useful of analytic continuation though is through curves. If we have a function that converges in some neighborhood of a point $z$ and we have a curve from $z$ to a point $w$, then we can keep analytically extending on neighborhoods along the curve. We could do this by writing the Taylor series in the original neighborhood, then expand around a point further along the curve, which should have a disk where the Taylor series converges which may not be contained on the original neighborhood. We might not succeed to do this but if we can succeed, we can prove that this will happen at a finite number of steps! If it is possible, we say that the function is **analytically continued along a curve**.

**<u>Theorem:</u>** If a an open set is simply connected, and $f$ can be continued along all curves between two points in that set then the analytic continuation defines a single valued function on the entire set.

That is fantastic and breaking this is exactly the kind of thing that will lead to branches and coverings. 

# Branching

The prototypical case is the one of $\log z$. If we try to analytically continue along any simple curve around the origin then it will find that we can't because any way we come back to where we started we would have been off by $2\pi$. The idea is that there is a surface that locally looks like $\mathbb{C}$ and where $\log z$ is analytic everywhere. In particular that surface $\Sigma$ would contain a projection $\pi: \Sigma \to \mathbb{C}$ such t



 







 