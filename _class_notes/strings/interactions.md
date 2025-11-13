# Interactions

We want our string field theory to be conformal with a given central charge. So let's study some CFT in order to see what interactions look like in this place. 

A string theory defines a CFT. What we mean is that a physical state for $a=1$ has the property that
$$
\begin{align*}
L_n \psi = 0 && L_0 \psi = \psi.
\end{align*}
$$
This means that any physical state has the form that the stress tensor vanishes in correlation functions, and, more importantly $\psi$ is the highest weight state for a Virasoro irreducible representation of weight $h=1$. 

Virasoro is the smallest symmetry algebra for a CFT. However, from the quantization and embedding pictures it could be possible that there are conserved currents in the target space that might descend into primaries! These will also be conserved currents of our theory and we can use them to form bigger symmetry algebras that are affine. 

One way to these groups is to define the Coxeter operator of the algebra using a Cassimir. 

# No more ghosts

We have defined the conserved charge under the BRST transformation
$$
Q = -\kappa^\dagger \sum_{m\neq 0} \alpha_{-m}^- c_m + Q_0 + Q_{-1},
$$
where $Q^2 = 0$ and $\{R,Q\} = S$ with some $R^2 = 0$ then we say that the cohomology of $Q$, i.e. 
$$
\mathbb{H}(Q) \coloneqq \{\psi \in \mathbb{H} \mid Q\psi = 0, \text{ i.e. }\phi \sim \phi + Q\psi \}
$$
is in the kernel of $S$.



# Strings in any Backgrounds

We can still write the Polyakov action in arbitrary background manifolds $(M,G)$ like this
$$
S(X,\gamma) = -\frac{T}{2} \int_\Sigma \ast \text{tr}_{\gamma}X^\ast G,
$$
 where $X:\Sigma \to M$ is an embedding of a Riemann surface $(\Sigma,\gamma)$. But we can write other things down that integrate to a volume. For example, we can define any two form $B \in \Omega^2(M)$ and any function $\Phi:\Sigma \to \mathbb{R}$ and extend our action by
$$
S(X,\gamma) = \frac{T}{2} \int_\Sigma \ast \text{tr}_{\gamma}X^\ast G + iX^\ast B + \ast \Phi R_\gamma,
$$
where $R_\gamma$ is the Ricci scalar on $(\Sigma,\gamma)$, which will give us something proportional to the Euler characteristic. Notice that the variation of a 2-form $B$ is the total derivative of a 1-form because it needs to be closed. 

Now we can check if this theory is conformally invariant in the quantum sense. So we need to quantize by expanding our fields around some point $p\in M$. We can use tangent vectors to talk about these things. So if we pick $p\in M$ we can find a basis of vectors that have integral curves as geodesics. We can write everything in that vielbein. That simplifies the action a lot. Let's write that vielbein as $\phi$.  

*Why do we need Weyl invariance so much, why is Virasoro a problem? Having nonzero total central charge means ghosts and negative states?*

Let's talk about genus $g$ surfaces. On a torus with genus $g$ we can define holomorphic forms $\omega_i$ for $0<i\leq g$ such that 
$$
\int_{a_j} \omega_i = \delta_{ij}
$$
where $a_i$ is the $i^{\text{th}}$ a-cycle. We can calculate the matrix 
$$
\Omega_{ij}=\int_{bi} \omega_j
$$
What is this $\Omega$? Well it is $\tau$ but for higher genus! In fact this is how we defined $\tau$ in the first place. So our amplitudes are really only going to depend on $\Omega$ up to genus $2$. 



# A string theory that could work  

Let's set $\alpha' = 1/2 \implies T = 1/\pi$. Then we will add fermions on our theory Let's add some fermions to our theory . We can do this by adding fermions on the worldsheet along the bosons. We do that in an action 
$$
S = \int_{\Sigma} \ast \langle dX\wedge \ast dX  \rangle + \ast \langle  \psi, \centernot \partial \psi\rangle_{d}'.
$$
Turns out there is a symmetry that mixes the fermions and bosons. This is a super-symmetric transformation with two fermionic components $\epsilon_{\pm}$. This has a current
$$
J = \langle\psi_+ d \psi_+\rangle\otimes dz + \langle\psi_- d\psi_-\rangle \otimes d\bar z.
$$
We can play the same game and canonically quantize this. There are two spin structures one can add on the cylinder therefore we will need to include both in our Hilbert space. 

