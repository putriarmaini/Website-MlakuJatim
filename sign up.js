function signup()
{
    let sign_up = document.querySelector("#signup");

    if(sign_up.value == "")
        {
            alert("Masukkan email atau mobile number");
            sign_up.focus();
            window.location = "login 1.html";
            return false;
        }
    else{
            alert("Data berhasil disimpan");
    }
}
