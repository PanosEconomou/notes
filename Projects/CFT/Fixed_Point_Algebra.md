# Fixed Point algebra

Here we calculate the Fixed point algebra $\mathcal{W}$ of $\mathcal{V} = \text{Vir}\oplus \text{Vir}$ by the $\mathbb{Z}_2^2$ generated through exchange $S$ and the diagonal $\eta$ action $H = \eta\boxtimes \eta$. We do this by calculating the decomposition of the characters and then eventually putting everything together to find the S-matrix.

[toc]

# Character Decompositions

We will find the irreducible modules of the fixed point algebra $\mathcal{W}$ by decomposing the irreps of $\mathcal{V}$ into eigenspaces by $S,H$ and then calculate the characters of these modules by identities of Virasoro characters.

**<u>Lemma:</u>** Each irreducible highest weight unitary representation $V$ of $\mathcal{V}$ can be written as a product of two unique irreducible highest weight representations $i,j$ of $\text{Vir}$
$$
V = V_{i,j} \coloneqq v=i\otimes j.
$$
We will use this a lot in our decompositions.

**<u>Corollary:</u>** The character of the $\mathcal{V}$-representation $V_{ij}$ is given by
$$
\chi_{V_{ij}}(q) = \chi_i(q) \chi_{j}(q),
$$
where $\chi(q)$ denote the $\text{Vir}$ characters. 

## Fixed point under $S$

We will calculate the fixed point algebra in two steps. The first one is to calculate the intermediate algebra $\mathcal{W}\subset \mathcal{V}^S \subset \mathcal{V}$ where $\mathcal{V}^S$ is the fixed point algebra under $S$.

**<u>Definition:</u>** Given a representation $V_{ij}$ of $\mathcal{V}$, the **exchange map** $S: V_{ij} \to V_{ji}$ is defined such that  if $v_i \in i$ is the vacuum of the representation $i$ 
$$
Sv_i\otimes v_j = v_{j} \otimes v_{i}.
$$
and it commutes with the representation of the diagonal Virasoro algebra in $\mathcal{V}$. 

This lifts to a Lie algebra automorphism on $\mathcal{V}$ such that if  $l_n^k$ are the generators of the $k^{\text{th}}$ copy of $\text{Vir}$ in $\mathcal{V}$ then $l_n^1 S = Sl_n^1$ and $S^2 = 0$.

Namely we can work in a different basis in $\mathcal{V}$ given by $L^{\pm}_n = l_n \otimes 1 \pm 1\otimes l_n$, therefore we see that
$$
\begin{align*}
SL_n^{\pm} = \pm L_n^{\pm}S. 
\end{align*}
$$
**<u>Definition:</u>** The **fixed point subalgebra** $\mathcal{V}^S \subset \mathcal{V}$ is defined by
$$
\mathcal{V}^S = \{L \in \mathcal{V} \mid SLS = L\}.
$$
Now we can actually start working out how the representations of $\mathcal{V}$ decompose into representations of $\mathcal{V}^S$.

**<u>Proposition:</u>** Let $i$ be an irreducible unitary highest weight representation of $\text{Vir}$ with highest weight vector $v_i$. Then the representation $V_{ii} = i\otimes i$ of $\mathcal{V}$ splits into two representations $V_{ii}^{\pm}$ of $\mathcal{V}^S$, i.e. $V_{ii} = V_{ii}^+ \oplus V_{ii}^-$ such that 
$$
\begin{align*}
V_{ii}^+ = \mathcal{V}^S v_i\otimes v_i && V_{ii}^- = \mathcal{V}^S L^-_k v_i\otimes v_i,
\end{align*}
$$
where $k \in \mathbb{Z}$ is such that $L_k^- \in \mathcal{V}$ is the first generator where $L_{k}^-v_i\otimes v_i \neq 0$. In addition, $v_i\otimes v_j$ and its descendant are the highest weight vectors of the corresponding representations.

***Note:*** Usually $k=1$ unless $i$ is the vacuum module in which case $k=2$. 

