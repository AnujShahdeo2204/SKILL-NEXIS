const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const userMessage = document.getElementById("message").value.trim();

    if (name === "") {
        message.textContent = "Please enter your name.";
        return;
    }

    if (email === "") {
        message.textContent = "Please enter your email.";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email.";
        return;
    }

    if (userMessage === "") {
        message.textContent = "Please enter your message.";
        return;
    }

    message.textContent = "Form submitted successfully!";
    form.reset();
});