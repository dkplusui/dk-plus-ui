
## 1.Run the Android environment in the flutter project in vs code

## 1.Install vs code

- [Visual Studio Code Official web](https://code.visualstudio.com/)
- [Visual Studio Code Chinese web](https://www.vscode.cool/)

## 2.Install Android Studio

- [Android Studio Official web](https://developer.android.google.cn/studio)
- Specific installation process but more introduction will not please Baidu
- in vs code  `Flutter`Execution under project `flutter doctor` command 
- Android Studio After the installation is complete, configure according to the following figure

### Android Studio First step

- ![Android Studio](../../../../assets/expansion/image/flutter/installFlutter8.jpg)

### Android Studio The second step

- ![Android Studio](../../../../assets/expansion/image/flutter/installFlutter9.jpg)

### Android Studio The third step

- ![Android Studio](../../../../assets/expansion/image/flutter/installFlutter10.jpg)

### Android Studio Step four

- Restart `Android Studio` and the lack of flutter dependencies will pop up in the lower right corner. All you need to do is select Download All and wait until the download is complete

### Android Studio The fifth step

- Go back to vs code and run the `flutter doctor --android-licenses` command all the way Y

- Go back to vs code and execute `flutter doctor` Command discovery `Android Studio` Dependencies have been installed

- Select as shown
- ![Install Flutter plug-in](../../../../assets/expansion/image/flutter/installFlutter11.jpg)

- Go back to vs code and execute `flutter run -d xxxx` xxxYour device number is usually`Android`After selecting the serial number of the phone you can install it in the emulator if your phone is`Android`The system can also select your phone serial number to install

- That means you're a success
- ![Install Flutter plug-in](../../../../assets/expansion/image/flutter/installFlutter12.jpg)

## Contributors 

<div style='display: flex;'>
  <a href="https://github.com/isMrFan" title="Mr. Fan"  target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" />
  </a>
</div>