document.addEventListener("DOMContentLoaded", () => {
    // Check if consent is already given
    const consentGiven = localStorage.getItem("cookieConsent");

    // If not, show the consent popup
    if (!consentGiven) {
        document.getElementById("cookieConsent").style.display = "block";
    }

    // Add event listener to the button
    document.getElementById("acceptCookies").addEventListener("click", () => {
        // Set consent in local storage
        localStorage.setItem("cookieConsent", "true");

        // Hide the consent popup
        document.getElementById("cookieConsent").style.display = "none";
    });
});
