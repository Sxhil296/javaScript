//both '' and "" can be used

// const name  = 'Emir '
// const age = 20
// console.log(name + age + " years")  //avoid using this method


//use string string interpolation instead
// console.log(`Hello, my name is ${name} and I'm ${age} years old.`)  


//another way to declare strings
// const gameName = new String('Emir-x')
// console.log(gameName)
// console.log(gameName[0])
// console.log(gameName.__proto__) 

// console.log(gameName.length)
// console.log(gameName.toLowerCase())
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('i'))

// const newGameName = gameName.substring(0, 4)  //doesn't include last index value
// console.log(newGameName) //can't give negative values

// const anotherGameName = gameName.slice(-3, 5)
// console.log(anotherGameName)

// const newString = "     emir     "
// console.log(newString)
// console.log(newString.trim()) 

// const url = "https://emir.com/emir%20malik"

// console.log(url.replace('%20', '-'))
// console.log(url.includes('emir'))

const anotherStr = "ab-cd-ef-gh-ij"
console.log(anotherStr.split('-'))