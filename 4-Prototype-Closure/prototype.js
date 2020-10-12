// prototypal inheritance
// array and function get access to object's functions and properties because of prototypal inheritance.

const arr = []
console.log(arr.__proto__) // returns the "Array" object
console.log(arr.__proto__.__proto__); // returns base "Object" 

function a() { };

console.log(a.__proto__); // ƒ () { [native code] }
console.log(a.__proto__.__proto__); // returns base "Object" 

let dragon = {
    name: "Tanya",
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `I am ${this.name} the dragon`;
        }

    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

// lizard can inherit from the dragon now
lizard.__proto__ = dragon;

// first we check if the 'lizard' has this function or property, if not we go up in the prototype chain
// and look for it in 'dragon'
lizard.sing();
console.log(lizard.fire);

console.log(dragon.__proto__);  // {}

console.log(dragon.isPrototypeOf(lizard));  // true

for (let prop in lizard) {
    // only show lizard's unique properties, not the ones that it inherited
    if (lizard.hasOwnProperty(prop)) {
        console.log(prop);
    }
}


function a() { }

a.hasOwnProperty('name');  // true
a.hasOwnProperty('call');  // false, because call,apply,bind are given to this from 'Function', by the prototype chain

/*
each object has a "prototype" property, and within this inner object, there is
one property called "__proto__", this is a pointer that points to this object's parent's prototype
property.
*/

console.log(a.prototype.__proto__);  // ==> this points to 'ƒ () { [native code] }' which is parent to all functions

const arr = [];

// arr.__proto__ == Array.prototype  ==> this two are same object


// correct way to create prototypal inheritance

let human = {
    mortal: true
};

let socrates = Object.create(human);

human.isPrototypeOf(socrates);  // true

/*
only functions have prototype property

[].prototype  ==> undefined
{}.prototype  ==> undefined

typeof Object  ==> function

Function, Object, Array, Number  ==> are constructor functions in JavaScript

Object() is same as {}
Array() is same as []
*/


// Exercise - extend the functionality of a built-in object

// #1
// Date object => to have new method .lastYear() which shows currentYear-1

Date.prototype.lastYear = function () {
    // this : whatever is calling lastYear() method at runTime
    return this.getFullYear() - 1;
}

console.log(Date('1990-10-10').lastYear());  // => 1899


// #2
// modify .map() to print 🧸 after each item
Array.prototype.map = function () {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push((this[i] + '🧸'));
    }

    return arr;
}

console.log([1, 2, 3].map());  // ["1🧸", "2🧸", "3🧸"]



