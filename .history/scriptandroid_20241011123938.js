// Mengambil input pencarian dan menambahkan event listener untuk pencarian produk
document.getElementById("searchInput").addEventListener("input", function() {
    const searchQuery = this.value.toLowerCase();  // Mengonversi input ke lowercase
    const products = document.querySelectorAll(".product");  // Mengambil semua elemen produk

    products.forEach(product => {
        const productName = product.querySelector("a").innerText.toLowerCase();  // Nama produk
        if (productName.includes(searchQuery)) {
            product.style.display = "flex";  // Menampilkan produk jika sesuai
        } else {
            product.style.display = "none";  // Menyembunyikan produk jika tidak sesuai
        }
    });
});
let nav_list = document.getElementById("nav-list");
let openMenu = document.querySelector(".menuopen");
let cross = document.querySelector(".cross");
openMenu.addEventListener("click", () => {
  nav_list.style.opacity = "100%";
  openMenu.style.display = "none";
});
cross.addEventListener("click", () => {
  nav_list.style.opacity = "0%";
  setTimeout(() => {
    openMenu.style.display = "block";
  }, 400);
});

document.getElementById("searchInput").addEventListener("input", function() {
    const searchQuery = this.value.toLowerCase();  // Mengonversi input ke lowercase
    const products = document.querySelectorAll(".product");  // Mengambil semua elemen produk

    products.forEach(product => {
        const productName = product.querySelector("ul").innerText.toLowerCase();  // Nama produk
        if (productName.includes(searchQuery)) {
            product.style.display = "flex";  // Menampilkan produk jika sesuai
        } else {
            product.style.display = "none";  // Menyembunyikan produk jika tidak sesuai
        }
    });
});

// Fungsi untuk mengubah status spesifikasi aktif/tidak aktif
function toggleSpec(productElement) {
    productElement.classList.toggle('active');  // Menambahkan atau menghapus kelas 'active'
}

// Menampilkan spesifikasi produk
function showSpec(productElement) {
    const specBox = productElement.querySelector('.spec-box');  // Mengambil elemen spesifikasi
    specBox.style.opacity = "1";  // Mengatur opacity spesifikasi menjadi 1
    specBox.style.visibility = "visible";  // Mengatur visibility menjadi visible
}


// Menyembunyikan spesifikasi produk
function hideSpec(productElement) {
    const specBox = productElement.querySelector('.spec-box');  // Mengambil elemen spesifikasi
    specBox.style.opacity = "0";  // Mengatur opacity menjadi 0
    specBox.style.visibility = "hidden";  // Mengatur visibility menjadi hidden
}

// Menambah event listener untuk tombol 'Check Reviews' produk 1
document.getElementById('check-reviews-btn1').addEventListener('click', function() {
    var reviewSection = document.getElementById('review-section1');  // Mengambil elemen review section
    if (reviewSection.style.display === 'none' || reviewSection.style.display === '') {
        reviewSection.style.display = 'block';  // Menampilkan review jika disembunyikan
        this.textContent = 'Hide Reviews';  // Mengubah teks tombol menjadi 'Hide Reviews'
    } else {
        reviewSection.style.display = 'none';  // Menyembunyikan review jika ditampilkan
        this.textContent = 'Check Reviews';  // Mengubah teks tombol menjadi 'Check Reviews'
    }
});

// Menambah event listener untuk tombol 'Check Reviews' produk 2
document.getElementById('check-reviews-btn2').addEventListener('click', function() {
    var reviewSection = document.getElementById('review-section2');
    if (reviewSection.style.display === 'none' || reviewSection.style.display === '') {
        reviewSection.style.display = 'block';
        this.textContent = 'Hide Reviews';
    } else {
        reviewSection.style.display = 'none';
        this.textContent = 'Check Reviews';
    }
});

// Menambah event listener untuk tombol 'Check Reviews' produk 3
document.getElementById('check-reviews-btn3').addEventListener('click', function() {
    var reviewSection = document.getElementById('review-section3');
    if (reviewSection.style.display === 'none' || reviewSection.style.display === '') {
        reviewSection.style.display = 'block';
        this.textContent = 'Hide Reviews';
    } else {
        reviewSection.style.display = 'none';
        this.textContent = 'Check Reviews';
    }
});

// Fungsi untuk menambahkan ulasan baru
function addReview(event) {
    event.preventDefault();  // Mencegah pengiriman form default

    const form = event.target;  // Mendapatkan form yang memicu event
    const reviewSection = form.closest('.review-section');  // Mencari bagian review terdekat
    const reviewsContainer = reviewSection.querySelector('.reviews');  // Container ulasan

    const reviewText = form.querySelector('textarea[name="review"]').value;  // Mengambil teks ulasan
    const rating = form.querySelector('select[name="rating"]').value;  // Mengambil rating

    if (reviewText.trim() === '') {  // Validasi jika ulasan kosong
        alert('Please write a review before submitting.');  // Pesan peringatan
        return;  // Menghentikan eksekusi
    }

    const newReviewCard = document.createElement('div');  // Membuat elemen ulasan baru
    newReviewCard.className = 'review-card';  // Memberi kelas 'review-card'
    newReviewCard.innerHTML = `
        <p><strong>You</strong></p>
        <p>${reviewText} ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</p>
    `;

    reviewsContainer.appendChild(newReviewCard);  // Menambah ulasan ke container

    form.querySelector('textarea[name="review"]').value = '';  // Mengosongkan textarea
    form.querySelector('select[name="rating"]').value = '5';  // Mengatur ulang rating ke default
}

// Menambahkan event listener untuk setiap form di dalam bagian ulasan
document.querySelectorAll('.review-section form').forEach(function(form) {
    form.addEventListener('submit', addReview);  // Menjalankan fungsi 'addReview' saat form disubmit
});

