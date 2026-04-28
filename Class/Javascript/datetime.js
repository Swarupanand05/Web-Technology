// let mydate=new Date();
// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toDateString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toTimeString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toUTCString());
// console.log(mydate.getFullYear());
// console.log(mydate.getMonth()+1);//month start from 0 to 11
// console.log(mydate.getDate());
// console.log(mydate.getDay());   //day start from 0 to 6
// console.log(mydate.getHours());
// console.log(mydate.getMinutes());
// console.log(mydate.getSeconds());
// console.log(mydate.getMilliseconds());
// console.log(mydate.getTime());//time in milliseconds from 1 jan 1970 to current date    



// let myCreatedDate=new Date('2026,1,21');
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate2=new Date("01-21-2026");
// console.log(myCreatedDate2);
// console.log(myCreatedDate2.toLocaleString());

// let myTimestamp=Date.now();
// console.log(myTimestamp);
// console.log(Date.now()/1000);//in seconds
// console.log(myCreatedDate2.getTime());
// console.log(Math.floor(Date.now/1000));

let newDate=new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getUTCDate());

console.log(newDate.toLocaleString('default',{weekday:"long"}));







