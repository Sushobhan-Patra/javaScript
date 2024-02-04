const div = document.createElement("div");
console.log(div);
// div.setAttribute("class", "main");
div.className = "main";
// div.id = "myId";
div.id = Math.round(Math.random() * 9 + 1);
div.style.width = "100px";
div.style.height = "100px";
div.style.border = "solid";
div.style.borderColor = "White";
div.style.borderRadius = "2px";
div.style.padding = "10px";
div.style.margin = "5px";
div.style.alignContent = "center";
div.style.display = "flex";
// div.innerText="Hey! There EveryOne"
const addText = document.createTextNode("Hey! There EveryOne");
div.appendChild(addText);
document.body.appendChild(div);

// create html element
// 1st step :- createElement
// 2nd step :- appendChild in body
