# 孟杰 AI 影像作品集：迁移部署工程

这是现有作品集的独立副本，包含《第十张照片》《岚翁和小角兽》《草木入色》、生成图片、制作过程、Word 和 PDF 简历。网页不依赖 ChatGPT 登录或远程素材接口。原网站与手动修改的简历保持原样。

## 部署设置

- 项目名称建议：`mengjie-ai-film-portfolio`
- 根目录：仓库根目录
- 安装命令：无需安装依赖；如平台自动运行 `npm install`，项目无外部依赖。
- 构建命令：`node build.mjs`
- 输出目录：`dist`
- 环境变量：不需要
- 访问权限：公开

网站文件位于 `public`，构建会复制到 `dist`。不要把 ZIP 本身作为首页文件上传。

## 当前可尝试的免费托管方案：帽子云

官方文档称服务目前免费、提供大陆优化网络并分配访问域名。需要用户账号以及 GitHub 网站仓库。免费政策和实际大陆访问情况以部署时控制台、手机实测为准。当前工程已准备，尚未完成该平台部署，也没有已验证的新网址。

1. 在 https://dash.maoziyun.com/register 注册并登录。
2. 创建专用于这个作品集的 GitHub 仓库，上传本工程；不要授权与作品集无关的仓库。
3. 在帽子云创建静态应用，选择作品集仓库，填写上面的构建设置。
4. 等待部署成功，复制平台实际返回的网址。
5. 用大陆手机流量和 Wi-Fi 分别打开首页、制作过程；检查三个成片播放、图片大图、简历下载。通过后再用于招聘分享。

官方资料（2026-10-09核查）：

- https://www.maoziyun.com/docs/quick-start
- https://www.maoziyun.com/docs/deploy/build
- https://www.maoziyun.com/docs/asked-question

原作品集网址：https://mengjie-ai-film-2026.brainylime.chatgpt.site/
