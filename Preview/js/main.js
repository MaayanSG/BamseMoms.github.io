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
    }
  }
  (function() {
    var user_name, api_key, twitch_widget;
  
    user_name = "Varlem";
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
            "<span class='online'></span> Online! Playing: " +
              data.stream.game +
              "<span class='viewers'>Viewers: " +
              data.stream.viewers +
              "</span>"
          );
        } else {
          twitch_widget.html("<span class='offline'></span> Offline");
        }
      }
    );
  })();
  
});
