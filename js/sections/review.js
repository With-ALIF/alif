export function renderReview(reviewData) {
  const reviewHeader = document.getElementById("reviewHeader");
  const reviewContainer = document.getElementById("reviewContainer");

  if (
    !reviewHeader ||
    !reviewContainer ||
    !reviewData ||
    !reviewData.items?.length
  ) return;

  reviewHeader.innerHTML = `
    <span class="review-label">TESTIMONIALS</span>
  `;

  reviewContainer.innerHTML = `
    <div class="review-grid" id="reviewGrid">
      ${reviewData.items
        .map(
          item => `
        <div class="review-inner">
          <div class="review-quote">“</div>
          <p class="review-text">${item.comment}</p>
          <div class="review-author">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <h4>${item.name}</h4>
          </div>
        </div>
      `
        )
        .join("")}
    </div>

    <div class="review-dots" id="reviewDots">
      ${reviewData.items
        .map(
          (_, i) =>
            `<span class="dot ${i === 0 ? "active" : ""}"></span>`
        )
        .join("")}
    </div>
  `;

  /* ===== Dot Sync Logic ===== */
  const grid = document.getElementById("reviewGrid");
  const dots = document.querySelectorAll("#reviewDots .dot");

  if (!grid || !dots.length) return;

  grid.addEventListener("scroll", () => {
    const cardWidth = grid.firstElementChild.offsetWidth;
    const index = Math.round(grid.scrollLeft / cardWidth);

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index]?.classList.add("active");
  });
}
