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
m_{xy} = \sum_{n=1}^{\infty} m^n_{xy} = \left(\sum_{n=1}^\infty P^n\right)_{xy}.
$$
So let's calculate the matrix $m$. The first thing we would need to check is that it converges. To do this it is helpful to come up with the following cute way to describe $P$.

$P$ is a matrix of translations to neighbors. Assuming the lattice is repeating in a well defined sense, we can define a set of translations $T$ where $N = |T|$ such that
$$
P = \frac{1}{N} \sum_{t\in T} t.
$$
Let's abuse notation a little bit since each translation can be defined by an element of $\Lambda$ we can call both the translation and the element $t$. The operator $P$ I wrote above is the one where the region $D$ is the entire space. If we introduce the projector $\Pi_D$ to be the one that only keeps vectors inside the region $D$ we can then write
$$
P_D = \Pi_DP\Pi_D.
$$
It is clear that eigenvectors of $P$ can be given in terms of eigenvectors of translations. Given a translation $t$ we have that the vector $\psi_k = \sum_{x\in\Lambda}e^{-ik\cdot x} \phi_x$, where $\phi_x$ is some basis of vectors associated to each point, satisfies $t\psi_k = e^{i k\cdot t}\psi_k$, therefore these will also be eigenvectors of $P$ with the following relation
$$
P\psi_k= \left(\frac{1}{N}\sum_{t\in T} e^{ik\cdot t}\right)\psi_k.
$$
But $P_D$ breaks translation invariance in a potentially ugly way. So we need to be more careful.  



## Measuring loops

Notice that $\tr P^k = \sum_{x \in D} (P^k)_{xx}$ is the sum of loops of length $k$ in D each multiplied by its probability. This contains some double counting for our purposes because if a loop passes through point $y \neq x$ then it both be counted at $(P^k)_{xx}$ and $(P^k)_{yy}$. So to avoid counting the basepoints of the loops we can divide this by $k$. 

I think that then this is the lattice proxy of the mass of the loops in $D$:
$$
\mu(D) = \sum_{k \in \mathbb{N}} \frac{\tr P^k}{k} = -\tr \log(1 - P) = - \log \det (1-P).
$$
If we write the partition function then as $Z(D) = e^{\lambda \mu(D)} = \det(1-P)^{-\lambda}$. With this we can check the free Boson partition function. 

The Lagrangian of the free boson is $\frac{1}{2} (\partial_x \phi)^2 + \frac{1}{2}(\partial_y\phi)^2$ in Euclidean space, so we can discretize the action like so
$$
S(D) = \sum_{x,y \in D} P_{xy}(\phi_x - \phi_y)^2,
$$
 the factor of $P_{xy} = \frac{1}{4}$ when nonzero comes from the extra half that accounts for the double counting the neighbors x,y and y,x. But this is pretty nifty! If we do some cool expansions we can rewrite this as
$$
S(D) = \sum_{x,y \in D} P_{xy}(\phi_x - \phi_y)^2,
$$











