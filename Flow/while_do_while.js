//Create two variables
//Boolean variable for test
var test = true;

//Variable to serve as a counter
var count  = 0;

while(true){
	if (count == 3) {
		break;
	}
	console.log("The count is " + count);
	//increment the counter
	count++;
}
//reset test and count
test = false;
count = 0;
//do while loop
do {
	if (count == 3) {
		test==false;
		break;
	}
	console.log("The count is " + count);
	//increment the counter
	count++;
}while(test)