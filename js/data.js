//========== PRODUCT OBJECT ==========//
function Product(maSanPham, tenSanPham, loai, kichThuoc, gioiTinh, giaTien, mauSac, soLuong, hinhAnh, nhaSanXuat, ngayNhap) {
    this.maSanPham = maSanPham;
    this.tenSanPham = tenSanPham;
    this.kichThuoc = kichThuoc;
    this.giaTien = giaTien;
    this.mauSac = mauSac;
    this.nhaSanXuat = nhaSanXuat;
    this.soLuong = soLuong;
    this.gioiTinh = gioiTinh;
    this.loai = loai;
    this.hinhAnh = hinhAnh;
    this.ngayNhap = ngayNhap;
}

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

//========== DANH SÁCH SẢN PHẨM ==========//
function ListProducts() {
    let listProduct = [];
    
    /**
     * Thêm sản phẩm
     */
    this.add = function (product) {
        if (product === undefined)
            return false;

        // kiểm tra trùng
        for (let i = 0; i < listProduct.length; i++)
            if (product.maSanPham === listProduct[i].maSanPham)
                return false;

        // nếu không trùng
        listProduct.push(product);
        return true;
    };
    
    /**
     * Xoá sản phẩm
     */
    this.delete = function (position) {
        listProduct.splice(position, 1);
    };

    /**
     * Thay đổi thông tin sản phẩm
     */
    this.update = function (product, position) {
        listProduct[position] = product;
    };

    /**
     * Tìm sản phẩm
     */
    this.search = function (maSanPham) {
        for (let i = 0; i < listProduct.length; i++){
            if (listProduct[i].maSanPham == maSanPham){
                return listProduct[i];
            }
        }

        return undefined;
    };


    /**
     * Lấy sản phẩm theo vị trí
     */
    this.getProduct = function (position) {
        return listProduct[position];
    };

    this.getListProduct = function () {
        return listProduct;
    }
}

//========== HIỂN THỊ DANH SÁCH SẢN PHẨM THEO LOẠI ==========//
function showProductsByType(parent, type){
    $(parent).html("");

    listProducts.getListProduct().forEach(function(product, index){

        if (product.loai == type){
            let element =  '<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">' + 
                            '<div class="card">' +
                                '<img class="card-img-top hieuung" src="' + product.hinhAnh + '" alt="image product">' +
                                '<i class="fa fa-shopping-cart" aria-hidden="true"></i>' +
                                '<div class="card-body">' +
                                    '<p>' + product.tenSanPham + '</p>' +
                                    '<p class="card-text">' + product.giaTien + '<sup>đ</sup></p>' +
                                '</div>' +
                            '</div>' +
                        '</div>';

            $(parent).append(element);
        }
    });
}

//========== DATA ==========//
let listProducts = new ListProducts();
listProducts.add(new Product("1111", "Boot Nữ 1142", "BOOT", [35, 36, 37, 38], "Nữ", "245000", "Đen", 100, "../img/bootwomen.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1112", "Boot Nữ 1143", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4544.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1113", "Boot Nữ 1144", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4545.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1114", "Boot Nữ 1145", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4546.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1715", "Boot Nữ 1146", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4547.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1316", "Boot Nữ 1147", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4548.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1113", "Boot Nữ 1148", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4549.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1114", "Boot Nữ 1149", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4550.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1215", "Boot Nữ 1150", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4551.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1116", "Boot Nữ 1152", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4552.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1113", "Boot Nữ 1153", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4553.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1114", "Boot Nữ 1154", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4554.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1115", "Boot Nữ 1155", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4555.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1344", "Boot Nữ 1156", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4556.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1127", "Boot Nữ 1157", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1128", "Boot Nữ 1158", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4558.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1319", "Boot Nữ 1159", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4555.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1420", "Boot Nữ 1160", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1521", "Boot Nữ 1161", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1622", "Boot Nữ 1162", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));

