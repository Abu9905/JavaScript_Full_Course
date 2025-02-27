// ===== Filter , Map and reduce ===== //

// *********** Filter *********** //
const coding = ['js' , 'py' , 'rb' , 'cpp'];

// const values = coding.forEach( (item) => {
//     console.log(item);
// })
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10];


// const newNums = myNums.filter ( (num) => (num > 4));

// using forEach:-
// const newNums = [];
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num);
//     }
// })
// console.log(newNums);

// Exa:-
const books = [
    {title: 'Book One', genre: 'Function', publish: 2010, edition : 2004},
    {title: 'Book Two', genre: 'History', publish: 2010, edition : 2004},
    {title: 'Book Three', genre: 'Non-Function', publish: 2010, edition : 2004},
    {title: 'Book Four', genre: 'Science', publish: 2010, edition : 2004},
    {title: 'Book Five', genre: 'Function', publish: 2010, edition : 2004},
    {title: 'Book Six', genre: 'Function', publish: 2010, edition : 2004},
    {title: 'Book Seven', genre: 'History', publish: 2010, edition : 2004},
    {title: 'Book Eight', genre: 'Function', publish: 2010, edition : 2004},
    {title: 'Book Nine', genre: 'Function', publish: 2010, edition : 2004},

]
const userBooks = books.filter ( (bk) => (bk.genre === 'History'));
console.log(userBooks);