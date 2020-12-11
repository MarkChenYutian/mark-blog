# USACO 2016 Dec Gold Analysis

## Problem 1 Moo-cast

### Problem Summary

Cows want to  communicate with each other by walkie-talkies. It is known that a walkie-talkie that costs $X$ dollars will have a broadcast radius of $\sqrt{X}$. Given the location of all the cows in the form of $(x, y)$ coordinate, what is the minimum cost to buy walkie-talkie such that every cow can communicate with each other (may not be directly but through several 'hops').

### Proposed Solution

Basically, what we want to find in this question is the greatest shortest distance between different points. For each point, we have a shortest distance that connect to other points. The amount of money required is the greatest 'shortest distance'.

**However, this question requires more than this, since linking each point with the nearest point may lead to several subgraphs that are not connected between each other**.

Therefore, we can simply traverse all the possible point pair and calculate their distance square if they are not in the same graph. Below is a draft of code

```python
Points = [(x1, y1), (x2, y2), ..., (xn, yn)]
X = -1
for p1 in range (len(Points)):
	a = Points[p1]
	for p2 in range (p1 + 1, len(Points)):
		b = Points[p2]
		if not InSameGraph(a, b):
			X = max(X, math.sqrt((a[0] - b[0])**2 + (a[1] - b[1])**2)
return X
```

The function `InSameGraph` can be implemented by storing all the points in a UFDS. With appropriate path compression methods, the time complexity of `InSameGraph` can be bound to approx. $O(\log{n})$.

### Time Complexity Analysis

This proposed algorithm has a time complexity of $O(n^2\log{n})$. Since the number of point $n$ in the question is no more than 1000, the computational step of this proposed solution should be no more than $1\times 10^7$, which means that it will not  use more than 4 sec to run.

## Problem 2. Cow Checklist

### Problem Summary

There are two types of cows, noted as type H and type G. There are $H$ cows that are type H and $G$ cows that are type G. However, John must access all the cows of type H in order from 1 to $H$, and access all the cows of type G in order from 1 to $G$.

The position of all cows are given as x-y coordinate, moving distance $d$ will cost the energy of $d^2$, what is the minimum energy consumption for John to access all cows.

### Proposed Solution

We can use dynamic programming to solve this problem. Let $E[0][h][g]$ represent the minimum energy John has to consume to visit $h$ H-type cows, $g$ G-type cows, and finally stop at H-type cow. $E[1][h][g]$ represent the minimum energy John has to consume to visit $h$ H-type cows, $g$ G-type cows, and finally stop at G-type cow.

Then, we can use this function to calculate through the whole table.
$$
E[0][h + 1][g] = \min(E[1][h][g]+Dist(G_g, H_{h+1})^2,\, E[0][h][g] + Dist(H_h, H_{h+1})^2)
$$

$$
E[0][h][g+1] = \min(E[1][h][g]+Dist(G_g, G_{g+1})^2,\, E[0][h][g] + Dist(H_h, G_{g+1})^2)
$$

... (the equation for another 2 situations are omitted)

By doing so, we can calculate the result of $E[0][H][G]$, which will be the final result (since John have to end his walk at a H-type cow).

### Time Complexity Analysis

Since calculating one number in the table will have a time complexity of $O(1)$, the total time complexity will be $O(HG)$. Because $1\leq H\leq 1000$ and $1 \leq G \leq 1000$, the algorithm will require at most $1\times 10^7$ steps, and it is possible for Python 3 to run in 4 sec.

## Problem 3. Lasers and Mirrors

### Problem Summary

Cows want to direct a laser to the barn. However, they can't move the laser generator. Therefore, they decide to install a set of mirrors that will change the direction of laser on the fence post. Given the position of laser generator, barn, and fence posts, the output will be the **minimum** amount of reflection  the laser has to pass to arrive at the barn.

### Proposed Solution

Basically, we can see each post on the field as two different lines, one horizontal and one vertical. Each post can help us to move from a horizontal line to vertical line (and vice versa).

We can use a *breadth first search* (BFS) directly here. Since the property of BFS makes sure the first path found is the shortest path, we will break out the loop as long as we found path. The pseudocode will be like this:

```python
# Line is noted as (coordinate, horizontal?, reflectTime)
fringe = LinkList()
fringe.append((x1, True, 0), (y1, False, 0))
exploredEdge = set()
result = -1
while len(fringe) > 0:
    currEdge = fringe.pop()
    if (currEdge[0], currEdge[1]) in exploredEdge: continue
   	exploredEdge.add((currEdge[0], currEdge[1]))
    if isResult(currEdge): result = currEdge[2]
    for newEdge in getTransitionEdge(currEdge):
        fringe.add((newEdge[0], not newEdge[1], currEdge[2] + 1)) # changing edge means the laser has been reflected for one more time, also, the direction will be (must be) changed after reflection
print(result)
```

Since there are $1\times 10^5$ posts, the time complexity should be at most $O(n \log{n})$. Since the BFS itself will have a time complexity of $O(n)$, we must implement `isResult` and `getTransitionEdge` functions with time complexity of $O(\log n)$.

Here are the ways to implement these two functions:

`isResult` - if the line is horizontal and its $y$ value equals to $y_2$ or the line is vertical and its $x$ value equals to $x_2$, the line will pass through the destination. This operation can be done in $O(1)$.

`getTransitionEdge` - Here, we need two different dictionaries to help us. One dictionary use the *x-coordinate* of line as key, and value is a list of *y-coordinates*. Another dictionary use the *y-coordinate* of line as key, and value is a list of *x-coordinates*. When we are on a horizontal line, we will use the y -> x dictionary. When we are on a vertical line, we will use the x -> y dictionary. This operation can be done in $O(m)$, where $m$ is the number of values in one key.

### Time Complexity Analysis

The total time complexity of this proposed solution is $O(mn)$, where $m$ is the *Maximum number of posts on one line*, and $n$ is the total number of posts. **There do exist some extreme case where $m\approx n$.** Under such case, however, the time complexity of BFS will be greatly decreasing, since the depth of tree will decrease drastically.

Therefore, this program will be able to give out solution in less than 4 sec for most of the cases.