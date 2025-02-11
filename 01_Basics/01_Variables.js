// ===== Let , Const and Var =====//

const accountId = 12345;
let accountEmail = "Abu@567.com";
var accountPassword = "Abu12345";
accountCity = "Dhaka";
let accountState;

// change valuer:
// accountId = 5757; // const can't be change

accountEmail = "Abu@789.com";
accountPassword = "Abu78945";
accountCity = "Rangpur";

console.log(accountId);

/*
{
    scope
}
---> Perfer not to use var
    because of issue in block scope and functional scope.

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);



