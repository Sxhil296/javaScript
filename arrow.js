const user = {
    username: "Emir",
    price: 999,

    welcomeMsg : function() {
        console.log(`${this.username}, welcome to the website`)
        console.log(this)
    }
}

// user.welcomeMsg()
// user.username = "Omar"
// user.welcomeMsg()
// console.log(this)


// function chai() {
//     let username = "Omar"
//     console.log(this.username)
// }
// chai()



// const chai = function() {
//     let username = "Omar"
//     console.log(this.username)
// }
// chai()


//***********arrow function *********//


// const chai = () => {
//     let username = "omar"
 //    console.log(this.username)
//     console.log(this)
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4,5))

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)
const addTwo = (num1, num2) => ({username: "emir"})

console.log(addTwo(4,5))
