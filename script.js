// <!-- Hide scrollbar -->

const setNavHeightVar = () => {
    const nav = document.getElementById('navbar');
    const navHeight = nav ? nav.offsetHeight : 120;
    document.documentElement.style.setProperty('--nav-h', `${navHeight}px`);
};
setNavHeightVar();
window.addEventListener('resize', setNavHeightVar);

document.addEventListener('keydown', function(e) {
    if (e.key === 'm' || e.key === 'M') {
        const hamburger = document.querySelector('.ham');
        if (hamburger) hamburger.classList.toggle('active');
        toggleMobileMenu();
    }
});

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.ham');

    if (mobileMenu.classList.contains('hidden')) {
        // Show
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
        hamburger.classList.add('active');
    } else {
        // Hide
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        hamburger.classList.remove('active');
    }
}

// Add event listener when page loads
document.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded, mobile menu script ready');
});

// GSAP ANIMATION

const hoodieImg = document.querySelector("section img");


    // Timeline for just the image
    gsap.fromTo(hoodieImg,
        { scale: 0.7, opacity: 0, y: 100 },
        {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "section",
                start: "top top",
                end: "bottom top",
                scrub: 2,   // smooth scroll animation
                pin: true   // keep section fixed while animating
            }
        }
    );

    gsap.from(".about-img", {
        x: -150,
        opacity: 0,
        duration: 1.4,                // slightly longer entrance
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about-img",
            start: "top 85%",
            toggleActions: "play none none none",
            onEnter: () => {
                // Smooth boomerang overshoot + spin
                gsap.to(".about-img", {
                    x: 60,                  // overshoot right
                    rotateY: 20,            // slight 3D twist
                    duration: 0.9,          // smoother timing
                    ease: "sine.inOut",     // softer easing
                    yoyo: true,
                    repeat: 1
                });
            }
        }
    });