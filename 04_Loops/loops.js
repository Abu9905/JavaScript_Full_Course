// 1.) for loop
// 2.) while loop
// 3.) do while loop

// =========== For Loop =========== //
// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

for (let index = 0; index <= 10; index++) {
    // if(index === 5){
    //     break;
    // }

    // if(index === 5){
    //     continue;
    // }
    const element = index;
    // console.log(element);
    
}

for(let i = 0; i<=10; i++){
    // console.log(`outer Loop value : ${i}`);
    for(let j = 0; j<=4; j++){
        // console.log(`inner loop value : ${j} and ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
    }
}

let myArray = ["flower", "tree", "fruit", "vegetable"];
// console.log(myArray.length);
for(let i = 0; i < myArray.length; i++){
    // console.log(myArray[i]);
}

// =========== While Loop =========== //

let i = 0;
while(i <= 5){
    // console.log(i);
    // i++;
    i = i + 2;
}

const myArrayOne = ["flower", "tree", "fruit", "vegetable"];

let j = 0;
while(j < myArrayOne.length){
    // console.log(myArrayOne[j]);
    j++;
}

// =========== Do While Loop =========== //


let score = 1;
do{
    console.log(score);
    score++;

}while(score <= 5);