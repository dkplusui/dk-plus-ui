
## 1.在vs code 中运行flutter项目中的安卓环境

## 1.安装 vs code

- [Visual Studio Code 官网](https://code.visualstudio.com/)
- [Visual Studio Code 中文网](https://www.vscode.cool/)

## 2.安装 Android Studio

- [Android Studio 官网](https://developer.android.google.cn/studio)
- 具体安装流程不过多介绍不会请自行百度
- 在vs code  `Flutter`项目下执行 `flutter doctor` 命令 
- Android Studio安装完成后请按下图配置
  
### Android Studio 第一步

- ![Android Studio](../../../../assets/expansion/image/flutter/installFlutter8.jpg)

### Android Studio 第二步

- ![Android Studio](../../../../assets/expansion/image/flutter/installFlutter9.jpg)

### Android Studio 第三步

- ![Android Studio](../../../../assets/expansion/image/flutter/installFlutter10.jpg)

### Android Studio 第四步

- 重启Android Studio 然后右下角会弹出缺少flutter 相关依赖 你只需要选择全部下载就OK了等到下载完成就行了

### Android Studio 第五步

- 回到vs code 执行 `flutter doctor --android-licenses` 命令 一路Y就行了

- 回到vs code 执行 `flutter doctor` 命令 会发现 `Android Studio` 相关依赖已经安装完成

- 如图选择
- ![安装Flutter插件](../../../../assets/expansion/image/flutter/installFlutter11.jpg)

- 回到vs code 执行 `flutter run -d xxxx` xxx代表你的设备号 一般是`Android`手机的序列号选择后就可在模拟器中安装了 如果你的手机是`Android`系统的话也可以选择你的手机序列号安装

- 如图图下就代表你成功了
- ![安装Flutter插件](../../../../assets/expansion/image/flutter/installFlutter12.jpg)

## Contributors 

<div style='display: flex;'>
  <a href="https://github.com/isMrFan" title="Mr. Fan"  target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" />
  </a>
</div>