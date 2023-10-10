// Control Flow Statements

// if statement
let isRaining = true;

if (isRaining) {
  console.log("Bring an umbrella!");
} else {
  console.log("Enjoy the weather!");
}

// else if statement
let timeOfDay = "morning";

if (timeOfDay === "morning") {
  console.log("Good morning!");
} else if (timeOfDay === "afternoon") {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

// switch statement
let dayOfWeek = "Monday";
let message;

switch (dayOfWeek) {
  case "Monday":
    message = "It's the start of the week.";
    break;
  case "Wednesday":
    message = "Midweek vibes!";
    break;
  case "Friday":
    message = "Weekend is near!";
    break;
  default:
    message = "Enjoy the day!";
}

console.log(message);

// for loop
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// while loop
console.log("\nWhile Loop:");
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}

// do-while loop
console.log("\nDo-While Loop:");
let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 5);
