<<<<<<< HEAD
let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
    addMeeting: function(num){
        this.meetings=this.meetings+num;
        
    },
    summary: function(){
        return `you have ${this.meetings} meetings`
    },
}

myTodos.addMeeting(4)
console.log(myTodos.summary());

=======
let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
    addMeeting: function(num){
        this.meetings=this.meetings+num;
        
    },
    summary: function(){
        return `you have ${this.meetings} meetings`
    },
}

myTodos.addMeeting(4)
console.log(myTodos.summary());

>>>>>>> 17c9752c757c3948407c8d272914859cf8bfbf6b
