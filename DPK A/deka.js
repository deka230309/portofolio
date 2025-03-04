document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is working!');

    // menambahkan logika untuk memberikan pesan saat pengguna mengklik tautan pada kontak
    const whatsappLink = document.getElementById('whatsapp-link');
    const emailLink = document.getElementById('email-link');
    const instagramLink = document.getElementById('instagram-link');

    function showPopup(platform, url) {
        setTimeout(function() {
            alert("Terima kasih telah menghubungi kami melalui " + platform + "!");
            window.location.href = url; // Mengalihkan ke URL setelah pesan ditampilkan
        }, 300); // delay 300ms agar pengguna dapat melihat pesan sebelum membuka tautan
    }

    whatsappLink.addEventListener('click', function(e) {
        e.preventDefault(); 
        showPopup('WhatsApp', whatsappLink.href);
    });

    emailLink.addEventListener('click', function(e) {
        e.preventDefault();
        showPopup('Email', emailLink.href);
    });

    instagramLink.addEventListener('click', function(e) {
        e.preventDefault();
        showPopup('Instagram', instagramLink.href);
    });
});