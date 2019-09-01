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

//Create a for loop to test scope

for (var i = 0; i < 5; i++) {
	var test = 0;
	test++;
	console.log(test)
}
	


//Challenge
//Create a loopt that runs from 1 to 10
// Multiply the value of the counter by 5 adding to the last steps
//Output the total sum at the end
//create a variable to hold the sums

var sum = 0;

for (var i = 1; i <= 10; i++) {
	//Output of the multiple by 5 of the counter and add 
	sum += i*5;
	console.log("In the loop " + i + " the value of five times the counter is " + sum);
}
console.log("\nThe final sum is " + sum+"\n\n");

//Challenge 2
//Repeat Skip the loops 4 and 7
sum = 0;

for (var i = 1; i <= 10; i++) {
	//Output of the multiple by 5 of the counter and add 
	//skip iterations 4 and 7
	if ((i==4) || (i==7))
		{continue;}
	sum += i*5;
	console.log("In the loop " + i + " the value of five times the counter is " + sum);
}
console.log("\nThe final sum is " + sum + "\n\n" );