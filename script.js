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

    gsap.fromTo(".about-img",
  {
    x: -150,    // start further left
    opacity: 0  // invisible
  },
  {
    x: 0,       // slide to its natural place
    opacity: 1, // fade in
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-img",
      start: "top 80%",   // when image enters
      end: "top 45%",     // end point of animation
      scrub: true,        // tie animation to scroll
      markers: false      // set true if you want to debug
    }
  }
);



if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && typeof SplitType !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  const splitTypes = document.querySelectorAll('.split-text');

  splitTypes.forEach((element) => {
    const text = new SplitType(element, { types: 'chars' });

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
        markers: false,
      },
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 1,
      ease: 'power2.out',
    });
  });
} else {
  console.warn('GSAP/ScrollTrigger/SplitType not loaded; skipping animations');
}

gsap.registerPlugin(SplitText);

