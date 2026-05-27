# Free Energy

Here is some intuition for the free energy that jumps between statistical mechanics and QFT.

# Statistical Free Energy

In classical mechanics we often find a scoring function, the action, that will tell us which paths a particle can take are physical. Extremizing the action gives us those physical paths. Clearly there are many such scoring functions that could do the job.

In statistical mechanics we have take all the possibilities that a system can move in and we assign a probability distribution. We often like the probability distribution to be related to some energy value. Namely, if the energy of the configuration is really high, then we want to make that configuration more unlikely.  This, typically, has the result of lower energy states being more probable than higher energy one. More mathematically, the probability of a state $\gamma$ is weighted by a factor of $e^{-\beta H(\gamma)}$, where $H(\gamma)$ is, loosely, some measure of the energy of $\gamma$ while $\frac{1}{\beta}$ is a factor that tells us how sensitive the probability is to changes in energy which we call temperature.

We can therefore define the average energy of the system by simply doing a version of
$$
E(\beta) = \frac{\text{Tr\,} H e^{-\beta H}}{\text{Tr\,}e^{-\beta H}} = -\frac{\partial \log Z}{\partial \beta},
$$
where $Z = \text{Tr\,}e^{-\beta H}$ is the partition function. An interesting question we can ask is **how much energy does the system have available to do work?** In particular we know that $\frac{S}{\beta}$, where $S$ is the entropy is energy that the system has, but you really can't extract from it because it is used in maintaining the system in its current configuration in some extremely loose sense. The **free energy** is given by
$$
F = E- \frac{S}{\beta} = -\frac{\log Z}{\beta}.
$$
This is super cute actually, because the partition function effectively counts how much energy the system has available to do useful things with when the temperature is fixed. This is clearly a very useful tool to characterize our system. But we can go beyond this to understand how it relates to other physically relevant stuff.

## Conjugate Variables

Thermodynamic variables have conjugates. Given a potential $A$ conjugate variables are ones related by a Legendre transform of that potential. For example if $dA = ydx$ then $y$ is conjugate to $x$ with respect to $A$ because we can calculate the Legendre transform to be $B = A-yx \implies dB = -xdy$. 

In physics we often have variables that give us a notion of length. These are typically extensive, meaning that they belong to a class of variables in which if we scale all of them by some factor, the potentials (like the energy and the free energy) scale by the same factor. That could be volumes, areals, whatever. 

A **tension** is a conjugate variable to a length with respect to the free energy. One can show that it is an intensive quantity. Common examples of tensions include pressue, the mechanical tension, surface tension, as well as more weird stuff that we will see later. 

What a tension really implies is that it is defined by $dF = \tau dL + \cdots$, meaning that often we can calculate by
$$
\tau :=\frac{\partial F}{\partial L},
$$
depending on the independent variables we have access to.



# QFT Free Energy

The free energy in a QFT is exactly the same! One has the ability to calculate partition functions so we can literally define the free energy (especially in the euclidean case) to be $F=-\frac{\log Z}{\beta}$. What is of particular interest here is that this measure helps us use the intuition of quantum mechanics to interpret some of the quantum weirdness that we observe. 

## Central Charge

For example, we can calculate the expectation value of the stress tensor of a CFT on a cylinder of circumference $2\pi R$ then in some units we find that 
$$
\langle T(z) \rangle = - \frac{c}{24 R^2}.
$$
How is this related to the free energy one might ask? Well let's see what happens in the free energy. Ignoring some constants and normalizations for brevity we find that
$$
dF = -\frac{1}{\beta Z} \frac{\partial Z}{\partial R} dR + \cdots
$$
We can always write the action as
$$
S = \int_{\Sigma} \sqrt g g_{\mu\nu}T^{\mu\nu} \implies dF = \frac{dR}{\beta} \int_{\Sigma} \sqrt{g}\langle T^{00}\rangle + \cdots = \frac{c}{24\pi R^2 \beta} dR + \cdots.
$$
This implies that there is a tension $\tau = \frac{c}{24 \pi R^2\beta }$! What does this mean precisely? Well we can calculate the actual force which is literally
$$
f = -\frac{dF}{dR} = -\tau.
$$
This means, where we to make allow for the radius of the cylinder to change it would shrink (assuming $c>0$). This gives us an intuition of the physical aspect of the central charge. 

