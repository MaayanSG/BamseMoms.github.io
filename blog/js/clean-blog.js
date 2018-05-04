(function($) {
  "use strict"; // Start of use strict

  // Floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

  // Show the navbar when the page is scrolled up
  var MQL = 992;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('#mainNav').height();
    $(window).on('scroll', {
        previousTop: 0
      },
      function() {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
          //if scrolling up...
          if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
            $('#mainNav').addClass('is-visible');
          } else {
            $('#mainNav').removeClass('is-visible is-fixed');
          }
        } else if (currentTop > this.previousTop) {
          //if scrolling down...
          $('#mainNav').removeClass('is-visible');
          if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
        }
        this.previousTop = currentTop;
      });
  }

})(jQuery); // End of use strict

/* auto scale */

        function getViewportWidth() {
            if (window.innerWidth) {
                return window.innerWidth;
            }
            else if (document.body && document.body.offsetWidth) {
                return document.body.offsetWidth;
            }
            else {
                return 0;
            }
        }

        function getViewportHeight() {
            if (window.innerHeight) {
                return window.innerHeight;
            }
            else if (document.body && document.body.offsetHeight) {
                return document.body.offsetHeight;
            }
            else {
                return 0;
            }
        }

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            var actual_width = getViewportWidth();
            var actual_height = getViewportHeight();

            var min_width = 887;
            var min_height = 615;

            var ratio = Math.min(actual_width / min_width, actual_height / min_height);

            if (ratio < 1) {
                document.querySelector('meta[name="viewport"]').setAttribute('content', 'initial-scale=' + ratio + ', maximum-scale=' + ratio + ', minimum-scale=' + ratio + ', user-scalable=yes, width=' + actual_width);
            }
        }

        alert(document.querySelector('meta[name="viewport"]').getAttribute('content'));
