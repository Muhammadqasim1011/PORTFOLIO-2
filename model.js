function revealForm() {
    let messageBox = document.getElementById('message-box');
    let body = document.body;

    if (messageBox.classList.contains('reveal')) {
        messageBox.classList.remove('reveal');
        body.style.overflow = 'auto'; // Allow scrolling again
    } else {
        messageBox.classList.add('reveal');

        // Scroll to the top of the window before hiding the form
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Adds a smooth scrolling animation
        });

        body.style.overflow = 'hidden'; // Disable scrolling while the form is revealed
    }
}

function closeForm() {
    let messageBox = document.getElementById('message-box');
    let body = document.body;

    if (messageBox.classList.contains('reveal')) {
        messageBox.classList.remove('reveal');
        body.style.overflow = 'auto'; // Re-enable scrolling when the form is closed
    }
}
