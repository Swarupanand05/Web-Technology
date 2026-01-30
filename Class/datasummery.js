//stack primitive use
//whatever you can declare variable is copy value
// Heap non-primitive 
//it give reference original value

let myYoutubeName = "Bajbalkar Ropavatika ";
let newYoutubeName = myYoutubeName ;
newYoutubeName= "Physics Wallah ";
console.log(myYoutubeName);
console.log(newYoutubeName);
//Primitive datva types storing stack when we assign a variable to another variable it copy the made so changing new variable dose not affect the original variable
//non-primitive data types are stored in heap when we assign a variable to another variable it copy the reference so changing new variable value   affect the original variable


//Heap Example
let user1=
{
email:"spb05092004@gmail.com",
fname:"Swarupanand",
id:"23UAM133",
}
let user2=user1;
user2.email="bswarupanand@gmail.com";
console.log(user1.email);
console.log(user2.email);

//difference between stack and heap
//stack is faster than heap
//stack memory is used for static memory allocation and heap memory is used for dynamic memory allocation
//stack memory is used for primitive data types and heap memory is used for non-primitive data types
//stack memory is automatically managed by the compiler and heap memory is manually managed by the programmer
//stack memory has a size limit and heap memory is limited by the size of the computer's RAM
//stack memory is stored in LIFO(Last In First Out) order and heap memory is stored in random order
//stack memory is used for function calls and local variables and heap memory is used for objects and arrays
//stack memory is faster to access than heap memory because of its LIFO structure
//stack memory is more efficient than heap memory because it has less overhead
//stack memory is less prone to fragmentation than heap memory
//stack memory is used for short-lived data and heap memory is used for long-lived data
//stack memory is automatically cleaned up when a function call is completed and heap memory must be manually freed by the programmer
//stack memory is used for small data and heap memory is used for large data
//stack memory is used for temporary data and heap memory is used for persistent data
//stack memory is used for local variables and heap memory is used for global variables
//stack memory is used for primitive data types like number, string, boolean, null, undefined and symbol
//heap memory is used for non-primitive data types like objects, arrays and functions
//stack memory is faster to allocate and deallocate than heap memory
//heap memory is slower to allocate and deallocate than stack memory
//stack memory is used for function parameters and return values and heap memory is used for object properties and array elements
//stack memory is used for static variables and heap memory is used for dynamic variables
//stack memory is used for compile-time data and heap memory is used for run-time data
//stack memory is used for fixed-size data and heap memory is used for variable-size data
//stack memory is used for local scope and heap memory is used for global scope
//stack memory is used for temporary storage and heap memory is used for permanent storage
//stack memory is used for short-term data and heap memory is used for long-term data
//stack memory is used for small objects and heap memory is used for large objects
//stack memory is used for simple data and heap memory is used for complex data
//stack memory is used for immediate data and heap memory is used for deferred data
//stack memory is used for transient data and heap memory is used for persistent data
//stack memory is used for ephemeral data and heap memory is used for durable data
//stack memory is used for volatile data and heap memory is used for non-volatile data
//stack memory is used for temporary variables and heap memory is used for permanent variables
//stack memory is used for short-lived objects and heap memory is used for long-lived objects
//stack memory is used for local context and heap memory is used for global context
//stack memory is used for immediate execution and heap memory is used for deferred execution
//stack memory is used for function scope and heap memory is used for object scope
//stack memory is used for local data and heap memory is used for shared data
//stack memory is used for short-term storage and heap memory is used for long-term storage
//stack memory is used for small variables and heap memory is used for large variables
//stack memory is used for simple operations and heap memory is used for complex operations
//stack memory is used for immediate results and heap memory is used for delayed results
//stack memory is used for temporary computations and heap memory is used for permanent computations
//stack memory is used for short-lived processes and heap memory is used for long-lived processes
//stack memory is used for local execution and heap memory is used for global execution
//stack memory is used for immediate data access and heap memory is used for deferred data access
//stack memory is used for function-local data and heap memory is used for application-wide data
//stack memory is used for temporary data storage and heap memory is used for persistent data storage

