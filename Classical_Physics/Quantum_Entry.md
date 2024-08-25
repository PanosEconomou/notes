# Quantum Mechanics

Start here with the fundamentals. Here we discuss fundamental formulation stuff very quickly covering axioms, pictures, basic definitions, and path integrals. 



## WTF is a State

The purpose of physics is for me to tell you the *state* of a system and for you to tell me what *new state* the system turns to after some physical process. The most common example is the stupidest one of classical physics. The state of the system is the position an apple released from a tree above Newton’s head, and the physical process is clicking play and checking when the apple will give Newton a headache.

However, the physical process doesn’t have to be that boring. Instead of time evolution, for example, it could be measurement of the momentum, or the turning our view point upside down, etc. In what state would the system be after we do this kind of stuff?

As you might expect in Quantum physics we do exactly the same thing. We define the *state* of a system (in a very complicated way I might add) and then the problem is to find in what *state* the system will be in after some physical process. So let’s start by thinking about a good definition for this weird concept of *state*.



### Quantum Weirdness

I am not building quantum mechanics historically in these notes, but while the narrative is not historically accurate the content is. After doing a bunch of weird experiments and a lot more attempts at explaining them, one thing was clear. We sucked at it! In particular we could never definitively predict in what exact configuration the system would end up after the experiment. What we could see, however, is trends. Even though the system would end up in different configurations after the same experiment, given multiple trials our measurement would always follow the same probability distribution. 

Fed up and fruhstrated we reluctuntly decided instead of trying to build a theoretical framework around predicting the exact configuration the system will end up in after some experiment, to shift towards predicting the probability distribution of configurations that it could evolve to. This was a huge shift in our thinking and extremely revolutionary. But most importantly it gave us a way to calculate the only thing that we could measure experimentally, probability distributions. 

**Ok why am I saying all of this?** The concept of state in Quantum mechanics is different from the one in classical physics so that it incorporates this notion of probability distribution. I know that by now you must be annoyed because I have been using the term *state* over and over again, but it is still unlclear, so let’s fix that! Let’s do some exploration to rigorously define it.



### Attempts at Rigor

We will go through a process of trial and error to define the concept of state in quantum mechanics. I will present everything abstractly, but while you read that try and aplly the definitions and propositions to the two following examples.

***Case 1:*** *Your favorite Coin* is tossed and the outcome is heads or tails. There are two possible **configurations** of the system, heads or tales. In classical mechanics we would call these the state, but here since we wanna relate the concept of state to a probability distribution we won’t make the mistake of calling the configurations states.

***Case 2:*** *An ideal gas* which is basically a bunch of balls that don’t collide contained in some box. Here the **configurations** are infinite! However, we can still label them all. All we need to do is to create a list of all the positions of the particles, and the direction that each is going. So if we have $n$ particles, we will need $3n$ labels for the positions and $3n$ labels for the momenta. Putting them all together we can see that a point on the vector space $\mathbb{R}^{6n}$ is a vector with just enough slots to perfectly describe the configuration of the system. Again remember that the state is not a configuration in quantum mechanics!



Ok we have introduced our two guiding examples, and you are obviously free (and encouraged) to come up with different ones as you read through. Let’s be a bit more general now and talk about the configuration space. 

**<u>Definition:</u>** The **configuration space** of a physical system is a set $S$ and each of the elements is a possible configuration of the system

**<u>Example:</u>** *(Coin)* The configuration space is the set of two elements $S=\mathbb{Z}_2$ one representing heads, and the other tails.

**<u>Example:</u>** *(Gas)* For the gas the configuration space is $S = \mathbb{R}^{6n}$ where $n$ is the number of particles in the $3$ dimensional box.

Notice that this definition is kind of stupid because it relies on knowing what a configuration is. However we can think about it differently. If I were to magically give you the set $S$ then it would automatically contain all the ways that I could label the possibilities for my system. We haven’t done anything we have just given a starting point. Now let’s start introducing the probability distribution element to the game.

**<u>Definition:</u>** Given sets $S,Y$ the **function set** from $S$ to $Y$ is the set $Y^S$ that contains all maps $f:S\to Y$. 

**<u>Proposition:</u>** If $(Y, \mathbb{F},+,\cdot)$ is a vector space then $(Y^S, \mathbb{F},+,\cdot)$ is also a vector space under the same filed $\mathbb{F}$ with addition and scalar multiplication induced like so. For any $f,g\in Y^S$ and $a\in \mathbb{F}$

1. $(f+g)(s) = f(s) + g(s)\ \ \ \  \forall s\in S$
2. $(a\cdot f)(s) = a\cdot f(s) \ \ \ \forall s\in S$

using the addition and multiplication of $Y$

The significance of this proposition will come in handy in a second, but now we have managed to describe every map from the configuration space $S$ to any other set $Y$. It is easy to see that all the probability distributions on $S$ are contained in $\mathbb{R}^S$ along with many other useless functions. But since $\mathbb{R}$ is a vector space, then so is $\mathbb{R}^S$, so we already have a nice structure to work with.

At this point, it would be tempting to say that the *state* is simply an element of some subset of $\mathbb{R}^S$ that contains all the probability distributions. BUT NO! I fully understand that this is the natural choice, and so did the pepople that first invented this stuff. However, they quickly found out that this is a *terrible, inneffective* solution that causes *suffering* when trying to deal with actual physics. Here is the question that messed up everything.

> Can two systems yield the same probability distributions in some experiment but fundamentally be different?

Here are my obvious (wrong) initial thoughts.

1. YES! My experiment might not be measuring everything about the system so two different states could yield the same probability distribution. Therefore a probability distribution doesn’t have all the information a state needs to have.
2. Then I realize that this is wrong. Because in our construction we refer to the probability distribution we measure to be a distribution over all the states not part of them. Therefore if two systems have the same probability distribution they must be the same. So the answer is NO!

Both of these **are wrong.** Let’s think of the following example where our systems is a bunch of balls moving in space and we measure their total speed. Say the probability distribution for the total speed is concentrated around one speed $v$. Then there are two systems with the same distribution. One where all the particles move towards the left and one where all the particles move with the same speed as in the other, only in the opposite direction. How do we know that these are different systems? We put them all together! 

If in the two systems the particles are moving in the opposite directionm 















