let score = new Number(4007)
let balance = 4007.78764902
let newNum = new Number(19000000000)
console.log(score)
console.log(balance.toPrecision(5)) // return string value of the number, from first digit to the number of digit mentioned.
                                    // precision set to 5 so, 4007.78764902 -> 4007.8  (total count of digit is 5)

console.log(balance.toFixed(4)) // this method only considers the values after the decimal point, output in string
                                // 4007.78764902 -> 4007.7876

console.log(newNum.toLocaleString()); // commas b/n numbers, my system default set to indian numbering -> 19,00,00,00,000
console.log(newNum.toLocaleString('en-US')); // change to US numbering -> 19,000,000,000

// possible maximum and minimum value for number
// console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE) // 5e-324

console.log("-------------------")

console.log(Math.random()) // gives number between 0(inclusive) and 1(exclusive)
console.log(Math.floor(Math.random()*10) + 1 )

// in case if you want numbers between certain range
let min =10
let max =20

console.log(Math.floor(Math.random()*(max-min)) + min)
