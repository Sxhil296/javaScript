//if

// if(condition){
//     statement; //do something if condition is true.
// }

// const isMale = true

// if(isMale){
//     console.log(`User is male.`)
// }




// const temp = 45
// if(temp < 50){
//     console.log(`Temp. is less than 50`)
// } else {
//     console.log(`Temp. is more than 50.`)
// }

// console.log("Always executed!")



const bal = 1000
// if(bal>500) console.log(`bal`)

// if(bal<500){
//     console.log(`Less Than 500`)
// } else if(bal <750){
//     console.log(`Less than 750`)
// } else if(bal <900){
//     console.log(`Less than 900`)
// } else{
//     console.log(`less than 1200`)
// }




const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard) {
    console.log(`allowed to buy`)
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log(`Logged in`)
}