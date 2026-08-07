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

3. **Factorized:** is another solution of conformal defects, typically given as sums of outer products of boundary states, and in this case it splits the spacetime in 2

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



### Fusion of conformal defects

Placing two conformal defects in parallel lead to the correlation function depending on their separation (unlike the case with topological defects where it is just the product of their quantum dimensions). Let's figure out how to study this. Placing two conformal defects at a distance $r$ on sphere should expect the total energy to be
$$
E = E_{\text{bulk}}(\tau) + \varepsilon(r,\tau),
$$
with the second term being the contribution from the pair of defects. The first term (by the way) should be zero or just some shift, because conformal invariance relates all the spheres, so it can't depend on the sphere radius. We know that $E$ has length dimension $-1$, and $r$ is the only length we have access to. So the only way to pull out an energy would be to do $1/r$. 

Therefore the idea of Bachas and Brunner ([0712.0076](https://arxiv.org/abs/0712.0076)) was to control for that energy and ignore it since at the end their product would result in a path integral diverging by $e^{-\epsilon(r)}$ so they simply suggest defining the product by stripping this factor
$$
D\otimes' N = \lim_{r\to 0} e^{\int \varepsilon(r) dt} D(r) N(0).
$$
 For some reason they showed that this is a direct sum.



### Factorization

Typically deforming by a single bulk operator in time produces the unfortunate result of creating a factorizing defect. That can't be topological because it needs g function less than 1 by monotonicity. But more importantly in the deep IR it ends up factorizing because adding high coupling locally makes it cost a lot of energy to push an interaction through it, I guess. This has the one interesting result of impurities leading to cuts in deep IR, but what we would like is to explore things that are not factorized.



## Ising-Like Defects

The definition of an Ising like defect is as follows.

| Axiom                                        | What it buys us                                              |
| -------------------------------------------- | ------------------------------------------------------------ |
| Weak $\mathbb{Z}_2$ symmetry with $\eta$     | The flow keeps $\eta$ as a topological line.                 |
| Strong $\mathbb{Z}_2$ symmetry with $\eta$   | Defect anomaly persists which means that whatever we get it can't be a trivial line. |
| Ising-Like fusion $D\otimes'D = n(1 + \eta)$ | Protects from factorizing. Look at correlation functions.    |

Therefore these are simple examples of nonfactorizing defects one can look for in flows.



### The Ising case

$\epsilon$ has scaling dimension $1$ so integrating it over the identity defect makes it exactly marginal. This should therefore produce a continuous collection of defects (which I think correspond to the dbranes in the folded orbifold theory). 

> Check: read Oshikawa and Affleck ([cond-mat/9612187](https://arxiv.org/abs/cond-mat/9612187)) and repeat the calculation for the free Majorana fermion. It should be exact since the perturbation is literally $\bar \psi \psi$.

The fusion can also be calculated and it's done by Bachas, Brunner, and Roggenkamp ([hep-th/1303.3616](https://arxiv.org/abs/1303.3616)) and they end up showing that the defect that the exactly marginal parameter parameterizes is an SO(2) rotation of the left and right spinor components before and after the defect insertion.

> Check: There are topological defects there. Check which conformal one fuses to the topological one, and is that of the form $n(1+\eta)$?



### Lattice case?

I think the same calculation can be repeated on the lattice by inserting the "energy coupling" locally, i.e. something like $\sigma_0\sigma_1$ or whatever the right thing ends up being after Jordan Wigner, calculate the S-matrix using quantum mechanics, and then find transmission coefficients as a function of the insertion coupling.



### Example 2' (Slides)

I need to do this by hand because I am a bit confused. Also shouldn't $g_{UV} < g_{IR}$? *(So $\frac{g_{UV}}{g_{IR}} = \frac{1}{\sqrt{\Delta}}$? Ask Yifan)* 

From what I understand we should be able to get $1+\eta$ to flow to a non-topological ising like defect by the $V_{1,1/2}$ vertex in the free boson. However, in order for this to be relevant it needs to have quantum dimension < 1 so we find that 
$$
\Delta = \frac{R^2}{16} + \frac{1}{R^2} < 1 \implies \sqrt{2} < R < \sqrt{6} + \sqrt{2}
$$
and complete by t duality.



### Cheatsheet

$$\Delta_{(m,w)} = \frac{m^2}{R^2} + \frac{w^2R^2}{4}, \qquad R \to \frac{2}{R}, \qquad R_{\rm sd} = \sqrt2, \qquad R_{\rm TY(\mathbb{Z}_k)} = \sqrt{2k}$$

$$g(\mathcal{D}_k(R)) = \sqrt{\frac{R^2}{4} + \frac{k^2}{R^2}}, \qquad \Delta_{V_{1,1/k}} = \frac{R^2}{4k^2} + \frac{1}{R^2}, \qquad \frac{g_{\rm IR}}{g_{\rm UV}} = \sqrt{\Delta}$$

$$\Delta^{\rm bdy}_{(m_1,m_2)} = \frac{m_1^2+m_2^2}{2g^2}, \qquad U_LU_R = e^{2\pi i /k}\,U_RU_L, \qquad \mathcal{N}_k \circ \mathcal{N}_k = \bigoplus_{i=0}^{k-1}\eta^i$$

Relevance window for $V_{1,1/2}$: $\ \sqrt6-\sqrt2 < R < \sqrt6+\sqrt2$.
Irrelevance window for the $(2,-2)$ boundary deformation: the same interval.
$g$-values: $g(\mathbb{1}) = g(\eta) = 1$, $g(\mathcal{N}) = \sqrt2$, $g(\mathbb{1}\oplus\eta) = 2$, $g_{\rm factorized} = \sqrt2$ (Dir $\times$ Neu).
