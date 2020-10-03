// dynamic typing

let isNew = true;
isNew = 'yup';
isNew = 1;

// Operators

let a = 3 + 4;  // addition operator is a function in JavaScript
console.log(a);

3 + 4;  // this is in-fix notation, which means the oprator sits between two arguments instead of +(3,4);

console.log(4-3);  // - is another operator

let aa = 2, b = 3, c = 4;
a = b = c;

console.log(aa);
console.log(b);
console.log(c);
// they are equal to 4, because of right-to-left associativity for assignment(=) operator

console.log(aa=b);  // returns 4

var sameType = 'Hello' + 'World'
console.log(sameType);

var different = 1 + '2'; // => '1' + '2' => '12' it converts 1 to a string then adds them together as it happens to string types
console.log(different);

// Comparison Operators:

// both of these return true!!
console.log(1 < 2 < 3); // => 1 < 2 => true => 1 < 3 => true
console.log(3 < 2 < 1); // 3 < 2 => false => 0 < 1 => true

Number(true) // 1
Number(false) // 0
Number(null)  // 0

console.log("" == 0); // true
console.log("" == false); // true

console.log("" === 0); // false
console.log("" === false); // false

/*

== converts two arguments to same type then compares them
=== compares values without converting the data types

!== strict inequality
*/


// Boolean

// all of this convert to false Boolean
Boolean(undefined) // false
Boolean(null) // false
Boolean("") // false
Boolean(0)  // false

var cc;

if(cc || cc === 0) { // return is false since it is undefined
  console.log("something is there");
}

// in JavaScript the if statement converts the given argument into a Boolean, therefore its result is always true/false


// Default values
const xx = (name) => {
  console.log(name + "Hi!");
}

xx('apple');  // "apple Hi!"

// this will NOT throw an error, it simply returns undefined+"Hi!"
// by default the argument is set to undefined in JavaScript
xx();

// we can give default value to function arguments
const zz = (name="MyName") => {
  console.log(name + " Huh!");
}

zz();

r = undefined || 'hello'; // => returns hello, because its the value that can be converted to true

r1 = "hi" || "hello" // since both can be convered to true, returns the first one

let ab;

ab == ab || 'name' // since || comes before ==, therefore we choose 'name' and return true


// Library Conflicts 
console.log(libName);
