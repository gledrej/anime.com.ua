//SLAIDER HEADER
$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        nav: true,
        navText: [
            /*  "<span class='sprite sprite-arrow-left'><</span>",
             '<span class="sprite sprite-arrow-right">></span>'*/
        ],
        responsiveClass: true,
        margin:10,
        asNavFor: '.slider-nav',
        responsive:{
            0:{
                items:3
            },
            600:{
                items:5
            },
            1000:{
                items:7
            }
        }
    });

});

//AND SLAIDER HEADER