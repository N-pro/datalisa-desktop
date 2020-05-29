module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
          asar: false,
          productName: "综合办公平台-交换中心",
          icon:"./favicon.ico",
          nsis: {
            oneClick: false, // 是否一键安装
            allowElevation: true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
            allowToChangeInstallationDirectory: true, // 允许修改安装目录
            installerIcon: "./favicon.ico",// 安装图标
            uninstallerIcon: "./favicon.ico",//卸载图标
            installerHeaderIcon: "./favicon.ico", // 安装时头部图标
            createDesktopShortcut: true, // 创建桌面图标
            createStartMenuShortcut: true,// 创建开始菜单图标
           }
      }
    }
  }
}