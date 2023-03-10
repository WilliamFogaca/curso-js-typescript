
// Type object:

const obj1 = { // Not declared type. Typescript will declare type as { keyA: string, keyB: string } and you can't declare new types or modify types
  keyA: 'Valor 1',
  keyB: 'Valor 2',
};

obj1.keyA = 'Outro valor';
console.log(obj1)

// Incorrect -> Works but typescript will complain that you can't declare new types or modify types
// obj1.keyC = 'Nova valor';
// console.log(obj1)

// Incorrect -> Works but typescript doesn't recommend
// const obj2: object = { 
//   keyA: 'Valor 1',
//   keyB: 'Valor 2',
// };

// Incorrect -> Works but typescript doesn't recommend
// const obj3: {} = { 
//   keyA: 'Valor 1',
//   keyB: 'Valor 2',
// };

// Insecure. Typescript will not recognize this object and what is inside it
const obj4: Record<string, unknown> = { 
  keyA: 'Valor 1',
  keyB: 'Valor 2',
};

// Index signature. Try not to use this. Same as "Record<string, unknown>" but more verbose (obj4)
const obj6: {
  keyA: string,
  keyB: string,
  keyC?: string,
  [key: string]: unknown,
} = { 
  keyA: 'Valor 1',
  keyB: 'Valor 2',
};

obj6.keyC = 'Outro valor';
obj6.keyD = 'Novo valor'; // Typescript will not recognize this new key

// Coorect. But you don't need to declare the object types, let typescript do it for you
const obj5: {
  keyA: string,
  keyB: string,
  keyC?: string,
} = { 
  keyA: 'Valor 1',
  keyB: 'Valor 2',
};

// Readonly
const obj7: {
  readonly keyA: string,
  keyB: string,
} = { 
  keyA: 'Valor 1',
  keyB: 'Valor 2',
};

// Incorrect. keyA is readonly
// obj7.keyA = 'Outro valor';
obj7.keyB = 'Outro valor';
