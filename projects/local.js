localStorage.setItem('man','king');
localStorage.setItem('woman','queen');
var manu = localStorage.getItem('man');
console.log(manu);

console.log(localStorage.getItem('woman','queen'));

localStorage.setItem('man','prince')
console.log(localStorage.getItem('man'));

//localstorage.reoveitem('man)

localStorage.clear();
manu = localStorage.getItem('man')
console.log(manu);
