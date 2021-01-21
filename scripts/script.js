// JavaScript Document
var dropdownKnop1 = document.querySelector(".dropdown button:nth-of-type(1)");
var dropdownKnop2 = document.querySelector(".dropdown button:nth-of-type(2)");
var dropdownKnop3 = document.querySelector(".dropdown button:nth-of-type(3)");
var dropdownKnop4 = document.querySelector(".dropdown button:nth-of-type(4)");

var dropdownZelf1 = document.querySelector(".dropdown div:nth-of-type(1)");
var dropdownZelf2 = document.querySelector(".dropdown div:nth-of-type(2)");
var dropdownZelf3 = document.querySelector(".dropdown div:nth-of-type(3)");
var dropdownZelf4 = document.querySelector(".dropdown div:nth-of-type(4)");


//Java voor footer dropdown
function dropdowntoggle1() {
dropdownZelf1.classList.toggle('hiddenDropdown');
dropdownKnop1.classList.toggle('dropdownButtonActief');
}

function dropdowntoggle2() {
dropdownZelf2.classList.toggle('hiddenDropdown');
dropdownKnop2.classList.toggle('dropdownButtonActief');
}

function dropdowntoggle3() {
dropdownZelf3.classList.toggle('hiddenDropdown');
dropdownKnop3.classList.toggle('dropdownButtonActief');
}

function dropdowntoggle4() {
dropdownZelf4.classList.toggle('hiddenDropdown');
dropdownKnop4.classList.toggle('dropdownButtonActief');
}


dropdownKnop1.addEventListener('click', dropdowntoggle1);

dropdownKnop2.addEventListener('click', dropdowntoggle2);

dropdownKnop3.addEventListener('click', dropdowntoggle3);

dropdownKnop4.addEventListener('click', dropdowntoggle4);


//java dropdawn
var headerDropdown = document.querySelector('.dropdownknop');
var headerdropdownZelf = document.querySelector('.dropdownzelf');

function dropdownHeaderToggle(){
    headerdropdownZelf.classList.toggle('hidden');
}


headerDropdown.addEventListener('click', dropdownHeaderToggle);
