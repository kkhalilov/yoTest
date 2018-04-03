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
$(".custom-checkbox").click(function(){
    $(".custom-checkbox").removeClass("selected");
    $(this).toggleClass("selected");
    $(".color-name").removeClass("visible-cl");
    $(this).children().toggleClass("visible-cl");

});
$(".mob-footer-slider").slick({
    slidesToShow: 1,
    infinite: true,
    dots: true,
    customPaging : function(slider, i) {
        return '<div class="disabled-slick-item"></div><div class="active-slick-item"></div>';
    },
    slidesToScroll: 1,
    arrows: false
});

