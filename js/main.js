const handBurger = document.querySelector('nav');
const cancelIcon = document.querySelector('.cancel-icon');
const navPage = document.querySelector('#navbar');


handBurger.addEventListener('click', ()=>{

    navPage.classList.toggle('for-js');


});
cancelIcon.addEventListener('click', ()=>{

    navPage.classList.toggle('for-js');


});