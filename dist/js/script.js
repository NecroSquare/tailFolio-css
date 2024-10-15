// Navbar Foxed
window.onscroll = function(){
    const header = document.querySelector('header')
    const fixNav = header.offsetTop
    const back = document.querySelector('#back')
    
    console.log('Window Y offset:', window.scrollY) // Check the scroll position
    
    if(window.scrollY > fixNav) {
        header.classList.add('nav-fix')
        back.classList.remove('hidden')
        back.classList.add('flex')
    }else {
        header.classList.remove('nav-fix')
        back.classList.add('hidden')
        back.classList.remove('flex')
    }
    
    }
    
// Ham-Active
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('ham-active')
    navMenu.classList.toggle('hidden')
})

// When click outside the menu, it will be hidden
window.addEventListener('click', function(e){
    if(e.target != hamburger && e.target != navMenu){
    hamburger.classList.remove('ham-active')
    navMenu.classList.add('hidden')
    }
});

const checkbox = document.querySelector
    ('#toggle')
    const html = document.querySelector('html')

    checkbox.addEventListener('click', function() {
        checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark')
    })





