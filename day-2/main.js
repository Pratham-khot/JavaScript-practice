// Data types in javascript

// there are 8 data types in js

// 1.number

const age=45;
const height=5.5;


// type is an operator used to give the type of data used

console.log("Type of height i.e height is",typeof height);
console.log("Type of age i.e age is",typeof age);

// 2.bigint

const bigNum=677103640217916463n; //or if we add n alphabet in front of any small number then also it will become bigint value.
console.log("type of 677103640217916463n is",typeof bigNum);

// 3.boolean

const isValid=true;
const isAllowed=false;

console.log(typeof isValid);
console.log(typeof isAllowed);

// 4.String
// double quotes
const name="Pratham";
// single quotes
const city="Pune";
console.log(typeof name);
console.log(typeof city);
// backticks(ES6)
const myName="Pratham";
const sentence=`My name is ${myName} and i live in ${city}`;
console.log(sentence);
console.log(typeof sentence);

// 5.undefined

let lastName;
console.log(lastName);
// undefined is value as well as data type
console.log(typeof lastName);

// 6.null

let birthDate=null;
console.log(birthDate);
// null is value so it will print null but its data type will be object
console.log(typeof birthDate);

// 7.object

// in object we can store data in key value pairs

const person={
    fName:"Pratham",
    lName:"khot"
};
// everything in js is object
console.log(person);
console.log(typeof person);// type will be object

// 8.symbol
// unique value
// if we compare two symbols in which they have same value, then also it will consider both the symbols are different or unique
const unique=Symbol("unique value");

console.log(unique);
console.log(typeof unique);



