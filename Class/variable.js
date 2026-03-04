//Variable declaration
let a=10.86; //Number
let name="Swarupanand"; //String
let b; //Undefined
let c=null; //null
let d=true; //Boolean
console.log(a,name,b,c,typeof(d));

//differnce between var, let and const
// var is function scoped, can be redeclared and updated
var x = 5;
var x = 10; // Redeclaration allowed
x = 15; // Update allowed
console.log("var x:", x);
// let is block scoped, cannot be redeclared but can be updated
let y = 20;
// let y = 25; // Redeclaration not allowed (uncommenting this line will cause an error)
y = 30; // Update allowed
console.log("let y:", y);
// const is block scoped, cannot be redeclared or updated
const z = 50;
// const z = 60; // Redeclaration not allowed (uncommenting this line will cause an error)

