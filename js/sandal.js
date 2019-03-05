//========== DATA ==========//
let products = {
    "sandal": [
        {maSanPham: "3111", tenSanPham: "Giày Sandal nữ SD - 2638",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sandal/Giày Sandal nữ SD - 2638.png"},
         {maSanPham: "3112", tenSanPham: "Giày Sandal nữ SD - 2637",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sandal/Giày Sandal nữ SD - 2637.png"},
         {maSanPham: "3113", tenSanPham: "Giày Sandal nữ SD - 2636",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sandal/Giày Sandal nữ SD - 2636.png"},
         {maSanPham: "3114", tenSanPham: "Giày Sandal nữ SD - 2635",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sandal/Giày Sandal nữ SD - 2635.png"},
         {maSanPham: "3115", tenSanPham: "Giày Sandal nữ SD - 2634",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sandal/Giày Sandal nữ SD - 2634.png"},
         {maSanPham: "3116", tenSanPham: "Giày Sandal nữ SD - 2633",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sandal/Giày Sandal nữ SD - 2633.png"},
         {maSanPham: "3117", tenSanPham: "Giày Sandal nữ SD - 2632",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sandal/Giày Sandal nữ SD - 2632.png"},
         {maSanPham: "3118", tenSanPham: "Giày Sandal nữ SD - 2631",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sandal/Giày Sandal nữ SD - 2631.png"},
         {maSanPham: "3119", tenSanPham: "Giày Sandal nữ SD - 2630",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sandal/Giày Sandal nữ SD - 2630.png"},
         {maSanPham: "3120", tenSanPham: "Giày Sandal nữ SD - 2629",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sandal/Giày Sandal nữ SD - 2629.png"},
         {maSanPham: "3121", tenSanPham: "Giày Sandal nữ SD - 2628",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sandal/Giày Sandal nữ SD - 2628.png"},
         {maSanPham: "3122", tenSanPham: "Giày Sandal nữ SD - 2627",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sandal/Giày Sandal nữ SD - 2627.png"},
         {maSanPham: "3123", tenSanPham: "Giày Sandal nữ SD - 2626",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sandal/Giày Sandal nữ SD - 2626.png"},
         {maSanPham: "3124", tenSanPham: "Giày Sandal nữ SD - 2625",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sandal/Giày Sandal nữ SD - 2625.png"},
         {maSanPham: "3125", tenSanPham: "Giày Sandal nữ SD - 2624",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sandal/Giày Sandal nữ SD - 2624.png"},
         {maSanPham: "3126", tenSanPham: "Giày Sandal nữ SD - 2623",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sandal/Giày Sandal nữ SD - 2623.png"},
         {maSanPham: "3126", tenSanPham: "Giày Sandal nữ SD - 2623",giaTien: 250000, mauSac: "đen", gioiTinh: "nữ", hinhAnh: "../img/sandal/Giày Sandal nữ SD - 2623.png"},
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
            products: products.sandal
        }
    });

    //========== PAGER INIT =========//
    pager.init();
    pager.showPageNav();
    pager.showPage(1);
});
