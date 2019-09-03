//Create a function called sum
var sum = function ()  {
	//Create three variables
	var num1 = 2;
	var num2 = 3;
	var sum = num1 + num2;
	//Output
	// Return a value
	return "The total of " + num1 + " and " + num2 + " is " + sum;
	
	
}
//Print the function
console.log(sum);
console.log(sum());

//Call the function

sum();
sum();
sum();

var total = sum;

console.log(total());


//Create a Welcome function
// adding default
// TODO change to default 
var welcome = function (firstName , lastName ) {
	return "Welcome " + firstName + " "+ lastName +" to the world of functions with arguments";
}
//Call the function and show the output
console.log(welcome("John", "Smith"));
console.log(welcome("Jane", "Roe"));
//undefined argument



console.log(welcome("Mike"))

// Challenge.
//  Function to change miles to Kilometers

var converter = function (miles) {

	// Convert and return
	return miles / .62137;

}


/// Test function

console.log(converter(1));
console.log(converter(2.4));
console.log(converter(8));


