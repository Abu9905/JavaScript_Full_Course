// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
        // console.log("Encrypting password");
//         return `${this.password}123`;
//     }

//     changeUsername(newUsername){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "Abu@123.com", "123456");
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the scene:-

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPassword = function(){
    return `${this.password}123`;
}
User.prototype.changeUsername = function(newUsername){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "Abu@123.com", "123456");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());