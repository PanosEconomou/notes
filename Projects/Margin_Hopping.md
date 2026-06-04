# Hopping on the Margins

Renormalization group flow in a quantum field theory is hard. One has to calculate beta functions which often is a task that involves desperate attempts to even define or approximate quantities involved using methods that apply in narrow regions of parameters. All this to jump to a nearby fixed point. Once that fixed point is understood then most of the behavior of the theories around it can be quite reasonably approximated by observing it. Sometimes though, this daunting task can be simplified. 

Two dimensional rational conformal field theory offers an excellent playground for this kind of exploration. Here we explore some systems where one can avoid calculating the intricate details of the flows and instead, use kinematics to constrain what type of fixed points one can observe. In other words we might be able to hop from fixed point to fixed point without having to flow.

[toc]

# Which Flows?

It is worth taking a second to identify what type of systems we are using as prototypical examples for this hopping. Effectively we will restrict ourselves to two-dimensional Conformal Field Theories where we flow in marginal directions. Here are some more details.

## Telegraphic Classification of RG Flows

When we have a description of a system and we "zoom out" ignoring details at small scales, our system looks as if it can be described by another (possibly different) set of rules. That zooming out is called a Renormalization Group transformation, which we can think of as a way to deform the shape formed by all possible descriptions of a physical system. Sometimes the laws governing the behavior of the system look the same before and after the RG transformation, in that case the RG transformation itself can be thought of as a symmetry of the system which we call Conformal symmetry.

Geometrically these special descriptions correspond to fixed points under the RG transformation and they are of particular interest because their enhanced symmetry often makes them easier to calculate stuff in, and they describe the low energy behavior of the theories around them, therefore knowing them feels important. In fact, if we are at a fixed point, we can classify an RG flow based on how stable it leaves the fixed point.

A scaling transformation $R_b$ has to have the idea of some positive parameter (we typically denote it as $b$) known as the scale such that $R_{b}\circ R_{b'} = R_{b' + b}$, and $R_1 = \text{Id}$. We would call $K$ a fixed point if $R_b(K) = K$ for all $b$. Formally this makes $R: \mathbb{R}^+ \to \text{End(M)}$ a monoid homomorphism to some set of  

Assuming that we can locally parameterize the transformation smoothly around the fixed point, we can calculate its Hessian (since the Jacobian vanishes), and diagonalize it. Eigenvectors then have positive eigenvalues of the form $b^y$. If $y < 0$ then iterating $R$ in that direction eventually moves us towards the fixed point so we call that direction irrelevant, while if $y>0$ this moves us towards a different fixed point and we call that relevant.



## The Margins

What is of interest to us is **marginal** deformations which happen when $y=0$. This basically means that the Hessian of the flow vanishes and we would need higher derivatives to tell if the operator moves us towards or away from the fixed point. Such marginal deformations of the theory can be quite interesting because sometimes they correspond adding boundary conditions or other kind of defects that don't necessarily introduce new bulk interactions. Let's be a bit more concrete and realize an example of a marginal RG flow. 



# How to Hop

