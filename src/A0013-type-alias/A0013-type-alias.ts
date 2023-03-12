
// Type alias

type Name = string;
type Age = number;
type Salary = number;
type Colors1 = 'Vermelho' | 'Verde' | 'Azul';
type Colors2 = 'Rosa' | 'Amarelo' | 'Roxo';
type FavoriteColor = Colors1 | Colors2;

const name1: Name = 'William'; // Correct
// const name2: Name = 1; // Incorrect

type Person = {
  name: Name,
  age: Age,
  salary: Salary,
  favoriteColor: FavoriteColor,
};

const person1: Person = {
  name: 'William',
  age: 123, // Correct
  // age: '123', // Incorrect
  salary: 200_000, // Typescript understand this as 200000
  favoriteColor: 'Amarelo', // Correct
  // favoriteColor: 'Cinza', // Incorrect
};

console.log(person1);

const setFavoriteColor = (person: Person, favoriteColor: FavoriteColor): Person => ({ ...person, favoriteColor });
console.log(setFavoriteColor(person1, 'Vermelho'))

export default 1;
