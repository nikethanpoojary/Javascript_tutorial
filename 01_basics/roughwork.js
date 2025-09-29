//non-primitive

const heroNames = ["Iron Man", "Dr. Strange", "Panther"]

const infObject = {
    userName : "Rajesh",
    userId : 20099,
    ischecked : true
}

let newFunc = function(){
    console.log("nothing to return");
}

console.log(typeof newFunc);  // output -> function  (it is called object function)
console.log(typeof heroNames); // output -> object
console.log(typeof infObject); // output -> object

console.log(infObject.userName); // accesseing values from objects
