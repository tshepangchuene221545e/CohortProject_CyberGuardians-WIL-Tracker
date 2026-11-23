// Week 3 freeCodeCamp JavaScript practice (AI-assisted, with team permission).
// Representative solutions from Debugging, Basic Data Structures, and Basic Algorithm Scripting.
// Each exercise was checked against its freeCodeCamp tests.

const assert = require('node:assert/strict');

// Basic Data Structures
const colors = ['red', 'blue', 'green'];
colors.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
assert.deepEqual(colors, ['DarkSalmon', 'BlanchedAlmond', 'green']);

function forecast(arr) {
  return arr.slice(2, 4);
}
assert.deepEqual(forecast(['cold', 'rainy', 'warm', 'sunny']), ['warm', 'sunny']);

function copyMachine(arr, count) {
  const copies = [];
  while (count > 0) {
    copies.push([...arr]);
    count--;
  }
  return copies;
}
assert.deepEqual(copyMachine([1, 2], 2), [[1, 2], [1, 2]]);

function filteredArray(arr, excluded) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].includes(excluded)) result.push(arr[i]);
  }
  return result;
}
assert.deepEqual(filteredArray([[1, 2], [2, 3]], 2), []);

const inventory = { apples: 25, oranges: 32, bananas: 13 };
function checkInventory(item) {
  return inventory[item];
}
assert.equal(checkInventory('bananas'), 13);

// Basic Algorithm Scripting
function reverseString(text) {
  return text.split('').reverse().join('');
}
assert.equal(reverseString('hello'), 'olleh');

function factorialize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) product *= i;
  return product;
}
assert.equal(factorialize(5), 120);
assert.equal(factorialize(0), 1);

function largestOfFour(rows) {
  return rows.map(row => Math.max(...row));
}
assert.deepEqual(largestOfFour([[1, 9], [4, 2]]), [9, 4]);

function findElement(arr, predicate) {
  return arr.find(predicate);
}
assert.equal(findElement([1, 3, 8], n => n % 2 === 0), 8);

function titleCase(text) {
  return text.toLowerCase().split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}
assert.equal(titleCase('sHoRt AnD sToUt'), 'Short And Stout');

function frankenSplice(arr1, arr2, index) {
  const result = arr2.slice();
  result.splice(index, 0, ...arr1);
  return result;
}
assert.deepEqual(frankenSplice([1, 2], ['a', 'b'], 1), ['a', 1, 2, 'b']);

function bouncer(arr) {
  return arr.filter(Boolean);
}
assert.deepEqual(bouncer([7, '', false, 9]), [7, 9]);

function getIndexToIns(arr, value) {
  const sorted = [...arr].sort((a, b) => a - b);
  const index = sorted.findIndex(item => item >= value);
  return index === -1 ? sorted.length : index;
}
assert.equal(getIndexToIns([40, 60], 50), 1);

console.log('Week 3 practice checks passed.');
