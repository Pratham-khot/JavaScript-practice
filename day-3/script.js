console.log("Hello");
// operators
// operators will perform some operations on operands

// (=) assignment operator

const userName="Pratham";

// Arithmetic operator
// =,-,*,/,%

const num1=10;
const num2=40;

const sum=num1+num2;
console.log(sum);//50

const sub=num1-num2;
console.log(sub);//-30

const mult=num1*num2;
console.log(mult);//400

const division=15/10;
console.log(division);//1.5 (because in js int and float both are considered as of type number)

const modulo=10%3;
console.log(modulo);//1

//  (**) exponential operator (it is called as exponential)

const pow=4**2;
console.log(pow);
console.log(typeof pow);

// comparison operators
// returns boolean value

console.log(10>20);//false
console.log(10<20);//true
console.log(10<=20);//true
console.log(10>=20);//false

// logical operators(&&, ||, !)

console.log(false && true);//false
console.log(10>20 && 10>20);

console.log(20<10 || 20>10);//true

console.log(10>20 && console.log("Hii"));
console.log(!false);//true

// short circuit operators
// &, ||, it is basically used to perform binary operations

// Equality operator(==,!=)
const n1=10;
const n2=20;
console.log(n1==n2);//false
console.log(n1!=n2);//true

// triple equal operator(checks value as well as data type, if both are same then it will be true otherwise false)
console.log(10==="10");//false
console.log(10===10);//true
console.log(10!==10);//true


// increment(++) and decrement(--) operator

let num=10;
console.log(num++);//10

console.log(++num);//12



// Ternary operators

// condition ? if true then execute: if false then execute

10>5? console.log("Yes 10 is greater than 5"):console.log("No 10 is not greater than 5");

11<5? console.log("Yes 11 is greater"):console.log("No 11 is not greater");
;

// compound assignment operators

let number=30;

number +=10;
console.log(number);
let number1=30;
number1 -=10;
console.log(number1);






















