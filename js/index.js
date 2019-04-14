'use strict'
$(document).ready(() => {

    // menuscroll
    scrollmenu();

    // click nút up
    $('.btnup').click(() => {
        $('body, html').animate({scrollTop: 0}, 1000);
    });
    // end

});
// menuscroll
let scrollmenu = () => {
        $(window).scroll(() => {
            var pos = $(window).scrollTop();
            if(pos>60)
                $('.menu').addClass('menuscroll');
            else
                $('.menu').removeClass('menuscroll');

                // xuất hiện nút up
            if(pos>200)
                $('.btnup').addClass('btnshow');
            else
                $('.btnup').removeClass('btnshow');
                // end nút up
        });
}