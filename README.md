# String Reduction

This repository contains a function called `superReducedString` that reduces a string of lowercase characters by removing adjacent matching pairs of letters.

## Function Description

The `superReducedString` function takes the following parameter:

- `string s`: a string to reduce.

It returns:

- `string`: the reduced string or "Empty String" if the final string is empty.

## Input Format

The input format for this function includes:

- A single string `s`.

## Output Format

The function returns a string representing the reduced string or "Empty String."

## Constraints

None

## Reduction Process

In each operation:

- Select a pair of adjacent letters that match.
- Delete the selected pair of letters.
- Delete as many characters as possible using this method.

If the final string is empty, return "Empty String."

## Example

### Sample Input 0

```md
aaabccddd
```

### Sample Output

```md
abd
```

Explanation 0:

Perform the following sequence of operations to get the final string:

1. `aaabccddd` → `abccddd`
2. `abccddd` → `abddd`
3. `abddd` → `abd`
