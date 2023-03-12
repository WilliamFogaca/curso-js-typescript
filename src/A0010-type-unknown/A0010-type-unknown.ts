
// Type unknown

// type unknown is more secure than type any

let n1: any;
n1 = 100;
n1 = '100';
console.log(n1 + 100) // 100100

let n2: unknown;
n2 = 100;
n2 = '100';
// console.log(n2 + 100) // Incorrect. Typescript will warn
