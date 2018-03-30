console.log('\'Allo \'Allo!');

$('.slider-for').slick({
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-for',
    centerMode: true,
    focusOnSelect: true
});
