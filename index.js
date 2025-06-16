// index.js

// The initial array of cats
const cats = ["Milo", "Otis", "Garfield"];

// 1. Destructively appends a cat to the end of the array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// 2. Destructively prepends a cat to the beginning of the array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// 3. Destructively removes the last cat from the array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// 4. Destructively removes the first cat from the array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// 5. Non-destructively appends a cat, returns a new array
function appendCat(name) {
  return [...cats, name];
}

// 6. Non-destructively prepends a cat, returns a new array
function prependCat(name) {
  return [name, ...cats];
}

// 7. Non-destructively removes the last cat, returns a new array
function removeLastCat() {
  return cats.slice(0, -1);
}

// 8. Non-destructively removes the first cat, returns a new array
function removeFirstCat() {
  return cats.slice(1);
}

// Export the functions and cats array so the tests can use them
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
};
