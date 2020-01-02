// let sayHello = function(name){
//     console.log(`Greeeting messsage for ${name}`);
//     console.log(`Hey ${name}`);
    
// }
// sayHello("Ravikaran");


// let fullNameMaker = function(name,name1){
//     console.log(`${name} shareer ko dekh rhe ho ${name1} aatma ki bart kr rha hu`);
//     // console.log(`${name}`);
// }
// fullNameMaker("Parth","Mai");

// let adder = function(num1,num2){
//     let yo = num1+num2;
//     return yo
// }
// console.log(adder(3,5))



// final value updated if if give values in final call else default undefined or the value initialized im frst will be seen by the user
// let getUser = 
const yo = function(name = 'RAVIKARAN',courseCount = 4){
    return "Hello " + name + " your course count is: " + courseCount;
}
console.log(yo("SHUBHAM",5));
