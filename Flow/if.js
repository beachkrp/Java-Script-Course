//Declare a boolean variable  node.js 5.12
//Refactored to node js 10
let test = true;

//if structure
if (test) {
	//output
	console.log("The condition is true");
} else{
	console.log("The condition is false");
}

//output after teh if structure
console.log("This is the code after the if structure");

//Declare a numerical variable 
let num= 50;

if (num > 75) {
	//Output 
	console.log("The nummber is greater than 75");
	}
else if (num < 35) {
	//Output
	console.log("The numnber is less than 35");
}
else if(num ==50) {
	//Output 
	console.log("The number is 50");
}
else if (num >45) {
	//Output
	console.log("the Number is greater than 45");
}

else {
	//Output
	console.log("The condition is false");
}


//Demonstrating the OR operator

//Assign  a mew variable

let num2 = 25;

//if statement
if ((num >45)  || (num2 < 25)) {
	//Output
	console.log("One of the conditions are true");
}
else {
	console.log("None of the conditions are true");
}

//Demonstrating the AND operater
if ((num >45)  && (num2 < 25)) {
	//Output
	console.log("Both of the conditions are true");
}
else {
	console.log("Both of the conditions are not true");
}


if ((num >45)  && (num2 <= 25)) {
	//Output
	console.log("Both of the conditions are true");
}
else {
	console.log("Both of the conditions are not true");
}