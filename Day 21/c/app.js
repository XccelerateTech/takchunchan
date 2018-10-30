var assignA = require('./assignA');
var randomNum = require('./randomNum');

var lazy = '';

var randomAlphaphet = (times) => {
       for (let i = 0 ; i < times; i++){
        lazy += assignA(randomNum());
    }
    return lazy
}

console.log(randomAlphaphet(5))