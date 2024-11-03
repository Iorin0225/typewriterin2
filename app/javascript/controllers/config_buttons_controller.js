import { Controller } from "@hotwired/stimulus"
import { gsap, TweenMax } from "gsap"

import { loadLocalConfig } from "helpers/local_config_helpers"

export default class extends Controller {

  connect() {
    this.loadConfig()

    // hide after 1 second
    setTimeout(() => {
      this.hide()
    }, 1000)
  }

  show() {
    this.#toggleIconButtons(true)
  }

  hide() {
    this.#toggleIconButtons(false)
  }

  callConfigPanel() {
    this.dispatch("callConfigPanel")
  }

  async loadConfig() {
    const config = loadLocalConfig()
    const iconButtonElements = this.element.querySelectorAll("button")

    iconButtonElements.forEach((iconElement) => {
      iconElement.style.color = config.editorBackGround
      iconElement.style.background = config.editorFontColor
    })
  }

  async #toggleIconButtons(is_show) {
    let opacity = 0
    let marginTop = 0

    if (is_show) {
      opacity = 1
    } else {
      marginTop = '5rem'
    }

    const configButtons = this.element.querySelectorAll(".icon-button");
    configButtons.forEach(function(element, index) {
      TweenMax.to(element, 0.3, {
        opacity: opacity,
        'margin-top': marginTop,
      });
    });
  }
}
