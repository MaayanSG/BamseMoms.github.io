$(document).ready(function(){
    /* "Hjem" i menyen */

    $(".hjem").click(function(){
        $("#om-container").hide(100)
    });
    $(".hjem").click(function(){
        $("#om-container2").hide(100)
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
        $("#gear-container").delay(150).show(500)
    });
});

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
