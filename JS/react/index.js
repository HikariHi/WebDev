function SayHi() {
    for (var i = 0; i<5; i++){
        console.log(i);
    } 
    console.log(i); /* It will count this one as well, so we use let srom ES6 to avoid that , let it makes the function accecable from inside only */
}


SayHi();
