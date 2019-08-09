const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const burguer = document.querySelector('.burguer');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(
    hero,
    1, 
    {height: "0%"}, 
    {height : "90%" , ease: Power2.easeInOut}
).fromTo(
    hero, 
    1.2, 
    {width: '100%'}, 
    {width: '95%', ease: Power2.easeInOut}
)
.fromTo(
    slider, 
    1.2, 
    {x: "-100%"}, 
    {x: '0%' , ease: Power2.easeInOut}, "-=");