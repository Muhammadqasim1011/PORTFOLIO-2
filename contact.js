const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Gather form data and convert it to a JSON object
    const formData = new FormData(form);
    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    // Show a loading message
    result.innerHTML = "Please wait...";

    // Send form data to Web3Forms
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status === 200) {
            // Success message
            result.innerHTML = "Form submitted successfully";
        } else {
            // Error message from Web3Forms
            result.innerHTML = json.message;
        }
    })
    .catch(error => {
        // Network error or other issues
        console.error('Error:', error);
        result.innerHTML = "Something went wrong!";
    })
    .then(() => {
        // Reset the form after submission
        form.reset();

        // Hide the result message after 3 seconds
        setTimeout(() => {
            result.style.display = "none";
        }, 3000);
    });
});
