//use strict mode for node 5
"use strict"; 
class Person{
	constructor(first, last){
		this.firstName = first;
		this.lastName = last;
	}
	//method 
	hello(){ 
		console.log("Hello " + this.firstName );
	}
}

//Instatiate a class
let person = new Person("Mark", "Jones");

person.hello();

//Inherited class
class Student extends Person(){
	constructor(first, last, major){
		super(first, last);
		this.major = major;
	}
hello(){
	console.log("Hello" + this.firstName + "your major is " + this.major);
}}

let student = new Student("Terry", "Gilliam", "Theatre");
student.hello();