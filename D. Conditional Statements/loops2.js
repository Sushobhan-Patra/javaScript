"use strict";
const coding = ["js", "ruby", "java", "python", "cpp"];
const values = coding.forEach((item) => {
  //   console.log(item);
  //   return item; //its return undefined
});
// console.log(values);
// foreach returns nothing

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const gtf = myNums.filter((item) => {
  return item > 4;
});
// console.log(gtf);

const newNums = [];
myNums.forEach((item) => {
  if (item > 4) {
    newNums.push(item);
  }
});
// console.log(newNums);
// const databaseResponse = [
//   { id: 1, name: "John Doe", age: 25 },
//   { id: 2, name: "Jane Smith", age: 30 },
//   { id: 3, name: "Bob Johnson", age: 22 },
// ];
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];
const userBooks = books.filter((book) => book.genre === "Non-Fiction");
const userBook = books.filter((book) => book.publish > 2000);
// console.log(userBooks);
/*
[
  {
    title: 'Book Two',
    genre: 'Non-Fiction',
    publish: 1992,
    edition: 2008
  },
  {
    title: 'Book Four',
    genre: 'Non-Fiction',
    publish: 1989,
    edition: 2010
  },
  {
    title: 'Book Nine',
    genre: 'Non-Fiction',
    publish: 1981,
    edition: 1989
  }
]
*/
// console.log(userBook);
/*
[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]
*/
const addTen = myNums.map((num) => num + 10);
// console.log(addTen);
/*
[
    11, 12, 13, 14, 15,
    16, 17, 18, 19, 20
  ]
*/
// chaining
const chain = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 50);
// console.log(chain);
/*
[ 51, 61, 71, 81, 91, 101 ]
*/

const myNo = [1, 2, 3];
const total = myNo.reduce((acc, curVal) => {
  console.log(`acc : ${acc} curval : ${curVal}`);
  return acc + curVal;
}, 0);
console.log(total);
// 6
/*
acc : 0 curval : 1
acc : 1 curval : 2
acc : 3 curval : 3
6
*/
// filter:-take condition and return array
// map:- same like foreach but it return something
// reduce :-parameter takes accumulator and corrent value ,initial value
