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
<<<<<<< HEAD
  loadJSON("data/education.json"),
  loadJSON("data/experience.json"),
=======
  loadJSON("data/technologies.json"),
  loadJSON("data/education.json"),
>>>>>>> 8cb5e2677d832d3cf57f10ac961b275a50445dcd
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
<<<<<<< HEAD
  educationData,
  experienceData,
=======
  technologies,
  educationData,
>>>>>>> 8cb5e2677d832d3cf57f10ac961b275a50445dcd
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
<<<<<<< HEAD
/* ================= HERO ================= */

heroSubtitle.textContent = hero.subtitle;

heroTitle.innerHTML = `
  <span>${hero.title.line1}</span>
  <span class="text-gradient">${hero.title.line2}</span>
`;

heroDesc.textContent = hero.description;

heroBtns.innerHTML = hero.buttons.map(b => {

  // CV Preview (Google Drive)
  if (b.style === "cv") {
    return `
      <a 
        href="${b.link}"
        class="btn btn-cv"
        target="_blank"
        rel="noopener noreferrer"
      >
        ${b.text}
      </a>
    `;
  }

  // Normal buttons
  return `
    <a href="${b.link}" class="btn btn-${b.style}">
      ${b.text}
    </a>
  `;
}).join("");



/* ================= ABOUT ================= */

aboutContent.innerHTML = `
  <h1 class="section-label">${about.label}</h1>

  <h2 class="section-title">
    ${about.title}
  </h2>

  ${about.paragraphs
    .map(p => `<p class="about-text">${p}</p>`)
    .join("")}
`;


=======


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
>>>>>>> 8cb5e2677d832d3cf57f10ac961b275a50445dcd

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
<<<<<<< HEAD
  education.innerHTML = `
  <h2 class="section-title">
    Academic <span class="text-gradient">Background</span>
  </h2>

  <div class="education-grid">
    ${educationData.map(e => `
      <div class="education-card">

        <div class="education-header">
          <img 
            src="${e.logo}" 
            alt="${e.institute} logo"
            class="education-logo"
          />

          <div>
            <h3 class="education-degree">${e.degree}</h3>
            <p class="education-institute">
              ${e.institute}, ${e.district}
            </p>
          </div>
        </div>

        <div class="education-meta">
          <span class="education-class">${e.class}</span>
          <span class="education-year">${e.year}</span>
        </div>

        <p class="education-description">
          ${e.description}
        </p>

      </div>
    `).join("")}
  </div>
`;


  experienceHeader.innerHTML = `
   <h2 class="section-title">
    Work <span class="text-gradient">Experience</span>
  </h2>
`;

experienceContainer.innerHTML = `
  <div class="experience-grid">
    ${experienceData.map(e => `
      <div class="experience-card">
        <h1 class="experience-role">${e.role}</h1>
        <p class="experience-company">${e.company}</p>
        <span class="experience-duration">${e.duration}</span>
        <p class="experience-description">${e.description}</p>
      </div>
    `).join("")}
  </div>
`;

=======

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
>>>>>>> 8cb5e2677d832d3cf57f10ac961b275a50445dcd

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
<<<<<<< HEAD

            <a href="${p.github}" class="btn-project btn-github" target="_blank" aria-label="GitHub">
              <svg class="github-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.38-3.87-1.38-.52-1.34-1.27-1.7-1.27-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.76 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.18 1.17a10.9 10.9 0 0 1 5.8 0c2.21-1.48 3.18-1.17 3.18-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.36.77 1.08.77 2.18v3.23c0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12.02C23.5 5.74 18.27.5 12 .5z"/>
              </svg>
              GitHub
            </a>

            <a href="${p.demo}" class="btn-project primary" target="_blank">
              Live Demo
            </a>

=======
            <a href="${p.github}" class="btn-project">GitHub</a>
            <a href="${p.demo}" class="btn-project primary">Live Demo</a>
>>>>>>> 8cb5e2677d832d3cf57f10ac961b275a50445dcd
          </div>
        </div>

      </div>
    `).join("")}
  </div>
`;


<<<<<<< HEAD

=======
>>>>>>> 8cb5e2677d832d3cf57f10ac961b275a50445dcd
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
