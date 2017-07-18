// Variables that are declared using the var are called as function scoped.

var a = 12; // Accesible globally 

function myFunction(){
	console.log(a); // 12

	var b = 13; // Accesible throughout function

	if(true) {
		var c = 14; // Accesible throughout function
		console.log(b); // 13
	}

	console.log(c); // 14
}

myFunction(); 

// Output
// 12
// 13
// 14