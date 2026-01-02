export function renderMeta(meta) {
  document.title = meta.title
  document.querySelector("meta[name='description']").content = meta.description
}
