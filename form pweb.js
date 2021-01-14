function inputdata(){

    let email = document.querySelector(".email").value;
    let phone = document.querySelector(".phone").value;
    let fname = document.querySelector("#fname").value;
    let lname = document.querySelector("#lname").value;
    let password = document.querySelector(".password").value;
    let konfirmasi = document.querySelector(".konfirmasi").value;
    let ttl = document.querySelector(".ttl").value;
    let alamat = document.querySelector(".alamat").value;
    let city = document.querySelector(".city").value;
    let gender = document.querySelector(".gender").value;
    let trip = document.querySelector(".trip").value;

    if(email.value == "")
        {
            alert("Masukkan email");
            email.focus();
        }
    else if(phone.value == "")
        {
            alert("Masukkan nomor telepon");
            phone.focus();
        }
    else if(fname.value == "")
        {
            alert("Masukkan nama depan");
            fname.focus();
        }
    else if(lname.value == "")
        {
            alert("Masukkan nama belakang");
            lname.focus();
        }
    else if(password.value == "")
        {
            alert("Masukkan password");
            password.focus();
        }
    else if(konfirmasi.value == "")
        {
            alert("Masukkan konfirmasi password");
            konfirmasi.focus();
        }
    else if(ttl.value == "")
        {
            alert("Masukkan tanggal lahir");
            ttl.focus();
        }
    else if(alamat.value == "")
        {
            alert("Masukkan alamat");
            alamat.focus();
        }
    else if(city.value == "")
        {
            alert("Masukkan kota");
            city.focus();
        }
    else if(gender.value == "")
        {
            alert("Masukkan gender");
            gender.focus();
        }
    else{
            alert("Data berhasil disimpan")
    }
}