//singleton -when made from constructor - // Object.create


// const mySymbol = Symbol("key2")

//object literals
// const user = {
//     name: "Emir",
//     "full name": "Emir Malik",
//     age: 22,
//     isMale: true,
//     email: "emir@google.com",
//     lastLogIn: ["Monday", "Saturday"],
//     mySym: "key1",
//     [mySymbol]: "key2"
// }

// console.log(user.name)  
// console.log(user["name"])
// console.log(user["full name"])
// console.log(typeof user["mySym"])
// console.log(user[mySymbol])

// user.email = "emir@chatgpt.com"
// console.log(user["email"])
// Object.freeze(user)
// user.email = "emir@microsoft.com"
// console.log(user)


// user.greeting = function(){
//     console.log("Hello User!")
// }
// user.greetingTwo = function(){
//     console.log(`Hello user, ${this.name}`)
// }

// console.log(user.greeting)
// console.log(user.greeting())
// console.log(user.greetingTwo())


// const tinderUser = new Object()  //singleton
const tinderUser = {} //non singleton

tinderUser.id = "123abc"
tinderUser.name = 'Sammy'
tinderUser.isMale = true
// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        first:"John",
        last: "Doe"
    }
}


// console.log(`${regularUser['fullname']['first']} ${regularUser['fullname'].last}`)
// console.log(regularUser.fullname.first, regularUser.fullname.last)


// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}
// const obj3 = {5: "e", 6: "f"}
// const obj4 = {obj1, obj2, obj3}
// console.log(obj4)
// const obj5 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj5)

// const obj6 = {...obj1, ...obj2, ...obj3}
// console.log(obj6)



const users = [
    {
        id: 1,
        email: "e@gmail.com"
    },
    {
        id: 2,
        email: "e@gmail.com"
    },
    {
        id: 3,
        email: "e@gmail.com"
    }
]

// console.log(users[1].email)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isMale'))



//de-structure
const course = {
    courseName: "JS",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course
const {courseInstructor: inst} = course
console.log(inst)

//JSON format
// {
//     "name" : "Emir",
//     "age" :"40",
//     }

// [
//     {},
//     {},
//     {}
// ]