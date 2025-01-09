/*
Data stuctures
  used to organize and manage the data effectove;y
  
  -arrays
    -array are ordered collection of elemetnts or items
    that can hold multiple  values

    -[] array literals
    -index/subscipt
        refers to the postion of a elemets in the data stucture
    - in the contect of JS, the array indices are zero-based 
        (meanin first elemts starts is at 0)
    
  -mutator methods
      -tehse are funtion that 'mutate' or change and
      array after tehy created
      -these methods manipulat the original array performing
      varios tasks such as assing and removing elemets
          -push()
            -adds an elements is the end of aray and
            return the array lenght 
          
            -stacks
              -Last ub firstour data structure(LIFO)
              -pile plates
                c
                b
                a
              -stynac: arrayName.push();
          -pop()
            -removes the last element in an array and returnd the removed elemt
            -styntax: array.Name()
          -shift
            -removes an elemet at the beginning of array
            and returnd the removed element
            -for queue FIFO first in First Out
            -syntax: arrayName.shift

        -splice
          -simutaneosly removed elemnts from a specified index
          number and ad elements
          -syntax: arrayName.splice(startingIndex, deleteCount, elementToBeAdded)
*/

let beatles = ["John", "Paul", "Gringo", "George"];
console.log("currentArray");
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
console.log("Mutted array");
console.log(beatles);

// Mutator
beatles.push("Ken", "Jedd");
console.log("Mutated2");
console.log(beatles);
// pop
let removeMember = beatles.pop();
console.log(removeMember);
console.log("Mutated array from pop method: ");
console.log(beatles);
let anotherMember = beatles.shift();
console.log(anotherMember);
console.log("Mutated array from pop method: ");
console.log(beatles);
// // Create an Array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // At position 2, remove 2 items
// fruits.splice(1, 2);

// console.log(fruits);

beatles.splice(1, 2, "jun", "mark");
console.log("Mutated");
console.log(beatles);

// sort()
/*
    -rearranges the elents in alphanumeric order
    -syntext: arrayName.sort();
*/

let boolArray = [true, false, true, false];
boolArray.sort();
console.log(boolArray);

// reverse()
/*
    -reverses the order of the lements 
    -syntax: arrayName.reverse() */
beatles.reverse();
console.log("Mutated Reverse");
console.log(beatles);

// Non-mutators method

/*
  Non-mutator methods are function that do not mofiy of change an 
  array after they created
  -these methods do not manipluate the orginal array
  performing varios task such as returning elements from an
  arry and combing arrays and prining the output
  */
let countries = ["US", "PH", "CAN", "SG", "JP", "TH", "FR", "DE"];

// indexOf()
/*
-returns the index number of the first matching elements
found in an array
-if no matach found the result will be -1
-the searach procces will be done from the first element
proceeding to the last elemts
-syntac
arrayName.indexOf(seechValue);
arrayName.indexof(searchVakiue, fromIndex)
*/
console.log(countries);
let firstIndex = countries.indexOf("TH");
console.log(`Resule is ${firstIndex}`);
// Invalid
console.log(countries);
let invalidIndex = countries.indexOf("BR");
console.log(`Resule is ${invalidIndex}`);

/**
 * lastIndexOf(;
 *
 * -return in the indexog the last matching elemnts
 * found in array
 * -the search process will be done frome last elements
 * proceding to the first elemnt
 * -syntax:
 *  arrayName.lastIndexOf(seachValue);
 * arrayName.lastIndexOf(searchValue, fromIndex)
 *
 *
 */

console.log(countries);
let lastIndexOf = countries.lastIndexOf("PH");
console.log(`Resule is ${lastIndexOf}`);

// Getting the index number startying from a specifiend indexconsole.log(countries);
console.log(countries);
let specifiedIndex = countries.lastIndexOf("PH", 4);
console.log(`Resule is ${specifiedIndex}`);

// slice
/**

slice()
-portions/slices elements from an array and returns
a new array
  -syntax
      arrayName.slice(StartingIndex);
      arrayName.slice(startingIndex, endingIndex)
 */

console.log(countries);
let sliceArrayA = countries.slice(1);
console.log(sliceArrayA);
// Slicing off elemnts from a speciend index to another

console.log(countries);
let sliceArrayA2 = countries.slice(1, 4);
console.log(sliceArrayA2);

// slicing off elments starting form the last elemns of an array

console.log(countries);
let sliceArrayA3 = countries.slice(-4);
console.log(sliceArrayA3);

// toSting();
/*
-returns an array as a string sepated by commas
-stynatax: arrayName.toString();
*/

let stringArray = countries.toString();
console.log(`${stringArray}`);

// concat()
/**
 * -combine 2 arrays and returns the combine results
 * -syntax:
 *      arrayA.concat(arrayB)
 *      arrayA.concat(elementB)
 */
let taskArrayA = ["drink java", "eat javascipt"];
let taskArrayB = ["inhale CSS", "breath sass"];
let taskArrayC = ["get git", "be node"];

let tasks = taskArrayA.concat(taskArrayB);
console.log(`Result from concat: ${tasks}`);

let taskss = taskArrayA.concat(taskArrayB, taskArrayC);
console.log(`Result from concat: ${taskss}`);

/*
    Combine arrays with elemnts
 */
let combineTasks = taskArrayA.concat("smell express", "throw react");

console.log(combineTasks);

/*
join()

  - returns an array as a string sepated by spevifed separtor
  -syntac: arrayName.join('separatirString)
*/

let user = ["Nicole", "Mark", "Carl", "Cedric"];
console.log(user);
console.log(user.join(" sinapak si "));

