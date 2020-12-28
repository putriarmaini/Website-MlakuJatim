function login()
{
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");

    if(username.value == "")
        {
            alert("Masukkan email atau mobile number");
            username.focus();
            window.location = "login 1.html";
            return false;
        }
    else if(password.value == "")
        {
            alert("Masukkan password");
            password.focus();
            window.location = "login 1.html";
            return false;
        }
    else{
            alert("Data berhasil disimpan");
    }
}
