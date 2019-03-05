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
                                '<img class="card-img-top" src="' + product.hinhAnh + '" alt="image product">' +
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
listProducts.add(new Product("1111", "bootwomen", "BOOT", [35, 36, 37, 38], "Nữ", "245000", "Đen", 100, "../img/bootwomen.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1112", "bootwomen4560", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1113", "bootwomen4560", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1114", "bootwomen4560", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1115", "bootwomen4560", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1116", "bootwomen4560", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1117", "bootwomen4560", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1118", "bootwomen4560", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1119", "bootwomen4560", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1120", "bootwomen4560", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1121", "bootwomen4560", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1122", "bootwomen4560", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1123", "bootwomen4560", "BOOT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1124", "bootwomen4560", "SANDAL", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1125", "bootwomen4560", "SANDAL", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1126", "bootwomen4560", "SANDAL", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1127", "bootwomen4560", "SANDAL", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1128", "bootwomen4560", "SANDAL", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1129", "bootwomen4560", "SANDAL", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1130", "bootwomen4560", "SANDAL", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1131", "bootwomen4560", "SPORT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1132", "bootwomen4560", "SPORT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1133", "bootwomen4560", "SPORT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1134", "bootwomen4560", "SPORT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1135", "bootwomen4560", "SPORT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));
listProducts.add(new Product("1136", "bootwomen4560", "SPORT", [35, 36, 37, 38], "Nữ", "250000", "Đen", 100, "../img/bootwomen4560.png", "ShopHouse", "01/01/2019"));


/**
 * GHI CHÚ
 * - Loại giày: BOOT, SANDAL, SPORT
 */