---
title: Memo - Android
categories: [memo, boat]
date: 2017-04-30 21:02:21 +0800
redirect_from: 
- /memo/android/
---

This is one of my memos about using Android.

**Memos** are used for recording the problems I encountered during programming and its soulutions. I also write down something that is hard to remember for myself.

<!--shoreline-->

{% include toc %}


## Programming

### Must Read
- [Best practices in Android development](https://github.com/futurice/android-best-practices)
- [Ultimate Android Reference](https://github.com/aritraroy/UltimateAndroidReference)

### Some information and tools

- [Android platform information](https://developer.android.com/about/dashboards/index.html)
- [Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/index.html)
    - [Launcher icon generator](https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html)


### JDK

``` sh
# Find the location of JDK
/usr/libexec/java_home -v 1.8
```

[Use Java 8 language features in Android Studio 2](https://developer.android.com/guide/platform/j8-jack.html#configure-gradle)
[Use Java 8 language features in Android Studio 3](https://developer.android.com/studio/write/java8-support.html#disable_jack)

### Android basic knowledge

[Fragments](https://www.tutorialspoint.com/android/android_fragments.htm)

### Gradle

[配置构建](https://developer.android.com/studio/build/index.html)

### BLE

[Official - Bluetooth Low Energy](https://developer.android.com/guide/topics/connectivity/bluetooth-le.html)
[RxAndroidBle](https://github.com/Polidea/RxAndroidBle)

### startActivityForResult

[How to manage `startActivityForResult` on Android?](https://stackoverflow.com/questions/10407159/how-to-manage-startactivityforresult-on-android)

``` java
@Override
protected void onCreate(Bundle savedInstanceState) {
    // ...
    int REQUEST_ENABLE_BT = 111;
    Intent enableBtIntent = new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);
    startActivityForResult(enableBtIntent, REQUEST_ENABLE_BT);
}


@Override
protected void onActivityResult(int requestCode, int resultCode, Intent data) {
    super.onActivityResult(requestCode, resultCode, data);

    if (requestCode == REQUEST_ENABLE_BT) {
        if (resultCode == Activity.RESULT_OK) {
            ble.setText("Bluetooth opened!");
        }
        if (resultCode == RESULT_CANCELED){
            ble.setText(("Bluetooth not opened!"));
        }
    }
}
```


## Use
### 已连接，但无法访问网络

[关于 ANDROID 5.0-7.1.2 网络图标上的感叹号及其解决办法](https://www.noisyfox.io/android-captive-portal.html)

- `Setting` -> `Anbout phone` -> Click `Build number` 7 times (unlock `Developer options`)
- Open `USB debugging` after connect computer (tested with Mac OS X) and your Android device (Google Pixel, Android 7.1.1)
- Authorize action in your Android device for the first time of connection
- Find your SDK tools in your computer. For me, is (`~/Library/Android/sdk/platform-tools`). You shuould install android SDK first. For me, I get this by Android Studio.

``` shell
cd ~/Library/Android/sdk/platform-tools
# Optional, just for convinecnce.
export PATH=`pwd`:$PATH

# Add Vendor number to adb_usb.ini
echo 0x18d1 >> ~/.android/adb_usb.ini

adb kill-server
adb devices
adb shell "settings put global captive_portal_mode 0"
```