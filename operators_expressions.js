// Arithmetic Operators
let addition = 10 + 5;
let subtraction = 10 - 5;
let multiplication = 10 * 5;
let division = 10 / 5;
let remainder = 10 % 3;

console.log("Arithmetic Operators:");
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Remainder:", remainder);
console.log("\n");

// Assignment Operators
let x = 5;
x += 3; // x = x + 3;
let y = 10;
y *= 2; // y = y * 2;

console.log("Assignment Operators:");
console.log("x:", x);
console.log("y:", y);
console.log("\n");

// Comparison Operators
let isEqual = 5 === 5;
let isNotEqual = 10 !== 5;
let greaterThan = 10 > 5;
let lessThan = 10 < 5;
let greaterOrEqual = 10 >= 10;
let lessOrEqual = 10 <= 5;

console.log("Comparison Operators:");
console.log("Is Equal:", isEqual);
console.log("Is Not Equal:", isNotEqual);
console.log("Greater Than:", greaterThan);
console.log("Less Than:", lessThan);
console.log("Greater or Equal:", greaterOrEqual);
console.log("Less or Equal:", lessOrEqual);
console.log("\n");

// String Operators
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

console.log("String Operators:");
console.log("Full Name:", fullName);
console.log("\n");

// Logical Operators
let isTrue = true;
let isFalse = false;
let resultAnd = isTrue && isFalse;
let resultOr = isTrue || isFalse;
let resultNot = !isTrue;

console.log("Logical Operators:");
console.log("AND:", resultAnd);
console.log("OR:", resultOr);
console.log("NOT:", resultNot);
console.log("\n");

// Bitwise Operators (example: bitwise AND)
let bitwiseResult = 5 & 3; // 0101 & 0011 = 0001 (1 in decimal)

console.log("Bitwise Operator:");
console.log("Bitwise AND:", bitwiseResult);
console.log("\n");

// Ternary Operator
let age = 20;
let isAdult = age >= 18 ? "Adult" : "Minor";

console.log("Ternary Operator:");
console.log("Age Status:", isAdult);
console.log("\n");

// Typeof Operator
let typeOfString = typeof "Hello";
let typeOfNumber = typeof 42;
let typeOfBoolean = typeof true;

console.log("Typeof Operator:");
console.log("Type of String:", typeOfString);
console.log("Type of Number:", typeOfNumber);
console.log("Type of Boolean:", typeOfBoolean);
