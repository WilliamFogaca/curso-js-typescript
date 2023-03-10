
// Type tuple:

// Tuple with fixed length
const clientData1: [number, string] = [1, 'William'];

console.log('clientData1', clientData1);
clientData1[1] = 'Pimentel'; // Correct
// clientData1[1] = 123; // Incorrect
// clientData1[2] = 'Pimentel de novo'; // Incorrect
console.log('clientData1 modified', clientData1);


// Tuple with optional
const clientData2: [number, string, string?] = [1, 'William'];
console.log('clientData2', clientData2);
clientData2[2] = 'Pimentel'; // Correct
console.log('clientData2 modified', clientData2);

// Tuple with spread
const clientData3: [number, string, ...string[]] = [1, 'William', 'Almeida', 'Pimentel'];
console.log('clientData3', clientData3);
clientData3.splice(2, 0, 'Fogaça'); // Correct
// clientData3[3] = 123; // Incorrect
// clientData3.push(2); // Incorrect but tuple accect
console.log('clientData3 modified', clientData3);

// Tuple readonly -> Use this to prevent the incorrect push previously seen
const clientData4: readonly [number, string, ...string[]] = [1, 'William', 'Almeida', 'Pimentel'];
console.log('clientData4', clientData4);
// clientData4.splice(2, 0, 'Fogaça'); // Incorrect
// clientData4[3] = 123; // Incorrect
// clientData4.push(2); // Incorrect
