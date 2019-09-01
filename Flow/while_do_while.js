//Create two variables
//Boolean variable for test
var test = true;

//Variable to serve as a counter
var count  = 0;

while(test){
	if (count == 3) {
		test = false;
	}
	console.log("The count is " + count);
	//increment the counter
	count++;
}