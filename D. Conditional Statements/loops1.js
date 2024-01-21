// for of loop
// for  (const i of obj)
// we don't have to decleare object length.
// object -->array,object ,strings

const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  //   console.log(num);
}

// map datastructure
// uniqe values,maintain order,iteratable
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("FR", "France");
map.set("IN", "India");
// console.log(map);

for (const keys of map) {
  //   console.log(keys); //gives array of key and values
}
// O/P
// [ 'IN', 'India' ]
// [ 'USA', 'United States Of America' ]
// [ 'FR', 'France' ]

// destructure of map
for (const [keys, values] of map) {
  //   console.log(keys, ":-", values);
}

// O/P
// IN :- India
// USA :- United States Of America
// FR :- France

const obj1 = {
  fullname: "Sushobhan Patra",
  date: new Date(),
};
// console.log(obj1);

// obj1 is not iterable
// for (const [keys, values]   of obj1) {
//   console.log(values, keys);
// }
// for in loop for object iteration
const obj2 = {
  js: "JavaScript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in obj2) {
  //   console.log(typeof key);//string
  //   console.log( key);
}
// O/P
// js
// cpp
// rb
// swift
for (const i in obj2) {
  //   console.log(obj2[i]); //as typeof i is string so we have to use bracket notation and iterator name,can't  use dot notation
  //   console.log(obj2.i);//undefined
}

// const programming = ["js", "cpp", "ruby", "swift", "kotlin"];
// for (const i in programming) {
//   //   console.log(i);
// }
// O/P
// 0
// 1
// 2
// 3
// 4
// for (const i in programming) {
//   //   console.log(programming[i]);
// }
// O/P
// js
// cpp
// ruby
// swift
// kotlin
// not iteratable map by for in loop
for (const [keys, values] in map) {
  console.log(keys, values);
}

const programming = ["js", "cpp", "ruby", "swift", "kotlin"];
// forEach accepts callback function
programming.forEach((item) => {
  console.log(item);
});

const programmingValue = (item, index, arr) => {
  console.log(item, index, arr);
};
programming.forEach(programmingValue);

const myCoding = [
  {
    languageName: "javascript",
    languageFile: "js",
  },
  {
    languageName: "java",
    languageFile: "java",
  },
  {
    languageName: "python",
    languageFile: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageFile);
});

/*
date:21.01.2024
for-of -->map,array 
for-in ---> object traverse ,array 
forEach--> Array method,callbackfunction 
*/
