document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById('confirmationMessage').style.display = 'block'; // Show confirmation message
    document.getElementById('contactForm').reset(); // Reset the form fields
});
