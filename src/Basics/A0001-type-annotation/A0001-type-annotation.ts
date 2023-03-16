/* eslint-disable */

// Type annotations:

// Basics:
let nameString: string = 'William'; // Qualquer string: ['', "", ``]
let age: number = 24; // Qualquer número: [10, 10.5, -5.1, 0xf00d, etc]
let isAdult: boolean = true; // Boolean: [true, false]
let sym: symbol = Symbol('qualquer-bosta'); // symbol. Ainda nem ideia do que é isso aqui
// let big: bigint = 10n; // bigint

// Arrays:
let arrNumbers: Array<number> = [0, 1, 2]; // Array com qualquer número idiota
let arrNumbers2: number[] = [0, 1, 2]; // Array com qualquer número idiota

let arrString: Array<string> = ['0', '1', '2']; // Array com qualquer string idiota
let arrString2: string[] = ['0', '1', '2']; // Array com qualquer string idiota

// Objects:
let person: { nameString: string, age: number, isAdult?: boolean } = { // colocar "?" para deixar opcional
  nameString,
  age,
};

// Functions:
const sum = (n1: number, n2: number): number => n1 + n2;
// console.log(sum(1, '123')); // Incorrect
console.log(sum(1, 2)); // Correct

const sum2: (n1: number, n2: number) => number = (n1, n2) => n1 + n2; 
