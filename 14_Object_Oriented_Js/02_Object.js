function multopleBy5(num){
    return num * 5
}
// multopleBy5(5);
multopleBy5.power = 2;

console.log(multopleBy5(5));
console.log(multopleBy5.power);
console.log(multopleBy5.prototype);

function createUser(userName, score){
    this.userName = userName;
    this.score = score;
}

createUser.prototype.incrementScore = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createUser("chai", 5);
const tea = new createUser("tea", 345);

chai.printMe();
