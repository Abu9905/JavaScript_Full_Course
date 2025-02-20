    // ======= Function ======//

    // console.log("hy Threre !! how are U !");
    // console.log("hy Threre !! how are U !");
    // console.log("hy Threre !! how are U !");
    // console.log("hy Threre !! how are U !");
    // console.log("hy Threre !! how are U !");

    function sayHy(){
        console.log("hy Threre !! how are U !");
        console.log("hy Threre !! how are U !");
        console.log("hy Threre !! how are U !");
        console.log("hy Threre !! how are U !");
        console.log("hy Threre !! how are U !");
    }

    // sayHy();

    function addTwoNumber(num1 , num2){
        // console.log(num1 + num2);

        let result = num1 + num2;
        return result;
    }

    const result =  addTwoNumber(3, 5);
    // console.log(result); // undefined

    function loginUserMessage(usernmae = "sam"){
        if(!usernmae){
            return `Please provide a valid username`;
            return;
        }
        return `Welcome ${usernmae}`;
    }

    // console.log(loginUserMessage("Rahul"));

    // ====== function and object ======//  

    function calculateCartPrice(val1 , val2, ...num1){
        return num1;
    }
    // console.log(calculateCartPrice(200 , 300, 400, 500));

    const user = {
        username: "Rahul",
        price : 199,
    }
    function handleObject(anyObj){
        console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
    }
    // handleObject(user);
    // handleObject({username: "Sam", price: 299});

    const newArray  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function returnSecondValue(arr){
        return arr[1];
    }
    // console.log(returnSecondValue(newArray)); // 2

    console.log(
        // returnSecondValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    );


    // ====== Global and Local Scope ======//