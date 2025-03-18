function SetUserName(username){
    // complex DB call
    this.username = username
    console.log("Called");
}

function createUser(username, email, password){

    SetUserName.call(this, username)

    this.email = email;
    this.password = password;
    // SetUserName.call(this, username);
}
const chai = new createUser("chai", "Abu@123.com", "123456");
console.log(chai);