import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import "@shoelace-style/shoelace"
import { setBasePath } from '@shoelace-style/shoelace'
import "@shoelace-style/shoelace/dist/themes/base.css"
// import * as ShoelaceRails from "shoelace-rails"

Rails.start()
Turbolinks.start()

// ShoelaceRails.start({ turbolinksInstance: Turbolinks })
const rootUrl = document.currentScript.src.replace(/\/packs.*$/, '')
setBasePath(rootUrl + '/packs/js/')
