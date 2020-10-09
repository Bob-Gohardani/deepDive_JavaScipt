console.log(this);
// in this context "this" is the current browser window
// each tab in browser has it's own "window" global object.

console.log(window);

// Hoisting
b();  // will work properly
console.log(a);  // will be 'undefined' but won't throw an error, since variable name is available

// both variable a and function b are available inside the global variable "window"
var a = 'Hello World!';

function b() {
  console.log('called b!');
}

console.log(a);

var c;
console.log(c);  // undefined (means it is declared but not set to any value) != is not defined

// console.log(d);  // Uncaught ReferenceError: d is not defined

if (c === undefined) {
  console.log("c is undefined");
}

// BAD CODE: never set a value to undefined manually
d = undefined;
console.log(d);


// Function Declaration
function bb() {
  console.log("ran b");
}

function aa() {
  console.log("ran a");
  bb();
}

aa();  // ran a => ran b

/*
execution stack:
we start running a() -> we go to b() and run it -> we come back and continue runnig a()

b() : execution context
------------------------
a(): execution context
------------------------
Global execution context
*/


function e() {
  var myVar;
  console.log('e: ', myVar);
}

function f() {
  var myVar = 2;
  console.log('f: ', myVar);
  e();
}

var myVar = 1;
console.log('global 1: ', myVar);
f();
console.log('global 2: ', myVar); // same as before

/*

e() : execution context => myVar = undefined
--------------------------------
f(): execution context => myVar = 2
-------------------------------
Global execution context => myVar = 1

*/

// both first and second function sit on top of global environment, lexically
function second() {
  console.log('second: ', myVar1);  // will give back same value as global 'myVar1'
}

function first() {
  var myVar1 = 2;
  second();

  // third function's outer environment is the first function
  function third() {
    console.log('third: ', myVar1);
  }

  third();
}

var myVar1 = 1;
first();

// third();   JS will throw a "uncaught reference" error since third() is not available on the global scope


if (10 > 8) {
  console.log(t);  // this will throw an error, as variables defined by 'let' aren't allowed to be called until they are executed.

  let t = 'Table';

  console.log(t);
}



