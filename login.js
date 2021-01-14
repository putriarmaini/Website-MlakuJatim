function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if(username == "ginogilang@gmail.com" && password == "12345") {
        window.location = "index.html"
    }
    else if(username == "085123456789" && password == "12345") {
        window.location = "index.html"
    }
    else if(username == "") {
        alert("Masukkan email atau mobile number");
        username.focus();
    }
    else if(password == "") {
        alert("Masukkan password");
        password.focus();
    }
}

$(document).ready(function(){		
    $('.form-checkbox').click(function(){
        if($(this).is(':checked')){
            $('.form-password').attr('type','text');
        }else{
            $('.form-password').attr('type','password');
        }
    });
});