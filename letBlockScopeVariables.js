// let keyword are called as block scoped variables. 
// When the block scope variables are declared inside a block, they are accesible inside the block that they are defined in 
// but no outside the block

let a = 12; // Accesible globally

function myFunction() {
	console.log(a);

	let b = 13; // Accesible throughout the function

	if(true) {
		let c = 14; // Accesible throughout the "if" statement
		console.log(b);
	}

	console.log(c); // Reference Error Exception
}

myFunction();

// Output
// 12 Globally
// 13 Accesible throughout the function
// Reference Error Exception