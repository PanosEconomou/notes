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



 





