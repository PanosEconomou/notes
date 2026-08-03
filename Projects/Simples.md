# Simples

A collection of "simple" examples for multiple stuff I have encountered. Unlike other notes that are supposed to be expository, this is strictly so that I can remember wtf to do in simple cases. 

[toc]

# Defect RG Flows

Examples related to defect RG in multiple contexts. 

## Concepts

A couple of interesting and important things to have reference for

### Technicalities of conformal condition depend on the axis

In particular based on where the conformal defect is placed (we usually put it along an axis or a circle because it makes things easier) the technical definition changes. We call L one side and R the other.

1. **Topological:** $T_{L} = T_R$ and $\bar T_L = \bar T_R$. This means that the stress tensor doesn't know where the defect is.

2. **Conformal:** $(T-\bar T)_L = (T-\bar T)_R$, means no energy lost to the defect. This follows because conformal transformations are invariant alongside it, then one can look at the action and force it to recover this condition (which is sensitive on the axis chosen). Interesting things are that in the presence of a conformal defect, a primary has a nonzero one point function that depends on the perpendicular distance to the defect to get something like

   
   $$
   \langle \phi(z)\rangle = \frac{b}{|x_\perp|^\Delta}.
   $$

3. **Factorized:** is another solution of conformal defects, typically given as sums of outer products of boundary states, and in this case it splits the spacetime in 2. 

[Transmission coefficients](https://arxiv.org/abs/hep-th/0611296) are nice tools to use to calculate these stuff.

### Weak and Strong symmetry

Some further classification on symmetries

1. **Weak Symmetry:** what we would typically call a symmetry, that is a defect $D$ is symmetric with respect to a defect $N$ if $N$ can be deformed through $D$ at no cost. i.e. they commute as operators in the bulk Hilbert space. 
2. **Strong Symmetry**: absorption of a defect. That is $N\otimes D = D = D\otimes N$.

### Anomaly localized on a defect

 This is basically an anomaly that can be perceived in a twisted Hilbert space. For example the ising duality carries such an anomaly when calculating the $F$ symbol with the $\eta$ stuff. But you can't detect this anomaly in the bulk, which is why you can totally gauge the $\mathbb{Z}_2$ on Ising but not the entirety of Ising. 

Sometimes people represent by $U_L$ and $U_R$ defect operators ending on the twist line from one side and the other. In this case, this anomaly becomes something of the form
$$
U_LU_R = \omega U_RU_L
$$
when $\omega$ is classified by some appropriate $U(1)$ valued cohomology.

The interesting insight is that anomalies are preserved under RG, so we should be able to see this anomaly localized in the dynamical defect the topological one flows to because of anomaly matching which can constrain the dynamics of the UV trajectory. A nice exposition to this is found [here](https://arxiv.org/abs/2412.18652).