// Iteration
/*
Iteration
  -iteration methods are loops designed to perfor repetitve
  tasks on arrays
    -iteration method loops overall items in an array
    -userfol for manipulating array data resulting in 
    complex tasks
    -array iteration methods normally work with a function
    supplied as an arguments

    forEach()
    -similar to a for loop that iterates on each array elemnts
    -for each itemn in the array, the anonymous funtion passed
    in the forEach() mehtod will be run
      -the anonymous functions is able to recieved the 
      currnet item neing iterated or loop over by assigning a parameter
      - varibale names for the array are
      normally wirtten in the Plural for ogf the data 
      stored in an array
      -forEach() does not return anything
      -syntax:
      arrayName.forEach(function(indivElemnts){
      code block
      })
*/

taskss.forEach(function (task) {
  console.log(task);
});

// USing for each with conditojn statemtnt
let filteredTask = [];

/*
its a good pracrice to print elements in the console
when working with an array iteration method to have an
idea of what information is being worked for each iteration
of the loop
-creating a separate variable to store result of array iteratuon
methods are also good pracrice to avoid confusion by modifyung
the orging array
*/

taskss.forEach(function (task) {
  // if the elment/string's is greater than 10 char
  // add elemt to the filteredTask
  console.log(task);
  console.log(task.length);
  if (task.length > 10) {
    filteredTask.push(task);
  }
});

console.log(`Resule of filtered task: ${filteredTask}`);

// Map
/*
Iterates on each elemnts and return new array with
difrfernt values depending on the result of the function's operation
-this is useful for performin tasj where mutatung/
changing the elements are required
-unlike the foreach methos. the map method required the use
of a return 'statemtn in order to creaate another array 
with the perform opertation
-syntax:
let/const resutArray = arrayName.map(function(individualElmetn))
*/
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
let numberMap = numbers.map(function (number) {
  return number * number;
});
console.log(numberMap);

// map() vs forECH

let numberForEach = numbers.forEach(function (number) {
  return number * number;
});

console.log(numberForEach);
// for each(), loops overalll items in the array as does
// map() but does not return a new array

/*
every();
  -check if all the elmts in an rray meet the given condtion
  -this is usefil for validating data stored in arrays
  especially when dealing with large amout of data
  -returns a true value if all elemnts meet the condtions 
  and false if other wise
  -styntax:
    let/cont resultArray = arrayName.every(function(
    indivualLEments){
    return experssion.condtions})


*/

console.log(numbers);
let allValid = numbers.every(function (number) {
  return number < 3;
});
console.log(allValid);

// some()
/* 
check if at least one lements in the array meets the given
condtion
-returns a true value if at least one elment meets the condtions
and false if otherwise

 let/cont resultArray = arrayName.some(function(
    indivualLEments){
    return experssion.condtions})
*/
console.log(numbers);
let someValid = numbers.some(function (number) {
  return number < 3;
});
console.log(someValid);

// combing the returned result from the every/some method may
// used in other statemsnt to perorm consecutive rslts

if (someValid) {
  console.log("Some numert are greater than 2");
}
/* 
filter()
-returnd new array that contains elements which meets the given condition
-retrun an empty array if no elements were found
-useful for filyring array elements with a given condtion
and shortned  syntx compared using other array itreraton methos
-syntax:
  let/const resultAray = arrayName.filter(functuin(individualElemts){})
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

// filterig using for each
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
-includes() method checks if the argument passed can be found in the arrrray
  -it returnd boolean whicch can be saved in variable
    -retuns tru if the arguments is found
    in the array
    -return false if it is nor
    -syntx 
      arrayName.incudes(<argumentToFin>)
*/

console.log(`This is products ${products}`);
let productFound1 = products.includes("Mouse");
console.log(productFound1);
let productFound2 = products.includes("Headset");
console.log(productFound2);
/*
-method can be 'chained' using them ibe after another
-the result of the first mehod is used on the second
method until all chained mehods have been resolved
-how chaing resolves in our example\
  1. the 'products' element will be converted
  into all lowercase letters
  2. the resulting lowercase string is used in the 
  includes method
*/
let filterProducts = products.filter(function (product) {
  return product.toLowerCase().includes("a");
});
console.log(filterProducts.map((product) => product.toLowerCase()));

// reduce()
/*
-evaluates the elemts from left to right and returns/reduce the 
array into a single a value
-syntax
  let/const resultArray = arrayName = arrayName.reduce(function(
  accumulator, currentValie){
    return expression/opertor
  })
    -the 'accumulator' parameter in the function
    stores the result to evert iteration of the loop
    -the currentValue is the current /next elements in the array 
    that is evaluated in each iteration of the loop
    -how the reduce method workds
      1. the first element in the array is
      stored in the 'accumulator' parameter
      2. the second /next element in the array is stored
      in the 'currentValue' parameter
      3. an opration is performed on the two elements
      4. the loop repeats step 1-3 until all elements have beed worked on
*/
let iteration = 0;

let reducearray = numbers.reduce(function (x, y) {
  // used to reack iteration count and accumularor
  console.warn(`current iteration:` + ++iteration);
  console.log("accumulator" + x);
  console.log("current value " + y);

  // opetation to reduce array into a singe value
  return x + y;
});
console.log(`Resultmof reduce method ${reducearray}`);

// reducing string arrays
let lists = ["Hello", "Again", "Love"];

let reduceJoin = lists.reduce(function (x, y) {
  return x + " " + y;
});
console.log(`Result ${reduceJoin}`);
