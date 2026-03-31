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



# Modular Bootstrap

An alternative way to solve this problem is to use modular data in a rational theory. In here we will consider minimal models, just to motivate concrete calculations, but make comments on how this can be extended. A great reference is [this](https://arxiv.org/abs/hep-th/0011021). Given a chiral algebra $\mathcal{V}=\text{Vir}_c$ it is possible that one might find multiple copies of a simple module $i \in \mathcal{C}=\text{Rep}\,\mathcal{V}$ in the Hilbert space. In particular since we already know that the untwisted sector of the theory is given by 
$$
\mathbb{H}_{1} = \bigoplus_{i,j \in \text{Irr}\mathcal{C}} Z_{i j}\, i \boxtimes \bar j.
$$
In the case where one of the $Z_{ij} > 1$ we have that that representation appears multiple times. Since the defects that we are looking for must commute with Virasoro they are composed out of zero maps and isomorphisms. But in the case where the multiplicity of a representation is more than 1 such isomorphisms can be intertwiners between the isomorphic representations. So we should expect to have at most $\sum_{i,j\in \text{Irr}\mathcal{C}} |Z_{ij}|^2$ many independent simple defects. More importantly let $a$ be an index that denotes the multiplicity we have that the defects must be given by
$$
L = \sum_{i,j\in \text{Irr}\mathcal{C}}\sum_{a,a'}L_{ij}^{aa'}P_{ij}^{aa'},
$$
 where $P_{ij}^{aa'}: (i\boxtimes \bar j)^a \to (i\boxtimes \bar j)^{a'}$ are intertwiners that restrict to a fixed basis of isomorphisms $P_i \boxtimes P_{\bar j}$ (which we can pick to be the corresponding identity maps of modules).





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



## Bootstrap

An alternative approach to this is to try and constrain what are the possible operators we can find that act irreducibly on the $\mathcal{V} \otimes \overline{\mathcal{V}}$ modules. This is constrained by modularity as we will see soon. 

For example, consider a TDL $L$ nad let $\chi$ be the vector of characters. Then the partition function with an $L$ insertion can be written as 
$$
Z_L^1(q) = \chi(q)^\dagger Z_L \chi(q),
$$
where $Z_L$ is the original modular matrix but with the nonzero entries postulated to be different. We know however that this is modular covariant taking us to the twisted sector via an $S$-transform. In the twisted sector, the partition function has to be integral and with positive coefficients. This constrains what $Z_L^1(q)$ can be quite a lot. Notice that $\chi(\tilde q) = S\chi(q)$ and therefore
$$
Z^{L}_1(q)  = Z_L^1(\tilde q) = \chi(\tilde q)^\dagger Z_L \chi(\tilde q) =  \chi(q)^\dagger  S^\dagger Z_L S \chi(q).
$$
We know most of the quantities here so we can find some more constraints. The first nontrivial constraint is that $S^\dagger Z_L S$ is a nonnegative integer matrix since the the twisted sector by any inner automorphism of the chiral algebra is a representation of the original algebra. [Here](https://arxiv.org/abs/2310.19703) is a nice reference that talks about this.

However, finding $Z_L$ doesn't mean that we have all the defects, because there is still a residual ambiguity on the entries where $Z_{ij} > 1$. We will resolve this using consistency under fusion, but first lets find a collection of matrices $Z_L$. Getting a general form of $Z_L$ and imposing the condition that $S^\dagger Z_L S$ is a nonnegative integer matrix, we get $100$ equations out of which $10$ are independent. A set of $10$ independent solutions is given below where we show how defects are constrained to act on the primaries of the theory.

|         $(h,\bar h)$          |     Label      | $\tilde 1$ | $\tilde \eta$ | $\tilde C$ | $\tilde \alpha$ | $\tilde \beta$ | $\tilde \gamma$ | $\tilde N$ | $\tilde M$ |     $\tilde A$     |     $\tilde B$     |
| :---------------------------: | :------------: | :--------: | :-----------: | :--------: | :-------------: | :------------: | :-------------: | :--------: | :--------: | :----------------: | :----------------: |
|            $(0,0)$            |      $1$       |    $1$     |      $1$      |    $1$     |     $\phi$      |     $\phi$     |     $\phi$      |  $\delta$  |  $\delta$  |    $\delta\phi$    |    $\delta\phi$    |
|            $(0,3)$            |     $\Phi$     |    $1$     |      $1$      |    $-1$    |     $\phi$      |     $\phi$     |     $-\phi$     |  $\delta$  | $-\delta$  |    $\delta\phi$    |   $-\delta\phi$    |
|  $(\frac{2}{3},\frac{2}{3})$  |   $Z_{\pm}$    |    $2$     |     $-1$      |    $0$     |     $2\phi$     |    $-\phi$     |       $0$       |    $0$     |    $0$     |        $0$         |        $0$         |
|            $(3,0)$            |  $\Phi^\ast$   |    $1$     |      $1$      |    $-1$    |     $\phi$      |     $\phi$     |     $-\phi$     | $-\delta$  |  $\delta$  |   $-\delta\phi$    |    $\delta\phi$    |
|            $(3,3)$            |      $Y$       |    $1$     |      $1$      |    $1$     |     $\phi$      |     $\phi$     |     $\phi$      | $-\delta$  | $-\delta$  |   $-\delta\phi$    |   $-\delta\phi$    |
|  $(\frac{2}{5},\frac{2}{5})$  |   $\epsilon$   |    $1$     |      $1$      |    $1$     |  $-\phi^{-1}$   |  $-\phi^{-1}$  |  $-\phi^{-1}$   | $-\delta$  | $-\delta$  | $\delta\phi^{-1}$  | $\delta\phi^{-1}$  |
|  $(\frac{2}{5},\frac{7}{5})$  |     $\Psi$     |    $1$     |      $1$      |    $-1$    |  $-\phi^{-1}$   |  $-\phi^{-1}$  |   $\phi^{-1}$   | $-\delta$  |  $\delta$  | $\delta\phi^{-1}$  | $-\delta\phi^{-1}$ |
| $(\frac{1}{15},\frac{1}{15})$ | $\sigma_{\pm}$ |    $2$     |     $-1$      |    $0$     |  $-2\phi^{-1}$  |  $\phi^{-1}$   |       $0$       |    $0$     |    $0$     |        $0$         |        $0$         |
|  $(\frac{7}{5},\frac{2}{5})$  |  $\Psi^\ast$   |    $1$     |      $1$      |    $-1$    |  $-\phi^{-1}$   |  $-\phi^{-1}$  |   $\phi^{-1}$   |  $\delta$  | $-\delta$  | $-\delta\phi^{-1}$ | $\delta\phi^{-1}$  |
|  $(\frac{7}{5},\frac{7}{5})$  |      $X$       |    $1$     |      $1$      |    $1$     |  $-\phi^{-1}$   |  $-\phi^{-1}$  |  $-\phi^{-1}$   |  $\delta$  |  $\delta$  | $-\delta\phi^{-1}$ | $-\delta\phi^{-1}$ |

Where $\phi = \frac{1 + \sqrt{5}}{2}$ is the golden ratio, and $\delta = \sqrt{3}$. I also wrote a Mathematica notebook that does this automatically for any minimal model (or $S$ and $Z$ matrices) here. 

It is important to emphasize that these are **classes** of defects because the action on the fields $Z_{\pm}$ and $\sigma_{\pm}$ is not resolved. In reality each defect $L$ would act as a $2\times 2$ matrix on either of the degenerate fields. We can define traces that only pick out these subspaces so what we see in these entries is $\text{tr}_{Z}L$ and $\text{tr}_{\sigma}L$ respectively. The reason is that in the partition function the coefficient that appears is $L_{Z^+Z^+} + L_{Z^-Z^-}$ and the corresponding one for $\sigma$. Now we will try to explicitly constrain these matrices.

The general principle we will do this by is that the defects above are all simple. Therefore if we take fusion of two classes and we get another class, then the corresponding defect is guaranteed to be simple. I am not explaining this right, but the examples should make it clear. Let's go class by class.

### Identity $\tilde 1$

Consider a defect $L \in \tilde 1$ then we can see that $L\otimes L \in \tilde 1 \cup \tilde \eta$ and is simple because of the $8$ unambiguous actions on the remaining fields. Let's focus on the restriction of $L$ on $Z$ given by the matrix $L_Z$, and then we will similarly argue for $L_\sigma$. Since $\text{Tr\,}L_Z = 2$ we see that
$$
L_Z = \begin{pmatrix}x & y\\z & 2-x\end{pmatrix},
$$
for $x,y,z\in \mathbb{C}$. If $L^2 \in \tilde \eta$ then it must have $\text{Tr\,}L_Z^2 = -1$. We then know that since $L_Z$ is a root of its characteristic polynomial we can multiply by $L_Z$ and take a trace to get
$$
\begin{align*}
\text{Tr\,}L_Z^2 &= 4 - 2 \text{det\,}L_Z = -1 \implies \det L_Z = \frac{5}{2} \\
\text{Tr\,}L_Z^3 &= -2 - 2\det L_Z = -7,
\end{align*}
$$
This can't happen because no nonnegative integer combination of simple lines gives this trace. Therefore $L^2 \in \tilde 1 \implies \text{det\,}L_Z = 1$. However, since its conformal dimension is $1$ $L_Z$ must be unitary, which implies that $z = -\bar y$ and $\bar x = 2- x$ and $|x|^2 + |y|^2 = 1$, this implies $\text{Re\,}x = 1$ and therefore $|y| = 0$ is the only solution that keeps this unitary. Therefore $\tilde {1} = \{1\}$ where $1$ is the identity defect.

### $\mathbb{Z}_3$ Defects $\tilde \eta$

We do a similar analysis for an $L\in \tilde \eta$. We can see using the same reasoning as above that $L\otimes L \in \tilde 1 \cup \tilde \eta$. If $L\otimes L = 1$ by writing $L_Z$ as
$$
L_Z = \begin{pmatrix}x & y\\z & -1-x\end{pmatrix},
$$
with the condition $L_Z^2 = 1$ we see that $y=z=0$ and $x^2 = (1+x)^2 = 1$ which has no solution. Therefore for any line in $\tilde \eta$ we have that $L\otimes L \in \tilde \eta$. In a similar way as above we find that
$$
L_Z^2 = -L_Z - \det L_Z \implies \det L_Z = 1.
$$
This should also be a unitary matrix such that $z = -\bar y$, $|x|^2 + |y|^2 = 1$, and $\bar x = - 1 - x \implies \text{Re\,} x = -\frac{1}{2}$. Also notice that if $\text{Tr\,}L_Z^2 = -1$ we find that $\text{Tr\,}L_Z^3 = 2$. This implies that for an such $L$ we have $L\otimes L\otimes L = 1$. This fixes $x^3 = 1, y=0$. If we call $\omega = e^{\frac{2\pi i }{3}}$ we have only two possible matrices for $L_Z$
$$
\begin{align*}
\eta_1 = \begin{pmatrix}\omega & 0 \\ 0&\omega^2\end{pmatrix} && \eta_2 = \begin{pmatrix}\omega^2 & 0 \\ 0&\omega\end{pmatrix}.
\end{align*}
$$
This doesn't completely fix what defects we have in $\tilde \eta$. Since there are two ambiguous pairs we can have 4 possible combinations. But we can show that all $4$ of them can't exist at a given time. In particular, let $L,L' \in \tilde \eta$ such that $L_Z = L_\sigma = L'_Z = \eta_1$ but $L'_\sigma = \eta_2$. We see that $(L\otimes L')_Z = \eta_2$ and $(L\otimes L')_\sigma = 1$ which means that there is a simple line $Q = L\otimes L'$ with $\text{tr}_\sigma Q = -1 \neq  \text{tr}_{Z} Q $ which is not possible from our previous accounting. So we get to have a choice. The choice really is which field we call $\sigma^{\pm}$ and $Z^{\pm}$. Let's fix the line $\eta$ such that $\eta_{Z} = \eta_{\sigma} = \eta_1$ and then we find that $\tilde \eta = \{\eta,\eta^2 =\eta \otimes \eta\}$.

### Charge Conjugation $\tilde C$

 Consider a defect $L \in \tilde C$. We see that $L\otimes L \in \tilde 1 \cup \tilde \eta$, but now this is a much stronger constraint because we know all the defects here. We also know that $L_Z$ traces to zero which implies that $\det L_Z = - \frac{1}{2}\text{tr\,} L_Z^2$. If $L_Z \in \tilde \eta$ we have that $|\text{det\,}L_Z|\neq 1$ so it can't be unitary. Therefore we have that $L\otimes L = 1$ which constrains this to be
$$
L_Z^\theta=\begin{pmatrix}0&e^{i\theta}\\e^{-i\theta}&0\end{pmatrix}.
$$
But there can't be infinitely many simple lines since we can see that $L_Z^\theta L_Z^\phi$ only has a trace in the defects we found when $\theta = \phi$. So we have another choice, effectively fixing the relative phase between $Z_{\pm}$. So, we pick
$$
L_Z=L_\sigma=C=\begin{pmatrix}0&1\\1&0\end{pmatrix},
$$
which implies that there is only $1$ defect $\tilde C = \{C\}$.

### Tambara Yamagami Lines $\tilde N$

Let's focus on the classes $\tilde N, \tilde M$. We notice that for any $L \in \tilde N$ then $C\otimes L \in \tilde M$. Since $\text{Tr\,}L_Z = 0 = \text{Tr\,}CL_Z$ we find that 
$$
L_Z = \begin{pmatrix}x&y\\-y&-x\end{pmatrix}.
$$
In addition we notice that $\eta \otimes L \in \tilde N$, which implies that $x=0$ and similarly $\eta \otimes C\otimes L \in \tilde M \implies y = 0$. So, we have that $L_z = L_\sigma = 0$ for any defect in $\tilde N,\tilde M$ which further proves that $M = C\otimes N$. Notice that exactly the same reasoning applies to the lines in $\tilde A, \tilde B$ which leads us to conclude that $B = C\otimes A$.

### Fib Lines $\tilde \alpha, \tilde \beta, \tilde \gamma$ 

Take a line $L \in \tilde \alpha$. Since we know its trace we can write
$$
L_Z = \begin{pmatrix}x & y\\z & 2\phi-x\end{pmatrix}.
$$
Using the fact that $C\otimes L, C\otimes \eta \otimes L \in \tilde \gamma$ we find that $y=z=0$. Also we notice that $\eta \otimes L \in \tilde \alpha \cup \tilde \beta$. Now we can calculate 
$$
\text{Tr\,} \eta L_Z = \omega x + \omega^2 (2\phi -x).
$$
If $\eta \otimes L \in \tilde \alpha$ we have that this trace is $2\phi$ which implies that $x=-2 \phi \omega$. Then we see that $\text{Tr\,}\eta^2L_z = -4\phi$ which doesn't match any line. We can use the same reasoning to show that $\eta\otimes L, \eta^2\otimes L \in \tilde \beta$, which would imply that there is one solution where $x=\phi$. Now we do the same thing for $L\in \tilde \beta$. By a similar argument we see that if $\eta \otimes L \in \tilde \alpha$ then $L = \eta^2 \otimes \alpha$. Otherwise we have that $L = \eta \otimes \alpha$. Finally, we see that for any $L \in \tilde \gamma$ then $C\otimes L \in \{\alpha,\eta \otimes \alpha, \eta^2 \otimes \alpha\}$, and since $C^2 =1$ we have that
$$
\begin{align*}
\tilde \alpha = \{\alpha\} && \tilde \beta = \{\eta \otimes \alpha, \eta^2 \otimes \alpha \} && \tilde \gamma = C \otimes (\tilde \alpha \cup \tilde \beta).
\end{align*} 
$$
Finally, we have the remaining line in $\tilde A$, where we can see that $A = \alpha \otimes N$. WE ARE DONE! These are the 16 lines we predicted, so there can't be any more. 

## Summary

Finally, we have everything we hoped for. Our fusion category has the following lines $\{1,\eta,C, \alpha, N\}$ with the following fusion rules
$$
\begin{align*}
\eta\otimes \eta \otimes \eta &= 1\\
C\otimes C &=1 \\
N\otimes N &= 1 \oplus \eta \oplus \eta \otimes \eta\\
\alpha \otimes \alpha &= 1 \oplus \alpha\\
\eta \otimes N &= N = N\otimes \eta\\

\eta \otimes C &= C\otimes \eta\\
\eta \otimes \alpha &= \alpha\otimes \eta\\
C\otimes a &= a \otimes C\\
C\otimes N &= N \otimes C.
\end{align*}
$$
And the remaining simple lines are the inequivalent fusions of these $5$ lines given by
$$
\text{Irr\,}\mathcal{C}=\{1,\eta,C, \alpha, N,\eta^2, C\eta, C\eta^2, \eta \alpha, \eta^2 \alpha, C\alpha, C\eta \alpha, C\eta^2\alpha, \alpha N, CN, C\alpha N\}.
$$
With this we can identify $\mathcal{C} = (\text{TY}(\mathbb{Z}_3) \boxtimes \text{Fib}) \rtimes \mathbb{Z}_2$, at least at the fusion ring level. It is worth noting that the ungaged theory has symmetry $\mathcal{C}=\text{Rep}(\text{Vir}_{c=\frac{4}{5}})$. 

## S-Matrix

What is a bit tricky here is the $S$-matrix. If $\mathcal{C}= \text{Rep\,}\text{Vir}_{c=\frac{4}{5}}$, then we know using Kac's formula the $S$ matrix of the modular tensor category. What we don't know however, is what the $S$-matrix for the specific model is. In particular, looking at $Z$ above we find that there are two primaries with multiplicity two in this theory. We can call them $\sigma^\pm$ and $Z^\pm$. Therefore we can write $Z$ as an $8\times 8$ matrix where each entry is either $0$ or $1$. Then in order to find how the modular $S$ transform works in this theory we need to work out how charge conjugation acts, and then we can use the fact that
$$
S^2 = C = (ST)^3,
$$
to fully determine $S$ for the $S$ matrix in the modular tensor category. The charge conjugation matrix is such that $C_{ij} = \delta_{i\bar j}$ where $i,j \in \text{Irr\,}\mathcal{C}$. What we know by Di-Francesco is that there is a global $\mathbb{Z}_3$ symmetry such that the $\pm$ fields have charges $e^{\pm 2\pi i/3}$ respectively. Therefore, charge conjugation symmetry would exchange these charges. Therefore the charge conjugation matrix in the basis $\{1,\epsilon, \sigma^+, \sigma^-, X,Y,Z^+, Z^-\}$ is given by
$$
C = \begin{pmatrix}
1 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\
0 & 1 & 0 & 0 & 0 & 0 & 0 & 0\\
0 & 0 & 0 & 1 & 0 & 0 & 0 & 0\\
0 & 0 & 1 & 0 & 0 & 0 & 0 & 0\\
0 & 0 & 0 & 0 & 1 & 0 & 0 & 0\\
0 & 0 & 0 & 0 & 0 & 1 & 0 & 0\\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 1\\
0 & 0 & 0 & 0 & 0 & 0 & 1 & 0\\
\end{pmatrix}.
$$
The conformal weights in order are $h=\{0,\frac{2}{5},\frac{1}{15},\frac{1}{15},\frac{7}{5},3,\frac{2}{3},\frac{2}{3}\}$. So now we can use modular covariance to figure out the $S$ matrix. 

Notice that $[S,C] = SC - CS = S^3 - S^3 =0$, therefore we can simultaneously diagonalize everything. A basis of eigenstates we can pick are 
$$
\{1, \epsilon, X, Y, \frac{Z^+ + Z^-}{\sqrt {2}}, \frac{\sigma^+ + \sigma^-}{\sqrt {2}}\} \cup \{ \frac{Z^+ - Z^-}{\sqrt {2}}, \frac{\sigma^+ - \sigma^-}{\sqrt {2}}\},
$$
the stuff on the left have eigenvalue $1$ under $C$ while the stuff on ther right have eigenvalue $-1$, which means that we can now write the $S$ and $T$ matrices as block diagonal of the form
$$
\begin{align*}
S = \begin{pmatrix}S_{+} & 0 \\ 0 & S_-,\end{pmatrix} && T = \begin{pmatrix}T_{+} & 0 \\ 0 & T_-,\end{pmatrix},
\end{align*} 
$$
where we know $T_\pm$ from the conformal weights of the primaries, but we don't know $S_{\pm}$. We do know though that $S_{\pm}^2 = \pm 1$ and $(S_{\pm}T_{\pm})^3 = \pm 1$. 

$S_-$ is a $2\times 2$ symmetric and unitary matrix. The fact that it squares to $-1$ implies that it has determinant $1$ which constrains all the degrees of freedom to one angle. Using the remaining $T$ values we find that 
$$
S_{-} = \frac{i}{\sqrt{1 + \phi^2}} \begin{pmatrix} - 1 & \phi \\ \phi & 1 \end{pmatrix},
$$
 which (up to a factor of $-i$) is unsirprisingly but still delightfully the $\text{Fib}$ category $S$-matrix. 

On the other hand a wrong guess for $S_+$ is simply the projection of the $\mathcal{C}$ $S$ matrix on the fields $1,\epsilon, X,Y,Z, \sigma$. One will quickly notice that this does not square to $1$. So what gives? If we say that the $S$ matrix is simply a projection onto the primaries in the untwisted sector, we assumed that there is no way that we will obtain the remaining representations of $\mathcal{V}$ in twisted sectors. This can't be the case. One would expect that we should be able to write down a CFT with $A=1$ as modular invariant, and then, via gauging obtain the 3-state Potts model with $A=1\oplus Y$ modular invariant. So this means, that the rest of the fields should appear in the twisted sector. 

I wonder if we can figure this out directly from bootstrap constraints without working out what we gauged explicitly. Clearly one solution here is to say that the fields that don't appear in the untwisted sector appear with multiplicity 1 in the twisted sectors. This will give $S_+$ to be the exact $S$ matrix of $\mathcal{C}$, which squares to $1$ as expected. 

[Tachikawa](https://arxiv.org/pdf/2002.12283) says that we can get $3$-state Potts via $\mathbb{Z}_2$ gauging of the diagonal theory which is known as the tetracritical Ising model. Apparently it is a well known fact that $D$ modular invariants are obtained via $\mathbb{Z}_2$ gauging in minimal models from $A$ modular invariants. For tetracritical Ising the $\mathbb{Z}_2$ we are gauging is the one that flips the signs of $4$ primaries leaving the rest invariant (similar to the $\eta$ line in $\text{Ising}$). The fields that flip sign are
$$
(r,s) \in \{(2,1),(2,2),(4,1),(4,2)\},
$$
with conformal weights $\{\frac{1}{8},\frac{1}{40},\frac{13}{8}, \frac{21}{40}\}$ which unsurprisingly are the primaries with conformal weights that we don't see in the untwisted sector of the Potts model. So we only have to see what contributions we will get from the even part of the twisted sector where we simply get two extra copies of the $Z,\sigma$. I didn't read this but [this](https://arxiv.org/pdf/hep-th/9601078) is a paper that seems relevant to read here. 



# Folded Tricritical Ising

The moment we've all been waiting for. Folding Tricritical Ising we get a $c=\frac{7}{5}$ CFT that has maximal chiral algebra $\mathcal{V}= \text{Vir}_{\frac{7}{10}}\otimes \text{Vir}_{\frac{7}{10}}$. There is a fancy outer automorphism of this chiral algebra $\sigma$ that exchanges the two copies of Virasoro. The chiral algebra invariant under $\sigma$ is given by $\mathcal{V}^{\sigma}= W(2,2,4,\cdots)$ generated by normal ordered products of the stress tensor. [Elsewhere](./Tricritical_Ising.md) (and also [here](./Fixed_Point_Algebra.md)) we have worked out all the representations of this fixed point algebra as well as the decomposition of the original local Hilbert space in terms of these representations. Here are some telegraphic facts that will be useful.

The folded theory has $36$ $\mathcal{V}$ primaries that split into $30+6\times 4=54$ $\mathcal{V}^\sigma$ primaries. However $\mathcal{V}^\sigma$ has only $39$ irreducible representations out of which only $15+12 = 27$ appear in the untwisted sector of the folded theory. Also $15$ of these irreducible representations appear with multiplicity $2$ while $12$ appear as spinless primaries and the remaining $12$ are off diagonal combinations of opposite nonzero spins. We have also worked out the $39\times 39$ modular $S$ matrix of the theory so we are able to bootstrap the TDLs under $\mathcal{V}^\sigma$ using modular bootstrap just like in the previous example.

## Modular Bootstrap TDL families

Solving the modular equation we have that the simple TDLs that are invariant under $\mathcal{V}^\sigma$ organize themselves into $39$ families with quantum dimensions 
$$
\begin{array}{cccc}
 1 & 2 & \sqrt{2} & \varphi  \\
 2 \varphi  & \sqrt{2} \varphi  & \varphi ^2 & 2 \varphi ^2 \\
 \sqrt{2} \varphi ^2 & 2 \sqrt{\varphi +2} & 2 \varphi  \sqrt{\varphi +2} & \sqrt{2} \sqrt{\varphi +2} \\
 2 \sqrt{2} \sqrt{\varphi +2} & \sqrt{2} \varphi  \sqrt{\varphi +2} & 2 \sqrt{2} \varphi  \sqrt{\varphi +2},
\end{array}
$$
 which are all combinations of the following 4 quantum dimensions
$$
\begin{align*}
1 && \sqrt{2} && \varphi && \sqrt{2} \sqrt{1 + \phi^2}.
\end{align*}
$$
So we expect to have $4$ families and obtain the rest of the simple lines by taking products. Before we jump in here are some interesting observations. The invertible lines on the theory form a $D_8$, though not all of these lines are multiples of the identity in the representation of $\mathcal{V}^{\sigma}$. In particular only a $\mathbb{Z}_2^2$ doesn't intertwine the representations formed by $1,\sigma, \eta\boxtimes \eta$, as expected.

Let's start with the invertible ones.

### Invertible Lines

There are $5$ families of simple invertible lines that on the $24$ primaries with multiplicity $1$ act as
$$
\begin{array}{ccccccccccccccccccccccccc}
 \tilde 1: & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
 \tilde \eta: & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
 \tilde \rho: & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & -1 & -1 & -1 & -1 & -1 & -1 & -1 & -1 \\
 \tilde \sigma: & 1 & -1 & -1 & 1 & 1 & -1 & -1 & 1 & 1 & -1 & -1 & 1 & 1 & -1 & -1 & 1 & 1 & -1 & -1 & 1 & 1 & -1 & -1 & 1 \\
 \tilde \chi: & 1 & -1 & -1 & 1 & 1 & -1 & -1 & 1 & 1 & -1 & -1 & 1 & 1 & -1 & -1 & 1 & -1 & 1 & 1 & -1 & -1 & 1 & 1 & -1 \\
\end{array}
$$
I'm not labeling all the primaries, there really isn't  enough space. On the $15$ pairs of degenerate primaries their trace is given by
$$
\begin{array}{cccccccccccccccc}
 \tilde 1: &2  & 2 & 2 & 2 & 2 & 2 & 2 & 2 & 2 & 2 & 2 & 2 & 2 & 2 & 2 \\
 \tilde \eta: & 2 & 2 & 2 & -2 & -2 & 2 & 2 & -2 & -2 & 2 & -2 & -2 & -2 & -2 & 2 \\
 \tilde \rho: & 2 & 2 & 2 & 0 & 0 & 2 & 2 & 0 & 0 & 2 & 0 & 0 & 0 & 0 & -2 \\
 \tilde \sigma: & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
 \tilde \chi: & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
\end{array}
$$
We also know that all of these defects have conformal dimension $1$, and therefore are invertible, which means that they should act as $2\times 2$ unitary matrices on the degenerate subspaces. One cool fact is that since the eigenvalues of a unitary matrix are phases, there is exactly $1$ such matrix that traces to $2$ and exactly $1$ that traces to $-2$ (these are the matrices $\pm 1$). If the trace is nonzero, there is no ambiguity on how the defect acts on that pair of primaries. However, when the trace does vanish we need more constraints. 

One cool constraint is that all defects should square to $\pm 1$ and that for any lines $L\in \tilde \sigma, L' \in \tilde \chi$ it must be that $L\otimes L' \in \tilde \rho$. If we fix a degenerate primary, there are three different cases on how these $5$ defects act on it. 

In the following let's define the following matrices that will be helpful.
$$
\begin{align*}
a=\begin{pmatrix}1&0\\0&-1\end{pmatrix} && b = \begin{pmatrix}0&1\\1&0\end{pmatrix} && \bar b = \begin{pmatrix}0&1\\-1&0\end{pmatrix}.
\end{align*}
$$
Notice that all these are traceless and satisfy the identities $a^2=b^2 = -\bar b^2 = 1$, $a = \bar b b$, and $ab = \bar b  = -ba$. We will see that up to basis change on the primary states there are no more degrees of freedom left over.

Now consider the vector $T = (\text{Tr\,} \tilde 1,\text{Tr\,} \tilde \eta,\text{Tr\,}\tilde \rho,\text{Tr\,}\tilde \sigma,\text{Tr\,}\tilde \chi )$ where it is understood that the trace is taken on the subspace of a particular degenerate field of any defect in that class. If we focus on the case where $T=(2,2,2,0,0)$ we know that there are only two consistent with fusion solutions are defects acting as $(1,1,1,a,a)$ and $(1,1,1,b,b)$, up to a basis choice. Both of them can't coexist since $ab = \bar b$ that has trace $0$ and not $2$. Luckily we know that in the basis we have chosen there must be a topological defect $\sigma$ that acts as identity on half of the degenerate fields and as the negative of that on the remaining ones. This comes from the fact that we have diagonalized the action of $\sigma$. So in our basis we know that when $T=(2,2,2,0,0)$ the invertible defects must act as $(1,1,1,a,a)$ which resolves the ambiguity.

The next inequivalent case is when $T=(2,2,-2,0,0)$ in which case the only action compatible with our basis choice is still unambiguous and is given by $(1,1,-1,a,-a)$.

Finally, the last case is $T=(2,-2,0,0,0)$. Here we, unfortunately have 4 consistent solutions of the fusion rules, each with a 2-fold ambiguity. They are given by, up to a choice of basis,
$$
\begin{align*}
(1,-1,\pm b,\pm a,\pm \bar b) && (1,-1,\pm \bar b,\pm a,\pm b)\\
(1,-1,\pm i\bar b,\pm a,\pm ib) && (1,-1,\pm i b,\pm a,\pm i\bar b)
\end{align*},
$$
where we can reject the second row because we already know we have a defect in $\tilde \sigma$ that acts with $a$ on that primary. Now we need to see which set of inequivalent fusion rules we have. In the first case we have that any $L\in \tilde \rho$ is such that $L^2 = 1$ while in the second $L^2=-1$. One way to resolve this is to look into the lines we already know from Tricritical Ising. We know that this has symmetry $\text{Fib}\boxtimes \text{Ising}$, therefore we must be able to build various $\mathbb{Z}_2$ lines that are Verlinde lines in $\mathcal{V}$. In particular you can see that what we called $\tilde \rho$ must contain the lines $\eta \boxtimes 1,1\boxtimes \eta$ just by looking at how it acts on the nondegenerate sector. We immediately see that these lines should square to the identity, so the only possible set of consistent TDLs has to act like $(1,-1,\pm b, \pm a, \pm \bar b)$ on the corresponding primary.

However, there is some residual ambiguity left. For example let's pick a defect in $\tilde \sigma$. There are $8$ primaries that have $T=(2,-2,0,0,0)$, therefore, naively we should expect to have $2^{8}$ possible defects in $\tilde \sigma$. However this is not true. Let $\psi,\phi$ be two different primaries and assume that there exists $L,L' \in \tilde \sigma$ such that $L_{\phi}=L_{\psi}=L'_{\phi}=a$ while $L'_{\psi} = -a$. Then we have that $\text{tr}_{\phi} L\otimes L' = -\text{tr}_{\psi} L\otimes L' = 2$, which implies that $L\otimes L' = \eta$ and $L\otimes L' = 1$. So we can conclude that there are only 2 defects in the families $\tilde \rho, \tilde \sigma, \tilde \chi$.

So finally we have that the invertible simple TDLs are given by $1, \sigma, \chi$ such that $\chi\otimes \chi = \eta \boxtimes \eta$, given by
$$
\begin{array}{cccccccccccccccc}
 \sigma: & a & a & a & a & a & a & a & a & a & a & a & a & a & a & a \\
 \chi: & a & a & a & \bar b & \bar b & a & a & \bar b & \bar b & a & \bar b & \bar b & \bar b & \bar b & -a \\
\end{array}
$$
or more specifically with fusion rules (I am not writing the tensor product symbol)
$$
\begin{align*}
\sigma^2 &= 1\\
\sigma\chi &= \chi^3 \sigma\\
\chi^4 &= 1,
\end{align*}
$$
which is $D_8$! So the invertible defects of this category form some version of $\text{Vec}_{D_8}$.



### Quantum Dimension $\sqrt{2}$

We have 3 families of defects with quantum dimension $\sqrt{2}$ and 1 family with $2$. In the nondegenerate primaries these 4 defects act by
$$
\begin{array}{cccccccccccccccccccccccc}
\tilde \alpha: & \sqrt{2}&\sqrt{2}&\sqrt{2}&\sqrt{2}&-\sqrt{2}&-\sqrt{2}&-\sqrt{2}&-\sqrt{2}&\sqrt{2}&\sqrt{2}&\sqrt{2}&\sqrt{2}&-\sqrt{2}&-\sqrt{2}&-\sqrt{2}&-\sqrt{2}&0&0&0&0&0&0&0&0\\
\tilde \beta: & \sqrt{2}&\sqrt{2}&\sqrt{2}&\sqrt{2}&-\sqrt{2}&-\sqrt{2}&-\sqrt{2}&-\sqrt{2}&\sqrt{2}&\sqrt{2}&\sqrt{2}&\sqrt{2}&-\sqrt{2}&-\sqrt{2}&-\sqrt{2}&-\sqrt{2}&0&0&0&0&0&0&0&0\\
\tilde \gamma: & \sqrt{2}&-\sqrt{2}&-\sqrt{2}&\sqrt{2}&-\sqrt{2}&\sqrt{2}&\sqrt{2}&-\sqrt{2}&\sqrt{2}&-\sqrt{2}&-\sqrt{2}&\sqrt{2}&-\sqrt{2}&\sqrt{2}&\sqrt{2}&-\sqrt{2}&0&0&0&0&0&0&0&0\\
\tilde \delta: & 2&2&2&2&2&2&2&2&2&2&2&2&2&2&2&2&0&0&0&0&0&0&0&0
\end{array}
$$
while on the degenerate primaries they act by
$$
\begin{array}{cccccccccccccccc}
\tilde \alpha :& 0&2\sqrt{2}&0&\sqrt{2}&\sqrt{2}&0&-2\sqrt{2}&-\sqrt{2}&-\sqrt{2}&0&\sqrt{2}&\sqrt{2}&-\sqrt{2}&-\sqrt{2}&0\\
\tilde \beta :& 0&2\sqrt{2}&0&-\sqrt{2}&-\sqrt{2}&0&-2\sqrt{2}&\sqrt{2}&\sqrt{2}&0&-\sqrt{2}&-\sqrt{2}&\sqrt{2}&\sqrt{2}&0\\
\tilde \gamma :& 0&0&0&0&0&0&0&0&0&0&0&0&0&0&0\\
\tilde \delta :& -4&4&-4&0&0&-4&4&0&0&-4&0&0&0&0&0,
\end{array}
$$
This is a particularly pleasant situation because by looking at the fusion rules consider any defect $L\in\tilde \alpha$, we know that $\chi \otimes L, \sigma \otimes L \in \tilde \gamma$ which implies that the matrices of $L$ acting on the primaries have a fixed diagonal with one degree of freedom fixed by the trace. 

Let's assume first that $L\otimes L$ is simple, which would it imply that it must be in $\tilde \delta$. In a primary $\phi$ that this traces to $\sqrt{2}$ then we have that 
$$
\begin{align*}
L_\phi = \begin{pmatrix}x & y\\z& \sqrt{2} -x\end{pmatrix} && \text{Tr\,}a L_{\phi} = \text{Tr\,}\bar b  L_{\phi} = 0 && \text{Tr\,}L_{\phi}^2 = 0 \implies L_\phi = \frac{1 \pm i b}{\sqrt{2}}.
\end{align*}
$$
We also know that $L\otimes \chi \in \tilde \gamma$, and we can also see that $\sigma \chi \otimes \tilde \gamma \subset \tilde \gamma$. If we calculate $(L\otimes \chi)_{\phi} = L_\phi \bar b = \frac{\bar b \mp ia}{\sqrt{2}}= \bar b L_\phi^\dagger$ we can see that $(\sigma \otimes \chi \otimes L\otimes \chi)_{\phi}= -aL^\dagger_\phi$. We also know that $\sigma\otimes \tilde \gamma \subset \tilde \alpha \cup \tilde \beta$ which implies that $-L_\phi^{\dagger}$ is a line in $\tilde \beta$, and $L_\phi^\dagger$ is another line in $\tilde \alpha$. Now consider the line $L_\phi L^\dagger_\phi = 1$. This implies that we should be able to build a line with trace $2$ for that primary, but quantum dimension $2$. The only way to construct such a defect would be to consider either $1\oplus \chi \sigma$ or $1 \oplus \sigma \chi$, while both of these have trace $2$, none of them act as the identity on the $\phi$ space. Therefore $L\otimes L$ can't be simple.

Since $L\otimes L$ is not simple, then the only things it can be are $L\otimes L \in \{1\oplus\sigma \chi, 1 \oplus \chi \sigma, \chi^2 \oplus \sigma \chi,\chi^2 \oplus \chi \sigma\}$. Let's consider the case where $L\otimes L \in \{\chi^2 \oplus \chi \sigma\}$ which would imply $L_\phi^2 = -1 \pm b$ and therefore $x^2 = -1, y=z=2^{-\frac{1}{2}}$. However this would yield $\text{Tr\,}aL_\phi= 2i-\sqrt{2} \neq 0$, so this can't be the case. If on the other hand $L\otimes L \in \{1\oplus \sigma \chi, 1\oplus \chi \sigma\}$ we find two solutions
$$
L_\phi^{\pm}=c^{\pm} = \frac{1 \pm b}{\sqrt{2}},
$$
which satisfy all the other fusion rules we mentioned.  In this case we have $L_\phi^{\pm}L_\phi^{\mp} = 0$ where the only way for this to happen is if they fuse in $\tilde \delta$. We also know that $(L\otimes \chi)_{\phi} = L^{\pm}_{\phi}\bar b=\bar b L^{\mp}_\phi$, which implies that $-L^{\pm}$ are two lines in $\tilde \beta$ and $L^{\pm}$ are in $\tilde \alpha$ by looking at their traces. 

Now for a primary $\psi$ such that $\text{Tr\,}L_\psi = 2\sqrt{2}$ the only solution is $L_\psi = \sqrt{2}$, while for the primary $\omega$ where $\text{Tr\,}L_\omega = 0$ we find that 
$$
L_\omega^x = \sqrt{2} \begin{pmatrix}0 & x\\ x^{-1} &0\end{pmatrix},
$$
for some $x\in \mathbb{C}$. Now we know that picking two defects $L\neq L' \in \tilde \alpha$ they should fuse by $L\otimes L' \in \tilde\delta$. Then we can show that 
$$
\text{Tr\,}L_\omega^xL_\omega^y = -4 \implies x = -y.
$$
Therefore, as expected, while there is an ambiguity in the choice of $x \in \mathbb{C}$ there are only two defects $L_\omega^{\pm}=\pm L_\omega^{x}$. Turns out this $x$ is also a constant that depends on a choice of basis. If we assume that the basis is orthonormal then we can show that $|x| = 1$ and we can therefore pick a basis such that $x^2 = 1$. It is not apparent right now that we have a choice for $x \in \mathbb{C}\setminus \{0\}$ So we will fix the complete form of the $L$ defects later (that said we know that these defects are of the form $1\boxtimes N$ and $N\boxtimes 1$ from how they act in the nondegenerate fields). But just so that I have results, here are the lines. $\tilde \alpha$ has two lines $N,N'$, while $\tilde \beta$ also has two lines $\chi\sigma \otimes N,\sigma\chi \otimes N'$, where $N,N'$ act as
$$
\begin{array}{cccccccccccccccc}
N :& \sqrt{2}b&\sqrt{2}&-\sqrt{2}b&\frac{1+b}{\sqrt{2}}&\frac{1-b}{\sqrt{2}}&\sqrt{2}b&-\sqrt{2}&-\frac{1+b}{\sqrt{2}}&-\frac{1-b}{\sqrt{2}}&-\sqrt{2}b&\frac{1+b}{\sqrt{2}}&\frac{1-b}{\sqrt{2}}&-\frac{1-b}{\sqrt{2}}&-\frac{1+b}{\sqrt{2}}&0\\
N' :& -\sqrt{2}b&\sqrt{2}&\sqrt{2}b&\frac{1-b}{\sqrt{2}}&\frac{1+b}{\sqrt{2}}&-\sqrt{2}b&-\sqrt{2}&-\frac{1-b}{\sqrt{2}}&-\frac{1+b}{\sqrt{2}}&\sqrt{2}b&\frac{1-b}{\sqrt{2}}&\frac{1+b}{\sqrt{2}}&-\frac{1+b}{\sqrt{2}}&-\frac{1-b}{\sqrt{2}}&0
\end{array}
$$
The lines in $\tilde \gamma$ are given by $\sigma, \chi$ fusing with $\tilde \alpha \cup \tilde \beta$. And the lines in $\tilde \delta$ are obtained by fusing variations of $N,N'$. At the end we will write all the fusion rules and the relationships will be less obscure.

> **Aside:** It looks like there is a clear way to obtain the defects here. We notice that we could have obtained the same fusion rules after identifying that $D_8$ by taking the lines $1\boxtimes N$ and $N\boxtimes 1$ and then closing under fusion with the $D_8$ lines.



### Quantum Dimension $\phi$

Moving forward we have defects with quantum dimension $\phi = \frac{1+\sqrt{5}}{2}$ the golden ratio. As expected there are $6$ such families (each line splits into three families for $1\boxtimes \phi$, $\phi \boxtimes 1$, and an extra one just like in the $\sqrt{2}$) that act like so on the nondegenerate fields 
$$
\begin{array}{cccccccccccccccccccccccc}
 \varphi  & \varphi  & \varphi  & \varphi  & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & \varphi  & \varphi  & \varphi  & \varphi  & \frac{1}{\varphi } & \frac{1}{\varphi } & \frac{1}{\varphi } & \frac{1}{\varphi } & -\varphi  & -\varphi  & -\varphi  & -\varphi  \\
 \varphi  & \varphi  & \varphi  & \varphi  & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & \varphi  & \varphi  & \varphi  & \varphi  & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & \varphi  & \varphi  & \varphi  & \varphi  \\
 \varphi  & \varphi  & \varphi  & \varphi  & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & \varphi  & \varphi  & \varphi  & \varphi  & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & \varphi  & \varphi  & \varphi  & \varphi  \\
 \varphi  & \varphi  & \varphi  & \varphi  & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & \varphi  & \varphi  & \varphi  & \varphi  & \frac{1}{\varphi } & \frac{1}{\varphi } & \frac{1}{\varphi } & \frac{1}{\varphi } & -\varphi  & -\varphi  & -\varphi  & -\varphi  \\
 \varphi  & -\varphi  & -\varphi  & \varphi  & -\frac{1}{\varphi } & \frac{1}{\varphi } & \frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & \frac{1}{\varphi } & \frac{1}{\varphi } & -\frac{1}{\varphi } & \varphi  & -\varphi  & -\varphi  & \varphi  & \frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & \frac{1}{\varphi } & -\varphi  & \varphi  & \varphi  & -\varphi  \\
 \varphi  & -\varphi  & -\varphi  & \varphi  & -\frac{1}{\varphi } & \frac{1}{\varphi } & \frac{1}{\varphi } & -\frac{1}{\varphi } & -\frac{1}{\varphi } & \frac{1}{\varphi } & \frac{1}{\varphi } & -\frac{1}{\varphi } & \varphi  & -\varphi  & -\varphi  & \varphi  & -\frac{1}{\varphi } & \frac{1}{\varphi } & \frac{1}{\varphi } & -\frac{1}{\varphi } & \varphi  & -\varphi  & -\varphi  & \varphi  \\
 \varphi ^2 & \varphi ^2 & \varphi ^2 & \varphi ^2 & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \varphi ^2 & \varphi ^2 & \varphi ^2 & \varphi ^2 & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \varphi ^2 & \varphi ^2 & \varphi ^2 & \varphi ^2 \\
 \varphi ^2 & \varphi ^2 & \varphi ^2 & \varphi ^2 & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \varphi ^2 & \varphi ^2 & \varphi ^2 & \varphi ^2 & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \varphi ^2 & \varphi ^2 & \varphi ^2 & \varphi ^2 \\
 \varphi ^2 & \varphi ^2 & \varphi ^2 & \varphi ^2 & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \frac{1}{\varphi ^2} & \varphi ^2 & \varphi ^2 & \varphi ^2 & \varphi ^2 & -\frac{1}{\varphi ^2} & -\frac{1}{\varphi ^2} & -\frac{1}{\varphi ^2} & -\frac{1}{\varphi ^2} & -\varphi -1 & -\varphi -1 & -\varphi -1 & -\varphi -1 \\
\end{array}
$$
where we've also included the lines with $\phi^2$ so that we can spot some patterns. On the degenerate primaries these act like
$$
\begin{array}{ccccccccccccccc}
 1 & 1 & 2 \varphi  & \varphi +\frac{1}{\varphi } & 0 & \frac{2}{\varphi } & 1 & 0 & -\varphi -\frac{1}{\varphi } & 1 & 0 & -\varphi -\frac{1}{\varphi } & \varphi +\frac{1}{\varphi } & 0 & -1 \\
 1 & 1 & 2 \varphi  & 1 & 2 \varphi  & \frac{2}{\varphi } & 1 & \frac{2}{\varphi } & 1 & 1 & \frac{2}{\varphi } & 1 & 1 & 2 \varphi  & 1 \\
 1 & 1 & 2 \varphi  & -1 & -2 \varphi  & \frac{2}{\varphi } & 1 & \frac{2}{\varphi } & -1 & 1 & \frac{2}{\varphi } & -1 & -1 & -2 \varphi  & 1 \\
 1 & 1 & 2 \varphi  & -\varphi -\frac{1}{\varphi } & 0 & \frac{2}{\varphi } & 1 & 0 & \varphi +\frac{1}{\varphi } & 1 & 0 & \varphi +\frac{1}{\varphi } & -\varphi -\frac{1}{\varphi } & 0 & -1 \\
 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
 -2 & -2 & 2 \varphi ^2 & 2 & -2 \varphi ^2 & \frac{2}{\varphi ^2} & -2 & -\frac{2}{\varphi ^2} & 2 & -2 & -\frac{2}{\varphi ^2} & 2 & 2 & -2 \varphi ^2 & -2 \\
 -2 & -2 & 2 \varphi ^2 & -2 & 2 \varphi ^2 & \frac{2}{\varphi ^2} & -2 & \frac{2}{\varphi ^2} & -2 & -2 & \frac{2}{\varphi ^2} & -2 & -2 & 2 \varphi ^2 & -2 \\
 -2 & -2 & 2 \varphi ^2 & 0 & 0 & \frac{2}{\varphi ^2} & -2 & 0 & 0 & -2 & 0 & 0 & 0 & 0 & 2 \\
\end{array}
$$



## F-Symbols

Now that we have the defects, it is time to work on figuring out the $F$ symbols between them. Thankfully a lot of the simple lines are the ones in $(\text{Ising}\boxtimes \text{Fib})^2$, so we already know their $F$ symbols which are just outer products. We can hopefully use these to find enough constraints to solve the pentagon equation.

We can start with the invertible lines. Since they form a $D_8$ the $F$ symbols they have should be a $3$-cocycle with values on $U(1)$ but we know that for the $Z_2^2$ part that cocycle (generated by the lines $\sigma \chi, \chi \sigma$) is trivial because it arises from the two Ising $\mathbb{Z}_2$ copies. We know that the line $\sigma$ corresponds to an outer automorphism of the chiral algebra $\mathcal{V}$ that we can gauge so it should be non-anomalous (we have already checked that by modular invariance of the $\sigma$-twisted partition function). Now we are left with the $Z_4$ generated by the line $\chi$ to check for anomalies. We can do this by checking partition functions where we will find that it is non-anomalous.

















