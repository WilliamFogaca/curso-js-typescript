
// Type void: Try not to use this type, always declare the returning type

const voidReturn = (...args: number[]): void => {
  console.log(args.join(', '))
};

console.log(typeof voidReturn(1, 2, 3));

export const person: { firstname: string, lastname: string, showFullName: () => void } = {
  firstname: 'William',
  lastname: 'Pimentel',
  showFullName(): void {
    console.log(`${this.firstname} ${this.lastname}`);
  },
};

person.showFullName();
