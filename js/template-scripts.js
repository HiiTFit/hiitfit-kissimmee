jQuery(document).ready(function ($) {
    // Owl Carousel
    $('.carousel-default').owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        autoPlay: true,
        addClassActive: true,
        navigationText: ['&#xf007', '&#xf006'],
        singleItem: true
    });
    $('.carousel-fade-transition').owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        autoPlay: true,
        addClassActive: true,
        navigationText: ['&#xf007', '&#xf006'],
        singleItem: true,
        transitionStyle: 'fade'
    });
    $('#shop-button').click(function () {
        window.location.href = 'http://hiitfit.wodify.com/OnlineSalesPortal/PlansEntry.aspx';
    });

    $('#free-class-button').click(function () {
        window.location.href = 'http://hiitfit.wodify.com/OnlineSalesPortal/SessionsByLocationEntry.aspx?LocationId=4831&OnlineMembershipId=60787';
    });

    const bodyWidth = $(window).width();
    const video = document.createElement('video');
    video.src = 'img/hiitfit-new-promo.mp4';
    video.autoplay = video.muted = video.controls = true;

    if (bodyWidth >= 1200 ) {
        video.width = 1200;
        video.height = 720;
    } else if (bodyWidth >= 960) {
        video.width = 960;
        video.height = 540;
    } else if (bodyWidth >= 640) {
        video.width = 640;
        video.height = 360;
    } else {
        video.width = bodyWidth;
    }

    document.getElementById('promo-video-container').appendChild(video);
    video.play();
});
