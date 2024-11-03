import { Controller } from "@hotwired/stimulus"
import { gsap, TweenMax } from "gsap"

import { loadLocalConfig } from "helpers/local_config_helpers"

export default class extends Controller {
  connect() {
    this.loadConfig()
    this.twinkling()
  }

  async loadConfig() {
    const config = loadLocalConfig()
    const textareaElement = this.element.querySelector('textarea')
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
}
