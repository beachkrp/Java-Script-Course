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