//Create a variable 
let firstName = "Jane";


//Create a declared function

function welcome() {
	// Create variable
	let lastName = "Smith"
	//output
	console.log("Welcome " + firstName + " to variable scope");
}



//call the function
welcome()

//create a second function

// function hello(){
// 	//Output
// 	console.log("Hello" + firstName  + " " + lastName);
// }

//hello();
 
for (let i = 0; i < 10; i++) {
	
}

function greeting() {
  let givenName = "Jane";
  if(true){
  	let surname = "Smith";
  	console.log("Hello "+ givenName +" "+ surname);
  }
}

//declare a variable of the same name as in the function
let givenName = "John";
// call the function
greeting();
