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

    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        alert("Message sent successfully!");
        window.location.reload();
    });
}

document.getElementById('gcash').addEventListener('click', function() {
    var gcashqr = document.getElementById('gcashqr');
    var gcashText = this.getElementsByTagName('p')[0];

    if (gcashqr.style.display === 'none') {
        gcashqr.style.display = 'block';
        gcashText.style.display = 'none';
        this.classList.add('expanded');
    } else {
        gcashqr.style.display = 'none';
        gcashText.style.display = 'block';
        this.classList.remove('expanded');
    }
});

document.querySelector('.faq.gcash').addEventListener('click', function() {
    this.classList.toggle('active');
});
