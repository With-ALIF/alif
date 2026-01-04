export function renderReview(reviewData) {
  const reviewHeader = document.getElementById("reviewHeader");
  const reviewContainer = document.getElementById("reviewContainer");

  if (
    !reviewHeader ||
    !reviewContainer ||
    !reviewData ||
    !reviewData.items?.length
  ) return;

  reviewHeader.innerHTML = `<span class="review-label">TESTIMONIALS</span>`;

  reviewContainer.innerHTML = `
    <div class="review-grid" id="reviewGrid">
      ${reviewData.items.map(item => `
        <div class="review-inner">
          <div class="review-quote">“</div>
          <p class="review-text">${item.comment}</p>
          <div class="review-author">
            <img src="${item.image}" alt="${item.name}">
            <h4>${item.name}</h4>
          </div>
        </div>
      `).join("")}
    </div>

    <div class="review-dots" id="reviewDots">
      ${reviewData.items.map((_, i) =>
        `<span class="dot ${i === 0 ? "active" : ""}"></span>`
      ).join("")}
    </div>
  `;

  const grid = document.getElementById("reviewGrid");
  const dots = document.querySelectorAll("#reviewDots .dot");

  const originals = Array.from(grid.children);
  const count = originals.length;

  const firstClone = originals[0].cloneNode(true);
  const lastClone = originals[count - 1].cloneNode(true);

  grid.appendChild(firstClone);
  grid.insertBefore(lastClone, originals[0]);

  const cardWidth = originals[0].offsetWidth;
  grid.scrollLeft = cardWidth;

  let lock = false;

  grid.addEventListener("scroll", () => {
    if (lock) return;

    const maxLeft = cardWidth * count;

    if (grid.scrollLeft <= 0) {
      lock = true;
      grid.scrollLeft = maxLeft;
      requestAnimationFrame(() => (lock = false));
    }

    if (grid.scrollLeft >= cardWidth * (count + 1)) {
      lock = true;
      grid.scrollLeft = cardWidth;
      requestAnimationFrame(() => (lock = false));
    }

    const index = Math.round(grid.scrollLeft / cardWidth) - 1;
    dots.forEach(d => d.classList.remove("active"));
    dots[(index + count) % count]?.classList.add("active");
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      grid.scrollTo({
        left: cardWidth * (i + 1),
        behavior: "smooth"
      });
    });
  });
}
