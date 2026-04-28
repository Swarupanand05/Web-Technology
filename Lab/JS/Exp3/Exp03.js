// =======================
// Arrow Function
// =======================
document.write("<h2>Arrow Function</h2>");
const greet = (name) => {
    return "Hello, " + name + "!";
};

const userName = prompt("Enter your name:");
document.write(greet(userName));
document.write("<br><br>");


// =======================
// Switch Case
// =======================
document.write("<h2>Switch Case</h2>");
const day = prompt("Enter a day of the week:");

switch (day.toLowerCase()) {
    case "monday":
        document.write("It's Monday!");
        break;
    case "tuesday":
        document.write("It's Tuesday!");
        break;
    case "wednesday":
        document.write("It's Wednesday!");
        break;
    case "thursday":
        document.write("It's Thursday!");
        break;
    case "friday":
        document.write("It's Friday!");
        break;
    case "saturday":
        document.write("It's Saturday!");
        break;
    case "sunday":
        document.write("It's Sunday!");
        break;
    default:
        document.write("Invalid day!");
}

document.write("<br><br>");


// =======================
// Do-While Loop
// =======================
document.write("<h2>Do-While Loop</h2>");
let number;

do {
    number = parseInt(prompt("Enter a number greater than 10:"));
} while (number <= 10);

document.write("You entered valid number: " + number);
document.write("<br><br>");

document.write("<h2>while Loop</h2>");
let count = 1;  
while (count <= 5) {
    document.write("Count: " + count + "<br>");
    count++;
}
document.write("<br><br>");

document.write("<h2>for Loop</h2>");
for (let i = 1; i <= 5; i++) {
    document.write("Iteration: " + i + "<br>");
}
document.write("<br><br>");

document.write("<h2>for...of Loop</h2>");
const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
    document.write("Fruit: " + fruit + "<br>");
}
document.write("<br><br>");

document.write("<h2>for...in Loop</h2>");
const person = { name: "Swarup",
    age: 21,
    city: "Solapur"
};
for (const key in person) {
    document.write(key + ": " + person[key] + "<br>");
}
document.write("<br><br>");



document.write("<h2>Array Methods</h2>");
// =======================
// Array Methods
// =======================
const numbers = [1, 2, 3, 4, 5];

// map → square each number
const squares = numbers.map(num => num * num);
document.write("Squares: " + squares + "<br>");

// filter → even numbers
const evens = numbers.filter(num => num % 2 === 0);
document.write("Even Numbers: " + evens + "<br>");

// reduce → sum of numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
document.write("Sum: " + sum + "<br>");