/*
// singleton object when object created using constructor
let myObj = new Object();
myObj["First Name"] = "Sushobhan";
myObj["Last Name"] = "Patra";
console.log(myObj);
*/
const user = {
  name: "Sushobhan Patra",
  DOB: new Date(2003, 0, 12),
  age: function () {
    let DOB = this.DOB.getTime();
    console.log(DOB);
    const currentDate = Date.now();
    console.log(currentDate);
    let age = Math.round((DOB - currentDate) / 1000 / 3600 / 24 / 30 / 12) * -1;
    return age;
  },
};
// console.log(user);
console.log(user.age());
