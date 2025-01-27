// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display the response message
    const responseMessage = `
        <h3>Thank you for contacting us, ${name}!</h3>
        <p>We have received your message:</p>
        <blockquote>
            <strong>Message:</strong> ${message}
        </blockquote>
        <p>We will get back to you at <strong>${email}</strong> soon.</p>
    `;
    
    document.getElementById("responseMessage").innerHTML = responseMessage;
    
    // Optionally, clear the form fields
    document.getElementById("contactForm").reset();
});
