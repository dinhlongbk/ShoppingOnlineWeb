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

let products = {
    "boots": [
        {maSanPham: "1111", tenSanPham: "bootwomen",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootwomen.png"},
        {maSanPham: "1112", tenSanPham: "bootwomen4560",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootwomen4560.png"},
        {maSanPham: "1112", tenSanPham: "bootwomen4558",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootwomen4558.png"},
        {maSanPham: "1112", tenSanPham: "bootwomen4558",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootwomen4558.png"},
        {maSanPham: "1113", tenSanPham: "bootwomen4556",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootwomen4556.png"},
        {maSanPham: "1114", tenSanPham: "bootwomen4555",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootwomen4555.png"},
        {maSanPham: "1115", tenSanPham: "bootwomen4554",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootwomen4554.png"},
        {maSanPham: "1116", tenSanPham: "bootwomen4553",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootwomen4554.png"},
        {maSanPham: "1116", tenSanPham: "bootwomen4552",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootwomen4552.png"},
        {maSanPham: "1116", tenSanPham: "bootwomen4551",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootwomen4551.png"},
        {maSanPham: "1116", tenSanPham: "bootwomen4550",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootwomen4550.png"},
        {maSanPham: "1116", tenSanPham: "bootwomen4549",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootwomen4549.png"},
        {maSanPham: "1116", tenSanPham: "bootwomen4558",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootwomen4558.png"},
        {maSanPham: "1116", tenSanPham: "bootwomen4547",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootwomen4547.png"},
        {maSanPham: "1116", tenSanPham: "bootwomen4546",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootwomen4546.png"},
        {maSanPham: "1116", tenSanPham: "bootwomen4545",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootwomen4545.png"},
        {maSanPham: "1116", tenSanPham: "bootwomen4544",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootwomen4544.png"},
    ],
    "sport": [],
    "sandal": []
};


let app = new Vue({
    el: "#list-product",
    data: {
        products: products.boots
    }
});

console.log(app.products)