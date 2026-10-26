# The Brownian Loop Soup

This is a super fun exercise about radially quantizing a statistical CFT that could lead to studying it from a cool way. If anything at least we can learn some cool stuff. Here are some resources:

1. [OG paper](https://arxiv.org/abs/math/0304419)
2. [More about the measure](https://arxiv.org/abs/math/0511605)
3. [Cool primaries are found in them](https://arxiv.org/abs/2007.01869)
4. [Some stuff about O(n) models that could be relevant](https://arxiv.org/abs/2005.07708)
5. [Stress tensor](https://arxiv.org/abs/2112.00074)
6. Le Jan's lecture notes

[toc]

# A toy model

Let's stupify this issue as much as possible. In a toy model on $\Lambda =\mathbb{Z}^2$ we can consider a finite region $D \subset \mathbb{Z}^2$ where there is equal probability to move to a neighbor. The idea is to do everything there, and then extrapolate to the continuum.

## Measuring paths

The first thing we need to come up with is a way to measure paths on the domain. One measure we can put on them, is to assign a probability for going to a neighbor, and then calculate the total probability that this path was followed. Other things we could do is to assign mass and just use the length, but then we miss the spacetime intuition (perhaps. But honestly I am not entirely sure.) 

Assume on our lattice each point has $N$ neighbors that we now set to $4$. If we further assume equal probability then we have that the probability of a path of $n$ steps will be $m= N^{-n}$. This in some sense is the same as measuring its length though, but it's just like parameterizing $1/\text{length}$ kinda. In the way that the length can be given by $L = - \log(m) = n \log(N)$, where we think of $\log(N)$ as the length of the spacing. 

Going away from this stupid tangent, here is a cool thing. We can put the probability of moving from $x$ to $y$ in one step in the column of a matrix $P_{xy}$. We can think of $P$ as a map $P : \Lambda^2 \to I$, where $I$ is the unit interval, which we can think of as a matrix
$$
P_{xy} = \begin{cases} 
\frac{1}{N} & \text{if x, y neighbors in } D\\ 
0 			& \text{otherwise}
\end{cases}
$$
Therefore, we can see that $(P^2)_{xy}$ is 2 times the probability to get from $x$ to $y$ in 2 steps, since it is given by $\sum_{z \in \mathbb Z^2} P_{xz} P_{zy}$. Similarly we can see that $P^k$ contains the probabilities of getting from any two points in $k$ steps within $D$ multiplied by the number of ways to get there. By the way, this sum is always guaranteed to converge since $D$ is finite so all but finitely many cells of $P$ are nonzero. 

So if the *mass* of a single path between two fixed oriented endpoints $N^{-n}$, then the mass of all such paths, which we can call $m^n_{xy}$ is given by:
$$
m^n_{xy} = (\text{all possible ways to go from x to y}) \times N^{-n} = (P^n)_{xy}.
$$
 So in some sense we have that the mass of all loops from $x \to y$ that reside in $D$ is going to be given by
$$
m_{xy} = \sum_{n=0}^{\infty} m^n_{xy} = \left(\sum_{n=0}^\infty P^n\right)_{xy}.
$$
So let's calculate the matrix $m$. The first thing we would need to check is that it converges. 

**<u>Proposition:</u>** All eigenvalues of $P$ are in $(-1,1)$.

***Proof:*** Notice that $P$ is symmetric, real, and therefore diagonalizable. As a result, the eigenvalues are all real. Let $\psi = \sum_{x\in\Lambda} \psi^x \phi_x$ be an eigenvector with eigenvalue $\lambda$ normalized such that the largest component of $\psi$ in some basis $\phi_x$ is $1$. Therefore we can find that
$$
\begin{align*}
\abs{\lambda} = \abs{\langle\phi_\ast,P\psi\rangle} \leq \sum_{x\in\Lambda} \abs{P_{\ast x}} \leq 1,
\end{align*}
$$
where in the last step we have used the fact that inside $D$ any point can have at most $N$ neighbors, and throughout we have assumed that the maximum is at $\ast \in D$. But this doesn't show the strict inequality yet. For that we need boundaries. Assume that $\lambda = 1$ with an eigenvector $\psi$. Then the above inequality implies that $\sum_{x\in\Lambda} P_{\ast x} = 1$ which is only possible if $\ast$ is not at the boundary. But also we know that in this case, $1=\sum_{x}\frac{\psi^x}{N}$, where $x$ runs over the $N$ neighbors of $\ast$. As a result, that would imply that $\psi^x= 1$ for all $x \in \Lambda$ which isn't possible, since states outside of $D$ are projected out by $P$. So it can never attain $\lambda = 1$. The same argument can be shown for $\lambda = -1$.



Using the above proposition, we can quickly see that the sum does in fact converge. And using some rudimentary diagonalization we can see that
$$
m = \frac{1}{1-P}.
$$
Which is a very cute result, because this is quite easy to calculate in practice. But we need to beware. This is a theory of loops after all!

## Measuring loops

Notice that $\tr P^k = \sum_{x \in D} (P^k)_{xx}$ is the sum of loops of length $k$ in D each multiplied by its probability. This contains some double counting for our purposes because if a loop passes through point $y \neq x$ then both will be counted at $(P^k)_{xx}$ and $(P^k)_{yy}$. So to avoid counting the basepoints of the loops we can divide this by $k$. 

So in some sense, $\tr m$ double counts the loops by a lot. I think that then this is the lattice proxy of the mass of the loops in $D$:
$$
\mu(D) = \sum_{k \in \mathbb{N}} \frac{\tr P^k}{k} = -\tr \log(1 - P) = - \log \det (1-P) = \tr \log m.
$$
If we write the partition function then as $Z(D) = e^{\lambda \mu(D)} = \det(1-P)^{-\lambda}$. With this we can check the free Boson partition function. Notice that this is simply $\tr\log m$. I am very curious to see why this is the case. We can get the $\log$ by integrating in $P$ but there must be a reason why counting like this helps. I don't know what this is though. 

The Lagrangian of the free boson is $\frac{1}{2} (\partial_x \phi)^2 + \frac{1}{2}(\partial_y\phi)^2$ in Euclidean space, so we can discretized the action like so
$$
S(D) = \sum_{x,y \in D} P_{xy}(\phi_x - \phi_y)^2,
$$
 the factor of $P_{xy} = \frac{1}{4}$ when nonzero comes from the extra half that accounts for the double counting the neighbors x,y and y,x. But this is pretty nifty! If we do some cool expansions we can rewrite this as
$$
S(D) = \sum_{x,y \in D} P_{xy}(\phi_x - \phi_y)^2,
$$

## Probability distribution of loops

Imagine loops raining! This would be a Poisson process where the expected number is proportional to the mass. Intuitively, we see that the mass of the loop is exponentially decreased with its length (from our expression above), meaning that perhaps a better intuition should be what we call $m$ to be a density of the loop. Large loops are stretched thinly and therefore they're more unlikely to be in our soup. For example, given a loop $l$ which has mass $m_l = N^{-|l|}$ will appear $n_l$ times in the soup governed by a Poisson process
$$
p(n_l) = \frac{(\lambda m_l)^{n_l}}{n_l!} e^{-\lambda m_l}.
$$
Notice that if we confine ourselves to loops in a finite domain $D$ there is a countable number of them, so we can represent their occupation numbers with a sequence $n$. Since each loop appears independently their collective probability distribution is given by
$$
p(n) = \left[\prod_{n_l\in n}\frac{(\lambda m_l)^{n_l}}{n_l!} \right] e^{-\lambda \mu(D)}.
$$
It would be nice to figure out a way to write the product out in terms of the matrix $m$ as well. I don't really know how to do that because the matrix has powers that depend on the sequence $n$ so I am not sure that I can come up with a pretty repackaging. 

What about expectation values though? Let's have some function of the loops. i.e. something that takes a loop and spits out a number for now $f: L_D \to \mathbb R$, where $L_D$ is the collections of all loops in a region $D$. Now assume that the if we have loops $l,k$ the measuring $f$ in that configuration yields $f(l)f(k)$. That means that in a configuration of loops is given by $n$ the measurement of $f$ in $n$ is given by $F(n) = \prod_{l\in L_D} f(l)^{n_l}$. Notice that all observables are sums of such $F$. 

Then we can come up with
$$
\langle F\rangle = \sum_{n} \left[\prod_{l\in L_D} f(l)^{n_l}\right]p(n) = \prod_{l\in L_D}e^{\lambda m_l [f(l)-1]}.
$$
But this can be simplified even further, because what we have to find is the sum of $f$ over all types of loops. For example. Say that $f$ is given over loops by multiplying values over a link, i.e. we have some matrix $F_{xy} = P_{xy} f(x\to y)$ from which we get that for all loops of length $k$ the sum is given by $\tr F^k/k$ which implies that
$$
\langle F\rangle = e^{\lambda \tr\log (1 - P + F)}= \det(1-P+F)^{-\lambda}.
$$
This is quite a cool formula because we can pathintegralify it! I mean I don't know how yet, but eventually we will be able to since path integrals are determinants. What is interesting here is that it looks that the theory is Bosonic for positive  $\lambda$ and Fermionic for negative ones strictly by the sign of the determinant. I am not sure, however, that this is even the case because of bosonization and the fact that the central charge is $-2\lambda$ in the continuum. But we'll see. Btw, is what we just calculated a local observable? I mean it kinda feels like it.

## The vacuum state

To find the vacuum state we can take inspiration from the path integral. Let's first calculate the partition function. The most intuitive way I can come up with is to assume the free energy for one loop is the mass of it, which gives that the free energy of loops in $D$ is given by $\tr \log m = \mu(D)$ as we have seen before! But for our Poisson distribution this can be thought of as the normalization constant under the assumption that the probability of a single copy of a loop is proportional to $\lambda m_l$ and all the loops are indistinguishable and independent
$$
Z_D = \sum_{n}\prod_{l \in L_D} \frac{(\lambda m_l)^{n_l}}{n_l!} = e^{\lambda \mu(D)}.
$$
Now the trick is to split this based on what crosses a "circle" $S$ contained in $D$. The cool way of answering this would be to characterize the points on $S$ that the curve is going into and the ones that it's coming out of. This is parameterized by the powerset of $S$. For a subset $\sigma\in \mathcal{P}(S)$ we can construct the state $\sigma = \sum_{x \in \sigma} \phi_x$ please allow me some abuse of notation here, and for a configuration we ingoing points described by $\sigma$ and outgoing by $\tau$ we can come up with the map $\rho = \sigma \tau^\dagger$ under which the mass of all arcs with these boundary conditions on $S = \partial A$ is given by $\alpha(A,\rho) = \tr (\rho m_A)$.

Now we need to figure out how to split the sum of $Z_D$ in terms of the states $\rho$. Let's use some notation by fixing $A$ be a convex subset of $D$. Let $L_{\partial A}\subset L_D$ denote the loops in $D$ that cross into $A$. Then we have that $L_D = L_A \sqcup L_{\partial A}\sqcup L_{D\setminus A}$. This means that our partition function also factorizes into
$$
Z_D = Z_{A} Z_{D\setminus A} \sum_{n}\prod_{l\in L_{\partial A}} \frac{(\lambda m_l)^{n_l}}{n_l!} = Z_{A} Z_{D\setminus A} e^{\lambda \mu(\partial A)}
$$
where $\mu(\partial A)$ is the mass of loops crossing $A$. This factor is what we want to split over a sum of the configurations on $\partial A$.
