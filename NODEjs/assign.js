
let myGrade = function(marks,totalMarks){
    let myPercent = (marks/totalMarks)*100;
    let Got = '';
        if (myPercent>=90){
        Got = 'A';}
        else if(myPercent>=80){
        Got = 'B';}
        else{
        Got = 'C';}

        return Got;
}
let yourResult = myGrade(92,100);
console.log(yourResult);

