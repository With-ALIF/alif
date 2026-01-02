export function renderContact(contactData) {
  const contact = document.getElementById("contact");

  if (
    !contact ||
    !contactData ||
    !contactData.details
  ) return;

  contact.innerHTML = `
    <p class="section-label">${contactData.label}</p>
    <h2 class="section-title">${contactData.title}</h2>
    <p>${contactData.description}</p>
    <p>Email: ${contactData.details.email}</p>
    <p>Location: ${contactData.details.location}</p>
  `;
}
