/*
window.addEventListener('load', function () {
  const boxes = document.querySelectorAll('.box');
  const semicircle = document.querySelector('.dashed-semicircle');
  const lines = document.querySelectorAll('.line');
  let isAnimating = false;

  // Funkcja pomocnicza do rysowania linii
  function setLine(line, box) {
    const boxPos = box.getBoundingClientRect();
    const semicirclePos = semicircle.getBoundingClientRect();

    const boxLeftX = boxPos.left; // Lewa krawędź boxa
    const boxMiddleY = boxPos.top + boxPos.height / 2; // Środek pionowy boxa

    // Współrzędne środka półokręgu
    const semicircleCenterX = semicirclePos.left + semicirclePos.width / 2;
    const semicircleCenterY = semicirclePos.top + semicirclePos.height / 2;

    // Obliczamy kąt, aby znaleźć najbliższy punkt na obwodzie półokręgu
    const dx = boxLeftX - semicircleCenterX; // Różnica na osi X
    const dy = boxMiddleY - semicircleCenterY; // Różnica na osi Y
    const angle = Math.atan2(dy, dx); // Kąt w radianach

    // Promień półokręgu
    const radius = semicirclePos.width / 2;

    // Obliczamy współrzędne punktu na obwodzie półokręgu
    const x2 = semicircleCenterX + radius * Math.cos(angle); // X współrzędna punktu na obwodzie
    const y2 = semicircleCenterY + radius * Math.sin(angle); // Y współrzędna punktu na obwodzie

    // Ustawienie współrzędnych linii
    line.setAttribute('x1', boxLeftX); // Lewa krawędź boxa
    line.setAttribute('y1', boxMiddleY); // Środek pionowy boxa
    line.setAttribute('x2', x2); // Punkt na obwodzie półokręgu
    line.setAttribute('y2', y2); // Punkt na obwodzie półokręgu
  }

  // Funkcja do aktualizacji wszystkich linii
  function updateLines() {
    boxes.forEach((box, index) => {
      setLine(lines[index], box);
    });

    if (isAnimating) {
      requestAnimationFrame(updateLines); // Kontynuuj aktualizację w czasie animacji
    }
  }

  // Nasłuchiwanie zdarzeń
  window.addEventListener('resize', updateLines); // Skalowanie okna

  boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
      const activeBox = document.querySelector('.box.active');
      if (activeBox && activeBox !== box) {
        activeBox.classList.remove('active');
      }
      box.classList.add('active');
      isAnimating = true; // Rozpocznij aktualizację w czasie rzeczywistym
      requestAnimationFrame(updateLines);
    });

    box.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (!box.matches(':hover')) {
          box.classList.remove('active');
        }
        isAnimating = false; // Zatrzymaj aktualizację po zakończeniu animacji
      }, 300); // Zgodne z czasem w CSS
    });
  });

  // Pierwsze rysowanie linii
  updateLines();
});

*/

window.addEventListener('load', function () {
  const boxes = document.querySelectorAll('.box');
  const semicircle = document.querySelector('.dashed-semicircle');
  const lines = document.querySelectorAll('.line');

  // Funkcja pomocnicza do rysowania linii
  function setLine(line, box) {
    const boxPos = box.getBoundingClientRect();
    const semicirclePos = semicircle.getBoundingClientRect();

    const boxLeftX = boxPos.left; // Lewa krawędź boxa
    const boxMiddleY = boxPos.top + boxPos.height / 2; // Środek pionowy boxa

    // Współrzędne środka półokręgu
    const semicircleCenterX = semicirclePos.left + semicirclePos.width / 2;
    const semicircleCenterY = semicirclePos.top + semicirclePos.height / 2;

    // Obliczamy kąt, aby znaleźć najbliższy punkt na obwodzie półokręgu
    const dx = boxLeftX - semicircleCenterX; // Różnica na osi X
    const dy = boxMiddleY - semicircleCenterY; // Różnica na osi Y
    const angle = Math.atan2(dy, dx); // Kąt w radianach

    // Promień półokręgu
    const radius = semicirclePos.width / 2;

    // Obliczamy współrzędne punktu na obwodzie półokręgu
    const x2 = semicircleCenterX + radius * Math.cos(angle); // X współrzędna punktu na obwodzie
    const y2 = semicircleCenterY + radius * Math.sin(angle); // Y współrzędna punktu na obwodzie

    // Ustawienie współrzędnych linii
    line.setAttribute('x1', boxLeftX); // Lewa krawędź boxa
    line.setAttribute('y1', boxMiddleY); // Środek pionowy boxa
    line.setAttribute('x2', x2); // Punkt na obwodzie półokręgu
    line.setAttribute('y2', y2); // Punkt na obwodzie półokręgu
  }

  // Funkcja do aktualizacji wszystkich linii
  function updateLines() {
    boxes.forEach((box, index) => {
      setLine(lines[index], box);
    });

    requestAnimationFrame(updateLines); // Pętla animacji - linie zawsze są aktualizowane
  }

  // Nasłuchiwanie zdarzeń
  window.addEventListener('resize', updateLines); // Skalowanie okna

  boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
      const activeBox = document.querySelector('.box.active');
      if (activeBox && activeBox !== box) {
        activeBox.classList.remove('active');
      }
      box.classList.add('active');
    });

    box.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (!box.matches(':hover')) {
          box.classList.remove('active');
        }
      }, 300); // Zgodne z czasem w CSS
    });
  });

  // Uruchomienie aktualizacji linii
  updateLines();
});


window.addEventListener('load', function () {
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {
    // Gdy myszka wejdzie na box
    box.addEventListener('mouseenter', () => {
      // Dezaktywuj inne boxy
      boxes.forEach(b => b.classList.remove('active'));
      // Aktywuj obecny box
      box.classList.add('active');
    });

    // Gdy myszka opuści box
    box.addEventListener('mouseleave', () => {
      // Dezaktywuj box po opuszczeniu
      box.classList.remove('active');
    });
  });
});
