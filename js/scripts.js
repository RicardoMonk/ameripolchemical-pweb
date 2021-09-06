//this code work to give it style to menu icon

var MenuIcon = document.getElementById('menu-icon');
var show = document.getElementById('menu');

MenuIcon.addEventListener('click', function(){
    this.classList.toggle("close");
    show.classList.toggle("show");
})