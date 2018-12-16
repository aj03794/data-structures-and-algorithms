https://hackernoon.com/programming-with-js-merge-sort-deb677b777c0

- Merge sort is one of the commonly used sorting algorithms in computer science
- Used by Firefox and Safari in their implementation of Array.prototype.sort()

- How do you sort a list with merge sort, how does this algorithm work?
- Revolves around the idea that `it's easier to sort two sorted arays rather than one unsorted one`
- Once we have our two sorted arrays we start comparing their items one by one and adding the smaller item in our result list
- Imagine you've got two lists A and B
- You compare A[0] and B[0]
- Let's say that A[0] is smaller - we add it to the result list and continue
- Then compare A[1] to B[0]
- This time B[0] is the smaller one so we add it and continue comparing A[1] to B[1] and so on

- At the end of the sorting any left variables are concatenated at the end of our results list - since A and B arrays are already sorted this will not cause reordering

###### So how does it work?

- Arrays of multiple items can't be compared until they are sorted
- We can achieve this by splitting the array into halves recursively until we reach a point in which we compare multiple pairs of single-item pairs

```
[1, 5, 3, 9, 6, 4, 8]
[1, 5, 4, 9] | [6, 4, 8]
[1, 5] | [3, 9] | [6] | [4, 8]
[1] | [5] | [3] | [9] | [4] | [8]
```

- Once arrays contain a single item, we start comparing them 1 by 1 and using the above mentioned concatentating method

```
[9, 3, 6, 4]
[9, 3] | [6, 4]
[9] | [3] | [6] | [4]
[3, 9] | [4, 6]
[3, 4, 6, 9]
```

