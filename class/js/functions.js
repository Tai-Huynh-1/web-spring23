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
	let answer = 0;

	if (boolean) {
		answer = 1;
		console.log(answer);
		printMyAge();
	} else {
		let answer = 2;
		answer = 1;
		console.log(answer); //
		printMyAge();
	}

	return answer;
}

// const result = blockFunc(false); //
// console.log(result);

// execution flow & call stack in JS
// stack vs queue
// queue: first in first out
// stack: last in first out

// ___________
// function.js
// function.js > blockFunc
// function.js > blockFunc > console.log(answer)
// function.js > blockFunc
// function.js > blockFunc > printMyAge()
// function.js > blockFunc
// function.js > console.log(result)
// function.js

// ___________

// == vs ===
// console.log(10 === "10"); // false, false => false (type not same)
// console.log("ten" === "10"); // false, false => false (scalar value is not same)
// console.log("ten" === "nine"); // false, false => false (scalar value is not same)
// console.log("ten" === "010"); // false , true => false (scalar value is not same)
// console.log(10 === 010); // false

// console.log(10 == "10"); // false, false => true (if type is diff, type coercion then compare scalar value)
// console.log(10 == "ten"); // false, false => false
// console.log("ten" == "10"); // false, false => false (scalar value is not same)
// console.log("ten" == "010"); // false, true => false (scalar value is not same)

// Given an array of numbers, [56, 84, 56, 800, 47, 6, 1, 0, 555, 647], write a function that returns the largest value from the input array.
const input = [56, 84, 56, 800, 47, 6, 1, 0, 555, 647, 5, 67, 875, 6, 444, 562];
function findLargestNumber(array) {
	let largest = array[0];
	// let i = 1; // index iterator
	const lastIndex = array.length - 1;

	for (let i = 1; i < lastIndex; i++) {
		const currentNumber = array[i];
		if (currentNumber > largest) {
			largest = currentNumber;
		}
	}

	// while (i < lastIndex) {
	// 	const currentNumber = array[i];
	// 	if (currentNumber > largest) {
	// 		largest = currentNumber;
	// 	}
	// 	// make sure to increment i so the while loop condition eventually becomes false
	// 	i++;
	// }

	return largest;
}

// console.log(findLargestNumber(input));

// iterate over array with an array method
function findLargestNumberUsingForEach(array) {
	let largest = array[0];

	array.forEach(function (currentNumber) {
		if (currentNumber > largest) {
			largest = currentNumber;
		}
	});

	return largest;
}

// console.log(findLargestNumberUsingForEach(input));

// function customForEach(callback, array) {
// 	for (let i = 0; i < array.length; i++) {
// 		const currentElement = array[i];
// 		callback(currentElement);
// 	}
// }

// customForEach(function (element) {
// 	console.log("logging each element", element);
// }, input);

// demonstrate iterating through every item vs end early with for loop vs forEach

// ending a loop early

// forEach loop cannot return early, since return keyword is inside of the callback function, the callback gets returned early
function findNumberForEach(array, target) {
	array.forEach(function (element) {
		console.log("inside of loop", element);
		if (element === target) {
			console.log("inside of IF statement", element);
			return true;
		}
	});

	return false;
}

// for loops can be ended early (return early with proper value)
function findNumberForLoop(array, target) {
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		console.log("inside of loop", element);
		if (element === target) {
			console.log("inside of IF statement", element);
			return true;
		}
	}

	return false;
}

// console.log(findNumberForLoop(input, 800));

// Array.map

// Write a function that takes in an array of numbers and use the forEach() or map() to multiply every number by 100. The function should return a new array with the result. The original array should not be mutated.

function multiplyBy100(array) {
	// using arrow function for callback
	const newArray = array.map((element) => {
		// .map's callback function needs to return a new value on each iteration to be inserted into the newArray
		// .map, length of original array is preserved into the new array that gets returned
		return element * 100;
	});

	// return input array from function scope
	return newArray;
}

console.log("original input", input);
console.log(multiplyBy100(input));
console.log("after multiplyBy100", input);