What are the physical degrees of freedom? We can do lightcone quantization again, in exactly the same manner as in the bosonic case. We would find that the critical dimension this time is 10. We see  that if we are outside of $D=10$ the Lorenz generators can't become nonanomalous in any cohomology of our big Hilbert space. The procedure of gauge fixing in general is called the GSO projection, which is effectively gauging the parity operator. After doing this we can see that we have an equal number of bosons and fermion states at each sector.    



 ## Writing Gauge invariant theories with spinors

If we want to have an action that has a bunch of fields with spin greater than 1 we need to introduce ghosts that impose gauge fixing. So in essence we introduce more dynamical degrees of freedom such that



## Compactifications

We can study an embedding in a space where one direction is compact. If our target space has $D$ dimensions we have assume something like $M = \mathbb{R}^{D-2,1}\times S^1$. Depending on the radius of the puny $S^1$ factor we can actually write a theory that the associated modes have a discrete spectrum. Which is awesome! It ends up looking a lot like particles. One interesting aspect of this construction is gauging things. In some sense we can change the compactification radius and the theory remains invariant by going to $R\mapsto \alpha'/R$. In fact this can be though of as gauging the discrete group $O(r,\mathbb{Z})$ where $r$ is the number of compactified dimensions. So in this case $T$-duality is simply $\mathbb{Z}_2$ gauging. 

The interesting thing from T-duality is that if we start with a Neumann condition, i.e. string that should not be fixed anywhere, we find that it ends up being fixed in an arbitrary point. And you're like: wtf? How is it possible that there is a special point in string spacetime? This breaks the most fundamental assumption of relativity. The resolution could be that actually we didn't account for everything in the Neumann theory. Instead when we do the T transformation the strings are fixed into other objects called "D-branes" that are also dynamical objects, and they are just really heavy. So at the heaviest limit they disappear from the T-dual. 



## T-Duality in Superstrings

The corresponding duality is 
$$
\begin{align*}
\psi_L \mapsto \psi_L && \psi_R \mapsto -\psi_R.
\end{align*} 
$$
Let's see what's going on. Surprisingly this is very similar to some version of a GSO projection. Let's find the unitary operator $U$ in the Ramond sector that implements this transformation. We expand into modes and whatnot and then we obtain that
$$
U_R = (-1)^{F},
$$
which looks even more similar to GSO. One way we can describe this is using the zero modes. The ramond sector has 2 classes of zero modes, so we can write 
$$
U_R = (-1)^{\hat F} e^{i\theta} \Gamma^1 \Gamma^{11},
$$
where $\hat F$ is the fermion number operator for the nonzero frequencies, and $\theta$ is some phase that remains undetermined atm. The latter part is simply changing the sign of the vacuum state. So yeah. I don't know why we want to do this decomposition, but we can.

Now take any ramon vacuum $v \in \mathcal{H}_R$ then there must exist an operator $S_{v}$ such that $S_v \omega = v$ where $\omega$ is the the $SL(2,\mathbb{C})$ invariant vacuum of our theory. What happens to the generators of the supersymmetry generators? Well we only need to to do $U^{-1}S_{v}$ to obtain the T dual state. However, this helps us rephrase the supersymmetry charges under T duality (BTW notice that $U^{-1} S_v= - U^\ast S_V$).  The interesting thing is that under mapping the charges, we see that the chirality changes. So a T duality maps type IIB to type IIA.

We can introduce a transformation that interchanges the chirality of our bosons simply by flipping our coordinates. We have been doing something weird though. We are parameterizing our closed string by $\sigma \in [0,\pi]$. So we can introduce $\Omega$ which is the map $\sigma \mapsto \pi -\sigma$.



Kalb Ramond terms are the B's

Look at Myer's terms, these appear when we try to write the brane action for N branes on top of each other. Doing T-duality we see that we must include more terms. When we do T duality we have massless modes that need to persist. This implies the existence of new fields that have massless excitations. These could couple in weird ways to our fields that we can later pick back up. These are the fields $\Phi$.  

You can calculate the 







