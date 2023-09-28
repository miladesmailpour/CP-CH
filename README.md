# CamelCase Word Count

This repository contains a function called `camelcase` that calculates the number of words in a string following CamelCase formatting.

## Function Description

The `camelcase` function takes the following parameter:

- `string s`: the string to analyze.

It returns:

- `int`: the number of words in the CamelCase string.

## Input Format

The input format for this function includes:

- A single line containing a string `s`.

## Output Format

The function returns an integer representing the number of words in the CamelCase string.

## Constraints

None

## CamelCase Formatting

In CamelCase formatting:
- The string is a concatenation of one or more words consisting of English letters.
- All letters in the first word are lowercase.
- For each of the subsequent words, the first letter is uppercase, and the rest of the letters are lowercase.

## Example

### Sample Input

```md
saveChangesInTheEditor
```

### Sample Output

```md
5
```


Explanation:

The string `saveChangesInTheEditor` contains five words: `save`, `Changes`, `In`, `The`, and `Editor`.

Feel free to use this function to calculate the number of words in CamelCase strings or modify it as needed.
