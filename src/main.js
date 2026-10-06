import './style.css';

const songs = [
  {
    id: 'tumi-ele-nirob-hridoy',
    title: 'তুমি এলে নীরব হৃদয়',
    genre: 'Bengali Romantic',
    price: 99,
    buylink: '/https://rzp.io/rzp/NyICVqJg',
    cover: '/images/tumi-ele-nirob-hridoy.jpg',
    audio: '/music/tumi-ele-nirob-hridoy.mp3',
    description: 'ভোরের কুয়াশা, নদীর পাড় আর ফিরে পাওয়া ভালোবাসার এক নরম গল্প।'
  },
  {
    id: 'notun-sokal',
    title: 'নতুন সকাল',
    genre: 'Hopeful Bengali',
    price: 79,
    cover: '/images/song-placeholder.jpg',
    audio: '/music/notun-sokal.mp3',
    description: 'অন্ধকার পেরিয়ে নতুন দিনের আশার গান।'
  },
  {
    id: 'moner-bristi',
    title: 'মনের বৃষ্টি',
    genre: 'Acoustic',
    price: 79,
    cover: '/images/moner-bristi.jpg', 
    audio: '/music/moner-bristi.mp3',
    description: 'বৃষ্টিভেজা স্মৃতি আর নীরব অনুভূতির acoustic গল্প।'
  }
];

const videos = [
  {
    title: 'তুমি এলে নীরব হৃদয় — Official Music Video',
    src: '/videos/tumi-ele-nirob-hridoy.mp4',
    thumb: '/images/tumi-ele-nirob-hridoy.jpg'
  },
  {
    title: 'Studio Session — Swarnava Sen',
    src: '/videos/studio-session.mp4',
    thumb: '/images/song-placeholder.jpg'
  }
];

const app = document.querySelector('#app');

app.innerHTML = `
  <header class="nav">
    <a class="brand" href="#home"><span>SWARNAVA</span><small>ORIGINAL MUSIC</small></a>
    <button class="menu" aria-label="Open menu">☰</button>
    <nav>
      <a href="#home">Home</a>
      <a href="#store">Music Store</a>
      <a href="#videos">Videos</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section id="home" class="hero">
      <div class="mist"></div>
      <div class="hero-copy">
        <p class="eyebrow">ORIGINAL BENGALI MUSIC</p>
        <h1>গানের ভেতরেই<br><em>আমার গল্প।</em></h1>
        <p class="lead">শব্দ, সুর আর অনুভূতিতে তৈরি আমার নিজের গান—শুনুন, দেখুন এবং আপনার প্রিয় গানটি সংগ্রহ করুন।</p>
        <div class="actions">
          <a class="btn primary" href="#store">গান শুনুন ও কিনুন</a>
          <a class="btn ghost" href="#videos">ভিডিও দেখুন</a>
        </div>
      </div>
      <div class="vinyl-wrap" aria-hidden="true">
        <div class="vinyl"><div class="label">SS</div></div>
      </div>
    </section>

    <section class="quote-strip">
      <p>“প্রতিটি গান একটি অনুভূতি। প্রতিটি সুর একটি স্মৃতি।”</p>
    </section>

    <section id="store" class="section">
      <div class="section-head">
        <div><p class="eyebrow">MUSIC STORE</p><h2>আমার গান</h2></div>
        <p>Original tracks • High quality audio • Personal collection</p>
      </div>
      <div class="song-grid" id="songGrid"></div>
    </section>

    <section id="videos" class="section alt">
      <div class="section-head">
        <div><p class="eyebrow">WATCH</p><h2>ভিডিও</h2></div>
        <p>Music videos, live sessions & studio moments.</p>
      </div>
      <div class="video-grid" id="videoGrid"></div>
    </section>

    <section id="about" class="section about">
      <div class="about-card">
        <p class="eyebrow">ABOUT THE ARTIST</p>
        <h2>Swarnava Sen</h2>
        <p>আমি Swarnava Sen। নিজের লেখা, সুর ও অনুভূতি দিয়ে বাংলা গান তৈরি করি। এই website-টি আমার original music, video এবং listeners-দের সঙ্গে সরাসরি connect করার জন্য তৈরি।</p>
        <p>আপনি এখানে আমার গান শুনতে পারবেন, music video দেখতে পারবেন এবং পছন্দের track সংগ্রহ করতে পারবেন।</p>
      </div>
      <div class="stats">
        <div><strong>ORIGINAL</strong><span>নিজস্ব গান</span></div>
        <div><strong>HQ AUDIO</strong><span>High quality release</span></div>
        <div><strong>DIRECT</strong><span>Artist to listener</span></div>
      </div>
    </section>

    <section id="contact" class="section contact">
      <div class="contact-card">
        <p class="eyebrow">CONTACT</p>
        <h2>যোগাযোগ করুন</h2>
        <p>গান, collaboration, licensing বা অন্য কোনো কাজের জন্য সরাসরি যোগাযোগ করতে পারেন।</p>
        <div class="contact-links">
          <a href="mailto:swarnavasen299@gmail.com">✉ swarnavasen299@gmail.com</a>
          <a href="tel:+918777453056">☎ +91 87774 53056</a>
        </div>
      </div>
      <form id="contactForm">
        <input name="name" placeholder="আপনার নাম" required />
        <input name="email" type="email" placeholder="আপনার email" required />
        <textarea name="message" rows="5" placeholder="আপনার message" required></textarea>
        <button class="btn primary" type="submit">Message পাঠান</button>
      </form>
    </section>
  </main>

  <footer>
    <div><strong>SWARNAVA</strong><span> © ${new Date().getFullYear()} Swarnava Sen. All rights reserved.</span></div>
    <a href="#home">Back to top ↑</a>
  </footer>

  <div class="player" id="player">
    <div class="player-art" id="playerArt"></div>
    <div class="player-info"><b id="playerTitle">কোনো গান নির্বাচন করুন</b><small id="playerGenre">Swarnava Sen</small></div>
    <button id="playBtn" aria-label="Play">▶</button>
    <audio id="audio"></audio>
  </div>

  <div class="modal hidden" id="buyModal">
    <div class="modal-box">
      <button class="close" id="closeModal">×</button>
      <p class="eyebrow">SECURE CHECKOUT</p>
      <h2 id="buyTitle"></h2>
      <p id="buyText"></p>
      <button class="btn primary full" id="checkoutBtn">Purchase — ₹<span id="buyPrice"></span></button>
      <small class="notice">Demo checkout: connect Razorpay/Stripe or another payment gateway on your server before accepting real payments. Never put secret keys in frontend code.</small>
    </div>
  </div>

  <div class="toast" id="toast"></div>
`;

