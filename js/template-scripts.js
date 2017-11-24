jQuery(document).ready(function ($) {
    // Owl Carousel
    $(".carousel-default").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        autoPlay: true,
        addClassActive: true,
        navigationText: ["&#xf007", "&#xf006"],
        singleItem: true
    });
    $(".carousel-fade-transition").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        autoPlay: true,
        addClassActive: true,
        navigationText: ["&#xf007", "&#xf006"],
        singleItem: true,
        transitionStyle: "fade"
    });
    $("#shop-button-1").click(function () {
        window.location.href = 'https://hiitfit.wodify.com/OnlineSalesPortal/ReviewPlanPurchase.aspx?OnlineMembershipId=61468&OnlineMembershipPaymentOptionId=233669&IsMobile=False';
    });

    $("#shop-button-2").click(function () {
        window.location.href = 'https://hiitfit.wodify.com/OnlineSalesPortal/ReviewPlanPurchase.aspx?OnlineMembershipId=61603&OnlineMembershipPaymentOptionId=233434&IsMobile=False&AuthenticationToken=';
    });

    $("#shop-button").click(function () {
        window.location.href = 'http://hiitfit.wodify.com/OnlineSalesPortal/PlansEntry.aspx';
    });

    $("#free-class-button").click(function () {
        window.location.href = 'http://hiitfit.wodify.com/OnlineSalesPortal/SessionsByLocationEntry.aspx?LocationId=4831&OnlineMembershipId=60787';
    });
});