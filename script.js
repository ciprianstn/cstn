const hamburger = document.getElementById('hamburger-icon');
const ul = document.getElementById('nav-ul');
const dark = document.getElementById('dark');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const body = document.getElementById('body');
const hamburgerLines = document.getElementById('hamburger-lines');
const bio = document.getElementById('name');
const linknav1 = document.getElementById('linknav1');
const linknav2 = document.getElementById('linknav2');
const linknav3 = document.getElementById('linknav3');
const gitlink = document.getElementById('gitlink');
const contact = document.getElementById('contact');



hamburger.addEventListener('click', () => {
    ul.classList.toggle('show');
});

let menuOpen = false;
hamburger.addEventListener('click', () => {
    if (!menuOpen) {
        hamburger.classList.add('open');
        menuOpen = true;
    } else {
        hamburger.classList.remove('open');
        menuOpen = false;
    }
});

dark.addEventListener('click', () => {
    body.classList.toggle('lighttheme');
    moon.classList.toggle('moonshow');
    sun.classList.toggle('sunhide');
    gitlink.classList.toggle('linklight');
    hamburgerLines.classList.toggle('hamburgerLinesLight');
    bio.classList.toggle('namelight');
    linknav1.classList.toggle('linklight');
    linknav2.classList.toggle('linklight');
    linknav3.classList.toggle('linklight');
    contact.classList.toggle('contactborder');
})