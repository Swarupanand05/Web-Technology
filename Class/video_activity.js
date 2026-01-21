const product = {
  name: "Laptop",
  rating: 4.5,
  price: 55000,
  offer: 10
};

console.log(product);
console.log(product.name);
console.log(product.price);


const instagramProfile = {
  username: "coder_swarup",
  followers: 1200,
  following: 350,
  isFollow: true
};

console.log(instagramProfile);
 //Accessing Object Values:

console.log(instagramProfile.username);
console.log(instagramProfile.followers);


//Check if a number is a multiple of 5
let num = prompt("Enter a number");

if (num % 5 === 0) {
  console.log(num, "is a multiple of 5");
} else {
  console.log(num, "is not a multiple of 5");
}


// Grade Calculator
// Marks	Grade
// 90–100	A
// 70–89	B
// 60–69	C
// 50–59	D
// 0–49	F

let score = prompt("Enter score");
let grade;

if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 70) {
  grade = "B";
} else if (score >= 60) {
  grade = "C";
} else if (score >= 50) {
  grade = "D";
} else {
  grade = "F";
}

console.log("Your grade is", grade);
