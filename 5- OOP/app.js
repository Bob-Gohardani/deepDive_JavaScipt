// Factory functions: functions that act like factories and create objects
const elfFunctionStore = {
    attack() {
        return 'attack with ' + this.weapon;
    }
}

function createElf(name, weapon) {
    // creates a link between newElf and elfFunctionStore (prototypal inheritance)
    let newElf = Object.create(elfFunctionStore);

    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const peter = createElf('Peter', 'Dart');
peter.attack = elfFunctions.attack;
peter.attack();


// Constructor Function
function Orc(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

Orc.prototype.attack = function () {
    return 'attack with' + this.weapon;
}

Orc.prototype.build = function () {
    const self = this;
    function building() {
        return self.name + ' Builds a house';
    }
    return building();
}
// 'new' keyword automatically returns an object from constructor function back
// when we use 'new' keyword to create an object, 'this' points to the newly created object and not the function itself
const dawg = new Orc('Dawg', 'club');
console.log(dawg.attack())
console.log(dawg.build());
console.log(dawg.__proto__);


var a = new Number(5);
var b = 5;
console.log(typeof a, typeof b);  // a is an object, but b is a number

// reason for b being able to access all the Number internal methods is that javascript automatically
// turns it into a Number() type when we put '.' after it


// Classes, ES6
// underneath the hood, JavaScript is still using prototypes to create instances of wizard
class Wizard {
    constructor(name, magic) {
        this.name = name;
        this.magic = magic;
    }

    magicAttack() {
        return `${this.name} did the magic of ${this.magic}`;
    }
}

const harry = new Wizard('Harry', 'Griffin');
console.log(harry instanceof Wizard);
console.log(harry.magicAttack());





