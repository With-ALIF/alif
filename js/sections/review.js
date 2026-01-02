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
    <div class="review-inner">
      <div class="review-quote">“</div>

      <p class="review-text">
        ${reviewData.items[0].comment}
      </p>

      <div class="review-author">
        <img src="${reviewData.items[0].image}" alt="${reviewData.items[0].name}" loading="lazy">
        <h4>${reviewData.items[0].name}</h4>
      </div>
    </div>
  `;
}
