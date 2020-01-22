// const sayHello = function(name){
//     return "my name is" + name + "!"
// }
// console.log(sayHello("ravi"));

// const sayHello = (name)=>{ "my name is" + name + "!"}
// console.log(sayHello("ravi"));

// const sayHello = (name)=>`my name is ${name}`
// console.log(sayHello("ravi"));

const todos = [{
    title: 'jal',
    isGood: true,
},{
    title:'agni',
    isGood:true,
},{
    title:'aakash',
    isGood:true,
},{
    title:'vayu',
    isGood:true,
},{
    title:'bhumi',
    isGood:true,
}]

const mahabhutas = todos.filter((ravi)=>(ravi.isGood===true))
const yo = console.log(mahabhutas);
console.log(yo.title);

