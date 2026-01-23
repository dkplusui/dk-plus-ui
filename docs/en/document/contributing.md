# Contribution

## 🙋 Before contributing, please read the following information

Hello! Welcome to DK-plus!

I'm glad that you are interested in contributing to DK-plus. Before submitting your contribution, please take some time to read the following guidelines. This will help us collaborate better, avoid unnecessary work, and save everyone's time.

## 🚫 No direct copying

As we all know, there are many existing component libraries in the market. Often, the components we need to develop have already been created by other third-party libraries. However, please refrain from directly copying and using source code from other libraries.

The development of a component library itself is a process of learning and progress. It's not just about adding components for the sake of adding them. We hope that participants can learn something and improve their skills while adding new components. If you encounter difficulties with a specific feature during the development phase, you can initiate a discussion or directly contact me or seek help in the group. Of course, it's also acceptable to learn from and reference other open-source libraries. However, we expect you to have a solid understanding of the problem and tackle it by yourself when writing the code.

If you have any specific questions or need further guidance on how to contribute, please let me know. I'm here to assist you.

## 🛠️ Getting Started

Before contributing, you need to get the project up and running so that you can better understand its structure and how to develop it.

- Install [node](http://nodejs.cn), version >= 16
- Install [pnpm](https://pnpm.io/zh)the latest version is recommended.

If you have completed the previous preparations, you can skip ahead and start from here:

- Fork [dk-plus](https://github.com/dk-plus-ui/dk-plus-ui)

- Clone your fork to your local machine.

### 📖 Directory Structure

```bash
├── .github     # github配置文件
├── .husky      # 代码提交前检测
├── .vscode     # vscode配置文件
├── coverage   #测试覆盖率
├── deploy          # 远程命令SSH上传到服务器配置
├── ├── config.js   # 远程命令SSH上传到服务器配置
├── ├── index.sh   # 远程命令SSH上传到服务器配置
├── docs   #文档项目
├── ├── .vitepress  #文档配置文件
├── ├── ├── cache     #本地运行缓存文件
├── ├── ├── data  #文档配置文件
├── ├── ├── ├──  description.ts  #说明文件
├── ├── ├── ├──  expansionNav.ts #扩展导航文件
├── ├── ├── ├──  header.ts  #头部meat 文件
├── ├── ├── ├──  nav.ts  #导航文件
├── ├── ├── └─  sidebar.ts #侧边栏导航文件
├── ├── ├── dist  #打包后的文件
├── ├── ├── json  #文档配置文件
├── ├── ├── ├──   contribution.json #贡献者名单文件
├── ├── ├── ├──   friendlyLinks.json  #友情链接文件
├── ├── ├── └─  home.json          #首页文件
├── ├── ├── plugins #文档配置文件
├── ├── ├── ├──   index.ts  #文档配置主文件
├── ├── ├── ├──   plugin-module.ts #创建 markdown 实例
├── ├── ├── └─    set-style.ts     #设置文档样式(英杰制作)
├── ├── ├── theme   #自定义主题
├── ├── ├── ├── components  #自定义主题文件夹
├── ├── ├── ├── └─ home.vue  #主页样式插槽
├── ├── ├── ├── style  #自定义主题样式文件夹
├── ├── ├── ├── ├── global.scss #全局样式
├── ├── ├── ├── ├── home.scss   #主页样式
├── ├── ├── ├── └─ vitepress.scss    #菜单样式
├── ├── └─ config.ts   #文档配置文件
├── ├── expansion  #文档扩展文件
├── ├── ├──  Flutter #Flutter文档扩展文件
├── ├── ├──  ├── FlutterDome  #Flutter Dome
├── ├── ├──  ├── └─ structure.md #Flutter Dome结构
├── ├── ├──  ├── ios #ios文档扩展文件
├── ├── ├──  ├──  ├── installXcode  #安装XcodeIOS
├── ├── ├──  ├──  └─  createProject  #创建项目 IOS 中
├── ├── ├──  ├── windows #windows文档扩展文件
├── ├── ├──  ├──  ├── fvmInstall  #安装fvm
├── ├── ├──  ├──  ├── WinInstall  #安装vscode 插件
├── ├── ├──  ├──  └─  AndroidInstall #安装Android Studio
├── ├── node_modules  # 项目依赖
├── ├── index.md   #文档首页
├── ├── package.json  #文档依赖文件
├── └─  vite.config.ts #文档项目设置
├── images          # 远程图片备份
├── logo   #图标logo
├── node_modules    # 项目依赖
├── npm #npm包项目
├── └─  dist #打包后的文件
├── packages        # 组件库组件
├── ├── components    # 存放所有的组件
├── ├── ├── _hooks        # hooks
├── ├── ├── ├── _directive     # 自定义指令代码
├── ├── ├── ├── ├── loading   # loading 指令
├── ├── ├── ├──get-button  # 获取按钮的方法(hooks_dk-button)
├── ├── ├── ├──get-Global  # 获取全局的方法(hooks_包含组件类型_组件属性)
├── ├── ├── ├── public       # 公共的hooks方法
├── ├── ├── ├── ├──  get-color  #颜色处理加深 减淡
├── ├── ├── ├── ├──  get-props  #获取组件的props
├── ├── ├── ├── ├──  get-Global   #获取组件props的size | type 值给定默认值
├── ├── ├── ├── ├──  get-props    #获取组件props string 类型的值 和obj类型的值
├── ├── ├── ├── ├──  get-return   #执行方法函数
├── ├── ├── ├── ├──  get-ripples  #指定元素内的点击未知 为特殊组件定制插入元素 例如dk-button 水波纹效果
├── ├── ├── ├── ├──  get-StyleList    #用于获取props内参数根据设置生成对应名称的class 获取传入的样式数组模式的值解析  判断是否为样式添加单位
├── ├── ├── ├──  set-size     #简易版是否判断需要添加单位
├── ├── ├── ├──index.ts    # hooks出口文件
├── ├── ├── _icon     # 存放所有的图标动态组件的地方
├── ├── _interface    # 项目内的接口文件
├── ├── _tokens       # 项目内的默认值设置
├── ├── _utils        # 组件内用的工具方法
├── ├── ├── index.ts      # 组件内工具出口文件
├── ├── ├── props         # 组件内props推断方法
├── ├── ├── typeof        # 组件内typeof数据类型判断方法
├── ├── ├── filtration    # 驼峰转换为短横线命名  将数字尺寸改为字符串
├── ├── ├── test          # 组件内测试方法
├── ├── dkbutton  #按钮组件
├── ├── dkcodedisplay #代码展示组件
├── ├── dkcontainer   #页面布局组件
├── ├── dkfooter      #页面布局组件-底部组件
├── ├── dkheader      #页面布局组件-头部组件
├── ├── dkicon        #图标组件
├── ├── dkinput       #输入框组件
├── ├── dkinputNumber #输入框组件按钮
├── ├── dklaside      #页面布局组件-左侧组件
├── ├── dkloading     #加载中指令用的组件
├── ├── dkmain        #页面布局组件-中级布局
├── ├── dkshadow  #盒模型阴影组件
├── ├── dkalert   #提示影组件
├── ├── index.ts  #组件入口文件
├── ├── utils         # 存放工具方法
├── ├── theme-chalk   # 存放对应的样式,样式打包工具箱
├── ├── ├── src       # 存放对应的样式
├── ├── ├── mixins  # 全局class命名生成方法
├── ├── ├── ├── configuration # 私有组件样式配置
├── ├── dk-setup-name      #  根据命令生成组件文件夹 暂未实现
├── ├── dk-eslint          #  项目内的eslint配置
├── play      # 组件调试测试项目
├── ├──  node_modules  # play的依赖 测试目录
├── ├──  router        # 路由配置
├── ├──  typings       # ts的声明文件
├── ├──  views         # 页面文件
├── ├──  app.vue       # vue app的入口文件
├── ├──  index.html    # index.html  首页的html
├── ├──  main.ts       # main.ts     程序入口文件
├── ├──  package.json  # package.json  项目入口配置
├── └─  vite.config.ts  # vite 轻量级启动项
├── typings        #  ts的声明文件
├── └─ vue-shim.d.ts # typescript 声明文件
├── .lintstagedrc   # lint-staged 配置文件提交前检测
├── .markdownlint.json # markdownlint 配置文件
├── .eslintignore   #ESLint 去忽略特定的文件和目录
├── .eslintrc.js    #ESLint 配置文件
├── .gitignore      # git 过滤说明文件
├── .markdownlint.json # markdownlint 配置文件
├── .prettierrc.js  # Prettier 配置文件
├── .prettierignore  # Prettier 过滤说明文件
├── .npmrc          # npm 配置文件
├── contribution.en-us.md # 贡献说明文件英文版
├── contribution.md # 贡献说明文件中文版
├── CUpdateLog.en-US.md # 更新日志英文版
├── CUpdateLog.md # 更新日志中文版
├── LICENSE         # 开源协议
├── README.md       # 项目说明文件
├── README.en-US.md # 项目说明文件英文版
├── package.json    # 项目配置文件
├── pnpm-lock.yaml  # pnpm配置文件
├── pnpm-workspace.yaml #pnpm配置文件
├── vite.config.css.ts  # 打包css文件配置
├── vite.config.theme.ts  # 打包css文件配置
├── vite.config.ts  # vite配置文件打包配置
└─  tsconfig.json # TS配置文件

```

Next execute the command:

```shell
# clone 项目
git clone https://github.com/dk-plus-ui/dk-plus-ui.git

# 进入项目目录
cd dk-ui

# 安装依赖项
pnpm install

ps: Note that the federation directive is referenced here

# CNPM安装
npm install -g cnpm --registry=https://registry.npm.taobao.org

# 启动开发项目
pnpm dev:play

# 启动文档
pnpm dev:docs

```

## 🔧 Develop tools and plug-ins

Please read first [IDE 支持](https://cn.vuejs.org/guide/typescript/overview.html#ide-support)

The editor is highly recommended [Visual Studio Code](https://code.visualstudio.com/)，Please be sure to install the following plug-ins:

- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)Vue3 official development plugin:
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) Used to support importing `*.vue` files in TS
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) Code format verification, if not installed, then [dk-eslint](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/dk-eslint) Do not take effect
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) Code format verification, if not installed, then [dk-eslint](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/dk-eslint) Do not take effect

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) Used to detect spelling errors in code

