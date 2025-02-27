// ********* Reduce ********* //

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( (acc , curr) =>{
    // console.log(`Accumulator: ${acc} Current Value: ${curr}`);
//     return acc + curr;
// }, 0)

const myTotal = myNums.reduce( (acc , curr) => acc + curr, 0)
// console.log(myTotal);

// Exa:- 
const shoppoingCart = [
    { product: 'phone', price: 700 },
    { product: 'laptop', price: 1000 },
    { product: 'shirt', price: 30 },
    { product: 'shoes', price: 100 },
    { product: 'watch', price: 200 },
]

const allCost = shoppoingCart.reduce ( (acc, item) => (acc + item.price), 0)
console.log(allCost);