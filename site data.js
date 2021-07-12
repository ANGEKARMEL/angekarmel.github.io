const titreSpans = document.querySelectorAll('h2 span');
const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const floating = document.querySelectorAll('floating-btn');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(animation, 1, {opacity: 0, ease: "power2.out"}, 0.0, '-=1')
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 3.0)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1')
    .staggerFrom(floating, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1');

    
    

    TL.play();
})