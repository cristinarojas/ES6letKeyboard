// When you declare a variable using the let keyword that is already declared using let
// in the same scope, then it throws a TypeError exception.

let a = 0;
let a = 1;

function myFunction() {
	let b = 2;
	let b = 3; // TypeError

	if(true) {
		let c = 4;
		let c = 5; // TypeError
	}
}

myFunction();