const elHeader =document.querySelector('.site-header') 
const elNavToggler =document.querySelector('.js-nav-toggler')

elNavToggler.addEventListener('click', function() {
    elHeader.classList.toggle('site-header--active')
})