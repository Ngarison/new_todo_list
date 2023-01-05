let todo="";
let todoList=[];


//Cette crée la lise et l'affiche
function displayList(){
let html='<ul class="todolist">';
if(todoList.length!=0)
{
    todoList.map(todo =>{
        html+=`<li class="todo" onclick="removeTask(this)">${todo}</li>`;
    })
}
   html+="</ul>"
   document.getElementById("container-list").innerHTML=html;
}



//Ajoute une tache dans la liste après l'avoir saisie
function addTask(){
    todo=prompt("Entrer une tache!")
    if(todo.length!=""){
    todoList.unshift(todo);
}
    displayList();
}


function removeTask(selected_item){
    selected_item.parentNode.removeChild(selected_item);
}

