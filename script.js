/* ============================================================
   SEMUA YANG PERLU KAMU EDIT ADA DI SINI — di bagian CONFIG.
   Tidak perlu mengubah file lain.
   ============================================================ */

const CONFIG = {
  // Nama yang muncul di halaman sampul & judul surat
  namaPacar: "Princess Niaa",

  // 1) PESAN
  // Ganti seluruh teks di bawah ini dengan pesan ulang tahunmu sendiri.
  // Tekan Enter untuk baris baru, akan tetap rapi di halaman.
  pesan: `Happy Birthday ya sayangg ❤️🥳 Selamat ulang tahun wanita gemasss kesayangan kiki. Tidak terasa ya, sekarang umur niaa bertambah lagi. Semakin bertambah umur, semakin banyak juga pengalaman, cerita, pelajaran, dan perjuangan yang sudah niaa lewati sampai bisa berada di titik sekarang. Kiki bangga sama niaa karena sudah berhasil melewati banyak hal, baik yang menyenangkan maupun yang sulit. Di hari spesial ini, kiki berdoa semoga niaa selalu diberikan kesehatan, umur yang panjang, keberkahan dalam setiap langkah, dan kelancaran dalam segala urusan yang sedang maupun akan dijalani. Semoga semua cita-cita, impian, dan harapan niaa bisa tercapai satu per satu. Semoga rezekinya semakin lancar, hatinya selalu tenang, dan kebahagiaan selalu menyertai niaa setiap hari. Karena kalau niaa bahagia, kiki juga ikut bahagia melihat senyum dan tawa niaa.

Tidak terasa juga ya sayang, ini sudah ulang tahun niaa yang ketiga selama bersama kiki. Rasanya senang sekali karena masih bisa menemani dan mengucapkan selamat ulang tahun untuk orang yang sangat berarti buat kiki. Kiki berharap ini bukan yang terakhir, tapi masih banyak ulang tahun niaa berikutnya yang bisa kiki rayakan bersama. Kalau bisa sampai niaa tua nanti, sampai rambut kita sama-sama memutih, kiki masih ada di samping niaa untuk mengucapkan "selamat ulang tahun" dan memberikan doa terbaik buat niaa.

Kiki juga berharap hubungan kita bisa terus langgeng, semakin kuat, dan semakin dewasa. Semoga kita selalu diberikan kesabaran, pengertian, dan kemampuan untuk saling memperbaiki diri. Kalau ada kekurangan, semoga kita bisa belajar bersama untuk menjadi pasangan yang lebih baik lagi. Semoga setiap masalah yang datang bisa kita hadapi bersama, bukan malah menjauhkan kita. Karena kiki ingin hubungan ini terus bertumbuh menjadi hubungan yang penuh cinta, kepercayaan, dan kebahagiaan.

Terima kasih ya sayang, sudah hadir dalam hidup kiki, sudah menemani hari-hari kiki, mendengarkan cerita-cerita kiki, dan menjadi salah satu alasan kenapa banyak hari terasa lebih indah. Semoga di umur yang baru ini niaa mendapatkan banyak hal baik yang selama ini diharapkan dan semoga semua doa-doa baik yang belum terwujud bisa segera dikabulkan oleh Tuhan.

Sekali lagi, selamat ulang tahun ya sayangg. Jangan lupa hari ini harus banyak senyum, banyak bahagia, dan jangan sedih-sedih. Nikmati hari spesial niaa karena hari ini adalah hari lahir wanita yang sangat spesial buat kiki. ❤️🎂🎉 I love you, sayang. Semoga kita bisa terus bersama dan merayakan banyak ulang tahun lainnya di masa depan. 🤍✨`,

  // Tanda tangan di akhir surat, contoh: "Yang selalu sayang kamu,"
  pengirim: "— Kiki, yang selalu sayang niaa 🤍",

  // 2) FOTO
  // Foto diambil dari folder "gambar/" — sudah terintegrasi otomatis.
  // Mau tambah caption? Ganti teks di setiap { src, caption }.
  fotos: [
    { src: "gambar/2.jpeg",  caption: "💗" },
    { src: "gambar/3.jpeg",  caption: "💗" },
    { src: "gambar/4.jpeg",  caption: "💗" },
    { src: "gambar/5.jpeg",  caption: "💗" },
    { src: "gambar/6.jpeg",  caption: "💗" },
    { src: "gambar/7.jpeg",  caption: "💗" },
    { src: "gambar/8.jpeg",  caption: "💗" },
    { src: "gambar/9.jpeg",  caption: "💗" },
    { src: "gambar/10.jpeg", caption: "💗" },
    { src: "gambar/11.jpeg", caption: "💗" },
    { src: "gambar/12.jpeg", caption: "💗" },
    { src: "gambar/13.jpeg", caption: "💗" },
    { src: "gambar/14.jpeg", caption: "💗" },
    { src: "gambar/15.jpeg", caption: "💗" },
    { src: "gambar/16.jpeg", caption: "💗" },
    { src: "gambar/17.jpeg", caption: "💗" },
    { src: "gambar/18.jpeg", caption: "💗" },
    { src: "gambar/20.jpeg", caption: "💗" },
    { src: "gambar/21.jpeg", caption: "💗" },
    { src: "gambar/22.jpeg", caption: "💗" },
    { src: "gambar/WhatsApp Image 2026-06-23 at 23.51.09.jpeg", caption: "💗" }
  ],

  // 3) LAGU
  // Simpan file musiknya di folder "audio/" dengan nama "lagu.mp3"
  // (atau ubah nama di bawah ini agar sesuai dengan nama filemu).
  musik: "music/Bagas%20Zaki%20-%20Bunga%20(Official%20Music%20Video).mp3"
};

