document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let button = document.querySelector(".btn");

    // Validasi jika ada input yang kosong
    if (name === "" || email === "" || message === "") {
        alert("Harap isi semua kolom!");
        return;
    }

    // Validasi format email menggunakan regex
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Masukkan email yang valid!");
        return;
    }

    // Nonaktifkan tombol sementara untuk mencegah spam klik
    button.disabled = true;
    button.innerHTML = "Mengirim...";
    button.style.background = "#ffcc00";

    setTimeout(() => {
        alert("Pesan Anda telah terkirim!");
        console.log(`Nama: ${name}, Email: ${email}, Pesan: ${message}`);
        
        // Reset form setelah submit
        document.getElementById('contact-form').reset();

        // Kembalikan tombol ke kondisi semula
        button.innerHTML = "Kirim";
        button.style.background = "linear-gradient(90deg, #00ccff, #0033cc)";
        button.disabled = false;
    }, 2000);
});