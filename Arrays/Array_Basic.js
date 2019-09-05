//Create an array

var numArray =[3, 7, 6];

//Give the length of the array

console.log(numArray.length);

//output specific element

console.log(numArray [1]);

//output whole array

console.log(numArray);

//Change element value
numArray[2] = 50;

//See output of result
console.log(numArray);

//Assign an element that doesn't exist

numArray[5]  = 50;
console.log(numArray);

//View an element tha doesn't exist

console.log(numArray[4]);


//Object oriented approach

var newNumArray1 = new Array(3 , 7, 6);
console.log(newNumArray1);

//Create another array
var nextNumArray = [];

numArray[0] = 3;
numArray[1] = 6;

//TODO for node 15
//var [num1, num2] = numArray;
// console.log(num2);

//[num2, num1] = [num1, num2];

