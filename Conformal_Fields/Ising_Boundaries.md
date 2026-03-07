# Conformal Defects in Ising

Time to finally bite the bullet and do this calculation carefully for once! We will calculate the conformal defects of $\text{Ising}$ by looking at boundaries in its folded theory. 

[toc]

# Boundary conditions in Ising

The easiest warm-up we can do is to calculate the Cardy boundary conditions in Ising. This is very easy to do using Cardy's method because they are classified by the representations of the chiral algebra. Namely they are given by
$$
\begin{align*}
\phi_{1} 	&= \frac{1}{2}\psi_1 + \frac{1}{2}\psi_{\eta} + \frac{1}{\sqrt{2}} \psi_N\\
\phi_{\eta} &= \frac{1}{2}\psi_1 + \frac{1}{2}\psi_{\eta} - \frac{1}{\sqrt{2}} \psi_N\\
\phi_{N} 	&= \frac{1}{\sqrt{2}}\psi_1 + \frac{1}{\sqrt{2}}\psi_{\eta},
\end{align*}
$$
where $\psi_k$ is the ishibashi state corresponding to the Virasoro module $k\otimes \bar k$ at $c=\frac{1}{2}$.



# Which Free Boson? 

$\text{Ising}^2$ folded is a $c=1$ theory for obvious reasons. What is not as obvious is which free boson. We build Ising using a free Majorana-Weyl Fermion in $2D$  in which we have gauged the Fermion parity. In particular consider the action
$$
S = \frac{1}{8\pi} \int \psi \bar \partial \psi + \bar \psi \partial \psi
$$
This theory itself has 4 (untwisted) Virasoro primaries coming from the Neveau Schwartz sector. One is the vacuum, two are $\psi$ and $\bar \psi$ themselves with conformal weights $(\frac{1}{2},0), (0,\frac{1}{2})$, and finally there is $\epsilon =i{:}\psi\bar\psi {:}$ with conformal weight $(\frac{1}{2},\frac{1}{2})$. The fermion parity operator is the one that flips the sign of the holonomy of the fermion effectively switching sectors to the Ramond sector, where there are two primaries $\mu, \sigma$ both with conformal weights $(\frac{1}{16},\frac{1}{16})$, out of which only one is invariant under the parity operation. Therefore when we orbifold by the Fermion parity, the only invariant fields are $1,\epsilon, \sigma$, the familiar Ising Primaries. 

