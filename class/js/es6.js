const cat = {
	name: "Tom",
	// greet METHOD (function belongs to an object) written with function name as "key"
	greet: function () {
		console.log("meow");
	},

	// es6 method notation
	getName(param1, param2) {
		console.log("param1", param1);
		console.log("param2", param2);
		return this.name;
	},

	// arrow function as a method - avoid using arrow functions for writing methods due to improper "this" binding
	getNameArrow: () => this.name,
};

// console.log(cat.greet());
// console.log("2nd", cat.getName());
// console.log("3rd", cat.getNameArrow());
// this.name = "dave";
// console.log("globalThis", this);
// console.log("globalThis.name", this.name);

// changing or binding a different reference for "this"
const dog = {
	name: "Ruff",
};

const bird = {
	name: "Robin",
};

const getNameFromDog = cat.getName.bind(bird);
// console.log(getNameFromDog(999, 1000));
// bind(), call() and apply() are function methods used to provide a proper "this" reference to your function
// console.log(cat.getName.call(bird, 7, 8));
// console.log(cat.getName.apply(bird, [10, 20]));

// constructor & prototype - class (ES6)

const car1 = {
	brand: "ford",
	year: "1990",
	color: "red",
	model: "mustang",
};

const car2 = {
	brand: "toyota",
	year: "1998",
	color: "white",
	model: "corolla",
};

// FAKE example of constructor function - but it illustrate the idea that we can write functions to generate objects
function generateCar(brand, year, color, model) {
	// NOTICE: I create and object and return it from my function
	return {
		brand, // ES6+: if key & value are the same then we can omit the "key:" part
		year,
		color,
		model,
	};
}
// FAKE example of constructor function - but it illustrate the idea that we can write functions to generate objects
const car3 = generateCar("tesla", "2020", "white", "model y");
// console.log(car3);

// =========================================================================
// REAL way of writing constructor function in JS (OLD WAY)

function Car(brand, year, color, model) {
	// NOTICE: I do not create object or return anything
	this.brand = brand;
	this.year = year;
	this.color = color;
	this.model = model;
	// this.seats = 5; // how to hard-code certain properties

	// method, using custom default parameters (es6 feature)
	this.honk = function (sound = "beep beep") {
		console.log(sound);
	};
}

const car4 = new Car("tesla", "2023", "grey", "cybertruck");
const car5 = new Car("bugati", "2023", "crimson", "charon");
car4.honk("beep beep");
console.log(car4.brand);
console.log(car5.brand);
car5.honk("custom sound");
