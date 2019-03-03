'use strict'
$(document).ready(() => {

    // menuscroll
    scrollmenu();

    // click nút up
    $('.btnup').click(() => {
        $('body, html').animate({scrollTop: 0}, 1000);
    });
    // end

    // reponsive menubar
    hieuungmenu();


});
// menuscroll
var scrollmenu = () => {
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
// reponsive menubar
var hieuungmenu = () => {
var dehover = $('.declick');
var x = $(window).width();
    if(x<1300)
    {
        // click menu
        for(var i = 0; i<dehover.length; i++)
        {
            $(dehover[i]).click(function () {
                var dropdown = $(this).attr('data-hienlen');
                var nut = '#'+ dropdown;
                $('.list').removeClass('showlist');
                $(nut).toggleClass('showlist');
            });
        }
        //end click menu
    }
    else
    {
        // hieu ưng hover menu
        for(var i = 0; i<dehover.length; i++)
        {
            $(dehover[i]).hover(function () {
                var dropdown = $(this).attr('data-hienlen');
                var nut = '#'+ dropdown;
                $(nut).toggleClass('showlist');
            });
        }
        // end hover menu
        document.getElementById('mymenubar').className = "menubar";
    }
}