const songGrid = document.querySelector('#songGrid');
songGrid.innerHTML = songs.map(song => `
  <article class="song-card">
    <div class="cover" style="background-image:url('${song.cover}')">
      <button class="play-cover" data-play="${song.id}">▶</button>
      <span class="price">₹${song.price}</span>
    </div>
    <div class="song-body">
      <span class="tag">${song.genre}</span>
      <h3>${song.title}</h3>
      <p>${song.description}</p>
      <div class="card-actions">
        <button class="text-btn" data-play="${song.id}">▶ Preview</button>
        <button class="buy" data-buy="${song.id}">Buy — ₹${song.price}</button>
        <button class="share" data-share="${song.id}" title="Share">↗</button>
      </div>
    </div>
  </article>
`).join('');

const videoGrid = document.querySelector('#videoGrid');
videoGrid.innerHTML = videos.map(v => `
  <article class="video-card">
    <div class="video-wrap">
      <video controls preload="metadata" poster="${v.thumb}" src="${v.src}"></video>
    </div>
    <h3>${v.title}</h3>
  </article>
`).join('');

const audio = document.querySelector('#audio');
const playBtn = document.querySelector('#playBtn');
const playerTitle = document.querySelector('#playerTitle');
const playerGenre = document.querySelector('#playerGenre');
const playerArt = document.querySelector('#playerArt');
let currentSong = null;

function playSong(id) {
  const song = songs.find(s => s.id === id);
  if (!song) return;
  currentSong = song;
  audio.src = song.audio;
  audio.play().catch(() => showToast('Preview চালাতে হলে audio file যোগ করুন।'));
  playerTitle.textContent = song.title;
  playerGenre.textContent = `${song.genre} • Swarnava Sen`;
  playerArt.style.backgroundImage = `url('${song.cover}')`;
  playBtn.textContent = '❚❚';
}

document.addEventListener('click', e => {
  const play = e.target.closest('[data-play]');
  if (play) playSong(play.dataset.play);

  const buy = e.target.closest('[data-buy]');
  if (buy) openBuy(buy.dataset.buy);

  const share = e.target.closest('[data-share]');
  if (share) shareSong(share.dataset.share);
});

playBtn.addEventListener('click', () => {
  if (!currentSong) return;
  if (audio.paused) { audio.play(); playBtn.textContent = '❚❚'; }
  else { audio.pause(); playBtn.textContent = '▶'; }
});
audio.addEventListener('ended', () => playBtn.textContent = '▶');

const modal = document.querySelector('#buyModal');
function openBuy(id) {
  const song = songs.find(s => s.id === id);
  document.querySelector('#buyTitle').textContent = song.title;
  document.querySelector('#buyText').textContent = `আপনি "${song.title}" কিনতে যাচ্ছেন।`;
  document.querySelector('#buyPrice').textContent = song.price;
  modal.classList.remove('hidden');
  document.querySelector('#checkoutBtn').dataset.song = id;
}
document.querySelector('#closeModal').onclick = () => modal.classList.add('hidden');
modal.addEventListener('click', e => { if (e.target === modal) modal.classList.add('hidden'); });
document.querySelector('#checkoutBtn').onclick = () => showToast('Payment gateway এখনও connect করা হয়নি — নিচের setup guide অনুসরণ করুন।');

async function shareSong(id) {
  const song = songs.find(s => s.id === id);
  const url = `${location.origin}${location.pathname}#store`;
  try {
    if (navigator.share) await navigator.share({ title: song.title, text: `শুনুন — ${song.title} by Swarnava Sen`, url });
    else { await navigator.clipboard.writeText(url); showToast('Share link copied!'); }
  } catch {}
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

document.querySelector('#contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const subject = encodeURIComponent(`Website message from ${fd.get('name')}`);
  const body = encodeURIComponent(`Name: ${fd.get('name')}\nEmail: ${fd.get('email')}\n\n${fd.get('message')}`);
  location.href = `mailto:swarnavasen299@gmail.com?subject=${subject}&body=${body}`;
});

document.querySelector('.menu').addEventListener('click', () => {
  document.querySelector('.nav nav').classList.toggle('open');
});
document.querySelectorAll('.nav nav a').forEach(a => a.addEventListener('click', () => document.querySelector('.nav nav').classList.remove('open')));
