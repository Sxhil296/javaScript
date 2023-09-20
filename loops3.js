//for of

// const arr = [1,2,3,4,5]

// for (const value of arr) {
//     console.log(value)
// }



// const greeting = "hello world"
// for (const greet of greeting) {
//     if (greet==" ") {
//         continue
//     }
//     console.log(`each character is ${greet}`)
// }




//maps
const map = new Map()
map.set('IN', 'India')
map.set('GRM', 'Germany')
map.set('FR', 'France')
map.set('IN', 'India')
// console.log(map)

for (const key of map) {
    // console.log(key)
}

for (const [key, value] of map) {
    // console.log(key, ":-", value)
}




//for-of loop doesn't work on objects, for-in is used for that


const myObject = {
    1: 'A',
    2: 'B',
    3: 'C'
}

for (const key in myObject) {
//    console.log(key)
// console.log(myObject[key])
   console.log(`${key} is for ${myObject[key]}`)
}