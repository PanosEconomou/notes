# Hydrogen

The electron of a hydrogen-esque atom has Hamiltonian
$$
H_0 = \frac{p^2}{2m} - \frac{Ze^2}{r},
$$
This only accounts for the Coulomb force on the electron by the $Z$ protons in the nucleus. There are more effects though because the electron and proton have more properties than charge. Here they are.

## Spin-Orbit Coupling

One of the biggest effects is that the electron has a magnetic moment. Meaning that in the presence of the total electric field of the atom it must also feel a magnetic force (since it is rotating around). Assume that the electric potential that the electron feels is $\phi(r)$. In the case above we have chosen $\phi(r) = - \frac{Ze}{r}$ but with more electrons and whatnot it might be that the total electric field that the electron experiences is different. Anyway, the interaction due to the magnetic field $B = -\frac{v}{c} \times E$ that the charged particle feels while in the presence of an electric field is going to be
$$
H_{SO} = - \mu \cdot B = \frac{e}{2m^2 c^2 r}\frac{\partial \phi}{\partial r} S\cdot L.
$$
Where the magnetic moment of the electron is given by $\mu = \frac{eS}{2mc}$. To analyze this we have to pick a good basis. Since though $S\cdot L$ does not commute with $L_z$ or $S_z$ picking our normal (decoupled) basis would not do, but picking the total angular momentum basis would be awesome!

> You would either have to be a fool or a masochist to pick a basis that doesn't diagonalize the perturbation. - J. J. Sakurai

Eitherway, once we pick a basis that diagonalizes the perturbation we simply have to plug in to see how the energy levels shift. Turns out we see that for states with angular component $Y^{j=l\pm \frac{1}{2},m}$ we obtain
$$
\int_{S^2} Y^\dagger L\cdot S Y d\Omega = \frac{\hbar^2}{2} \left[ j(j+1) - l(l+1) - \frac{3}{4}, \right]
$$
which means that we now have a splitting based on the total $j$ and total $l$ that we didn't have before. This is known as **Lande's interval Rule**. To come up with the order of magnitude of the splitting  we see use the approximation that the length scale of the potential is given by the fine structure constant $\alpha = \frac{e^2}{\hbar c}$ and the rough size of the atom  $a_0 = \frac{\hbar^2}{\mu e^2}$. Specifically we find that 
$$
\left\langle \frac{e}{r} \frac{\partial \phi}{\partial r} \right\rangle \sim \frac{e^2}{a_0^3}.
$$

## Relativistic Shift

The true kinetic of the electron is not just $p^2/2m$. Einstein's formula gives us that the Energy of the particle (relative to its rest energy $mc^2$) is given by 
$$
T = \sqrt{p^2c^2 +m^2 c^4} - mc^2 = mc^2 \sqrt{1 + \frac{p^2}{m^2 c^2}} - mc^2 =\frac{p^2}{2m} - \frac{p^4}{8m^3c^2} + \mathcal{O}\left( \frac{p^6}{m^5 c^4} \right).
$$
 Therefore we can also consider this case, where the correction is of the order $(Z\alpha)^2$ which is the same order as the spin orbit coupling. There is an elegant way to write this Hamiltonian as
$$
\frac{(p^2)^2}{8m^2c^2} = \frac{1}{2mc^2}\left( H_0 + \frac{Ze^2}{r} \right)^2,
$$
 so we can calculate the energy level corrections directly. 



## Hyperfine (Dipole-Dipole)

Since both the nucleus and the proton have magnetic moments, this means that the magnetic moment of the nucleus causes a magnetic field that the electron experiences as an interaction with its magnetic moment. 

The perturbation Hamiltonian is proportional the inner product of the magnetic moments, so if we call spin of the proton $I$ and the spin of the electron $S$, then we have that
$$
H_{HF} = A(r) I\cdot S,
$$
for some function of $r$ given by $A(r)$. In particular, we see here that a good basis is the one of the total angular momentum $F = L + S + I = J + I$, for the same reason why $J$ was a good operator to find a basis with respect to when we were doing the Spin Orbit interaction. Turns out this effect is much more tiny, so we will ignore it most of the times. However exactly because it is tiny it has interesting cosmological consequences such as the famous $21\, cm$ line. 



# External Fields

Ok, but what happens when you put your atom in an external Electric or Magnetic field? Clearly the Hamiltonian should change to account for these terms, so we can definitely try and treat it as a perturbation! Let's see what happens.



## Zeeman Effect (Adding Magnetic Fields)

