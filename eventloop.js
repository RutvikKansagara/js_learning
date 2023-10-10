// Event Loop in JavaScript

// Example 1: setTimeout

console.log("Start of the script");

// This function is added to the message queue after 2 seconds
setTimeout(() => {
  console.log("Inside setTimeout callback");
}, 2000);

console.log("End of the script");



// Example 2: Promises and Microtasks

console.log("Start of the script");

// This promise is added to the microtask queue
Promise.resolve("Resolved Promise").then((result) => {
  console.log("Inside Promise.then callback:", result);
});

console.log("End of the script");



// Example 3: Event Loop with a Synchronous Task

console.log("Start");

// This synchronous function is executed immediately
function synchronousTask() {
  console.log("Inside synchronous function");
}

synchronousTask();

console.log("End");

// Output:
// Start of the script
// Inside synchronous function
// End of the script
