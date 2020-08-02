document.getElementById("todo").focus();

document.write(`<h1> My To Do List`);

console.log("To Do List");

window.onload = function(){
    if(JSON.parse(localStorage.getItem("myList")!= null)){
        
        let ilst = JSON.parse(localStorage.getItem("myList"))

        for(let i=0; i<ilst.length; i++){

            let text = document.createTextNode(ilst[i]);

            lst.push(ilst[i]);
    
            let listItem = document.createElement('li');

            listItem.appendChild(text);
        
            list.appendChild(listItem);
        }

    }
    
    document.forms.myForm.reset();
    console.log(lst);
}

const button1 = document.querySelector('#btn1');

const button2 = document.querySelector('#btn2');

var list = document.querySelector('#list');

var lst = [];

var input = document.getElementById("todo");

input.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
     event.preventDefault();
    }
  });

button1.onclick = function(){
    let item = document.querySelector("#todo").value;
    
    lst.push(item);

    let text = document.createTextNode(item);
    
    let listItem = document.createElement('li');

    listItem.appendChild(text);

    list.appendChild(listItem);

    window.localStorage.setItem("myList",JSON.stringify(lst))

    console.log(lst);

    document.forms.myForm.reset();
    document.getElementById("todo").focus();
}

button2.onclick = function(){
    
    num = prompt("Enter the number of the item: ");

    var list = document.getElementById("list");

    list.removeChild(list.childNodes[num]);

    lst.splice(num-1,1);

    localStorage.setItem("myList",list);

    document.forms.myForm.reset();
    document.getElementById("todo").focus();

    window.localStorage.setItem("myList",JSON.stringify(lst))

    console.log(lst);
}

const ctime = document.getElementById('time');            

function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
    time.fontsize = 30;
}
setInterval(clock,1000);