// var h = document.querySelector('h1')
// var myValue = document.createTextNode('Namaskaram!')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h);


var li;
var ul = document.getElementById('list')

var addButton = document.getElementById('add')
addButton.addEventListener('click',addItem)
//output when we use addItem()

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click',deleteItem)

// ?????
function addItem(){
    // console.log('Add Button Clicked');
    var input = document.getElementById('input')
    var item = input.value
    ul = document.getElementById('list')
    var textnode = document.createTextNode(item)

    if (item === '') {
        return false
    } else {
        // create li
        li = document.createElement('li')

        // create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id','check')
        console.log(checkbox)

        // create label
        var label = document.createElement('label')
        label.setAttribute('id','item')

        //add this elemets on the web page
        console.log(label)
        label.appendChild(textnode)
        li.appendChild(label)
       // li.appendChild(checkbox)
        //ul.appendChild(li)
       // ul.appendChild(label)
       // li.appendChild(checkbox)
       // label.appendChild(textnode)
       // li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0])
        console.log(ul.insertBefore(li,ul.childNodes[4]))

        setTimeout(() => {
            li.classname = 'visuals'
        }, 2);
    }
}

function deleteItem(){
    // console.log('Delete Button Clicked');
    li=ul.children;
    // console.log(li);
     for (let index = 0; index < li.length; index++) {
    //     // const element = li[index];
    //     // console.log(element);
         while (li[index] && li[index].children[0].checked) {
          ul.removeChild(li[index])  
         }
    }
    console.log('delete Button Clicked');
}