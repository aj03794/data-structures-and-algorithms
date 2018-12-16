- What are the steps you can take to solve a problem you don't know right away?

#### Introduction


###### What is an Algorithm

- `A process or set of steps to accomplish a certain task`

###### Why do I need to know this?

- Almost everything that you do in programming involves some kind of algorithm
- It's the foundation for being a successful problem solver and developer

###### How Do You Improve?

1. Devise a plan for solving problems
2. Master common problem solving patterns

###### Problem Solving Strategies

- Understand the problem
- Explore Concrete Examples
- Break it down
- Solve/Simplify
- Look Back and Refactor


#### Understand the Problem

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs?
    * In other words, do I have enough information to solve the problem?
        - You may not be able to answer this question until you set about solving the problem
5. How should I label the important pieces of data that are a part of the problem?


Example
```
Write a function which takes two numbers and return their sum?
```

1. Implement addition
2. A really large number + A really large number in javascript is infinity? How do we handle these types of inputs?
3. Floating point? String? Integer?
4. If only 1 number passed in, what do we do?
5. What matters? Name out function add and num1 and num2 as arguments and return sum as output

#### Concrete Example

- Coming up with examples can help you understand the problem better
- Example also provide sanity checks that your eventual solution works how it should
- You can learn more information by doing these examples
    * Like User Stories or Unit Tests

###### Explore Examples

- Start with Simple Examples
- Progress to More Complex Examples
- Explore Examples with Empty Inputs
- Explore Examples with Invalid Inputs

Example

`Write a function which takes in a string and returns counts of each character in the string`

*Simple*

charCount('aaaa') // { a: 4 }
charCount('hello') { h: 1, e: 1, l: 2, o: 1 }

- Do we want to include characters that are not in there and just have them set to 0?

*Complex*

"My phone number is 12314"

- Expected output? Do we we want to account for spaces? What about other characters like dollar signs, underscores, hyphens, etc

"Hello hi"

- Do we want to ignore upper case lettering? Should it be its own separate thing? { H:1, h:1 }

*Empty Inputs*

charCount(), char("")

- What do we want to return in this case?

*Invalid Inputs*

charCount(1), charCount(null)

- What do we want to do here?

#### Break It Down

- "Here are the steps, I'm going to take"
- Explicity write out the steps you need to take
- This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details

- `Write a function which takes in a string and returns counts of each character in the string`

```
function charCount(str) {

    // do something
    // return object with keys that are lowercase alphanumeric characters in the string
    // values should be the counts for those characters in the string

}
```

```
function charCount(str) {

    // make object to return at end
    // loop over string for each character...
        // if the char is a number/letter AND key in object, add 1 to count
        // if the char is a number/letter AND not in object, add it and set value to 1
        // if character is something else, don't do anything
    // return object at end

}
```

#### Solve or Simplify

###### Simplify

- Find the core difficulty in what you're trying to do
- Temporarily ignore that difficulty
- Write a simplified solution
    * At this point you'll often gain insight into the difficult part of the problem
- Then incorporate that difficulty back in

Example

- `Write a function which takes in a string and returns counts of each character in the string`

- If you struggle with looping, start with creating the object and seeing how adding the 1st character to the object is going to work
    * Or maybe you do the first 5 characters to get a better understanding
- What if you don't remember the javascript method to lowercase or uppercase a character?
    * Ignore this for now and put uppercase and lowercase characters in there and just deal with it later
        - Explain what you are doing, I am ignoring this because _____ and I would handle this in a real life scenario by _______

```
function charCount(str) {
    let result = {}
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase()
        if (result[char] > 0) {
            result[char]
        }
        else {
            result[char] = 1
        }
    }
    return result
}
```

- Options for checking if the character is an alphanumeric character
    - Regex
    - Array containing all alphanumeric characters
    - Something with ASCII codes maybe

- Write what you can even if it's not perfect, already 90% of the way there

#### Look Back and Refactor

###### Refactoring Questions

1. Can you check the result?
2. Can you derive the result differently?
3. Can you understand it at a glance?
4. Can you use the result or method for some other problem
5. Can you improve the performance for your solution?
6. Can you think of other ways to refactor?
7. How have other people solved this problem?