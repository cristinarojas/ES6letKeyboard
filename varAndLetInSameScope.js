// when you declare a variable with a name that is already accesible in a function
// (or innner functions), or is a sub-block using var or let, then it's a different variable.

var a = 1;
let b = 2;

function myFunction() {
	var a = 3; // Different variable
	let b = 4; // Different variable

	if(true) {
		var a = 5; // Overwritten
		let b = 6; // Different variable

		console.log(a); // 5
		console.log(b); // 6
	}

	console.log(a); // 5
	console.log(b); // 4
}

myFunction();

console.log(a); // 1
console.log(b); // 2

// Output
// 5
// 6
// 5
// 4
// 1
// 2