## 🔓 Command description

dk-plus Internally set up a lot of commands in [package.json](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/package.json) Is available for viewing. Each command is described in detail below:

| script fields | Corresponding command                                                     | Command description                         |
| ------------- | ------------------------------------------------------------------------- | ------------------------------------------- |
| dev:play      | pnpm -C play dev                                                          | Start the test development project          |
| build:play    | pnpm -C play build                                                        | Package test development projects           |
| build         | gulp -f build/gulpfile.ts                                                 | Packaging component library                 |
| dev:docs      | pnpm -C docs dev:docs                                                     | Start the development documentation project |
| build:docs    | pnpm -C docs build:docs                                                   | Package development documentation projects  |
| format        | prettier --write \"\*_/_.{ts,tsx,js,json,css,scss,json,md,vue,yml,yaml}\" | Project code formatting                     |
| deploy:docs   | cross-env NODE_ENV=docs node ./deploy                                     | test                                        |
| test          | vitest                                                                    | Test process                                |
| coverage      | vitest run --coverage                                                     | Generate test logs                          |
| lint          | pnpm lint                                                                 | Project code review                         |
| prepare       | pnpm prepare                                                              | Run cell tests                              |

## 🚨 Development specification

The main source files are all there [packages](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages) Directory, where each subdirectory has a separate `README.md` For a description of the specified directory, refer to the following documents for detailed specifications of each module:

