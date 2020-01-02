const days = ['mon','tue','wed','thu','fri','sat'];

days.forEach(function(day,index){
    console.log(`the starting is ${day} -- ${index+1}`);
})

// at the place of day we can write anythinf because day only works as the caller or the keyword to call elements from the array
// index is simply used as index in the array


const ToDo = ['wake up','meditate','study','bath'];

ToDo.forEach(function(work,index){
     console.log(`${index+1} to ${work}`);
})