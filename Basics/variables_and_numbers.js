//Create numeric variable
//Node.js 5.12.0
var num1 = 8;

//output
console.log("The number in the num1 variable is " +  num1);


//Mini challenge

//Create second variable 

var num2 = 98;


//output
console.log( num2*num1 - num1/num2 + num2/num1);
//Different output
console.log("The numbers concatenated: "+num2+num1);
//casting 
console.log("The number added together: " + (num2 + num1));

//Create a new variable to calculate a result
var calculate =  num1 + num2/num2;

//Output
console.log("The result is "  + calculate);
//Change order of operation

calculate = (num1+ num2)/num2;

console.log("The result is "  + calculate);


//Challenge  #1
//  Convert Fahrenheit to Celsuius

//create varible
var temp = 95;

//Convert Fahrenheit to Celsius   C = (F-32)*5/9
console.log("The Temperature " + temp + " in Fahrenheit is " + ((temp-32)*5/9) + "  in Celsuis");

//Challenge #2  
// Convert Celsuis to Fahrenheit

// Reassign variable 
temp = 20;
// Conversion  F = C*9/5 + 32
console.log("The Temperature " + temp + " in Celsuis is " + ((temp*9/5) +32) + "  in Celsuis");


//Challenge #3
//Convert mile to kilometers   1 mile = 1.609344 km

//
const conversion = 1.609344;
var miles = 4.2;

//output 
console.log(miles + " miles is the same as " + miles*conversion + " kilometers");