- [dk-plus-components](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/README.md) Create a new component
- [dk-plus-components](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/theme-chalk/README.md) Style subject directory

## ⚠️ Submission specification

Git allows us to commit each time, with a commit information as a description when executed `commit` When, you need to fill in the description information in strict accordance with the specification below, the submission information must be one of the following information, followed by 'English colon + space

The type must be one of the following and be entered against the type description.

| type      | Give an example                                  | Description                                  |
| --------- | ------------------------------------------------ | -------------------------------------------- |
| build     | git commit -m 'build: 打包\*\*\*配置'            | Modifying the packaging configuration        |
| ci        | git commit -m 'ci: 修改 ci 配置'                 | Modifying ci Configuration                   |
| docs      | git commit -m 'docs: 修改文档'                   | Modify a document                            |
| feat      | git commit -m 'feat: 新增\*\*\*组件'             | New component                                |
| fix       | git commit -m 'fix: 修复\*\*\*bug'               | Fix bugs                                     |
| perf      | git commit -m 'perf: 优化\*\*\*性能'             | Optimized performance                        |
| refactor  | git commit -m 'refactor: 重构\*\*\*代码'         | Refactoring code                             |
| style     | git commit -m 'style: 修改\*\*\*样式'            | Modify style                                 |
| test      | git commit -m 'test: 新增\*\*\*测试用例'         | Added test cases                             |
| revert    | git commit -m 'revert: 回滚\*\*\*代码'           | Rollback code                                |
| chore     | git commit -m 'chore: 修改\*\*\*配置'            | Modify configuration                         |
| release   | git commit -m 'release: 发布\*\*\*版本'          | Release version                              |
| hooks     | git commit -m 'hooks: 新增\*\*\*                 | exploit                                      |
| perfect   | git commit -m 'perfect: 完善\*\*\* '             | Perfect previous code block Where code block |
| utils     | git commit -m 'utils: 组件工具箱\*\*\*           | Update toolbox                               |
| interface | git commit -m 'interface: 增加组件全局接口\*\*\* | Global interface                             |
| deps      | git commit -m 'deps: 依赖升级                    | Dependent upgrade                            |

