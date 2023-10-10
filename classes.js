// Classes in JavaScript

// Class Declaration
class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    // Method inside the class
    greet() {
      console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
  
    // Static Method
    static sayHello() {
      console.log("Hello from the Person class!");
    }
  }
  
  // Creating Instances of the Class
  let person1 = new Person("John", "Doe", 30);
  let person2 = new Person("Alice", "Smith", 25);
  
  // Accessing Properties and Calling Methods
  console.log("Person 1:", person1.firstName, person1.lastName, person1.age);
  person1.greet();
  
  console.log("\nPerson 2:", person2.firstName, person2.lastName, person2.age);
  person2.greet();
  
  // Inheritance - Subclass
  class Student extends Person {
    constructor(firstName, lastName, age, studentId) {
      // Calling the constructor of the parent class
      super(firstName, lastName, age);
      this.studentId = studentId;
    }
  
    // Overriding the greet method
    greet() {
      console.log(`Hello, ${this.firstName} ${this.lastName} (Student)!`);
    }
  
    // New method specific to the Student class
    study() {
      console.log(`${this.firstName} is studying.`);
    }
  }
  
  // Creating an instance of the subclass
  let student1 = new Student("Bob", "Johnson", 22, "S12345");
  
  // Accessing Properties and Calling Methods of the Subclass
  console.log("\nStudent 1:", student1.firstName, student1.lastName, student1.age, student1.studentId);
  student1.greet();
  student1.study();
  
  // Static Method of the Person class
  Person.sayHello();
  
  // Getters and Setters
  class Temperature {
    constructor(celsius) {
      this.celsius = celsius;
    }
  
    // Getter
    get fahrenheit() {
      return this.celsius * 1.8 + 32;
    }
  
    // Setter
    set fahrenheit(value) {
      this.celsius = (value - 32) / 1.8;
    }
  }
  
  // Creating an instance of the Temperature class
  let temp = new Temperature(25);
  
  // Using Getter and Setter
  console.log("\nTemperature in Celsius:", temp.celsius);
  console.log("Temperature in Fahrenheit:", temp.fahrenheit);
  
  temp.fahrenheit = 68; // Using the setter
  console.log("Updated Temperature in Celsius:", temp.celsius);
  