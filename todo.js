var addButton = document.getElementById("add");
addButton.addEventListener('click',addItem)

var removeButton =document.getElementById("remove");
removeButton.addEventListener('click',removeItem)

var removeAllbutton = document.getElementById("remove_all");
removeAllbutton.addEventListener('click',removeallItem);

var ul = document.getElementById("list")
var li;


function addItem(){
    var input = document.getElementById('name');
    var item = input.value;
    
    ul = document.getElementById('list')
    var textnode = document.createTextNode(item)

if(item === '')
return false

else
{
    //create li
li= document.createElement('li') ;

//create checkbox
var checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.setAttribute('id','check');

//create label
var label = document.createElement('label');
label.setAttribute('for','item')//optional

//add these elements on web page
//ul.appendChild(label);

li.appendChild(checkbox);
label.appendChild(textnode);
li.appendChild(label);
ul.insertBefore(li,ul.childNodes[0]);
li.className = 'visual';
input.value = ""
}
}

function removeItem()
{
 li = ul.children
 for (let index = 0; index < li.length; index++) {
     while(li[index] && li[index].children[0].checked)
     ul.removeChild(li[index]);
 }
}

function removeallItem()
{
    li = ul.children
    console.log("remove all is clicked")
    for (index = 0; index < li.length; index++) {
        //Method 2
        //ul.remove() --if we use this we are unable to add new todo
        //Method 1
        while (li[index]) {
            ul.removeChild(li[index])
        }
    }
 }        
 
