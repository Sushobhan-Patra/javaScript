// selecting an element in html
// getElementById

const title = document.getElementById("title");
console.log(title);
/*
<h1 id="title" class="test heading" style="background-color: green; padding: 15px; border-radius: 15px;">
        DOM learning on chai aur code
        <span style="display: none">test text</span>
      </h1>
        
*/

console.log(title.id);
// title

console.log(title.className);
//  heading

// use CSS in js
title.style.backgroundColor = "green";
title.style.padding = "15px";
title.style.borderRadius = "15px";

title.getAttribute("id");
title.setAttribute("class", "test heading"); //always overwrite
console.log(title.getAttribute("class"));
//test heading

// innerText,textContent,innerHTML for selecting Text Node

console.log(title.textContent);
/* 
        DOM learning on chai aur code
        test text
*/
console.log(title.innerText);
// DOM learning on chai aur code
console.log(title.innerHTML);
/*

        DOM learning on chai aur code
        <span style="display: none">test text</span>
*/

// getElementByClassName
const heading = document.getElementsByClassName("list-item");
console.log(heading); //HTMLCollection [h1#title.test.heading, title: h1#title.test.heading]
// returns HTML collection
const arrhc = Array.from(heading);
console.log(arrhc);
// querySelector --> just like css selector
const firstH2 = document.querySelector("h2");
console.log(firstH2); //returns first H2 in the document
console.log(document.querySelector("#title"));
/*
<h1 id="title" class="test heading" style="background-color: green; padding: 15px; border-radius: 15px;">
        DOM learning on chai aur code
        <span style="display: none">test text</span>
      </h1>
        
*/
console.log(document.querySelector(".heading"));
/*
<h1 id="title" class="test heading" style="background-color: green; padding: 15px; border-radius: 15px;">
        DOM learning on chai aur code
        <span style="display: none">test text</span>
      </h1>
        
*/
console.log(document.querySelector('input[type= "password"]'));
// {/* <input type="password" name id></input> */}

// turngreen to listitem one

const oneLI = document.querySelector("ul").querySelector("li");
oneLI.style.color = "green";

// querySelectorAll -->returns nodeList just like array
const liList = document.querySelectorAll("li");
console.log(liList);
liList.forEach((li) => {
  li.style.color = "yellow";
});

// selecting html elements through DoM
// getELementById -->html
// getElementByClassName-->htmlCollection
// querySelector -->first element,css selector
// querySelectorAll --> nodelist,foreach,[index]
// innerHTML --> fullhtml
// innerText --> display the text of browser
// textContent --> display text with hideing text
// select.style.property = "value";
// getAttribute -->te get attribute form element
// setAttribute -->to set attribute in html
