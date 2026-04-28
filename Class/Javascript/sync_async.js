//syncornus in javascript code execute line by line each task wait for previous task
//to finish (blocking in nature )
//javascript by default single threaded and synchronous(line by line execution,blocking nature)

console.log("Start");
function add(a,b){
  return a+b;
}
let result=add(3,4);
console.log(result);

//Asynchronous in javascript non-blocking behavior
//javascript doesn't wait it moves to next line
//some task take time api call, file read and database query.
//used when feching data from server ,api call,read call ,set timeout.

console.log("start")
setTimeout( () =>{
  console.log("this is asynchronous code.");   
},2000);
console.log("end");
//use of settimeout :settimeout is asynchronous it wait for countdown then it


//Events
//event is a action used for action in browser
//clicking button, moving mouse, pressing key ,submitting form
//javascript can detect this event and respond to them
//type of events :Three type of events
//mouse event ,keybord event and browser event

setTimeout( () =>{
  console.log("this is asynchronous code.");   
},2000);
//settimeout is asynchronous it wait for countdown then it execute the code inside it and it doesn't block the code below it. 

//promises : it is used to handle asynchronous operation in javascript
//it is a object that represent the eventual completion or failure of an asynchronous operation and its resulting value.
//it has three states :pending,fulfilled and rejected
//pending: initial state, neither fulfilled nor rejected
//fulfilled: operation completed successfully
//rejected: operation failedq

//A promises is an object that represent future result of an asynchronous operation .
// and it allows us to handle asynchronous operation in a more elegant way than callbacks.
//it has two method :then and catch
//then is used to handle the fulfilled state of the promise and catch is used to handle the rejected state of the promise.

//The real time example
//A promises has three state pending,resolved and rejected.
//pending: initial state, neither fulfilled nor rejected
//resolved: operation completed successfully
//rejected: operation failed

let myPromise=new Promise( (resolve,reject) =>{
  let a=1+1;
  if(a==2){
    resolve("success");
  }else{
    reject("failed");
  } 
}); 
myPromise.then( (message) =>{
  console.log("this is in then "+message);
}).catch( (message) =>{     
  console.log("this is in catch "+message);
}); 

// let success=true;
// if(success){
//   resolve("this is success");
// }else{
//   reject("this is failed");
// }

myPromise.then( (result) =>{
  console.log("this is in then "+result);
}).catch( (error) =>{ 
  console.log("this is in catch "+error);
});


//resolve method is success and reject method is failure.
//.then :used in when promise is successful and .catch is used when promise is failed.