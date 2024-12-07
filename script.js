// take a number from user and print all the numbers from 0 to that number

// var num=prompt("Enter the Number:");
// for(let i=0;i<=num;i++)
// {
//     console.log(i);
    
// }
// user defined functions- the block of code which is written by user to perform specific task and can be re-used

// Function declaration

// function greet()
// {
//     alert("Hello World..!!");
// }
// greet();
// function doSum(num1,num2)
// {

//     alert(`"Sum is: " ${num1+num2}`);
// }
// doSum(10,20);

// how to return from function

// function calculateSum(num1,num2)
// {
//     console.log("Value of num1 is: " +num1);
//     console.log("Value of num2 is: "+num2);

//     return num1+num2;
// }
// const sum=calculateSum(10,20);

// write a function which will take two parameters first name and last name and will return fullName

// function user(fName,lName)
// {
//     return fName+" "+lName;
// }
// fname=prompt("Enter first name");
// lname=prompt("Enter the last name")
// alert(user(fname,lname));
    
// 0056078

// 00059678

// write a function that takes two numbers as input and returns their sum.

function calculateSum()
{
    let num1=prompt("Enter first number");
    let num2=prompt("Enter second number");
    let sum=(+num1)+(+num2);
    alert("Sum is: "+sum);
}



function showMessage()
{
    const fname=prompt("Enter first name");
    alert("Welcome "+fname);
}

function evenOddNum()
{
    let num1=prompt("Enter the number");
    if(num1%2==0)
    {
        alert("Even Number");
    }
    else
    {
        alert("Odd Number");
    }
}
function strLen()
{
    let str=prompt("Enter any String");
    alert("Length of Entered String is: "+str.length);
}

// create a program that asks user to enter a number and prints the multiplication table for that number.

function mulTable()
{
    let n=prompt("Enter the whose table need to find");
    for(let i=1;i<=10;i++)
    {
        var t=n*i;
        console.log(n + " * "+ i+" = "+t);
        
    }
}
function sum()
{
    let n=prompt("Enter the range of numbers");
    let sum=0;
    for(let i=1;i<=n;i++)
    {
        sum=sum+i;
    }
    console.log("Sum is: "+sum);
    
}

function largest()
{
    let a=prompt("Enter first number");
    let b=prompt("Enter second number");
    let c=prompt("Enter third number");
    if(a>b && a>c)
    {
        alert("First number is largest");
    }
    else if(b>a && b>c)
    {
        alert("Second number is largest");
    }
    else
    {
        alert("Third number is largest");
    }



}
function randNum()
{
    let ran=Math.random()*10+1;
    let floorValue=Math.floor(ran);
    console.log("Random generated Number is: "+floorValue);
    
}