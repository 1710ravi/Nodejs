// const sayHello = function(name){
//     return 'Hey' + name + '!'
// }
// console.log(sayHello('sammy'));


// const sayHello = (name)=>{
//     return 'Hey' + name + '!'
// }
// console.log(sayHello('sammy'));


// const sayHello = (name)=>`Hey ${name} !`
// console.log(sayHello('sammy'));


const todos = [{
    title: 'Buy Bread',
    isDone: false,
},{
    title: 'Go to Gym',
    isDone: false,
},{
    title: 'dance',
    isDone: false,
}];

const thingsDone = todos.filter(todo=>todo.isDone === false);
console.log(thingsDone);


// const camera = {
//     price:600,
//     weight:2000,
//     myDes: function(){
//         return `this camera is of ${this.price}`
//     }
// }
// console.log(camera.myDes());
