document.addEventListener("DOMContentLoaded", () => {
    const bannerVideo = document.getElementById("background-banner-video");
    const misionVisionVideo = document.getElementById("background-mision-vision");

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbarMobile = document.querySelector('.navbar-mobile');
    const closeMenu = document.querySelector('.close-menu');
    const navLinks = document.querySelectorAll('.navbar-mobile a');


    hamburgerMenu.addEventListener('click', function () {
        navbarMobile.classList.toggle('open');
    });

    closeMenu.addEventListener('click', function () {
        navbarMobile.classList.remove('open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navbarMobile.classList.remove('open');
        });
    });

    function updateVideoSource() {
        const width = window.innerWidth;

        if (width <= 768) {
            bannerVideo.src = "assets/banner-mobile.mp4";
            misionVisionVideo.src = "assets/mision-vision-mobile.mp4";
        } else {
            bannerVideo.src = "assets/banner.mp4";
            misionVisionVideo.src = "assets/mision-vision.mp4";
        }
    }

    updateVideoSource();
    window.addEventListener("resize", updateVideoSource);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scroll({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

emailjs.init('N3KbItW9Z2WY_jTgL');
document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_b27m7sg', 'template_19b6w6f', templateParams)
        .then(() => {
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";

            const form = document.getElementById('contactForm');
            const title = document.getElementById("form-title");
            const messageSuccess = document.getElementById("success-message-container");

            form.classList.remove('fade-in');
            title.classList.remove('fade-in');
            messageSuccess.classList.remove('fade-out');
            form.classList.add('fade-out');
            title.classList.add('fade-out');
            messageSuccess.classList.add('fade-in');

            setTimeout(() => {
                form.style.display = 'none';
                title.style.display = 'none';
                messageSuccess.style.display = 'flex';
            }, 500);
        })
        .catch(err => {
            console.log(err);
        })
        ;
});

document.getElementById('restart-form').addEventListener('click', (event) => {
    event.preventDefault();
    const form = document.getElementById('contactForm');
    const title = document.getElementById("form-title");
    const messageSuccess = document.getElementById("success-message-container");

    form.classList.remove('fade-out');
    title.classList.remove('fade-out');
    messageSuccess.classList.remove('fade-in');
    form.classList.add('fade-in');
    title.classList.add('fade-in');
    messageSuccess.classList.add('fade-out');

    setTimeout(() => {
        form.style.display = 'block';
        title.style.display = 'flex';
        messageSuccess.style.display = 'none';
    }, 500);
});