***Proof:*** We know that since $v_i$ is cyclic in $i$, for each $u \in V_{ii}$ in the level basis of $V_{ii}$ there a string of generators $U \in \mathcal{V}$ such that $u = U v_i\otimes v_i$. Then if $U \in \mathcal{V}^S$ we have that $u \in V_{ii}^+$. If $U\notin \mathcal{V}^S$ we can proceed as follows. Take $L^-_k$ be the generator with the property in the proposition, and consider $\alpha_k \in \mathbb{C}$ defined by $[(L^-_k)^\dagger,L_{k^-}] v_i\otimes v_i = \alpha_k v_i\otimes v_i$. Then we define $\hat U = \frac{1}{\alpha_k} U (L_{k}^{-})^\dagger$. Then, we can see that $\hat U \in \mathcal{V}^S$ and that the $u = \hat U L_{k}^-v_i\otimes v_i$. 

To show that they are irreducible we see that they are cyclic subspaces of a vector space with an $\mathcal{V}^S$ invariant nondegenerate Hermitian inner product, therefore they are highest weight cyclic representations which implies that they are irreducible. Otherwise the inner product would be degenerate.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
But these are not the only irreps that appear here! Let's see what happens in the other case.

**<u>Proposition:</u>** Let $i,j$ be irreducible unitary highest weight representations of $\text{Vir}$ then there exists a unique, up to isomorphism, irreducible representation $V_{ij}^S$ of $\mathcal{V}^S$ such that it is isomorphic to $V_{ij}$ as a Virasoro module.

***Proof:*** We will consider the representation $V_{ij}\oplus V_{ji}$, and show that it decomposes into $\mathcal{V}^S$ irreducible representations that are isomorphic to $V_{ij}$ as Virasoro modules. Let $v_i,v_j$ be the highest weight vectors of $i,j$ and consider $v_{ij}^{\pm} = v_i \otimes v_j \pm v_j \otimes v_i$ and consider the modules
$$
V_{ij}^{\pm} = \mathcal{V}^S v_{ij}^{\pm}.
$$
Notably, $V_{ij}^{\pm}$ are no longer $\mathcal{V}$ modules because $L_0^{-}$ permutes them. However, by construction, they are $\mathcal{V}^S$ modules. We want to show that they are highest weight. To do so we notice that any generator $L_k^+$ will, either annihilate or increase the $L_0^+$ weight of $v_{ij}^{\pm}$, and so will any generator in $\mathcal{V}^S$ formed by a string of $L^-_k$. However, we need to show that any positive mode of $\mathcal{V}^S$ as a VOA annihilates $v_{ij}^{\pm}$. This is true because we have just showed that $v_{ij}^{\pm}$ has the smallest conformal weight, so if $T$ annihilates everything, then so do the rest of the positive modes of any current since they must satisfy $[L_0,J_n] = -nJ_n \implies L_0 J_nv_{ij}^{\pm} = (h_i + h_j -n)J_0v_{ij}^{\pm}$ which would be less for positive $n$. 

Finally, we show that the two modules are isomorphic. Since they are cyclic, highest weight, unitary modules, they are irreducible. They also have the same highest weight, as well as the action of any generator of $\mathcal{V}^S$ does not depend on $\pm$. Such a module is therefore isomorphic as a Virasoro module to $V_{ij}$.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$


Now we can actually calculate the characters! Here is some preliminary gruntwork that we will use religiously. 

**<u>Lemma:</u>** Let $i,j$ be irreducible representations of $\text{Vir}$ then for $L_0 \in \mathcal{V}^S$ and $q \in \mathbb{C}$
$$
\text{tr}_{V_{ij}} Sq^{L_0} = \delta_{ij} \text{tr}_{i} q^{2l_0}.
$$
***Proof:*** Let $B_{ij}$ be the a basis of $V_{ij}$. Then we have that since $v\in V_{ij} \implies Sv \in V_{ji}$ then $\langle Sv,q^{L_0}v \rangle = 0$ since the two modules are orthogonal. Therefore
$$
\begin{align*}
\text{tr}_{V_{ij}}S q^{L_0} = \sum_{v \in B_{ij}} \langle Sv,q^{L_0} v \rangle =  \delta_{ij} \text{tr}_{V_{ii}}S q^{L_0}
\end{align*}
$$
Now we just need to calculate the trace for $V_{ii} = i\otimes i$. We can decompose $i = \bigoplus_{n=0}^\infty i^n$, where $i^n$ is the $n^{\text{th}}$ eigenspace of $l_0 \in \text{Vir}$. As a result, we have that
$$
V_{ii} = \bigoplus_{n=0}^{\infty} \bigoplus_{m=0}^{n} i^{m}\otimes i^{n-m},
$$
when we try to decompose $V_{ii}$ into eigenspaces of $L_0 \in \mathcal{V}$. So we can write the trace as
$$
\text{tr}_{V_{ii}} Sq^{L_0} = \sum_{n=0}^{\infty} q^{2h_i +n} \sum_{m=0}^{n} \text{tr}_{i^m\otimes i^{n-m}} S.
$$
 To calculate the innermost trace we can do a similar trick! Notice that vectors in different eigenspaces are also orthogonal. So if $v \in i^{m}\otimes i^{n-m}$ then $Sv \in i^{n-m}\otimes i^{m}$ which implies that
