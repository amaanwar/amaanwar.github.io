// Website behavior. Edit content.js for most updates.
const $ = (selector) => document.querySelector(selector);
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));

function renderProjects() {
  $('#project-grid').innerHTML = SITE.projects.map((project, index) => `
    <article class="project-card">
      <button class="project-open" type="button" data-project="${index}" aria-label="Read more about ${escapeHTML(project.title)}">
        <div class="project-art ${escapeHTML(project.accent)}">
          ${project.image
            ? `<img src="${escapeHTML(project.image)}" alt="Image for ${escapeHTML(project.title)}" loading="lazy">`
            : `<span class="art-number">${escapeHTML(project.number)}</span><span class="art-shape" aria-hidden="true"></span><span class="art-caption">RESEARCH NOTES / ${escapeHTML(project.number)}</span>`}
          <span class="art-arrow" aria-hidden="true">↗</span>
        </div>
        <div class="project-meta">${escapeHTML(project.category)}</div>
        <h3>${escapeHTML(project.title)}</h3>
        <p>${escapeHTML(project.summary)}</p>
      </button>
    </article>
  `).join('');

  document.querySelectorAll('[data-project]').forEach((button) => {
    button.addEventListener('click', () => openProject(Number(button.dataset.project)));
  });
}

function openProject(index) {
  const project = SITE.projects[index];
  const dialog = document.createElement('dialog');
  dialog.className = 'project-dialog';
  dialog.innerHTML = `
    <div class="dialog-inner">
      <button class="dialog-close" type="button" aria-label="Close project">✕</button>
      <div class="section-kicker">PROJECT ${escapeHTML(project.number)} / ${escapeHTML(project.category)}</div>
      <h2>${escapeHTML(project.title)}</h2>
      <p class="dialog-lead">${escapeHTML(project.summary)}</p>
      <p>${escapeHTML(project.details)}</p>
    </div>`;
  document.body.appendChild(dialog);
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => dialog.remove());
  dialog.showModal();
}

function renderExperiences() {
  $('#experience-list').innerHTML = SITE.experiences.map((item) => `
    <div class="experience-row"><div><h3>${escapeHTML(item.role)}</h3><p>${escapeHTML(item.place)}</p></div><span>${escapeHTML(item.period)}</span></div>
  `).join('');
}

function renderContacts() {
  $('#contact-links').innerHTML = SITE.contacts.map((item) => `
    <a href="${escapeHTML(item.url)}" ${item.url.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>${escapeHTML(item.label)} <span aria-hidden="true">↗</span></a>
  `).join('');
}

function typeIntro() {
  const element = $('#typewriter');
  const text = SITE.typingText;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    element.textContent = text;
    $('.cursor').classList.add('finished');
    return;
  }
  let index = 0;
  const step = () => {
    element.textContent = text.slice(0, ++index);
    if (index < text.length) window.setTimeout(step, SITE.typingSpeed);
    else $('.cursor').classList.add('finished');
  };
  window.setTimeout(step, 450);
}

$('#hero-description').textContent = SITE.introduction;
$('#about-text').textContent = SITE.about;
$('#year').textContent = new Date().getFullYear();
renderProjects();
renderExperiences();
renderContacts();
typeIntro();
