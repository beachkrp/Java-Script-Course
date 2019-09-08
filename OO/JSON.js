//Create an object
var lamp = {
	"type" : "desk",
	"brightnessOfBulb": 60,
	"turnedOn": true,
	manufacturer : {
		name  : "Big Electtic Company",
		model : "ABC12",
		locations : ['USA', "Germany", "UK"]
	},
	turnLampOnOrOff : function(){console.log("The lamp will turn on or off")}
};

console.log(lamp.type);
console.log(lamp.manufacturer.model);

lamp.turnLampOnOrOff();