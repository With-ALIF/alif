const loadJSON = path => fetch(path).then(r => r.json())

const projectsContainer = document.getElementById("projectsContainer")
const skillsContainer = document.getElementById("skillsContainer")

Promise.all([
  loadJSON("data/meta.json"),
  loadJSON("data/logo.json"),
  loadJSON("data/navigator.json"),
  loadJSON("data/hero.json"),
  loadJSON("data/about.json"),
  loadJSON("data/stats.json"),
  loadJSON("data/technologies.json"),
  loadJSON("data/education.json"),
  loadJSON("data/project.json"),
  loadJSON("data/skill.json"),
  loadJSON("data/contact.json"),
  loadJSON("data/footer.json")
]).then(([
  meta,
  logoData,
  navigation,
  hero,
  about,
  statsData,
  technologies,
  educationData,
  projectsData,
  skillsData,
  contactData,
  footerData
]) => {

  document.title = meta.title
  document.querySelector("meta[name='description']").content = meta.description

  logo.innerHTML = logoData.html

  nav.innerHTML = navigation.map(n =>
    `<a href="${n.link}">${n.label}</a>`
  ).join("")

  const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});


  heroSubtitle.textContent = hero.subtitle
  heroTitle.innerHTML = `
    <span>${hero.title.line1}</span>
    <span class="text-gradient">${hero.title.line2}</span>
  `
  heroDesc.textContent = hero.description
  heroBtns.innerHTML = hero.buttons.map(b =>
    `<a href="${b.link}" class="btn btn-${b.style}">${b.text}</a>`
  ).join("")

  aboutContent.innerHTML = `
    <p class="section-label">${about.label}</p>
    <h2 class="section-title">${about.title}</h2>
    ${about.paragraphs.map(p => `<p class="about-text">${p}</p>`).join("")}
  `

  stats.innerHTML = `
    <div class="stats-grid">
      ${statsData.map(s => `
        <div class="stat-card">
          <div class="stat-number">${s.number}</div>
          <div class="stat-label">${s.label}</div>
        </div>
      `).join("")}
    </div>
  `

  techTitle.textContent = technologies.label
  techTags.innerHTML = technologies.items.map(t =>
    `<span class="tech-tag">${t}</span>`
  ).join("")

  education.innerHTML = `
     <h2 class="section-title">
      Academic <span class="text-gradient">Background</span>
    </h2>

    <div class="education-grid">
      ${educationData.map(e => `
        <div class="card">
          <h3>${e.degree}</h3>
          <p>${e.institute}</p>
          <small>${e.year}</small>
        </div>
      `).join("")}
    </div>
  `

projectHeader.innerHTML = `
  <h2 class="section-title">${projectsData.title}</h2>
`;

projectsContainer.innerHTML = `
  <div class="projects-grid">
    ${projectsData.items.map(p => `
      <div class="project-card">

        <div class="project-image">
          <img src="${p.image}" alt="${p.title}">
        </div>

        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-description">${p.description}</p>

          <div class="project-tags">
            ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
          </div>

          <div class="project-actions">
            <a href="${p.github}" class="btn-project">GitHub</a>
            <a href="${p.demo}" class="btn-project primary">Live Demo</a>
          </div>
        </div>

      </div>
    `).join("")}
  </div>
`;


  skillsHeader.innerHTML = `
    <p class="section-label">${skillsData.label}</p>
    <h2 class="section-title">${skillsData.title}</h2>
  `

  skillsContainer.innerHTML = `
    <div class="skills-grid">
      ${skillsData.items.map(s => `
        <div class="skill-card">
          <h3 class="skill-title">${s.title}</h3>
          <p class="skill-description">${s.description}</p>
          <ul>
            ${s.points.map(p => `<li class="skill-item">${p}</li>`).join("")}
          </ul>
        </div>
      `).join("")}
    </div>
  `

  contact.innerHTML = `
    <p class="section-label">${contactData.label}</p>
    <h2 class="section-title">${contactData.title}</h2>
    <p>${contactData.description}</p>
    <p>Email: ${contactData.details.email}</p>
    <p>Location: ${contactData.details.location}</p>
  `

footer.innerHTML = `
  <div class="logo">${logoData.html}</div>
  <p class="footer-text">${footerData.text || ""}</p>
`

}).catch(console.error)
