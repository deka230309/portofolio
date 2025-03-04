document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("background-music");
    audio.volume = 0.5; // Set volume ke 50%
    
    // Coba mainkan audio secara otomatis
    let playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {
            // Autoplay berhasil
        }).catch(error => {
            // Jika autoplay gagal, munculkan tombol Play
            let playButton = document.createElement("button");
            playButton.innerText = "Putar Musik 🎵";
            playButton.style.position = "fixed";
            playButton.style.bottom = "20px";
            playButton.style.right = "20px";
            playButton.style.padding = "10px";
            playButton.style.backgroundColor = "#008CBA";
            playButton.style.color = "#fff";
            playButton.style.border = "none";
            playButton.style.borderRadius = "5px";
            playButton.style.cursor = "pointer";
            document.body.appendChild(playButton);
            
            // Jika tombol diklik, mainkan audio
            playButton.addEventListener("click", function () {
                audio.play();
                playButton.remove(); // Hapus tombol setelah diputar
            });
        });
    }

    // Efek mengetik untuk "Hai, aku Deka Alfred"
    let textElement = document.getElementById("typing-text");
    let text = "Hai, aku Deka Alfred";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    
    textElement.innerHTML = ""; // Kosongkan teks sebelum animasi
    typeWriter();
});