$$
\tr_{i^m \otimes i^{n-m}} S = \delta_{m,n-m} \tr_{i^m\otimes i^m} S.
$$
We can simplify this further, since if we pick an orthogonal basis $B$ for $i^m$ then
$$
\begin{align*}
\text{tr}_{i^m \otimes i^m} S = \sum_{v,u \in B} \langle v\otimes u,u\otimes v \rangle = \sum_{v,u \in B} \delta_{u,v} = \text{dim\,} i^m.
\end{align*} 
$$
Putting everything together we have that
$$
\text{tr}_{V_{ij}} Sq^{L_0} = \delta_{ij} \sum_{n=0}^{\infty} q^{2h_i +n} \sum_{m=0}^{n} \delta_{n-2m,0} \text{dim\,}i^m = \delta_{ij} \sum_{m=0}^{\infty} q^{2h_i +2m} \text{dim\,}i^m = \delta_{ij}\text{tr}_{i}q^{2l_0}.
$$

$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$



We will use this property a lot in the upcoming calculations of characters.

**<u>Proposition:</u>** The $\mathcal{V}^S$ characters of $V_{ij}^\pm$ are given by
$$
\begin{align*}
\chi_{V_{ii}^{\pm}}(q) &= \frac{1}{2} \left[ \chi_i(q)^2  \pm \chi_{i}(q^2)\right]\\
\chi_{V_{ij}^S}(q) &= \chi_i(q) \chi_j(q),
\end{align*}
$$
where $\chi_i$ is a Virasoro character. 

***Proof:*** We use the previous lemma and the first lemma to write the following system of equations
$$
\begin{align*}
\chi_{i}(q)^2 &=\chi_{V_{ii}}(q) = \text{tr}_{V_{ii}^+\oplus V_{ii}^{-}} q^H = \text{tr}_{V_{ii}^+} q^H + \text{tr}_{V_{ii}^-} q^H = \chi_{V_{ii}^+}(q) + \chi_{V_{ii}^-}(q)\\
\chi_{i}(q^2) &= \text{tr}_{V_{ii}^+\oplus V_{ii}^{-}} Sq^H = \text{tr}_{V_{ii}^+} q^H - \text{tr}_{V_{ii}^-} q^H = \chi_{V_{ii}^+}(q) - \chi_{V_{ii}^-}(q).
\end{align*}
$$
Then we solve. For the characters of $V_{ij}^S$ we have that they representations are isomorphic as Virasoro representations to $V_{ij}$ so they must have the same Virasoro characters.
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$

## The remaining irreps

What he have found is a description of the simple objects in $\text{Rep}(\mathcal{V}^S)$. **Have we found all of them?** The answer is no! In fact, we have found $6\times 2 + 6 \times 5/2 = 27$ simple objects. There are $12$ more irreps but these do not appear in the Hilbert space of this theory. How do we find them? 

The remaining representations are hidden in the $S$ twisted sector of the theory with maximal chiral algebra $\mathcal{V}$. Here is why we should expect that. Since $\mathcal{V}^S$ is invariant under the $S$ action, we should be able to decompose the twisted sectors into representations of $\mathcal{V}^S$ which each carrying a different action of $\mathbb{Z}_2 = \{1,S\}$. Let's explore this a bit more precisely.

