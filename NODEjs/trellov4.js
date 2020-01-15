const myTodos = ['Buy Bread','Go To Gym','Dance'];
// console.log(myTodos.indexOf('Buy Bread'));

const newTodos = [{
    title: 'Buy Bread',
    isDone: false,
},
   { title: 'Go to Gym',
    isDone: false,
},{
    title: 'Dance',
    isDone: true,
},]

// const index = newTodos.findIndex(function(todo,index){
//    console.log(todo);
//    return todo.title === 'Go to Gym'
// })
// console.log(index);

// const findTodo = function(myTodos,title){
//     const index = myTodos.findIndex(function(todo,index){
//         return todo.title.toLowerCase()===title.toLowerCase()
//     })
//     return myTodos[index]
// }
// let printMe = findTodo(newTodos,'Go To gym')
// console.log(printMe);

const findTodo = function(myTodos,title){
    return myTodos.find(function(ravi){
        return ravi.title.toLowerCase()===title.toLowerCase()
    })
}



console.log(findTodo(newTodos,'dance'));