const course = {
    name: 'Web Programming'
}

const grade = {
    score: 92
}

const finalResult = Object.assign(course, grade)
console.log(finalResult) // { name: 'Web Programming', score: 92 }

const finalResult1 = Object.assign(course, grade, { teacher: 'Mrs Water' })
console.log(finalResult1) // { name: 'Web Programming', score: 92, teacher: 'Mrs Water' }

// if two objects have same property name, the latter one will be added to the end object

// how to clone an object with assign method
const copy = Object.assign({}, finalResult)
console.log(copy)

console.log(copy === finalResult)  // false


// example
function printName(options) {
    const defaults = {
        firstName: 'steve',
        lastName: 'Rider'
    }

    options = Object.assign(defaults, options)

    console.log(`${options.firstName}  ${options.lastName}`)
}

printName({ firstName: 'Dom' })