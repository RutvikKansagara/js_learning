// Promises in JavaScript



const fetchData = new Promise((resolve, reject) => {
    //  an asynchronous operation (e.g., fetching data from a server)
    setTimeout(() => {
      const success = true;
  
      if (success) {
        const data = { name: "John", age: 30 };
        resolve(data); // Resolve the promise with data
      } else {
        reject("Error fetching data!"); // Reject the promise with an error message
      }
    }, 2000);
  });
  
  // Using the Promise with .then() and .catch()
  fetchData
    .then((data) => {
      console.log("Data has been fetched:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  
  // Chaining Promises
  
  const multiplyByTwo = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = data.age * 2;
        resolve(result);
      }, 1000);
    });
  };
  
  fetchData
    .then((data) => {
      console.log("Data has been fetched:", data);
      return multiplyByTwo(data);
    })
    .then((result) => {
      console.log("Result after multiplying by two:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  
  // Promise.all
  
  const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1"), 1500));
  const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2"), 1000));
  
  Promise.all([promise1, promise2])
    .then((results) => {
      console.log("Promise.all results:", results);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  