// new binding this
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('babak', 55);
console.log(person1);


// implicit binding
const person2 = {
    name: 'Karen',
    age: 40,
    hi() {
        console.log('Hi its ' + this.name);
    }
}


// explicit binding
const person3 = {
    name: 'Alex',
    age: 41,
    // 'this' in function below refers to 'window' object, because of binding
    hi: function () {
        console.log('Hi its ' + this.setTimeout);
    }.bind(window)
}


// arrow functions
// all other types set 'this' dynamically, meaning it refers to where it was CALLED
// but arrow functions bind 'this' lexically, it refers to where it was DEFINED
const person4 = {
    name: 'Tony',
    age: 39,
    hi: function () {
        let inner = () => {
            console.log('hi', this.name);
        }

        return inner();
    }
}

person4.hi();  // hi Tony


