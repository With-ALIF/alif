const searchInput = document.getElementById("projectSearch");
export function renderProjects(projectsData) {


  drawProjects(projectsData.items);

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const value = e.target.value.toLowerCase();

      const filteredItems = projectsData.items.filter(p =>
        p.tags.some(tag =>
          tag.toLowerCase().includes(value)
        )
      );

      drawProjects(filteredItems);
    });
  }

  function drawProjects(items) {
    projectHeader.innerHTML = `
      <h2 class="section-title">${projectsData.title}</h2>
    `;

    projectsContainer.innerHTML = `
      <div class="projects-grid">
        ${
          items.length > 0
            ? items.map(p => `
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
            `).join("")
            : `<p class="no-result">No projects found</p>`
        }
      </div>
    `;
  }
}
