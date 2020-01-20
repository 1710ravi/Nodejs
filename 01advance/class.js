class User{
    constructor(firstname,lastname,credit){
    this.firstname = firstname;
    this.lastname = lastname;
    this.credit = credit;
    }
    getFullName(){
      //  let oy = `${this.firstname} ${this.lastname} is my full name`
        let yo = `${this.firstname} ${this.middlename} ${this.lastname} is my full name`
        return yo;
    }
    editname(newname){
        const myname = newname.split(" ")
        this.firstname = myname[0];
        this.middleName = myname[1];
        this.lastname = myname[2];
    }
}

class Teacher extends User{
    constructor(firstname,lastname,credit,subject){
        super(firstname,lastname,credit)
        this.subject=subject;
    }
    getFullName(){
        return `${this.firstname} ${this.lastname} is my full name and i teach ${this.subject}`
    }
    favDrink(name){
        return `my favourite drink is ${this.name}`
    }
}
// const ravi = new User("Ravi","Karan",100);
// console.log(ravi.getFullName());
// ravi.editname("First Shubham Srivastava")
// console.log(ravi.getFullName());

const shubham = new Teacher("Shubham","Srivastava",100,"Any")
console.log(shubham.getFullName());
shubham.favDrink("cola")
