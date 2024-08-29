let navItems = document.getElementsByClassName('nav-item');
let overlayEffect = document.getElementById('overlay-effect');
let closeSection = document.getElementById('close-section');
let allSections = document.getElementsByClassName('all-section');
let heroSections = document.getElementsByClassName('hero-section');

// Convert the HTMLCollection to an Array and loop through each nav-item
Array.from(navItems).forEach(element => {
    element.addEventListener('click', () => {
        // Hide all sections
        Array.from(allSections).forEach(section => {
            section.classList.remove('all-section-show'); // Hide all sections
        });

        // Remove the current animation class if it exists
        if (overlayEffect.classList.contains('animate-up')) {
            overlayEffect.classList.remove('animate-up');
            // Force reflow (restarting the animation) by re-adding the class
            void overlayEffect.offsetWidth;
        }

        // Get the section to display
        let sectionId = element.getAttribute('data-section');
        let sectionToShow = document.getElementById(sectionId);

        // Add the animate-up class and show the selected section
        overlayEffect.classList.remove('animate-down');
        overlayEffect.classList.add('animate-up');
        closeSection.classList.add('close-show'); // Show the close icon
        sectionToShow.classList.add('all-section-show'); // Show the selected section
        Array.from(heroSections).forEach(section => section.classList.add('hero-hide')); // Hide hero sections
    });
});

closeSection.addEventListener('click', () => {
    if (overlayEffect.classList.contains('animate-down')) {
        overlayEffect.classList.remove('animate-down');
        // Force reflow (restarting the animation) by re-adding the class
        void overlayEffect.offsetWidth;
    }

    // Add the animate-down class and hide the content
    overlayEffect.classList.add('animate-down');
    overlayEffect.classList.remove('animate-up');
    closeSection.classList.remove('close-show'); // Hide the close icon
    Array.from(allSections).forEach(section => section.classList.remove('all-section-show')); // Hide all sections
    Array.from(heroSections).forEach(section => section.classList.remove('hero-hide')); // Show hero sections
});