Why does this happen? Because the larger the circle the higher the more energy we include because we are allowing for more modes. To be precise if we translate around a circle we get back to where we started so the modes will roughly have momentum $\mathbb{Z}/R$. The bigger the $R$ the denser the grid of modes we have access to, allowing us to populate lower energy states with ease. 

So we should expect that we are more likely to be in the ground state if the gap between the modes is HUGE, meaning reduce $R$ which is the force we are seeing.

Adding more bosonic modes makes this worse, since we now have more even more ways to create the same energies. while adding more fermionic modes makes this better since the more fermions we have the more our hilbert space gets chopped down due to pauli. 

So in some sense, the central charge is a count of the number of modes that contribute positively or negatively to this tension. A direct corollary of this is that if we are in a bosonic theory then we should see that as we flow under RG in which the degrees of freedom get reduced (simply because we are tossing them out in the averaging procedure). Therefore we would expect $c$ to monotonically decrease from fixed point to fixed point which is the famous $c$-theorem!

## Soft Symmetry Breaking

The general result here is that 
$$
\langle \text{Tr\,}T \rangle = -\frac{c}{12} R,
$$
where $R$ is the ricci scalar. This is a problem, because we can show that conformal invariance implies that $\text{Tr\,}T = 0$ on the sphere then it would always be so no matter the curvature of the curvature of any new Riemann surface we want to introduce.

An interesting thing is that if conformal invariance was a thing, then if the cylinder has also length $L$ the free energy should satisfy by conformal invariance $F(R,L) = F(\lambda R, \lambda L)$. But since $R,L$ are extensive that should also equal to $\lambda F(R,L)$. This means that $F$ could only be a function of $\frac{R}{L}$, which is left invariant under scaling. So conformal invariance implies that $F$ is independent of $R$ meaning that there is no work that the system can give to change just $R$ at fixed $L$ meaning no force appears trying to shrink the cylinder. However, if conformal symmetry fails even a tiny amount then we should no longer expect $F$ to be invariant under scalings, and therefore we should recover a possible tension when changing $R$. 

We have already seen how $c$ is also a manifestation of the breaking of conformal symmetry required in the Hilbert space in order to observe conformally invariant correlation functions.  



## G-Functions

Another cute appearance of the usefulness in interpreting quantum mechanical weirdness through thermodynamic tools is the g-function also known as boundary entropy. 

We know from boundary cft that if we take the high temperature limit of a cylinder of length $2\pi L = \beta$ and radius $R$, the partition function becomes
$$
Z_{\alpha \beta}(q) \to g_\alpha g_\beta e^{\frac{c\pi^2}{3}\frac{R}{\beta}},
$$
which means that at the high temperature limit (meaning the length of the circle is much bigger than its radius). We get a (thermal) free energy of the form
$$
F(\beta) = -\frac{c\pi^2 R}{\beta^2} - \frac{\log g_\alpha g_\beta}{\beta} + \cdots,
$$
 so this doesn't appear as a tension, but rather a correction to the entropy at high temperatures, that is independent of the length scales of the system. So since the theory is conformal and the first term is the conformal invariant term we just have an extra piece of data. 

What this looks like is an entropy term since it is Legendre dual to the temperature. In fact it is an entropy term that depends only on the boundary data and not the geometry of the system, which is why it is often called a boundary entropy. 

This also has an interesting interpretation as a tension but for a different free energy. The one for a D brane. If we are doing strings, there are constantly strings between the branes changing the energy configuration of the system. This means that in the presence of strings there is an effective action for the shape of branes that we can write down.

Polchinski v1 in chapter 8.7 onwards has a nice exploration of this. The short story is that strings starting and terminating on a brane induce an effective action for the brane in which $g_\alpha$ defines a tension on it, which is sometimes called the string tension.













