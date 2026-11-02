document.getElementById('year').textContent = new Date().getFullYear();

const cv = document.querySelector('[data-cv]');
if (cv) {
  cv.addEventListener('click', (event) => {
    if (cv.dataset.ready !== 'true') {
      event.preventDefault();
      alert('Add assets/Ama_Anwar_CV.pdf and set data-ready="true" on the CV link.');
    }
  });
}

const subtitle = document.getElementById('typed-subtitle');
if (subtitle && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const full = subtitle.dataset.text || subtitle.textContent;
  subtitle.textContent = '';
  let i = 0;
  const next = () => {
    if (i < full.length) {
      subtitle.textContent += full.charAt(i++);
      setTimeout(next, 55);
    }
  };
  setTimeout(next, 350);
}
