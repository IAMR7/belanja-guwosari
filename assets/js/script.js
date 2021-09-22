"use strict";

// Untuk input quantity auto increments
$(document).ready(function() {

    var quantitiy=0;
        
    $('.quantity-right-plus').click(function(e) {
        // Stop acting like a button
        e.preventDefault();

        // Get the field name
        var quantity = parseInt($('#quantity').val());
        
        // If is not undefined
        $('#quantity').val(quantity + 1);
        // Increment
            
    }
    );
    
    $('.quantity-left-minus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        // If is not undefined
        // Increment
        if(quantity>0){
            $('#quantity').val(quantity - 1);
        }
    }
    );
        
});

// SWEET ALERT SUCCESS
$("#swal-masuk-keranjang").click(function() {
	swal('Berhasil !', 'Pesanan telah ditambahkan dalam keranjang', 'success');
    setTimeout(function(){
        $('#modal-quantity').modal('hide');
        swal.close();
    }, 1500);
});

// SWEET ALERT ULASAN
$("#swal-ulasan").click(function() {
	swal('Ulasan Terkirim !', 'Terimakasih telah menggunakan website Belanja Guwosari', 'success');
    setTimeout(function(){ 
        window.location.href = "pelanggan-home.html";
      }, 1500);
});

// SWEET ALERT LOGOUT
$("#swal-logout").click(function() {
    swal({
        title: 'Apakah anda ingin keluar ?',
        // text: 'Setelah menekan "OK" artikel akan diterbitkan',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            window.location.href = "index.html";
        }
        else {
            swal('batal logout');
        }
    });
});

// SWEET ALERT EDIT AKUN PROFIL
$("#swal-edit-akun-profil").click(function() {
    swal({
        title: 'Simpan Perubahan ?',
        text: 'Setelah menekan "OK" perubahan anda akan disimpan',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            swal('Pembayaran Berhasil !', 'Terimakasih telah berbelanja', 'success');
            setTimeout(function(){ 
                window.location.href = "pelanggan-akun-profil.html";
            }, 1500);
        } else {
            swal('Batal simpan perubahan');
        }
    });
});

// SWEET ALERT PROSES PEMBAYARAN
$("#swal-proses-pembayaran").click(function() {
    swal({
        title: 'Lanjutkan Pembayaran ?',
        text: 'Setelah menekan "OK" anda harus melakukan proses pembayaran',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
        setTimeout(function(){ 
          window.location.href = "pelanggan-pantau-pesanan.html";
        });
        } else {
        swal('Anda membatalkan pesanan');
        }
    });
});

// SWEET ALERT INVOICE
$("#swal-go-to-invoice").click(function() {
	swal('Pembayaran Berhasil !', 'Terimakasih telah berbelanja', 'success');
    setTimeout(function(){ 
        window.location.href = "pelanggan-invoice.html";
      }, 1500);
});

// IMAGE PREVIEW
imgInp.onchange = evt => {
    const [file] = imgInp.files
    if (file) {
      blah.src = URL.createObjectURL(file)
    }
}