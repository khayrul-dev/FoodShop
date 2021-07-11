const hambarger = document.querySelector('.hambarger');
const navbar = document.querySelector('.navbar .nav');
hambarger.addEventListener('click', function(){
    navbar.classList.toggle('show')
})