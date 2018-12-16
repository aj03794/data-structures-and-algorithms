#### Intro

- Master common problem solving patterns

###### Some Patterns

- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking

#### Frequenecy Counters

- This pattern uses objects or sets to collect values/frequencies of values
- This can often avoid the need for nested loops or O(n^2) operations with arrays/strings

###### An Example

```
Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same
```

```
same([1, 2, 3], [4, 1, 9]) // true
same([1, 2, 3,], [1, 9]) // false
same([1, 2, 1], [4, 4, 1]) // false
```

#### Multiple pointers

- Creating pointers or values that correspond to an index or position and move towards the beginning, end, or middle based on a certain consition

- Very efficient for solving problems with minimal space complexity

- Have a pointer that is looking at a *usually* a specific location in an array or a string
- And we have a second one and they work in some direction (towards each other, away, etc)

###### An example

- Write a function called **sumZero** which accepts a sorted array of integers
- The function should find the **first** pair where the sum is zero
- Return an array that includes both values that sum to zero or undefined in a pair does not exist

```
sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) //undefined
sumZero([1, 2, 3]) //undefined
```

#### Sliding Windows Pattern

- This pattern involves creating a window which can either be an array or string from one position to another
- Depending on a certain condition, the wndow either increases or closes and a new window is created
- Very useful for keeping track of a subset of data in an array/string etc
- Usually the window is moved from the left and move it to the right/end
- Keeping track of a subset of data

`hellothere` - what is the longest sequence of unique characters

###### An example

- Write a function alled maxSubArraySum which accepts an array of integers and a number calle **n**
- The function should calculate the max sum of **n** consecutive elements in the array

```
maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10 (8 + 2)
maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17 (2 + 5 + 2 + 8)
maxSumArraySum([], 4) // null
```

#### Divide and Conquer

- This patterns involves dividing a data set (string, array, linked list, tree, etc) into smaller chunks and then repeating a process with a subset of data
- Do something with each subset of data to decide what to do next

- This pattern can tremendously decrease time complexity

###### Example

- A classic example is binary search

- Given a **sorted** array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located
- If the value is not found, return -2

```
search([1, 2, 3, 4, 5, 6], 4) // 3
search([1, 2, 3, 4, 5, 6]), // 6
search([1, 2, 3, 4, 5, 6], 11) // -1
```