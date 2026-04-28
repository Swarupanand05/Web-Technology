//Activity No 3
//Design a web page to perform 
//Activity 1:different between arrow function and simple function
//write a code for arrow functions with two examples
//write a code for switch case
//how to use truthy and falsy values in javascript 
//how to use ternary operator in javascript
//write a code for how to use loops in javascript
//difference between foroff and forin loop in javascript
//how to use map and filter function in javascript 
//how to use reduced function in javascript








//what is difference between arrow function and simple function
// Simple Function  
function add(a, b) {
    return a + b;
}
document.write("Simple Function Add: " + add(2, 3) + "<br>");
// Arrow Function
const multiply = (a, b) => a * b;
document.write("Arrow Function Multiply: " + multiply(2, 3) + "<br>");
//differences
// 1. Syntax: Arrow functions have a shorter syntax compared to traditional functions.
// 2. 'this' Binding: Arrow functions do not have their own 'this' context; they inherit it from the parent scope.
// 3. Usage: Arrow functions are often used for shorter functions or callbacks, while traditional functions are used for more complex logic.


//write a code for arrow functions with two examples
// Example 1: Arrow function to square a number
const square = (x) => x * x;
document.write("Square : " + square(4) + "<br>");

//Example 2: check number is even or odd
const isEven = (num) => (num % 2 === 0 ? "Even" : "Odd");
document.write(" Even or Odd? : " + isEven(5) + "<br>");


//write a code for switch case
let choice = prompt("Enter a number between 0 and 6:");
choice = Number(choice);

let day;

switch (choice) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Invalid input! Please enter 0–6.";
}

document.write("You selected: " + day);
document.write("<br>");

//how to use ternary operator in javascript

let age = prompt("Enter your age:");
age = Number(age);
let eligibility = (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote.";

document.write("Age: " + age + "<br>");
document.write("Eligibility: " + eligibility);
document.write("<br>");


//write a code for how to use various loops in javascript

// For Loop
document.write("For Loop: ");
for (let i = 1; i <= 5; i++) {
    document.write(i + " ");
}
document.write("<br>");

// While Loop
document.write("While Loop: ");
let j = 1;
while (j <= 5) {
    document.write(j + " ");
    j++;
}
document.write("<br>");

// Do-While Loop
document.write("Do-While Loop: ");
let k = 1;
do {
    document.write(k + " ");
    k++;
} while (k <= 5);
document.write("<br>");

//how to use map and filter function in javascript 
// Map Function
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
document.write("Squared Numbers: " + squaredNumbers.join(", ") + "<br>");


// Filter Function
const evenNumbers = numbers.filter(num => num % 2 === 0);
document.write("Even Numbers: " + evenNumbers.join(", ") + "<br>");

//how to use reduce function in javascript
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.write("Sum of Numbers: " + sum + "<br>");


