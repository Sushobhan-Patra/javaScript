/*
Function-->
           A block Of code which We can use multiple time in our code by just calling the name of the function.
           A function can be with out  a name.
    It help us to fix our bug/debug in easy way

*/
/* 
Terminology-->
             Function defination and function decleartion are same 
*/
/*
syntex
Function Declaration/Definition

       function function_name(){
            statements
       } 

Function calling
       function_name();


function sayMyName(name) {
  console.log(`Hello ${name}!!`);
}
console.log(sayMyName); //reference

sayMyName("Sushobhan");
*/
/*
Parameter VS Argument
name is Parameter...anything we pass in paranthesis() in the function definion is Parameter.(the value used by the function)
"Sushobhan" is Argument...anything we pass in paranthesis() in the function call is Argument. (Actual Value)

*/
// const nam = "Sushobhan"; //this is a expression
/*
Function Expression
       Syntex
              const function_name=function(para1,para2){
                     statements
              }

       function calling    
              function_name(arg1,arg2);


const sayMyName2 = function (name) {
  console.log(`Hello ${name}!!`);
};
sayMyName2(nam);
*/
/*
Return statement 
              it return value from the function.we can store it as a variable.then function call it self a value.
              Syntex
                     return expression/variable;

              no statement would executed after  a return statement.means in that block.
              only one return statement executed in the function.

function sum(a, b) {
  if (typeof a === "string" || typeof b === "string") {
    return `wrong Input`;
  }
  return a + b;
  console.log(`hey there!`);
}
console.log(sum(2, "4"));
*/
/*
Default And Rest Parameter

Default parameter
function example(a,b){        // two parameter
       return (2*(a+b));
}
example(2)    // one argument //result NaN
function takes two parameter but in function call  we pass one argument.
then a=2 but b=undefined so in this case we assign a value in function defination that is default parameter.if we pass two argument then it will be overwrite by argument.

function example(a, b = 0) {
  // two parameter
  return 2 * (a + b);
}
console.log(example(2, 3));

Rest parameter
If in function defination we have two parameter but in function call user pass more than two arguments the we use rest parameter.
       1.in a function only one rest parameter is possible.
       2.all parameter must be write before rest parameter
arguments are stored in the form of array.

function example(a, ...b) {
  console.log(a, b);
}
example(2, 7, 8, 5, 4, 3);
*/
/*
Arrow(=>) function
const add=(x,y)=>{
       return x+y;
}
*/
