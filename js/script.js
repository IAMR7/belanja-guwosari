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

// IMAGE PREVIEW
imgInp.onchange = evt => {
    const [file] = imgInp.files
    if (file) {
      blah.src = URL.createObjectURL(file)
    }
}

var chats = [
  {
    text: 'Hi, dude!',
    position: 'left'
  },
  {
    text: 'Wat?',
    position: 'right'
  },
  {
    text: 'You wanna know?',
    position: 'left'
  },
  {
    text: 'Wat?!',
    position: 'right'
  },
  {
    typing: true,
    position: 'left'
  }
];
for(var i = 0; i < chats.length; i++) {
  var type = 'text';
  if(chats[i].typing != undefined) type = 'typing';
  $.chatCtrl('#mychatbox', {
    text: (chats[i].text != undefined ? chats[i].text : ''),
    picture: (chats[i].position == 'left' ? '../dist/img/avatar/avatar-1.png' : '../dist/img/avatar/avatar-2.png'),
    position: 'chat-'+chats[i].position,
    type: type
  });
}

$("#chat-form").submit(function() {
  var me = $(this);

  if(me.find('input').val().trim().length > 0) {      
    $.chatCtrl('#mychatbox', {
      text: me.find('input').val(),
      picture: '../dist/img/avatar/avatar-2.png',
    });
    me.find('input').val('');
  } 
  return false;
});

// CHAT PENJUAL
var chats = [
  {
    text: 'Halo Kak, Ingkung Gorengnya ready gak ya?',
    position: 'left'
  },
];
for(var i = 0; i < chats.length; i++) {
  var type = 'text';
  if(chats[i].typing != undefined) type = 'typing';
  $.chatCtrl('#mychatbox2', {
    text: (chats[i].text != undefined ? chats[i].text : ''),
    picture: (chats[i].position == 'left' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOfXsvJz_2Xd6SKqH6LCkQs2_9rd__b1PDXw&usqp=CAU' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbXQr_WMRVbfOokFa-HWqdrQGb5pDUkyoG9A&usqp=CAU'),
    position: 'chat-'+chats[i].position,
    type: type
  });
}
$("#chat-form2").submit(function() {
  var me = $(this);

  if(me.find('input').val().trim().length > 0) {      
    $.chatCtrl('#mychatbox2', {
      text: me.find('input').val(),
      picture: 'assets/img/warung-ndeso.png',
    });
    me.find('input').val('');
  } 
  return false;
});

// CHAT PEMBELI
var chatsPembeli = [
  {
    text: 'Halo kak, mau tanya ingkung yang ready yang rasa apa aja ya?',
    position: 'right'
  },
  {
    text: 'Yang tampil di halaman toko, itu ready semuanya kak',
    position: 'left'
  },
  {
    text: 'Oooh kok saya gak liat yang rica rica kak',
    position: 'right'
  },
  {
    text: 'Yang bumbu rica rica nya sedang kosong',
    position: 'left'
  },
];
for(var i = 0; i < chatsPembeli.length; i++) {
  var type = 'text';
  if(chatsPembeli[i].typing != undefined) type = 'typing';
  $.chatCtrl('#mychatbox3', {
    text: (chatsPembeli[i].text != undefined ? chatsPembeli[i].text : ''),
    picture: (chatsPembeli[i].position == 'left' ? 'http://127.0.0.1:5500/assets/img/warung-ndeso.png' : 'https://iamr7.github.io/assets/images/favicon.png'),
    position: 'chat-'+chatsPembeli[i].position,
    type: type
  });
}
$("#chat-form3").submit(function() {
  var me = $(this);

  if(me.find('input').val().trim().length > 0) {      
    $.chatCtrl('#mychatbox3', {
      text: me.find('input').val(),
      picture: 'https://iamr7.github.io/assets/images/favicon.png',
    });
    me.find('input').val('');
  } 
  return false;
});

// CHAT ADMIN
var chatsAdmin = [
  {
    text: 'Permisi Admin, saya memiliki kendala dengan UMKM saya',
    position: 'left'
  },
];
for(var i = 0; i < chatsAdmin.length; i++) {
  var type = 'text';
  if(chatsAdmin[i].typing != undefined) type = 'typing';
  $.chatCtrl('#mychatbox5', {
    text: (chatsAdmin[i].text != undefined ? chatsAdmin[i].text : ''),
    picture: (chatsAdmin[i].position == 'left' ? 'https://pbs.twimg.com/profile_images/1186463332695326720/607r-6rY_400x400.jpg' : 'assets/img/avatar/admin.png'),
    position: 'chat-'+chatsAdmin[i].position,
    type: type
  });
}
$("#chat-form5").submit(function() {
  var me = $(this);

  if(me.find('input').val().trim().length > 0) {      
    $.chatCtrl('#mychatbox5', {
      text: me.find('input').val(),
      picture: 'assets/img/avatar/admin.png',
    });
    me.find('input').val('');
  } 
  return false;
});

// CHAT DETAIL PRODUK DAN TOKO
var chatDetail = [
  {
    text: 'Yang rasa rica rica nya masih ada gak kak ?',
    position: 'right'
  },
  {
    text: 'Yang bumbu rica rica nya sedang kosong',
    position: 'left'
  },
];
for(var i = 0; i < chatDetail.length; i++) {
  var type = 'text';
  if(chatDetail[i].typing != undefined) type = 'typing';
  $.chatCtrl('#mychatbox4', {
    text: (chatDetail[i].text != undefined ? chatDetail[i].text : ''),
    picture: (chatDetail[i].position == 'left' ? 'https://ik.imagekit.io/tvlk/cul-asset/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/tvlk-prod-cul-assets/culinary/asset/REST_000-960x720-FIT_AND_TRIM-cc75c94b625065a494326affcd53ebc5.jpeg?tr=q-40,w-300,h-300&_src=imagekit' : 'https://iamr7.github.io/assets/images/favicon.png'),
    position: 'chat-'+chatDetail[i].position,
    type: type
  });
}
$("#chat-form4").submit(function() {
  var me = $(this);

  if(me.find('input').val().trim().length > 0) {      
    $.chatCtrl('#mychatbox4', {
      text: me.find('input').val(),
      picture: 'https://iamr7.github.io/assets/images/favicon.png',
    });
    me.find('input').val('');
  } 
  return false;
});