/* ============================================================
   Bagian di bawah ini menjalankan animasi & menyusun halaman
   berdasarkan CONFIG di atas. Tidak perlu diubah.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  spawnFloatingHearts();
  setupEnvelope();
  setupLetterPage();
});

function spawnFloatingHearts() {
  const container = document.getElementById('ambientHearts');
  if (!container) return;
  const symbols = ['💗', '💕', '🩷'];
  const count = 9;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className = 'floating-heart';
    el.textContent = symbols[i % symbols.length];
    el.style.left = `${Math.random() * 92}%`;
    el.style.setProperty('--drift', `${(Math.random() * 60 - 30).toFixed(0)}px`);
    el.style.animationDuration = `${9 + Math.random() * 6}s`;
    el.style.animationDelay = `${Math.random() * 8}s`;
    el.style.fontSize = `${0.9 + Math.random() * 0.7}rem`;
    container.appendChild(el);
  }
}

function setupEnvelope() {
  const envelope = document.getElementById('envelopeBtn');
  const burst = document.getElementById('heartBurst');
  if (!envelope) return;

  envelope.addEventListener('click', (e) => {
    e.preventDefault();
    if (burst) {
      burst.innerHTML = '';
      const hearts = ['💗', '💕', '✨', '🩷'];
      for (let i = 0; i < 8; i++) {
        const span = document.createElement('span');
        span.textContent = hearts[i % hearts.length];
        const angle = (i / 8) * Math.PI * 2;
        const dist = 70 + Math.random() * 30;
        span.style.setProperty('--tx', `${Math.cos(angle) * dist}px`);
        span.style.setProperty('--ty', `${Math.sin(angle) * dist}px`);
        burst.appendChild(span);
      }
      burst.classList.add('is-active');
    }
    setTimeout(() => {
      window.location.href = envelope.getAttribute('href');
    }, 550);
  });

  const namaEl = document.getElementById('namaSampul');
  if (namaEl) namaEl.textContent = CONFIG.namaPacar;
}

function setupLetterPage() {
  const pesanEl = document.getElementById('pesanText');
  if (!pesanEl) return; // bukan halaman surat, berhenti di sini

  document.getElementById('topbarTitle').textContent = `Untuk ${CONFIG.namaPacar}`;
  document.getElementById('letterHeading').innerHTML =
    `Selamat Ulang Tahun,<br>${CONFIG.namaPacar} 👑🎂`;
  // Efek typewriter — mengetik pesan satu karakter per satu
  const pesanTtd = document.getElementById('pesanTtd');
  const fullText = CONFIG.pesan;
  let charIndex = 0;
  const SPEED = 18; // ms per karakter (lebih kecil = lebih cepat)

  pesanEl.textContent = '';
  pesanTtd.textContent = '';

  // Cursor berkedip selama mengetik
  pesanEl.classList.add('typewriter-active');

  function typeNext() {
    if (charIndex < fullText.length) {
      pesanEl.textContent += fullText[charIndex];
      charIndex++;
      // Scroll otomatis agar teks baru selalu terlihat
      pesanEl.scrollIntoView({ block: 'end', behavior: 'smooth' });
      setTimeout(typeNext, SPEED);
    } else {
      // Selesai mengetik — tampilkan tanda tangan dengan fade
      pesanEl.classList.remove('typewriter-active');
      pesanTtd.style.opacity = '0';
      pesanTtd.textContent = CONFIG.pengirim;
      setTimeout(() => {
        pesanTtd.style.transition = 'opacity 1s ease';
        pesanTtd.style.opacity = '1';
      }, 300);
    }
  }

  // Mulai mengetik setelah jeda kecil agar halaman siap
  setTimeout(typeNext, 600);

  // Slideshow foto — satu gambar tampil, berganti otomatis
  const gallery = document.getElementById('gallery');
  const fotos = CONFIG.fotos;
  let currentSlide = 0;
  let slideTimer = null;
  const SLIDE_INTERVAL = 3500; // ms antar slide

  // Buat struktur slideshow
  gallery.innerHTML = `
    <div class="slideshow">
      <button class="slideshow__arrow slideshow__arrow--prev" aria-label="Sebelumnya">&#8249;</button>
      <div class="slideshow__stage">
        <div class="polaroid slideshow__polaroid" id="slidePolaroid">
          <div class="polaroid__frame" id="slideFrame">
            <div class="polaroid__placeholder" id="slidePlaceholder">
              <span>📷</span><span>Memuat...</span>
            </div>
            <img id="slideImg" alt="Foto kenangan" />
          </div>
          <p class="polaroid__caption" id="slideCaption"></p>
        </div>
      </div>
      <button class="slideshow__arrow slideshow__arrow--next" aria-label="Berikutnya">&#8250;</button>
    </div>
    <div class="slideshow__dots" id="slideDots"></div>
  `;

  const slideImg     = document.getElementById('slideImg');
  const slideCaption = document.getElementById('slideCaption');
  const slidePlaceholder = document.getElementById('slidePlaceholder');
  const dotsWrap     = document.getElementById('slideDots');
  const polaroidEl   = document.getElementById('slidePolaroid');

  // Buat dots
  fotos.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'slideshow__dot' + (i === 0 ? ' is-active' : '');
    dot.setAttribute('aria-label', `Foto ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i));
    dotsWrap.appendChild(dot);
  });

  function updateDots() {
    dotsWrap.querySelectorAll('.slideshow__dot').forEach((d, i) => {
      d.classList.toggle('is-active', i === currentSlide);
    });
  }

  function goToSlide(idx) {
    // Fade out
    polaroidEl.classList.add('is-transitioning');
    clearTimeout(slideTimer);

    setTimeout(() => {
      currentSlide = (idx + fotos.length) % fotos.length;
      const foto = fotos[currentSlide];

      slideImg.classList.remove('loaded');
      slidePlaceholder.style.display = 'flex';

      slideImg.onload = () => {
        slideImg.classList.add('loaded');
        slidePlaceholder.style.display = 'none';
      };
      slideImg.onerror = () => {
        slidePlaceholder.innerHTML = '<span>📷</span><span>Foto tidak ditemukan</span>';
      };
      slideImg.src = foto.src;
      slideImg.alt = foto.caption || 'Foto kenangan';
      slideCaption.textContent = foto.caption || '';

      polaroidEl.classList.remove('is-transitioning');
      updateDots();
      scheduleNext();
    }, 300);
  }

  function scheduleNext() {
    clearTimeout(slideTimer);
    slideTimer = setTimeout(() => goToSlide(currentSlide + 1), SLIDE_INTERVAL);
  }

  // Tombol prev / next
  gallery.querySelector('.slideshow__arrow--prev')
    .addEventListener('click', () => goToSlide(currentSlide - 1));
  gallery.querySelector('.slideshow__arrow--next')
    .addEventListener('click', () => goToSlide(currentSlide + 1));

  // Mulai dari slide pertama
  goToSlide(0);

  // Musik — autoplay otomatis saat halaman pesan dibuka
  const audio = document.getElementById('bgMusic');
  audio.src = CONFIG.musik;
  audio.volume = 0.7;

  function startMusic() {
    audio.play().catch(() => {
      // Browser blokir autoplay — mainkan saat user pertama kali sentuh/klik
      const onGesture = () => audio.play();
      document.addEventListener('click',      onGesture, { once: true });
      document.addEventListener('touchstart', onGesture, { once: true });
    });
  }

  audio.addEventListener('canplay', startMusic, { once: true });
}