function a() {
    let grandpa = 'grandpa'
    return function b() {
        let father = 'father'
        return function c() {
            let son = 'son'
            return `${grandpa} >> ${father} >> ${son}`
        }
    }
}

a()()()

// for some reason inside function c() we have access to variables defined in a,b even when they
// got popped of the stack after executing, reason is grandpa is being "referenced" in the code so it
// will be put in a closure. closures are also called lexical scoping.

// in JavaScript parameters are treated same as local variables, and are saved in local environment
const boo = (string) => (name) => (name2) => console.log(`${string} ${name} ${name2}`);

boo('Hi')('Tim')('Becca');

const booHi = boo('Hi'); // return a function
const booHiName = booHi('Tim');


// here we are also using closure to access callMe in the setTimeOut function
function CallMeLater() {
    const callMe = "Hi Im here";
    setTimeout(() => {
        console.log(callMe);
    }, 4000);
}

CallMeLater();

// even though const doesn't get hoisted, since we are referencing callMe, it will be added to closure 
// and is accessible inside setTimeout()
function CallMeLater_1() {
    setTimeout(() => {
        console.log(callMe);
    }, 4000);

    const callMe = "Hi Im here";
}

CallMeLater();

// closures are very "memory efficient" and allow us to have "encapsulation" in JS

function heavyDuty2() {
    const bigArr = new Array(7000).fill('👽');
    console.log('created arr');
    return function (index) {
        return bigArr[index];
    }
}

// since we are referencing bigArr in the inner function, there is no need for it to be defined again,
// because it is saved in closure
const getHeavy = heavyDuty2();

// these two reference same array, no new object created again => Closure Scope
getHeavy(500);
getHeavy(1450);


const makeNuclearButton = () => {
    // this variable is encapsulated, can't be accessed from outside
    let timeWithoutDestruction = 0;
    // closure
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return 'Boom';
    }
    // will continue working since the time we call makeNuclearButton
    setInterval(passTime, 1000);

    return {
        launch: launch,
        totalPeaceTime: totalPeaceTime
    }
}

// this will start the passTime interval and count the seconds
const war = makeNuclearButton();
// returns how many seconds have passed
war.totalPeaceTime();
// this will set the timer back to -1 and restart it
war.launch();


let view;
const initialize = () => {
    let called = 0;
    return () => {
        if (called > 0) {
            return;
        } else {
            view = '🍑';
            called++;
            console.log("view has been set!");
        }
    }
}

const startOnce = initialize();

// no matter how many times we call it, it will only init once
startOnce();
startOnce();

// if we set initialize() manually it won't run anything itself, since it returns a function


// this will return 4, four times because var is only global and by the time we run the lines, all i are set to 4
const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
    setTimeout(() => {
        console.log('I am at index ' + array[i]);
    }, 3000);
}

// with use of Closure we can solve the issue
for (var i = 0; i < array.length; i++) {
    (function (closureI) {
        setTimeout(() => {
            console.log('I am at index ' + closureI);
        }, 3000)
    })(i);
}

// let has {} scope, so each i here is encapsulated to it's own local scope
for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
        console.log('I am at index ' + array[i]);
    }, 3000);
}