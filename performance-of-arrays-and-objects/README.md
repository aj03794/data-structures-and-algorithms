- How do objects and arrays work through the lens of Big O
- Why is adding elements to the beginning of an array costly
- Compare and contrast the runtime for arrays and objects, as well as built-in methods

#### The Big O of Objects

- Unordered data structure, key value pairs

```
let instructor = {
    firstName: 'Kelly',
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4]
}
```

###### When to use objects

- When you don't need order
- When you need fast access/insertion and removal

###### Big O of Objects

```
- Insertion - O(1)
- Removal - O(1)
- Searching - O(n)
- Access - O(1)
```

- When you don't need any ordering, objects are an excellent choice

- Hash maps are how objects work behind the scenes

###### Big O of Object Methods

```
- Object.keys - O(n)
- Object.values - O(n)
- Object.entries - O(n)
- hasOwnProperty - O(1)
```

#### Arrays

- Ordered Lists

###### When to use Arrays

- When you need order
- Not the only option - just the only one we get for free in js

###### Big O of Arrays

```
- Insertion - it depends
- Removal - it depends
- Searching - O(n)
- Access - O(1)
```

- If you have a valid index, you can jump immediately to the data, you don't have to access the previous indicies

- If you push an element to the end of the array - it's O(1)
- Inserting at the beginning of the array - you have to move all the elements 1 index to the right
    * You have to go through the array and do something to every element
    * This is O(n)
- Same goes for removing from the beginning - have to move all the elemnts 1 index to the left
    * You have to go through the array and do something to every element
    * This is O(n)
- Push and pop are always faster than shift and unshift
- Accessing the middle element is just as fast as accessing the left element
    

#### Big O of Array Methods

- push - O(1)
- pop - O(1)
- shift - O(n)
- unshift - O(n)
- concact - O(n) - technically this is O(n + m), n = array1.length and m = array2.length
- slice - O(n)
- splice - O(n)
- sort (nlogn)
- forEach/map/filter/reduce/etc - O(n)

- 