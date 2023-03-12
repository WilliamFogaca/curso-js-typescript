
// Function as type

type MapStringsCallback = (item: string) => string

export const mapStrings = (arr: string[], callbackFn: MapStringsCallback): string[] => arr.map(
  (item) => callbackFn(item),
);

const abc = ['a', 'b', 'c'];
console.log(mapStrings(abc, (item) => item.toUpperCase()));
