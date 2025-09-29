//comparision opertor


/* 
When null is compared to a number using relational operators (like <, >, <=, >=), 
it is coerced to the number 0. This is why expressions like null >= 0 and null <= 0 both evaluate to true (0>=0,0<=0)
*/
console.log(null >= 0); // null is converted to 0
console.log(null <= 0);

console.log(null > 0);

/*
when null is compared to 0 using the loose equality operator (==), the rules for null and undefined are special. 
The ECMAScript specification dictates that null and undefined are only loosely equal to themselves and each other, 
and not to any other values after type coercion, except in specific cases related to relational operators. 
Therefore, null == 0 does not result in 0 == 0
*/
console.log(null == undefined); // output true
console.log(null == 0); //output false

console.log(null != 0); //output true
console.log(null != undefined); //output false

console.log("90" >89); // "90" is converted to 90.

console.log("78"===78); // strict equality, output -> false
