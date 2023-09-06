'use strict';

document.querySelector('.burger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    
});



//to do list
let btnAdd = document.querySelector(".btn");
let inputElementToDo = document.querySelector(".input-form");
let ulElementToDo = document.querySelector(".ul-list");
let clearBtn = document.querySelector(".clearList");


btnAdd.addEventListener('click',function() {
    // 1. get input value
let valueInput = inputElementToDo.value;

    // 2.input value in li - ul
let li = document.createElement("li");

    //წაშლის ღილაკი
let btnDelete = document.createElement('button');
btnDelete.textContent = "Delete this Item";
btnDelete.addEventListener("click", function () {
    li.remove();
});

li.textContent = valueInput;
li.appendChild(btnDelete);

ulElementToDo.appendChild(li);

    // 3. clear input
inputElementToDo.value = ' ';

})

clearBtn.addEventListener("click", function () {
ulElementToDo.innerHTML = " ";
});


