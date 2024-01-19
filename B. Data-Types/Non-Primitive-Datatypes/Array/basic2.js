const districtsWB = ["Paschim Medinipur", "Burdwan", "Hoogly"];
const statesIN = ["WB", "UP", "PUNJAB"];
// statesIN.push(districtsWB);
// const IN = statesIN;
// console.log(IN); //[ 'WB', 'UP', 'PUNJAB', [ 'Paschim Medinipur', 'Burdwan', 'Hoogly' ] ]

// concat method -->store in a new array
const IND = statesIN.concat(districtsWB);

console.log(IND);

// spread operator
const INDIA = [...statesIN, ...districtsWB];
console.log(INDIA);

// flat(depth) --> to spread it in a single array
const arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10]]];
const usableArr1 = arr1.flat(3); //flat (Infinity)
console.log(usableArr1);

// isArray -->boolean

console.log(Array.isArray("Sushobhan"));

// from --> for converting the string to Array.

console.log(Array.from("Sushobhan"));
/* [
  'S', 'u', 's',
  'h', 'o', 'b',
  'h', 'a', 'n'
]*/
console.log(Array.from({ name: "Sushobhan" })); //gives an empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;
const nArr = Array.of(score1, score2, score3);
console.log(nArr);
// from,of ,isArray,push,pop,unshift,shift,indexof,includes,flat,spread(...),concat, join,slice,splice
