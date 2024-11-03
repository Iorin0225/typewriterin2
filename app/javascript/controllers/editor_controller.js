import { Controller } from "@hotwired/stimulus"
import { gsap, TweenMax } from "gsap"

import { loadLocalConfig } from "helpers/local_config_helpers"
import { loadTextFromLocalStorage, saveTextToLocalStorage } from "helpers/local_text_save_helpers"

const AUTOSAVE_INTERVAL = 1000

export default class extends Controller {
  static values = { savingAt: Number }
  static targets = [ "textarea" ]

  #timer

  connect() {
    this.loadConfig()
    this.twinkling()

    this.#loadText()
  }



  async loadConfig() {
    const config = loadLocalConfig()
    const textareaElement = this.textareaTarget
    textareaElement.style.color = config.editorFontColor
    textareaElement.style.fontFamily = config.editorFontFamily
    textareaElement.style.fontSize = config.editorFontSize
  }

  async twinkling() {
    this.element.style.border = '1px dotted #666'

    TweenMax.to(this.element, 0.5, {
      delay: 1,
      border: 'none',
    });
  }

  async type(event) {
    this.#resetTimer()
    this.#scheduleSave()
  }

  async #loadText() {
    const textareaElement = this.textareaTarget
    const text = loadTextFromLocalStorage()

    textareaElement.value = text
  }

  async #saveText() {
    const textareaElement = this.textareaTarget
    const text = textareaElement.value

    saveTextToLocalStorage(text)
  }

  #scheduleSave() {
    this.#timer = setTimeout(() => this.#saveText(), AUTOSAVE_INTERVAL)
  }

  #resetTimer() {
    clearTimeout(this.#timer)
    this.#timer = null
  }
}
