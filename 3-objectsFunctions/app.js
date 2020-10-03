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
greet({ firstname: 'Mary', lastname: 'Doe' })

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
english.greeting = {};
english.greeting.basic = 'Howdy';

// no NameSpace collision
english.word = 'Hello'
spanish.word = 'Hola'

console.log(english);

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
console.log(JSON.stringify(english));

// JSON to object literal
console.log(JSON.parse('{"greeting":{"basic":"Howdy"},"word":"Hello"}'));

/*
First Class Function:
everything you can do with other types, you can do with functions. assign them to variables, pass them around,
create them on the fly.

** in JS Function are Objects.

function => primitive, object, function (property)
function => code, name (typical function stuff)

*/

const greetMe = () => {
  console.log('Hi');
}

// adding property to object!!
greetMe.language = 'english';
console.log(greetMe.language);
