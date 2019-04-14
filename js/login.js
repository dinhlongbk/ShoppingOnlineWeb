$(document).ready(function(){
    // EVENT ĐĂNG KÝ
    $("#form-register").validate({
        rules: {
            fullname:{
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email:true
            },
            password: {
                required: true,
                minlength: 8
            },
            repassword: {
                required: true,
                minlength: 8
            },
            birthday: {
                required: true,
                date: true
            }
        },
        messages: {
            email:{
                required: "Vui lòng nhập email",
                email:"Email không hợp lệ"
            },
            fullname: {
                required: "Vui lòng nhập tên",
                minlength: "Tên phải lớn hơn 3 kí tự"
            },
            password: {
                required: "Vui lòng nhập mật khẩu",
                minlength: "Mật khẩu phải lớn hơn 8 kí tự"
            },
            repassword: {
                required: "Vui lòng nhập lại mật khẩu",
                minlength: "Mật khẩu phải lớn hơn 8 kí tự"
            },
            birthday: {
                required: "Vui lòng nhập ngày sinh",
                date: "Ngày sinh phải ở định dạng ngày"
            }
        },
        submitHandler: function (form) {
            let password = $("#password").val().trim();
            let repassword = $("#repassword").val().trim();

            console.log(password + " " + repassword);

            if (password != repassword){
                alert("Mật khẩu không trùng nhau");
            }else{
                alert("Đăng ký thành công");
            }
        }
    });

});

let submitData = () => {
    if($('#emailLogin').val() === "admin@gmail.com" && $('#passwordLogin').val() === "1")
        location.href = "admin.html";
    else
        console.log("Sai");
}