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




//for-of loop doesn't work on objects, for-in is used for that, for-in doesn't work on map


const myObject = {
    1: 'A',
    2: 'B',
    3: 'C'
}

for (const key in myObject) {
//    console.log(key)
// console.log(myObject[key])
//    console.log(`${key} is for ${myObject[key]}`)
}





//for each

const nums = [1, 2, 3, 4, 5, 6, 7]

// nums.forEach(  function (num) {
//     console.log("this num is ", num);
// } )


// nums.forEach( (num) => {
//     console.log(`This number is :${num}`)
// })


// function printMe(num){
//     console.log(num)
// }
// nums.forEach(printMe)

// nums.forEach( (num, index, nums) => {
//     console.log(num, index, nums)
// })

const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})