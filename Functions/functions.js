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

var welcome = function (firstName, lastName) {
	return "Welcome " + firstName + " "+ lastName +" to the world of functions with arguments";
}
//Call the function and show the output
console.log(welcome("John", "Smith"));
console.log(welcome("Jane", "Roe"));
//undefined argument
console.log(welcome("Mike"))