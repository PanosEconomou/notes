# Finite Temperature QFT

We started with what's called an imaginary time formalism (euclidean QFT) The idea though was that this $\tau$ was essentially the $\beta$ in statmech. In particular we can start calculating things  where $\tau \in[0,\beta]$. What we would find is that after compactifying the imaginary dimension such that it belongs on this thing we can find that the propagators get an extra term. I will check it out later.

## Real Time Formalism

Consider the following green's functions
$$
\bar D^\pm(k) = \int e^{ikx} D^\pm (x) dx
$$
What we will notice is that because of the periodicity in the time we have
$$
\bar D^-(k) = \int e^{i(k_0 t - kx)}D^+(t-i\beta,x) = e^{-k_0\beta} \bar D^+(k).
$$
Now plugging it in we can calculate the propagators to be
$$
\begin{align*}
\bar D^+ = (1 + f)\rho && \bar D^- = f\rho && f = \frac{1}{e^{\beta E} -1}, 
\end{align*}
$$
where $\rho = D^+ - D^-$, and $E$ is some function of $k_0$

As a result we can calculate the momentum space Feynman propagator (i.e. the sum of the two)
$$
D = D_{T=0} + \frac{\rho(k)}{e^{\beta E} -1 }
$$
Using compactness of $k_0$ we can calculate that difference $\rho$ function to be
$$
\rho = 2\pi E(k_0)\delta(k^2 - m^2).
$$
That's so cool! This extra term is essentially damping our calculations because it is something added to the imaginary part of the propagator. This would make a lot of bubble diagrams convergent! This calculation was for bosons but we can also do it for fermions. 











