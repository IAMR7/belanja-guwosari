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

// SWEET ALERT CHAT ADMIN
$("#swal-chat-admin").click(function() {
	swal('Pesan Terkirim !', 'Pesan anda berhasil dikirim ke Admin', 'success');
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

// SWEET ALERT TERUSKAN PESANAN
$("#swal-teruskan-pesanan").click(function() {
	swal('Berhasil Diteruskan', 'Pesanan telah diteruskan ke UMKM', 'success');
});

$("#swal-teruskan-semua-pesanan").click(function() {
  swal({
      title: 'Teruskan Semua ?',
      text: 'Setelah menekan "OK" semua pesanan akan diteruskan kepada UMKM',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
          swal('Berhasil Diteruskan !', 'Semua pesanan telah teruskan kepada UMKM', 'success');
      } else {
          swal('Batal teruskan semua pesanan');
      }
  });
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

$("#swal-logout-admin").click(function() {
    swal({
        title: 'Apakah anda ingin keluar ?',
        // text: 'Setelah menekan "OK" artikel akan diterbitkan',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            window.location.href = "admin-login.html";
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

// SWEET ALERT UPLOAD ARTIKEL
$("#swal-upload-artikel").click(function() {
	swal('Berhasil !', 'Artikel berhasil dibuat', 'success');
    setTimeout(function(){ 
        window.location.href = "admin-artikel.html";
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

// SWEET ALERT HAPUS DATA
$("#swal-hapus-data").click(function() {
    swal({
        title: 'Hapus Data ?',
        text: 'Setelah menekan "OK" data akan terhapus',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            swal('Berhasil', 'Data telah dihapus', 'success');
            setTimeout(function(){ 
                window.location.href = "admin-data-pengguna.html";
            }, 1500);
        } else {
            swal('Batal hapus data');
        }
    });
});

// SWEET ALERT HAPUS ARTIKEL
$("#swal-hapus-artikel").click(function() {
    swal({
        title: 'Hapus Artikel ?',
        text: 'Setelah menekan "OK" artikel akan terhapus',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            swal('Berhasil', 'Artikel telah dihapus', 'success');
            setTimeout(function(){ 
                window.location.href = "admin-artikel.html";
            }, 1500);
        } else {
            swal('Batal hapus artikel');
        }
    });
});

// SWEET ALERT EDIT PROFIL
$("#swal-edit-profil-umkm").click(function() {
    swal({
        title: 'Simpan Perubahan ?',
        text: 'Setelah menekan "OK" perubahan anda akan disimpan',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            swal('Berhasil Edit Profil', 'Profil UMKM telah diperbaharui', 'success');
            setTimeout(function(){ 
                window.location.href = "umkm-akun-profil.html";
            }, 1500);
        } else {
            swal('Batal simpan perubahan');
        }
    });
});

$("#swal-edit-profil-admin").click(function() {
  swal({
      title: 'Simpan Perubahan ?',
      text: 'Setelah menekan "OK" perubahan anda akan disimpan',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
          swal('Berhasil Edit Profil', 'Profil telah diperbaharui', 'success');
          setTimeout(function(){ 
              window.location.href = "admin-profil-admin.html";
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