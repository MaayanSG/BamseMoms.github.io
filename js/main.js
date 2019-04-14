
// nav bar //
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

  // Smooth scroll html //
  $(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 200) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 4000); 
        return false; 
    }); 
});

// twitch API when streamer is online //

  (function() {
    var user_name, api_key, twitch_widget;
  
    user_name = "BamseMoms";
    api_key = "5j0r5b7qb7kro03fvka3o8kbq262wwm";
    twitch_widget = $("#twitch-widget");
  
    twitch_widget.attr("href", "https://twitch.tv/" + user_name);
  
    $.getJSON(
      "https://api.twitch.tv/kraken/streams/" + 
        user_name +
        "?client_id=" +
        api_key +
        "&callback=?",
      function(data) {
        if (data.stream) {
          twitch_widget.html(
            "<span class='online'></span> Online! Playing: "+
              data.stream.game +
              "<span class='viewers'> Viewers: " + 
              data.stream.viewers +
              "</span>"
          );
        } else {
          twitch_widget.html("<span class='BamseMoms is offline'></span> BamseMoms is Offline");
        }
      }
    );
       
  // TIMER, SHOW GIVEAWAY HTML AFTER TIMER IS DONE //

    // Set the date we're counting down to
    var countDownDate = new Date("Feb 26, 2099 16:38:00").getTime();
    // Update the count down every 1 second
    var countdownfunction = setInterval(function() {
    // Get todays date and time
    var now = new Date().getTime();
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="tid"
    //document.getElementById("giveaway").innerHTML = days + "d " + hours + "h "
   // + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
    clearInterval(countdownfunction);
     document.getElementById("giveaway").innerHTML = '<div style=" text-align: center; border: 5px solid #111; border-radius: 4px; background: #2c3e50; background: -webkit-linear-gradient(to right, #BD3F32, #CB356B);"><h1> GIVEAWAY </h1><p style=" font-size: 18px; "> Det er giveaway på <span style="color: rgb(46, 127, 232)">500KR </span><br><p><a href="https://twitch.tv/BamseMoms" style=" ont-weight: bold; color: rgb(46, 127, 232); font-size: 30px;">KLIKK HER</a></p></div>';
    }
    }, 3000);
    
  })();
         
         
});


// Discord to see how many some are online <iframe style="border: none; " src="https://img.shields.io/discord/338404521682272267.svg?style=for-the-badge&label=DISCORD&message=ONLINE&color=blue"></iframe> //