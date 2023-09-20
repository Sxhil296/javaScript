//for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element==5){
//         console.log(`Number Five`)
//     }
//     console.log(element)
// }
// console.log(element)




// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop: ${i}`)
//     for (let j = 1; j <=10; j++) {
//         const element = j;
//         // console.log(`inner value ${j} and inner value ${i}`)
//         console.log(i + '*' + j + ' = ' + i*j)
        
//     }
    
// }



// const myArray = ['one', 'two', 'three', 'four']
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element)
// }




//break and continue


for (let i = 1; i <= 20; i++) {

    if (i==5) {
        console.log(`Detected 5`)
        // break
        continue
    }
   console.log(`Value of i is ${i}`)
    
}