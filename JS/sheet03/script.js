const a = [3, 1, 2];

// Completa con comentarios:
a.sort(); //mutable
const b = a.slice(0, 2); //inmutable
const c = b.toReversed(); //inmutable
const d = a.with(0, 99); //inmutable

console.log(a);
console.log(b);
console.log(c);
console.log(d);

function stableNumericSort(arr) {
  return arr.toSorted((a, b) => a - b);
}

console.log(stableNumericSort([1, 11, 5, 3, 8, 3, 43, 2]));

const data = [1, [2, 3], [[4], 5]];

function flatAll(arr) {
  let result = arr;

  while (result.some((contador) => Array.isArray(contador))) {
    result = result.flatMap((x) => x);
  }

  return result;
}

console.log(flatAll(data));
