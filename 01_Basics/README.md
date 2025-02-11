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

 