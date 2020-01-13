var John = {
    name : "Hey! I am John",
    age: 24,
    isActive: false,
}

var Marry = {
    name: "Hey! I am Marry",
    age: 20,
    isActive:false,
}

var Ravi = {
    name: "Namskaram! mam nam ravikaran asmi",
    age:20,
    isActive:true
}

let users = new Map();

users.set("John",John);
users.set("Marry",Marry);
// users.set("ravi",Ravi);
users.set("shubham",Ravi);

// console.log(users);
// console.log(typeof users);
// console.log(users.size);
// console.log(users.get("shubham"));
// console.log(users.keys());
// console.log(users.values());


// for (const key of users.values()) {
//     // console.log(key);
//     console.log(key.name); 
// }


for (const [key, value] of users.entries()) {
    console.log(key + " = " + value.name);
    // literals
}

users.forEach((value,key) => console.log(key + " = " + value.name))

var arrOfArr = [["one","1"],["two","2"],["three","3"]];

var newMap = new Map(arrOfArr)

console.log(newMap);

