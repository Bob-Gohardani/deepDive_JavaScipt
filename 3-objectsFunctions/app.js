/*
Objects and Functions:

object => primitive property
object => object property
object => function "method"

** a function sitting inside an object is called a method
each object has references to the properties inside it
*/

let person = new Object();

person['firstname'] = "Tony" // firstname property
person['lastname'] = "Montana"

let firstNameProperty = "firstname"

console.log(person)
console.log(person[firstNameProperty])
console.log(person.firstname)
console.log(person.lastname)

// both "[]" and "." are operators

person.address = new Object()
person.address.street = "11 Main St."
person.address.city = "New York"

console.log(person.address.street);
console.log(person["address"]["city"])


// Object Literals (shorter version of creating objects in JS)

let guy0 = {}

let guy1 = {
  firstname: 'Babak',
  lastname: 'gohardani',
  address: {
    street: "11 Main St.",
    city: "New York"
  }
}

console.log(guy1)

// passing object to a Function
const greet = (person) => {
  console.log("Hi " + person.firstname)
}

greet(guy1)

guy1.gender = "M"

// we create objects on the fly
greet({
  firstname: 'Mary',
  lastname: 'Doe'
})

/*
NameSpace:
a namespace is a container for variables and functions. typically to keep variables and functions
with the same name separate.
JavaScript doesn't have NameSpace. in JS we use objects as fake NameSpace to fix this issue.
*/


// Fake NameSpace
let english = {}
let spanish = {}

// english.greeting.greet  => second object literal throws an uncaught TypeError
english.greeting = {}
english.greeting.basic = 'Howdy'

// no NameSpace collision
english.word = 'Hello'
spanish.word = 'Hola'

console.log(english)

/*
JSON is inspired by object literal,
but its not exactly the same thing and has some differences compared to JS objects.

** property names are wrapped in quotes in JSON

{
  "firstname": "Mary",
  "lastname": "Doe",
  "isCoder": true
}
*/

// object literal to JSON
console.log(JSON.stringify(english))

// JSON to object literal
console.log(JSON.parse('{"greeting":{"basic":"Howdy"},"word":"Hello"}'))

/*
First Class Function:
everything you can do with other types, you can do with functions. assign them to variables, pass them around,
create them on the fly.

** in JS Function are Objects.

function => primitive, object, function (property)
function => code, name (typical function stuff)

*/

const greetMe = () => {
  console.log('Hi')
}

// adding property to object!!
greetMe.language = 'english'
console.log(greetMe.language)

/*
Expression:
a unit of code that results in a value, it doesnt have to save to a variable.

an statement does some work (i.e: if statement) but an expression results in a value
*/

// both of these are valid expressions
let a = 3
1 + 2;

if (a === 3) {
  // pass
}

f_statement();  // works properly, because its hoisted

// function statement, doesn't return any value
function f_statement() {
  console.log('Hi')
}

/*
f_expression();  // return Uncaught TypeError: undefined is not a function
*/

// function expression, saved in an object (also called anonymous function, the function itself has no name)
const f_expression = () => {
  console.log('Hi')
}

function log(a) {
  a(); // invoke the given function
}

// function that can be passed around => "first class function"
log(() => 'hello!')

/*

Mutate: to change something
Immutable: means it can't be changed

by value:
let a = primitive  => points to a value in memory
let b = a => copies the value to another place in memory
a, b have different memory points

by reference:
let a = object  => points to a value in memory
let b = a  => points to same value in memory as a

primitives => primitives interact by value
objects => all objects interact by reference
*/

let aa = 3
let b
b = aa

a = 2
console.log(aa)  // 2
console.log(b)  // still 3


let c = { greeting: 'hi' }
let d

d = c
c.greeting = 'hola'

console.log(c) // hola => mutate the object
console.log(d) // hola, changes to same value as c

// passed by reference (even as parameters)
const changeGreeting = (obj) => {
  obj.greeting = 'Salam'
}

changeGreeting(d)
console.log(d)  // Salam => mutated inside the function
console.log(c) // same as

// equals operator sets up new memory space (new address)
c = { greeting: 'Howdy' }

console.log(c) // Howdy
console.log(d) // Salam => because now c,d point to different spaces in memory


var country = () => {
  console.log(arguments)
}

country()  // returns {}


fuction sayMyname() {
  var a = 'a'
  return function findName() {
    var b = 'b'
    return function printName() {
      var c = 'c'
      return 'Babak'
    }
  }
}

sayMyname()()()  // ==> Babak


// DO NOT DO THIS!!!
function weird() {
  height = 50  // leakage of global environment
  return height
}

weird()  // => 50


// since var secret is defined in global scope (outside the functional scope we can access it here)
if (5 > 4) {
  var secret = 'secret'
  let secret2 = 'secret2'
}

console.log(secret);
console.log(secret2);  // this will throw an error because let/const have block scope

// currying
function multiply(a, b) {
  return a*b
}

let multiplyByTwo = multiply.bind(this, 2)

console.log(multiplyByTwo(4)) // 8
