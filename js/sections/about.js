export function renderAbout(about) {
  aboutContent.innerHTML = `
    <h1 class="section-label">${about.label}</h1>
    <h2 class="section-title">${about.title}</h2>
    ${about.paragraphs.map(p => `<p class="about-text">${p}</p>`).join("")}
  `
}
