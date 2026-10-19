// Mengambil elemen-elemen dari HTML
const modal = document.getElementById("lightbox");
const modalImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-btn");
const images = document.querySelectorAll(".gallery-img");

// Melakukan perulangan untuk memberikan event klik pada 9 gambar
images.forEach((img) => {
    img.addEventListener("click", function() {
        modal.style.display = "flex"; // Menampilkan pop-up
        modalImg.src = this.src;      // Mengambil alamat gambar yang diklik
    });
});

// Fungsi untuk menutup pop-up saat tombol silang (X) diklik
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Fungsi tambahan: Menutup pop-up jika pengguna mengklik area hitam di luar gambar
modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});