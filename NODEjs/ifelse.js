let whoIsHere = 'user';
let ravi = true
let karan = false
if (whoIsHere == 'user') {
    console.log('Greeting message for user');
} else if(whoIsHere === 'Teacher') {
    console.log('Greeting messsage for teacher');
}
else{
    console.log('MESSAGE: Please verify your email')
}
if(ravi && !karan){
    console.log('ravikaran srivastava')
}
else if(ravi || karan){
    console.log('shubham srivastava')
}