// Burger menu for the shared nav bar. Loaded on every page.
document.addEventListener('DOMContentLoaded', function () {

    var nav = document.querySelector('nav');
    var toggle = document.querySelector('.navToggle');

    if (!nav || !toggle) {
        return;
    }

    function setMenu(open) {
        if (open) {
            nav.classList.add('open');
        } else {
            nav.classList.remove('open');
        }
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    toggle.addEventListener('click', function (event) {
        event.stopPropagation();
        setMenu(!nav.classList.contains('open'));
    });

    // tapping anywhere else closes the menu
    document.addEventListener('click', function (event) {
        if (nav.classList.contains('open') && !nav.contains(event.target)) {
            setMenu(false);
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            setMenu(false);
        }
    });

    // going back to a desktop width shows the full list again
    window.addEventListener('resize', function () {
        if (window.innerWidth > 900) {
            setMenu(false);
        }
    });
});
