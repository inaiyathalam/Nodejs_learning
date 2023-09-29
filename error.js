const error = new Error("Something went wrnog")
// console.log(error.stack)
// console.log(error.message)
// throw new Error("I am error object")

// const {Custom} = require("./Custom")

// throw new Custom("This is a error")

try{
    dosome();
} catch(e){
    console.log("Error");
    console.log(e);
}

function dosome()
{
    const data = fetch("localhost:3000/api")
    // console.log("Hello from dosome function")
}

 