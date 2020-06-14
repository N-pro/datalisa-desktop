module.exports = {
    "pluginOptions": {
        "electronBuilder": {
            "builderOptions": {
                "asar": false,
                "productName": "DataLisa",
                "icon": "./favicon.ico",
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