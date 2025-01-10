/*
Data structures
  used to organize and manage the data effectively
  
  - Arrays
    - Arrays are ordered collections of elements or items
      that can hold multiple values

    - [] Array literals
    - Index/subscript
        refers to the position of an element in the data structure
    - In the context of JS, the array indices are zero-based 
      (meaning the first element starts at 0)
    
  - Mutator methods
      - These are functions that 'mutate' or change an array after it's created.
      - These methods manipulate the original array, performing various tasks such as adding and removing elements
          - push()
            - Adds an element to the end of the array and
              returns the array length 
          
            - Stacks (LIFO: Last In, First Out)
              - Pile of plates:
                c
                b
                a
              - Syntax: arrayName.push();
          - pop()
            - Removes the last element in an array and returns the removed element
            - Syntax: arrayName.pop()
          - shift()
            - Removes an element at the beginning of an array
              and returns the removed element
            - For queues (FIFO: First In, First Out)
            - Syntax: arrayName.shift()

        - splice()
          - Simultaneously removes elements from a specified index and adds elements
          - Syntax: arrayName.splice(startingIndex, deleteCount, elementToBeAdded)
*/

let beatles = ["John", "Paul", "Ringo", "George"];
console.log("Current Array:");
console.log(beatles);

let myBasket = ["Happy", 36, true, -90];
console.log(myBasket);

let person = {
  name: "Happy",
  age: 36,
  isSingle: true,
  isGrade: 90,
};
console.log(person);

let beatlesLength = beatles.push("Rob");
console.log(beatles.length);
console.log("Mutated Array:");
console.log(beatles);

// Mutator
beatles.push("Ken", "Jedd");
console.log("Mutated2");
console.log(beatles);

// pop
let removeMember = beatles.pop();
console.log(removeMember);
console.log("Mutated Array from pop method:");
console.log(beatles);

let anotherMember = beatles.shift();
console.log(anotherMember);
console.log("Mutated Array from shift method:");
console.log(beatles);

// Splice example
beatles.splice(1, 2, "Jun", "Mark");
console.log("Mutated SPLICE");
console.log(beatles);

// sort()
/*
    - Rearranges the elements in alphanumeric order
    - Syntax: arrayName.sort();
*/

let boolArray = [true, false, true, false];
boolArray.sort();
console.log(boolArray);

// reverse()
/*
    - Reverses the order of the elements
    - Syntax: arrayName.reverse()
*/
console.log(beatles);
beatles.reverse();
console.log("Mutated Reverse:");
console.log(beatles);

// Non-mutators methods
/*
  Non-mutator methods are functions that do not modify or change an 
  array after it is created.
  - These methods do not manipulate the original array,
    but perform various tasks such as returning elements from an array,
    combining arrays, and printing the output.
*/

let countries = ["US", "PH", "CAN", "SG", "JP", "TH", "FR", "DE"];

// indexOf()
/*
- Returns the index number of the first matching element found in an array
- If no match is found, the result will be -1
- The search process is done from the first element proceeding to the last element
- Syntax: arrayName.indexOf(searchValue);
  arrayName.indexOf(searchValue, fromIndex);
*/
console.log(countries);
let firstIndex = countries.indexOf("TH");
console.log(`Result is ${firstIndex}`);

// Invalid
console.log(countries);
let invalidIndex = countries.indexOf("BR");
console.log(`Result is ${invalidIndex}`);

// lastIndexOf()
/*
- Returns the index of the last matching element found in the array
- The search process is done from the last element proceeding to the first element
- Syntax: arrayName.lastIndexOf(searchValue);
  arrayName.lastIndexOf(searchValue, fromIndex);
*/

console.log(countries);
let lastIndex = countries.lastIndexOf("PH");
console.log(`Result is ${lastIndex}`);

// Getting the index number starting from a specified index
console.log(countries);
let specifiedIndex = countries.lastIndexOf("PH", 4);
console.log(`Result is ${specifiedIndex}`);

// slice()
/*
  - Portions/slices elements from an array and returns a new array
  - Syntax: 
    arrayName.slice(startingIndex);
    arrayName.slice(startingIndex, endingIndex);
*/

console.log(countries);
let sliceArrayA = countries.slice(1);
console.log(`This is a slice: ${sliceArrayA}`);

console.log(countries);
let sliceArrayA2 = countries.slice(1, 4);
console.log(sliceArrayA2);

console.log(countries);
let sliceArrayA3 = countries.slice(-4);
console.log(`This is -4 ${sliceArrayA3}`);

// toString()
/*
- Returns an array as a string separated by commas
- Syntax: arrayName.toString();
*/

let stringArray = countries.toString();
console.log(`${stringArray}`);

// concat()
/*
 * Combines 2 arrays and returns the combined result
 * Syntax:
 *      arrayA.concat(arrayB);
 *      arrayA.concat(elementB);
 */
let taskArrayA = ["drink java", "eat JavaScript"];
let taskArrayB = ["inhale CSS", "breathe Sass"];
let taskArrayC = ["get Git", "be Node"];

let tasks = taskArrayA.concat(taskArrayB);
console.log(`Result from concat: ${tasks}`);

let tasksAll = taskArrayA.concat(taskArrayB, taskArrayC);
console.log(`Result from concat: ${tasksAll}`);

