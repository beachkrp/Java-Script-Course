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
