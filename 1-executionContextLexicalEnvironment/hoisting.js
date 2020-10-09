// HOISTING
zz();  // bye

function zz() {
    console.log('hi');
}

function zz() {
    console.log('bye');
}



var a = "grapes";

var myFunc = function () {
    console.log(a);

    a = "sushi";

    console.log(a);
}

myFunc();   // undefined,  sushi

// hoisting makes the code unpredictable, better way is to avoid var keyword and use const/let instead