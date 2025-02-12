<!-- ###### variables ####### -->

<!-- 1.) What is a variable ?
   -> In programming, a variable is a named storage location in a computer's memory that can store and change values

   Example: let accountEmail = "Abu@567.com"
            const accountId = 12345
            var accountPassword = "Abu12345"
-->

<!-- 2.) Different between var , const and var .
      ## Var ##
      -> The var is the oldest keyword to declare a variable in JavaScript. It has the Global scoped or function scoped. This means:
      .) If you create a variable outside of a function, you    can use it anywhere in your code.
      .) If you create a variable inside a function, you can only use it within that function.

      example:
            var a = 10
            function f() {
                 var b = 20
                 console.log(a, b)
            }
            f();
            console.log(a);

      ## let ##
      -> The let keyword is an improved version of the var keyword. It is introduced in the ES6 or EcmaScript 2015. These variables has the block scope. It can’t be accessible outside the particular code block ({block}).
      .) The variable is only available inside the block {} where you define it.

      example:
            let a = 10
            function f() {
                 let b = 20
                 console.log(a, b)
            }
            f();
            console.log(a);

      ## const ##
      -> The const keyword is also introduced in the ES6 or EcmaScript 2015. These variables has the block scope. It can’t be accessible outside the particular code block ({block}).
      .) The variable is only available inside the block {} where you define it.
      .) The value of a constant can never be changed.
      .) The value of a constant can be changed only if the variable is initialized with a value.

      example:
            const a = 10
            function f() {
                 const b = 20
                 console.log(a, b)      
            }
            f();
            console.log(a);
 -->


<!-- ============ Datatype and ECMAScript ============ -->
 <!-- 
 1.) What is a datatype ?
  -> Data types are categories of data that tell a computer how to store, use, and process information

  There are mainly two types of datatypes:-
     1.) Primitive Datatypes:-
         -> number - 2 to 53
         -> string - " "
         -> boolean - true or false
         -> null - standalone value
         -> undefined
         -> symbol - unique
         -> bigint -  store big number
      example:-
            let age = 18;
            let name = "abu";
            let isLoggedIn = true;
            let state =  null;
            let city;
            let mySym = Symbol("key1");
            let bigNum = BigInt(23)

     2.) Reference Datatypes:-
         -> object
         -> function
         -> array
      example:-   
           const obj = {
                name : "Abu",
                age : 18,
                city : "Dhaka"
            }

            function printHello(){
                  console.log("Hello World");
            }

            const userName = ["abu", "shama", "sakib"]

           console.log(typeof name); 

      Note:- null and undefined are primitive datatype.
      but typeof of null is object and typeof of undefined is undefined.
      Note :- typeof:- it is checking the datatype primitive or reference datatype.
  -->

  <!-- ======= Datatype Conversion confusion ======= -->