We put an atom with one electron in a uniform and constant external magnetic field $B$. The vector potential of this magnetic field is given by $A = \frac{1}{2} B\times x$ and if we fix it to point along $z$ (for convenience) we have
$$
A  = \frac{1}{2} (By\hat x - Bx\hat y).
$$
Since the Lorenz force is given by $F = eE + ev\times B$ one can check that the energy, and therefore the Hamiltonian, of the electron is given by
$$
H = \frac{1}{2m}\left( p - eA \right)^2 + e\phi(r),
$$
where $\phi(r)$ is the electric potential. However, there is something missing! The electron has a magnetic moment which interacts with the magnetic field via $-\mu \cdot B$. So we need to add this too! Therefore the total Hamiltonian is given by
$$
\begin{align*}
H 
&= \frac{1}{2m}\left( p - eA \right)^2 + e\phi(r) - \mu \cdot B\\
&= \frac{p^2}{2m} + e\phi(r) - \frac{e}{2mc} BL_z + \frac{e^2 r^2}{8mc^2} B^2 -\frac{e}{mc} BS_z + \frac{1}{2m^2 c^2} \frac{e}{r} \frac{\partial \phi}{\partial r} L\cdot S.
\end{align*}
$$
Notice that for small external field we can drop the term that is proportional to $B^2$ and then obtain something that is much more workable.
$$
H = H_0 + H_{SO} - \frac{eB}{2mc}\left( L_z + 2S_z \right).
$$
Now we can start playing a game. We have already seen how $H_0 + H_{SO}$ is split. So if $B$ is TINY we can perturb these states entirely thinking of $H_B$ (the last term in the Hamiltonian above) as a small perturbation on the spin orbit. In this case we can write
$$
L_z + 2S_z = J_z + S_z,
$$
and then we can calculate the first order correction by taking the average
$$
\langle J_z + S_z \rangle = \langle J_z \rangle + \langle S_z \rangle = m\hbar  + \langle S_z \rangle.
$$
Now in the basis of total angular momentum $\psi_{j=l\pm \frac{1}{2},m}$ we have that
$$
\psi_{j=l\pm \frac{1}{2},m} = \sqrt{\frac{l \mp m + \frac{1}{2}}{2l+1}} \psi_{l,m+\frac{1}{2}}\otimes \psi_{\frac{1}{2}, -\frac{1}{2}} \pm \sqrt{\frac{l \pm m + \frac{1}{2}}{2l+1}} \psi_{l,m-\frac{1}{2}}\otimes \psi_{\frac{1}{2}, \frac{1}{2}}.
$$
Therefore, we have amazingly found that
$$
\langle S_z \rangle = \frac{\hbar}{2(2l+1)} \left[ \left( l\pm m +\frac{1}{2} \right) - \left( l\mp m + \frac{1}{2} \right)\right] = \pm \frac{m\hbar }{2l+1}.
$$
Therefore the energy splitting is given by
$$
\Delta E = -\frac{e\hbar B}{2mc} m_j \left[ 1 \pm \frac{1}{2l+1} \right],
$$
the factor in the bracket is called **Lande's g-factor** and its general formula (for arbitrary spin atoms) can be derived by considering 
$$
\langle S_z \rangle = \frac{m}{\hbar j(j+1)} \langle S\cdot J \rangle = \frac{m}{2\hbar j(j+1)} \langle J^2 + S^2 - L^2\rangle.
$$
Namely one finds that
$$
g_L = 1 + \frac{j(j+1) + s(s+1) - l(l+1)}{2j(j+1)}.
$$
and the perturbation is given by
$$
\Delta E = \mu B m_j g_L.
$$
However, $B$ doesn't have to be smaller than the order of the SO correction. And what we can do then, is to treat it the other way around. Treat $H_B$ as a perturbation on $H_0$ and then $H_{SO}$ as a perturbation on $H_0 + H_B$. In the decoupled basis we can easily compute the perturbation in the decoupled basis to be
$$
\langle H_B\rangle = \frac{\mu B }{\hbar}\langle L_z + 2S_z\rangle = \mu B  (m_l + 2m_s).
$$
What does this mean in terms of degeneracy? Well we have split it into states that have the same $m_l + 2m_s$. We can now put back the spin orbit effect simply by adding $\langle L\cdot S \rangle$ on these states where we would obtain
$$
\langle H_{SO} \rangle = \frac{\hbar^2 e m_l m_s}{2mc^2} \left \langle \frac{1}{r} \frac{\partial \phi}{\partial r} \right \rangle.
$$


