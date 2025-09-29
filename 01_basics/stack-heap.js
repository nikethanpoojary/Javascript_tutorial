// stack memory for primitive , heap for reference or non-primitive

// stack
let userName1 = "Guru"
let userName2 = userName1

userName2 = "Hari"  // changing userName2 value doen't affect the value stored in userName1.
                    // bcoz, userName2 had the copy of the value stored in userName1.

console.log(userName1);
console.log(userName2);

//heap
let object1 = {
    clientName:"Monica",
    clientEmail: "Monica@gmail.com"
}

console.log(object1) // { clientName: 'Monica', clientEmail: 'Monica@gmail.com' }


let object2 = object1 // here, object1 and object2 both reference to the original content and not the copy.
                     // so, making changes to object2 affect object1.

object2.clientName = "Kiran" 

console.log(object1) // { clientName: 'Kiran', clientEmail: 'Monica@gmail.com' }
console.log(object2)

