# Switch between multiple Flutter versions using fvm in win

## 1. install fvm

- [Configuring the Dart Environment](https://gekorm.com/dart-windows/)
- mac You need to download and install it in your market
- Installation completion input `dart --version`  Check for successful installation (administrator permissions required)
- Download FVM input command

```bash

dart pub global activate fvm

```

- After the completion of the following picture
- ![创建项目](../../../../assets/expansion/image/flutter/addFlutter6.jpg)
- Configure fvm environment variables (that is, where to configure FVM downloads)
- ![创建项目](../../../../assets/expansion/image/flutter/addFlutter7.jpg)
- Configure fvm to download flutter address, do not download to drive C
- In cmd, type fvm config --cache-path xxxx where Flutter is downloaded from your computer
- After the installation is complete, run fvm install xxxx to specify the version
- How do I view the `fvm releases` command to download the version you need
- How to switch the version of the `fvm use xxxx` command PS You need to note that you must run this command in the project directory and have administrator rights otherwise an error will be reported
- Then go to your `vscode` and execute `flutter run` and you will see the version you switched

## Contributors 

<div style='display: flex;'>
  <a href="https://github.com/isMrFan" title="Mr. Fan"  target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" />
  </a>
</div>
