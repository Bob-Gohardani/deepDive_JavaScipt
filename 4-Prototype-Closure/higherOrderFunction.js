
/*
Higher Order Function: a function that takes another function as argument OR
returns another function.

HOF allow us to modularize our code base by passing functions around.
*/

// arrow function
const giveAccessTo = (name) => 'Access Granted to ' + name;

const sing = (person) => "la la la " + person.name

const authenticateFunc = (verify) => {
    let arr = [];
    for (let i = 0; i < verify; i++) {
        arr.push(i);
    }

    return giveAccessTo(person.name);
};

// this is a higher order function
function letPerson(person, fn) {
    if (person.level === 'admin') {
        fn(10000);
    } else if (person.level === 'user') {
        fn(5000);
    }
}

letPerson({ level: 'user', name: 'Tim' }, authenticateFunc);
letPerson({ level: 'admin', name: 'Sally' }, sing);



// const multiplyBy = function (num1) {
//     return function (num2) {
//         return num1 * num2
//     }
// }

// higher order function
const multiplyBy = (num1) => (num2) => num1 * num2;

const multiplyByTwo = multiplyBy(2);
const multiplyByFive = multiplyBy(5);

console.log(multiplyByTwo(4));  // 8
console.log(multiplyBy(2)(4));  // 8

console.log(multiplyByFive(2)); // 10


