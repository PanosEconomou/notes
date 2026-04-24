# The Dictionary of Ways

I live in a *place*, which apparently is a street that ends at a roundabout esque thing. When I googled to find out I saw [this video](https://www.youtube.com/watch?v=yqmso0c9CBs) which launched an insane rabbithole for different street naming conventions which lead to [this Wikipedia article](https://en.wikipedia.org/wiki/Glossary_of_road_transport_terms#R) that defines road as:

> "A thoroughfare, route, or way on land between two places that has been paved or otherwise improved to allow travel by foot or some form of conveyance, including a motor vehicle, cart, bicycle, or horse."

which apart from the self reference had me look up the word *"conveyance"* which apart from a legal term is also "the action of [conveying](https://www.merriam-webster.com/dictionary/convey)," which in turn is to move form one place to another, so the entire statement is a road is road. Not only that, but the rest of the things like:

1. Highway
2. Beltway
3. Terrace
4. Driveway
5. Parkway
6. ...

So many cool things have no consistent definition. Until now! Here we will develop a rigorous framework to classify these things hehehehehe!

[toc]

We start by figuring out the smallest amount of primitives that we need and how to relate them and then we move onwards and upwards!

## Ways are undefined

[Euclid's Elements](https://farside.ph.utexas.edu/Books/Euclid/Elements.pdf) literally starts with "A point is whatever has no part," followed by "A line is a length that has no width." Hilbert had an issue with that. These definitions beyond confusing and cyclical are pointless. What isn't pointless is the relations. If we axiomatize the relations between them, then anything can be a point or a line as long as they satisfy the axioms. We will do this with ways!

The terms that we will leave undefined are **ways, intersections,** and **buildings**. Then we will also introduce 3 relations: **ends at, passes through,** and **faces,** such that ways end at and pass through intersections, while ways and buildings face ways. With that we are ready to start our axioms.

## Axioms

We want to incorporate some ideas of what a network of ways and intersections should have in common in order to help us define what we need. This leeds us to the following **4 axioms**.

**<u>Axiom #1:</u>** *(Line)* A way can end in at most two intersections.

**<u>Axiom #2:</u>** *(No confused drivers)* No way can both end and pass through a given intersection.

**<u>Axiom #3:</u>** *(Intersections need ways)* Every intersection has at least one way ending or passing through it. 

**<u>Axiom #4:</u>** *(I can get to buildings)* Every building faces at least one way.

With these axioms we are ready to start naming. 



## Ways based on intersections

One useful way to characterize intersections is by how many roads pass through them. 

**<u>Definition:</u>** The **valence** of an intersection is twice the number of ways passing through it plus the number of roads ending to it. An intersection with valence $k$ is a $k$**-intersection**. In particular a $1$-intersection is an **endpoint** and an intersection with valence greater or equal to $3$ is a **crossing**. When two ways share an intersection we say that they **intersect**.

With these we can already define some commonly found ways.

1. A **loop** is a way that ends in no intersection.
2. A **segment** is a way that ends in exactly two intersections.
3. A **throughway** is a way with no endpoints.
4. A **dead-end** is a way with exactly one endpoint.
5. A **cul-de-sac** is a dead-end segment.
6. A **driveway** is a cul-de-sac facing exactly one building.



## Ways based on faces

While at the beginning the buildings seem an arbitrary inclusion one would be surprised at how many ways ways are named relative to buildings. Here are some.

1. A **street** is a way at least one building faces.
2. A **road** is a way that no building faces. 
3. An **alley** is a cul-de-sac with no buildings that intersects a street. 
4. A **Place** is a dead-end street.
5. A **court** is a street that intersects ends on a loop.
6. A **plaza** is a loop that is also a street.
7. A **roundabout** is a loop road whose all intersections are crossings. 
8. A **crescent** is a plaza with exactly two streets ending on it.



Here are some interesting propositions.

**<u>Proposition:</u>** Alleys are not Places, and courts are not roads.

***Proof:*** They don't have buildings. 
$$
\begin{equation}\tag*{$\Box$}\end{equation}
$$

## Parallel ways and Routes

A lot of ways are named according to how they face each other. Here is a useful notion.

**<u>Definition:</u>** Two ways that share no intersection are **parallel**. A **grid** is a collection of ways that can be split into a two collections of parallel ways such that all the ways in one set intersect all the ways in the other. 

This might seem strange but it can work. Here are some common examples.

1. An **avenue** is a street that intersects at least two parallel streets. 
2. In a grid of streets $G$ one elements of one parallel collection are called $G$**-avenues** and elements of the other are $G$**-streets**.

This way of defining parallel ways has interesting consequences.

**<u>Proposition:</u>** If way $a$ is parallel to way $b$ and way $b$ is parallel to way $c$ then $c$ is not necessarily parallel to $a$. 

Another useful construction is a route. 

**<u>Definition:</u>** A **route** between intersections $a$ and $b$ is a sequence of ways such that the first intersects at $a$ and the last intersects at $b$ while consecutive ways intersect.



## Ways by neighborhoods

**<u>Definition:</u>** A nonempty collection of buildings is called a **neighborhood**. A street goes **through a neighborhood** if it is faced by buildings in that neighborhood. Two disjoint neighborhoods are **separated** if there are no street routes with at least one street in each neighborhood. A way **connects** two neighborhoods if it s part of a path that intersects with streets through these neighborhoods.

This unlocks for us the language of highways. 

1. A **highway** is a throughway road that connects separated neighborhoods.
2. A **link road** is a highway that connects exactly two separated neighborhoods.
3. A **beltway** is a loop contained in a highway. 
4. For three separated neighborhoods $a,b,c$ such that $a$ is connected to $b$ and $b$ is connected to $c$, a highway connecting $a$ to $c$ **bypasses** $b$.
5. A **parkway** is a throughway road that does not connect any two neighborhoods. 
6. An **interchange** is an intersection of roads.
7. A **freeway** is a highway whose only intersections are interchanges. 
8. A **ramp** is a segment roadthat intersects at least one street and ends at an interchange.











