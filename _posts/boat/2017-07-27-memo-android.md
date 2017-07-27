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

## 已连接，但无法访问网络

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
adb shell "settings put global captive_portal_https_url https://github.com/"
```