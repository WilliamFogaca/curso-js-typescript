
// Type array:

// You can declare in two ways:
// Array<T>
const arr1: Array<string> = [''];
// T[]
const arr2: string[] = [''];

const multiArgs = (...args: Array<number>): number => args.reduce((acc, num) => acc * num, 1);
console.log(multiArgs(1, 2, 3)); // Correct
// console.log(multiArgs('Teste', 10, 20)); // Incorrect

const concatStrings = (...args: Array<string>): string => args.join(' ');
console.log(concatStrings('Teste', 'Testando', 'Testando de novo')); // Correct
// console.log(concatStrings('Teste', 10, 20)); // Incorrect

const arrToUpperCase = (...args: Array<string>): string[] => args.map((arg) => arg.toUpperCase());
console.log(arrToUpperCase('Teste', 'Testando', 'Testando de novo')); // Correct
// console.log(arrToUpperCase('Teste', 10, 20)); // Incorrect

// Array readonly -> You can declare in two ways:
const arr3: readonly string[] = ['William', 'Almeida'];
const arr4: ReadonlyArray<string> = ['William', 'Pimentel'];

// arr3.push('Pimentel') // Incorrect
