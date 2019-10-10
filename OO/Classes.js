//use strict mode for node 5

class Person{
	//Creating a constructor
	constructor(first, last){
	this.firstName = first;
	this.lastName = last;
	}
	// //method 
	hello(){ 
		console.log("Hello " + this.firstName  + ' your major is ', this.major);
	}
}

//Instatiate a class
let person = new Person("Mark", "Jones");

person.hello();

//Inherited class
class Student extends Person{
 	constructor(first, last, major){
		super(first, last);
 		this.major = major;
 		this.tuitionPaid;
	}

	get studentFirstName(){
		return this.firstName;
	}

	set payment(amount){
		if (amount >=100){
			this.tuitionPaid = amount;
		}
		else
		{console.log("Amount paid must be over $100");
		}
	}

	get payment(){
		if (this.tuitionPaid >= 100){
			console.log("The amount you paid is $"  +  this.tuitionPaid)
		}
		else
			{ return this.tuitionPaid}
	}
	}


let student1 = new Student ("Micah", "Smith", "Math");
student1.payment = 175;

student1.payment
student1.hello();

console.log(student1.studentFirstName);