**<u>Theorem:</u>** Let $V$ be a representation of $\mathcal{V}$ carrying an action of $\mathbb{Z}_2$ furnished by $S$. Then
$$
V \cong V^S \otimes r_V,
$$
 where $r_V$ is a representation of $\mathbb{Z}_2$ and $V^S$ is a representation of $\mathcal{V}$.

This powerful fact about representations intuitively means that we can split them into the action of the group and the action of the fixed point algebra. This is a corollary of the fact that taking a group $G$ that acts on a VOA $\mathcal{V}$ we can do a decomposition
$$
\mathcal{V} = \bigoplus_{r \in I^G} \mathcal{V}^r,
$$
where $I^G$ is the set of nonisomorphic irreducible representations of $G$ and $\mathcal{V}^r$ is the subalgebra where $G$ acts on it through $r$. Now consider the twisted Hilbert space of our model $\mathcal{H}_S$, i.e. the set of operators on which the line $S$ can end on. It too can be decomposed into irreducible representations of $\mathcal{V}^S$ that are simply multiplied by some irreducible representation of $\mathbb{Z}_2$. There is no reason why we shouldn't be able to find irreducible representations of $\mathcal{V}^S$ there that we didn't find in the untwisted Hilbert space. 

To find them we will use the orbifold induction procedure. We know that there are two irreducible representations of $\mathbb{Z}_2$ both of which are 1-dimensional, so this makes our lives easier. The CFT technique that we will use to come up with them is the idea that whatever we calculate in a theory with an $S$ insertion on the sphere, we should be able to calculate it in its double cover after removing the $S$ line. Finding the operators that survive this double covering business will lead us to finding more irreducible representations. 

