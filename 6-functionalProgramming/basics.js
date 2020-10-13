// pure function : no side effect (doesn't change anything outside the scope of the function)
// input --> output (given same input, function should always return same output)
// the perfect function only does ONE task, not several things.
const arr = [1, 2, 3];

function mutateArray(arr) {
  arr.pop();
}

mutateArray(arr);
console.log(arr);

function mutatingArray2(arr) {
  arr.forEach((item) => arr.push(1));
}

mutatingArray2(arr);

// no side-effect
function removeLastItem(arr) {
  // this way it won't reference to original array
  const newArr = [].concat(arr);
  newArr.pop();
  return newArr;
}

console.log(removeLastItem(arr));

function multiplyBy2(arr) {
  return arr.map((item) => item * 2);
}

console.log(multiplyBy2(arr));

// Idempotent: a function that always return a predictable result
// Idempotent != pure function
function notPure(num) {
  console.log(num);
}

// we can call function inside itself and still get predictable results
console.log(Math.abs(Math.abs(-50)));

// Imperative vs Declarative

/*
Imperative : tells the computer what to do and HOW to do it
declarative : tells computer what to do and what should HAPPEN
*/

// Imperative style
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// declarative style
[1, 2, 3].forEach((item) => console.log(item));

// Immutability : not changing the data, not mutate the input, instead copy the input and return a new one

const obj = { name: 'Babak' };

// Immutable
function clone(obj) {
  return { ...obj }; // this is pure
}

// mutable
obj.name = 'Nana';

// Higher Order Functions and Closures

// a function that returns another function or receives another function
const hof = () => () => 5;
hof();

const hof2 = (fn) => fn(5);

console.log(
  hof2(function a(x) {
    return x;
  })
);

// closure happens function has access to object outside of its own scope
const closure = function () {
  let count = 0;
  // inner function is NOT pure,as it is mutating count variable
  return function increment() {
    count++;
    return count;
  };
};

// since count is being referenced in this object, it will be saved in memory
const incrementFunc = closure();
incrementFunc();
incrementFunc();
console.log(incrementFunc());
