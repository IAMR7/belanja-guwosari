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

// SWEET ALERT PROSES PEMBAYARAN
$("#swal-proses-pembayaran").click(function() {
    swal({
        title: 'Yakin lanjut membeli produk ini ?',
        text: 'Setelah menekan "OK" anda tidak dapat membatalkan pesanan',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
        swal('Pesanan anda segera di proses ! Terimakasih telah memesan melalui Belanja Guwosari', {
          icon: 'success',
        });
        setTimeout(function(){ 
          window.location.href = "pelanggan-pantau-pesanan.html";
        }, 1500);
        } else {
        swal('Anda membatalkan pesanan');
        }
      });
  });