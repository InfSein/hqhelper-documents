# 安装部署

HqHelper 提供了多种使用方式，包括在线网页版、PWA应用和Windows桌面应用。本页面将介绍各种安装和部署方式。

## 在线使用

HqHelper 提供了多个在线站点，无需安装，直接在浏览器中访问即可使用：

- **主站点**：[https://infsein.github.io/hqhelper-dawntrail/#/](https://infsein.github.io/hqhelper-dawntrail/#/)
- **备用站**：[https://hqhelper.nbb.fan/#/](https://hqhelper.nbb.fan/#/)
- **测试站**：[https://beta.hqhelper.nbb.fan/#/](https://beta.hqhelper.nbb.fan/#/)

::: tip 提示
对于境内用户而言，访问备用站可能会更快。建议把列出的站点都试一试，哪个快用哪个。
:::

## PWA 应用

HqHelper 支持 PWA（Progressive Web App）技术，可以将网页添加到主屏幕，获得接近于原生应用的体验。

### iOS 设备

由于一些原因，HqHelper 无法提供 iOS 的原生应用，但可以通过 PWA 方式使用：

1. 使用 Safari 浏览器打开 HqHelper 网站
2. 点击底部正中间的分享按钮
3. 点击"添加到主屏幕"
4. 从主屏幕启动应用，获得接近于原生应用的体验

### Android 设备

目前暂无 Android 原生应用计划，但可以通过类似 iOS 的方式添加到主屏幕使用。

## Windows 桌面应用

HqHelper 提供了 Windows 桌面应用，基于 Electron 封装：

1. 访问 [Release Electron v6](https://github.com/InfSein/hqhelper-dawntrail/releases/tag/electron-v6.0.0) 页面
2. 下载适合你系统的安装包
3. 安装并运行应用

::: warning 注意
Electron 封装的应用可能会提供各式各样的套壳，但是很难保证效果跟浏览器一样好。如果遇到问题，建议使用浏览器访问在线站点。
:::

## 本地开发环境搭建

如果你想在本地搭建开发环境，可以按照以下步骤操作：

### 前提条件

- 安装 [Node.js](https://nodejs.org/)（建议使用最新的 LTS 版本）

### 克隆仓库

```bash
git clone https://github.com/InfSein/hqhelper-dawntrail.git
cd hqhelper-dawntrail
```

### 安装依赖

```bash
npm i
```

### 启动开发服务器

```bash
npm run dev
```

启动成功后，可以通过浏览器访问 `http://localhost:5173` 来使用本地开发版本的 HqHelper。

## 常见问题

### Q: 为什么我无法访问主站点？

A: 可能是网络问题，请尝试访问备用站点。

### Q: 为什么 PWA 应用无法正常工作？

A: 请确保你的浏览器支持 PWA 功能，并且已经允许相关权限。

### Q: 为什么 Windows 应用与浏览器版本有差异？

A: Electron 封装的应用可能会有一些限制，导致某些功能无法与浏览器版本完全一致。如果遇到问题，建议使用浏览器访问在线站点。

