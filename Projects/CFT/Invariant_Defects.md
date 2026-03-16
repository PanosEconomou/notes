# Invariant Defects under a Chiral Algebra

When a CFT is rational with a diagonal modular invariant, the set of topological defects that are invariant under the corresponding chiral algebra $\mathcal{V}$ is just the Verlinde lines of $ C =\text{Rep}(\mathcal{V})$, i.e. the primaries of the theory. What we could try to relax is what happens when the modular invariant is not diagonal, or in other words the special symmetric Frobenius algebra defining it is not $A=1$. In that case, we are looking for the set of $A-A$ bimodules of $C$. So it would be nice to work this for a couple examples.

[toc]

# Setup

We have a modular tensor category $C$ with a special symmetric Frobenius algebra $A$ defining the following modular invariant partition function
$$
Z(q) = \sum_{i,j \in \text{Irr\,}C} Z_{i j} \chi_{ i}(q)\chi_j(\bar q),
$$
where $\text{Irr\,} C$ is a dominant set of simple lines in $C$, $\chi_i(q)$ is the Virasoro character of line $i \in \text{Irr\,}C$ and the $Z_{ij} \in \mathbb{Z}_{\geq 0}$ is the modular mass matrix given by tracing out $A$-projections of simple lines $i$ with more details given in [Fuchs](https://arxiv.org/abs/hep-th/0204148). In particular this is given by 
$$
Z_{ij} = \text{dim\,}\text{hom}_{\text{loc}}(A\otimes j,\bar i).
$$
The local morphisms $\text{hom}_{\text{loc}}$ are all morphisms that are invariant under $A$-projections. To be more precise (though I don't think we need this here but it's nice to know) an $A$-projection for an object $X \in C$ is given by (I stole this picture from [here](https://arxiv.org/abs/hep-th/0204148))

![A-projection](_Invariant_Defects.assets/20260316_11h49m30s_grim.png)

and a morphism $f:A\otimes j \to \bar i$  is local when $f \circ P_j = f$. We assume here that we do have access to the modular matrix $Z$ and use it to constrain the bimodules. Moreover we can use the discussion above to see that
$$
A = \bigoplus_{i\in \text{Irr}C} Z_{1i} i,
$$
where $1$ is the identity of $C$.

## Building Bimodules

The defects invariant under the category $C$ are given by the category $_AC_A$ of $A-A$ bimodules. There is a fun way to create such modules using lines of $C$ by a process called $\alpha$-induction. The algebra $A$ has a multiplication map $m: A\otimes A \to A$, therefore we can induce a left $A$ module given any $i\in C$ and taking $(A\otimes i, \rho_l =m\otimes \text{id}_i)$, where the second entry is the left action $\rho_l:A\otimes (A\otimes i) \to A\otimes i$. Now there are two ways to add the additional structure of a right-module. We pick the object $\hat i=A\otimes i$ and then we consider the right action by bringing the $A$ line to the left, either from the back or the front of $i$ via the maps
$$
\begin{align*}
\rho_r^+ &= (m\otimes \text{id}_i ) \circ (\text{id}_A \otimes c_{iA})\\
\rho_r^- &= (m\otimes \text{id}_i ) \circ (\text{id}_A \otimes c_{Ai}^{-1}),
\end{align*}
$$
where $c_{XY}:X\otimes Y \to Y\otimes X$ is the brading of $C$. We call the bimodule with the corresponding right action by $\alpha^{\pm}(i)$ or $(A\otimes i)^{\pm}$. $_AC_A$ is a semisimple fusion category so we can find a dominant set of objects $\text{Irr\,}_AC_A$. The interesting result is that
$$
Z_{\bar j i} = \text{dim\,}\text{hom}[\alpha^-(i),\alpha^+(j)],
$$
where the $\text{hom}$ is taken in $_AC_A$. What is more interesting here is that by dominance there should be some sort of non-negative integer matrices $n^{\pm}$ such that
$$
\alpha^{\pm }(i) = \sum_{j \in \text{Irr}_AC_A} n_{ij}^\pm j,
$$
which means that $Z = n^- (n^+)^T$. So we are constraining what the simple invariant TDLs can be by finding two such matrices $n$. Clearly there are many such solutions, but we can now start adding constraints. 



## Constraining Induction Matrices

One strong constraint is that $Z_{\bar j i} \geq n^-_{ik}n^+_{kj}$ for all $k \in \text{Irr}_AC_A$. So if $h_i \neq h_j \text{ mod } 1$ then $n_{ik}^-n_{kj}^+ = 0$ for all $k$. This is a result of modular invariance under $T$ we can have a similar result using $S$ transforms. We also know that all the entries of $Z$ are either $0$ or $1$. A main point that I am struggling with is how to constrain the dimension of the codomain, or in other words the number of simple bimodules $k$. Since $\alpha$ inductions are not guaranteed to be simple, even though we know that the Verlinde lines are invariant under the chiral algebra, this doesn't mean that we have at least as many simple bimodules. 

# Three State Potts

If we take $\mathcal{V}=\text{Vir}_{c=\frac{4}{5}}$ we have $6$ simple objects labeled by $\{1,\epsilon, \sigma, X,Y,Z\}$ with conformal weights $h=\{0,\frac{2}{5},\frac{1}{15},\frac{7}{5},3,\frac{2}{3}\}$, and the modular mass matrix given by
$$
Z = \begin{pmatrix}
1 & 0 & 0 & 0 & 1 & 0\\
0 & 1 & 0 & 1 & 0 & 0\\
0 & 0 & 2 & 0 & 0 & 0\\
0 & 1 & 0 & 1 & 0 & 0\\
1 & 0 & 0 & 0 & 1 & 0\\
0 & 0 & 0 & 0 & 0 & 2
\end{pmatrix}.
$$
This implies that $A = 1\oplus Y$. So we are looking for $2\times 6 = 12$ vectors with nonnegative integer coefficients in some unknown but finite dimension, such that $n_i^+ \cdot n_j^- = Z_{ij}$. The start of this is quite simple since $\alpha^+(1) = \alpha^-(1)$  and $\alpha^+(Y) = \alpha^-(Y)$ we can see that
$$
n^{\pm}_1 = n^{\pm}_Y = e_1 = \begin{pmatrix}1 \\ 0 \\ \vdots\\0 \end{pmatrix},
$$
 for however many dimensions we have. 



## Modular Bootstrap

An alternative approach to this is to try and constrain what are the possible operators we can find that act irreducibly on the $\mathcal{V} \otimes \overline{\mathcal{V}}$ modules. This is constrained by modularity as we will see soon. 

For example, consider a TDL $L$ nad let $\chi$ be the vector of characters. Then the partition function with an $L$ insertion can be written as 
$$
Z_L^1(q) = \chi(q)^\dagger Z_L \chi(q),
$$
where $Z_L$ is the original modular matrix but with the nonzero entries postulated to be different. We know however that this is modular covariant taking us to the twisted sector via an $S$-transform. In the twisted sector, the partition function has to be integral and with positive coefficients. This constrains what $Z_L^1(q)$ can be quite a lot. Notice that $\chi(\tilde q) = S\chi(q)$ and therefore
$$
Z^{L}_1(q)  = Z_L^1(\tilde q) = \chi(\tilde q)^\dagger Z_L \chi(\tilde q) =  \chi(q)^\dagger  S^\dagger Z_L S \chi(q).
$$
We know most of the quantities here so we can find some more constraints. There is one more thing though in this case before we continue. We know the Verlinde lines for the bigger chiral algebra $W_3$ (which are not necessarily simple but we can use them). Namely there is a transformation $M$ of the characters given by
$$
M = \begin{pmatrix}
1 & 0 & 0 & 0 & 1 & 0\\
0 & 1 & 0 & 1 & 0 & 0\\
0 & 0 & 1 & 0 & 0 & 0\\
0 & 0 & 0 & 0 & 0 & 1\\
\end{pmatrix}
$$
This transformation takes the character vector to the characters of the irreducible $W_3$ characters of the 3-state Potts model. Where the modular matrix is given by
$$
Z = M^T \hat Z M \implies \hat Z = \begin{pmatrix}
1 & 0 & 0 & 0\\
0 & 1 & 0 & 0\\
0 & 0 & 2 & 0\\
0 & 0 & 0 & 2
\end{pmatrix}.
$$
We know the Verlinde lines here, as well as the $S$ matrix. In particular the $S$ matrix is given by
$$
\hat S = \frac{2}{\sqrt{15}}\begin{pmatrix}
s_1 &  s_2 &  2s_2 &  2s_1\\
s_2 & -s_1 & -2s_1 &  2s_2\\
s_2 & -s_1 &   s_1 &  -s_2\\
s_1 &  s_2 & - s_2 &  -s_1
\end{pmatrix},
$$
where $s_1 = \sin \frac{\pi}{5}$ and $s_2 = \sin \frac{2\pi}{5}$. So now we know the $4$ Verlinde lines with respect to $W_3$, and they are all invertible.



## Questions

These are not enough constraints, and there is no obvious way that I can use the $S$-matrix yet. So either I am missing something essential that I can add to keep constraining them, or this whole approach is not at all optimal.



  # Folded Tricritical Ising

(TBD)