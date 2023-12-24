// Image Main page fancy control 
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const parallax = document.querySelector('.landing-page');
    parallax.style.backgroundPositionY = `${scrollPosition * 0.75}px`; // Adjust the multiplier for desired speed
});

document.addEventListener('DOMContentLoaded', function() {
    const reviews = document.querySelectorAll('.reviews-subs');
    const dots = document.querySelectorAll('.dot');
    let currentReviewIndex = 0;
  
    function showReview(index) {
      reviews[currentReviewIndex].classList.remove('active');
      reviews[currentReviewIndex].classList.add('transition-out');
      dots[currentReviewIndex].classList.remove('active');
  
      currentReviewIndex = index;
  
      reviews[currentReviewIndex].classList.add('active');
      reviews[currentReviewIndex].classList.remove('transition-out');
      dots[currentReviewIndex].classList.add('active');
    }
  
    function autoChangeReview() {
      showReview((currentReviewIndex + 1) % reviews.length);
    }
  
    setInterval(autoChangeReview, 15000);
  
    dots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
        if (currentReviewIndex !== index) {
          showReview(index);
        }
      });
    });
  });
  
// JavaScript
const menuIcon = document.querySelector('.menu-icon');
const hiddenMenu = document.querySelector('.hidden-menu');
const body = document.body;

menuIcon.addEventListener('click', function(event) {
  hiddenMenu.classList.toggle('show-menu');
  body.classList.toggle('no-scroll');
  event.stopPropagation();
});

document.addEventListener('click', function(event) {
  const isClickInsideMenu = hiddenMenu.contains(event.target);
  if (!isClickInsideMenu && hiddenMenu.classList.contains('show-menu')) {
    toggleMenu();
  }
});

const closeButtons = document.querySelectorAll('.close');

closeButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    toggleMenu();
    event.stopPropagation();
  });
});

function toggleMenu() {
  hiddenMenu.classList.toggle('show-menu');
  body.classList.toggle('no-scroll');
}


// Your existing smooth scroll logic
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });

      // Simulate a click in the middle of the screen
      const clickElement = document.createElement('div');
      clickElement.style.position = 'fixed';
      clickElement.style.width = '1px';
      clickElement.style.height = '1px';
      clickElement.style.top = '50%';
      clickElement.style.left = '50%';
      document.body.appendChild(clickElement);

      clickElement.click(); // Trigger the click event
      document.body.removeChild(clickElement); // Remove the temporary element
    }
  });
});



function reloadPage() {
  location.reload();
}


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // This enables smooth scrolling
  });
}



const loader = document.querySelector('#preloader')
window.addEventListener('load',function(){
  loader.style.display="none"
})




window.addEventListener('scroll',reveal);

function reveal(){
  const reveals = document.querySelectorAll('.jam')

  for (i = 0; i < reveals.length; i++){
    const winHeight = window.innerHeight;
    const revealtop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealtop < winHeight - revealPoint){
      reveals[i].classList.add('jam-active')
    } else{
      reveals[i].classList.remove('jam-active')
    }
  }
}

