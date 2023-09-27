# Grading Students

This repository contains a function called `gradingStudents` that automates the process of rounding students' grades based on a specific grading policy.

## Function Description

The `gradingStudents` function takes the following parameter:

- `int grades[n]`: an array of integers representing the grades of students.

It returns:

- `int[n]`: the grades after rounding as per the specified policy.

## Input Format

The input format for this function includes:

- The first line contains a single integer, `n`, the number of students.
- Each of the `n` subsequent lines contains a single integer, `grades[i]`, representing the grade of a student.

## Output Format

The function returns an array of integers representing the grades after rounding.

## Grading Policy

- Every student receives a grade in the inclusive range from 0 to 100.
- Any grade less than 40 is considered a failing grade.
- To round a grade:
  - If the difference between the grade and the next multiple of 5 is less than 3, round up to the next multiple of 5.
  - If the grade is less than 40, no rounding occurs as the result will still be a failing grade.

## Constraints

None

## Example

### Sample Input

```md
4
73
67
38
33
```

### Sample Output

```md
75
67
40
33
```

Explanation:

- The first grade, 73, is rounded up to 75 because the difference between 75 and 73 is less than 3.
- The second grade, 67, remains unchanged as it's already 67.
- The third grade, 38, is rounded up to 40 to meet the minimum passing grade requirement.
- The fourth grade, 33, remains unchanged as it's less than 40.
