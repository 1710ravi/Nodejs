let userEmail = 'ravikaran123';
let password = '1234';
 
let userChecker = function(mystring){
    if ((mystring.includes(123)) && (mystring.length > 6)) {
        return true  
}}

let passChecker = function(pass){
    if ((pass.includes(123)) && (pass.length < 5)) {
        return true
}}
console.log(userChecker(userEmail));

console.log(passChecker(password));