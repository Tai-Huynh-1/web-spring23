let arrA = [5];
let arrB = [5];
let arrC = arrA;
let arrD = arrB;

// What will arrA look like up until this point?
// What will arrB look like up until this point?
// What will arrC look like up until this point?
// What will arrD look like up until this point?

// write what each console.log() will print after the "//"
console.log(arrA === arrC); //
arrA[0] = 100;
console.log(arrA); //
console.log(arrC); //
console.log(arrA === arrC); //

// write what each console.log() will print after the "//"
arrC[1] = "hello";
console.log(arrA); //
console.log(arrC); //
console.log(arrA === arrC); //

// write what each console.log() will print after the "//"
console.log(arrB === arrD); //
arrB = 999;
console.log(arrB); //
console.log(arrD); //
console.log(arrB === arrD); //
