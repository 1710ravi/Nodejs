const student = {
    name:'Ravi',
    age:19,
    isActive:true,
}
//convert this object into string to be store in locsl storage

const objToString = JSON.stringify(student)

console.log(typeof(objToString));

localStorage.setItem('student',objToString)

const stringToObj = JSON.parse(objToString)

console.log(typeof(stringToObj));

console.log(stringToObj.age);
