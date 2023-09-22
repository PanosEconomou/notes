# Conformal Group

The main object of these field theories is the structure of the group of a certain kind of automorphisms on spacetime.

**<u>Definition:</u>** Let $(M,g)$ a pseudo-Riemannian Manifold with signature $(p,q)$ and dimension $\dim M = n$. Consider the following set
$$
\mathcal{G} \coloneqq \{\phi \in \text{Aut}(M) \mid \phi^* g = \Omega g,\ \Omega \in C^\infty(M)\},
$$
is called the **conformal group** of manifold $M$ and it contains all automorphisms of $M$ that leave the metric invariant up to scaling. 

**<u>Proposition:</u>** $(\mathcal{G},\circ)$ is a Lie subgroup of $\text{Aut}(M)$. 

**<u>Note:</u>** We can define the angle of two vector fields $X,Y \in \mathfrak{X}(M)$ like so
$$
\frac{g(X,Y)}{\sqrt{g(X,X)g(Y,Y)}}
$$
therefore, $\mathcal{G}$ leaves the angle invariant.

***Example:*** In Minkowski space the Poincaré group is a subgroup of $\mathcal{G}$.



## Infinitesimal Transformations

A little sidenote on rigorously defining infinitesimal transformations. Basically, in order to find the structure of the lie group $\mathcal{G}$ it would be nice to find the structure of its Lie Algebra $\mathfrak{g}$ and to do that it is easy to study transformations that are “infinitesimal.”

Consider a manifold $M$, a Lie group $G$ with lie algebra $\mathfrak{g}$ and a smooth left action
$$
\begin{align*}
\phi : G\times M &\to M\\
(g,p) &\to \phi(g,p) = gp,
\end{align*}
$$
with an orbit map $L_p : G \to M$ for some $p\in M$.



**<u>Definition:</u>** A one parameter subgroup of Lie group $G$ is the maximal integral curve of some left invariant vector field $X \in \mathfrak{g}$ given by the image of the map
$$
\begin{align*}
\psi_X: \mathbb{R} &\to G\\
t &\mapsto \exp(tX)
\end{align*}
$$
**<u>Defintion:</u>** The flow of $p \in M$ according to a one parameter subgroup $\psi_X$ of $G$ is given by the following curve
$$
\begin{align*}
\gamma_p:\mathbb{R} &\to M\\
t &\mapsto e^{tX}p
\end{align*}
$$
**<u>Note:</u>** We can rewrite $\gamma_p$ as $\gamma_{p,X} = L_p \circ \psi_X$.

**<u>Definition:</u>** An infinitesimal transformation of $M$ with respect to the Lie group $G$ in the direction $X\in \mathfrak{g}$ is given by the map
$$
\begin{align*}
F:M &\to M\\
p &\mapsto \gamma_{p,X}(1)
\end{align*}
$$
**<u>Corollary:</u>** The map 
$$
\begin{align*}
L_* : \mathfrak{g} &\to \mathfrak{X}(M)\\
X &\to L_*X \text{ s.t. } (L_*X)_p = L_{p*,e}X
\end{align*}
$$
is a lie algebra action induced by the lie group action. This could be a representation but we have much more general stuff.

**<u>Proposition:</u>** The components of an infinitesimal transformation of a point $p \in M$ are given by
$$
\begin{align*}
x^\mu \circ F(p) \coloneqq  F(p)^\mu &= p^\mu + X^\nu \frac{\partial L_p^\mu}{\partial \alpha^\nu},
\end{align*}
$$
where $\frac{\partial}{\partial \alpha^\nu}$ is a basis for $\mathfrak{g}$. 

**<u>Note:</u>** In physics we usually denote $\varepsilon^\nu = X^\nu \frac{\partial L_p^\mu}{\partial \alpha^\nu}$.



This essentially says that given a group action all we need to know is the structure of the lie algebra and not the group. This is only dependent on the lie algebra representation of the group.   





