// Callbacks in JavaScript

// an Asynchronous Operation

// Function that takes a callback
function fetchData(callback) {
    //  an asynchronous operation (e.g., fetching data from a server)
    setTimeout(function () {
      console.log("Data has been fetched!");
      let data = { name: "John", age: 30 };
      callback(data); // Callback function is called with the fetched data
    }, 2000);
  }
  
  // Callback function to be executed when data is fetched
  function processFetchedData(data) {
    console.log("Processing data:", data);
  }
  
  // Using the fetchData function with a callback
  fetchData(processFetchedData);


  const sum = (a,b) => {return a + b};
  const subtract = (a,b) => {return a - b};
  const mul = (a,b) => {return a * b};
  const divide = (a,b) => {return a / b};
  const remaind = (a,b) => {return a % b};
  
  const operation = (a,b,operationName) => {return operationName(a,b);}

  const addition = operation(2,4,sum);
  const sub = operation(10,6,subtract);
  const multiply = operation(2,4,mul);
  const division = operation(10,5,divide);
  const remainder = operation(10,3,remaind);

  console.log(addition);
  console.log(sub);
  console.log(multiply);
  console.log(division);
  console.log(remainder);
  