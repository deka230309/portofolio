document.addEventListener("DOMContentLoaded", function () {
  // Menjalankan Typed.js setelah halaman selesai dimuat
  new Typed(".about-text", {
    strings: [
      "Hai, saya <strong>Deka Alfred</strong>, seorang pelajar di SMK Telkom Purwokerto yang memiliki minat besar dalam dunia teknologi dan pengembangan perangkat lunak. Saya selalu berusaha untuk meningkatkan keterampilan saya dalam coding dan pengembangan aplikasi.",
      "Saya percaya bahwa belajar dan berbagi pengetahuan adalah kunci untuk berkembang di dunia teknologi."
    ],
    typeSpeed: 10,
    showCursor: false
  });

  // Fungsi untuk animasi mengambang
  function animateFloating() {
    const element = document.getElementById('Deka');
    if (!element) return;

    let position = 0;
    let direction = 1;

    function float() {
      if (position >= 20) direction = -1;
      if (position <= 0) direction = 1;
      position += direction;
      element.style.transform = `translateY(${position}px)`;
      requestAnimationFrame(float);
    }

    float();
  }

  animateFloating();
});
