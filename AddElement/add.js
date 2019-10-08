//  Create a variable
let p1 = document.createElement("p");

p1.textContent = "This was created with Javascript";
//set the id for the element
p1.setAttribute("id", "para1");

// append the element to the document opject
document.querySelector("body").appendChild(p1);

//Create another variave

let p2 = document.createElement("p");

p2.textContent = "This is the second paragraph";
//set the id for the element
p2.setAttribute("id", "para2");

document.querySelector("body").appendChild(p2);

//Create a variable for a heading
let heading = document.createElement("h1");
//add content
heading.textContent = "This is a new heading";
heading.setAttribute("id","heading1");

document.querySelector('#para1').after(heading);
