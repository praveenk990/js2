let lname = "john";

let sales = 123_456_789;
let cource = "typescript";
let is_publish = true;
let level;
//this is example of any
function render(document: any) {
  console.log(document);
}

//array
let num: number[] = [];
// num.forEach(n=>)

//tuples
let user: [number, string] = [1, "john"];
//tuples are useful when key value pairs

//enums:list of related constants
// const small=1;
// const medium=2
// const large =3

//pascalCase
enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

//function

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000, 2023);

//object
let employe: {
  id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};

//Advanced TYPES
//*Type Aliases
type Employee = {
  id: number;
  name: string;
  retire: (date: Date) => void;
};
let employee: Employee = {
  id: 1,
  name: "mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};