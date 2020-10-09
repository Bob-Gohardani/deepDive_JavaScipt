// this : the object that the function is property of
// 'this' is NOT lexically scoped, instead we should find out who and where it was called.

function a() {
  console.log(this)  // here "this" refers to window function
}


const obj = {
  name: 'billy',
  sing() {
    return 'sings ' + this.name  // 'this' refers to 'obj'
  },
  singAgain() {
    return this.sing() + ' again'  // 'this' refers to 'obj'
  }
}

name = 'me'
// ** this: refers to whatever is left of the .  **

function importantPerson() {
  console.log(this.name)
}

const obj1 = {
  name: 'cassy',
  importantPerson: importantPerson  // here 'this' refers to 'cassy'
}

importantPerson() // returns 'me'

obj1.importantPerson()  // returns 'cassy'

const a = function() {
  console.log('a', this)
  const b = function() {
    console.log('b', this)
    const c = {
      hi: function() {
        console.log('c', this)
      }}
      c.hi() // {hi: f}  => object c has called the method hi(), therefore its the 'this'
  }
  b() // window object, nothing to left of b()
}

a() // window object, nothing to left of a()


const myObj = {
  name: 'billy',
  sing() {
    console.log('a', this)
    // using arrow functions solves the 'this' issue
    var anotherFunc = () => {
      console.log('b', this)
    }
    anotherFunc()
  }
}

myObj.sing()  // both a,b refer to myObj




// ***** call()  apply()  bind()  ****
function c() {
  console.log('hiii')
}

c.call()  // is same as a()
c.apply()  // is same as a()

const wizard = {
  name: 'merlin',
  health: 50,
  heal(num1) {
    this.health += num1
  }
}

const archer = {
  name: 'Robin Hood',
  health: 30
}

wizard.heal(20)  // sets health to 100
console.log(wizard)

// with .call() we can bind a method from one object to another one
wizard.heal.call(archer, 50)
console.log(archer)

const array = [1,2,3]

function getMaxNumber(arr) {
  Math.max.apply(null, arr)
}

getMaxNumber(array)
