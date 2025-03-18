class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Usernaem : ${this.username}`);
    }

    static createId(){
        return`123`
    }
}

const abu = new User("abu");
console.log(abu.createId());

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }
}

const iphone = new Teacher("Abu", "Abu@123.com", "123456");
console.log(iphone.createId());