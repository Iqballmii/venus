// Variabel untuk menghitung jumlah klik
let klik = 0;

function changeMessage() {
  klik++; // Menambah hitungan klik

  // Mengambil elemen yang dibutuhkan
  const pesanElemen = document.getElementById('message');
  const tombol = document.querySelector('button');
  const lagu = document.getElementById('mySong');

  if (klik === 1) {
    // --- AKSI KLIK PERTAMA ---
    pesanElemen.style.color = "#f5e6c8"; 
    tombol.innerHTML = "ksksksks";
    
    console.log("Klik pertama: Pesan berubah.");
  } 
  else if (klik === 2) {
    // --- AKSI KLIK KEDUA ---
    pesanElemen.innerHTML = "Merry Christmas, Odilia! 🎶❤️";
    tombol.innerHTML = "kontol";
    
    // 1. Putar lagu song.mp3
    if (lagu) {
      lagu.play().catch(error => {
        console.log("Gagal memutar musik: ", error);
      });
    }

    // 2. Pindah ke halaman odilia.html setelah delay sedikit (misal 2 detik)
    // Supaya lagunya sempat terdengar sebentar sebelum pindah
    setTimeout(() => {
      window.location.href = "odilia.html"; 
    }, 2000); 

    console.log("Klik kedua: Musik jalan & proses pindah halaman.");
  }
}