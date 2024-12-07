// var num1=prompt("Enter the first number 1");
// var num2;
// var answer;
// do{
//     if(num1>0)
// {

//     num2=prompt("Enter second number");
//     if(num2>0)
//     {
//         var sum=(+num1)+(+num2);// or we can do sum=parseInt(num1)+parseInt(num2);
//          answer=confirm("Sum is: "+sum);
//     }
//     else
//     {
//         prompt("Enter the second number it cannot be empty");
//             var sum=(+num1)+(+num2);// or we can do sum=parseInt(num1)+parseInt(num2);
//          answer=confirm("Sum is: "+sum);
//     }
// }
// else{
//     prompt("Please enter the first number");
//    var num1=prompt("Enter the Number 1 again");
 
// }
// while(sum>0)


// if(answer)
// {
//     alert("Party");
    
// }
// else
// {
//     alert("No party");
    
// }

// var name=prompt("Enter the name");
// alert(`${name} you are great person`);

var num1=prompt("Enter the first number");
var num2;
var sum;
var answer;
do
{
    if(num1>0)
    {
        num2=prompt("Enter the second number");
        
        if(num2>0)
        {
            sum=(+num1)+(+num2);
            answer=confirm("Sum is: "+sum);
        }
        else
        {
            alert("Enter the number 2 it cannot be empty");
        }
    }
    else
    {
        alert("Enter numer 1 again it cannot be empty");
    }

}while(sum==0)

if(answer)
{
    alert("Sum is done");
}
else
{
    alert("No done");
}