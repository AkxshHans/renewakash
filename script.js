// document.addEventListener('DOMContentLoaded', () => {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const fullscreenMenu = document.querySelector('.fullscreen-menu');

//     menuToggle.addEventListener('click', () => {
//         const isOpen = fullscreenMenu.classList.toggle('active');
//         menuToggle.classList.toggle('open', isOpen);
//     });

//     const slides = document.querySelector('.slides');
//     const prevButton = document.querySelector('.prev');
//     const nextButton = document.querySelector('.next');
//     const totalSlides = document.querySelectorAll('.slide').length;
//     let currentIndex = 0;

//     function updateSlidePosition() {
//         slides.style.transform = `translateX(-${currentIndex * 100}%)`;
//     }

//     prevButton.addEventListener('click', () => {
//         currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
//         updateSlidePosition();
//     });

//     nextButton.addEventListener('click', () => {
//         currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
//         updateSlidePosition();
//     });
// });







document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const fullscreenMenu = document.querySelector('.fullscreen-menu');

    // Toggle menu visibility and hamburger animation
    menuToggle.addEventListener('click', () => {
        const menuIsOpen = fullscreenMenu.classList.toggle('active'); 
        menuToggle.classList.toggle('open', menuIsOpen);

        // Accessibility improvements
        menuToggle.setAttribute('aria-expanded', menuIsOpen); // Reflects open/close state
        fullscreenMenu.setAttribute('aria-hidden', !menuIsOpen); // Hide/Show menu for screen readers
    });

    // Slideshow logic
    const slides = document.querySelector('.slides');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const totalSlides = document.querySelectorAll('.slide').length;
    let currentIndex = 0;

    function updateSlidePosition() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
        updateSlidePosition();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
        updateSlidePosition();
    });
});