/*
    Combine arrays with elements
 */
let combineTasks = taskArrayA.concat("smell express", "throw react");

console.log(combineTasks);

/*
join()
  - Returns an array as a string separated by a specified separator
  - Syntax: arrayName.join('separatorString')
*/

let user = ["Nicole", "Mark", "Carl", "Cedric"];
console.log(user);
console.log(user.join(" - "));

// Iteration
/*
Iteration methods are loops designed to perform repetitive
tasks on arrays. These methods iterate over all items in an array.
- Useful for manipulating array data resulting in complex tasks.
- Array iteration methods normally work with a function supplied as an argument.

forEach()
- Similar to a for loop that iterates on each array element.
- For each item in the array, the anonymous function passed in the forEach() method will run.
  - The anonymous function is able to receive the current item being iterated or looped over by assigning a parameter.
- The forEach() method does not return anything.
- Syntax:
  arrayName.forEach(function(individualElement) {
    // code block
  })
*/

tasksAll.forEach(function (task) {
  console.log(task);
});

// Using forEach with condition statement
let filteredTask = [];

// Good practice to print elements in the console
// when working with an array iteration method to have an
// idea of what information is being worked for each iteration
// Creating a separate variable to store the result is also a good practice

tasksAll.forEach(function (task) {
  console.log(task);
  console.log(task.length);
  if (task.length > 10) {
    filteredTask.push(task);
  }
});

console.log(`Result of filtered task: ${filteredTask}`);

// Map
/*
Iterates on each element and returns a new array with
different values depending on the result of the function's operation.
This is useful for tasks where mutating/changing the elements is required.
Unlike the forEach method, the map method requires the use of a return statement
to create another array with the performed operation.
- Syntax:
  let/const resultArray = arrayName.map(function(individualElement));
*/
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

let numberMap = numbers.map(function (number) {
  return number * number;
});
console.log(numberMap);

// map() vs forEach

let numberForEach = numbers.forEach(function (number) {
  return number * number;
});

console.log(numberForEach); // forEach does not return a new array

// every()
// - Checks if all the elements in an array meet the given condition
// - Useful for validating data stored in arrays, especially when dealing with large amounts of data
// - Returns true if all elements meet the condition and false otherwise
// - Syntax:
//   let/const resultArray = arrayName.every(function(individualElements) {
//     return expression/condition;
//   });
console.log(numbers);
let allValid = numbers.every(function (number) {
  return number < 3;
});
console.log(`This is a every ${allValid}`);

// some()
// - Checks if at least one element in the array meets the given condition
// - Returns true if at least one element meets the condition and false otherwise
// - Syntax:
//   let/const resultArray = arrayName.some(function(individualElements) {
//     return expression/condition;
//   });
console.log(numbers);
let someValid = numbers.some(function (number) {
  return number < 3;
});
console.log(someValid);

// Using the result of every/some methods for further operations
if (someValid) {
  console.log("Some numbers are greater than 2");
}

/* 
filter()
- Returns a new array that contains elements that meet the given condition.
- Returns an empty array if no elements are found.
- Useful for filtering array elements with a given condition.
- Syntax:
  let/const resultArray = arrayName.filter(function(individualElement) {});
*/
let filterValid = numbers.filter(function (number) {
  return number < 3;
});

console.log(filterValid);

// No elements found
let nothingFound = numbers.filter(function (number) {
  return number > 10;
});

console.log(nothingFound);

// Filtering using forEach
let filterNumber = [];

numbers.forEach(function (number) {
  console.log(number);
  if (number < 3) {
    filterNumber.push(number);
  }
});

console.log(filterNumber);

let products = ["Mouse", "Keyboard", "Monitor", "AVR"];

// includes()
/*
- includes() method checks if the argument passed can be found in the array.
  - It returns a boolean, which can be saved in a variable.
  - Returns true if the argument is found in the array.
  - Returns false if it is not found.
  - Syntax:
    arrayName.includes(argumentToFind);
*/

console.log(`This is products: ${products}`);
let productFound1 = products.includes("Mouse");
console.log(productFound1);
let productFound2 = products.includes("Headset");
console.log(productFound2);

// Method chaining
let filterProducts = products.filter(function (product) {
  return product.toLowerCase().includes("a");
});
console.log(filterProducts.map((product) => product.toLowerCase()));

// reduce()
/*
- Evaluates the elements from left to right and reduces the array to a single value.
- Syntax:
  let/const resultArray = arrayName.reduce(function(accumulator, currentValue) {
    return expression/operation;
  });
- The accumulator parameter stores the result of each iteration.
- The currentValue is the current/next element in the array being evaluated in each iteration.
*/
let iteration = 0;

let reduceArray = numbers.reduce(function (x, y) {
  console.warn(`Current iteration: ${++iteration}`);
  console.log("Accumulator: " + x);
  console.log("Current value: " + y);

  // Operation to reduce array to a single value
  return x + y;
});
console.log(`Result of reduce method: ${reduceArray}`);

// Reducing string arrays
let lists = ["Hello", "Again", "Love"];

let reduceJoin = lists.reduce(function (x, y) {
  console.log("Accumulator: " + x);
  console.log("Current value: " + y);
  return x + " " + y;
});
console.log(`Result: ${reduceJoin}`);
