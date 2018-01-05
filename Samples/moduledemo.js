var os = require('os');
var toMb = function (size) {
    return(Math.round(size/(1024*1024)));
}

console.log("host name is "+os.hostname());
console.log("home directory is "+os.homedir());
console.log("Total Free Memory is "+toMb(os.freemem())+"mb");