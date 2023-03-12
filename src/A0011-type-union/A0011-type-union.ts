
// Type union

// string | number | boolean

export const sumOrConcat = (n1: number | string | boolean, n2: number | string | boolean): number | string => (
  typeof n1 === 'number' && typeof n2 === 'number' ? n1 + n2 : `${n1} ${n2}`
);

console.log(sumOrConcat(10, 20));
console.log(sumOrConcat('William', 'Pimentel'));
console.log(sumOrConcat('William', 20));
console.log(sumOrConcat(10, 'Pimentel'));
console.log(sumOrConcat(true, false));
