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
console.log(loginUserMsg("Emir"))

