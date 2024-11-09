let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
let autoSlideInterval;

// Fungsi untuk menampilkan slide berdasarkan indeks
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}

// Fungsi untuk slide berikutnya
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Fungsi untuk slide sebelumnya
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Mulai otomatisasi slide
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 2000); // Ubah slide setiap 3 detik
}

// Hentikan otomatisasi slide
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Memulai auto slide saat halaman dimuat
startAutoSlide();

// Mengaktifkan atau menghentikan auto slide saat tombol diklik
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        stopAutoSlide(); // Hentikan sementara auto slide saat tombol ditekan
        startAutoSlide(); // Mulai kembali auto slide setelah interaksi
    });
});