<<<<<<< HEAD
// alert('Wait')
// console.log(document.title);
// document.title = 'changed';
// console.log(document.getElementById('idone'));
// console.log(document.getElementsByClassName('classone'));
// const element = document.querySelector('#idone')
// const element2 = document.querySelectorAll('p');
// console.log(element[0]);

// console.log(element);
// console.log(element2);

// const myPElement = document.querySelector('p')
// myPElement.textContent = 'I am changed'

const myPElement = document.querySelectorAll('p')
myPElement.forEach(function(p){
    p.textContent = 'I am changed using looping in JS'
    // p.remove to delete all selected elements
});


const myPara = document.createElement('h1')
myPara.textContent = 'I am changed by JS'
document.querySelector('body').appendChild(myPara)

document.querySelector('button').addEventListener('click',(event)=>{
    // console.log('button was pressed');
    console.log(event);
    event.target.textContent = 'I was clicked!'
//target and event
})

// document.querySelector('#myForm').addEventListener('change',()=>{
document.querySelector('#myForm').addEventListener('input',()=>{
    console.log(event.target.value);
    
})
=======
// alert('Wait')
// console.log(document.title);
// document.title = 'changed';
// console.log(document.getElementById('idone'));
// console.log(document.getElementsByClassName('classone'));
const element = document.querySelector('#idone')
const element2 = document.querySelectorAll('p');
console.log(element[0]);

console.log(element);
console.log(element2);

>>>>>>> 17c9752c757c3948407c8d272914859cf8bfbf6b
