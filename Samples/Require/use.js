var mathfun = require("./mathfun");

var procesResults = function (error, results,time) {
    if(error){
        console.log("ERROR: "+error.message);
    } else {
        console.log("Results are "+results+" time is "+time+ "ms");
    }   
}

for (var index = 1; index <= 10; index++) {
    console.log("Calling evendouble with parameter "+index);
    mathfun.evenDoubler(index,procesResults);
    
}

console.log("--------");