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
  loadJSON("data/education.json"),
  loadJSON("data/experience.json"),
  loadJSON("data/technologies.json"),
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
  educationData,
  experienceData,
  technologies,
  projectsData,
  skillsData,
  contactData,
  footerData
]) => {

  /* ================= META ================= */
  document.title = meta.title
  document.querySelector("meta[name='description']").content = meta.description

  /* ================= HEADER ================= */
  logo.innerHTML = logoData.html
  nav.innerHTML = navigation.map(n =>
    `<a href="${n.link}">${n.label}</a>`
  ).join("")

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active")
  })

  /* ================= HERO ================= */
  heroSubtitle.textContent = hero.subtitle
  heroTitle.innerHTML = `
    <span>${hero.title.line1}</span>
    <span class="text-gradient">${hero.title.line2}</span>
  `
  heroDesc.textContent = hero.description

  heroBtns.innerHTML = hero.buttons.map(b => {
    if (b.style === "cv") {
      return `
        <a href="${b.link}" class="btn btn-cv" target="_blank" rel="noopener">
          ${b.text}
        </a>
      `
    }
    return `<a href="${b.link}" class="btn btn-${b.style}">${b.text}</a>`
  }).join("")

  /* ================= ABOUT ================= */
  aboutContent.innerHTML = `
    <h1 class="section-label">${about.label}</h1>
    <h2 class="section-title">${about.title}</h2>
    ${about.paragraphs.map(p => `<p class="about-text">${p}</p>`).join("")}
  `

  /* ================= STATS ================= */
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

  /* ================= EDUCATION ================= */
  education.innerHTML = `
    <h2 class="section-title">
      Academic <span class="text-gradient">Background</span>
    </h2>

    <div class="education-grid">
      ${educationData.map(e => `
        <div class="education-card">
          <div class="education-header">
            <img src="${e.logo}" class="education-logo" alt="${e.institute}">
            <div>
              <h3 class="education-degree">${e.degree}</h3>
              <p class="education-institute">${e.institute}, ${e.district}</p>
            </div>
          </div>

          <div class="education-meta">
            <span class="education-class">${e.class}</span>
            <span class="education-year">${e.year}</span>
          </div>

          <p class="education-description">${e.description}</p>
        </div>
      `).join("")}
    </div>
  `

  /* ================= EXPERIENCE ================= */
  experienceHeader.innerHTML = `
    <h2 class="section-title">
      Work <span class="text-gradient">Experience</span>
    </h2>
  `

  experienceContainer.innerHTML = `
    <div class="experience-grid">
      ${experienceData.map(e => `
        <div class="experience-card">
          <h3 class="experience-role">${e.role}</h3>
          <p class="experience-company">${e.company}</p>
          <span class="experience-duration">${e.duration}</span>
          <p class="experience-description">${e.description}</p>
        </div>
      `).join("")}
    </div>
  `

  /* ================= TECHNOLOGIES ================= */
  techTitle.textContent = technologies.label
  techTags.innerHTML = technologies.items.map(t =>
    `<span class="tech-tag">${t}</span>`
  ).join("")

  /* ================= PROJECTS ================= */
  projectHeader.innerHTML = `
    <h2 class="section-title">${projectsData.title}</h2>
  `

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
              <a href="${p.github}" class="btn-project" target="_blank">GitHub</a>
              <a href="${p.demo}" class="btn-project primary" target="_blank">Live Demo</a>
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `

  /* ================= SKILLS ================= */
  skillsHeader.innerHTML = `
    <p class="section-label">${skillsData.label}</p>
    <h2 class="section-title">${skillsData.title}</h2>
  `

  skillsContainer.innerHTML = `
    <div class="skills-grid">
      ${skillsData.items.map(s => `
        <div class="skill-card">
          <h3>${s.title}</h3>
          <p>${s.description}</p>
          <ul>
            ${s.points.map(p => `<li>${p}</li>`).join("")}
          </ul>
        </div>
      `).join("")}
    </div>
  `

  /* ================= CONTACT ================= */
  contact.innerHTML = `
    <p class="section-label">${contactData.label}</p>
    <h2 class="section-title">${contactData.title}</h2>
    <p>${contactData.description}</p>
    <p>Email: ${contactData.details.email}</p>
    <p>Location: ${contactData.details.location}</p>
  `

  /* ================= FOOTER ================= */
  footer.innerHTML = `
    <div class="logo">${logoData.html}</div>
    <p class="footer-text">${footerData.text || ""}</p>
  `

}).catch(console.error)
