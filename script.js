function changeMood() {
    let body = document.body;
    let menuBtn = document.getElementById('menu-icon');
    let imageCover = document.getElementById('mine-cover');
    let closeSection = document.getElementById('close-section');


    if (body.classList.contains('light-mode')) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');

        menuBtn.src = './Assets/menu-light.png';
        imageCover.src = './Assets/banner-02-dark.png';
        closeSection.src = './Assets/close-light.png';

        localStorage.setItem('menuSrc', './Assets/menu-light.png');
        localStorage.setItem('imageCoverSrc', './Assets/banner-02-dark.png');
        localStorage.setItem('closeSectionSrc', './Assets/close-light.png');
        localStorage.setItem('mood', 'dark-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');

        menuBtn.src = './Assets/menu-dark.png';
        imageCover.src = './Assets/banner-02-light.png'
        closeSection.src = './Assets/close-dark.png';

        localStorage.setItem('imageCoverSrc', './Assets/banner-02-light.png');
        localStorage.setItem('menuSrc', './Assets/menu-dark.png');
        localStorage.setItem('mood', 'light-mode'); // Corrected to 'light-mode'
        localStorage.setItem('closeSectionSrc', './Assets/close-dark.png');
    }
}

// Function to apply saved mood and menu icon src from localStorage
function applySavedPreferences() {

    let savedMood = localStorage.getItem('mood');
    let savedMenuSrc = localStorage.getItem('menuSrc');
    let savedImageCoverSrc = localStorage.getItem('imageCoverSrc');
    let savedCloseSectionSrc = localStorage.getItem('closeSectionSrc');

    let body = document.body;
    let menuBtn = document.getElementById('menu-icon');
    let coverImage = document.getElementById('mine-cover');

    if (savedMood) {
        body.classList.add(savedMood);
        if (savedMood === 'dark-mode') {
            body.classList.remove('light-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }

    if (savedMenuSrc) {
        menuBtn.src = savedMenuSrc;
    }

    if (savedImageCoverSrc) {
        coverImage.src = savedImageCoverSrc;
    }

    if (savedCloseSectionSrc) {
        closeSection.src = savedCloseSectionSrc;
    }
}
window.onload = applySavedPreferences;


// Show Menu Function
function showMobileMenu() {
    let menuBtn = document.getElementById('menu-icon');
    let menuItems = document.getElementById('menu-items');

    if (menuItems.classList.contains('show')) {
        menuItems.classList.remove('show');
        menuItems.classList.add('hide');
    } else {
        menuItems.classList.add('show');
        menuItems.classList.remove('hide');
    }
}

// Function to hide the menu
function hideMobileMenu() {
    let menuItems = document.getElementById('menu-items');
    if (menuItems.classList.contains('show')) {
        menuItems.classList.remove('show');
        menuItems.classList.add('hide');
    }
}

// Hide menu on click outside or scroll
document.addEventListener('click', (event) => {
    let menuBtn = document.getElementById('menu-icon');
    let menuItems = document.getElementById('menu-items');
    if (!menuBtn.contains(event.target) && !(menuItems.contains(event.target))) {
        hideMobileMenu();
    }
});

window.addEventListener('scroll', hideMobileMenu);
