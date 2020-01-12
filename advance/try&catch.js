const convertToRs = (dollar) => {
    if(typeof dollar === "number"){
        return dollar * 64
    }else{
        // throw Error("Amount should be in number")

    //    if we use throw then the program crashes an if we use the return then there is no problemwithv the program


        return ("Fault")
    }
}


const myValue =convertToRs("five")

console.log(myValue);
// try{
//     const myValue =convertToRs("five")

//     console.log(myValue);
    
// }catch(error){
// console.log(error);

// }


console.log("IF system crashes then this message will showed up");
