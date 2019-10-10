///Create a new array.

let shoppingList  = ['eggs','milk', 'bread', 'cereal', "soda" , "apples"];

//loop through the array
for (let i = 0; i < shoppingList.length; i++) {

	console.log(shoppingList[i]);
}

//for each loooping method
shoppingList.forEach(function (argument, index) {
	console.log(index + " " + argument);
});

//Challenge

//Create an array of cities 

let citiesArray = ["Boston", "Houston", "Tulsa", "Seattle" ];

//loop through the array

citiesArray.forEach(function(element, index){
	console.log("City number " + (index +1) + " is " + element );
	})

// for of loop

for (let city of citiesArray){
	console.log(city);

}
