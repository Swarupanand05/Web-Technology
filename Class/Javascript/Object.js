//There are two types of declaring object-object literals and object singleton
//object-key value pair



//object literals
let user={
    name:"Swarupanand",
    age:21,
    email:"spb05092004@gmail.com",
    city:"Sangola",
    isLogin:"true",
    lastLoginDay:['mon','tues'],
    "full Name":"Swarupanand Bajbalkar"//dont give this type of key
};
console.log(user);
console.log(user.email);
console.log(user.lastLoginDay);
console.log(user["full Name"]);
user.email="r@gmal.com";
console.log(user.email);

//Object.freeze(user);
user.email="abc@gmail.com";
console.log(user.email);//it gives email as r@gmal.com

//symbol example
const mySymbol=Symbol("Java Script");//create symbol and add it as a key and print the symbol
const myObj={
    [mySymbol]:"Java Script"
};
console.log(myObj);
console.log(myObj[mySymbol]);
console.log(typeof(myObj));//object

//within function take object
user.greeting=function ()
{
    console.log("Hello js");
}
console.log(user.greeting());

user.greeting2=function()
{
    console.log(`${this.email}`);//while using string interpolation then accesing key from object use this.email
}
console.log(user.greeting2());









