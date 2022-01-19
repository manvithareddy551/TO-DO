let todoInput=document.querySelector("#todo-input");
let todoButton=document.querySelector("#todo-button");
let todoContainer=document.querySelector(".todo-container");

todoButton.addEventListener("click",addItem);
todoContainer.addEventListener("click",processItem);
function addItem(event){
    event.preventDefault();
    let val=todoInput.value;

 let todoItem=document.createElement('div');
 todoItem.classList.add("todo-item");

 let todoContent=document.createElement('div');
 todoContent.classList.add("todo-content");
 todoContent.innerText=val;

 let todoComplete=document.createElement('button');
 todoComplete.classList.add("todo-complete");
 todoComplete.innerHTML='<i class="fa fa-check"></i>  ';


 let todoDelete=document.createElement('button');
 todoDelete.classList.add("todo-delete");
 todoDelete.innerHTML='<i class="fa fa-trash"></i>  ';

 todoItem.appendChild(todoContent);
 todoItem.appendChild(todoComplete);
 todoItem.appendChild(todoDelete);

 todoContainer.appendChild(todoItem);
}
function processItem(event){
  let buttonClass=event.target.classList[0];

  console.log(buttonClass);
 if(buttonClass=="todo-delete"){
  deleteItem(event.target);
 }
 else if(buttonClass=="todo-complete"){
     completeItem(event.target);
 }
 else if(buttonClass=="fa"){
     let parentItem=event.target.parentElement;
     if(parentItem.classList[0]=="todo-delete"){
         deleteItem(parentItem);
     }
     else
     completeItem(parentItem);
 }
}
function deleteItem(callButton){
let parentItem=callButton.parentElement;
parentItem.remove();
}

function completeItem(callButton){
    let parentItem=callButton.parentElement;
    parentItem.classList.toggle("completed");
}