listProducts.add(new Product("0000", "Boot Nữ 1142", "BOOT", [35, 36, 37, 38], "Nữ", "245000", "Đen", 100, "../img/bootwomen.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("0123", "Boot Nữ 1143", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4544.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("0023", "Boot Nữ 1144", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4545.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("0024", "Boot Nữ 1145", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4546.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("0025", "Boot Nữ 1146", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4547.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("0026", "Boot Nữ 1147", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4548.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("0256", "Boot Nữ 1148", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4549.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("0027", "Boot Nữ 1149", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4550.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("0234", "Boot Nữ 1150", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4551.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("0012", "Boot Nữ 1152", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4552.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("0029", "Boot Nữ 1153", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4551.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("0032", "Boot Nữ 1124", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4552.png", "ShopHouse", "01/01/2019"));

// ----------------------------------------------
listProducts.add(new Product("1723", "Sport Nữ 1000", "SPORT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sport/1.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1824", "Sport Nữ 1001", "SPORT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sport/2.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1125", "Sport Nữ 1002", "SPORT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sport/3.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1126", "Sport Nữ 1003", "SPORT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sport/2.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1127", "Sport Nữ 1004", "SPORT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sport/3.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1128", "Sport Nữ 1005", "SPORT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sport/1.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1129", "Sport Nữ 1006", "SPORT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sport/3.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1130", "Sport Nữ 1007", "SPORT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sport/2.png", "ShopHouse", "01/01/2019"));
//  ------------------------------------------------------------
listProducts.add(new Product("1131", "Sandal Nữ 1231", "SANDAL", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sandal/1.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1132", "Sandal Nữ 1221", "SANDAL", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sandal/3.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1133", "Sandal Nữ 1211", "SANDAL", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sandal/2.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1134", "Sandal Nữ 1241", "SANDAL", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sandal/1.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1135", "Sandal Nữ 1251", "SANDAL", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sandal/2.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1136", "Sandal Nữ 1261", "SANDAL", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sandal/3.png", "ShopHouse", "01/01/2019"));
// --------------------------------------------------------------
listProducts.add(new Product("1101", "Sandal Nữ 1231", "ALLFEMALE", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sandal/1.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1102", "Sandal Nữ 1221", "ALLFEMALE", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sandal/3.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1103", "Sandal Nữ 1211", "ALLFEMALE", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sandal/2.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1224", "Sport Nữ 1001", "ALLFEMALE", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sport/2.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1025", "Sport Nữ 1002", "ALLFEMALE", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sport/3.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1026", "Sport Nữ 1003", "ALLFEMALE", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sport/2.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1020", "Boot Nữ 1160", "ALLFEMALE", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1021", "Boot Nữ 1161", "ALLFEMALE", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1029", "Boot Nữ 1162", "ALLFEMALE", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("0001", "Sport Nữ 1004", "ALLFEMALE", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sport/3.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("0002", "Sport Nữ 1005", "ALLFEMALE", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sport/1.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("0004", "Sport Nữ 1006", "ALLFEMALE", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sport/3.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("0054", "Sport Nữ 1007", "ALLFEMALE", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sport/2.png", "ShopHouse", "01/01/2019"));

listProducts.add(new Product("0123", "Sport Nữ 1003", "ALLFEMALE", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sport/2.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("0241", "Boot Nữ 1160", "ALLFEMALE", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("0125", "Boot Nữ 1161", "ALLFEMALE", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("0221", "Boot Nữ 1162", "ALLFEMALE", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("0512", "Sport Nữ 1004", "ALLFEMALE", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sport/3.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("0321", "Sport Nữ 1005", "ALLFEMALE", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sport/1.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("0122", "Sport Nữ 1006", "ALLFEMALE", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sport/3.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("11231", "Sport Nữ 1007", "ALLFEMALE", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/sport/2.png", "ShopHouse", "01/01/2019"));

/**
 * GHI CHÚ
 * - Loại giày: BOOT, SANDAL, SPORT
 */