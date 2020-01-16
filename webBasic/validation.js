function myValidation(){
    let myValue = document.getElementById('myForm').value
    if (isNaN(myValue) || myValue<1 || myValue>20) {
        console.log('this is not a valid input');
        
    } else {
        console.log('validity confirmed');
        
        
    }
}


const yo = document.querySelector('#idone')
yo.textContent = 'this is not a valid input'
console.log(yo);
//try to show only the text not with the tag
