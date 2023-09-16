//dates

// let myDate = new Date()
// console.log(typeof myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())

// let specificDate = new Date(2023, 0, 23)  //months start from zero
// console.log(specificDate.toDateString())

// let specificDate = new Date(2023, 9, 17, 0, 7)
// console.log(specificDate.toLocaleString())

let specificDate = new Date("2023-09-17");
// console.log(specificDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(specificDate.getTime())
// console.log(Math.floor(Date.now()/1000))  //in seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()) //january = 0
console.log(newDate.getDay())  //sunday = 0
console.log(newDate.getFullYear())
console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))