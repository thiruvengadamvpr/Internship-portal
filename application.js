document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the default form submission

    // Capture form data
    const formData = new FormData(this);
    const confirmationMessage = document.getElementById('confirmationMessage');

    // Log form data to console (dummy output)
    console.log("Form Submitted:");
    console.log("Name: " + formData.get("name"));
    console.log("Email: " + formData.get("email"));
    console.log("Phone: " + formData.get("phone"));
    console.log("College: " + formData.get("college"));
    console.log("Position: " + formData.get("position"));
    console.log("Resume: " + formData.get("resume").name);
    console.log("Cover Letter: " + formData.get("coverLetter"));

    // Simulate form submission delay (API call)
    setTimeout(() => {
        // Hide the form after submission
        this.style.display = 'none';

        // Display the confirmation message
        confirmationMessage.classList.remove('hidden');
    }, 1000); // Delay of 1 second
});
