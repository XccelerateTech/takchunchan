const EventEmitter = require('events');
var util = require('util');

class Tick extends EventEmitter {
    constructor() {
        super();
        this.second = 3;
    }

    start(second) {
        var myVar = setInterval(myTimer, 1000)

        function myTimer() {
            console.log(second);
            second--
            if (second = 0) {
                clearInterval(myVar);
                console.log('kaboom');
            };
        }


    }

}

var tick = new Tick();

tick.on('start', function (counter) { })

tick.start('3')

