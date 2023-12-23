window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const parallax = document.querySelector('.landing-page');
    parallax.style.backgroundPositionY = `${scrollPosition * 0.75}px`; // Adjust the multiplier for desired speed
});
