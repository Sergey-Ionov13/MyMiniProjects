var carousel = $('.carousel');
var scrollingSpeed = carousel.attr('data-interval');
var buttonSpeedPlus = $('.btn-speed-plus');
var buttonSpeedMinus = $('.btn-speed-minus');

buttonSpeedPlus.click(function () {
    if (scrollingSpeed >= 8000) {
        buttonSpeedMinus.prop('disabled', false);
        buttonSpeedMinus.find('.glyphicon-minus').css('color', '#800002');
    }

    carousel.data()['bs.carousel'].options.interval -= 1000;
    scrollingSpeed = carousel.data()['bs.carousel'].options.interval;
    if (scrollingSpeed <= 1000) {
        buttonSpeedPlus.prop('disabled', true);
        buttonSpeedPlus.find('.glyphicon-plus').css('color', '#808080');
    }
});

buttonSpeedMinus.click(function () {
    if (scrollingSpeed <= 1000) {
        buttonSpeedPlus.prop('disabled', false);
        buttonSpeedPlus.find('.glyphicon-plus').css('color', '#020080');
    }

    carousel.data()['bs.carousel'].options.interval += 1000;
    scrollingSpeed = carousel.data()['bs.carousel'].options.interval;
    if (scrollingSpeed >= 8000) {
        buttonSpeedMinus.prop('disabled', true);
        buttonSpeedMinus.find('.glyphicon-minus').css('color', '#808080');
    }
});
