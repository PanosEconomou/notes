# Gauging Discrete Symmetries

Here we describe how to gauge discrete symmetries using the language of defects. The main idea is to find ways to construct modular invariant partition functions of a theory that remains unaffected by the addition of symmetry defects. Here are some references

1. [**Generalized Symmetries and their Gauging**](https://youtu.be/tj7JrjbclWA)
2. [**Generalized Global Symmetries**](https://arxiv.org/pdf/1412.5148)
3. [**Gauging Non Invertible Symmetries**](https://arxiv.org/abs/2311.17044)

Here are the contents.

[toc]



# Defects on Open Manifolds

Gauging is facilitated by combining defects in a *particular type of network*. To build a network of defects we first need to learn how to glue them. As a result, we need to understand symmetry defects associated to *open* manifolds.

## Symmetry Defects and Gauge Fields

[Here](../Defects/Symmetry_Defects.md#Implementing-Symmetry-Operators-by-Twisting) we have discussed how we can build defect operators on closed submanifolds by applying the symmetry action (aka "twisting") on the interior. Another equivalent way to think about this is to say that the addition of the defect corresponds to coupling the theory with a connection that is singular on the submanifold and flat everywhere else. 

Let's see an example before we formalize.

**<u>Example:</u>** *($U(1)$ Symmetry for complex scalar fields)* Consider a free complex scalar field $\phi : M \to \mathbb{C}$ on some Lorentzian manifold $M$. The corresponding Lagrangian $\mathcal{L} : C^\infty(M,\mathbb{C}) \to \Omega^1(M)$ is given by
$$
\mathcal{L}(\phi) = d\phi \wedge \ast d\phi.
$$
Notice that this Lagrangian is invariant under the group action $\rho : U(1) \to \text{Aut\,}(C^\infty(M,\mathbb{C}))$ given by $\theta\cdot  \phi = e^{i\theta} \phi$ for all $\theta \in U(1)$. Therefore we say that this theory has a **global $U(1)$ symmetry**. As a result, we can now implement the corresponding symmetry operator using a defect on a closed codimension-1 manifold $\Sigma \subset M$ by introducing the operator
$$
U_{\theta}(\Sigma) = \sum_{i \in I} (\theta \cdot \psi_i)\psi_i^\dagger,
$$
where $\{\psi_i\}_{i\in I } \subset \mathbb{H}_\Sigma$ is a set of orthonormal states in the separable Hilbert space $\mathbb{H}_\Sigma$ corresponding to quantizing our theory on that slice, each corresponding to asymptotic field configurations $\psi_i$. Such an operator insertion has the effect of treating the classical fields in the path integral as transformed in the interior of $\Sigma$. Let's denote the exterior of $\Sigma$ as $M^+$ and the interior as $M_-$. We can undo this transformation by performing the following gauge transformation $g:M\setminus\Sigma \to U(1)$
$$
g_{\theta}(x) = \begin{cases}0 & x \in M^+ \\ -\theta  & x \in M^-\end{cases}.
$$
One can easily check that our connection one form in $M\setminus\Sigma$ remains flat (since $dg = 0$ when restricted there), but on $\sigma$ we can take a the derivative in the distributional sense to find that it must include a $\delta$ function term. Specifically, we can write $\Theta_\Sigma(x)$ the Heaviside function that is $1$ on $M^-$ and $0$ on $M^+$, and notice that $d \Theta_\Sigma = \delta_\Sigma d\Sigma$, where $d\Sigma$ is the normal vector field to $\Sigma$. Therefore, the connection one form such that this transformation is undone can be given by
$$
A = \theta \delta_\Sigma\, d\Sigma,
$$
up to a sign that I can't really figure out at the moment. So in some sense the insertion of a defect on a closed surface $\Sigma$ corresponds to the coupling with this singular gauge field $A$!
$$
\begin{equation}\tag*{$\Box$}\end{equation} 
$$
This realization is super cool!





# Gauging Invertible Symmetries

Let's start by the example of Gauging the $\mathbb{Z}_2$ defect. This is known as the orbifold procedure. This is a two step procedure.  

## Orbifold

 We want to construct a map between *consistent QFTs,* that takes the un-gaged CFT to a gauged CFT. This map is called the **orbifold** and we will carefully define what consistent means in this context. In essence this boils down to locality, unitarity, compactness, and unique ground state, being quantities that are preserved under this map. So let's be more careful. 