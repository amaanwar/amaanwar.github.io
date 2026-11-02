document.getElementById('year').textContent = new Date().getFullYear();
const cv = document.querySelector('[data-cv]');
cv.addEventListener('click', async (event) => {
  // Remove this guard once you add assets/Ama_Anwar_CV.pdf.
  if (cv.dataset.ready !== 'true') { event.preventDefault(); alert('Add your CV as assets/Ama_Anwar_CV.pdf, then set data-ready="true" on the CV link in index.html.'); }
});
