window.addEventListener('load', () => {
  const semicircle = document.querySelector('.dashed-semicircle');
  const boxes = document.querySelectorAll('.box');
  const svg = document.querySelector('svg.lines');

  const semicircleCenter = {
    x: semicircle.offsetLeft + semicircle.offsetWidth / 2,
    y: semicircle.offsetTop + semicircle.offsetHeight / 2,
  };

  const fixedLineLength = window.innerWidth * 0.03; // Stała długość linii (3% szerokości okna)

  boxes.forEach((box, index) => {
    // Oblicz kąt dla każdego boxa (np. równomierne rozmieszczenie w kątach 0°, 90°, 180°, 270°)
    const angle = (index / boxes.length) * Math.PI * 2;

    // Oblicz pozycję boxa względem środka koła
    const x = semicircleCenter.x + Math.cos(angle) * fixedLineLength;
    const y = semicircleCenter.y + Math.sin(angle) * fixedLineLength;

    // Ustaw pozycję boxa
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;

    // Stwórz linie łączące
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', semicircleCenter.x);
    line.setAttribute('y1', semicircleCenter.y);
    line.setAttribute('x2', x);
    line.setAttribute('y2', y);
    line.classList.add('line');
    svg.appendChild(line);
  });
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
