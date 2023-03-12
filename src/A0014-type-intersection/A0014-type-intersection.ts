
// Type intersection

type HasFirstName = { firstName: string };
type HasLastName = { lastName: string };
type HasAge = { age: number };

// Type union or type intersection
// Type union can be read as OR
// Type intersection can be read as AND

type AorB = 'A' | 'B';
type AorC = 'A' | 'C';
type DorA = 'D' | 'A';
type intersectionA = AorB & AorC & DorA;

// Union type will make remain types optional
const person: HasFirstName | HasLastName | HasAge = {
  firstName: 'William',
  age: 24,
};

// Intersection type will make all types required
const person2: HasFirstName & HasLastName & HasAge = {
  firstName: 'William',
  lastName: 'Pimentel',
  age: 24,
};

export default 1;
