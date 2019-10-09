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

//New Function Calculation

function calculation(input1) {
	let result = input1;
	return {
		
		add: function(input2){
					result += input2;
				},
		
		subtraction: function(input2){
					result -=  input2;
				},

		multiplication: function(input2){
			result *= input2;
		},

		division: function(input2){
			result /= input2;
		},
		getResult: function(){
			return result
		}
	}		
}



let someCalc = calculation(0);

someCalc.add(43);
console.log(someCalc.getResult());
someCalc.multiplication(4);
console.log(someCalc.getResult());