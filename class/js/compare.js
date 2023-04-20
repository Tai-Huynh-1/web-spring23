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

// ['jack', 'ana', 'joe', 5, [], true, null, undefined, {}]

let arrA = [a]; // [10] - direct assignment to [] - arrays are stored in a memory address '000111'
let arrB = arrA; // [10] - COPY (by value or by reference?) - '000111'
let arrC = [a]; // [10] - direct assignment to [] - '111000'

// console.log("arrA === arrB", arrA === arrB); // [10] === [10] => true, but actually: '000111' === '000111' => true
// console.log("arrA === arrC", arrA === arrC); // [10] === [10] => true, '000111' === '111000' => false
// console.log("arrA", arrA);
// console.log("arrC", arrC);

// make change to array A, then compare with array B again
console.log("==== MAKING MODIFICATION TO ARRA =====");
arrA[1] = 100;
console.log("arrA", arrA); // [10, 100]
console.log("arrB", arrB); // [10, 100]
console.log("arrA === arrB", arrA === arrB); // true, they are the same array in memory
console.log("arrA === [10, 100]", arrA === [10, 100]); // false

console.log("==== NOW MAKING MODIFICATION TO ARRB =====");

arrB[1] = 555; // NOT THE SAME as arrB = 555 / underneath it's doing arrA[1] = 555
console.log("arrA", arrA); // [10, 555]
console.log("arrB", arrB); // [10, 555]
console.log("arrA === arrB", arrA === arrB); // true, true: same memory address, true: array a & b has same memory address
