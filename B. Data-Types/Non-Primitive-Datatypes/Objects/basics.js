/*
// singleton object when object created using constructor
// Object.create
let myObj = new Object();
myObj["First Name"] = "Sushobhan";
myObj["Last Name"] = "Patra";
console.log(myObj);
*/
// object literal
const mysym = Symbol("key1");
const user = {
  name: "Sushobhan",
  "full name": "Sushobhan Patra",
  [mysym]: "mykey1",
  DOB: new Date(2003, 0, 12),
  age: function () {
    let DOB = this.DOB.getTime();
    // console.log(DOB);
    const currentDate = Date.now();
    // console.log(currentDate);
    // let age = Math.round((DOB - currentDate) / 1000 / 3600 / 24 / 30 / 12) * -1;
    let age = Math.round((currentDate - DOB) / 1000 / 3600 / 24 / 30 / 12);
    return age;
  },
  location: "kolkata",
  email: "patrasushobhan2003@gmail.com",
  isLoggedIn: true,
};
// console.log(user);
console.log(user.age());

// for accessing object

console.log(user.email);
console.log(user["email"]);

console.log(user["full name"]); //cannot access using dot operator
console.log(user[mysym]); //for accessing symbol
console.log(mysym); //Symbol(key1) o/p
// for changing any values in object
user["isLoggedIn"] = false;
console.log(user);

// Object.freeze(obj_name)-->for lock the object
// Object.freeze(user);
// user["isLoggedIn"] = true;
// console.log(user);
user.greeting = function () {
  console.log("Hey there !");
};
user.greeting();

user.greeting2 = function () {
  console.log(`Hey there ! ${this["full name"]}`);
  console.log(`Hey there ! ${this.name}`);
};
user.greeting2();
