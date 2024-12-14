// from code pen

// nav animation
window.onload = function() {
    var menuButton = document.getElementById("open-menu");
    menuButton.click();
};

// flickity
document.addEventListener('DOMContentLoaded', function() {
  var elem = document.querySelector('.carousel');
  if (elem) {
      new Flickity(elem, {
          cellAlign: 'center',
          contain: true,
          autoPlay: 2500,
          wrapAround: true,
          pageDots: true,
          prevNextButtons: true,
          adaptiveHeight: true,
      });
  } else {
      console.error('Flickity carousel element not found.');
  }
});

// GSAP
document.addEventListener('DOMContentLoaded', function() {
  gsap.registerPlugin(ScrollTrigger);

  // Fade-in animation for cards
  gsap.from('.card', {
      scrollTrigger: {
          trigger: '.card', // Element to trigger animation
          start: 'top 90%', // Trigger when the top of .card reaches 90% of viewport height
          end: 'bottom 50%', // Optional: When animation ends
          toggleActions: 'play none none none', // Play animation only on scroll down

      },
      opacity: 0, // Start with 0 opacity
      y: 50,      // Start 50px below original position
      duration: 1, // Duration of animation in seconds
      ease: 'power1.out', // Animation easing
      stagger: 0.3, // Delay between each .card animation
  });
});

// contact form
$(document).ready(function() {
  $("#contact-form").validate({
      rules: {
          name: "required",
          email: {
              required: true,
              email: true
          },
          message: "required"
      },
      messages: {
          name: "Please enter your name",
          email: "Please enter a valid email address",
          message: "Please enter your message"
      },
      submitHandler: function(form) {
          alert("Form submitted successfully!");
          form.submit();
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Typed.js Initialization
  if (document.querySelector('#typed-text')) {
      new Typed('#typed-text', {
          strings: ['Welcome to Birds and Beets!', 'Discover your next favourite meals!', 'Breakfast, lunch, coffee, and other things'],
          typeSpeed: 50,
          backSpeed: 30,
          loop: true,
          cursorChar: '|',
      });
  }
});