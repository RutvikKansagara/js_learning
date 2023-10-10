console.log("hello world");

// JavaScript Basics

// Variables and Data Types

// // const: Used to declare a constant variable in JavaScript. 
//           The value assigned to a const variable cannot be reassigned or changed.

// // let: Declares a variable in JavaScript with block scope. Unlike const,
//         the value assigned to a let variable can be reassigned within its scope.

// // var: The traditional way to declare variables in JavaScript. 
//         It has function scope and is hoisted, but it's generally recommended 
//         to use const and let instead to avoid certain issues related to scoping and hoisting.


// When to Use var, let, or const?
// 1. Always declare variables

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you can't use const

// 5. Only use var if you MUST support old browsers.

// JavaScript Identifiers
// All JavaScript variables must be identified with unique names.

// These unique names are called identifiers.

// Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

// The general rules for constructing names for variables (unique identifiers) are:

// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter.
// Names can also begin with $ and _ (but we will not use it in this tutorial).
// Names are case sensitive (y and Y are different variables).
// Reserved words (like JavaScript keywords) cannot be used as names.


let greeting = "Hello,";
const name = "Rutvik";
var age = 25;
let isStudent = true;
let score = null;
let temperature;

// Operators and Expressions
let sum = 10 + 5;
let product = 10 * 5;
let isAdult = age >= 18;

// Control Flow Statements
if (isStudent) {
  console.log("Student");
} else if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Child");
}

// Functions
function greet(personName) {
  return `${greeting} ${personName}!`;
}

let message = greet(name);
console.log(message);

// Objects
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  sayHello: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  },
};

person.sayHello();

let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// Template Literals
let details = `Name: ${name}, Age: ${age}, Student: ${isStudent}`;
console.log(details);
