// let number: number[] = [1, 2, 2, 3, 4, 4];

// let number2: number[] = [];

// // number.forEach((x, i) => {
// //   console.log(number.indexOf(x));
// //   if (i == number.indexOf(x)) number2.push(x);
// // });
// // console.log(number2);
// console.log(number.indexOf(3));

// const i = 0;
// const sum = number.reduce((acc, cur) => acc + cur, i);
// console.log(sum);
// console.log(number.some((x) => x > 4));

// //array looping

// let cities = ["banglore", "pune", "mumbai", "hydrabad"];

// for (let city of cities) {
//   console.log(city.toUpperCase());
// }

// //exp

// let marks = [55, 67, 89, 88, 34];

// let sum2 = 0;

// for (let val of marks) {
//   sum2 = sum2 + val;
// }
// let avg = sum2 / marks.length;
// console.log(avg);

//array method

let companies = ["bloomBerg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

console.log(companies);

//remove bloomberg
let rem = companies.shift();
console.log(rem);
console.log(companies);
//remove ola and add uber
let add = companies.splice(1, 1, "ola");
console.log(companies);

//add amazone at end
let lastAdd = companies.push("Amazone");
console.log(lastAdd);