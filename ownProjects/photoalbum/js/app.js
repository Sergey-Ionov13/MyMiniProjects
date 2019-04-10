function adaptiveResize() {
    var carousel = $('.carousel');
    var availableHeight = window.innerHeight - carousel.find('img').eq(0).offset().top;

    carousel.find('img').css('max-height', availableHeight * 0.86);
}

$(window).load(function () {
    adaptiveResize();
});

$(window).resize(function () {
    adaptiveResize();
});
