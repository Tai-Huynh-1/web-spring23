// functions are snippets of code that can be reused, we need to define then invoke a function to use it - we may need to pass in required parameters

// declare a function, we use the "function" keyword
function printName(name) {
	console.log(name);
}

// invoke/ call a function to use it
// printName("tai");
// printName("david");
// printName("jack");

function greet(name, age) {
	return `Hi, my name is ${name} I'm ${age} years old.`;
}

const greet1 = greet("tai", 15);
const greet2 = greet("dave", 25);

// console.log(greet1);
// console.log(greet2);

function multi(a, b) {
	return a * b;
}

const val = multi(5, 4);
// console.log(val);

// scoping variables
// global scope
const age = 21;
const age2 = 55;

function printMyAge() {
	// function scopes
	const variableInFunction = "david";
	console.log(variableInFunction);
	console.log(age);
}

// printMyAge();

// console.log(variableInFunction); // attempting to access variables declared on inside of function scope? WILL NOT WORK

// if-else, while, for loops => block scope

function blockFunc(boolean) {
	let answer;

	if (boolean) {
		answer = 1;
		console.log("true");
	} else {
		answer = 0;
		console.log("false");
	}
	return answer;
}

console.log(blockFunc(false));
