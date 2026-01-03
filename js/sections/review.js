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
    <div class="review-grid">
      ${reviewData.items.map(item => `
        <div class="review-inner">
          <div class="review-quote">“</div>

          <p class="review-text">
            ${item.comment}
          </p>

          <div class="review-author">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <h4>${item.name}</h4>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}
