//lab Stack and heap story

const str1="Swarupanand";

console.log("Hello ",str1);


//String interpolation
//Defination: Embedding variables or expressions within a string using template literals.
//This is good for string concatenation and dynamic content generation.
const str2=`Hello ${str1}`;
console.log(str2);


//Why we use new Keyword with String

const gameCount=new String("Swarupanand");
console.log(gameCount);
console.log(gameCount.length);
console.log(gameCount[4]);
console.log(gameCount.toUpperCase());
console.log(gameCount.toLowerCase());
console.log(gameCount.charAt(10));
console.log(gameCount.indexOf("d"));



//console.log(typeof(gameCount));

const fname="    Swarup   ";
console.log(fname.length);
const trimmedString=fname.trim();
console.log(trimmedString);
console.log(trimmedString.length);

//Implement all string methods here


// 1. slice()
const slicedString=gameCount.slice(0,5);
console.log(slicedString);
// 2. substring()
const substring=gameCount.substring(0,5);
console.log(substring);
// 3. replace()
const replacedString=trimmedString.replace("Swarup","Swarupanand");
console.log(replacedString);
// 4. includes()
const includesResult=gameCount.includes("Swa");
console.log(includesResult);
// 5. split()
const splitString=gameCount.split("a");
console.log(splitString);
// 6. repeat()
const repeatString=gameCount.repeat(3);
console.log(repeatString);
// 7. concat()
const concatString=gameCount.concat(" is learning JavaScript");
console.log(concatString);
// 8. toString()
const num=123;
const numToString=num.toString();
console.log(numToString);
console.log(typeof(numToString));
// 9. padStart()
const paddedStartString=gameCount.padStart(15,"*");
console.log(paddedStartString);
// 10. padEnd()
const paddedEndString=gameCount.padEnd(15,"*");
console.log(paddedEndString);
// 11. charCodeAt()
const charCode=gameCount.charCodeAt(0);
console.log(charCode);
// 12. lastIndexOf()
const lastIndex=gameCount.lastIndexOf("r");
console.log(lastIndex);
// 13. toLowerCase()
const lowerCaseString=gameCount.toLowerCase();
console.log(lowerCaseString);
// 14. toUpperCase()
const upperCaseString=gameCount.toUpperCase();
console.log(upperCaseString);
// 15. search()
const searchIndex=gameCount.search("up");
console.log(searchIndex);
