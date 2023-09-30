// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

var images = [
  "img/sosialisasi3.jpg",
  "img/sosialisasi2.jpg",
  "img/sosialisasi1.jpg",
  "img/uep1.jpg",
  "img/UEP2.jpg",
  "img/fotodengandosenpembimbing.jpeg",
  "img/fotoanggota.jpeg",
  "img/fotoalat.jpeg",
  "img/fotoalatsenja.jpeg",
];
var index = 0;

function showImage() {
  document.getElementById("slide").src = images[index];
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}

function prevImage() {
  index = (index + images.length - 1) % images.length;
  showImage();
}

document.getElementById("prev").addEventListener("click", prevImage);
document.getElementById("next").addEventListener("click", nextImage);

// Atur interval otomatis (setiap 3 detik)
var slideInterval = setInterval(nextImage, 3000);

// Hentikan interval ketika mouse masuk ke slide
document.getElementById("slide").addEventListener("mouseenter", function () {
  clearInterval(slideInterval);
});

// Mulai kembali interval saat mouse meninggalkan slide
document.getElementById("slide").addEventListener("mouseleave", function () {
  slideInterval = setInterval(nextImage, 3000);
});
