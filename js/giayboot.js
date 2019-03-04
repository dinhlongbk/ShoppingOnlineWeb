//========== DATA ==========//
let products = {
    "boots": [
        {maSanPham: "1111", tenSanPham: "Giày Boot Nữ 1111",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootnu/bootwomen.png"},
        {maSanPham: "1113", tenSanPham: "Giày Boot Nữ 1113",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootnu/bootwomen4560.png"},
        {maSanPham: "1114", tenSanPham: "Giày Boot Nữ 1114",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootnu/bootwomen4558.png"},
        {maSanPham: "1115", tenSanPham: "Giày Boot Nữ 1115",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootnu/bootwomen4558.png"},
        {maSanPham: "1116", tenSanPham: "Giày Boot Nữ 1116",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootnu/bootwomen4556.png"},
        {maSanPham: "1117", tenSanPham: "Giày Boot Nữ 1117",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootnu/bootwomen4555.png"},
        {maSanPham: "1118", tenSanPham: "Giày Boot Nữ 1118",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootnu/bootwomen4554.png"},
        {maSanPham: "1119", tenSanPham: "Giày Boot Nữ 1119",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootnu/bootwomen4554.png"},
        {maSanPham: "1110", tenSanPham: "Giày Boot Nữ 1110",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootnu/bootwomen4552.png"},
        {maSanPham: "1200", tenSanPham: "Giày Boot Nữ 1200",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootnu/bootwomen4551.png"},
        {maSanPham: "1211", tenSanPham: "Giày Boot Nữ 1211",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootnu/bootwomen4550.png"},
        {maSanPham: "1212", tenSanPham: "Giày Boot Nữ 1212",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootnu/bootwomen4549.png"},
        {maSanPham: "1213", tenSanPham: "Giày Boot Nữ 1213",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootnu/bootwomen4558.png"},
        {maSanPham: "1214", tenSanPham: "Giày Boot Nữ 1214",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootnu/bootwomen4547.png"},
        {maSanPham: "1215", tenSanPham: "Giày Boot Nữ 1215",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootnu/bootwomen4546.png"},
        {maSanPham: "1216", tenSanPham: "Giày Boot Nữ 1216",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootnu/bootwomen4545.png"},
        {maSanPham: "1217", tenSanPham: "Giày Boot Nữ 1217",giaTien: 245000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/bootnu/bootwomen4544.png"},
    ],
    "sport": [],
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
                            '<a class="page-link" onclick="pager.prev();">Prev</a>' +
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
