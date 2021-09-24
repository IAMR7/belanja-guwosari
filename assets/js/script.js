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

// SWEET ALERT MASUK KERANJANG
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

// SWEET ALERT BATAL TRANSAKSI

$("#swal-verifikasi-pembatalan").click(function() {
	swal('Berhasil !', 'Pesanan anda berhasil dibatalkan', 'success');
    setTimeout(function(){ 
        window.location.href = "pelanggan-home.html";
    }, 1500);
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
            swal('Berhasil Edit Profil', 'Profil anda telah diperbaharui', 'success');
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

// SWEET ALERT SIMPAN PRODUK
$("#swal-tambah-produk").click(function() {
  swal({
      title: 'Apakah Produk Sudah Benar ?',
      text: 'Setelah menekan "OK" produk akan langsung masuk kedalam daftar',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
      swal('Produk Berhasil Ditambahkan! Silahkan melihat kembali daftar produk', {
        icon: 'success',
      });
      setTimeout(function(){ 
        window.location.href = "umkm-kelola-produk.html";
      }, 1500);
      } else {
      swal('Membatalkan menyimpan produk');
      }
    });
});

// SWEET ALERT DAFTAR UMKM
$("#swal-daftar-umkm").click(function() {
    swal({
        title: 'Apakah Data Sudah Benar ?',
        text: 'Setelah menekan "OK" akun UMKM akan segera dibuat',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            swal('Akun UMKM Berhasil Dibuat !', 'Selamat Berjualan', 'success'); 
            setTimeout(function(){
                window.location.href = "umkm-home.html";
            }, 1500);
        } else {
            swal('Batal daftar UMKM');
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

// DATATABLES
$("[data-checkboxes]").each(function() {
    var me = $(this),
      group = me.data('checkboxes'),
      role = me.data('checkbox-role');
  
    me.change(function() {
      var all = $('[data-checkboxes="' + group + '"]:not([data-checkbox-role="dad"])'),
        checked = $('[data-checkboxes="' + group + '"]:not([data-checkbox-role="dad"]):checked'),
        dad = $('[data-checkboxes="' + group + '"][data-checkbox-role="dad"]'),
        total = all.length,
        checked_length = checked.length;
  
      if(role == 'dad') {
        if(me.is(':checked')) {
          all.prop('checked', true);
        }else{
          all.prop('checked', false);
        }
      }else{
        if(checked_length >= total) {
          dad.prop('checked', true);
        }else{
          dad.prop('checked', false);
        }
      }
    });
});
  
$("#table-1").dataTable({
  "columnDefs": [
    { "sortable": false, "targets": [2,3] }
  ]
});

$("#table-2").dataTable({
  "columnDefs": [
    { "sortable": false, "targets": [0,2,3] }
  ]
});

  