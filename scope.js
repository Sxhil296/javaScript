// var c = 300
let a = 200

if (true){
    let a = 10
    const b = 20
    // var c = 30  //avoid var
    // console.log(`inner: ${a}`)
}


// console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const username = 'emir'

    function two(){
        const website = "google"
        console.log(username)
    }
    // console.log(website)
    two()
}
// one()



if(true){
    const username = "emir"
    if(username === 'emir'){
        const website = 'youtube'
        console.log(username)
    }
    // console.log(website)
}
// console.log(username)


//*************************

function addOne(num1){
  return num1 + 1
}
addOne(5)

// addTwo(6)
const addTwo = function(num) {
    return num+2
}
// addTwo()