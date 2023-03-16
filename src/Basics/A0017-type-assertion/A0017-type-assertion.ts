
// Type assertion

// Recommended:

const body1 = document.querySelector('body');
// body.style.background = 'red'; // 'body' is possibly 'null'.
if (body1) body1.style.background = 'red';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;

// Not recommended:

// Non-null assertion
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type assertion
// const body4 = document.querySelector('body') as number; // Incorrect
const body4 = (document.querySelector('body') as unknown) as number;
