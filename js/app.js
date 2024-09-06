// teks muncul keatas 1 per 1
const galleryText = document.getElementById('gallery');
const textContent = galleryText.textContent;

galleryText.innerHTML = '';
for (let i = 0; i < textContent.length; i++) {
  const letter = document.createElement('span');
  letter.textContent = textContent[i];
  galleryText.appendChild(letter);
}

function munculkanHuruf() {
  const huruf = galleryText.querySelectorAll('span');
  let delay = 0.1;

  huruf.forEach((huruf) => {
    setTimeout(() => {
      huruf.classList.add('muncul');
    }, delay * 1000);
    delay += 0.1;
  });
}

window.addEventListener('scroll', () => {
  const posisiTeks = galleryText.getBoundingClientRect().top;
  const tinggiLayar = window.innerHeight;

  if (posisiTeks < tinggiLayar) {
    munculkanHuruf();
  }
});

// overlay color
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  const overlay = item.querySelector('.overlay');
  const image = item.querySelector('img');

  image.addEventListener('mouseover', () => {
    const hue = 360 * Math.random(); // Nilai hue acak
    const saturation = Math.floor(Math.random() * 31) + 50; // Saturasi antara 50% - 80%
    const lightness = 80; // Lightness tetap di 80% untuk pastel

    overlay.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  });
});
