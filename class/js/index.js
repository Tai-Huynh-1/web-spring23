// = is the assignment operator (assign a value to a variable)
// JS has 5 primitive data types: string, number, boolean, undefined, null

var myName = "Tai"; // string
var age = 10; // number
var active = true; // boolean (true or false)

var membership1 = undefined; // undefined (a variable has be created in memory, but has not been assigned a value)
var membership2; // undefined
let membership3;

var date_created = null; // null (null is a proper value, the variable has been assigned a value of null) (empty placeholder, lack of value, empty value)

// console.log("membership1", membership1);
// console.log("membership2", membership2);
// console.log("membership3", membership3);
// console.log("date_created", date_created);

// console.log("age", typeof age); // "number"

// 'var' and 'let' can be reassigned, 'const' cannot
let myAge = 10;
myAge = 20;

const yourAge = 15;
// yourAge = 20; CONST CANNOT BE REASSIGNED

// 'var' can be delared more than once on the same scope (level of visible)
var membership1 = true;
// let myAge = true;

// 'var' gets hoisted!

// normal examples, declare a variable then use it
// var nameA;
// console.log("nameA", nameA);
// nameA = "Dave";
// console.log("nameA", nameA);

// let nameB;
// console.log("nameB", nameB);
// nameB = "Dave";
// console.log("nameB", nameB);

// use a variable before declaration (Unusual case)
// HOISTING: makes it seem like our variable (var) is brought to the top of the code & executed first
// BUT it does not have a value assigned to it, therefore JS assigns 'undefined'

console.log("calling nameA before declare", nameA); // => we get undefined, because var is hoisted
var nameA; // declare
console.log("nameA after declare, but no assignment", nameA); // undefined
nameA = "Dave"; // assignment
console.log("nameA after assignment", nameA); // Dave

// console.log("calling nameA before declare", nameA); // => ReferenceError: Cannot access 'nameA' before initialization
// let nameA; // declare
// console.log("nameA after declare, but no assignment", nameA); // undefined
// nameA = "Dave"; // assignment
// console.log("nameA after assignment", nameA); // Dave

// console.log(email);
// const email = "abc@gmail.com";

// JS goes through 2 phases when running code: memory allocation & execution

// functions declared using 'function' keyword also get hoisted - functions work normally

// functions declared with 'function' keyword
console.log("using multiply function, before declaring it", multiply(5, 4)); // using multiply function, before declaring it
function multiply(a, b) {
	return a * b;
}

// anonymous functions
// console.log("using subtract function, before declaring it", substract(15, 10));
// ReferenceError: Cannot access 'substract' before initialization
let substract = function (a, b) {
	return a - b;
};

// arrow functions
// console.log("using divide function, before declaring it", divide(15, 5));
// ReferenceError: Cannot access 'divide' before initialization
const divide = (a, b) => {
	return a / b;
};

// functions with 'var'
var add; // undefined
// console.log("using add function, before declaring it", add(15, 5)); // TypeError: add is not a function
// undefined(15, 5) - basically what I'm doing on line 90, that's why it throws an error
var add = function (a, b) {
	return a + b;
};

// FIND OUT WHAT IS THE VALUE OF "add" on line 89. Tell me why we are getting this error: TypeError: add is not a function
// undefined

// difference between 'var' & 'let'
// 1. hoisting is performed on "var", but not on "let"
// console.log("hisName", hisName); // undefined
var hisName = "Tai";

// console.log("hisAge", hisAge); // TypeError, ReferenceError
let hisAge = 15;

// 2. 'var' can be re-declared in the same scope, not 'let' or 'const'
// var hisName = "Dave" // this is okay
// let hisAge = 20 // compile error

// arrow function vs normal function
// normal function declaration
function myFunc(firstParam) {}
myFunc(); // invoking the function

// anonymous function (you still have to store it into a variable to refer to it)
const myFunc2 = function (firstParam) {};
myFunc2(); // invoking the function

// arrow function - more concised (shorter to write) and it has an implied "return" when there is no function body {}
// with one parameter
const myArrowFunc = (firstParam) => {};
myArrowFunc(); // invoking the function

