export function renderEducationSection(educationData) {
  let eduIndex = 0;

  const education = document.getElementById("education");
  if (!education || !educationData || !educationData.length) return;

  education.innerHTML = `
    <h2 class="section-title">
      Academic <span class="text-gradient">Background</span>
    </h2>

    <!-- DESKTOP GRID -->
    <div class="education-grid">
      ${educationData.map(e => `
        <div class="education-card">
          <div class="education-header">
            <img src="${e.logo}" class="education-logo" alt="${e.institute}">
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

          <p class="education-description">${e.description}</p>
        </div>
      `).join("")}
    </div>

    <!-- MOBILE TIMELINE -->
    <div class="edu-timeline">
      <button id="eduPrev">‹</button>
      <div class="edu-line">
        <span class="edu-dot"></span>
      </div>
      <button id="eduNext">›</button>
    </div>

    <div id="eduCardWrapper">
      <div id="eduCard"></div>
    </div>
  `;

  const eduCard = document.getElementById("eduCard");
  const eduDot = document.querySelector(".edu-dot");
  const eduPrev = document.getElementById("eduPrev");
  const eduNext = document.getElementById("eduNext");

  function renderEducation(direction = "right") {
    const e = educationData[eduIndex];

    eduCard.className = `edu-card slide-${direction}`;
    eduCard.innerHTML = `
      <div class="education-card">
        <div class="education-header">
          <img src="${e.logo}" class="education-logo" alt="${e.institute}">
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

        <p class="education-description">${e.description}</p>
      </div>
    `;

    const percent =
      educationData.length > 1
        ? (eduIndex / (educationData.length - 1)) * 100
        : 0;

    eduDot.style.left = `${percent}%`;
  }

  renderEducation();

  eduNext.onclick = () => {
    eduIndex = (eduIndex + 1) % educationData.length;
    renderEducation("right");
  };

  eduPrev.onclick = () => {
    eduIndex = (eduIndex - 1 + educationData.length) % educationData.length;
    renderEducation("left");
  };
}
