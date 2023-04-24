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
};

// read properties/values from object (using . access operator) can also ["string"] operator as well
// notice we don't use index in objects, we use keys/ property name
console.log("email", tai.email);

tai.enrollments.push("art101");

console.log("enrollments", tai.enrollments);

console.log("shipping address before", tai.address.shippingAddress);

// modify an object
tai.address.shippingAddress = "777 Wall St"; // make a reassignment to modify
tai.age = 15;

console.log("shipping address after", tai.address.shippingAddress);
console.log("tai", tai);

// array, consts
