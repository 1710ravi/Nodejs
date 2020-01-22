// var getData = function(temp,cold=10){
// var getData = function(temp=cold,cold=10){
//     if (temp<cold) {
//         return "This is cold"
//     } else {
//         return "This is not cold"
//     }
// }
// console.log(getData(4));
// console.log(getData());

let score = 100;
var obj = {
    name:"Ravi",
    score,
    angry:99,
    highScore(){
        return `your highscore is ${this.angry}`
    }
}
console.log(obj.score);

let wrath = 'angry'
//  console.log(obj.angry);
console.log(obj[wrath]);

 
