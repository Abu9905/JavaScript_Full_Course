// ==== stack and heap memory ===//

// stack memory (primitive datatype) , Heap memory (non primitive datatype).

let myYoutubeName = "Abu.com";
let anothername = myYoutubeName;
anothername = "chai and code";

console.log(myYoutubeName);
console.log(anothername);

let user1 = {
    email : "Abu@123.com",
    upi : "abu@upi"
}
let user2 = user1;
user2.email = "Abu@456.com";
console.log(user1.email);
console.log(user2.email);