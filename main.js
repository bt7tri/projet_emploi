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

//Show "arrow up" button when scrolling down.
const arrowUp=document.querySelector('.arrow-up');
document.addEventListener('scroll', () =>{
    if (window.scrollY > homeHeight/2)
    {
        arrowUp.classList.add('visible');
    }
    else
    {
        arrowUp.classList.remove('visible');
    }
});

//Handle click on the "arrow-up" button
arrowUp.addEventListener('click', () => {
    scrollIntoViews('#home');
});

function scrollIntoViews(selector){
    const scrollTarget=document.querySelector(selector);
    scrollTarget.scrollIntoView({behavior: "smooth"});
}

//Projects
const workBtnContainer=document.querySelector('.work__categories');
const projectContainer=document.querySelector('.work__projects');
const projects=document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e)=>{
    const filter=e.target.dataset.filter || e.target.parentNode.dataset.filter;
    //console.log(filter);

    if (filter==null)
    {
        return;
    }
    
    //Remove previous selection from the previous item and select the new one.
    const active=document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    
    const target=e.target.nodeName==="BUTTON" ? e.target :
                 e.target.parentNode;
    target.classList.add('selected');

    

    projectContainer.classList.add('animation-out');

    //console.log('----------------');
    
      

        
    setTimeout(()=>{

        projects.forEach((project)=>{
            //console.log(project);
            //console.log(project.dataset.type);
    
            if(filter==='*' || filter===project.dataset.type)
            {
                project.classList.remove('invisible');
            }
            else
            {
                project.classList.add('invisible');
            }  
        });
        
        projectContainer.classList.remove('animation-out');
    }, 300);


    

    /* 
    console.log('----------------');
    for (let project of projects){
        console.log(project);
    }

    console.log('----------------');
    for (let i=0; i<projects.length; i++){
        const project=projects[i];
        console.log(project);
    }
    */

});