//
function add(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

console.log("Result :", add(5,10));
function multiply(num5, num6) {
    return num5 * num6;
    // console.log(multiply(10,12));
    //after return statement no code will be executed
    
}
let result = multiply(3,4);
console.log(result);


function userlogin(name){
    return `Welcome, ${name}!`;
}
console.log(userlogin());//when string is empty then it will show undefined value
console.log(userlogin("Swarupanand"));//when string is passed then it will show the string value

function parameters(...num1){//rest operator
    return num1;//
}
console.log(parameters(100,20,30,40));

//Arrow Function
const mult = (a, b) => {
    return a * b;
};
console.log(mult(10, 2));

//This keyword story
// function coffe(){
//     username= "Swarupanand";
//     console.log(this.username);
// }
// coffe();

//use of this in arrow function
const tea = () => {
    username= "Swarupanand Bajbalkar";
    console.log(this);
}
tea();