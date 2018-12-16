https://hackernoon.com/programming-with-js-insertion-sort-1316df8354f5

- Works by splitting array into two sections - a sorted and unsorted one
- Don't know if any of the items are in place yet, so we will start our sorted list with the first item

- Then we start going through the other items in the array
- For each one we must find it's proper place in the sorted array
- We do that by finding the first smaller item or until we reach the beginning of the sorted list
- Example below of what's going on
- The sorted array is bold

```
5, 9, 13, 4, 1, 6 // the only sorted part is the first item
5, 9, 13, 4, 1, 6 // 9 > 5 so we don't move it
5, 9, 13, 4, 1, 6 // 13 > 9 we don't move it
4, 5, 9, 13, 1, 6 // compare all to 4, until we reach the head 
1, 4, 5, 9, 13, 6 // compare all to 1, until we reach the head
1, 4, 5, 6, 9, 13 // first smaller item is 5, place 6 before it
```

###### How does it work?

- Special thing about insertion sort is that we don't swap items
- Even though it seems like we're swapping them and moving them around, what actually happens is that we loop through the sored part and find the first smaller item (or the head of the array) and place our item there
- What do we do with the items before them
- Since we're looping through each one of them, every higher number is actually moved one index copied ahead in order to make way for the current item


#### Intro

- Builds up the sort by gradually creating a larger half which is always sort
- Instead of finding the largest/smallest element at at a time, it takes each element where it should go in the sorted half

![](../images/14.png)

- Take an element one at a time and inserting it into the correct spot

*Insertion Sort Pseudocode*

- Start by picking the second element in the array
- Now comapre the second element with the one before it and swap it if necessary
- COntinue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
- Repeat until the array is sorted

###### Big O Complexity

- Worse case is O(n^2)
- But if our data is almost already sorted
- Insertion sort is good when it needs to sort incoming data - we don't already have the complete data set - data is coming in live or streaming
