//array syntex
const myArray = [0, 1, 2, 3, 4, 5];
console.log(myArray);

// by using array constructor
// constructor --> className and method name is same and it is used to create and initilised instance of a object
const newArray = new Array(1, true, 3, 4, `Sushobhan`);
console.log(newArray);

const arr = Array(1, 5.6, "S", null, undefined, { a: 15 });
console.log(arr);

// for  accessing array we have to use index i.e, starts from 0.can not  use negative index -1

console.log(`My name is ${newArray[4]} `);
console.log(myArray[0]);
// console.log(myArray[-1])  //returns undefined

// array methods

// push() --> adding element in the last of the array.
console.log(myArray.push(6)); //returns new length of the array
console.log(myArray);

console.log(myArray.push(7)); //returns new length of the array
console.log(myArray);

// pop() --> delete array element from the last.
console.log(myArray.pop()); //returns that element
console.log(myArray);

// unshift(), shift()
// unshift() --> add array element from the front
console.log(myArray.unshift(15)); //returns  new lenth of the array
console.log(myArray);

// shift() --> remove element from the front
console.log(myArray.shift()); // returns the element
console.log(myArray);

// length --> lenth of an array

console.log(myArray.length); //not a method its a property

//  includes() --> return boolean values
console.log(myArray.includes(15));
console.log(myArray.includes(5));

//indexof() --> returns index if value does not exist in the array then returns -1
console.log(myArray.indexOf(9));
console.log(myArray.indexOf(5));

// join() --> return string ,bydefault comma otherwise join by seperator

console.log(myArray.join());
console.log(myArray.join(""));
console.log(typeof myArray.join("-"));
console.log(myArray);

//slice() -->copy and splice()--> cut
console.log("A", myArray);
const myn1 = myArray.slice(1, 3);
console.log("B", myn1);

const myn2 = myArray.splice(1, 3);
console.log("C", myn2);

console.log(myArray);
