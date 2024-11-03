import { Controller } from "@hotwired/stimulus"
import { gsap, TweenMax } from "gsap"

import { loadLocalConfig } from "helpers/local_config_helpers"

export default class extends Controller {
  connect() {
    this.loadConfig()

    TweenMax.to(this.element, 0.5, {
      delay: 1,
      opacity: 0,
    });
  }

  async loadConfig() {
    const config = loadLocalConfig()
    this.element.style.color = config.editorFontColor
  }
}
