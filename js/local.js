var vid = document.getElementById("banner");

$(document).ready(function(){
    //video skip button
    setTimeout(function(){

        $('#skipIntro').addClass('slow');

    }, 3000);

    //video sound
    $('#sound').click(function(){
        

        if($(this).hasClass('off')){

            $(this).removeClass('off').addClass('on');
            vid.muted = false;

        } else {

            $(this).removeClass('on').addClass('off');
            vid.muted = true;

        }
   });


   //menu toggle
    $('#toggle').on('click', function(){
        $('body').addClass('open');
    });
    $('#close').on('click', function(){
        $('body').removeClass('open');
    });


    //skip video
    $('#skipIntro').click(function(){
        $('.video-banner-area').css('transform', 'translate(0, -100%)');
        $('.custom-header').addClass('video-skiped');
        $('html').addClass('overeflow-none');
        $('body').addClass('overeflow-none');
    });

    if (window.matchMedia("(max-width: 767px)").matches) {
        controller = controller.destroy( true );
    }
    
    $('.section-slider').slick({
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false,
        fade: true,
        cssEase: 'linear'
    });

});



$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        .fromTo("section.panel.about-us", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
        .fromTo("section.panel.contact-section",    1, {x:  "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from right

    // create scene to pin and link animation
    new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "1000%"
        })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);


        if (window.matchMedia("(max-width: 767px)").matches) {
            controller = controller.destroy( true );
        }
});

