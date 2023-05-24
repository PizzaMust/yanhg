---
order: 3
---

# :wrench: 文件修改

如果你按照之前的教程操作的话，应该会得到一个类似的目录结构：

```
.. → 上层文件夹
└── contents → 游戏根目录
    ├── data → 游戏资源
    ├── prop → 游戏版本配置
    ├── *.dll → 游戏的依赖DLL文件
    └── soundvoltex.dll → 游戏的主入口文件
```

::: note
如果你下载的是`懒人包`或其他别人打包好了的游戏，你可能会发现若干个多出来的文件，比如`spice.exe`，`asphyxia*.exe`等。本文的配置方法可能会有所差异，如果继续按照本文的方法配置，在全部完成后可将多余文件删除。
:::

::: warning 注意
游戏文件是从街机上直接提取出来的，不适合在普通电脑上直接运行，所以需要进行修改。

时刻铭记这是一个**街机游戏**，原本设计为在**街机上运行**，请不要用普通电脑游戏的观点去看待。
:::

## 主入口文件的修改

游戏的主入口文件为`soundvoltex.dll`，其包含了大多数游戏运行的代码，当然也包含了部分游戏设置。但是，这些设置都是针对街机实机运行的，所以在普通电脑上需要进行修改。

这些设置都不对外开放，是*硬编码*在文件中的，需要修改的话只能对其反编译分析。还好，有正义人士提前完成了这项工作，并将修改结果做成二进制patch，只需要对`soundvoltex.dll`patch后替换即可。

::: danger
不要使用未经patch的`soundvoltex.dll`来启动游戏！

否则，电脑的电源计划会被破坏，CPU占用率会锁死在100%。

