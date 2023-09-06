'use strict';

//burger bar
let navBar = document.getElementById('navBar');
let burgerBar = document.getElementById('burgerBar');
let navDiv = document.getElementById('navDiv');

burgerBar.addEventListener('click', function() {
    navBar.classList.toggle('activeNav');
    burgerBar.classList.toggle('active');
    navDiv.classList.toggle('mobActive');
})



//to do list
let btnAdd = document.querySelector(".btn");
let inputElementToDo = document.querySelector(".input-form");
let ulElementToDo = document.querySelector(".ul-list");
let clearBtn = document.querySelector(".clearList");
let form = document.querySelector('.form-wraper');

form.addEventListener('submit',function(event) {
    event.preventDefault();
    // 1. get input value
let valueInput = inputElementToDo.value;

if (valueInput == " ") {
    return;
    }

    // 2.input value in li - ul
let li = document.createElement("li");

    //წაშლის ღილაკი
let btnDelete = document.createElement('i');

btnDelete.classList.add('fa-solid', 'fa-delete-left');

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