Available by [Markdown Emoji](https://tianyuhao.cn/emoji) Add emoticons after "message"

## 🪧 Routing specifications

When you create a new component, you don't need to register in `router/index.ts`, just create a `page.ts` file in the `play/views/components/current component directory`. The content of the `page.ts` file is as follows:

```ts 
export default {
  path: '/DkLoading',
  order: 9,
  title: 'loading'
}
```
> Parameter Description:
> - `path`: Routing address (must maintain consistency between the current component directory name and component file name)
> - `order`: Routing sorting
> - `title`: Route Title

## ✏️ About PR

Before you commit `PR`, make sure that your `fork` repository is up to date to avoid conflicts.

1. Clone the remote repository to the local:

```shell
git clone <repository-url>
```

2. Add a remote repository:

```shell
git checkout -b <branch-name>
```

3. Make modifications and submit to local warehouse:

```shell
git add .
git commit -m 'feat: 新增***组件'
```

4.Push a branch to a remote repository

```shell
  git push origin <branch-name>
```

5. Create a PR in the remote repository
   On a code hosting platform like GitHub or GitLab, find the branch you just pushed and create a PR. You can provide details about the changes you have made and any other comments about PR in the PR.

6.Pending review and consolidation:
Once your PR is submitted, team members will review and discuss your code and may suggest changes. Once all issues have been resolved and approved, your PR will be merged into the main branch.

Matters needing attention:
Before submitting your PR, make sure your local branch is based on the latest main branch.
PR commits should be as small as possible, and each PR should contain only one set of related changes. This makes auditing easier and also makes the code easier to maintain.

Add a description to your PR to let other developers know about the changes you've made and their purpose

8.Set submission email

```shell
git config --global user.email "your-email@example.com"  //Global mailbox
git config user.email "your-email@example.com"           //Project specific mailbox
```

## 📦 NPM Release process

1.Log in to your npm account

```shell
npm login
```

2.publish

```shell
npm publish
```

## 📰 Financial support

If you feel that dk-plus has helped you, you can ask the author for a cup of coffee to encourage you.

<div style='display: flex;'>
<img width="200px" style='margin-right:50px;' src="https://oss.cadwaladerss.com/dk-plus/images/zfb.jpg" />
<img width="200px" src="https://oss.cadwaladerss.com/dk-plus/images/wx.jpg" />
</div>

## 💌 Thank you very much

Thanks for all that has been done DK-plus [People who contribute](https://github.com/dk-plus-ui/dk-plus-ui/graphs/contributors)！

<a href="https://github.com/dk-plus-ui/dk-plus-ui/graphs/contributors">
  <img src="https://github.com/dk-plus-ui/dk-plus-ui/graphs/contributors" />
</a>
