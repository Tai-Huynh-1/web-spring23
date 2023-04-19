// copying and comparing values in JS
// JS: copy & compare by reference vs. by value

let a = 5; // 5 - direct assignment to 5
let b = a; // 5 - COPYING 'a' into 'b' (copy by value, it copies once and does not update, because there is no continual reference to 'a', this only applies when the value being copied is a primitive values: string, number, boolean, undefined, null)
let c = 5; // 5 - direct assignment to 5

// === is comparison operator (with type checking) - "is one thing equal to another?"

// console.log(a === b); // 5 === 5 => true
// console.log(b === c); // 5 === 5 => true
// console.log(a === c); // 5 === 5 => true

a = 10; // reassign a = 10

// console.log("a", a); // 10
// console.log("b", b); // 5
// console.log("line 18", a === b); // 10 === 5 => false
// console.log("line 19", b === c); // 5 === 5 => true

let arrA = [a]; // [10]
let arrB = arrA; // [10]
let arrC = [a]; // [10]

console.log("arrA === arrB", arrA === arrB); // [10] === [10] => true
console.log("arrA === arrC", arrA === arrC); // [10] === [10] => true

// make change to array A, then compare with array B again
