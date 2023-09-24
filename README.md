# Big Sum

This repository contains a function called `aVeryBigSum` that calculates the sum of elements in an array, taking into account that some integers may be quite large.

## Function Description

The `aVeryBigSum` function takes the following parameter:

- `int ar[n]`: an array of integers.

It returns:

- `long`: the sum of all array elements.

## Input Format

The input format for this function includes:

- The first line consists of an integer, `n`, denoting the number of elements in the array.
- The next line contains `n` space-separated integers representing the array's elements.

## Output Format

The function returns the sum of the elements in the array as a long integer.

## Constraints

- The range of a 32-bit integer is [-2^31, 2^31-1].
- When adding several integer values, the resulting sum might exceed the above range. You might need to use a long int (or equivalent in other programming languages) to store such sums.

## Example

```python
# Sample Input
5
1000000001 1000000002 1000000003 1000000004 1000000005

# Sample Output
5000000015