# Diagonal Difference

This repository contains a function called `diagonalDifference` that calculates the absolute difference between the sums of the two diagonals in a square matrix.

## Function Description

The `diagonalDifference` function takes the following parameter:

- `int arr[n][m]`: an array of integers representing a square matrix.

It returns:

- `int`: the absolute diagonal difference.

## Input Format

The input format for this function includes:

- The first line contains a single integer, `n`, the number of rows and columns in the square matrix.
- Each of the next `n` lines describes a row, `arr[i]`, and consists of `n` space-separated integers representing the matrix elements.

## Output Format

The function returns the absolute difference between the sums of the matrix's two diagonals as a single integer.

## Constraints

None

## Example

### Sample Input
```md
3
11 2 4
4 5 6
10 8 -12
```

### Sample Output
```md
15
```