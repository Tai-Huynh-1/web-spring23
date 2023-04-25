// objects are key: value pairs (separated by commas)
// in an object, order does not matter, key (property name) is more important

// create an object
const tai = {
	firstName: "Tai",
	email: "tai@gmail.com",
	phone: "111-111-1111",
	age: 10,
	isActive: true,
	address: {
		mailingAddress: "123 Main St.",
		shippingAddress: "321 Wall St.",
	},
	enrollments: ["cs101", "math1a", "chem2a"],
	gradYear: null,
	// method: functions that belong to an object
	getEmail: function () {
		return this.email;
	},
	// different ways of declaring methods, this is ES6, notice I don't need a colon and "function" keyword
	getProperty(key) {
		return this[key];
	},
};

// read properties/values from object (using . access operator) can also ["string"] operator as well
// notice we don't use index in objects, we use keys/ property name
// console.log("email", tai.email);

// tai.enrollments.push("art101");

// console.log("enrollments", tai.enrollments);

// console.log("shipping address before", tai.address.shippingAddress);

// modify an object
// tai.address.shippingAddress = "777 Wall St"; // make a reassignment to modify
// tai.age = 15;

// console.log("shipping address after", tai.address.shippingAddress);
// console.log("tai", tai);

// console.log("tai's email", tai.getEmail());
// console.log("tai's whatever property", tai.getProperty("address"));

// another way of accessing values in an object
// console.log("test phone", tai["phone"]);
// console.log("test phone 2", tai.phone);

// delete property on object with "delete" keyword
// console.log("tai", tai);
// delete tai.phone;
// console.log("tai", tai);

// put back or put in a new property
// tai.phone = "111-222-3333";
// console.log("tai", tai);

// cloning for objects
let david = {
	name: "David",
	email: "david@gmail.com",
	enrollments: ["cs101", "cs50"], // '000111'
};
let davidByReference = david; // copy by reference

davidByReference.isActive = true;

// console.log("david", david);
// console.log("davidByReference", davidByReference);
console.log("david === davidByReference", david === davidByReference); // true
// checking if enrollment array is the same on the copied version
console.log("david.enrollments === davidByReference.enrollment", david.enrollments === davidByReference.enrollments); // true, true

// cloning using spread operator (...) (spread operator performs "shallow copying" or "shallow cloning")
let davidBySpread = {
	...david,
	// name: "David", copy by value (string)
	// email: "david@gmail.com", copy by value (string)
	// enrollments: ["cs101", "cs50"], '000111' - copy by reference (copying the enrollments array)
}; // davidBySpread is NOT COPY BY REFERENCE, we created a new object, with diff memory address
davidBySpread.age = 20;

// console.log("david", david); // age?
// console.log("davidBySpread", davidBySpread); // age?
console.log("david === davidBySpread", david === davidBySpread); // false
// checking if enrollment array is the same on the copied version
console.log("david.enrollments === davidBySpread.enrollment", david.enrollments === davidBySpread.enrollments); // true
// console.log("david.enrollments === davidBySpread.enrollment", '000111' === '000111'); // true ^

// deep copy / deep cloning: structuredClone(object) - JSON.parse(JSON.stringify(object))
// const davidDeepCopy = globalThis.structuredClone(david); // NOT WORKING IN NODE
// console.log("david === davidDeepCopy", david === davidDeepCopy);

const davidDeepCopy2 = JSON.parse(JSON.stringify(david));
console.log("davidDeepCopy2", davidDeepCopy2);
console.log("david === davidDeepCopy2", david === davidDeepCopy2);
console.log("david.enrollments === davidDeepCopy2.enrollments", david.enrollments === davidDeepCopy2.enrollments);

// go over JSON.parse

// arrays and consts
