const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// when we click on hamburger icon its close 

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
// const navbarLinks = document.querySelectorAll('nav') [0];

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// window.addEventListener('scroll', () => {
//     console.log(window.scrollY);
//     if(window.scrollY > 1) {
//         navbarLinks.classList.replace('bg-transparent', 'nav-color');
//     } else if(window.scrollY < 0) {
//         navbarLinks.classList.replace('nav-color', 'bg-transparent');
//     }
// })
function toggleRole() {
    const titleElement = document.getElementById('role-title');
    const descriptionElement = document.getElementById('role-description');

    if (titleElement.textContent === 'Front-End Developer.') {
        titleElement.textContent = 'Web Developer.';
        descriptionElement.textContent = 'Web Developer.';
    } else {
        titleElement.textContent = 'Front-End Developer.';
        descriptionElement.textContent = 'Front-End Developer.';
    }
}

// Toggle the role every 3 seconds (3000 milliseconds)
setInterval(toggleRole, 3000);

// email



