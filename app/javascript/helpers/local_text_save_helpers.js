export function saveTextToLocalStorage(text) {
  localStorage.setItem('typewriterin--text', text)
}

export function loadTextFromLocalStorage() {
  let text = localStorage.getItem('typewriterin--text')
  return text
}
