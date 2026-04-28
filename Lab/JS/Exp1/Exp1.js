// const Declarartion
// const accountemail="spb@gmail.com"
// accountemail="om@gmail.com"
// document.write(accountemail)


//Scope Difference
// let a=10
// var b=20
// {
//     let a=200
//     var b=300
//     document.write(a,b)
// }
// document.write(a,b)
// var will change all the values that are present in code 
// var update value from the scope
// that will cause a big problem 
// let is block-scoped (changes stay inside {}), while var is function/global-scoped (changes affect outside the block).


//Variable declaration
/*let a=10.86; //Number
let name="Swarupanand"; //String
let b; //Undefined
let c=null; //null
let d=true; //Boolean
document.write(a,name,b,c,typeof(d));
*/


//type of variable
/*document.write(typeof(a));
document.write(typeof(name));
document.write(typeof(b));
document.write(typeof(c));  //for null it will show type of object
document.write(typeof(d));

*/

//display student information
//odd-evwn check
// display number using loop
//student pass or fail

//Display Student Information
let studname= "Swarupanand";
let email="spb05092004@gmail.com"
let rollno=133;
let age=21;
document.write("Name :",studname)
document.write("<br>Email :",email)
document.write("<br>RollNo :",rollno)
document.write("<br>Age :",age)
document.write("<br>")
document.write("<br>")


//Odd- Even Number Check

let num1=100

if(num1%2==0)
{
    document.write(num1,"is even Number");
}
else
{
    document.write(num1,"is odd number");
}

document.write("<br>")
//Display number using loop
let arr1=[91,68,53,11,7]
for(let i=0;i<arr1.length;i++)
{
    document.write("<br>"+arr1[i]);
}
document.write("<br>")

//Check student pass or fail
let marks=75;
if(marks>40)
{
    document.write("Pass");
}
else{
    document.write("Fail");
}