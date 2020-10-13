class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return `${this.name} did the attack of ${this.weapon}`;
  }
}


// extending in JavaScript is NOT about copying property/function to lower class, but about linking the prototype chain to the higher class.
// that is why in JS, we don't have real class-based system of inheritance
class Elf extends Character {
  constructor(name, weapon, type) {
    // in order to use constructor in a extending class, we have to call super() first
    super(name, weapon);
    this.type = type;
  }
}


class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }

  // this is a private variable, can't be accessed from outside the class
  #age = 26;

  // overriding the original function (Polymorphism)
  attack() {
    return "Attaacckkk!!";
  }

  makeFort() {
    return "made a fort!!" + #age;
  }
}

const dolby = new Elf('dolby', 'cloth', 'house');
dolby.attack();

const ogre1 = new Ogre('rulf', 'dagger', 'cave');
ogre1.makeFort();

console.log(Ogre.prototype.isPrototypeOf(ogre1)); // true
console.log(Character.prototype.isPrototypeOf(ogre1)); // true

/* when using classes a better way is to use "instanceof" */

console.log(dolby instanceof Elf); // true
console.log(ogre1 instanceof Ogre); // true
console.log(ogre1 instanceof Character); // true

console.log(ogre1.age);


class Queen extends Character {
  constructor(name, weapon, kind) {
    super(name, weapon);
    this.kind = kind;
  }

  attack() {
    super.attack();
    return `attacking enemies of da kween! with ${this.kind}`;
  }
}

const victoria = new Queen("victoria", "army", "hearts");
victoria.attack();


/*
OOP:

Polymorphism
Inheritance
Abstraction
Encapsulation
*/
