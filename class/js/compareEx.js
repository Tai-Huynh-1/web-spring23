let arrA = [5];
let arrB = [5]; // 999
let arrC = arrA;
let arrD = arrB; // '000111'

// What will arrA look like up until this point? [5]
// What will arrB look like up until this point? [5]
// What will arrC look like up until this point? [5]
// What will arrD look like up until this point? [5]

// write what each console.log() will print after the "//"
console.log(arrA === arrC); // true, copied by reference
arrA[0] = 100;
console.log(arrA); // [100]
console.log(arrC); // [100]
console.log(arrA === arrC); // true, copied by reference

// write what each console.log() will print after the "//"
arrC[1] = "hello";
console.log(arrA); // [100, 'hello']
console.log(arrC); // [100, 'hello']
console.log(arrA === arrC); // true, copied by reference

// write what each console.log() will print after the "//"
console.log(arrB === arrD); // true, reference to same array
arrB = 999;
console.log(arrB); // 999
console.log(arrD); // [5]
console.log(arrB === arrD); // 999 === '000111' => false

// write what each console.log() will print after the "//"
console.log(arrB === arrD); // 999 === '000111' => false
arrB = [5];
console.log(arrB); // [5] ('aaa000')
console.log(arrD); // [5] ('000111')
console.log(arrB === arrD); // [5] === [5] => 'aaa000' === '000111' => false

arrD[1] = 1000;
console.log(arrB); // [5] ('aaa000')
console.log(arrD); // [5, 1000] ('000111')
console.log(arrB === arrD); // false, diff arrays/mem address

arrD = arrB; // arrD => k:[5] ('aaa000') , c:[5] ('aaa000') , m:[5] ('aaa000') (copy by reference)
arrD[1] = 777; // arrB[1] = 777
console.log(arrB); // [5, 777] 'aaa000', [5, 777] 'aaa000', [5, 777] 'aaa000'
console.log(arrD); // [5, 777] 'aaa000', [5, 777] 'aaa000', [5, 777] 'aaa000'
console.log(arrB === arrD); // 'aaa000' === 'aaa000' => true , true , true
