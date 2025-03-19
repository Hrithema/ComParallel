document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const fullName = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Get error message elements
        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const passwordError = document.getElementById("password-error");
        const confirmPasswordError = document.getElementById("confirm-password-error");

        // Clear previous error messages
        nameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";

        let valid = true;

        // Validate Full Name
        if (!fullName) {
            nameError.textContent = "Full Name is required.";
            valid = false;
        }

        // Validate Email
        if (!email) {
            emailError.textContent = "Email is required.";
            valid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            valid = false;
        }

        // Validate Password
        if (!password) {
            passwordError.textContent = "Password is required.";
            valid = false;
        } else if (password.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters.";
            valid = false;
        }

        // Validate Confirm Password
        if (!confirmPassword) {
            confirmPasswordError.textContent = "Please confirm your password.";
            valid = false;
        } else if (password !== confirmPassword) {
            confirmPasswordError.textContent = "Passwords do not match.";
            valid = false;
        }

        // If all inputs are valid, redirect to login page
        if (valid) {
            window.location.href = "login.html";
        }
    });
});

// Function to Show/Hide Password
function togglePassword() {
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm-password");

    if (password.type === "password") {
        password.type = "text";
        confirmPassword.type = "text";
    } else {
        password.type = "password";
        confirmPassword.type = "password";
    }
}
// Show Sticky Navbar on Scroll
window.onscroll = function () {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 100) { // Show navbar after scrolling
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-100px"; // Hide it when at the top
    }
};

// Mobile Navbar Toggle
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
function scrollToCategories() {
    document.querySelector(".categories").scrollIntoView({
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const fullName = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Get error message elements
        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const passwordError = document.getElementById("password-error");
        const confirmPasswordError = document.getElementById("confirm-password-error");

        // Clear previous error messages
        nameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";

        let valid = true;

        // Validate Full Name
        if (!fullName) {
            nameError.textContent = "Full Name is required.";
            valid = false;
        }

        // Validate Email
        if (!email) {
            emailError.textContent = "Email is required.";
            valid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            valid = false;
        }

        // Validate Password
        if (!password) {
            passwordError.textContent = "Password is required.";
            valid = false;
        } else if (password.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters.";
            valid = false;
        }

        // Validate Confirm Password
        if (!confirmPassword) {
            confirmPasswordError.textContent = "Please confirm your password.";
            valid = false;
        } else if (password !== confirmPassword) {
            confirmPasswordError.textContent = "Passwords do not match.";
            valid = false;
        }

        // If all inputs are valid, redirect to login page
        if (valid) {
            window.location.href = "login.html";
        }
    });
});

// Function to Show/Hide Password
function togglePassword() {
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm-password");

    if (password.type === "password") {
        password.type = "text";
        confirmPassword.type = "text";
    } else {
        password.type = "password";
        confirmPassword.type = "password";
    }
}
// Example: Add hover effect to navbar icons
document.querySelectorAll(".nav-icon").forEach(icon => {
    icon.addEventListener("mouseover", () => {
        icon.style.transform = "scale(1.1)";
    });
    icon.addEventListener("mouseleave", () => {
        icon.style.transform = "scale(1)";
    });
});

