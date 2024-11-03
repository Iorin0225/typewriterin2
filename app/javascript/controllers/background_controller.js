import { Controller } from "@hotwired/stimulus"
import { loadLocalConfig } from "helpers/local_config_helpers"

export default class extends Controller {
  connect() {
    this.loadConfig()
  }

  async loadConfig() {
    const config = loadLocalConfig()
    this.element.style.background = config.editorBackGround
  }
}
