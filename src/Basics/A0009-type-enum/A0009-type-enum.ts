
// Type enum

enum Colors { // if not passed a value to enum key, it will be the index
  RED, // 0
  YELLOW, // 1
  BLUE, // 2
  GREEN = 'Verde',
  // PURPLE, // will comprain because does not have an initializer. Typescript don't know what's after "Verde"
  PURPLE2 = 100, // passed an initializer number and the next enum key will continue
  PURPLE3, // 101
}

// console.log(Colors);
// console.log(Colors.RED); // 0
console.log(Colors[0]); // red
console.log(Colors.GREEN); // Verde
console.log(Colors.PURPLE3); // 101


// Incorrect use of enum
enum Colors2 {
  RED = 100,
  YELLOW = 200,
  BLUE = 300,
}

console.log(Colors2[0]); // Incorrect. Returns undefined. Typescript does not recognize this problem


// Merge enums
enum Colors3 {
  RED = 'Vermelho',
  YELLOW = 'Amarelo',
  BLUE = 'Azul',
}

enum Colors3 { // Merge this Colors3 with previous Colors3
  PINK = 'Rosa',
  GREY = 'Cinza',
}

console.log(Colors3)

export const chooseColor = (cor: keyof typeof Colors3): void => console.log(Colors3[cor]);

chooseColor('BLUE') // Correct
// chooseColor('GREEN') // Incorrect
