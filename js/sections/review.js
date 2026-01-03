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

  const grid = document.getElementById("reviewGrid");
  const dots = document.querySelectorAll("#reviewDots .dot");

  const originals = Array.from(grid.children);
  const count = originals.length;

  originals.forEach(item => grid.appendChild(item.cloneNode(true)));
  originals.forEach(item => grid.insertBefore(item.cloneNode(true), grid.firstChild));

  const cardWidth = originals[0].offsetWidth;
  grid.scrollLeft = cardWidth * count;

  grid.addEventListener("scroll", () => {
    const maxScroll = cardWidth * count * 2;
    if (grid.scrollLeft <= cardWidth) {
      grid.scrollLeft += cardWidth * count;
    }
    if (grid.scrollLeft >= maxScroll) {
      grid.scrollLeft -= cardWidth * count;
    }

    const index = Math.round(grid.scrollLeft / cardWidth) % count;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index]?.classList.add("active");
  });
}
