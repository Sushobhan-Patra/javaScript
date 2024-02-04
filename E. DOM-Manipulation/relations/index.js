const parent = document.querySelector(".parent");

// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1]);
// console.log(parent.children[1].innerText);

// for (let i = 0; i < parent.children.length; i++) {
//   console.log(parent.children[i].innerHTML);
// }
//Monday
//Tuesday
//Wednesday
//Thursday

// console.log(parent.firstElementChild);
// //<div class="day">Monday</div>
// console.log(parent.lastElementChild);
// //  <div class="day">Thursday</div>

const dayOne = document.querySelector(".day");
console.log(dayOne);
//<div class="day">Monday</div>
console.log(dayOne.parentElement);
//<div class="parent">…</div>
console.log(dayOne.nextElementSibling);
//<div class="day">Tuesday</div>
const dayTwo = dayOne.nextElementSibling;
console.log(dayTwo.nextElementSibling);
//<div class="day">Wednesday</div>

console.log(parent.childNodes);

//parent child relation
/*
parent.children --> htmlcollection,for selecting children
firstElementChild -->html,returns the first element of the parent 
lastElementChild --> html,returns the last  element of the parent

dayOne.parentElement --> html,for selecting parent from child
dayOne.nextElementSibling--> html ,next element 
parent.childNodes -->nodes of html
*/
