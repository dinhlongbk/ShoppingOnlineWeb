//========== DATA ==========//
let products = {
    "sport": [
        {maSanPham: "2111", tenSanPham: "Giày Thể Thao TT- 3236",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3236.png"},
        {maSanPham: "2112", tenSanPham: "Giày Thể Thao TT- 3235",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3235.png"},
        {maSanPham: "2113", tenSanPham: "Giày Thể Thao TT- 3234",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3234.png"},
        {maSanPham: "2114", tenSanPham: "Giày Thể Thao TT- 3233",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3233.png"},
        {maSanPham: "2115", tenSanPham: "Giày Thể Thao TT- 3232",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3232.png"},
        {maSanPham: "2116", tenSanPham: "Giày Thể Thao TT- 3231",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3231.png"},
        {maSanPham: "2117", tenSanPham: "Giày Thể Thao TT- 3230",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3230.png"},
        {maSanPham: "2118", tenSanPham: "Giày Thể Thao TT- 3229",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3229.png"},
        {maSanPham: "2119", tenSanPham: "Giày Thể Thao TT- 3228",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3228.png"},
        {maSanPham: "2120", tenSanPham: "Giày Thể Thao TT- 3227",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3227.png"},
        {maSanPham: "2121", tenSanPham: "Giày Thể Thao TT- 3226",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3226.png"},
        {maSanPham: "2122", tenSanPham: "Giày Thể Thao TT- 3225",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3225.png"},
        {maSanPham: "2123", tenSanPham: "Giày Thể Thao TT- 3224",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3224.png"},
        {maSanPham: "2124", tenSanPham: "Giày Thể Thao TT- 3223",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3223.png"},
        {maSanPham: "2125", tenSanPham: "Giày Thể Thao TT- 3222",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3222.png"},
        {maSanPham: "2126", tenSanPham: "Giày Thể Thao TT- 3221",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sport/Giày Thể Thao TT- 3221.png"},
    ]
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
            products: products.sport
        }
    });

    //========== PAGER INIT =========//
    pager.init();
    pager.showPageNav();
    pager.showPage(1);
});
