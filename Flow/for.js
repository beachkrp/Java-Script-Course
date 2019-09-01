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

//Create a for loop to demonstrate 'continue'

for (var i = 0; i < 5; i++) {
	if (i==3) {
		continue;
	}
	console.log("This is loop # " + i)
}

//Create a for loop to demonstrate "break"

for (var i = 0; i < 5; i++) {
	if (i==3) {
		break;
	}
	console.log("This is loop # " + i)
}

