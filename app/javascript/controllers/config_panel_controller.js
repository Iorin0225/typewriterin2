import { Controller } from "@hotwired/stimulus"
import { gsap, TweenMax } from "gsap"

import { loadLocalConfig, saveLocalConfig } from "helpers/local_config_helpers"

export default class extends Controller {

  static values = { config: Object }
  static targets = [ "editorFontFamily", "editorFontSize", "editorFontColor", "editorBackGround" ]

  connect() {

  }

  show() {
    this.configValue = loadLocalConfig()
    this.#loadConfig()
    this.#togglePanel(true)
  }

  hide() {
    this.#saveConfig()
    this.#togglePanel(false)
  }

  async #loadConfig() {
    this.#loadConfigToInterface()
    this.#loadConfigToInputValues()
  }

  async #loadConfigToInterface() {
    const config = this.configValue
    const panelElement = this.element.querySelector(".typewriterin__config__panel")
    panelElement.style.background = config.editorBackGround

    const labelElements = this.element.querySelectorAll("label")
    labelElements.forEach((labelElement) => {
      labelElement.style.color = config.editorFontColor
    })

    const inputElements = this.element.querySelectorAll("input")
    inputElements.forEach((inputElement) => {
      inputElement.style.color = config.editorFontColor
    })

    const rowElements = this.element.querySelectorAll(".typewriterin__config__panel__row")
    rowElements.forEach((rowElement) => {
      rowElement.style.borderColor = config.editorFontColor
    })

    const buttonElements = this.element.querySelectorAll("button")
    buttonElements.forEach((buttonElement) => {
      buttonElement.style.color = config.editorBackGround
      buttonElement.style.background = config.editorFontColor
    })
  }

  async #loadConfigToInputValues() {
    const config = this.configValue

    Object.keys(config).forEach((key) => {
      this[key + "Target"].value = config[key]
    })
  }

  async #saveConfig() {
    saveLocalConfig(
      this.editorFontFamilyTarget.value,
      this.editorFontColorTarget.value,
      this.editorFontSizeTarget.value,
      this.editorBackGroundTarget.value
    )

    this.dispatch("updateConfig")
  }

  async #togglePanel(is_show) {
    let opacity = 0
    if (is_show) {
      this.element.style.visibility = 'visible'
      opacity = 1
    }

    const element = this.element
    TweenMax.to(this.element, 0.3, {
      opacity: opacity,
      onComplete: function() {
        if (!is_show) {
          element.style.visibility = 'hidden'
        }
      }
    });
  }
}
