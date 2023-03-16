// Types null and undefined

// OBS.: Try not to use this types. Always try to be specific

// undefined
let x;
console.log(x);
// console.log(x * 20); // Incorrect. x is undefined
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export const createPerson = (firstName: string, lastName?: string): {
  firstName: string,
  lastName?: string,
} => ({ firstName, lastName });

console.log(createPerson('William', 'Pimentel'));
console.log(createPerson('William'));

// null
export const squareOf = (n1: any) => (typeof n1 === 'number' ? n1 * n1 : null);
console.log(squareOf(2));
// console.log(squareOf('Teste') * 2); // Incorrect. Return is number | null
