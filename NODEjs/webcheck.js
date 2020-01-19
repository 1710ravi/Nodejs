<<<<<<< HEAD
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

=======
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

>>>>>>> 17c9752c757c3948407c8d272914859cf8bfbf6b
console.log(passChecker(password));