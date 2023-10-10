// Objects

// Object Literal
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    greet: function () {
      console.log("Hello, " + this.firstName + "!");
    },
  };
  
  // Accessing Object Properties
  console.log("First Name:", person.firstName);
  console.log("Last Name:", person["lastName"]);
  person.greet(); // Calling  method
  
  // Adding and Modifying Properties
  person.gender = "Male";
  person.age = 31;
  
  // Nested Objects
  person.address = {
    city: "New York",
    zipCode: "10001",
  };
  
  // Displaying Updated Object
  console.log("\nUpdated Person Object:");
  console.log(person);
  
  // Object Constructor Function
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  // Creating Instances of Car
  let car1 = new Car("Toyota", "Camry", 2022);
  let car2 = new Car("Honda", "Accord", 2021);
  
  // Displaying Car Instances
  console.log("\nCar 1:", car1);
  console.log("Car 2:", car2);
  
  // Object Methods
  let calculator = {
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
  };
  
  // Using Object Methods
  console.log("\nCalculator:");
  console.log("Addition:", calculator.add(5, 3));
  console.log("Subtraction:", calculator.subtract(10, 4));
  