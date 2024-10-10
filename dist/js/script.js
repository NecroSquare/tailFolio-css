// Navbar Foxed
window.onscroll = function(){
    const header = document.querySelector('header')
    const fixNav = header.offsetTop
    
    console.log('Window Y offset:', window.scrollY) // Check the scroll position
    
    if(window.scrollY > fixNav) {
        header.classList.add('nav-fix')
    }else {
        header.classList.remove('nav-fix')
    }
    
    }
    
// Ham-Active
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('ham-active')
    navMenu.classList.toggle('hidden')
})

const checkbox = document.querySelector
    ('#toggle')
    const html = document.querySelector('html')

    checkbox.addEventListener('click', function() {
        checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark')
    })





