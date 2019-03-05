let product_selected = 0;

//========== CHỌN 1 SẢN PHẨM =========//
function select_product(position) {
    $("#table-product tbody tr.table-active").removeClass("table-active");
    $($("#table-product tbody tr")[position]).addClass("table-active");
    product_selected = position;
}

//========== HIỂN THỊ DANH SÁCH SẢN PHẨM ==========//
function showProducts(){
    $("#products").html("");          // làm trống table

    listProducts.getListProduct().forEach(function (product, index) {

        let element =   '<tr onclick="select_product(' + index + ');">' +
                            '<th scope="row">' + product.maSanPham + '</th>' +
                            '<td>' + product.tenSanPham + '</td>' +
                            '<td>' + product.loai + '</td>' +
                            '<td>' + product.kichThuoc + '</td>' +
                            '<td>' + product.gioiTinh + '</td>' +
                            '<td>' + product.giaTien + '</td>' +
                            '<td>' + product.soLuong + '</td>' +
                            '<td>' + product.ngayNhap + '</td>' +
                        '</tr>';

        $("#products").append(element);
    });
    
    $("#list-product table tbody tr:first-child").addClass("table-active");
}

$(document).ready(function(){
    showProducts();

    // EVENT THÊM SẢN PHẨM
    $("#form-addProduct").validate({
        rules:{
            maSanPham: {
                required: true,
                minlength: 3
            },
            tenSanPham: {
                required: true,
                minlength: 5
            },
            loai: "required",
            gioiTinh: "required",
            giaTien: {
                required: true,
                digits: true
            },
            soLuong:{
                required: true,
                digits: true
            },
            nhaSanXuat: "required",
            ngayNhap: {
                required: true,
                date: true
            }
        },
        messages:{
            maSanPham: {
                required: "Vui lòng nhập mã sản phẩm",
                minlength: "Mã sản phẩm phải lớn hơn 3 kí tự"
            },
            tenSanPham: {
                required: "Vui lòng nhập tên sản phẩm",
                minlength: "Tên sản phẩm phải lớn hơn 5 kí tự"
            },
            loai: "Vui lòng nhập loại sản phẩm",
            gioiTinh: "Vui lòng chọn giới tính",
            giaTien: {
                required: "Vui lòng nhập giá tiền",
                digits: "Giá tiền phải là số"
            },
            soLuong:{
                required: "Vui lòng nhập số lượng",
                digits: "Số lượng phải là số nguyên"
            },
            nhaSanXuat: "Vui lòng chọn nhà sản xuất",
            ngayNhap: {
                required: "Vui lòng nhập ngày nhập kho",
                date: "Ngày nhập kho phải ở định dạng ngày"
            }
        },
        submitHandler: function (form) {
            let maSanPham = $("#maSanPham").val().trim();
            let tenSanPham = $("#tenSanPham").val().trim();
            let kichThuoc = $("#kichThuoc").val();
            let giaTien = $("#giaTien").val().trim();
            let nhaSanXuat = $("#nhaSanXuat").val().trim();
            let soLuong = $("#soLuong").val().trim();
            let gioiTinh = $("#gioiTinh").val().trim();
            let loai = $("#loai").val().trim();
            let hinhAnh = "../img/bootwomen.png";
            let ngayNhap = $("#ngayNhap").val().trim();

            let product = new Product(maSanPham, tenSanPham, loai, kichThuoc, gioiTinh, giaTien, "Đen", soLuong, hinhAnh, nhaSanXuat, ngayNhap);

            if (listProducts.add(product) === false){
                alert("Thêm sản phẩm không thành công");
            }else {
                showProducts();
                $("#form-addProduct").trigger("reset");
                $("#modal-AddProduct").modal("hide");
                alert("Thêm sản phẩm thành công");
            }
        }
    });

    // EVENT SỬA SẢN PHẨM
    $("#form-editProduct").validate({
        rules:{
            tenSanPham: {
                required: true,
                minlength: 5
            },
            loai: "required",
            gioiTinh: "required",
            giaTien: {
                required: true,
                digits: true
            },
            soLuong:{
                required: true,
                digits: true
            },
            nhaSanXuat: "required",
            ngayNhap: {
                required: true,
                date: true
            }
        },
        messages:{
            tenSanPham: {
                required: "Vui lòng nhập tên sản phẩm",
                minlength: "Tên sản phẩm phải lớn hơn 5 kí tự"
            },
            loai: "Vui lòng nhập loại sản phẩm",
            gioiTinh: "Vui lòng chọn giới tính",
            giaTien: {
                required: "Vui lòng nhập giá tiền",
                digits: "Giá tiền phải là số"
            },
            soLuong:{
                required: "Vui lòng nhập số lượng",
                digits: "Số lượng phải là số nguyên"
            },
            nhaSanXuat: "Vui lòng chọn nhà sản xuất",
            ngayNhap: {
                required: "Vui lòng nhập ngày nhập kho",
                date: "Ngày nhập kho phải ở định dạng ngày"
            }
        },
        submitHandler: function (form) {
            let maSanPham = $("#edit-maSanPham").val().trim();
            let tenSanPham = $("#edit-tenSanPham").val().trim();
            let kichThuoc = $("#edit-kichThuoc").val();
            let giaTien = $("#edit-giaTien").val().trim();
            let nhaSanXuat = $("#edit-nhaSanXuat").val().trim();
            let soLuong = $("#edit-soLuong").val().trim();
            let gioiTinh = $("#edit-gioiTinh").val().trim();
            let loai = $("#edit-loai").val().trim();
            let hinhAnh = "../img/bootwomen.png";
            let ngayNhap = $("#edit-ngayNhap").val().trim();

            let product = new Product(maSanPham, tenSanPham, loai, kichThuoc, gioiTinh, giaTien, "Đen", soLuong, hinhAnh, nhaSanXuat, ngayNhap);

            listProducts.update(product, product_selected);
            showProducts();
            $("#form-editProduct").trigger("reset");
            $("#modal-editProduct").modal("hide");
            alert("Thay đổi thông tin sản phẩm thành công");
        }
    });
    $("#btn-edit").click(function () {
        let product = listProducts.getProduct(product_selected);

        $("#edit-maSanPham").val(product.maSanPham);
        $("#edit-tenSanPham").val(product.tenSanPham);
        $("#edit-loai").val(product.loai);
        $("#edit-kichThuoc").val(product.kichThuoc);
        $("#edit-gioiTinh").val(product.gioiTinh);
        $("#edit-giaTien").val(product.giaTien);
        $("#edit-soLuong").val(product.soLuong);
        $("#edit-nhaSanXuat").val(product.nhaSanXuat);
        $("#edit-ngayNhap").val(product.ngayNhap);

        $("#modal-editProduct").modal("show");
    });

    // EVENT XOÁ SẢN PHẨM
    $("#btn-deleteProduct").click(function () {
        listProducts.delete(product_selected);
        product_selected = 0;
        showProducts();
        $("#modal-DeleteProduct").modal("hide");
    });

    // EVENT XEM CHI TIẾT
    $("#btn-view").click(function(){
        let product = listProducts.getProduct(product_selected);

        $("#view-hinhAnh").attr("src", product.hinhAnh);
        $("#view-tenSanPham").text(product.tenSanPham);
        $("#view-loai").text(product.loai);
        $("#view-maSanPham").text("Mã sản phẩm: " + product.maSanPham);
        $("#view-gioiTinh").text("Giới tính: " + product.gioiTinh);
        $("#view-kichThuoc").text("Kích thước: " + product.kichThuoc);
        $("#view-mauSac").text("Màu sắc: " + product.mauSac);
        $("#view-giaTien").text("Giá tiền: " + product.giaTien);
        $("#view-soLuong").text("Số lượng: " + product.soLuong);
        $("#view-nhaSanXuat").text("Nhà sản xuất: " + product.nhaSanXuat);
        $("#view-ngayNhap").text("Ngày nhập: " + product.ngayNhap);

        $("#modal-viewDetail").modal("show");
    });
});