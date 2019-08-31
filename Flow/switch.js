//Variable to call number 

var num = 50;
var state = "The number is ";

//switch statement
 switch(true){
 	// Execute if num is 1
 	case num == 1:
 		console.log(state + "1");
 	break;
 	//Execute if num is 2
 	case num == 2:
 		console.log(state + "2");
 	break;
 	//Execute if num is 3
 	case  num ==3:
 		console.log(state + "3");
 	break;
 	//Execute is num is 4
 	case  num == 4:
 		console.log(state + "4");
 	break;
 	case num > 40:
 		console.log("The number is greater than 40");
 	break;
 	//Default
 	default:
 		console.log("'num'  has a value not covered by the switch statement");

 }

//Create a variable to hold the grade
var grade = 75;
//switch structure
switch (true)
{	//Testing first case.
	case grade >= 90:
		//Output
		console.log("The student gets an A");
	break;
	//Testing second case
	case grade >= 80:
		//Output
		console.log("The student gets an b");
	break;
	//Testing third case
	case grade >= 70:
		//Output
		console.log("The student gets an C");
	break;
	//testing fouth case
	case grade >= 60:
		//Output
		console.log("The student gets an D");
	break;
	//default 
	default:
		console.log("The student gets an F");
	}