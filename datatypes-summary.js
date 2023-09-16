//javascript is dynamic type language - no need to write the datatype



//how they get stored and accessed from memory

//primitive - 7 types - call by value - changes in the copy - string, number, boolean, null, undefined, symbol, bigInt

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



//non primitive - call by reference - array, objects, functions

const heroesArray = ['Spiderman', 'Batman', 'Superman']

let myObj = {
    name: "Emir",
    age: 21,
    address: {
        city:"Delhi",
        country: "India"
    }
}

const myFunction = function() {
    console.log("hello")
}

console.log(typeof myFunction)  //objectFunction