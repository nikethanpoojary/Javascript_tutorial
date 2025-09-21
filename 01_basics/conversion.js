let num = "45"

// two way to use typeof
console.log(typeof num)
console.log(typeof(num)) 

let numConvert = Number(num)

console.log(numConvert)
console.log(typeof numConvert)

/* 
"45" -> 45
"45fg" -> NaN
null -> 0
undefined -> NaN
true/false -> 1/0
*/

// ---------------------------------------

// let strConvert = String(num)

// console.log(strConvert)
// console.log(typeof strConvert)

// -----------------------------------------

let isWorking = 1

console.log(typeof isWorking)

/* 
1 -> true, 0 -> false
"" -> false, "xyx" -> true
*/

let boolWorking = Boolean(isWorking)

console.log([typeof boolWorking, boolWorking])

