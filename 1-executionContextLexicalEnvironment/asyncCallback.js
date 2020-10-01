// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');   
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds(); // we will wait 3 seconds then run the log from this method
console.log('finished execution'); // then this will run

// next we will run the event hanlder click function (even if it was called before execution of last log), 
// as event functions only run AFTER  execution stack is empty.