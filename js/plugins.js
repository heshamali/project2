$(function(){
    $(window).on('scroll', function(){
        if ($(this).scrollTop() >= 53) {
            $('.hesham-nav').fadeOut(500);
            $('.hesham-nav2').css({
                display: 'block',
                boxShadow:' 0 60px 100px 0 rgba(2,2,2,0.2)'

                });
        } else {
            $('.hesham-nav').fadeIn(500);
            $('.hesham-nav2').css('display', 'none');
        }
    });


});
