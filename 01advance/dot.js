function deposit(...money){
    console.log(money);
    let balance = 0;
    for (let index = 0; index < money.length; index++) {
         balance +=  money[index];
        
    }
    return balance;
}

console.log(deposit(100,90,80,70,60,50));

let addMoney = [20,40,30,20,10];
console.log(...addMoney);
console.log(Math.max(...addMoney));

