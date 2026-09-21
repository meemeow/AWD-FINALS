// Burger menu for the shared nav bar. Loaded on every page.
document.addEventListener('DOMContentLoaded', function () {

    var nav = document.querySelector('nav');
    var toggle = document.querySelector('.navToggle');

    // Mark the link for the page we are on. Comparing full hrefs breaks as
    // soon as the URL is rewritten - a server dropping the .html, or '/' for
    // the home page - so compare just the file name.
    if (nav) {
        var pageName = function (url) {
            var path = String(url).split('?')[0].split('#')[0];
            var name = path.substring(path.lastIndexOf('/') + 1);
            if (name === '') {
                name = 'index.html';
            }
            if (name.indexOf('.') === -1) {
                name += '.html';
            }
            return name.toLowerCase();
        };

        var here = pageName(window.location.pathname);
        var links = nav.querySelectorAll('ul li a');
        for (var i = 0; i < links.length; i++) {
            if (pageName(links[i].getAttribute('href')) === here) {
                links[i].classList.add('active');
            }
        }
    }

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
