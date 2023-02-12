//variable for button and navbar
const buttonMobile = document.getElementById('buttonMobile');
const nav = document.getElementById('nav');
var dropdownButton = document.getElementById('dropdownButton');
var dropdownMenu = document.getElementById('dropdown-menu');

//click event listener
buttonMobile.addEventListener ('click', function() {
  buttonMobile.classList.toggle('on');
  nav.classList.toggle('nav-on');
});

