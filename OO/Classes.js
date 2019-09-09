//use strict mode for node 5
"use strict"; 
class Person{
	constructor(){
		this.firstName = "Mark";
		this.lastName = "Jones";
	}
	//method 
	hello(){ console.log("Hello " + this.firstName + " from the object");

	}
}

let person = new Person();

person.hello();