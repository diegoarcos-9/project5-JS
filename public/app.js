//ClassList - Shows/gets all classes
//Contains - checks classList for specifc class
//add - add class
//remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const link2 = document.querySelector(".link2");


navToggle.addEventListener('click', function(){
    links.classList.toggle('hidden');
    link2.classList.toggle('hidden');
});