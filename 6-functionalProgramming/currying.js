// currying: technique to translate evaluation of a function that takes multiple arguments into
// evaluating a sequence of functions, where each of them only have one input argument.

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;

curriedMultiply(5)(3);
const curriedMultiplyByFive = curriedMultiply(5);
curriedMultiplyByFive(5);


// Partial Application : should get all the remaining arguments in the second call
const multiple = (a, b, c) => a * b * c;
const partialMultiplyBy5 = multiply.bind(null, 5);
partialMultiplyBy5(4, 10);


// Compose : any sort of data transformation should be obvious
// data ==> fn ==> data ==> fn ==> ...

const compose = (f, g) => (data) => f(g(data));

const multBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);

const multBy3AndAbsolute = compose(multBy3, makePositive);
multBy3AndAbsolute(-50);


// arity : number of arguments that a function takes