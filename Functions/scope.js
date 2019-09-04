//Create a variable 
var firstName = "Jane";


//Create a declared function

function welcome() {
	// Create variable
	var lastName = "Smith"
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

for (var i = 0; i < 10; i++) {
	
}

function greeting() {
  var givenName = "Jane";
  if(true){
  	var surname = "Smith";
  	console.log("Hello "+ givenName +" "+ surname);
  }
}

greeting();
