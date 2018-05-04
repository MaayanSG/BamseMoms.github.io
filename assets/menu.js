$(document).ready(function(){
    /* "Hjem" i menyen */

    $(".hjem").click(function(){
        $("#om-container").hide(100)
    });
    $(".hjem").click(function(){
        $("#om-container2").hide(100)
    });
    $(".hjem").click(function(){
        $("#om-container3").hide(100)
    });
    $(".hjem").click(function(){
        $("#om-container4").hide(100)
    });
    $(".hjem").click(function(){
        $("#gear-container").hide(100)
    });
    $(".hjem").click(function(){
        $("#index-stream").delay(150).fadeIn(500)
    });
    /* "Om" i menyen */

    $(".om").click(function(){
        $("#index-stream").hide(100)
    });
    $(".om").click(function(){
        $("#gear-container").hide(100)
    });
    $(".om").click(function(){
        $("#om-container").delay(150).show(500)
    });
    $(".om").click(function(){
        $("#om-container2").delay(150).show(500)
    });
    $(".om").click(function(){
        $("#om-container3").delay(150).show(500)
    });
    $(".om").click(function(){
        $("#om-container4").delay(150).show(500)
    });


    /* "Gear" i menyen */

    $(".gear").click(function(){
        $("#index-stream").hide(100)
    });
    $(".gear").click(function(){
        $("#om-container").hide(100)
    });
    $(".gear").click(function(){
        $("#om-container2").hide(100)
    });
    $(".gear").click(function(){
        $("#om-container3").hide(100)
    });
    $(".gear").click(function(){
        $("#om-container4").hide(100)
    });
    $(".gear").click(function(){
        $("#gear-container").delay(150).show(500)
    });
});

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
