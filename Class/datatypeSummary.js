//
let authorId=Symbol("101");
console.log(authorId);

const id=12345;
console.log(id===authorId);

//JavaScript is dynamically typed language

//Arrays
const a=[1,2,3,4,5];


//Objects
const myobject={
  name:"Swarup",
  age:21,
  email:"spb05092004@gmail.com"
};

console.log(myobject);
console.log(myobject.name);
console.log(myobject.age);  
console.log(myobject.email);

//function declaretion
function call()
{
    console.log("Swarup");
}
call();

//Functtion declaration with variable
let sB=function MyFunction()
{
    console.log("Swarup");
}
sB();