# Monoidal Categories

Now things are getting interesting! We are ready to start exploring things in more depth. In case a definition is left outside of this it can be found on [Abelian Categories](../Categories/Abelian_Categories.md) or on [Categories](../Categories/Categories.md). These notes follow [EGNO - Tensor Categories](https://math.mit.edu/~etingof/egnobookfinal.pdf) very closely.

[toc]



# Definitions

As every proper set of notes in category theory we start with a set of definitions. The intuition behind monoidal categories is some kind of categorification of monoids. These objects are defined as. 

**<u>Definition:</u>** A **monoid** is a set $C$ with an associative multiplication map $(x,y) \mapsto x\cdot y$ with an element $1 \in C$ such that $1^2 = 1$ and $x\mapsto 1\cdot x$ and $x\mapsto x\cdot 1$ are bijections $C\to C$. 

**<u>Corollary:</u>** A monoid is a semi-group, and $1\cdot x = x\cdot 1 = x$.

***Proof:*** Since $1\cdot 1 = 1$ we have that 
$$
1 \cdot ( 1 \cdot x) = (1\cdot 1) \cdot x = 1\cdot x
$$
now since $1\cdot x$ is a bijection let $y = 1\cdot x$ for some $x$. This implies $1 \cdot y = y$. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$
This bijectivity property might seem an unnecessary complication in the definition of a monoid, but in reality it is a nice path to lead us to the correct abstract concept. Also recall, that equivalently a monoid is a category with a single object. 

**<u>Definition:</u>**  A category $\mathcal{C}$ is **monoidal** if there exists a functor $\otimes : \mathcal{C}\times \mathcal{C} \to \mathcal{C}$ called the **tensor product** with a natural isomorphism $\alpha:(\cdot \otimes \cdot)\otimes \cdot  \to^\ast \cdot \otimes (\cdot \otimes \cdot)$ implementing associativity, and a **unit object** $1 \in \mathcal{C}$ be an object with an isomorphism $1\otimes 1 \to 1$  such that

1. **(Pentagon Axiom)** the following diagram commutes 
   $$
   \xymatrix{
   & ((W\otimes X)\otimes Y) \otimes Z\ar[dl]_{\alpha_{W,X,Y}\otimes \text{Id}_Z}\ar[dr]^{\alpha_{W\otimes X,Y,Z}} &\\
   (W\otimes (X\otimes Y)) \otimes Z\ar[d]^{\alpha_{W,X\otimes Y, Z}} & & (W\otimes X)\otimes (Y \otimes Z)\ar[d]_{\alpha_{W,X,Y\otimes Z}}\\
   W\otimes ((X\otimes Y) \otimes Z)\ar[rr]^{\text{Id}_W \otimes \alpha_{X,Y,Z}} & & W\otimes (X\otimes (Y \otimes Z))
   }
   $$
   for all objects $W,X,Y,Z \in \mathcal{C}$ and with suitably chosen natural isomorphisms $\alpha$.  

2.  **(Unit Axiom)** The functors $X \mapsto 1\otimes X$ and $X \mapsto X\otimes 1$ are equivalences in $\mathcal{C}$. 



​	

