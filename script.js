console.log("Hello World");
console.log("test");

//VARIABLES
var variableName = 'This is a variable 1';
console.log(variableName);

let variableName2 = 'This is a variable 2';
console.log(variableName2);

const variableName3 = 'This is a variable 3';
console.log(variableName3);



var variableName = 'This is a variable 1';           //we can't re-assign values for const variables
console.log(variableName);

variableName = 'Hello variables';
console.log(variableName);


//DATA TYPES
const name = 'Kushan';
const backticks = `Hello, ${name}, how are you?`;         //we can only use `` for this..can't do with '' or ""

console.log(backticks);
console.log(typeof backticks);

//OBJECTS
const person = {
    name: 'Kushan',                     //an object can store any data type
    age: 26,
}

console.log(person);

const a = 10;
const b = 10;

console.log(a > b);

//strict equality
//compares VALUES and DATA TYPES
//return true if only both are same
console.log(20 === "20");

//loose equality
//doesn't compares DATA TYPES
console.log(20 == "20");

//LOGICAL OPERATORS
//AND && => all operands are true => true
console.log(true && true);

//OR || => at least one operands are true => true
console.log(true || false);

//NOT
console.log(!true);

//LOOPS
const age = 18;

if(age >= 18){
    console.log("welcome to the club");

}else{
    console.log("grow up!!!");
}