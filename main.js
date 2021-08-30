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
    
    const target=event.target;  //btn on navbar which is clicked.
    const link=target.dataset.link;
    if (link==null)
    {
        return;
    }
    
    //console.log(event.target.dataset.link);
    //const scrollTo=document.querySelector(link);
    //scrollTo.scrollIntoView({behavior: "smooth"});
    //the name of "data-link" should be the same with the id of target section, and # should be added in front of the name.
    scrollIntoViews(link);
});

//Move to Contact section when clicking "Contactez moi".
const btnContact=document.querySelector('.home__contact');
btnContact.addEventListener('click', (event) =>{
    //const target=event.target;
    //const link=target.dataset.link;
    //const scrollTo=document.querySelector(link);
    //scrollTo.scrollIntoView({behavior: "smooth"});

    //const scrollTarget=document.querySelector('#contact');
    //scrollTarget.scrollIntoView({behavior: "smooth"});
    scrollIntoViews('#contact');
});

// Make home slowly fade to transparent as the window scrolls down.
const home=document.querySelector('.home__container');
const homeHeight=home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    //console.log(homeHeight);
    //console.log(1-window.scrollY/homeHeight);
    home.style.opacity=1-window.scrollY/homeHeight;
});




function scrollIntoViews(selector){
    const scrollTarget=document.querySelector(selector);
    scrollTarget.scrollIntoView({behavior: "smooth"});
}
