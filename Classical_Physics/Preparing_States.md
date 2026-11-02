# Quantization

Quantization makes no sense. It is the idea that if you know the classical physics you can then predict the quantum ones. 
$$
\xymatrix@C=7em@R=0em{
  {\begin{matrix}\text{Classical}\\ S\end{matrix}} \ar[r]^-{\text{quantization}} &
  {\begin{matrix}\text{Quantum}\\ \mathbb{H}\end{matrix}}
}
$$
But, classical physics is the average of quantum physics at large scales. So since during any averaging we lose information why should we even expect that the classical theory has enough information to define the quantum one? The resolution to that is that it doesn't. There are so so many quantum theories that yield the same classical theory at large scales, so when physicists talk about quantization they refer to a choice. A choice for how to fill in the gaps in the information provided by a classical theory to get a quantum one.

[toc]

# The choice behind Canonical Quantization

So if quantization leads to a choice, what is the choice that we make when we do canonical quantization? The method we typically use to do canonical quantization is called 1st quantization and it is the familiar replacing Poisson brackets with commutators. But in order to do this you end up suppling extra information such as ordering of operators, which are you canonical momentum and positions (different choices could lead to different dynamics) and so on. But canonical quantization makes a statement about something else that is important. 

If you calculate the quantum Hamiltonian $H$, you can expand it roughly as $H = H_{cl} + \hbar H_1 + \hbar^2 H_2 + \cdots$. What canonical quantization tells you is given a naive $H_{cl}$ what terms do you need to add in $H_k$ such that you cancel things like ordering ambiguities and so on. But there is no reason that you can't add another term by hand that just vanishes when you take averages that look like classical observables.

In fact you already know of an example where this is the case. If you canonically quantize an electron you get that the Hilbert space is $L^{2}(\mathbb{R}^3)$ which doesn't actually contain the spin! You effectively have to add it by hand! Yet in the classical limit, you are averaging over a bath of polarizations that gets rid of it for most observables.

# How to Canonically Quantize

