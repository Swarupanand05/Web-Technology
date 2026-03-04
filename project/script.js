function calculateBMI(){

let height = document.getElementById("height").value;
let weight = document.getElementById("weight").value;
let error = document.getElementById("error");
let result = document.getElementById("result");

error.innerHTML = "";
result.innerHTML = "";

// Empty validation
if(height === "" || weight === ""){
error.innerHTML = "Please enter both height and weight.";
return;
}

// Number validation
if(isNaN(height) || isNaN(weight)){
error.innerHTML = "Height and Weight must be valid numbers.";
return;
}

// Range validation
if(height < 50 || height > 300){
error.innerHTML = "Height must be between 50 cm and 300 cm.";
return;
}

if(weight < 10 || weight > 500){
error.innerHTML = "Weight must be between 10 kg and 500 kg.";
return;
}

height = height / 100;

let bmi = weight / (height * height);
bmi = bmi.toFixed(2);

let category = "";

if(bmi < 18.5){
category = "Underweight";
}
else if(bmi < 24.9){
category = "Normal Weight";
}
else if(bmi < 29.9){
category = "Overweight";
}
else{
category = "Obese";
}

result.innerHTML = "Your BMI: " + bmi + "<br>Category: " + category;

}