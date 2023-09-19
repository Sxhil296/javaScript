//falsy values
//false, 0, -0, bigInt 0n, "", null, undefined, NaN


//except these falsy values , all are truthy values

//truthy
// "0", 'false', " ", [], {}, function()


//false == 0
//false = ''
//0 == ''


//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15

// console.log(val1)


//ternary operator
//condition ? true : false

const cost = 100
cost <=80 ? console.log(` less than 80`) : console.log(`more than 80`)