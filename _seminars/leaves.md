## Leaf Amplitudes

The point of celestial holography is to map celestial amplitudes to correlators in the boundary CFT. There is the pretty identification that the Lorentz group in 3,1 is the same as the conformal group in 2. What we can say is that certain celestial amplitudes end up being singular due to translation invariance, so it isn't directly obvious on how to map these amplitudes to things in the CFT.

The idea is to use celestial amplitudes to to construct leaf amplitudes, and then move on to construct a CFT dual who's correlation functions are leaf amplitudes. We will call this the Leaf CFT. 

The idea is that a massless scalar field in the bulk can be expressed as fields (through a Mellin transform) that will end up being directly dual to conformal primaries in the boundary. 
$$
\phi_{\hat p}^\Delta(x) = \int_0^\infty d\omega^\Delta e^{i\omega \hat p\cdot x - \epsilon \omega} = \frac{C(\Delta)}{(\hat p \cdot x + i\epsilon)^{\Delta}}.
$$
If we choose a $\Delta \in 1 + i\mathbb{R}$ we obtain a complete basis for the scalar fields! Under Lorenz transformations they transform like CFT operators. This is amazing so we can use CFT techniques to calculate scattering amplitudes. 

One type that is interesting is a maximum helicity violating amplitude. If we write this down in the CFT side we will get that this amplitude $A$ looks a lot like a CFT correlator but it includes delta functions! WE can calculate that
$$
A(z_1,z_2,z_3) \propto \delta(\bar z_{13}) \delta(\bar z_{23}).
$$
 The n point version looks like 
$$
A = \frac{\omega_1 \omega_2}{\omega_3 \cdots \omega_n} \frac{z_{12}^4}{z_{12}z_{23} \cdots z_{n1}} \delta^4\left(\sum_{j=0}^n p_j  \right).
$$
The idea is to break up the delta function in some regularization over $\text{AdS}_3$ subspaces which are called leaves. In particular this process is called a leaf decomposition.  Doing this we will obtain some kind of some kind of integral that we call $L$ which is given by
$$
L(z_i,\bar z_i) = \frac{z_{12}^4}{z_{12}z_{23} \cdots z_{n1}} \int_{\text{AdS}_3}d^3\hat x\, \prod_{j=1}^n \frac{C(\bar h_j)}{(p_j \cdot \hat x + i\epsilon)}.
$$

## Leaf CFT

The idea here is to create a CFT that yields these $L$'s as correlation functions. The CFT is going to have a Liouville sector and a free fermion sector. The free sector produces the first prefactor, and the Louville sector the second. 

For the fermionic sector we can construct currents for $SO(n)$. So basically we have an $\mathfrak{so}(n)$ WZW model at level 1 (I think). Then we take $N\to \infty$ in order to  obtain correlation functions for the first part. 

The other half is Liouville. That is a CFT that has a Lagrangian with one scalar field that defines a metric on a sphere.  