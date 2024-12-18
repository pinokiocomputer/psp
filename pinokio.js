const path = require('path')
module.exports = {
  version: "3.0",
  title: "PSP",
  description: "Pinokio System Programming",
  icon: "web/public/icon.png",
  menu: async (kernel, info) => {
    let running = {
      install: info.running("install.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js")
    }
    let installed = await kernel.exists("web")
    if (running.install) {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.js",
      }]
    } else if (running.update) {
      return [{
        default: true,
        icon: 'fa-solid fa-terminal',
        text: "Updating",
        href: "update.js",
      }]
    } else if (running.reset) {
      return [{
        default: true,
        icon: 'fa-solid fa-terminal',
        text: "Uninstalling",
        href: "reset.js",
      }]
    } else {
      if (installed) {
        return [{
          icon: "fa-regular fa-pen-to-square",
          text: "Edit HTML",
          href: kernel.path("web/views"),
          fs: "view"
        }, {
          icon: "fa-solid fa-plug",
          text: "Install",
          href: "install.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Update",
          href: "update.js",
        }, {
          icon: "fa-regular fa-circle-xmark",
          text: "Uninstall",
          href: "reset.js",
        }]
      } else {
        return [{
          icon: "fa-solid fa-plug",
          text: "Install",
          href: "install.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Update",
          href: "update.js",
        }, {
          icon: "fa-regular fa-circle-xmark",
          text: "Uninstall",
          href: "reset.js",
        }]
      }
    }
  }
}
