// //array.filter

// let array: number[] = [1, 2, 3, -1, -2, -3];

// function a(array: number[]): number[] {
//   const a = array.filter((num) => num > 0);
//   return a;
// }

// console.log(a(array));

// //array.map

// function increment(array: number[]): number[] {
//   const answ = array.map((x) => x + 1);
//   return answ;
// }
// console.log(increment(array));

// //static Method in array
// //1. array.from:
// //exp 1
// const result = Array.from("rain");
// console.log(result);
// //the output will be like ['r','a','i','n']
// //exp2
// const result2 = Array.from([1, 2, 3, 4], (x) => x * x);
// console.log(result2);

// //Array.isArray()
// const A = Array.isArray([1, 2, 3]);
// const B = Array.isArray("hello");
// const C = Array.isArray({ length: 3 });
// const D = Array.isArray(new Array());
// const E = Array.isArray(null);
// const F = Array.isArray(undefined);
// console.log(A, B, C, D, E, F);

// //Array.of()
// console.log("Array(3):", Array(3));
// console.log("Array.of(3):", Array.of(3));

//array Looping / Transformation

let set: number[] = [1, 2, 3, 4, 5, 0, -1, -2, -34];
// let set2: number[] = [1, 2];
// set.forEach((x) => console.log(x));
// console.log(set.map((x) => x * 2));
// console.log(set.filter((x) => x > 0));

// console.log(set2.reduce((a, b) => a + b));

//array searching/checking
//array.find only the first match
console.log(set.find((x) => x < -1));
//array.findIndex
console.log(set.findIndex((x) => x > 1));
//array.some
console.log(set.some((x) => x > 20));
console.log(set.every((x) => x > 0));