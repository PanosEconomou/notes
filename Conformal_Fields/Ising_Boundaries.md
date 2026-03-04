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

We have seen [elsewhere](../Conformal_Fields/Bozon.md) that the orbifolded free boson has two extra primaries $\sigma_{1,2}$ with conformal weights $(\frac{1}{16},\frac{1}{16})$. These are the two states with zero mode $0$ for $\Theta$, but $0,\pi$ for $\tilde \Theta$. The rest of the primaries of the orbifold (apart from the first excited states of $\sigma$) come from the invariant primaries of the untwisted sector given by vertex operators $V_{nw} = e^{in\theta + iw\tilde \theta}$ as 
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
Consider the $S$ the symmetry operator $(\theta,\tilde \theta) \mapsto (\theta,\tilde \theta+\pi)$, because of the periodicity we have that $S^2 = 1$. This acts like so
$$
\begin{align*}
Sv_{nw}S = e^{iw\pi} v_{nw} && S\sigma_1 S = \sigma_2.
\end{align*}
$$
























