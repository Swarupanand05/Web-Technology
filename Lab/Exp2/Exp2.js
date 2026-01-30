//Activity
//Array,function,object declaration 
//write a code for reversse number
//check number paloindrome or not
//write code for fibonacci series
//find largest element in an array
//remove duplicate from array
//find missing number in array
//write a code for reverse string
//count vowels in a string
//check string is palindrome or not
//Check prime number or not
//find factorial of a number
//Write a function code to check number is even or odd
//write a function to calculate sum of array elements



//Array,function,object declaration
var arr = [1, 2, 3, 4, 5];
function displayArray(array) {
    return array;
}
document.write("<br>Array: " + displayArray(arr));


var obj = { name: "John", age: 30 };
document.write("<br> Name - " + obj.name + "<br> Age - " + obj.age);
document.write("<br>");
document.write("<br>");
document.write("<br>");

//write a code for reversse number
function reverseNumber(num) {
    var reversed = 0;
    while (num > 0) {
        var digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    return reversed;
}
var numberToReverse = 12345;
document.write("<br>Reversed Number of " + numberToReverse + " is: " + reverseNumber(numberToReverse));

document.write("<br>");
document.write("<br>");

//check number paloindrome or not

let originalnum = 121;        
let temp = originalnum;        
let reversenum = 0;            

while (temp > 0) {
    reversenum = reversenum * 10 + (temp % 10); // add last digit
    temp = Math.floor(temp / 10);               // remove last digit
}

// compare original and reversed number
if (originalnum === reversenum) {
    document.write(originalnum + "<br>Number is palindrome");
} else {
    document.write(originalnum + "<br>Number is not palindrome");
}


document.write("<br>");
document.write("<br>");

//write code for fibonacci series

let a=0,b=1;
let n=3;
document.write(a)
document.write(b)
for(let i=0;i<n;i++){
    let c = a+b;
    document.write("<br>" + c);
    a = b;
    b = c;
}
document.write("<br>");
document.write("<br>");

//find largest element in an array

let arr5 = [10, 45, 23, 99, 5];

let largest = arr5[0]; // assume first is largest

for (let i = 1; i < arr5.length; i++) {
  if (arr5[i] > largest) {
    largest = arr5[i];
  }
}

document.write("<br>Largest element: " + largest);
document.write("<br>");
document.write("<br>");

//remove duplicate from array

let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = [...new Set(arrayWithDuplicates)];    
document.write("<br>Array without duplicates: " + uniqueArray);
document.write("<br>");
document.write("<br>");

//find missing number in array

let arr7 = [1, 2, 4, 5, 6];
let s = 6; 
let expectedSum = (s * (s + 1)) / 2;
let actualSum = arr.reduce((a, b) => a + b, 0);
let missingNumber = expectedSum - actualSum;

document.write("Missing number is: " + missingNumber);
document.write("<br>");
document.write("<br>");
document.write("")
//write a code for reverse string

  let str = "Swarupanand";
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  document.write("<br>Reversed String: " + reversed);

document.write("<br>");
document.write("<br>");

//count vowels in a string
let string = "Hello World";
let vowelCount = 0;
let vowels = "aeiouAEIOU";

for (let i = 0; i < string.length; i++) {
  if (vowels.includes(string[i])) {
    vowelCount++;
  }
}
document.write("<br>Number of vowels: " + vowelCount);
document.write("<br>");
document.write("<br>");

//check string is palindrome or not
let str1 = "madam"; 
let reversedStr = str1.split('').reverse().join('');

if (str1 === reversedStr) {
    document.write("<br>String is palindrome");
} else {
    document.write("<br>String is not palindrome");
}
document.write("<br>");
document.write("<br>");

//Check prime number or not
let num = 29;
let isPrime = true;
if (num <= 1) {
    isPrime = false;
}
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    document.write("<br>" + num + " is a prime number");
} else {
    document.write("<br>" + num + " is not a prime number");
}
document.write("<br>");
document.write("<br>");

//find factorial of a number
let number = 5;
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial *= i;
}
document.write("<br>Factorial of " + number + " is " + factorial);
document.write("<br>");
document.write("<br>");

//Write a function code to check number is even or odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let numberToCheck = 7;
document.write("<br>" + numberToCheck + " is " + checkEvenOdd(numberToCheck));
document.write("<br>");
document.write("<br>");

//write a function to calculate sum of array elements

function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let arrayToSum = [1, 2, 3, 4, 5];
document.write("<br>Sum of array elements: " + sumOfArray(arrayToSum));
document.write("<br>");
document.write("<br>");
