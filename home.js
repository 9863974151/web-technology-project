// JavaScript to validate form and show response message
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const responseMessage = document.getElementById('response-message');

    // Basic validation
    if (name === '' || email === '' || message === '') {
        responseMessage.style.color = 'red';
        responseMessage.textContent = 'Please fill out all fields.';
        return false;
    }

    // Successful form submission message
    responseMessage.style.color = '#28a745';
    responseMessage.textContent = 'Your message has been sent successfully!';
    document.getElementById('contact-form').reset(); // Reset the form
    return false; // Prevent form from reloading the page
}
