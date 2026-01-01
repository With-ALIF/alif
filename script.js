fetch("data.json")
.then(res => res.json())
.then(d => {

document.title = d.meta.title
document.querySelector("meta[name='description']").content = d.meta.description

logo.innerHTML = d.logo

nav.innerHTML = d.navigation.map(n =>
  `<a href="${n.link}">${n.label}</a>`
).join("")

heroSubtitle.textContent = d.hero.subtitle
heroTitle.innerHTML = `<span>${d.hero.title.line1}</span><span class="text-gradient">${d.hero.title.line2}</span>`
heroDesc.textContent = d.hero.description

heroBtns.innerHTML = d.hero.buttons.map(b =>
  `<a href="${b.link}" class="btn btn-${b.style}">${b.text}</a>`
).join("")

aboutContent.innerHTML = `
<p class="section-label">${d.about.label}</p>
<h2 class="section-title">${d.about.title}</h2>
${d.about.paragraphs.map(p => `<p class="about-text">${p}</p>`).join("")}
`

stats.innerHTML = d.stats.map(s => `
<div class="stat-card">
  <div class="stat-number">${s.number}</div>
  <div class="stat-label">${s.label}</div>
</div>
`).join("")

techTitle.textContent = d.technologies.label
techTags.innerHTML = d.technologies.items.map(t =>
  `<span class="tech-tag">${t}</span>`
).join("")

education.innerHTML = `
<p class="section-label">${d.education.label}</p>
${d.education.items.map(e => `
<div class="card">
  <h3>${e.degree}</h3>
  <p>${e.institution}</p>
  <small>${e.year}</small>
  <p>${e.description}</p>
</div>
`).join("")}
`

projectHeader.innerHTML = `
<p class="section-label">${d.projects.label}</p>
<h2 class="section-title">${d.projects.title}</h2>
`

projects.innerHTML = d.projects.items.map(p => `
<div class="project-card">
  <div class="project-content">
    <h3 class="project-title">${p.title}</h3>
    <p class="project-description">${p.description}</p>
    <div class="project-tags">
      ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
    </div>
  </div>
</div>
`).join("")

skillsHeader.innerHTML = `
<p class="section-label">${d.skills.label}</p>
<h2 class="section-title">${d.skills.title}</h2>
`

skills.innerHTML = d.skills.items.map(s => `
<div class="skill-card">
  <h3 class="skill-title">${s.title}</h3>
  <p class="skill-description">${s.description}</p>
  <ul class="skill-items">
    ${s.points.map(p => `<li class="skill-item">${p}</li>`).join("")}
  </ul>
</div>
`).join("")

contact.innerHTML = `
<div>
<p class="section-label">${d.contact.label}</p>
<h2 class="section-title">${d.contact.title}</h2>
<p>${d.contact.description}</p>
<p>Email: ${d.contact.details.email}</p>
<p>Location: ${d.contact.details.location}</p>
</div>
`

footer.innerHTML = `
<div class="logo">${d.logo}</div>
<p class="footer-text">${d.footer.text}</p>
<div class="footer-links">
${d.footer.links.map(l => `<a href="#">${l}</a>`).join("")}
</div>
`

})
