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

const friends = [{ name: casey, name:Fabian }, {age: 32, name: casey, age: 31}, {name: casey, age: 33 }]
friends.reduce((total, toAdd) => { //total is running total and toAdd is the next number to add
  return total + toAdd
}, 0); //The 0 here is for the first time around as 'total' will be undefined

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

// ==============Object Destructing==================
const { textContent: href } = block.firstElementChild; // This will get the 'textContent' property of the first Element and assign it to a const called 'href'

