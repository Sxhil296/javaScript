//javascript is dynamic type language - no need to write the datatype



//how they get stored and accessed from memory

//primitive - 7 types - call by value - changes in the copy -stack memory- string, number, boolean, null, undefined, symbol, bigInt

// const name = "Emir"
// const number = 23
// const isMale = true
// const insideTemp = null
// let userName;

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId)

// const bigNumber = 23456789098765432n
// console.log(typeof(bigNumber))



//non primitive - call by reference - heap memory- array, objects, functions

// const heroesArray = ['Spiderman', 'Batman', 'Superman']

// let myObj = {
//     name: "Emir",
//     age: 21,
//     address: {
//         city:"Delhi",
//         country: "India"
//     }
// }

// const myFunction = function() {
//     console.log("hello")
// }

// console.log(typeof myFunction)  //objectFunction



//*********************Memory***********************

//stack (primitive) - copy
//heap (non primitive) - reference

let myName = "Mehmed"

let anotherName = myName

anotherName = "emir"

console.log(anotherName)
console.log(myName)

let userOne = {
    email: "user@gmail.com",
    upi: "upi@byl"
}

let userTwo = userOne


userTwo.email = "emir@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)
