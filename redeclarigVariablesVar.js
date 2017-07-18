// When we declare a variable using the var keyword that is already declared usin var in the same scope
// then it's overwritten

var a = 0;
var a = 1;

console.log(a); // Globally 1

function myFunction() {
	var b = 2;
	var b = 3; 

	console.log(b); // 3
}

myFunction();


// Output
// 1
// 3