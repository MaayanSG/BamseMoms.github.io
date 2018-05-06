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
