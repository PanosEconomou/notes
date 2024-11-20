# Jets

It is time. Jets initially looked like scary objects because they’re so many of them, and whatnot. Turns out Jets are something like coordinate free Taylor expansions of fields (i.e. sections of vector bundles). We use them all the time in physics, even if we don’t explicitly call them out, and they can help us generalize the formalism of classical Lagragian field theory to Hamiltonian field theory, and finally Quantum field theory.

[toc]



# Motivation

Let’s do some quick motivation by introducing Taylor series in a completely new way. Consider the set of functions $C^\infty(\mathbb{R})$. Since they are smooth they already admit a taylor series. Let’s define an equivalence relation on them.

**<u>Definition</u>** Given $f,g \in C^\infty(\mathbb{R})$ we say that they are $k$**-jet-equivalent** at $x\in \mathbb{R}$ or $f\sim_kg$, when their first $k\in \N$ derivatives are equal. In other words
$$
f\sim_k g \iff f^{(n)}(x) = g^{(n)}(x),\ 0\leq n \leq k.
$$
Notice that if we partition 

# Constructions

We begin with the basic jet constructions on vector bundles. For more bundly stuff check [this](./Bundles.md) out. To define Jet bundles we will first introduce the $r$-jet as an equivalence relation of sections, and then we will define the r-jet of some section as an

**<u>Defintion:</u>** Consider a fibre bundle $\pi:E \to M$, then for every $p \in M$