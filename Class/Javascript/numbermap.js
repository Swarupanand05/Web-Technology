const balance= new Number(1000000000000);
console.log(balance);
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toExponential());
console.log(balance.toLocaleString());//it show number in local format.
console.log(balance.toLocaleString('en-IN'));//Indian Numbering System.
console.log(balance.toFixed(4));//when we build e-commerce website and precisions value is so long we use toFixed method 
console.log(balance.toPrecision(6));
console.log(balance.valueOf());

console.log(typeof balance);

let a=new Number(2000);
console.log(a.toString().length);

//Math OPerations

console.log(Math);
console.log(Math.abs(-16));//it give absolute value , when number is negative it convert into positive number, positive number remain same
console.log(Math.round(4.6));//it round off the value
console.log(Math.round(4.4));
console.log(Math.floor(4.6));//it takes lower value
console.log(Math.ceil(4.6));//it always choose top value 
console.log(Math.min(1,5,0,8));
console.log(Math.max(1,5,0,8));

//math.random use
console.log(Math.random());//it give random number between 0 to 1
console.log(Math.random()*10);//it give random number between 0 to 10
console.log(Math.floor(Math.random()*10));//it give random integer number between 0 to 9
console.log(Math.floor(Math.random()*100));//it give random integer number between 0 to 99



