let cities =  ["Tulsa", "London", "Paris", "Tula", "Sebastopol"];
/*
push()
pop()
unshift()
shift()
indexOf()
splice()
slice()
sort()
map()
filter()
*/



let s = num =>{ for (i of cities){ console.log(i + '\n')}}

s();
console.log(cities.sort());
s();


cities.push("Brussels");
s();
console.log(cities.pop());
console.log('\n\n');
s();

cities.unshift("Jacksonville");
console.log('\n\n');
s();
console.log('\n\n' +cities.shift() + '\n\n')
s()
console.log(cities.indexOf("London"));


let newCities = cities.splice(2);
console.log(newCities);
s();

let anotherNew =  cities.slice(1,3);
console.log(anotherNew);
s();
let numbers = [3,5, 907,14,86,11,0, 154];

console.log(numbers.map(function (num) {
	// body...
	return num*3;
}));

numbers.sort();
console.log(numbers.filter(function(num){

	return num >= 25;
   }))


//Concat

console.log(cities.concat(numbers));


s();

console.log(cities.filter(function(argument){
	return  argument == 'London';
}));

// Example of join method
console.log(cities.join(',,,'));

//Example of reverse method
console.log(numbers.reverse());


// Example of reduce 

console.log(numbers.reduce( function(result, number) {
	return result + number;
}))