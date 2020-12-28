function inputdata(){

    var email = document.querySelector(".email");
    var phone = document.querySelector(".phone");
    var fname = document.querySelector("#fname");
    var lname = document.querySelector("#lname");
    var password = document.querySelector(".password");
    var konfirmasi = document.querySelector(".konfirmasi");
    var ttl = document.querySelector(".ttl");
    var alamat = document.querySelector(".alamat");
    var city = document.querySelector(".city");
    var gender = document.querySelector(".gender");
    var trip = document.querySelector(".trip");

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

    var email = document.forms["form"]["email"].value;
    var phone = document.forms["form"]["phone"].value;
    var fname = document.forms["form"]["fname"].value;
    var lname = document.forms["form"]["lname"].value;
    var ttl = document.forms["form"]["ttl"].value;
    var city = document.forms["form"]["city"].value;

    var table = document.getElementById("tabel");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = email;
    cell2.innerHTML = phone;
    cell3.innerHTML = fname;
    cell4.innerHTML = lname;
    cell5.innerHTML = ttl + "," + "" + city;
    cell6.innerHTML = city;


}