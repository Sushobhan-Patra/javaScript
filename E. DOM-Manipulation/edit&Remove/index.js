// optimised way for creating textnode because we dont have to traverse tree if we use innerHTML than we have to traverse full tree
function addLang(language) {
  // const ul = document.querySelector(".language");
  const li = document.createElement("li");
  const addText = document.createTextNode(language);
  li.appendChild(addText);
  document.querySelector(".language").appendChild(li);
}
addLang("Python");
addLang("Typescript");
addLang("GoLang");

//edit

const li2 = document.querySelector("li:nth-child(2)");
// li2.innerHTML = "mojo";

// li2.textContent = "mojo";

// const newli = document.createElement("li");
// newli.appendChild(document.createTextNode("Mojo"));
// li2.replaceWith(newli);

// li2.outerHTML = "<li>Mojo</li>";

// remove
const lastLang = document.querySelector("li:last-child");
lastLang.remove();

// edit and remove
// edit
//  1st step :- select the positiion
// 2nd step :-create the element
// last step :- replace with the created element

// remove

// 1st step :- select the element
// 2nd step :- use remove method