So we can build $\text{ising}^2$ by gauging the fermion parity of two Majorana-Weyl fermions. However, two Majorana Fermions after gauging Fermion parity are the $R=2, c=1$ conformal field theory (where the self dual radius is $R^\ast = \sqrt{2}$, in other conventions this is $\alpha'=2 = \frac{1}{2\pi g}$), aka the bozonized free Dirac Fermion. To see this we write the Dirac fermion in $2D$ as
$$
\Psi = \frac{1}{\sqrt{2}}\left(\psi_1 + i\psi_2\right)= \frac{1}{\sqrt{2}}\binom{\psi_1 + i\psi_2}{\bar \psi_1 + i\bar\psi_2},
$$
and then introduce the transformation
$$
\begin{align*}
\frac{1}{\sqrt 2}(\psi_1 + i\psi_2) = e^{i\phi} && \frac{1}{\sqrt 2}(\bar \psi_1 + i \bar \psi_2) = e^{i\bar \phi}.
\end{align*}
$$
Moreover if we write the action as 
$$
S = \frac{1}{8\pi} \int \psi_i \bar \partial \psi_i + \bar \psi_i \partial \psi_i,
$$
we can see that
$$
\langle e^{i\phi(z)} e^{i\phi(w)} \rangle = \frac{1}{2}\left(\langle\psi_1(z) \psi_1(w)  \rangle + \langle \psi_2(z)\psi_2(w) \rangle\right) = \frac{2}{z-w},
$$
in our normalization. Now we can gauge the fermion parity $(-1)^F$ in that that and obtain the $R_{orb}=2$ theory which would be $\text{Ising}^2$. 

## Identifications

We have seen [elsewhere](../Conformal_Fields/Bozon.md) that the orbifolded free boson has two extra primaries $\sigma_{1,2}$ with conformal weights $(\frac{1}{16},\frac{1}{16})$. These are the two states with zero mode $0,\pi$ for $\Theta$. The rest of the primaries of the orbifold (apart from the first excited states of $\sigma$) come from the invariant primaries of the untwisted sector given by vertex operators $V_{nw} = e^{in\theta + iw\tilde \theta}$ as 
$$
v_{nw} = \frac{V_{nw} + V_{nw}^\dagger}{\sqrt 2}
$$
with conformal weights 
$$
\begin{align*}
h = \frac{1}{2}\left( \frac{n}{2} + w \right)^2 && \bar h = \frac{1}{2}\left( \frac{n}{2} - w \right)^2
\end{align*}
$$
in our convention. Therefore we see that
$$
\begin{align*}
\epsilon_1 = v_{2,0} + v_{0,1} && \epsilon_2 = v_{2,0} - v_{0,1}.
\end{align*}
$$
Consider the $S$ the symmetry operator $(\theta,\tilde \theta) \mapsto (\theta,\tilde \theta+\pi)$, because of the periodicity we have that $S^2 = 1$. This acts like so in the untwisted sector
$$
\begin{align*}
Sv_{nw}S = e^{iw\pi} v_{nw}.
\end{align*}
$$

We need to figure out how this symmetry acts on the twisted sector. To do this we can use a baby version of SymTFT and play around. The symmetry we are considering is $\mathbb{Z}_2^2$ and it contains two defects $C,S$, where $C$ is the charge conjugation and $S$ is the symmetry above on the twisted sector. In a second we will work out using the modular data of our CFT that these fuse under a nontrivial cocycle $\omega$, but before we do so, let's play a small general game first.

The fusion category $\mathcal{C} = \text{Vec}_{\mathbb{Z}_2^2}^\omega$ is the symmetry category we want to blow up our CFT with respect to. The bulk theory is $\text{TV}(C)$ which is an anyon theory with lines $Z(\mathcal{C})$ which depends on what $\omega$ is. That said we have pretty much done a lot of the calculation needed for this since we already know that there are two simple objects $\mu \in Z(\mathcal{C})$ that connect to a $C$ line on the Dirichlet boundary. These two lines correspond to the two twisted sector modules with vacua $\sigma_1, \sigma_2$ that we have calculated in the thing I linked at the beginning of the section.

This tells us a lot of information about the cocycle $\omega$ in fact. We know that $\omega \in H^3(\mathbb{Z}_2^2, U(1))$. Now we can calculate it using
$$
H^n(G,U(1)) \cong H^{n+1}(G,\mathbb{Z}),
$$
and also that $H^{2n}(\mathbb{Z}_2,\mathbb{Z}) \cong Z_2$, $H^{0}(\mathbb{Z}_2,\mathbb{Z}) \cong \mathbb{Z}$, and $H^{2k+1}(\mathbb{Z}_2,\mathbb{Z})\cong 0$. Using the Kunneth Formula we know that
$$
H^4(\mathbb{Z}_2\times \mathbb{Z}_2,\mathbb{Z}) \cong \bigoplus_{i+j = 4} H^i(\mathbb{Z}_2,\mathbb{Z})\otimes H^j(\mathbb{Z}_2,\mathbb{Z}) \cong \mathbb{Z}_2^3.
$$
So there are $2^3 = 8$ possible fusion rules that we can find for $\mathcal{C}$. The simple objects in $Z(\mathcal{C})$ are given by pairs $(g,\rho)$ for $g\in \mathbb{Z}_2^2$ and a natural isomorphism $\rho$ with components for each $h\in \mathcal{C}$ given by $(\rho)_h:h\otimes g \to g\otimes h$. This means that only central elements of $\mathbb{Z}_2^2$ (which are all the elements) appear in the Drinfeld center. Therefore $\rho : G \to U(1)$ is a map that satisfies the hexagon equation
$$
\rho(h) \omega(k,g,h)^{-1} \rho(k) = \omega(k,h,g)^{-1} \rho(kh) \omega(g,k,h)^{-1},
$$
which implies that
$$
d\rho(h,k) =  \frac{\rho(kh)}{\rho(h)\rho(k)} = \frac{\omega(k,h,g) \omega(g,k,h)}{\omega(k,g,h)} = \iota_g \omega (h,k).
$$
What we do know is that for $g = C$ there are only two such maps $\rho$. This constrains what $\omega$ can be. Since $\omega$ is a 3-cochain, its contraction by $g$ is a fixed 2-cochain such that $d\rho = \iota_g \omega$, more importantly this cochain is in the kernel of $d$. We also know that that cochain is such that there are only 2 one-chains $\rho$. Notice that $d \iota_g \omega = dd\rho = 0$ but also that $\iota_g \omega \in \text{im\,}d^1$ therefore it must be in the trivial cohomology class as a 2-cochain because we already know that such $\rho$ exists. Out of the $8$ $\omega$ we can constrain to the ones where this contraction is trivial, which will give us a total of $4$ possible cocycles.

Now I'm stuck. Let's bring more CFT data. We know that the partition function of the twisted sector is given by
$$
Z_C(q) = \text{Tr}_{\mathbb{H}} \, C\tilde q^{L_0 -\frac{1}{24}}\tilde {\bar q}^{\bar L_0 -\frac{1}{24}} = \left|\tilde q^{-\frac{1}{24}}\prod_{n\in \mathbb{N}}\frac{1}{1+\tilde q^n}\right|^2 = \left|\frac{\eta(\tilde \tau)}{\eta(2\tilde \tau)}\right|^2 = 2\left| \frac{\eta (\tau)}{\eta(\tau/2)}\right|^2.
$$
Which, by the way is so satisfying because it shows us the presence of the two vacua. 

Here is a strategy on how to calculate the relevant partition function $Z_{C,S}(q) = \text{Tr}_{\mathbb{H}_C} S e^{-\beta H}$.

1. We know that we can undo $S$ by coupling to an appropriately defined flat gauge field $A$ on the action. 
2. This action description can be turned into one for the dual field $\tilde \theta$ where we can read off the action of $S$ by changing $\tilde \theta \mapsto \tilde \theta + \pi$
3. Redo mode quantization with new momenta and everything
4. Calculate the action on the states, and do the trace.























