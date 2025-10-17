let strName = new String('Gagan')  // another method for string declaration

// console.log(strName.length);
// console.log(strName[3]);

// console.log(`${strName.toUpperCase()} is in our office`)
// console.log(strName.charAt(2));
// console.log(strName.indexOf('a'));

let strName2 = "Vira"
let strName3 = strName.concat(" ",strName2)
console.log(strName3);
// console.log(strName3.endsWith('ra'));
// console.log(strName3.search("V"));
console.log(strName3.slice(-7,-3));       
console.log(strName3.substring(-4,7)); //treat -4 as 0

const userName = "   Ramakanth  "
console.log(userName);
console.log(userName.trim());// trimStart(), trinEnd()

const urlPath = "www.teraform.com/animal%20planet"

console.log(urlPath);
console.log(urlPath.replace('%20','-'));
console.log(urlPath.includes('anim'));
console.log(urlPath.split('.')); // splits based on seperator (here '.') into an array





