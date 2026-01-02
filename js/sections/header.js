export function renderHeader(logoData, navigation) {
  logo.innerHTML = logoData.html

  nav.innerHTML = navigation.map(n =>
    `<a href="${n.link}">${n.label}</a>`
  ).join("")

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active")
  })
}
