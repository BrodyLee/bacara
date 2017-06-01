$(document).ready(function(){


    $('#horeca-hed').animated("animated bounceInLeft");
    $('#dealers-hed').animated("animated bounceInRight");

    $(function(){
        $(".main-nav ul li").hover(function(){
                $(".dropdown", this).css("display", "flex");
            },
            function(){
                $(".dropdown", this).css("display", "none");
            }
        );
    });

    $(function(){
        $('.why-parts').animated("fadeIn", "fadeOut");
        $('.borders').animated("fadeIn", "fadeOut");
        $('.red-point').animated("fadeInDown", "fadeOutUp");
        $('.why-parts p').animated("fadeInDown", "fadeOutUp");
        $('.par-brdright').animated("fadeInDown", "fadeOutUp");

    });




    $.stellar();






    var carousel = $("#carousel");

    // Запускаем плагин карусели
    carousel.owlCarousel({
        items: 4,
    });



    $('#js-prev').click(function () {

        // Запускаем перемотку влево
        carousel.trigger('owl.prev');

        return false;
    });

// Вперед
// При клике на "Вперед"
    $('#js-next').click(function () {

        // Запускаем перемотку вправо
        carousel.trigger('owl.next');

        return false;
    });











    /*$(document).ready(function(){
     $(window).scroll(function() {
     var top = ($('.try-cont').offset()).top;
     var currentScr = $(document).scrollTop();
     if (currentScr > top) {
     $(".try-cont img").css({top: '0px', position: 'fixed'});
     }
     else {
     $(".try-cont img").css({top: '0', position: 'relative'});
     }
     })
     });*/





    (function($){
        'use strict';

        $.fn.enllax = function(opt){

            var elem = $('[data-enllax-ratio]');
            elem.each(function(){
                var $this = $(this);
                $this.css({
                    'position': 'absolute',
                    'left': '0',
                    'right': '0'
                });
            });

            var winHeight = $(window).height();

            var options = $.extend({
                ratio: 0,
                type: 'background', //foreground
                direction: 'vertical', //horizontal
                offset: 0
            }, opt);

            elem.each(function(){
                var ratio;
                var type;
                var dir;
                var offset;
                var $this = $(this);
                var docHeight = $(document).height();
                var offsettop = $this.offset().top;
                var height = $this.outerHeight();
                var dataRat = $this.data('enllax-ratio');
                var dataType = $this.data('enllax-type');
                var dataDir = $this.data('enllax-direction');
                var dataOffset = $this.data('enllax-offset');

                if(dataRat) {
                    ratio = dataRat;
                }
                else { ratio = options.ratio; }

                if(dataType) {
                    type = dataType;
                }
                else { type = options.type; }

                if(dataDir) {
                    dir = dataDir;
                }
                else { dir = options.direction; }

                if(dataOffset) {
                    offset = dataOffset;
                }
                else { offset = options.offset; }

                var bgY = Math.round(offsettop * ratio);
                var transform = Math.round( ( offsettop - ( winHeight / 2 ) ) * ratio - offset );

                if(type == 'background') {
                    if(dir == 'vertical') {
                        $this.css({
                            'background-position': 'center ' + -bgY + 'px'
                        });
                    }
                    else if(dir == 'horizontal') {
                        $this.css({
                            'background-position': -bgY + 'px' + ' center'
                        });
                    }
                }
                else if(type == 'foreground') {
                    if(dir == 'vertical') {
                        $this.css({
                            '-webkit-transform': 'translateY(' + transform + 'px)',
                            '-moz-transform': 'translateY(' + transform + 'px)',
                            'transform': 'translateY(' + transform + 'px)',
                            'position': 'absolute',
                            'left': '0',
                            'right': '0'
                        });
                    }
                    else if(dir == 'horizontal') {
                        $this.css({
                            '-webkit-transform': 'translateX(' + transform + 'px)',
                            '-moz-transform': 'translateX(' + transform + 'px)',
                            'transform': 'translateX(' + transform + 'px)'
                        });
                    }
                }

                $(window).on('scroll', function(){
                    var docHeight = $(document).height();
                    var offsettop = $this.offset().top;
                    var height = $this.outerHeight();
                    var scrolling = $(this).scrollTop();

                    bgY = Math.round((offsettop - scrolling) * ratio);
                    transform = Math.round( ( ( offsettop - ( winHeight / 2 ) ) - scrolling ) * ratio - offset );

                    if(type == 'background') {
                        if(dir == 'vertical') {
                            $this.css({
                                'background-position': 'center ' + -bgY + 'px'
                            });
                        }
                        else if(dir == 'horizontal') {
                            $this.css({
                                'background-position': -bgY + 'px' + ' center'
                            });
                        }
                    }
                    else if((type == 'foreground') && (scrolling < docHeight)) {
                        if(dir == 'vertical') {
                            $this.css({
                                '-webkit-transform': 'translateY(' + transform + 'px)',
                                '-moz-transform': 'translateY(' + transform + 'px)',
                                'transform': 'translateY(' + transform + 'px)',
                                'position': 'absolute',
                                'left': '0',
                                'right': '0'
                            });
                        }
                        else if(dir == 'horizontal') {
                            $this.css({
                                '-webkit-transform': 'translateX(' + transform + 'px)',
                                '-moz-transform': 'translateX(' + transform + 'px)',
                                'transform': 'translateX(' + transform + 'px)'
                            });
                        }
                    }
                });
            });

        };

    })(jQuery);



    $(window).enllax();


    $(function() {


        // Custom Easing
        jQuery.scrollSpeed(100, 800);

    });

    $(window).scroll(function(){

        var st = $(this).scrollTop();

        $(".header-top").css({
            "transform" : "translate(0%, -" + st/30 + "%"
        });

        $(".top-par").css({
            "transform" : "translate(0%, -" + st/20 + "%"
        });
        $(".uadeveloper").css({
            "transform" : "translate(0%, -" + st/20 + "%"
        });






    });






});






$(document).ready(function(){
    $('.gallery-item').magnificPopup({
        type: 'image',
        gallery:{
            enabled: true
        }
    });






});



$(document).ready(function(){

    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#thi-cart'
    })
        .setClassToggle('#thi-cart', 'moveOn')
        .addTo(controller);



    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#sec-cart'
    })
        .setClassToggle('#sec-cart', 'moveOn')
        .addTo(controller);


    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#fo-cart'
    })
        .setClassToggle('#fo-cart', 'moveOn')
        .addTo(controller);


    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#fi-cart'
    })
        .setClassToggle('#fi-cart', 'moveOn')
        .addTo(controller);


    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#sx-cart'
    })
        .setClassToggle('#sx-cart', 'moveOn')
        .addTo(controller);


});