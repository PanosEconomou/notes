# Virasoro Algebra

We discuss abstract properties of the Virasoro Algebra and how it applies to conformal field theory in particular. That includes representation theory for Virasoro and so on. 

The path we will follow is first constract the Witt algebra, a lie alebra formed by transformations on the Eucledian plane. And then obtain the Virasoro Algebra as a central extension of it. Then we will study projective representation of the Virasoro algebra. 



## Witt Algebra

We have shown [here](./2D_CFT_Axioms.md) that the conformal transformations in the eucledian place are the holomorphic and anti-holomorphic functions, wherever the derivative does not vanish. Identifying the eucledian plane with $\mathbb{C}$ we can use taylor’s theorem to express these functions. To be more formal we have

**<u>Proposition:</u>** For some (anti) holomorphic map $f:\mathbb{C} \to \mathbb{C}$ we can write 

$$
z \mapsto f(z) = z + \sum_{n\in\mathbb{Z}} a_n z^n
$$

for an appropriately defined laurent series. Therefore there exists a vector field $X \in \mathfrak{X}(\mathbb{C})$ given by

$$
X = a_n z^{n}\frac{d}{dz}
$$

such that 

$$
z \mapsto z + Xz
$$


By that property we can call such an $X$ an *infinitesimal holomorphic transformation*. It is clear how the infinitesimal conformal transformations can be spanned by the following basis $\{L_n\}_{n\in \mathbb{Z}} \subset \mathfrak{X}(\mathbb{C})$ given by

$$
L_n \coloneqq -z^{n+1} \frac{\partial}{\partial z}
$$

Similarly, the antiholomorphic transformations would be spanned by a basis 

$$
\bar L_n \coloneqq -\bar z^{n+1} \frac{\partial}{\partial \bar z}
$$

We picked the $n+1$ with a bit of hindsight so that using the commutator of vector fields both of them have the property that

$$
[L_n,L_m] = (n-m)L_{n+m}
$$

With this nice property we can now proceed to the following proposition

**<u>Proposition:</u>** The linear span $W \coloneqq \mathbb{C} \{L_n\mid n\in \mathbb{Z}\} $ with the commutator of vector fields forms a Lie algebra called the **Witt Algebra**.

We can see from here that the Witt algebra is the algebra that contains all the holomorphic (1/2 of the conformal transformations). We can also see this, by the way, by plotting some of the vector fields. 

![generators](_Virasoro_Algebra.assets/generators.png)

Here they are, from left to right they go  as $L_{-1} \cdots L_3$! First of all, they look so cool! Secondly, we notice that each of the vector fields is like a flower with exactly $n$ leafs. Therefore these are the flows in $\mathbb{R}^2$ that have to be linearly combined in order to create an infinitesimal holomorphic, conformal, transformation.



## Virasoro Algebra

In [here](./Conformal_Group.md#Central-Extensions)









