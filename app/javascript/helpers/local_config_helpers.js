export function saveLocalConfig(editorFontFamily, editorFontColor, editorFontSize, editorBackGround) {
  localStorage.setItem('typewriterin--config', JSON.stringify({
    editorFontFamily: editorFontFamily,
    editorFontColor: editorFontColor,
    editorFontSize: editorFontSize,
    editorBackGround: editorBackGround
  }))
}

export function loadLocalConfig() {
  initializeLocalConfig()

  let config = JSON.parse(localStorage.getItem('typewriterin--config'))
  return config
}

export function initializeLocalConfig() {
  if (!localStorage.getItem('typewriterin--config')) {
    saveLocalConfig( 'sans-serif', '#ccc', '1rem', '#333')
  }
}
