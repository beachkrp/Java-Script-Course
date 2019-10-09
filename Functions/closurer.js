//Create a function
function add(argument1, argument2) {
	function innerAdd(first, second) {
		return first + second;
	}

	//Return the sum of the argument

	return  innerAdd(argument1,argument2);
	
}


//Output
console.log(add(4,6));


function newAdd(num1) {
	return function(num2){

		return num1 + num2;
	}
	// body...
}

//Creat a variable with calls the function
let add4 = newAdd(4);

console.log(add4(6));
console.log(add4(13));

