#### Which Data Structure is Best?

###### What Do They Do?

- `Data structures are collections of values, the relationships among them, and the functions or opreations that can be applied to the data`
    * Think about an array
        - Holds the values and also the relationship between those values (like order) and there are a lot of built in methods in order to interact with them

###### Why So Many?

- Different data structures excel at different things
- Some are highly specialized, while others (like arrays) are more generally used

- All of these at the end of the day do the same thing, but their behavior between the data and their functionality, the methods we get to act upon them are very different

###### Why Care?

- The more time you spend as a developer, the more likely you'll need to use one of these data structures
- Probably have worked with many of them unknowingly
    * The Dom in js for exerample is a tree

`There is no "BEST" data structure`

- They all excel in different situations

*Examples*

- Working with map/location data
    * Like google maps
    * Write code that will route you to the nearest gas station
        - Use a graph
        - Would be very difficult to use an array
- Need an ordered list w/ fast inserts/removals at the beginning and end
    - Use a linked list (arrays are slow with removals/inserts at beginning of data
- Web scraping nested HTML?
    - Use a tree
- Need to write a scheduler
    - If you're writing an app that has tasks that are scheduled and you need to find what's the highest priority task at any given point
    - Use a binary heap