> The details of this are worked out [here](https://notes.panos.wiki/Projects+CFT+Tricritical_Ising). At some point I will write a more comprehensive summary, but for now here are the results.

**<u>Proposition:</u>** To each irreducible unitary highest weight representation $i$ of $\text{Vir}$ we can assign two more irreducible representations $V_i^{\pm}$ of $\mathcal{V}^S$ with characters
$$
\chi_{V_i^{\pm}}(q) = \frac{\chi_i(\sqrt q) \pm e^{\pi i (h_i - \frac{c}{24})}\chi_i(-\sqrt q)}{2},
$$
where $\chi_i(q)$ is the character of $i$, $h_i$ is its conformal weight, and $c$ is the central charge of $\text{Vir}$.

A physics-first way of showing that the irreducible representations we have now calculated form a complete set of non-isomorphic irreducible representations for $\mathcal{V}^S$ 



## Fixed point under $H$

We want to now find the fixed point subalgebra $\mathcal{W} \subset \mathcal{V}^S$ which is also invariant under $H$. Conceptually we repeat the same idea as before. We only need to find out how the modules of $\mathcal{V}^S$ split under the action of $H$. 

First, let's understand the action of $H$ on $\mathcal{V}^S$. 

**<u>Definition:</u>** Let $\mathcal{V}^S$ be the fixed point algebra of $\mathcal{V}$ under the automorphism $S$. Then the fixed point algebra under $S,H$ of $\mathcal{V}$ is given by
$$
\mathcal{W}=\{L \in \mathcal{V}^S \mid HLH = L\}.
$$
**<u>Lemma:</u>** $\mathcal{W}= \mathcal{V}^S$.

***Proof:*** As a Verlinde line $\eta_i$ commutes with all the generators $l_n^i$ for $i=1,2$. Therefore $H = \eta_1\eta_2$ commutes with $L_n^{\pm}$ which means that it must commute with $L \in \mathcal{V}^S$.
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
So we are done!

**<u>Proposition:</u>** Let $i,j$ be irreducible highest weight unitary representations of $\text{Vir}$, then for any representation $V \in I^S$ generated by $i,j$ the map $H:V\to V$ is $H = h_{ij} \text{id}_V$ where
$$
h_{ij} = \frac{s_{i0}s_{j0}}{s_{00}^2},
$$
where $s$ is the $\text{Vir}$ $S$-matrix.



# S-Matrix of Fixed Point Algebra

All we need to do now is to calculate the $S$-matrix for the fixed point algebra irreducible modules. This is straightforward since we know the $S$-matrix for the Virasoro characters, and these are given in terms of them.

**<u>Proposition:</u>** Let $s$ be the Virasoro $S$-Matrix. Then the $S$-Matrix for $\mathcal{W}$ is given by the symmetric matrix with the following elements
$$
\begin{align*}
S_{V_{ij}^S,V_{kl}^S} &= s_{ij} s_{kl} + s_{ik}s_{jl}\\
S_{V_{ij}^S,V_{kk}^\pm} &= s_{ik}s_{jk}\\
S_{V_{ii}^{a}, V_{jj}^{b}} &= \frac{1}{2} s_{ij}^2\\
S_{V_{ii}^{a}, V_{j}^{\pm}} &= \pm \frac{1}{2} s_{ij}\\
S_{V_{i}^{a}, V_{j}^b} &= \frac{1}{2}ab\hat t_{ij},
\end{align*}
$$

where $a,b \in \{\pm1\}$, the remaining elements vanish, and the matrix $\hat t$ is given by
$$
\hat t = t^{\frac{1}{2}} st^2 st^{\frac{1}{2}},
$$
with $t$ the Virasoro modular $t$ matrix.



One check we can do now, is to find the modular mass matrix for the theory with maximal chiral algebra $\mathcal{V}$ written in terms of irreducible representations of $\mathcal{V}^S$.

**<u>Proposition:</u>** The nonzero components of the modular mass matrix in question are given by 
$$
\begin{align*}
M_{V_{ii}^{a},V_{ii}^{b}} = M_{V_{ij}^S,V_{ij}^S} = 1.
\end{align*}
$$
for $a,b \in \{\pm 1\}$.

By direct calculation we can show that this is modular invariant under the $S$ matrix we have introduced above, which is pretty cute. Finally, let's then use this $S$-matrix to write out some Cardy states for this theory.

**<u>Proposition:</u>** Let $I$ be the set of irreducible highest weight unitary representations of $\mathcal{V}^S$ such that for any $V \in I$ the mass matrix $M_{VV} = 1$, then for any $V \in I$ the following state satisfies Cardy's conditions
$$
\psi_{V} \coloneqq \sum_{U \in I} \frac{S_{UV}}{\sqrt{S_{1U}}} \phi_U,
$$
where $\phi_U$ is the ishibashi state corresponding to the module $U$ and $1\in I$ is the vacuum module. 

**<u>Corollary:</u>** Any state of the form $\psi_V$ has $g$-function
$$
g_V = \frac{S_{1V}}{\sqrt{S_{11}}}.
$$
Namely this gives us that the g-functions of these Cardy states are
$$
\begin{matrix} 
\frac{1}{\sqrt{5-\sqrt{5}}} &
\frac{1}{\sqrt{5-\sqrt{5}}} &
\frac{1}{2} \sqrt{1-\frac{1}{\sqrt{5}}} &
\sqrt{\frac{1}{10} \left(\sqrt{5}+5\right)} &
\sqrt{\frac{1}{10} \left(5-\sqrt{5}\right)} \\
\frac{\sqrt{5}+5}{2 \sqrt{25-5 \sqrt{5}}} &
\frac{1}{\sqrt{5-\sqrt{5}}} &
\sqrt{1+\frac{2}{\sqrt{5}}} &
\sqrt{\frac{1}{10} \left(\sqrt{5}+5\right)} &
\frac{1}{\sqrt{5-\sqrt{5}}} \\ 
\sqrt{1+\frac{2}{\sqrt{5}}} & 
\sqrt{\frac{1}{10} \left(\sqrt{5}+5\right)} &
\sqrt{\frac{1}{10} \left(\sqrt{5}+5\right)} &
\sqrt{\frac{1}{10} \left(5-\sqrt{5}\right)} &
\frac{2}{\sqrt{5-\sqrt{5}}} &
\end{matrix}
$$
Another check we can make is which ones could be global fixed points under relevant operators. This is relatively easy. We just need to check if they contain any ishibashi states that have conformal weight between 0 and 1. If they don't then there would be no relevant operators under RG. 

Unfortunately they all contain multiple states operators with conformal weight less than 1. But no matter, we keep going strong.











