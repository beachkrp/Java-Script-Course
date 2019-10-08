//Select the heading
let heading1 = document.querySelector("#heading1");


//Add an event listener to the heading
heading1.addEventListener("mouseover", handleMouse);

// Define the event handler
function handleMouse() {

	let head = document.createElement("h1");
	head.textContent = 'this is a new header';
	document.querySelector("#heading1").after(head);
	heading1.removeEventListener("mouseover",handleMouse);
}

//Create a variable for the button element

let button1 = document.querySelector("#button1");
let button2 =  document.querySelector("#button2");
//Add an event Listener
button1.addEventListener("click", handleEvent);
button2.addEventListener("click", handleEvent);


function handleEvent(event){

	
	let p1 = document.createElement("p");


	if(event.target.id == 'button1'){

		p1.textContent = "Button One was Clicked";	
	}else 
	{
		p1.textContent = "Button Two was Clicked";	
	}
	document.querySelector("body").appendChild(p1);
	

}




