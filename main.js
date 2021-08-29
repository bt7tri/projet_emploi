'use strict';

// Make navbar transparent when it is on the top
const navbar=document.querySelector('#navbar');
const navbarHeight=navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () =>{
        // console.log(window.scrollY);
        // console.log('navbarHeight: $(navbarHeight)');
        // console.log(navbarHeight);
    

        if (window.scrollY > navbarHeight)
        {
            navbar.classList.add('navbar-dark');
        }
        else
        {
            navbar.classList.remove('navbar-dark');
        }

});

// Handle scrolling when tapping on navbar menu.
const navbarMenu=document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) =>{
    
    const target=event.target;
    const link=target.dataset.link;
    if (link==null)
    {
        return;
    }
    
    //console.log(event.target.dataset.link);
    const scrollTo=document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
    //the name of "data-link" should be the same with the id of target section, and # should be added in front of the name.
    
});