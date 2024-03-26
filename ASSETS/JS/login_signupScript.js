window.onload = function() {
    var navLinks = document.querySelectorAll("nav ul li a");
    var logo = document.querySelector("nav img");

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function() {
            // Remove 'active' class from all links
            for (var i = 0; i < navLinks.length; i++) {
                navLinks[i].classList.remove('active');
            }
            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    }

    logo.addEventListener("click", function() {
        // Remove 'active' class from all links
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('active');
        }
        // Assuming the "Home" link is the first link in the nav
        navLinks[2].classList.add('active');
    });

    // Loop through all links
    for (var i = 0; i < navLinks.length; i++) {
        // If the current href matches the current URL
        if (navLinks[i].href === window.location.href) {
            // Add the 'active' class
            navLinks[i].classList.add('active');
        }
    }
}


// Get the buttons and forms
var loginButton = document.getElementById('login-button');
var signupButton = document.getElementById('signup-button');
var loginForm = document.getElementById('login-form');
var signupForm = document.getElementById('signup-form');

// Set the initial active button and form
loginButton.classList.add('active');
loginForm.style.display = 'block';
signupForm.style.display = 'none';

// Add event listeners
loginButton.addEventListener('click', function() {
    loginButton.classList.add('active');
    signupButton.classList.remove('active');
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
});

signupButton.addEventListener('click', function() {
    signupButton.classList.add('active');
    loginButton.classList.remove('active');
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
});
