// number
console.log(10/0);//infinity will be output
console.log(typeof (10/0));//number

console.log(-10/0);//-infinity will be output
console.log(0/0);//nan(not a number) will be the output
console.log(typeof (0/0));//number

// string
// "",'',``

// string concatenation
const sentence="Hello "+"World";
console.log(sentence);

const word1="Hello";
const word2="World";
console.log(word1+" "+word2);
const user="Pratham";
const sent="hello "+user;
console.log(sent);
const sentWithBackTicks=`Hello ${user},
How are you?`;
console.log(sentWithBackTicks);

let person={
    fname:"Pratham",
    lname:"Khot"
};

console.log(person);
console.log(person.fname);
// dot(.)notation for accessing
// we can also access by [] brackets notation
// console.log(person["fname"]);
console.log(person.lname);
// if we want to add new key value pair then it is done as
person.age=23;
console.log(person);
person.city="Pune";

// if we want to modify or update property then it overrides the original keyi.e it does not create new key or dont accept duplicate keys.

person.age=24;

delete person.age;
console.log(person.age);
console.log(person);
// in constant variable or object we can change it but we cant reassign;
// person.fname="Gunda" it is applicable
// output will be
//    {
//     fname:"Gunda",
//     lname:"Khot"
//    }