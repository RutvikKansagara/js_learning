// Functions

// Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
  }
  
  // Function Expression
  let multiply = function (a, b) {
    return a * b;
  };
  
  // Arrow Function
  let square = (num) => num * num;
  
  // Function with Default Parameter
  function sayHello(message = "Default Hello") {
    console.log(message);
  }
  
  // Function with Rest Parameter
  function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  // Usage 
  let greeting = greet("John");
  let product = multiply(3, 4);
  let resultSquare = square(5);
  let defaultHello = sayHello(); 
  let sumResult = sum(1, 2, 3, 4, 5);
  
  console.log(greeting);
  console.log("Product:", product);
  console.log("Square:", resultSquare);
  defaultHello;
  console.log("Sum:", sumResult);
  