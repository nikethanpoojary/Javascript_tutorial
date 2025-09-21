const userId = 1007
let userEmail = "zoro@onepiece.com"
//var userPassword = "onigiri123" --> not used in modern javascript because of scope issue

userCity = "Pune" // it works even without adding let or const but not a good practice

let userState; //declaration without initilization of value. Initializer is optional.
                /*
                If a variable is declared without an initializer, it is assigned the value undefined.
                */

//userId = 7900 --> constant values cannot be re-assigned

//userPassword = "hehehe"
userCity = "Chennai"

console.log(userCity)
console.table([userId,userCity,userState])