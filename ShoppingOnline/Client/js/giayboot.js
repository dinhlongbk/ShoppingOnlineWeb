$(document).ready(function() {
    pagination_ele();
});
// phân trang
var pagination_ele = () => {
        // số lượng page có thể hiển thị
        var show_per_page = 12;
        // số phần tử có trong 1 page
        var number_of_item = $('.review').children().length;
        // số lượng của page sẽ có
        var number_of_page = Math.ceil(number_of_item/show_per_page);

        // đặt các giá trị của trường ẩn
        $('#current_page').val(0);
        $('#show_per_page').val(show_per_page);

        var navigation_html = '<a class="page-link" href="javascipt:previous();"><<</a>';

        var current_link = 0;
        while (number_of_page > current_link) {
            navigation_html+='<a class="page-link" href="javascript:go_to_page(' + current_link+')" longdesc="' + current_link + '">'+ (current_link + 1) +'</a>';
            current_link ++;
        }
        navigation_html += '<a class="page-link" href="javascipt:next();">>></a>';

        $('#page_navigation').html(navigation_html);

}