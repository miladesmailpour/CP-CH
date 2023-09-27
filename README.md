# Apple and Orange Count

This repository contains a function called `countApplesAndOranges` that calculates the number of apples and oranges that land on Sam's house based on given information.

## Function Description

The `countApplesAndOranges` function takes the following parameters:

- `s`: an integer, the starting point of Sam's house location.
- `t`: an integer, the ending location of Sam's house location.
- `a`: an integer, the location of the Apple tree.
- `b`: an integer, the location of the Orange tree.
- `apples`: an integer array, distances at which each apple falls from the tree.
- `oranges`: an integer array, distances at which each orange falls from the tree.

It prints:

- Two integers on two different lines:
  - The first integer: the number of apples that fall on Sam's house.
  - The second integer: the number of oranges that fall on Sam's house.

## Input Format

The input format for this function includes:

- The first line contains two space-separated integers denoting the respective values of `s` and `t`.
- The second line contains two space-separated integers denoting the respective values of `a` and `b`.
- The third line contains `m` space-separated integers denoting the respective distances that each apple falls from point `a`.
- The fourth line contains `n` space-separated integers denoting the respective distances that each orange falls from point `b`.

## Output Format

The function prints two integers on two different lines:

- The first integer: the number of apples that fall on Sam's house.
- The second integer: the number of oranges that fall on Sam's house.

## Constraints

None

## Example

### Sample Input

```md
7 11
5 15
3 2
-2 2 1
5 -6
```

### Sample Output

```md
1
1
```

Explanation:

- The first apple falls at position 5+(-2) = 3.
- The second apple falls at position 5+2 = 7.
- The third apple falls at position 5+1 = 6.
- The first orange falls at position 15+5 = 20.
- The second orange falls at position 15+(-6) = 9.
- Only one fruit (the second apple) falls within the region between 7 and 11, so we print 1 as our first line of output.
- Only the second orange falls within the region between 7 and 11, so we print 1 as our second line of output.
