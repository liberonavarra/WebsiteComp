// =====================================================
//  LIGHTBOX condiviso — usato da archivio.html e scroll.html
//  Un solo posto in cui vive il visualizzatore a schermo
//  intero: ogni modifica futura vale per entrambe le pagine.
//
//  Uso:  const lb = creaLightbox(listaFoto);
//        lb.apri(indice);
// =====================================================

function creaLightbox(foto) {
  // costruisce la struttura e la aggiunge alla pagina
  const box = document.createElement('div');
  box.className = 'lightbox';
  box.innerHTML =
    '<button class="lb-close">[x]</button>' +
    '<button class="lb-prev">&#9664;</button>' +
    '<img src="" alt="">' +
    '<button class="lb-next">&#9654;</button>' +
    '<div class="lb-counter"></div>';
  document.body.appendChild(box);

  const img = box.querySelector('img');
  const counter = box.querySelector('.lb-counter');
  let indice = 0;

  function aggiorna() {
    img.src = foto[indice];
    counter.textContent = (indice + 1) + ' / ' + foto.length;
  }
  function apri(i) {
    indice = i;
    aggiorna();
    box.classList.add('open');
  }
  function chiudi() {
    box.classList.remove('open');
  }
  function prev() {
    indice = (indice - 1 + foto.length) % foto.length;
    aggiorna();
  }
  function next() {
    indice = (indice + 1) % foto.length;
    aggiorna();
  }

  box.querySelector('.lb-prev').addEventListener('click', prev);
  box.querySelector('.lb-next').addEventListener('click', next);
  box.querySelector('.lb-close').addEventListener('click', chiudi);

  // click sullo sfondo nero = chiudi
  box.addEventListener('click', (e) => {
    if (e.target === box) chiudi();
  });

  // tastiera: frecce per navigare, ESC per chiudere
  document.addEventListener('keydown', (e) => {
    if (!box.classList.contains('open')) return;
    if (e.key === 'Escape') chiudi();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });

  return { apri };
}
