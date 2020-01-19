var addInput = document.getElementById("input").value;

function addNodefun(){
    var ele =document.createElement('input');
    var addEle=document.getElementById('list').appendChild(ele);
    console.log("clicked");
}

var addButt=document.getElementById('add');
addButt.onClick = addNodefun();