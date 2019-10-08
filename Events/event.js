//Create a variable for the button element

let button1 = document.querySelector("button");

//Add an event Listener
button1.addEventListener("click", handleEvent);

function handleEvent(){

	let p1 = document.createElement("p");
	
	p1.textContent = "The Button was Clicked";
	document.querySelector("body").appendChild(p1);
	button1.removeEventListener("click", handleEvent);
}