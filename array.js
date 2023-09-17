//array

const myArray = [0,1,2,3,4,5]
// console.log(myArray[1])

const myArray2 = new Array(2,4,6,8,10)
// console.log(myArray2)


//array methods
// myArray.push(6)  //adds value in the end
// console.log(myArray)
// myArray.pop()  //deletes the end element
// console.log(myArray)

// myArray.unshift(9) //adds value in the beginning
// console.log(myArray)
// myArray.shift()  //deletes the first element
// console.log(myArray)


// console.log(myArray.includes(9))
// console.log(myArray.indexOf(4))

// const newArray = myArray.join()  //converts array into string
// console.log(newArray)
// console.log(myArray)
// console.log(typeof newArray)
// console.log(typeof myArray)


// console.log("Original Array - ", myArray)
// const slicedArray = myArray.slice(1,3)
// console.log(slicedArray)
// console.log("Original array after slice - ", myArray)

// console.log("Original Array - ", myArray)
// const splicedArray = myArray.splice(1,3)
// console.log(splicedArray)
// console.log("Original array after splice - ", myArray)





// const marvelHeroes = ["Thor", "Hulk", "Spiderman"]
// const dcHeroes = ["Batman", "Superman", "Aquaman"]

// marvelHeroes.push(dcHeroes)  //doesn't return new array
// console.log(marvelHeroes)
// console.log(marvelHeroes[3])
// console.log(marvelHeroes[3][1])

// const allHeroes =marvelHeroes.concat(dcHeroes)  //returns new array
// console.log(allHeroes)

// const allNewHeroes = [...marvelHeroes, ...dcHeroes]
// console.log(allNewHeroes)


// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11] ]]
// const flatAnotherArray = anotherArray.flat(Infinity)
// console.log(flatAnotherArray)

// console.log(Array.isArray("Sahil"))
// console.log(Array.from("Sahil"))


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))


