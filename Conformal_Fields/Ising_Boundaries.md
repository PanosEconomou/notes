# Conformal Defects in Ising

Time to finally bite the bullet and do this calculation carefully for once! We will calculate the conformal defects of $\text{Ising}$ by looking at boundaries in its folded theory. 

[toc]

# Boundary conditions in Ising

The easiest warmup we can do is to calculate the boundary conditions in Ising. This is very easy to do using Cardy's method because they are classified by the representations of the chiral algebra. Namely they are given by
$$
\begin{align*}
\phi_{1} 	&= \frac{1}{2}\psi_1 + \frac{1}{2}\psi_{\eta} + \frac{1}{\sqrt{2}} \psi_N\\
\phi_{\eta} &= \frac{1}{2}\psi_1 + \frac{1}{2}\psi_{\eta} - \frac{1}{\sqrt{2}} \psi_N\\
\phi_{N} 	&= \frac{1}{\sqrt{2}}\psi_1 + \frac{1}{\sqrt{2}}\psi_{\eta},
\end{align*}
$$
where $\psi_k$ is the ishibashi state corresponding to the Virasoro module $k\otimes \bar k$ at $c=\frac{1}{2}$.



# Which Free Boson? 

$\text{Ising}^2$ folded is a $c=1$ theory for obvious reasons. What is not as obvious is which free boson. Ising by definition is a free Majorana-Weyl Fermion in $2D$  in which we have gauged the Fermion parity. So we can build $\text{ising}^2$ by gauging the fermion parity of two Majorana-Weyl fermions. However, two Majorana Fermions are the $R=2, c=1$ conformal field theory, aka the bozonized free Dirac Fermion. Now we can gauge the fermion parity $(-1)^F$ in that that and obtain the $R_{orb}=2$ theory which would be $\text{Ising}^2$. 

# Which Boundaries

Boundaries in the folded theory correspond to conformal defects in the unfolded theory. Let's calculate some of them exactly.

## Boundaries in the Folded CFT

We are very lucky for working in Ising. That is because string theorists have calculated all possible boundary conditions for a free boson. They call them $p$-branes. The classification is of Dirichlet and Neumann boundary conditions. In $2D$ there is a continuous parameter to parametrize both. Namely Dirichlet boundary conditions can be parametrized by the value that the field is fixed to at the boundary, while Neumann are parametrized by the value its derivative is fixed to at the boundary. 

The free boson can be written as $X = X_L + X_R$. The fermion parity ends up being the same as the orientifold projection which maps $X$ to $\hat X = X_L - X_R$. At the compactification radius we have chosen we also know that $X(\sigma) \sim X(\sigma) + 2\pi R$, so we can define a field $\theta = \frac{X}{R}$ and $\phi = \frac{\hat X}{R}$ that satisfy usual conditions. 

Gauging the fermion parity is identical 













