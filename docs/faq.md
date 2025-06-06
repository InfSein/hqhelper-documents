# 常见问题

本页面收集了使用 HqHelper 时可能遇到的常见问题和解答。如果你的问题没有在这里列出，可以通过 [GitHub Issues](https://github.com/InfSein/hqhelper-dawntrail/issues) 提出。

## 基本问题

### Q: HqHelper 是什么？

A: HqHelper 是一个面向《最终幻想XIV》游戏中生产采集玩家的黄金篇(7.0~7.4)秘籍配方制作计算器。该工具提供了各个版本新增的HQ装备、食物和爆发药的信息整理和配方计算服务，以及一些其他的生产采集玩家可能比较需要的杂项功能。

### Q: HqHelper 支持哪些语言？

A: HqHelper 目前支持简体中文、日语和英语。

### Q: HqHelper 支持哪些平台？

A: HqHelper 支持网页版、PWA 应用和 Windows 桌面应用。

## 访问问题

### Q: 为什么我无法访问主站点？

A: 可能是网络问题，请尝试访问备用站点：[https://hqhelper.nbb.fan/#/](https://hqhelper.nbb.fan/#/)

### Q: 备用站点和主站点有什么区别？

A: 备用站点和主站点提供相同的功能，只是服务器位置不同，可能会影响访问速度。对于境内用户而言，访问备用站可能会更快。

### Q: 测试站点是什么？

A: 测试站点 [https://beta.hqhelper.nbb.fan/#/](https://beta.hqhelper.nbb.fan/#/) 是用于测试新功能的版本，会经常更新，并随时有可能出现较为严重的BUG，不建议日常使用。

## 功能问题

### Q: 如何选择游戏版本？

A: 在主界面顶部的版本选择区，点击对应的版本卡片即可切换到该版本的内容。

### Q: 如何选择职业？

A: 在版本选择下方的职业选择区，点击对应的职业图标即可选择该职业。

### Q: 如何添加装备部件？

A: 在部件选择区，选择需要的部件，然后点击"添加"按钮即可将部件添加到已选列表。

### Q: 如何查看制作报表？

A: 添加部件后，点击"查看报表"按钮即可查看详细的制作报表。

### Q: 如何导出配置？

A: 点击"导入/导出"按钮，然后选择"导出"选项，可以将当前配置导出为文件。

### Q: 如何导入配置？

A: 点击"导入/导出"按钮，然后选择"导入"选项，可以从文件导入配置。

### Q: 如何复制制作宏？

A: 在统计区的各个材料统计模块中，点击"复制宏"按钮即可复制对应的制作宏。

## 安装问题

### Q: 如何在 iOS 设备上使用 HqHelper？

A: 由于一些原因，HqHelper 无法提供 iOS 的原生应用，但可以通过 PWA 方式使用：
1. 使用 Safari 浏览器打开 HqHelper 网站
2. 点击底部正中间的分享按钮
3. 点击"添加到主屏幕"
4. 从主屏幕启动应用，获得接近于原生应用的体验

### Q: 如何在 Windows 上安装 HqHelper？

A: HqHelper 提供了 Windows 桌面应用，基于 Electron 封装：
1. 访问 [Release Electron v6](https://github.com/InfSein/hqhelper-dawntrail/releases/tag/electron-v6.0.0) 页面
2. 下载适合你系统的安装包
3. 安装并运行应用

### Q: 为什么 Windows 应用与浏览器版本有差异？

A: Electron 封装的应用可能会有一些限制，导致某些功能无法与浏览器版本完全一致。如果遇到问题，建议使用浏览器访问在线站点。

## 其他问题

### Q: 如何报告 Bug？

A: 如果你在使用过程中发现有错误/问题的地方，或是对界面/功能/逻辑有优化的建议，欢迎通过 [GitHub Issues](https://github.com/InfSein/hqhelper-dawntrail/issues) 提出。

### Q: 如何参与 HqHelper 的开发？

A: 如果你具有前端编程能力，可以通过发起 [Pull Request](https://github.com/InfSein/hqhelper-dawntrail/pulls) 等方式参与到 HqHelper 的开发工作中。代码可能需要遵守通用规范和一些额外规则，具体请参阅 [Wiki](https://github.com/InfSein/hqhelper-dawntrail/wiki)。

### Q: HqHelper 的版本号规则是什么？

A: HqHelper 的版本号遵循 `MAJOR.MINOR.PATCH` 的命名规则：
1. `MAJOR`,`MINOR`,`PATCH` 均为正整数
2. `MAJOR` 代表这是第几代 `HqHelper`，同时也标识着适配的 `最终幻想XIV` 资料片版本
3. `MINOR` 代表着适配的 `最终幻想XIV` 中等版本 (例如7.1的1)
4. `PATCH` 代表着在前述 `MAJOR` 和 `MINOR` 约束下，应用更新的第几个版本

例如，`2.1.17` 代表：
- 第 `2` 代的 `HqHelper`，专为 `最终幻想XIV` 的 `7.x` 资料片版本设计
- 适配 `最终幻想XIV` 的第 `1` 个中等版本，即 `7.1`
- 在适配 `7.1` 的基础上，更新的第 `17` 个版本

