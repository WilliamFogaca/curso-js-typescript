
// Type any: Only use this type in last case

// Incorrect -> tsconfig.json -> strict: true -> noImplicitAny
// const showMessage = (msg) => msg;

// Correct
const showMessage = (msg: any) => msg;

console.log(showMessage('123'));
console.log(showMessage(10));
console.log(showMessage(true));
console.log(showMessage(undefined));
