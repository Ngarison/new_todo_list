let todo = "";
let todoList = [];
let i = 0;
let k = 0;
/**
 * @param {string} name
 * @return {string|null}
 */

//Fonction pour récupérer un cookie
function getCookie(name){
    const cookies=document.cookie.split(';');
    const value = cookies
        .find(c=>c.startsWith(name))?.split('=')[1];
        if(value===undefined){
            return null;
        }
        return  decodeURIComponent(value);
}

/**
 * @param {string} name
 * @param {string} value
 * @param {number} days
 */
//Fonction pour créer un Cookie
function setCookie(name, value, days){
    const date = new Date();
    date.setDate(date.getDate + days);
    document.cookie= `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString}`;
}


function charger(){
    const cookies=document.cookie.split(';');
    while(cookies.length !=0 && k<cookies.length ){
    todoList.unshift(getCookie(("todo"+k)));

    //Ajout du style au container
    let container = document.querySelector('#ft_list');
    let style = getComputedStyle(container);

    let c_Height = parseInt(style.height);
    container.style.height = c_Height + 55 + "px";
    displayList();
    k++;

    }
    displayList();
}


//This feature create the list and display it
function displayList() {
    let i = 0;
    let html = '<ul class="todolist">';
    if (todoList.length != 0) {
        todoList.map(todo => {
            html += `<li class="todo" id="${i}" onclick="removeTask(this)">${todo}</li>`;
            i++;
        })
    }
    html += "</ul>"
    document.getElementById("container-list").innerHTML = html;

    //Add style to container-list
    document.getElementById("container-list").style.marginTop = "20px";

}


//Ajoute une tache dans la liste après l'avoir saisie
function addTask() {
    todo = prompt("Entrer une tache!")
    if (todo.length != "") {
        //creation de cookies
        setCookie("todo :"+k,todo,2);
        k++;
        //Ajout de l'élement dans le cookie
        todoList.unshift(todo);
        //Ajout du style au container
        let container = document.querySelector('#ft_list');
        let style = getComputedStyle(container);

        let c_Height = parseInt(style.height);
        container.style.height = c_Height + 55 + "px";
    }
    displayList();
}

//Fonction qui nous permet de supprimer un li à partir de son id
function removeTask(selected_item) {
    let id = parseInt(selected_item.getAttribute("id"));
    console.log(id);

    if (window.confirm("Do you really want to remove?")) {
        todoList.splice(id, 1);

        //Ajout du style au container
        let container = document.querySelector('#ft_list');
        let style = getComputedStyle(container);

        let c_Height = parseInt(style.height);
        container.style.height = c_Height - 55 + "px";
        displayList();
    }
}
//document.cookie = "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
let x = document.cookie;
console.log(x);
