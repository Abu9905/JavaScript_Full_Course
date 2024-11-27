// ======== forEach loop ======//
const coding = ["js", "ruby", "py", "cpp", "java"]

// coding.forEach( function name(){

// })
// call function :-
    // -> 1.) iska name nahi hota hai.
    // -> 2.)
// ex :-
// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach( (item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item , index , arr) =>{
//     console.log(item , index , arr);
// })

const myCoding = [
    {
        languageName : "javaScript",
        languageFile : "js"
    },
    {
        languageName : "c++",
        languageFile : "cpp"
    },
    {
        languageName : "python",
        languageFile : "py"
    }
]

myCoding.forEach( (item)=>{
    // console.log(item.languageFile);
    console.log(item.languageName);
})