// with 2+ parameter, you need parenthesis
const myArrowFunc2 = (firstParam, secondParam, thirdParam) => {};
myArrowFunc2();

// using arrow functions
const myArr = [1, 2, 3, 4];
myArr.map(function (element) {
	return element * 10;
});

// (element) => element * 10 (implied return when function body is not present)
const mapWithArrow = myArr.map((element) => element * 10);
console.log("mapWithArrow", mapWithArrow);

// ternary operator
function checkSeniority(age) {
	// ternary operator has to "return" a value implicitly (return keyword is not needed)
	return age >= 65 ? "elder" : age >= 18 ? "adult" : "minor";

	// if (age >= 65) {
	// 	return "elder";
	// } else if (age >= 18) {
	// 	return "adult";
	// } else {
	// 	return "minor";
	// }
}

console.log(checkSeniority(26));

// recursions vs. iterations
// fib seq: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
// F(n) = F(n-1) + F(n-2)
// F(0) = 0; F(1) = 1
// n = 2; F(2) = F(2-1) + F(2-2) => F(1) + F(0) => 0 + 1 => 1
// n = 3; F(3) = F(3-1) + F(3-2) => F(2) + F(1) => 1 + 1 => 2
function generateFib(n) {
	// O(n) time, O(n) space
	// iterative
	const fibNumbers = [0, 1];
	for (let i = 2; i <= n; i++) {
		fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2]; // => fibNumbers[1] + fibNumbers[0] => 1 + 0
	}
	return fibNumbers[n];
}
// console.log(generateFib(10));

function generateFibRecursive(n) {
	// O(2^n) time, O(n) stack memory space
	// defining the exit condition
	if (n === 0) return 0;
	if (n === 1) return 1;
	return generateFibRecursive(n - 1) + generateFibRecursive(n - 2);
}
// console.log(generateFibRecursive(5));

// closures: is formed when a function is created, always giving that function access to all variables available to it in its lexical scope at the time the function was created
function addA(a) {
	return (b) => {
		return a + b;
	};
}

const innerFuncA = addA(5); // what type is 'result' : function
const sum = innerFuncA(6);
console.log(sum); // 11

const innerFuncB = addA(10);
const sum2 = innerFuncB(12);
console.log(sum2); // 22

function normalAdd(a) {
	console.log(a);
	return;
}

// closure example 2: private variable
function getCounter() {
	let counter = 0; // private variable
	return () => {
		counter = counter + 1;
		return counter;
	};
}

const incrementCounter1 = getCounter();
const c1 = incrementCounter1(); // what is the value of c1?
console.log("c1", c1); // 1

const incrementCounter2 = getCounter();
const c2 = incrementCounter2();
console.log("c2", c2); // 1
const c3 = incrementCounter2();
console.log("c3", c3); // 2
const c4 = incrementCounter2();
console.log("c4", c4); // 3
console.log("c1", c1); // 1

// const resultNormalAdd = normalAdd(50);

// closure with arrow functions in short
const addB = (a) => (b) => a + b;

// higher-order functions: a function that takes in another function as a parameter and/or returns a function
const z = [];
z.map(() => {}); // .map is an HOF
// addB is also a HOF

// pure functions: are functions where the output is solely dependent on the input given to it. Given a particular input, the function will always generate the same output - function also should not have any side effects (mutating its input is considered a side effect)
// function addItemsToArray(item) {
// 	x.push(item);
// }

// addItemsToArray(100);
// console.log(x);
// addItemsToArray(100);
// console.log(x);

// function addToArray(item) {
// 	const x = [];
// 	return x.push(item);
// }
const x = [1, 2];

// functions in JS are passed by reference for objects and passed by value for primitives
function impureFunction(array, item) {
	array.push(item);
	return array;
}

function pureFunction(array, item) {
	return [...array, item];
}

const array = pureFunction(x, 999);
console.log("array", array); // [999]
console.log("x", x); // [999]
console.log(x === array); // true

// IIFE: Immediately-invoked function expression (need parenthesis around the function def, and function does not need a name, bcuz it gets called right away)
(function (a, b) {
	console.log(a + b);
})(5, 10);
