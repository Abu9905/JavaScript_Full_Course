// ======= Data type summary ========//

// There are mainly two types of datatypes:-
// 1.) Primitive Datatypes:-
    //  7 types:-
//     -> number - 2 to 53
//     -> string - " "
//     -> boolean - true or false
//     -> null - standalone value
//     -> undefined
//     -> symbol - unique
//     -> bigint -  store big number

//     example:-
            let age = 18;
            let name = "abu";
            let isLoggedIn = true;
            let state =  null;
            let city;
            let mySym1 = Symbol("key1");
            let mySym2 = Symbol("key1");
            // console.log(mySym1 === mySym2);
            let bigNum = BigInt(23)

        // console.table([age, name, isLoggedIn, state, city, bigNum]);

// 2.) Reference Datatypes / Non Primitive Datatypes:-
//     -> array
//     -> object
//     -> function

//     example:-
            let myArr = [1, 2, 3, 4, 5];
            console.log(myArr);
            let myObj = {
                name: "abu",
                age: 18,
                isLoggedIn: true,
                state: null,
                city: undefined,
                mySym: Symbol("key1"),
                bigNum: BigInt(23)    
            }
            console.log(typeof myObj);

            const hayAbuName = function printMyname(){
                console.log("abu");
            }
            console.log( typeof hayAbuName);