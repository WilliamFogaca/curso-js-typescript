export function funcao(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name, age);
}

// funcao('Teste');
funcao.call(new Date(), 'Teste', 12);
funcao.apply(new Date(), ['Teste', 21]);