如果悲剧已经发生，你可以参考[故障排除-CPU占用率100%](../trouble-shooting/misc.md#cpu占用率100)来解决。
:::

这里不会提供patch的方式，请自寻。如果你已经获得了渠道，推荐勾选如下选项：

::: tabs#fps

@tab 60Hz 配置

+ [x] Disable power change → 阻止更改电源计划
+ [x] Disable monitor change → 阻止更改多屏配置
+ [x] Force BIO2 (KFC) IO in Valkyrie mode → 在女武神模式下使用老IO
+ Game FPS Target: Default → 游戏目标FPS
+ Note FPS Target: Default → 谱面目标FPS
+ [ ] Force Note FPS Target → 强制使用谱面目标FPS
+ [x] Shared mode WASAPI → WASAPI共享模式
+ [x] Shared mode WASAPI Valkyrie → 女武神模式下使用WASAPI共享模式
+ [ ] Allow non E004 cards → 允许非E004开头的卡号
+ [ ] Unlock All Songs → 歌曲全解
+ [ ] Unlock All Difficulties → 难度全解
+ [ ] Enable S-CRITICAL in Light Start → LIGHT模式也允许打开S判
+ [ ] Uncensor album jackets (for K region only) → 韩区反和谐
+ [ ] Hide all bottom text → 隐藏所有底部文本
+ [ ] Disable subscreen in Valkyrie mode → 女武神模式下禁用副屏
+ [x] Timer freeze → 冻结计时器
+ [x] Premium timer freeze → 冻结Premium Free模式下的计时器
+ [ ] Hide premium guide banner → 隐藏Premium Free打歌时的提示框
+ Premium Time Length: 按喜好

@tab 120Hz 配置

+ [x] Disable power change → 阻止更改电源计划
+ [x] Disable monitor change → 阻止更改多屏配置
+ [x] Force BIO2 (KFC) IO in Valkyrie mode → 在女武神模式下使用老IO
+ Game FPS Target: 120 FPS → 游戏目标FPS
+ Note FPS Target: 120 FPS → 谱面目标FPS
+ [x] Force Note FPS Target → 强制使用谱面目标FPS
+ [x] Shared mode WASAPI → WASAPI共享模式
+ [x] Shared mode WASAPI Valkyrie → 女武神模式下使用WASAPI共享模式
+ [ ] Allow non E004 cards → 允许非E004开头的卡号
+ [ ] Unlock All Songs → 歌曲全解
+ [ ] Unlock All Difficulties → 难度全解
+ [ ] Enable S-CRITICAL in Light Start → LIGHT模式也允许打开S判
+ [ ] Uncensor album jackets (for K region only) → 韩区反和谐
+ [ ] Hide all bottom text → 隐藏所有底部文本
+ [ ] Disable subscreen in Valkyrie mode → 女武神模式下禁用副屏
+ [x] Timer freeze → 冻结计时器
+ [x] Premium timer freeze → 冻结Premium Free模式下的计时器
+ [ ] Hide premium guide banner → 隐藏Premium Free打歌时的提示框
+ Premium Time Length: 按喜好

:::

::: warning 注意
EXCEED GEAR在官机上只有60FPS与120FPS两种刷新率，如果你的屏幕不是60Hz或120Hz，请将刷新率调整为对应的数值。

你也可以尝试将Note FPS Target与Game FPS Target调整为当前屏幕的刷新率，但是是否能解决问题还未经验证。
:::

::: warning 注意
不要在60Hz刷新率下使用120Hz配置，否则会遇到画面顿卡等问题。
:::

::: warning 注意
如果你正在使用`20221018`及之后的版本，**不要**勾选Unlock All Songs/Difficulties，否则会导致考段模式闪退。作为替代，可以用`Asphyxia`来完成歌曲全解。
:::

在修改完成后，将`soundvoltex.dll`替换到原游戏目录下即可。

## 游戏版本文件修改

需要进行修改的文件是`ea3-config.xml`，位于`prop`目录下。

```
.. → 上层文件夹
└── contents → 游戏根目录
    └── prop → 游戏版本配置
        └── ea3-config.xml → 版本配置文件
```

该文件控制游戏显示的版本号，框体类型和区域。你可以任意修改版本号，但一般的做法是改为与游戏真实版本一致。

你需要修改该文件为下面的格式：

::: tabs#fps

@tab 60Hz 配置

``` xml {9-12}
<?xml version='1.0' encoding='UTF-8'?>
<ea3>
    <id>
        <pcbid __type="str">00100240630506070809</pcbid>
        <hardid __type="str">00100240630506070809</hardid>
    </id>
    <soft>
        <model __type="str">KFC</model>
        <dest __type="str">J</dest>
        <spec __type="str">F</spec>
        <rev __type="str">A</rev>
        <ext __type="str">当前游戏版本日期</ext>
    </soft>
```

@tab 120Hz 配置

``` xml {9-12}
<?xml version='1.0' encoding='UTF-8'?>
<ea3>
    <id>
        <pcbid __type="str">00100240630506070809</pcbid>
        <hardid __type="str">00100240630506070809</hardid>
    </id>
    <soft>
        <model __type="str">KFC</model>
        <dest __type="str">J</dest>
        <spec __type="str">G</spec>
        <rev __type="str">A</rev>
        <ext __type="str">当前游戏版本日期</ext>
    </soft>
```

:::

### 版本号释义

![版本号释义图](/assets/version.png)

::: note
如果将地区码改为`A`，游戏界面会变成英文，而不是`J`的日文。
:::

## 补充DLL

前文提到，EXCEED GEAR依赖两个NVIDIA显卡的DLL，一个是`nvcuda.dll`，另一个是`nvcuvid.dll`。

对于N卡用户，可以直接跳过看下一节[配置离线服务器](server.md)，而非N卡玩家则需要手动下载并放置这两个DLL到游戏根目录`contents`下。

你可以随意寻找网站获取这两个dll，比如

[https://cn.dll-files.com/nvcuda.dll.html](https://cn.dll-files.com/nvcuda.dll.html)

[https://cn.dll-files.com/nvcuvid.dll.html](https://cn.dll-files.com/nvcuvid.dll.html)