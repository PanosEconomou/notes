# Vertex Operator Algebras

Sometimes, in order to define a consistent Conformal Field Theory it is nice to set the details of the fields as particular types of operator valued distributions with certain properties, and instead describe an algebra with these properties axiomatically present instead. 

This can help us abstract a lot of the formalism when it comes to interpreting things like boundary conditions as other types of mathematical objects, and more!

[toc]

# Formal Distributions

The building blocks of vertex algebras are formal distributions. These are the field operator interpretation on the language we are trying to build.

**<u>Definition:</u>** Let $Z$ be a finite set of $n \in \mathbb N$ elements and $R$ be a ring. The **ring of formal distributions** in $Z$ over $R$ defined as the set

$$
R[[Z]] \coloneqq R^{\langle Z\rangle} = \{f : \langle Z\rangle\to R\},
$$

where $\langle Z\rangle$ is the free abelian group on $Z$, together with the following operations.

1. **Elementwise addition:** For any two $a = (a_1,a_2,\cdots), b = (b_1,b_2,\cdots) \in R[[Z]]$ their sum is the sequence
   $$
   a+b = (a_1+b_1,a_2+b_2, \cdots) \in R[[z]].
   $$

2. **Cauchy Multiplication:** Interpreting $a,b \in R[[Z]]$ as maps $a,b: \langle Z\rangle \to R$ their product is such that for any $z \in \langle Z\rangle$ 
   $$
   (a\times b)(z) = \sum_{w \in \langle Z\rangle} a(w)b(w^{-1}a).
   $$

**<u>Remark:</u>** The ring of formal distributions is a ring, however, in the case where $R$ is a complex algebra, so is the ring of formal distributions. 

We often view any element of the formal distribution ring as a sum of terms that belong in the free abelian group. Since we can index $\langle Z\rangle \cong \mathbb Z^{|Z|}$ we can write $a \in R[[{z_1,z_2,\cdots,z_n}]]$ as

$$
a = \sum_{j \in \mathbb Z^n} a_j z^j = \sum_{j\in \mathbb Z^n} a_{j_1 j_2\cdots j_n} z_{1}^{j_1}z_{2}^{j_2}\cdots z_{n}^{j_n},
$$

where $a_{j_2j_2\cdots j_n} \in R$, which looks like a polynomial in the variables $z_i$. This is a nice interpretation that will help us define the algebraic tools needed in the following sections.

**<u>Definition:</u>** The **ring of formal Laurent series** in $Z$ over $R$  is the localization of $R[[Z]]$ by the multiplicatively closed set $S$ of positive formal distributions $Z$, i.e. 

$$
R((Z)) \coloneqq S^{-1} R[[Z]].
$$

where

$$
S \coloneqq \left \{a \in R[[Z]] \ \middle | \ a = \sum_{j\in \mathbb N^n} a_j z^j\right \}.
$$

**<u>Remark:</u>** Defining Laurent series as elements of the localization might be a bit confusing at first, so we can untangle it as follows. By definition of the localization we know that for any $a\in R[[Z]]$ and $s \in S$ there exists $b \in R((Z))$ such that

$$
a=sb.
$$

For example, consider the series $a = \sum_{j\in \mathbb Z} a_j z^j \in R[[Z]]$ for some $z \in Z$. By picking $s = \sum_{j=1}^\infty z^j \in S$ we can find the Laurent series

$$
b = \sum_{j=-1}
$$


 









