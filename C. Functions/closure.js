/*
++++ Nested Function +++++
Function inside a function

function outer() {
  console.log(`Outer`);
  function inner() {
    console.log("Inner");
  }
  inner();
}
outer();
*/
/*Function Scope
here x,y and z are decleare in the global scope
let x = 10;
const y = 20;
var z = 30;
function abc() {
  console.log(x, y, z);
}
abc();

error due to scope --> variable can't be accessible out side the scope

function abc() {
  let x = 10;
  const y = 20;
  var z = 30
}
abc();
console.log(x, y, z);
 */

/*Closure 
function outer(x) {
  function inner(y) {
    return x + y;
  }
  return inner;
}
const outerReturn = outer(12);
console.log(outerReturn(12));
*/
