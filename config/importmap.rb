# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"

pin_all_from "app/javascript/controllers", under: "controllers"
pin_all_from "app/javascript/helpers", under: "helpers"

# Custom
# Don't forget to write "import" on js
pin "font-awesome", to: "https://kit.fontawesome.com/8ddaa3dfab.js", preload: true
pin "gsap", to: "https://cdn.skypack.dev/gsap@3.12.5", preload: true
