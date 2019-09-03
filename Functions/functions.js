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