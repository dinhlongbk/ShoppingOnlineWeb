//========== DATA ==========//
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
    "sport": [
         {maSanPham: "1111", tenSanPham: "Giày Thể Thao TT- 3236",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3236.png"},
         {maSanPham: "1112", tenSanPham: "Giày Thể Thao TT- 3235",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3235.png"},
         {maSanPham: "1113", tenSanPham: "Giày Thể Thao TT- 3234",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3234.png"},
         {maSanPham: "1114", tenSanPham: "Giày Thể Thao TT- 3233",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3233.png"},
         {maSanPham: "1115", tenSanPham: "Giày Thể Thao TT- 3232",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3232.png"},
         {maSanPham: "1116", tenSanPham: "Giày Thể Thao TT- 3231",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3231.png"},
         {maSanPham: "1117", tenSanPham: "Giày Thể Thao TT- 3230",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3230.png"},
         {maSanPham: "1118", tenSanPham: "Giày Thể Thao TT- 3229",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3229.png"},
         {maSanPham: "1119", tenSanPham: "Giày Thể Thao TT- 3228",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3228.png"},
         {maSanPham: "1120", tenSanPham: "Giày Thể Thao TT- 3227",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3227.png"},
         {maSanPham: "1121", tenSanPham: "Giày Thể Thao TT- 3226",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3226.png"},
         {maSanPham: "1122", tenSanPham: "Giày Thể Thao TT- 3225",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3225.png"},
         {maSanPham: "1123", tenSanPham: "Giày Thể Thao TT- 3224",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3224.png"},
         {maSanPham: "1124", tenSanPham: "Giày Thể Thao TT- 3223",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3223.png"},
         {maSanPham: "1125", tenSanPham: "Giày Thể Thao TT- 3222",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3222.png"},
         {maSanPham: "1126", tenSanPham: "Giày Thể Thao TT- 3221",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3221.png"},
    ],
    "sandal": []
};

//========== PAGER OBJECT =========//
function Pager(tableName, itemsPerPage) {
    this.tableName = tableName;
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1;
    this.pages = 0;
    this.inited = false;
    this.rows;

    this.showRecords = function(from, to) {
        for (let i = 0; i < rows.length; i++) {
            if (i < from || i > to)
                rows[i].style.display = 'none';
            else
                rows[i].style.display = '';
        }
    };

    this.showPage = function(pageNumber) {
        if (! this.inited) {
            alert("not inited");
            return;
        }

        let oldPageAnchor = $("#page" + this.currentPage);
        oldPageAnchor.removeClass("active");

        this.currentPage = pageNumber;
        let newPageAnchor = $("#page" + this.currentPage);
        newPageAnchor.addClass("active");

        var from = (pageNumber - 1) * itemsPerPage;
        var to = from + itemsPerPage - 1;
        this.showRecords(from, to);
    };

    this.prev = function() {
        if (this.currentPage > 1)
            this.showPage(this.currentPage - 1);
    };

    this.next = function() {
        if (this.currentPage < this.pages) {
            this.showPage(this.currentPage + 1);
        }
    };

    this.init = function() {
        rows = $("#list-product > div");
        var records = rows.length;
        this.pages = Math.ceil(records / itemsPerPage);
        this.inited = true;
    };

    this.showPageNav = function() {
        if (!this.inited) {
            console.log("not init");
            return;
        }

        let paging_element = $("#paging-item");

        let pager_pre = '<li class="page-item" id="page_pre">' +
                            '<a class="page-link" onclick="pager.prev();">Previous</a>' +
                        '</li>';
        paging_element.append(pager_pre);

        for (let page = 1; page <= this.pages; page++) {
            let pager_i = '<li class="page-item" id="page' + page + '">' +
                            '<a class="page-link" onclick="pager.showPage(' + page + ');">' + page + '</a>' +
                          '</li>';
            paging_element.append(pager_i);
        }

        let pager_next = '<li class="page-item" id="page_next">' +
                            '<a class="page-link" onclick="pager.next();">Next</a>' +
                         '</li>';
        paging_element.append(pager_next);

        if (this.pages == 1){
            $("#page_pre").addClass("disable");
            $("#page_next").addClass("disable");
        }
    }
}

let pager = new Pager('list-product', 16);

$(document).ready(function() {
    //========== BINDING DATA PRODUCT ==========//
    let app = new Vue({
        el: "#list-product",
        data: {
            products: products.boots
        }
    });

    //========== PAGER INIT =========//
    pager.init();
    pager.showPageNav();
    pager.showPage(1);
});
