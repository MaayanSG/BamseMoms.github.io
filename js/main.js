$(document).ready(function() {

  // Toggles hidden class for nav dropdown menu
  $('#menu').on('click', function() {
    $(this).next('div').slideToggle('slow');
  });

  // Animates opacity on page load
  $('body').animate({
    opacity: 1
  }, 1500);

  // Nav links scrolling animations
  $("#main-nav").on('click', function(e) {
    animateScroll(e);
  });

  $(".menu-dropdown").on('click', function(e) {
    animateScroll(e);
  });

  function animateScroll(e) {
    if (e.target.text === 'Om Meg' || e.target.text === 'Kalender') {
      $('html, body').animate({
        scrollTop: $("#about-schedule").offset().top
      }, 2000);
    } else if (e.target.text === 'Kontakt') {
      $('html, body').animate({
        scrollTop: $("#contact").offset().top
      }, 2000);
    } else if (e.target.text === 'Kontakt') {
      $('html, body').animate({
        scrollTop: $("#contact").offset().top
      }, 2000);
    }
  }

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="tid"
  document.getElementById("tid").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("tid").innerHTML = "EXPIRED";
  }
}, 1000);

  // scroll to top
  document.querySelector('.js-scroll-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
  });
});
