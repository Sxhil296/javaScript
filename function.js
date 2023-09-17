//function definition
// function greet(){
//     console.log("hello")
// }

//function reference
// greet
//function call or execution
// greet()


// function addTwoNumbers(number1, number2){ //number1 and number2 are parameters
//     console.log(number1 + number2)
// }
//addTwoNumbers(4, 5) //4 and 5 are arguments



function addTwoNumbers(number1, number2){ 
    // let result = number1 + number2
    // return result
    return number1+number2
}

const result = addTwoNumbers(7, 8)
// console.log("Result: ", result) 




function loginUserMsg(username = "sam"){
    if(!username){
       console.log("Please enter a username")
       return
    }
    return `${username} just logged in!`
}
// console.log(loginUserMsg("Emir"))




function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))



const user = {
    username: "Emir",
    age: 22
}

function handleObject(anyobject){
    // console.log(`Username is ${user.username} and he is ${user.age} years old.`)
    // console.log(`Username is ${anyobject.username} and he is ${anyobject.age} years old.`)
}

// handleObject()
// handleObject(user)
handleObject({
    username:"Sammy",
    age: 22
})


const myNewArray = [200, 400, 100]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(`${returnSecondValue([...myNewArray])}`) //string
console.log(returnSecondValue(myNewArray))

