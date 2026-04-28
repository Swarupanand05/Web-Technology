let score = "22"; //any character
let scoreforbool=true;
let scorefornull=null;
let scoreforundefined;

/*console.log(typeof(score));
console.log(typeof(scoreforbool));
console.log(typeof(scorefornull));
console.log(typeof(scoreforundefined));
//null is empty or 0 and datatype of null is object
*/

/*let jj="ABC";
//if there is number in string it will convert in number
//but if there is character then it will not convert it into number it will show an error NaN
let jjconvert=Number(jj);
console.log(jjconvert);

console.log(typeof(score));
console.log(typeof(jjconvert));


let a=100;
let aconvert=String(a);
console.log(a,typeof(a));
console.log(aconvert,typeof(aconvert));




//Activity 01
//conversion of Boolean to string
//All type of conversion 
*/

//Arithmatical operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);

//string concatination
let str1=" Hello "
let str2="Swarup "
console.log(str1 + str2);

//Conversion
console.log("1"+2);
console.log("1"+2+2);
console.log(1+"2");
console.log(1+3+"2");
console.log((3+4)*5%3);

//Javascript only automatically convert string to number in arithmatical operation

// STRING to  BOOLEAN

// String to Boolean
// Empty string gives false
// Non-empty string gives true
console.log(Boolean("Hello"));   // true
console.log(Boolean(""));        // false

// Boolean to String
// Boolean value converted into text
console.log(String(true));       // "true"
console.log(String(false));      // "false"


// NULL to  BOOLEAN

// Null to Boolean
// null always gives false
console.log(Boolean(null));      // false

// Boolean to Null
// Direct conversion is not possible
// null is assigned manually
let a = null;
console.log(a);


// UNDEFINED to  BOOLEAN

// Undefined to Boolean
// undefined always gives false
console.log(Boolean(undefined)); // false

// Boolean to Undefined
// Direct conversion is not possible
// undefined means value is not assigned
let b;
console.log(b);


// STRING to  NULL

// String to Null
// Direct conversion is not possible
// null must be assigned manually
let c = null;
console.log(c);

// Null to String
// null converted into string text
console.log(String(null));       // "null"


// STRING to  UNDEFINED

// String to Undefined
// Direct conversion is not possible
// undefined means variable declared but no value
let d;
console.log(d);

// Undefined to String
// undefined converted into string text
console.log(String(undefined));  // "undefined"


// NUMBER to  BOOLEAN

// Number to Boolean
// 0 gives false
// Any non-zero number gives true
console.log(Boolean(10));     // true
console.log(Boolean(0));      // false

// Boolean to Number
// true becomes 1
// false becomes 0
console.log(Number(true));    // 1
console.log(Number(false));   // 0


// NUMBER to  NULL

// Null to Number
// null becomes 0
console.log(Number(null));    // 0

// Number to Null
// Direct conversion not possible
// null must be assigned manually
let p = null;
console.log(p);


// NUMBER to  UNDEFINED

// Undefined to Number
// undefined becomes NaN
console.log(Number(undefined)); // NaN

// Number to Undefined
// Direct conversion not possible
// undefined means no value assigned
let s;
console.log(s);


// NUMBER to  STRING

// Number to String
// Number converted into text
console.log(String(100));     // "100"

// String to Number
// If string contains number → converts
// If string contains characters → NaN
console.log(Number("50"));    // 50
console.log(Number("ABC"));   // NaN