// ----------for..of loops----------
const animals = ['dog', 'cat', 'bear']
for (let animal of animals) {            //Do not have to define i, animal is local variable (element of array)
  console.log(animal)                    //Can use on all iterables, not just arrays, but don't have index
}

// ----------Sort----------
// By default will sort alphabetically
// Can sort based on any condition if you pass in a function

const names = { casey: 32, maria: 31, Jason: 33 }
names.sort((a, b) => a > b ? 1 : -1) 
// This will go through index 0 and 1, compare them and reorder, if necessary. Keep doing that with each until right order

// ---------Reduce--------
// Will loop through and accumulate values

const initialValue = 0;
const friends = [{ name: casey, name:Fabian }, {age: 32, name: casey, age: 31}, {name: casey, age: 33 }]
friends.reduce((total, toAdd) => { //total is running total and toAdd is the next number to add
  return total + toAdd
}, initialValue); 

// ==========Function types=============
// 1) ----Traditional function----
function add(num1, num2) { //Must explicitly return and need parenthesis on params, even if empty
  return num1 + num2;
}

// 2a) ----Arrow function (explicit)------
const explicitMultiLIne = (num1, num2) => { // No function keyword needed & Block body "{}", requires an explicit return
  return num1 + num2
}
const explicitSingleLine = (num1, num2) => { num1 + num2 }
// ---------Arrow function (implicit)----------------
const conciseMultiLIne = (num1, num2) => ( // concise body (parenthesis), allows for implicit return
  num1 + num2
)
const conciseSingleLine = (num1, num2) => num1 + num2 // Can be written on one line with no parenthesis 
const oneParam = name => `Hello ${name}` //No parenthesis on params needed if only one
// Arrow function notes
// 1) Do not bind their own 'this', they inherit the one from their parent scope (usually the window)
// 2) Traditional functions will take the scope of where the function is called, arrow are lazy and just based on where they exist
// 3) When a traditional function is called as a method on an object, it's 'this' refers to the object that the method was called on, arrow will where it exists
// 4) JS is not a good OOP, so don't have to worry about classes and issues related to scope and arrow functions
// 5) Only place you would see issues is in event listeners and using 'this'. THIS can be averted by using event.target instead.

// ==============Object Constructing==================
const guatData = {
  population: 17.1,
  bestFood: 'garnaches',
}

// ==============Object Destructing==================
const { guatPopulation: population, guatFood: bestFood } = guatData
// On the left side of the equation, you are creating the new constants, these new constants are 'guatPopulation' and 'food', on the other side
// of the colon, you are specifying from which keys you want to extract this info
// ^Is the equivalent of doing this:
const guatPopulation = guatData.population
const guatFood = guatData.bestFood
// Or if you want to just name it the same thing as the property:
const { population } = guatData

// =============map==================
// Creates a new array with the results of calling a function on the  on the input array
const familyAge = [32, 37, 35, 59, 61]
const  familyAgein2022 = familyAge.map(age => age + 77);
// This is a good sub for when you are creating a new array and then for each to populate, done in one go! E.g:
const gridProps = newChildren.map((child) => {
  const picture = child.querySelector('picture');
  const title = child.querySelector('strong');
  const ctas = child.querySelectorAll('a');
  return { picture, title, ctas };
});

// ==============To Try===============
array.some(); //Checks if any elements meet condition
// Can use it as a forEach, and break out of it early when it is found, otherwise will run through all
array.includes(); //Check if string is in, vs. some is a condition you are building
array.every(); //Checks if all elements meet condition
Array.from(); //Called a static method, called on the moma method
// Second argument is actually a map argument, so you can format it exactly like you want in one go

Object.entries(); //Basically converts an object into array of those key/value pairs
[...]; //Spread, instead of mutating original array, can make new var - splice everything before and after and use ... to combine
// Object spread allows the same thing on objects

