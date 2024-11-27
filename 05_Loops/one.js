// === Loops / Iterations =======//
// 1.) for loop
// 2.) while loop
// 3.) do while loop

// for(let i = 0; i<=10 ; i++){
//     console.log(i);
// }

for(let index = 0; index <= 10; index++){
    const element = index;
    if(element == 5){
        // console.log("5 is best number");
    }
    // console.log(index);
}


for(let i = 0; i<= 10; i++){
    // console.log(`Outer loop value : ${i}`);
    for(let j = 0; j<= 10; j++){
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log( i + '*' + j + ' = '  + i * j);
    }
}

const myArray = ['flash', 'batman', 'superman']
// console.log(myArray.length);

for(let index = 0; index < myArray.length; index++){
    const element = myArray[index]
    // console.log(element);
}

// break and continue

// for(let index = 1; index <= 20; index++){
//     if(index === 5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${index}`);
// }

for(let index = 1; index <= 20; index++){
    if(index === 5){
        // console.log(`Detected 5`);
        continue;
    }
    // console.log(`Value of i is ${index}`);
}


// let i = 0
// while(i <= 10){
//     console.log(i);
//     i++;
// }

const myArrayOne = ['flash', 'barman', 'superman']
let arr = 0;
while(arr < myArrayOne.length){
    // console.log(`Value is ${myArrayOne[arr]}`);
    arr++;
}

let i = 0;
do{
    console.log(i);
    i++
}while(i <= 10)

    let score = 11;
    do{
        console.log(`Score is ${score}`);
        score++
    }while( score <= 10)