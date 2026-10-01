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

Let's stupify this issue as much as possible. In a toy model on $\mathbb{Z}^2$ we can consider a finite region $D \subset \mathbb{Z}^2$ where there is equal probability to move to a neighbor. We can put the probability of moving from $x$ to $y$ in one step in the column of a matrix $P_{xy}$. We can think of $P$ as a map $P : \mathbb{Z}^2 \to I$, where $I$ is the unit interval, which we can think of as a matrix
$$
P_{xy} = \begin{cases} 
\frac{1}{4} & \text{if x, y neighbors in } D\\ 
0 			& \text{otherwise}
\end{cases}
$$
Therefore, we can see that $(P^2)_{xy}$ is 2 times the probability to get from $x$ to $y$ in 2 steps, since it is given by $\sum_{z \in \mathbb Z^2} P_{xz} P_{zy}$. Similarly we can see that $P^k$ contains the probabilities of getting from any two points in $k$ steps within $D$ multiplied by the number of ways to get there. By the way, this sum is always guaranteed to converge since $D$ is finite so all but finitely many cells of $P$ are nonzero. This is almost identical to a path integral discretization so hopefully it kinda gives the intuition of why this should count the "probabilities".

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












