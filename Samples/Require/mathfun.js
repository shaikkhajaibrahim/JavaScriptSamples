var maxTime = 1000;

var evenDoubler = function (value,callback) {
    var waitTime = Math.random()*(maxTime);
    if(value%2 == 0) {
        setTimeout(function() {
            callback(null,value*2, waitTime);
        }, waitTime);
    } else {
        setTimeout(function() {
            callback(new Error("Odd Input"));
            
        }, waitTime);
    }
}

module.exports.evenDoubler = evenDoubler;

module.exports.foo = "bar";