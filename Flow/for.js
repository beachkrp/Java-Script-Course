//Create a for loop
for (var i = 5; i >= 1; i--) { 
	//output
	console.log("This is loop # " + i);
}
//nested for loops
for (var i = 1; i <= 5; i++) {
	for (var j  = 0;  j<= 3 ;j ++) {
		//Inner loop output
		console.log("The inner loop has run " + j + " times")
	}
	//Outer loop output
	console.log("The outer loop has run " + i + " times");
}