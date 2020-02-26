let startCounter = false;


$(function () {
    var controller = new ScrollMagic.Controller();

    $(document).scroll(function () {
        var $nav = $(".navbar.fixed-top");
        if($("body").hasClass("inner")){
            $nav.toggleClass('scrolled', $(this).scrollTop() > 100);
        }else{
            $nav.toggleClass('scrolled', $(this).scrollTop() > 200);
        }
    });

    counterUp();
    $(window).on('scroll', _.throttle(function() {
        counterUp();
    }, 100));




    // Header animation
    var tweenHeaderParallax = new TimelineMax();
    if($("body").hasClass("inner")){
        //inner pages
        tweenHeaderParallax.add([
            TweenMax.fromTo(".header .parallax-1", 1, {y: "-50%", x: 0, opacity:.1, scale:1}, {y: -100, x: -100, opacity:0.15, scale:1.2}),
            TweenMax.fromTo(".header .parallax-2", 1, {y: "-50%", x: 0, opacity:.1, scale:1}, {y: 100, x: 100, opacity:0.15, scale:1.4}),
        ]);
    }else{
        // index page
            tweenHeaderParallax.add([
                TweenMax.fromTo(".header .parallax-1", 1, {y: 0, x: 0, opacity:.1, scale:1}, {y: -100, x: -100, opacity:0.15, scale:1.2}),
                TweenMax.fromTo(".header .parallax-2", 1, {y: 0, x: 0, opacity:.1, scale:1}, {y: 100, x: 100, opacity:0.15, scale:1.4}),
            ]);
        
    }
    var sceneHeaderParallax = new ScrollMagic.Scene({triggerElement: ".header", duration: $('.header').height()})
        .setTween(tweenHeaderParallax)
        .offset($(window).height()/2)
        // .addIndicators({indent: 50})
        .addTo(controller);



    // footer blur animation
    setTimeout(() => {
        var tweenFooterBlur = new TimelineMax()
        .add([TweenMax.fromTo("#footer .bgcity", 1, {css:{'-webkit-filter':"blur(0px)",scale:1}},{css:{'-webkit-filter':"blur(10px)",scale:1.05}})]);
        var sceneFooterBlur = new ScrollMagic.Scene({triggerElement: "#footer", duration: $("#footer").height()*2})
        .setTween(tweenFooterBlur)
        .offset(-$("#footer").height())
        // .addIndicators({indent: 50})
        .addTo(controller);
    }, 500);


});


function counterUp() {
    if($('.counter').visible()){
        if(!startCounter){
            $('.counter').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({ countNum: $this.text()}).animate({
                countNum: countTo
                },
                {
                duration: 2000,
                easing:'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
                });  
            });
            startCounter = true;
        }
    }
};








