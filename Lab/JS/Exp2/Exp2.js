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
console.log("Array: " + displayArray(arr));


var obj = { name: "John", age: 30 };
console.log(" Name - " + obj.name + " Age - " + obj.age);


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
console.log("Reversed Number of " + numberToReverse + " is: " + reverseNumber(numberToReverse));



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
    console.log(originalnum + "Number is palindrome");
} else {
    console.log(originalnum + "Number is not palindrome");
}




//write code for fibonacci series

let a=0,b=1;
let n=3;
console.log(a)
console.log(b)
for(let i=0;i<n;i++){
    let c = a+b;
    console.log( + c);
    a = b;
    b = c;
}


//find largest element in an array

let arr5 = [10, 45, 23, 99, 5];

let largest = arr5[0]; // assume first is largest

for (let i = 1; i < arr5.length; i++) {
  if (arr5[i] > largest) {
    largest = arr5[i];
  }
}

console.log("Largest element: " + largest);


//remove duplicate from array

let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = [...new Set(arrayWithDuplicates)];
console.log("Array without duplicates:", uniqueArray);


//find missing number in array

let arr7 = [1, 2, 4, 5, 6];
let s = 6; 
let expectedSum = (s * (s + 1)) / 2;
let actualSum = arr.reduce((a, b) => a + b, 0);
let missingNumber = expectedSum - actualSum;

console.log("Missing number is: " + missingNumber);

//write a code for reverse string

  let str = "Swarupanand";
  let reversed = " ";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log("Reversed String: " + reversed);



//count vowels in a string
let string = "Hello World";
let vowelCount = 0;
let vowels = "aeiouAEIOU";

for (let i = 0; i < string.length; i++) {
  if (vowels.includes(string[i])) {
    vowelCount++;
  }
}
console.log("Number of vowels: " + vowelCount);


//check string is palindrome or not
let str1 = "madam"; 
let reversedStr = str1.split('').reverse().join('');

if (str1 === reversedStr) {
    console.log("String is palindrome");
} else {
    console.log("String is not palindrome");
}


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
    console.log( + num + " is a prime number");
} else {
    console.log( + num + " is not a prime number");
}


//find factorial of a number
let number = 5;
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log("Factorial of " + number + " is " + factorial);


//Write a function code to check number is even or odd
function EvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let numberToCheck = 7;
console.log( + numberToCheck + " is " + EvenOdd(numberToCheck));


//write a function to calculate sum of array elements

function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let arrayToSum = [1, 2, 3, 4, 5];
console.log("Sum of array elements: " + sumOfArray(arrayToSum));
console.log();
console.log();
