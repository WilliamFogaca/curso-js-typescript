
// Type never

// type void or never?

// type void
// A function that doesn't explicitly return a value implicitly returns the value undefined
// in JavaScript. Although we typically say that such a function "doesn't return anything",
// it returns. We usually ignore the return value in these cases. Such a function is inferred
// to have a void return type in TypeScript.

// type never
// A function that has a never return type never returns. It doesn't return undefined, either.
// The function doesn't have a normal completion, which means it throws an error or never
// finishes running at all.

export const createError = (): never => {
  throw new Error('Erro qualquer');
}

// createError();
