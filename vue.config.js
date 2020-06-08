module.exports = {
  "pluginOptions": {
    "electronBuilder": {
      "builderOptions": {
        "asar": false,
        "productName": "iData",
        "nsis": {
          "oneClick": false,
          "allowElevation": true,
          "allowToChangeInstallationDirectory": true,
          "createDesktopShortcut": true,
          "createStartMenuShortcut": true
        }
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}