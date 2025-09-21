console.log(1+2+"4") // first two are numbers so it will add them but then convert into string -> "3"+"4" = "34"

console.log("1"+2+"7") // first values is string so all will be convert to str, "1"+"2"+"7" -> 127

console.log(+true) // gives output 1

// excluding '+', With all other operators, JavaScript does not convert numeric values to strings

console.log("37"-7); // output is 30

console.log("20"* 10); // output is 200

let x=34
let y=x++

console.log(`x:${x}, y:${y}`); //output ->  x:35, y:34


