const coding = ["js", "py", "ts", "java", "cpp"];

const values = coding.forEach((item) => {
  // console.log(item)
  return item;
});

// console.log(values)



//forEach doesn't return any value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNums = myNums.filter((num) => num >= 5)

//use return keyword if scope {} is used
// let newNums = myNums.filter((num) => {
//    return num >= 5
// })
// console.log(newNums)

// const newNums = []
// myNums.forEach((num)=> {
//     if (num>=5){
//         newNums.push(num)
//     }
// })
// console.log(newNums)





const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((book) => book.genre === "History");
userBooks = books.filter((book) => {
  return (
    book.publish >= 1995 && book.genre === "History" && book.edition >= 2007
  );
});

// console.log(userBooks);

//*****************************map***********

//map returns the value

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = myNumbers.map((num) => num +10)
// const newNumbers = myNumbers.map((num) => { return num +10})
const newNumbers = myNumbers
                    .map((num)=> num *10)
                    .map((num) => num + 1)
                    .filter((num) => num>=40)

// console.log(newNumbers)


//********************reduce */


const numbers = [1, 2, 3]
// const total = numbers.reduce(function (acc, curVal) {
//     console.log(`acc : ${acc} and curVal : ${curVal}`)
//     return acc + curVal
// }, 0)

const total = numbers.reduce( (acc, curVal) => acc+curVal, 0)
// console.log(total)


const shoppingCart = [
    {
        item: "js course",
        cost: 299
    },
    {
        item: "mobile dev course",
        cost: 5599
    },
    {
        item: "py course",
        cost: 599
    },
    {
        item: "data science course",
        cost: 12299
    },
]

const totalPrice = shoppingCart.reduce((acc, item) => acc+item.cost, 0)
console.log(totalPrice)
