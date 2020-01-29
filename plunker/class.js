class driver{
    constructor(name){
        this.name = name;
    }
    get myName(){
        return this.name;
    }
    set myName(val){
        if(val.length>5){
            this.name = val;
        }
    }
}

let  drive = new driver("ravi");
console.log(drive.myName);
drive.myName = "ravikaran srivastava";
console.log(drive.myName);

