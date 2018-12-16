https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/

###### Asymptotic analysis

Why performance analysis?
- Performance == scale
- Being performant allows you to to have many other important things like user friendliness, modularity, security, and maintainability
- Imagine a text editor that can load 1000 pages, but can spell check 1 page per minute OR an image editor that takes 1 hour to rotate your image 90 degrees
- `If a software feature cannot cope with the scale of tasks users need to perform - it is as good as dead`

`Given two algorithms for a task, how do we find out which is better?`
- One naive way of doing this is to  implement both algorithms and run the two programs on your computer for different inputs and see which one takes less time
- Many problems with this approach
    1. It might be possible that for some inputs, the first algorithm performs better than the second. And for some inputs, the second performs better
    2. It might also be possible that for some inputs, the first algorithm performs better on one machine and the second works better on another machine for some other inputs

- `Asymptotic Analysis` is the big idea that handles this issue of analyzing algorithms
- As we evaluate the performance of an algorithm in terms of input size (we don't measure the actual running time)
- We calculate how does the time (or space) taken by an algorithm increase with input size

- For example, let us consider the search problem (searching a given item) in a sorted array
- One way t search is Linear Search (order of growth is linear) and the other way is Binary Search (order of growth is logarithmic)
- To understand how Asymptotic Analysis solves the above mentioned problems in analyzing algorithms, let's say we run the Linear Search on a fast computer and Binary Search on a slow computer
- For small values of input array size n, the faster computer may take less time
- But after certain alues of the input array, the Binary Search will definitely be faster compared to the Linear Search
    * This is true even though the Binary Search is on a slower computer
- The reason is the order of growth of Binary Search with respect to input size is logarithmic while the order of growth of Linear Search is linear
- The machine dependent constants can always be ignored after certain values of input size

`Does Asymptotic Analysis always work?`
- Not perfect but it's the best available solution for analyzing algorithms
- For example, say there are two sorting algorithms that take 1000nLogn and 2nLogn time respectively on a machine
- W/ Asymptotic analysis we can't judge which one is better as we can ignore constants in Asymptotic Analysis

- Also in Asymptotic Analysis, we always talk about input sizes larger than a constant value
- `It might be possible that those large inputs are never given to your software and an algorithm which is asymptotically slower, always performs better for your particular situation`
- You may end up choosing an algorithm that is Aymptotically slower but it's actually faster for your software

*Note* 
```
Linear search will always be faster than binary search because binary search needs to be sorted before searching
```

###### Node's implementation of sort from javascript spec

https://www.linkedin.com/pulse/javascript-v8-sorting-algorithm-behind-scene-arraysort-mazahar-shaikh

- It has a combination of InsertionSort and QuickSort
- It goes for InsertionSort if the array length is short (length <= 10) otherwise QuickSort is used