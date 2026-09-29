// Add your EmailJS details here after creating your EmailJS account.
const PUBLIC_KEY = "_cEUOA-nEBWSY1_dA";
const SERVICE_ID = "service_qj80mxr";
const TEMPLATE_ID = "template_puakoi4";

// Replace this with the invite link for your class WhatsApp group.
const CLASS_WHATSAPP_LINK = "https://wa.me/2348130047732";

emailjs.init({ publicKey: PUBLIC_KEY });

const form = document.getElementById("registrationForm");
const message = document.getElementById("message");
const submitButton = document.getElementById("submitButton");
const successMessage = document.getElementById("successMessage");
const classLink = document.getElementById("classLink");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // These names must match the {{names}} used in your EmailJS template.
    const emailDetails = {
        name: document.getElementById("fullName").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        level: document.getElementById("level").value,
        whatsapp_link: CLASS_WHATSAPP_LINK,
        orientation_date: "September 30, 2026",
        programme_dates: "October 5 to December 5, 2026",
        programme_details: "This is a group class preparing candidates for the DELF A1, A2, B1, and B2 examinations. The online orientation is planned for September 30, 2026. It will explain the DELF exam, why proper preparation matters, and what to expect from the intensive programme. The orientation time and joining details will be shared with participants."
    };

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    message.textContent = "Sending your registration...";

    // EmailJS sends the confirmation email using your saved email template.
    emailjs.send(SERVICE_ID, TEMPLATE_ID, emailDetails)
        .then(function () {
            form.hidden = true;
            message.textContent = "";
            classLink.href = CLASS_WHATSAPP_LINK;
            successMessage.hidden = false;

            // Give the candidate a moment to read the thank-you message.
            setTimeout(function () {
                window.location.href = "https://wa.me/2348130047732";
            }, 4000);
        })
        .catch(function () {
            message.textContent = "Sorry, we could not send your registration. Please try again or contact us by email or WhatsApp.";
            submitButton.disabled = false;
            submitButton.textContent = "Send registration";
        });
});
