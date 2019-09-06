///Create a new array.

var shoppingList  = ['eggs','milk', 'bread', 'cereal', "soda" , "apples"];

//loop through the array
for (var i = 0; i < shoppingList.length; i++) {

	console.log(shoppingList[i]);
}

//for each loooping method
shoppingList.forEach(function (argument, index) {
	console.log(index + " " + argument);
});

//Challenge

//Create an array of cities 

var citiesArray = ["Boston", "Houston", "Tulsa", "Seattle" ];

//loop through the array

citiesArray.forEach(function(element, index){
	console.log("City number " + (index +1) + " is " + element );
	})


for (var city of citiesArray){
	console.log(city);

}
