$(document).ready(function()
{
    $('.owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        autoplay: true, 
        slideTransition: 'ease-in',

        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 1
            },
            1000: {
                items: 4
            },
        }

    });
    
});

